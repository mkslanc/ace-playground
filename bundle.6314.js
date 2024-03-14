"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[6314],{

/***/ 28670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var Range = (__webpack_require__(91902)/* .Range */ .Q);

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;


/***/ }),

/***/ 56314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var TextileHighlightRules = (__webpack_require__(3453)/* .TextileHighlightRules */ .r);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);

var Mode = function() {
    this.HighlightRules = TextileHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.type = "text";
    this.getNextLineIndent = function(state, line, tab) {
        if (state == "intag")
            return tab;
        
        return "";
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    
    this.$id = "ace/mode/textile";
    this.snippetFileId = "ace/snippets/textile";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 3453:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var TextileHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : function(value) {
                    if (value.charAt(0) == "h")
                        return "markup.heading." + value.charAt(1);
                    else
                        return "markup.heading";
                },
                regex : "h1|h2|h3|h4|h5|h6|bq|p|bc|pre",
                next  : "blocktag"
            },
            {
                token : "keyword",
                regex : "[\\*]+|[#]+"
            },
            {
                token : "text",
                regex : ".+"
            }
        ],
        "blocktag" : [
            {
                token : "keyword",
                regex : "\\. ",
                next  : "start"
            },
            {
                token : "keyword",
                regex : "\\(",
                next  : "blocktagproperties"
            }
        ],
        "blocktagproperties" : [
            {
                token : "keyword",
                regex : "\\)",
                next  : "blocktag"
            },
            {
                token : "string",
                regex : "[a-zA-Z0-9\\-_]+"
            },
            {
                token : "keyword",
                regex : "#"
            }
        ]
    };
};

oop.inherits(TextileHighlightRules, TextHighlightRules);

exports.r = TextileHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.6314.js.map