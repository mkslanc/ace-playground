/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 411:
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else { var o, s; }}(self,(()=>(()=>{"use strict";var e,t={d:(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};function o(e,t){if(!e)return t;if(!t)return e;const s={};for(const a of[...Object.keys(e),...Object.keys(t)])e[a]&&t[a]?Array.isArray(e[a])?s[a]=e[a].concat(t[a]):s[a]=o(e[a],t[a]):s[a]=e[a]??t[a];return s}t.r(s),t.d(s,{ServiceManager:()=>a}),function(e){e[e.init=0]="init",e[e.format=1]="format",e[e.complete=2]="complete",e[e.resolveCompletion=3]="resolveCompletion",e[e.change=4]="change",e[e.hover=5]="hover",e[e.validate=6]="validate",e[e.applyDelta=7]="applyDelta",e[e.changeMode=8]="changeMode",e[e.changeOptions=9]="changeOptions",e[e.dispose=10]="dispose",e[e.globalOptions=11]="globalOptions"}(e||(e={}));class a{$services={};$sessionIDToMode={};constructor(t){let s=(s,o)=>{if(o??=this.getServiceInstance(s.uri),!o)return;let a={type:e.validate},i=Object.keys(o.documents);for(let e of i)o.doValidation({uri:e}).then((s=>{a.sessionId=e,a.value=s,t.postMessage(a)}))};t.addEventListener("message",(async o=>{let a=o.data,i=a.sessionId,n=a.version,r={type:a.type,sessionId:i},c=this.getServiceInstance(i),l={uri:i,version:n};switch(a.type){case e.format:r.value=c?.format(l,a.value,a.format);break;case e.complete:r.value=await(c?.doComplete(l,a.value));break;case e.resolveCompletion:r.value=await(c?.doResolve(a.value));break;case e.change:c?.setValue(l,a.value),s(l,c);break;case e.applyDelta:c?.applyDeltas(l,a.value),s(l,c);break;case e.hover:r.value=await(c?.doHover(l,a.value));break;case e.validate:r.value=await(c?.doValidation(l));break;case e.init:await this.addDocument(l,a.value,a.mode,a.options),s(l);break;case e.changeMode:await this.changeDocumentMode(l,a.value,a.mode,a.options),s(l,c);break;case e.changeOptions:c?.setOptions(i,a.options),s(l,c);break;case e.dispose:this.removeDocument(l);break;case e.globalOptions:this.setGlobalOptions(a.serviceName,a.options,a.merge)}t.postMessage(r)}))}static async $initServiceInstance(e){let t=await e.module();e.serviceInstance=new t[e.className](e.modes),e.options&&e.serviceInstance.setGlobalOptions(e.options)}async $getServiceInstanceByMode(e){let t=this.findServiceByMode(e);if(t)return t.serviceInstance||await a.$initServiceInstance(t),t.serviceInstance}setGlobalOptions(e,t,s=!1){let a=this.$services[e];a&&(a.options=s?o(t,a.options):t,a.serviceInstance&&a.serviceInstance.setGlobalOptions(a.options))}async addDocument(e,t,s,o){if(!s||!/^ace\/mode\//.test(s))return;s=s.replace("ace/mode/","");let a=await this.$getServiceInstanceByMode(s);if(!a)return;let i={uri:e.uri,version:e.version,languageId:s,text:t};a.addDocument(i),this.$sessionIDToMode[e.uri]=s}async changeDocumentMode(e,t,s,o){this.removeDocument(e),await this.addDocument(e,t,s,o)}removeDocument(e){let t=this.getServiceInstance(e.uri);t&&(t.removeDocument(e),delete this.$sessionIDToMode[e.uri])}getServiceInstance(e){let t=this.$sessionIDToMode[e],s=this.findServiceByMode(t);if(t&&s?.serviceInstance)return s.serviceInstance}findServiceByMode(e){return Object.values(this.$services).find((t=>{if(t.modes.split("|").includes(e))return t}))}registerService(e,t){this.$services[e]=t}}return s})()));
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