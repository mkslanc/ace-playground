(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2076,7316],{

/***/ 92076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.snippetText = __webpack_require__(87316);
exports.scope = "drools";


/***/ }),

/***/ 87316:
/***/ ((module) => {

module.exports = `
snippet rule
	rule "\${1?:rule_name}"
	when
		\${2:// when...} 
	then
		\${3:// then...}
	end

snippet query
	query \${1?:query_name}
		\${2:// find} 
	end
	
snippet declare
	declare \${1?:type_name}
		\${2:// attributes} 
	end

`;


/***/ })

}]);
//# sourceMappingURL=bundle.2076.js.map