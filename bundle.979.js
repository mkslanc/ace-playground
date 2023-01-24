/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 411:
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_468__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_468__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_468__.o(definition, key) && !__nested_webpack_require_468__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_468__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_468__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_468__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_468__.d(__webpack_exports__, {
  "ServiceManager": () => (/* binding */ ServiceManager)
});

;// CONCATENATED MODULE: ./utils.ts
function mergeObjects(obj1, obj2) {
    if (!obj1)
        return obj2;
    if (!obj2)
        return obj1;
    const mergedObjects = {};
    for (const key of [...Object.keys(obj1), ...Object.keys(obj2)]) {
        if (obj1[key] && obj2[key]) {
            if (Array.isArray(obj1[key])) {
                mergedObjects[key] = obj1[key].concat(obj2[key]);
            }
            else {
                mergedObjects[key] = mergeObjects(obj1[key], obj2[key]);
            }
        }
        else {
            mergedObjects[key] = obj1[key] ?? obj2[key];
        }
    }
    return mergedObjects;
}

;// CONCATENATED MODULE: ./message-types.ts
class BaseMessage {
    sessionId;
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
}
class InitMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.init;
    mode;
    options;
    value;
    version;
    constructor(sessionId, value, version, mode, options) {
        super(sessionId);
        this.version = version;
        this.options = options;
        this.mode = mode;
        this.value = value;
    }
}
class FormatMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.format;
    value;
    format;
    constructor(sessionId, value, format) {
        super(sessionId);
        this.value = value;
        this.format = format;
    }
}
class CompleteMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.complete;
    value;
    constructor(sessionId, value) {
        super(sessionId);
        this.value = value;
    }
}
class ResolveCompletionMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.resolveCompletion;
    value;
    constructor(sessionId, value) {
        super(sessionId);
        this.value = value;
    }
}
class HoverMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.hover;
    value;
    constructor(sessionId, value) {
        super(sessionId);
        this.value = value;
    }
}
class ValidateMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.validate;
    constructor(sessionId) {
        super(sessionId);
    }
}
class ChangeMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.change;
    value;
    version;
    constructor(sessionId, value, version) {
        super(sessionId);
        this.value = value;
        this.version = version;
    }
}
class DeltasMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.applyDelta;
    value;
    version;
    constructor(sessionId, value, version) {
        super(sessionId);
        this.value = value;
        this.version = version;
    }
}
class ChangeModeMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.changeMode;
    mode;
    value;
    constructor(sessionId, value, mode) {
        super(sessionId);
        this.value = value;
        this.mode = mode;
    }
}
class ChangeOptionsMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.changeOptions;
    options;
    merge;
    constructor(sessionId, options, merge = false) {
        super(sessionId);
        this.options = options;
        this.merge = merge;
    }
}
class DisposeMessage extends (/* unused pure expression or super */ null && (0)) {
    type = MessageType.dispose;
    constructor(sessionId) {
        super(sessionId);
    }
}
class GlobalOptionsMessage {
    type = MessageType.globalOptions;
    serviceName;
    options;
    merge;
    constructor(serviceName, options, merge) {
        this.serviceName = serviceName;
        this.options = options;
        this.merge = merge;
    }
}
var MessageType;
(function (MessageType) {
    MessageType[MessageType["init"] = 0] = "init";
    MessageType[MessageType["format"] = 1] = "format";
    MessageType[MessageType["complete"] = 2] = "complete";
    MessageType[MessageType["resolveCompletion"] = 3] = "resolveCompletion";
    MessageType[MessageType["change"] = 4] = "change";
    MessageType[MessageType["hover"] = 5] = "hover";
    MessageType[MessageType["validate"] = 6] = "validate";
    MessageType[MessageType["applyDelta"] = 7] = "applyDelta";
    MessageType[MessageType["changeMode"] = 8] = "changeMode";
    MessageType[MessageType["changeOptions"] = 9] = "changeOptions";
    MessageType[MessageType["dispose"] = 10] = "dispose";
    MessageType[MessageType["globalOptions"] = 11] = "globalOptions";
})(MessageType || (MessageType = {}));

;// CONCATENATED MODULE: ./services/service-manager.ts


