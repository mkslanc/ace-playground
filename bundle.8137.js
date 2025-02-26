(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[8137,8829],{

/***/ 18829:
/***/ ((module) => {

module.exports = `snippet lib
	library \${1};
	\${2}
snippet im
	import '\${1}';
	\${2}
snippet pa
	part '\${1}';
	\${2}
snippet pao
	part of \${1};
	\${2}
snippet main
	void main() {
	  \${1:/* code */}
	}
snippet st
	static \${1}
snippet fi
	final \${1}
snippet re
	return \${1}
snippet br
	break;
snippet th
	throw \${1}
snippet cl
	class \${1:\`Filename("", "untitled")\`} \${2}
snippet imp
	implements \${1}
snippet ext
	extends \${1}
snippet if
	if (\${1:true}) {
	  \${2}
	}
snippet ife
	if (\${1:true}) {
	  \${2}
	} else {
	  \${3}
	}
snippet el
	else
snippet sw
	switch (\${1}) {
	  \${2}
	}
snippet cs
	case \${1}:
	  \${2}
snippet de
	default:
	  \${1}
snippet for
	for (var \${2:i} = 0, len = \${1:things}.length; \$2 < len; \${3:++}\$2) {
	  \${4:\$1[\$2]}
	}
snippet fore
	for (final \${2:item} in \${1:itemList}) {
	  \${3:/* code */}
	}
snippet wh
	while (\${1:/* condition */}) {
	  \${2:/* code */}
	}
snippet dowh
	do {
	  \${2:/* code */}
	} while (\${1:/* condition */});
snippet as
	assert(\${1:/* condition */});
snippet try
	try {
	  \${2}
	} catch (\${1:Exception e}) {
	}
snippet tryf
	try {
	  \${2}
	} catch (\${1:Exception e}) {
	} finally {
	}
`;


/***/ }),

/***/ 20518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.snippetText = __webpack_require__(18829);
exports.scope = "dart";


/***/ })

}]);
//# sourceMappingURL=bundle.8137.js.map