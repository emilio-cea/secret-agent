(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{"SfD/":function(t,a,e){"use strict";e.r(a);var n=e("Ow4o"),r=e("vu0Y"),s=e("pLV6");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var u={VueRemarkRoot:r.a},p=function(t){var a=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===o(u[t])&&"function"==typeof u[t].render||"function"==typeof u[t]&&"function"==typeof u[t].options.render?a[t]=u[t]:e[t]=function(){return u[t]}}))},i=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",c={excerpt:null,title:"HumanEmulators"};var m=function(t){t.options[l]&&(t.options[l]=c),s.a.util.defineReactive(t.options,l,c),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},v=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VueRemarkRoot",[e("h1",{attrs:{id:"humanemulators"}},[e("a",{attrs:{href:"#humanemulators","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators")]),e("blockquote",[e("p",[t._v("HumanEmulators are plugins that sit between your script and SecretAgent's mouse/keyboard movements. They translate your clicks and moves into randomized human-like patterns that can pass the bot-blocker checks.")])]),e("p",[t._v("This interface helps you load and retrieve HumanEmulator plugins. It in itself is not a plugin, however we have preloaded it with a basic plugin (see below).")]),e("p",[t._v("This class creates no instances. It is a static singleton containing three methods.")]),e("h2",{attrs:{id:"methods"}},[e("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),e("h3",{attrs:{id:"humanemulatorsgetememulatoridem"}},[e("a",{attrs:{href:"#humanemulatorsgetememulatoridem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.get"),e("em",[t._v("(emulatorId)")])]),e("p",[t._v("Retrieve a specific human emulator from the list of plugins already been loaded.")]),e("h4",{attrs:{id:"arguments"}},[e("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Arguments")]),t._v(":")]),e("ul",[e("li",[t._v("emulatorId "),e("code",{pre:!0},[t._v("string")])])]),e("h4",{attrs:{id:"returns-ihumanemulator"}},[e("a",{attrs:{href:"#returns-ihumanemulator","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Returns")]),e("code",{pre:!0},[t._v("IHumanEmulator")])]),e("h3",{attrs:{id:"humanemulatorsgetrandomemem"}},[e("a",{attrs:{href:"#humanemulatorsgetrandomemem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.getRandom"),e("em",[t._v("()")])]),e("p",[t._v("Retrieve a random human emulator from the list of plugins already loaded.")]),e("h4",{attrs:{id:"returns-ihumanemulator-1"}},[e("a",{attrs:{href:"#returns-ihumanemulator-1","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Returns")]),e("code",{pre:!0},[t._v("IHumanEmulator")])]),e("h3",{attrs:{id:"humanemulatorsloademhumanemulatorem"}},[e("a",{attrs:{href:"#humanemulatorsloademhumanemulatorem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.load"),e("em",[t._v("(humanEmulator)")])]),e("p",[t._v("Load a human emulator into your environment.")]),e("h4",{attrs:{id:"arguments-1"}},[e("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Arguments")]),t._v(":")]),e("ul",[e("li",[t._v("humanEmulator "),e("code",{pre:!0},[t._v("IHumanEmulator")])])]),e("h4",{attrs:{id:"returns-null"}},[e("a",{attrs:{href:"#returns-null","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Returns")]),e("code",{pre:!0},[t._v("null")])]),e("h2",{attrs:{id:"preloaded-plugins"}},[e("a",{attrs:{href:"#preloaded-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Preloaded Plugins")]),e("p",[t._v("We've included a default-human-emulator plugin to get you started. It's pre-loaded into Core is ready to use.")]),e("p",[t._v("To use a specific emulator, pass your chosen ID into "),e("code",{pre:!0},[t._v("handler.createAgent({ humanEmulatorId... )")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Handler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" agent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    humanEmulatorId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default-human-emulator'")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h2",{attrs:{id:"building-your-own-plugins"}},[e("a",{attrs:{href:"#building-your-own-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Building Your Own Plugins")]),e("p",[t._v("Documentation coming soon.")])])}),[],!1,null,null,null);"function"==typeof p&&p(v),"function"==typeof m&&m(v);a.default=v.exports},vu0Y:function(t,a,e){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);