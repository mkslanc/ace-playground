"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[7272],{

/***/ 40968:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var Range = (__webpack_require__(82080)/* .Range */ .E);
var BaseFoldMode = (__webpack_require__(82896).FoldMode);

var FoldMode = exports.W = function() {
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.foldingStartMarker = /^\s*\[([^\])]*)]\s*(?:$|[;#])/;

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var re = this.foldingStartMarker;
        var line = session.getLine(row);
        
        var m = line.match(re);
        
        if (!m) return;
        
        var startName = m[1] + ".";
        
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            line = session.getLine(row);
            if (/^\s*$/.test(line))
                continue;
            m = line.match(re);
            if (m && m[1].lastIndexOf(startName, 0) !== 0)
                break;

            endRow = row;
        }

        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 57272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var TomlHighlightRules = (__webpack_require__(63880)/* .TomlHighlightRules */ .k);
var FoldMode = (__webpack_require__(40968)/* .FoldMode */ .W);

var Mode = function() {
    this.HighlightRules = TomlHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/toml";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 63880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var TomlHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
        "constant.language.boolean": "true|false"
    }, "identifier");

    var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b";

    this.$rules = {
    "start": [
        {
            token: "comment.toml",
            regex: /#.*$/
        },
        {
            token : "string",
            regex : '"(?=.)',
            next  : "qqstring"
        },
        {
            token: ["variable.keygroup.toml"],
            regex: "(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"
        },
        {
            token: ["variable.keygroup.toml"],
            regex: "(?:^\\s*)(\\[([^\\]]+)\\])"
        },
        {
            token : keywordMapper,
            regex : identifierRe
        },
        {
           token : "support.date.toml",
           regex: "\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"
        },
        {
           token: "constant.numeric.toml",
           regex: "-?\\d+(\\.?\\d+)?"
        }
    ],
    "qqstring" : [
        {
            token : "string",
            regex : "\\\\$",
            next  : "qqstring"
        },
        {
            token : "constant.language.escape",
            regex : '\\\\[0tnr"\\\\]'
        },
        {
            token : "string",
            regex : '"|$',
            next  : "start"
        },
        {
            defaultToken: "string"
        }
    ]
    };

};

oop.inherits(TomlHighlightRules, TextHighlightRules);

exports.k = TomlHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.7272.js.map