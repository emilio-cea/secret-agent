import ICoreConfigureOptions from '@secret-agent/interfaces/ICoreConfigureOptions';
import { LocationTrigger } from '@secret-agent/interfaces/Location';
import Log, { hasBeenLoggedSymbol } from '@secret-agent/commons/Logger';
import Resolvable from '@secret-agent/commons/Resolvable';
import { IHumanEmulatorClass } from '@secret-agent/interfaces/IPluginHumanEmulator';
import { IBrowserEmulatorClass } from '@secret-agent/interfaces/IPluginBrowserEmulator';
import { ICoreExtenderClass } from '@secret-agent/interfaces/IPluginCoreExtender';
import { PluginTypes } from '@secret-agent/interfaces/IPluginTypes';
import DefaultBrowserEmulator from '@secret-agent/default-browser-emulator';
import DefaultHumanEmulator from '@secret-agent/default-human-emulator';
import ConnectionToClient from './server/ConnectionToClient';
import CoreServer from './server';
import CoreProcess from './lib/CoreProcess';
import Session from './lib/Session';
import Tab from './lib/Tab';
import GlobalPool from './lib/GlobalPool';
import Signals = NodeJS.Signals;

const { log } = Log(module);

export { GlobalPool, Tab, Session, LocationTrigger, CoreProcess };

export default class Core {
  public static server = new CoreServer();
  public static readonly connections: ConnectionToClient[] = [];
  public static pluginMap: {
    humanEmulatorsById: { [id: string]: IHumanEmulatorClass };
    browserEmulatorsById: { [id: string]: IBrowserEmulatorClass };
    coreExtenders: ICoreExtenderClass[];
  } = {
    humanEmulatorsById: {
      [DefaultHumanEmulator.id]: DefaultHumanEmulator,
    },
    browserEmulatorsById: {
      [DefaultBrowserEmulator.id]: DefaultBrowserEmulator,
    },
    coreExtenders: [],
  };

  public static onShutdown: () => void;

  public static allowDynamicPluginDependencies = true;
  private static wasManuallyStarted = false;
  private static isClosing: Promise<void>;
  private static isStarting = false;

  public static addConnection(): ConnectionToClient {
    const connection = new ConnectionToClient();
    connection.on('close', () => {
      const idx = this.connections.indexOf(connection);
      if (idx >= 0) this.connections.splice(idx, 1);
      this.checkForAutoShutdown();
    });
    this.connections.push(connection);
    return connection;
  }

  public static use(Plugin: IHumanEmulatorClass | IBrowserEmulatorClass | ICoreExtenderClass) {
    if (Plugin.pluginType === PluginTypes.HumanEmulator) {
      this.pluginMap.humanEmulatorsById[Plugin.id] = Plugin;
    } else if (Plugin.pluginType === PluginTypes.BrowserEmulator) {
      this.pluginMap.browserEmulatorsById[Plugin.id] = Plugin;
    } else if (Plugin.pluginType === PluginTypes.CoreExtender) {
      if (!this.pluginMap.coreExtenders.includes(Plugin)) {
        this.pluginMap.coreExtenders.push(Plugin);
      }
    } else {
      throw new Error('Unknown plugin type');
    }
  }

  public static async start(
    options: ICoreConfigureOptions = {},
    isExplicitlyStarted = true,
  ): Promise<void> {
    if (this.isStarting) return;
    const startLogId = log.info('Core.start', {
      options,
      isExplicitlyStarted,
      sessionId: null,
    });
    this.isClosing = null;
    this.isStarting = true;
    if (isExplicitlyStarted) this.wasManuallyStarted = true;

    const { localProxyPortStart, sessionsDir, maxConcurrentAgentsCount } = options;

    if (maxConcurrentAgentsCount !== undefined)
      GlobalPool.maxConcurrentAgentsCount = maxConcurrentAgentsCount;

    if (localProxyPortStart !== undefined)
      GlobalPool.localProxyPortStart = options.localProxyPortStart;

    if (sessionsDir !== undefined) {
      GlobalPool.sessionsDir = options.sessionsDir;
    }

    await GlobalPool.start();

    await this.server.listen({ port: options.coreServerPort });

    const host = await this.server.address;

    log.info('Core started', {
      coreHost: await Core.server.address,
      sessionId: null,
      parentLogId: startLogId,
    });
    // if started as a subprocess, send back the host
    if (process.send) process.send(host);
  }

  public static async shutdown(force = false): Promise<void> {
    if (this.isClosing) return this.isClosing;

    const isClosing = new Resolvable<void>();
    this.isClosing = isClosing.promise;

    this.isStarting = false;
    const logid = log.info('Core.shutdown');
    const shutDownErrors: Error[] = [];
    try {
      await Promise.all(this.connections.map(x => x.disconnect())).catch(error =>
        shutDownErrors.push(error),
      );
      await GlobalPool.close().catch(error => shutDownErrors.push(error));
      await this.server.close(!force).catch(error => shutDownErrors.push(error));

      this.wasManuallyStarted = false;
      if (Core.onShutdown) Core.onShutdown();
      isClosing.resolve();
    } catch (error) {
      isClosing.reject(error);
    } finally {
      log.info('Core.shutdownComplete', {
        parentLogId: logid,
        sessionId: null,
        errors: shutDownErrors.length ? shutDownErrors : undefined,
      });
    }
  }

  public static logUnhandledError(clientError: Error, fatalError = false): void {
    if (!clientError || clientError[hasBeenLoggedSymbol]) return;
    if (fatalError) {
      log.error('UnhandledError(fatal)', { clientError, sessionId: null });
    } else if (!clientError[hasBeenLoggedSymbol]) {
      log.error('UnhandledErrorOrRejection', { clientError, sessionId: null });
    }
  }

  private static checkForAutoShutdown(): void {
    if (Core.wasManuallyStarted || this.connections.some(x => x.isActive())) return;

    Core.shutdown().catch(error => {
      log.error('Core.autoShutdown', {
        error,
        sessionId: null,
      });
    });
  }
}

['exit', 'SIGTERM', 'SIGINT', 'SIGQUIT'].forEach(name => {
  process.once(name as Signals, async () => {
    await Core.shutdown();
    process.exit(0);
  });
});

process.on('uncaughtExceptionMonitor', async (error: Error) => {
  await Core.logUnhandledError(error, true);

  if (process.env.NODE_ENV !== 'test') await Core.shutdown();
});
process.on('unhandledRejection', async (error: Error) => {
  await Core.logUnhandledError(error, false);
});
