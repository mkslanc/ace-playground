(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[1398,9736],{

/***/ 1398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.snippetText = __webpack_require__(49736);
exports.scope = "haml";


/***/ }),

/***/ 49736:
/***/ ((module) => {

module.exports = `snippet t
	%table
		%tr
			%th
				\${1:headers}
		%tr
			%td
				\${2:headers}
snippet ul
	%ul
		%li
			\${1:item}
		%li
snippet =rp
	= render :partial => '\${1:partial}'
snippet =rpl
	= render :partial => '\${1:partial}', :locals => {}
snippet =rpc
	= render :partial => '\${1:partial}', :collection => @\$1

`;


/***/ })

}]);
//# sourceMappingURL=bundle.1398.js.map