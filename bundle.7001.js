"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[7001],{

/***/ 57001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var Behaviour = (__webpack_require__(75684)/* .Behaviour */ .Q);

var Mode = function() {
    this.HighlightRules = TextHighlightRules;
    this.$behaviour = new Behaviour();
};

oop.inherits(Mode, TextMode);

(function() {
    this.type = "text";
    this.getNextLineIndent = function(state, line, tab) {
        return '';
    };
    this.$id = "ace/mode/plain_text";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.7001.js.map