class ServiceManager {
    $services = {};
    $sessionIDToMode = {};
    constructor(ctx) {
        let doValidation = (document, serviceInstance) => {
            serviceInstance ??= this.getServiceInstance(document.uri);
            if (!serviceInstance)
                return;
            let postMessage = {
                "type": MessageType.validate,
            };
            let sessionIDList = Object.keys(serviceInstance.documents);
            for (let sessionID of sessionIDList) {
                serviceInstance.doValidation({ uri: sessionID }).then((result) => {
                    postMessage["sessionId"] = sessionID;
                    postMessage["value"] = result;
                    ctx.postMessage(postMessage);
                });
            }
        };
        ctx.addEventListener("message", async (ev) => {
            let message = ev.data;
            let sessionID = message.sessionId;
            let version = message.version;
            let postMessage = {
                "type": message.type,
                "sessionId": sessionID,
            };
            let serviceInstance = this.getServiceInstance(sessionID);
            let documentIdentifier = {
                uri: sessionID,
                version: version
            };
            switch (message["type"]) {
                case MessageType.format:
                    postMessage["value"] = serviceInstance?.format(documentIdentifier, message.value, message.format);
                    break;
                case MessageType.complete:
                    postMessage["value"] = await serviceInstance?.doComplete(documentIdentifier, message.value);
                    break;
                case MessageType.resolveCompletion:
                    postMessage["value"] = await serviceInstance?.doResolve(message.value);
                    break;
                case MessageType.change:
                    serviceInstance?.setValue(documentIdentifier, message.value);
                    doValidation(documentIdentifier, serviceInstance);
                    break;
                case MessageType.applyDelta:
                    serviceInstance?.applyDeltas(documentIdentifier, message.value);
                    doValidation(documentIdentifier, serviceInstance);
                    break;
                case MessageType.hover:
                    postMessage["value"] = await serviceInstance?.doHover(documentIdentifier, message.value);
                    break;
                case MessageType.validate:
                    postMessage["value"] = await serviceInstance?.doValidation(documentIdentifier);
                    break;
                case MessageType.init: //this should be first message
                    await this.addDocument(documentIdentifier, message.value, message.mode, message.options);
                    doValidation(documentIdentifier);
                    break;
                case MessageType.changeMode:
                    await this.changeDocumentMode(documentIdentifier, message.value, message.mode, message.options);
                    doValidation(documentIdentifier, serviceInstance);
                    break;
                case MessageType.changeOptions:
                    serviceInstance?.setOptions(sessionID, message.options);
                    doValidation(documentIdentifier, serviceInstance);
                    break;
                case MessageType.dispose:
                    this.removeDocument(documentIdentifier);
                    break;
                case MessageType.globalOptions:
                    this.setGlobalOptions(message.serviceName, message.options, message.merge);
                    break;
            }
            ctx.postMessage(postMessage);
        });
    }
    static async $initServiceInstance(service) {
        let module = await service.module();
        service.serviceInstance = new module[service.className](service.modes);
        service.serviceInstance.setGlobalOptions(service.options);
    }
    async $getServiceInstanceByMode(mode) {
        let service = this.findServiceByMode(mode);
        if (!service)
            return;
        if (!service.serviceInstance)
            await ServiceManager.$initServiceInstance(service);
        return service.serviceInstance;
    }
    setGlobalOptions(serviceName, options, merge = false) {
        let service = this.$services[serviceName];
        if (!service)
            return;
        service.options = merge ? mergeObjects(options, service.options) : options;
        if (service.serviceInstance) {
            service.serviceInstance.setGlobalOptions(service.options);
        }
    }
    async addDocument(documentIdentifier, documentValue, mode, options) {
        if (!mode || !/^ace\/mode\//.test(mode))
            return;
        mode = mode.replace("ace/mode/", "");
        let serviceInstance = await this.$getServiceInstanceByMode(mode);
        if (!serviceInstance)
            return;
        let documentItem = {
            uri: documentIdentifier.uri,
            version: documentIdentifier.version,
            languageId: mode,
            text: documentValue
        };
        serviceInstance.addDocument(documentItem);
        this.$sessionIDToMode[documentIdentifier.uri] = mode;
    }
    async changeDocumentMode(documentIdentifier, value, mode, options) {
        this.removeDocument(documentIdentifier);
        await this.addDocument(documentIdentifier, value, mode, options);
    }
    removeDocument(document) {
        let service = this.getServiceInstance(document.uri);
        if (service) {
            service.removeDocument(document);
            delete this.$sessionIDToMode[document.uri];
        }
    }
    getServiceInstance(sessionID) {
        let mode = this.$sessionIDToMode[sessionID];
        let service = this.findServiceByMode(mode);
        if (!mode || !service?.serviceInstance)
            return; //TODO:
        return service.serviceInstance;
    }
    findServiceByMode(mode) {
        return Object.values(this.$services).find((el) => {
            let extensions = el.modes.split('|');
            if (extensions.includes(mode))
                return el;
        });
    }
    registerService(name, service) {
        this.$services[name] = service;
    }
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});
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