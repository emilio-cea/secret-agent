import StateMachine from 'awaited-dom/base/StateMachine';
import Resolvable from '@secret-agent/commons/Resolvable';
import IDownload from '@secret-agent/interfaces/IDownload';
import CoreTab from './CoreTab';

const { getState, setState } = StateMachine<Download, IState>();

interface IState {
  coreTab: Promise<CoreTab>;
  downloadPromise: Resolvable<void>;
  complete: boolean;
}

export default class Download {
  id: string;
  url: string;
  path: string;
  suggestedFilename: string;

  progress: number;
  totalBytes: number;
  canceled: boolean;

  get complete(): boolean {
    return getState(this).complete;
  }

  set complete(value) {
    setState(this, { complete: value });
    if (value) getState(this).downloadPromise.resolve();
  }

  waitForFinished(): Promise<void> {
    return getState(this).downloadPromise.promise;
  }

  async saveAs(): Promise<Buffer> {
    // todo: add streaming ability
  }
}

export function createDownload(coreTab: Promise<CoreTab>, data: IDownload): Download {
  const download = new Download();
  Object.assign(download, data);
  setState(download, {
    coreTab,
    downloadPromise: new Resolvable<void>(),
  });
  return download;
}
