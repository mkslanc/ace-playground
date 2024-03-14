(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4876,3650],{

/***/ 74876:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.snippetText = __webpack_require__(63650);
exports.scope = "lua";


/***/ }),

/***/ 63650:
/***/ ((module) => {

module.exports = `snippet #!
	#!/usr/bin/env lua
	\$1
snippet local
	local \${1:x} = \${2:1}
snippet fun
	function \${1:fname}(\${2:...})
		\${3:-- body}
	end
snippet for
	for \${1:i}=\${2:1},\${3:10} do
		\${4:print(i)}
	end
snippet forp
	for \${1:i},\${2:v} in pairs(\${3:table_name}) do
	   \${4:-- body}
	end
snippet fori
	for \${1:i},\${2:v} in ipairs(\${3:table_name}) do
	   \${4:-- body}
	end
`;


/***/ })

}]);
//# sourceMappingURL=bundle.4876.js.map