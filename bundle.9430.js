"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[9430],{

/***/ 39430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
// defines the parent mode
var HtmlMode = (__webpack_require__(32234).Mode);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);
var HtmlFoldMode = (__webpack_require__(6944).FoldMode);

// defines the language specific highlighters and folding rules
var CurlyHighlightRules = (__webpack_require__(19857)/* .CurlyHighlightRules */ .z);

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

/***/ 19857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);


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

exports.z = CurlyHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.9430.js.map