"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[313],{

/***/ 4430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var LuceneHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token: "constant.language.escape",
                regex: /\\[\-+&|!(){}\[\]^"~*?:\\]/
            }, {
                token: "constant.character.negation",
                regex: "\\-"
            }, {
                token: "constant.character.interro",
                regex: "\\?"
            }, {
                token: "constant.character.required",
                regex: "\\+"
            }, {
                token: "constant.character.asterisk",
                regex: "\\*"
            }, {
                token: 'constant.character.proximity',
                regex: '~(?:0\\.[0-9]+|[0-9]+)?'
            }, {
                token: 'keyword.operator',
                regex: '(AND|OR|NOT|TO)\\b'
            }, {
                token: "paren.lparen",
                regex: "[\\(\\{\\[]"
            }, {
                token: "paren.rparen",
                regex: "[\\)\\}\\]]"
            }, {
                token: "keyword.operator",
                regex: /[><=^]/
            }, {
                token: "constant.numeric",
                regex: /\d[\d.-]*/
            }, {
                token: "string",
                regex: /"(?:\\"|[^"])*"/
            }, {
                token: "keyword",
                regex: /(?:\\.|[^\s\-+&|!(){}\[\]^"~*?:\\])+:/,
                next: "maybeRegex"
            }, {
                token: "term",
                regex: /\w+/
            }, {
                token: "text",
                regex: /\s+/
            }
        ],
        "maybeRegex": [{
            token: "text",
            regex: /\s+/
        }, {
            token: "string.regexp.start",
            regex: "/",
            next: "regex"
        }, {
            regex: "",
            next: "start"
        }],
        "regex": [
            {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                // flag
                token: "string.regexp.end",
                regex: "/[sxngimy]*",
                next: "start"
            }, {
                // invalid operators
                token : "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                // operators
                token : "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                // optional operators
                token: "constant.language.escape",
                regex: "<\d+-\d+>|[~&@]"
            }, {
                token : "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "start"
            }, {
                defaultToken: "string.regexp"
            }
        ],
        "regex_character_class": [
            {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "start"
            }, {
                defaultToken: "string.regexp.characterclass"
            }
        ]
    };
};

oop.inherits(LuceneHighlightRules, TextHighlightRules);

exports.I = LuceneHighlightRules;


/***/ }),

/***/ 10313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var LuceneHighlightRules = (__webpack_require__(4430)/* .LuceneHighlightRules */ .I);

var Mode = function() {
    this.HighlightRules = LuceneHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};

oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/lucene";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.313.js.map