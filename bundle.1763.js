"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[1763],{

/***/ 11763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var CsoundOrchestraHighlightRules = (__webpack_require__(13928)/* .CsoundOrchestraHighlightRules */ .f);

var Mode = function() {
    this.HighlightRules = CsoundOrchestraHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = ";";
    this.blockComment = {start: "/*", end: "*/"};

    this.$id = "ace/mode/csound_orchestra";
    this.snippetFileId = "ace/snippets/csound_orchestra";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.1763.js.map