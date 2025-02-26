(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2039,8671],{

/***/ 32039:
/***/ ((module) => {

module.exports = `# Jekyll post header
snippet header
	---
	title: \${1:title}
	layout: post
	date: \${2:date} \${3:hour:minute:second} -05:00
	---

# Image
snippet img
	!\${1:url}(\${2:title}):\${3:link}!

# Table
snippet |
	|\${1}|\${2}

# Link
snippet link
	"\${1:link text}":\${2:url}

# Acronym
snippet (
	(\${1:Expand acronym})\${2}

# Footnote
snippet fn
	[\${1:ref number}] \${3}

	fn\$1. \${2:footnote}
	
`;


/***/ }),

/***/ 88671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.snippetText = __webpack_require__(32039);
exports.scope = "textile";


/***/ })

}]);
//# sourceMappingURL=bundle.8671.js.map