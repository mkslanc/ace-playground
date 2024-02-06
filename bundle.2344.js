"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2344],{

/***/ 22344:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var CsoundOrchestraHighlightRules = (__webpack_require__(27700)/* .CsoundOrchestraHighlightRules */ ._);

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
//# sourceMappingURL=bundle.2344.js.map