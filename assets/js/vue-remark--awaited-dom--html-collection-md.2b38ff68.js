(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UQSp:function(e,t,i){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},XdGT:function(e,t,i){"use strict";i.r(t);var r=i("KHd+"),s=i("UQSp"),n=i("oCYn");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var o={VueRemarkRoot:s.a},d=function(e){var t=e.options.components=e.options.components||{},i=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===a(o[e])&&"function"==typeof o[e].render||"function"==typeof o[e]&&"function"==typeof o[e].options.render?t[e]=o[e]:i[e]=function(){return o[e]}}))},c=n.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",u={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> HTMLCollection"};var p=function(e){e.options[v]&&(e.options[v]=u),n.a.util.defineReactive(e.options,v,u),e.options.computed=c.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},m=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("VueRemarkRoot",[i("h1",{attrs:{id:"awaiteddom-spanspan-htmlcollection"}},[i("a",{attrs:{href:"#awaiteddom-spanspan-htmlcollection","aria-hidden":"true"}},[e._v("#")]),i("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),i("span",[e._v("/")]),e._v(" HTMLCollection")]),i("div",{staticClass:"overview"},[e._v("The "),i("strong",[i("code",[e._v("HTMLCollection")])]),e._v(" interface represents a generic collection (array-like object similar to "),i("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Functions/arguments",title:"arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function."}},[i("code",[e._v("arguments")])]),e._v(") of elements (in document order) and offers methods and properties for selecting from the list.")]),i("h2",{attrs:{id:"properties"}},[i("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),i("h3",{attrs:{id:"length-div-classspecsiw3cidiv-length"}},[i("a",{attrs:{href:"#length-div-classspecsiw3cidiv-length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),i("div",{staticClass:"specs"},[i("i",[e._v("W3C")])]),e._v(" {#length}")]),i("p",[e._v("Returns the number of items in the collection.")]),i("h4",{attrs:{id:"type-number"}},[i("a",{attrs:{href:"#type-number","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Type")]),e._v(": "),i("code",{pre:!0},[e._v("number")])]),i("h3",{attrs:{id:"length-div-classspecsiw3cidiv-length-1"}},[i("a",{attrs:{href:"#length-div-classspecsiw3cidiv-length-1","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),i("div",{staticClass:"specs"},[i("i",[e._v("W3C")])]),e._v(" {#length}")]),i("p",[e._v("Needs content.")]),i("h4",{attrs:{id:"type-number-1"}},[i("a",{attrs:{href:"#type-number-1","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Type")]),e._v(": "),i("code",{pre:!0},[e._v("number")])]),i("h2",{attrs:{id:"methods"}},[i("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),i("h3",{attrs:{id:"itemargs-div-classspecsiw3cidiv-item"}},[i("a",{attrs:{href:"#itemargs-div-classspecsiw3cidiv-item","aria-hidden":"true"}},[e._v("#")]),e._v(".item"),i("em",[e._v("(...args)")]),i("div",{staticClass:"specs"},[i("i",[e._v("W3C")])]),e._v(" {#item}")]),i("p",[e._v("Returns the specific node at the given zero-based "),i("code",[e._v("index")]),e._v(" into the list. Returns "),i("code",[e._v("null")]),e._v(" if the "),i("code",[e._v("index\n")]),e._v(" is out of range.")]),i("h4",{attrs:{id:"arguments"}},[i("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Arguments")]),e._v(":")]),i("ul",[i("li",[e._v("none")])]),i("h4",{attrs:{id:"returns-promisevoid-true"}},[i("a",{attrs:{href:"#returns-promisevoid-true","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Returns")]),e._v(": "),i("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),i("h3",{attrs:{id:"nameditemargs-div-classspecsiw3cidiv-nameditem"}},[i("a",{attrs:{href:"#nameditemargs-div-classspecsiw3cidiv-nameditem","aria-hidden":"true"}},[e._v("#")]),e._v(".namedItem"),i("em",[e._v("(...args)")]),i("div",{staticClass:"specs"},[i("i",[e._v("W3C")])]),e._v(" {#namedItem}")]),i("p",[e._v("Returns the specific node whose ID or, as a fallback, name matches the string specified by "),i("code",[e._v("name")]),e._v(". Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the "),i("code",[e._v("name")]),e._v(" attribute. Returns "),i("code",[e._v("null\n")]),e._v(" if no node exists by the given name.")]),i("h4",{attrs:{id:"arguments-1"}},[i("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Arguments")]),e._v(":")]),i("ul",[i("li",[e._v("none")])]),i("h4",{attrs:{id:"returns-promisevoid-true-1"}},[i("a",{attrs:{href:"#returns-promisevoid-true-1","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Returns")]),e._v(": "),i("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")]),i("h3",{attrs:{id:"itemargs-div-classspecsiw3cidiv-item-1"}},[i("a",{attrs:{href:"#itemargs-div-classspecsiw3cidiv-item-1","aria-hidden":"true"}},[e._v("#")]),e._v(".item"),i("em",[e._v("(...args)")]),i("div",{staticClass:"specs"},[i("i",[e._v("W3C")])]),e._v(" {#item}")]),i("p",[e._v("Needs content.")]),i("h4",{attrs:{id:"arguments-2"}},[i("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Arguments")]),e._v(":")]),i("ul",[i("li",[e._v("none")])]),i("h4",{attrs:{id:"returns-promisevoid-true-2"}},[i("a",{attrs:{href:"#returns-promisevoid-true-2","aria-hidden":"true"}},[e._v("#")]),i("strong",[e._v("Returns")]),e._v(": "),i("code",{pre:!0},[e._v("Promise<void>")]),e._v(" true")])])}),[],!1,null,null,null);"function"==typeof d&&d(m),"function"==typeof p&&p(m);t.default=m.exports}}]);