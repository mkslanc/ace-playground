/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 411:
/***/ ((module) => {

!function(e,s){if(true)module.exports=s();else { var a, t; }}(self,(()=>(()=>{"use strict";var e={305:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.MessageType=s.GlobalOptionsMessage=s.DisposeMessage=s.ChangeOptionsMessage=s.ChangeModeMessage=s.DeltasMessage=s.ChangeMessage=s.ValidateMessage=s.HoverMessage=s.ResolveCompletionMessage=s.CompleteMessage=s.FormatMessage=s.InitMessage=s.BaseMessage=void 0;class t{sessionId;constructor(e){this.sessionId=e}}var a;s.BaseMessage=t,s.InitMessage=class extends t{type=a.init;mode;options;value;version;constructor(e,s,t,a,o){super(e),this.version=t,this.options=o,this.mode=a,this.value=s}},s.FormatMessage=class extends t{type=a.format;value;format;constructor(e,s,t){super(e),this.value=s,this.format=t}},s.CompleteMessage=class extends t{type=a.complete;value;constructor(e,s){super(e),this.value=s}},s.ResolveCompletionMessage=class extends t{type=a.resolveCompletion;value;constructor(e,s){super(e),this.value=s}},s.HoverMessage=class extends t{type=a.hover;value;constructor(e,s){super(e),this.value=s}},s.ValidateMessage=class extends t{type=a.validate;constructor(e){super(e)}},s.ChangeMessage=class extends t{type=a.change;value;version;constructor(e,s,t){super(e),this.value=s,this.version=t}},s.DeltasMessage=class extends t{type=a.applyDelta;value;version;constructor(e,s,t){super(e),this.value=s,this.version=t}},s.ChangeModeMessage=class extends t{type=a.changeMode;mode;value;constructor(e,s,t){super(e),this.value=s,this.mode=t}},s.ChangeOptionsMessage=class extends t{type=a.changeOptions;options;merge;constructor(e,s,t=!1){super(e),this.options=s,this.merge=t}},s.DisposeMessage=class extends t{type=a.dispose;constructor(e){super(e)}},s.GlobalOptionsMessage=class{type=a.globalOptions;serviceName;options;merge;constructor(e,s,t){this.serviceName=e,this.options=s,this.merge=t}},function(e){e[e.init=0]="init",e[e.format=1]="format",e[e.complete=2]="complete",e[e.resolveCompletion=3]="resolveCompletion",e[e.change=4]="change",e[e.hover=5]="hover",e[e.validate=6]="validate",e[e.applyDelta=7]="applyDelta",e[e.changeMode=8]="changeMode",e[e.changeOptions=9]="changeOptions",e[e.dispose=10]="dispose",e[e.globalOptions=11]="globalOptions"}(a=s.MessageType||(s.MessageType={}))},6508:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.mergeObjects=void 0,s.mergeObjects=function e(s,t){if(!s)return t;if(!t)return s;const a={};for(const o of[...Object.keys(s),...Object.keys(t)])s[o]&&t[o]?Array.isArray(s[o])?a[o]=s[o].concat(t[o]):a[o]=e(s[o],t[o]):a[o]=s[o]??t[o];return a}}},s={};function t(a){var o=s[a];if(void 0!==o)return o.exports;var i=s[a]={exports:{}};return e[a](i,i.exports,t),i.exports}var a={};return(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.ServiceManager=void 0;const s=t(6508),o=t(305);class i{$services={};$sessionIDToMode={};constructor(e){let s=(s,t)=>{if(t??=this.getServiceInstance(s.uri),!t)return;let a={type:o.MessageType.validate},i=Object.keys(t.documents);for(let s of i)t.doValidation({uri:s}).then((t=>{a.sessionId=s,a.value=t,e.postMessage(a)}))};e.addEventListener("message",(async t=>{let a=t.data,i=a.sessionId,n=a.version,r={type:a.type,sessionId:i},c=this.getServiceInstance(i),l={uri:i,version:n};switch(a.type){case o.MessageType.format:r.value=c?.format(l,a.value,a.format);break;case o.MessageType.complete:r.value=await(c?.doComplete(l,a.value));break;case o.MessageType.resolveCompletion:r.value=await(c?.doResolve(a.value));break;case o.MessageType.change:c?.setValue(l,a.value),s(l,c);break;case o.MessageType.applyDelta:c?.applyDeltas(l,a.value),s(l,c);break;case o.MessageType.hover:r.value=await(c?.doHover(l,a.value));break;case o.MessageType.validate:r.value=await(c?.doValidation(l));break;case o.MessageType.init:await this.addDocument(l,a.value,a.mode,a.options),s(l);break;case o.MessageType.changeMode:await this.changeDocumentMode(l,a.value,a.mode,a.options),s(l,c);break;case o.MessageType.changeOptions:c?.setOptions(i,a.options),s(l,c);break;case o.MessageType.dispose:this.removeDocument(l);break;case o.MessageType.globalOptions:this.setGlobalOptions(a.serviceName,a.options,a.merge)}e.postMessage(r)}))}static async $initServiceInstance(e){let s=await e.module();e.serviceInstance=new s[e.className](e.modes),e.options&&e.serviceInstance.setGlobalOptions(e.options)}async $getServiceInstanceByMode(e){let s=this.findServiceByMode(e);if(s)return s.serviceInstance||await i.$initServiceInstance(s),s.serviceInstance}setGlobalOptions(e,t,a=!1){let o=this.$services[e];o&&(o.options=a?(0,s.mergeObjects)(t,o.options):t,o.serviceInstance&&o.serviceInstance.setGlobalOptions(o.options))}async addDocument(e,s,t,a){if(!t||!/^ace\/mode\//.test(t))return;t=t.replace("ace/mode/","");let o=await this.$getServiceInstanceByMode(t);if(!o)return;let i={uri:e.uri,version:e.version,languageId:t,text:s};o.addDocument(i),this.$sessionIDToMode[e.uri]=t}async changeDocumentMode(e,s,t,a){this.removeDocument(e),await this.addDocument(e,s,t,a)}removeDocument(e){let s=this.getServiceInstance(e.uri);s&&(s.removeDocument(e),delete this.$sessionIDToMode[e.uri])}getServiceInstance(e){let s=this.$sessionIDToMode[e],t=this.findServiceByMode(s);if(s&&t?.serviceInstance)return t.serviceInstance}findServiceByMode(e){return Object.values(this.$services).find((s=>{if(s.modes.split("|").includes(e))return s}))}registerService(e,s){this.$services[e]=s}}e.ServiceManager=i})(),a})()));
//# sourceMappingURL=service-manager.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "bundle." + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			979: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var ace_linters_build_service_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var ace_linters_build_service_manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ace_linters_build_service_manager__WEBPACK_IMPORTED_MODULE_0__);

var manager = new ace_linters_build_service_manager__WEBPACK_IMPORTED_MODULE_0__.ServiceManager(self);
manager.registerService("html", {
    module: function () { return __webpack_require__.e(/* import() */ 264).then(__webpack_require__.t.bind(__webpack_require__, 264, 23)); },
    className: "HtmlService",
    modes: "html"
});
manager.registerService("css", {
    module: function () { return __webpack_require__.e(/* import() */ 875).then(__webpack_require__.t.bind(__webpack_require__, 875, 23)); },
    className: "CssService",
    modes: "css"
});
manager.registerService("typescript", {
    module: function () { return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.t.bind(__webpack_require__, 12, 23)); },
    className: "TypescriptService",
    modes: "typescript|javascript|tsx|jsx",
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.979.js.map