"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[8272],{

/***/ 8272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
// defines the parent mode
var HtmlMode = (__webpack_require__(62656).Mode);
var MatchingBraceOutdent = (__webpack_require__(27884).MatchingBraceOutdent);
var HtmlFoldMode = (__webpack_require__(77440)/* .FoldMode */ .W);

// defines the language specific highlighters and folding rules
var CurlyHighlightRules = (__webpack_require__(18024)/* .CurlyHighlightRules */ .a);

var Mode = function() {
    HtmlMode.call(this);
    this.HighlightRules = CurlyHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.foldingRules = new HtmlFoldMode();
};
oop.inherits(Mode, HtmlMode);

(function() {
    this.$id = "ace/mode/curly";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 18024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var HtmlHighlightRules = (__webpack_require__(65312)/* .HtmlHighlightRules */ .v);


var CurlyHighlightRules = function() {
    HtmlHighlightRules.call(this);

    this.$rules["start"].unshift({
        token: "variable",
        regex: "{{",
        push: "curly-start"
    });

    this.$rules["curly-start"] = [{
        token: "variable",
        regex: "}}",
        next: "pop"
    }];

    this.normalizeRules();
};

oop.inherits(CurlyHighlightRules, HtmlHighlightRules);

exports.a = CurlyHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.8272.js.map