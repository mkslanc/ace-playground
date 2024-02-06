"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[3812],{

/***/ 73812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);
var Behaviour = (__webpack_require__(80596)/* .Behaviour */ .O);

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
//# sourceMappingURL=bundle.3812.js.map