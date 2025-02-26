"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[6104],{

/***/ 55606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var BaseFoldMode = (__webpack_require__(51358).FoldMode);
var Range = (__webpack_require__(91902)/* .Range */ .Q);

var FoldMode = exports.l = function(levels, flag) {
	this.regExpList = levels;
	this.flag = flag;
	this.foldingStartMarker = RegExp("^(" + levels.join("|") + ")", this.flag);
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var start = {row: row, column: line.length};

        var regList = this.regExpList;
        for (var i = 1; i <= regList.length; i++) {
            var re = RegExp("^(" + regList.slice(0, i).join("|") + ")", this.flag);
            if (re.test(line))
                break;
        }

        for (var l = session.getLength(); ++row < l; ) {
            line = session.getLine(row);
            if (re.test(line))
                break;
        }
        if (row == start.row + 1)
            return;
        return new Range(start.row, start.column, row - 1, line.length);
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 56104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var HighlightRules = (__webpack_require__(62867)/* .DiffHighlightRules */ .l);
var FoldMode = (__webpack_require__(55606)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = HighlightRules;
    this.foldingRules = new FoldMode(["diff", "@@|\\*{5}"], "i");
};
oop.inherits(Mode, TextMode);

(function() {

    this.$id = "ace/mode/diff";
    this.snippetFileId = "ace/snippets/diff";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 62867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var DiffHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [{
                regex: "^(?:\\*{15}|={67}|-{3}|\\+{3})$",
                token: "punctuation.definition.separator.diff",
                "name": "keyword"
            }, { //diff.range.unified
                regex: "^(@@)(\\s*.+?\\s*)(@@)(.*)$",
                token: [
                    "constant",
                    "constant.numeric",
                    "constant",
                    "comment.doc.tag"
                ]
            }, { //diff.range.normal
                regex: "^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",
                token: [
                    "constant.numeric",
                    "punctuation.definition.range.diff",
                    "constant.function",
                    "constant.numeric",
                    "punctuation.definition.range.diff",
                    "invalid"
                ],
                "name": "meta."
            }, {
                regex: "^(\\-{3}|\\+{3}|\\*{3})( .+)$",
                token: [
                    "constant.numeric",
                    "meta.tag"
                ]
            }, { // added
                regex: "^([!+>])(.*?)(\\s*)$",
                token: [
                    "support.constant",
                    "text",
                    "invalid"
                ]
            }, { // removed
                regex: "^([<\\-])(.*?)(\\s*)$",
                token: [
                    "support.function",
                    "string",
                    "invalid"
                ]
            }, {
                regex: "^(diff)(\\s+--\\w+)?(.+?)( .+)?$",
                token: ["variable", "variable", "keyword", "variable"]
            }, {
                regex: "^Index.+$",
                token: "variable"
            }, {
                regex: "^\\s+$",
                token: "text"
            }, {
                regex: "\\s*$",
                token: "invalid"
            }, {
                defaultToken: "invisible",
                caseInsensitive: true
            }
        ]
    };
};

oop.inherits(DiffHighlightRules, TextHighlightRules);

exports.l = DiffHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.6104.js.map