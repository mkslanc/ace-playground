"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[135],{

/***/ 135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextMode = (__webpack_require__(98030).Mode);
var EiffelHighlightRules = (__webpack_require__(78208)/* .EiffelHighlightRules */ .m);

var Mode = function() {
    this.HighlightRules = EiffelHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/eiffel";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 78208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

var EiffelHighlightRules = function() {
    var keywords = "across|agent|alias|all|attached|as|assign|attribute|check|" +
        "class|convert|create|debug|deferred|detachable|do|else|elseif|end|" +
        "ensure|expanded|export|external|feature|from|frozen|if|inherit|" +
        "inspect|invariant|like|local|loop|not|note|obsolete|old|once|" +
        "Precursor|redefine|rename|require|rescue|retry|select|separate|" +
        "some|then|undefine|until|variant|when";

    var operatorKeywords = "and|implies|or|xor";

    var languageConstants = "Void";

    var booleanConstants = "True|False";

    var languageVariables = "Current|Result";

    var keywordMapper = this.createKeywordMapper({
        "constant.language": languageConstants,
        "constant.language.boolean": booleanConstants,
        "variable.language": languageVariables,
        "keyword.operator": operatorKeywords,
        "keyword": keywords
    }, "identifier", true);

    var simpleString = /(?:[^"%\b\f\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)+?/;

    this.$rules = {
        "start": [{
                token : "string.quoted.other", // Aligned-verbatim-strings (verbatim option not supported)
                regex : /"\[/,
                next: "aligned_verbatim_string"
            }, {
                token : "string.quoted.other", // Non-aligned-verbatim-strings (verbatim option not supported)
                regex : /"\{/,
                next: "non-aligned_verbatim_string"
            }, {
                token : "string.quoted.double",
                regex : /"(?:[^%\b\f\n\r\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)*?"/
            }, {
                token : "comment.line.double-dash",
                regex : /--.*/
            }, {
                token : "constant.character",
                regex : /'(?:[^%\b\f\n\r\t\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)'/
            }, {
                token : "constant.numeric", // hexa | octal | bin
                regex : /\b0(?:[xX][\da-fA-F](?:_*[\da-fA-F])*|[cC][0-7](?:_*[0-7])*|[bB][01](?:_*[01])*)\b/
            }, {
                token : "constant.numeric",
                regex : /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/
            }, {
                token : "paren.lparen",
                regex : /[\[({]|<<|\|\(/
            }, {
                token : "paren.rparen",
                regex : /[\])}]|>>|\|\)/
            }, {
                token : "keyword.operator", // punctuation
                regex : /:=|->|\.(?=\w)|[;,:?]/
            }, {
                token : "keyword.operator",
                regex : /\\\\|\|\.\.\||\.\.|\/[~\/]?|[><\/]=?|[-+*^=~]/
            }, {
                token : function (v) {
                    var result = keywordMapper(v);
                    if (result === "identifier" && v === v.toUpperCase()) {
                        result =  "entity.name.type";
                    }
                    return result;
                },
                regex : /[a-zA-Z][a-zA-Z\d_]*\b/
            }, {
                token : "text",
                regex : /\s+/
            }
        ],
        "aligned_verbatim_string" : [{
                token : "string",
                regex : /]"/,
                next : "start"
            }, {
                token : "string",
                regex : simpleString
            }
        ],
        "non-aligned_verbatim_string" : [{
                token : "string.quoted.other",
                regex : /}"/,
                next : "start"
            }, {
                token : "string.quoted.other",
                regex : simpleString
            }
        ]};
};

oop.inherits(EiffelHighlightRules, TextHighlightRules);

exports.m = EiffelHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.135.js.map