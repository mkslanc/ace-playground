"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[3629],{

/***/ 43629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var HtmlMode = (__webpack_require__(32234).Mode);
var LatteHighlightRules = (__webpack_require__(88954)/* .LatteHighlightRules */ .S);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);

var Mode = function() {
    HtmlMode.call(this);
    this.HighlightRules = LatteHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, HtmlMode);

(function() {
    this.blockComment = {start: "{*", end: "*}"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        if (state == "start") {
            var match = line.match(/^.*\{(?:if|else|elseif|ifset|elseifset|ifchanged|switch|case|foreach|iterateWhile|for|while|first|last|sep|try|capture|spaceless|snippet|block|define|embed|snippetArea)\b[^{]*$/);
            if (match) {
                indent += tab;
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return /^\s+\{\/$/.test(line + input);
    };

    this.autoOutdent = function(state, doc, row) {
    };

    this.$id = "ace/mode/latte";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 88954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var LatteHighlightRules = function() {
    // inherit from html
    HtmlHighlightRules.call(this);

    // add latte start tags to the HTML
    for (var rule in this.$rules) {
        this.$rules[rule].unshift(
            {
                token : "comment.start.latte",
                regex : "\\{\\*",
                push : [{
                    token : "comment.end.latte",
                    regex : ".*\\*\\}",
                    next : "pop"
                }, {
                    defaultToken : "comment"
                }]
            }, {
                token : "meta.tag.punctuation.tag-open.latte",
                regex : "\\{(?![\\s'\"{}]|$)/?",
                push : [{
                    token : "meta.tag.latte",
                    regex : "(?:_|=|[a-z]\\w*(?:[.:-]\\w+)*)?",
                    next: [{
                        token : "meta.tag.punctuation.tag-close.latte",
                        regex : "\\}",
                        next : "pop"
                    }, {
                        include: "latte-content"
                    }]
                }]
        });
    }

    // add n:attribute to HTML tag
    this.$rules['tag_stuff'].unshift({
        token : "meta.attribute.latte",
        regex : "n:[\\w-]+",
        next : [{
            include: "tag_whitespace"
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "=",
            next : [{
                token : "string.attribute-value.xml",
                regex : "'",
                next : [
                    {token : "string.attribute-value.xml", regex: "'", next: "tag_stuff"},
                    {include : "latte-content"}
                ]
            }, {
                token : "string.attribute-value.xml",
                regex : '"',
                next : [
                    {token : "string.attribute-value.xml", regex: '"', next: "tag_stuff"},
                    {include : "latte-content"}
                ]
            }, {
                token : "text.tag-whitespace.xml",
                regex : "\\s",
                next: "tag_stuff"
            }, {
                token : "meta.tag.punctuation.tag-close.xml",
                regex : "/?>",
                next: "tag_stuff"
            }, {
               include : "latte-content"
            }]
        }, {
            token : "empty",
            regex : "",
            next : "tag_stuff"
        }]
    });


    // PHP content
    this.$rules["latte-content"] = [
        {
            token : "comment.start.latte", // multi line comment
            regex : "\\/\\*",
            push : [
                {
                    token : "comment.end.latte",
                    regex : "\\*\\/",
                    next : "pop"
                }, {
                    defaultToken : "comment"
                }
            ]
        }, {
            token : "string.start", // " string start
            regex : '"',
            push : [
                {
                    token : "constant.language.escape",
                    regex : '\\\\(?:[nrtvef\\\\"$]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2})'
                }, {
                    token : "variable",
                    regex : /\$[\w]+(?:\[[\w\]+]|[=\-]>\w+)?/
                }, {
                    token : "variable",
                    regex : /\$\{[^"\}]+\}?/           // this is wrong but ok for now
                },
                {token : "string.end", regex : '"', next : "pop"},
                {defaultToken : "string"}
            ]
        }, {
            token : "string.start", // ' string start
            regex : "'",
            push : [
                {token : "constant.language.escape", regex : /\\['\\]/},
                {token : "string.end", regex : "'", next : "pop"},
                {defaultToken : "string"}
            ]
        }, {
            token : "keyword.control",
            regex : "\\b(?:INF|NAN|and|or|xor|AND|OR|XOR|clone|new|instanceof|return|continue|break|as)\\b"
        }, {
            token : "constant.language",
            regex : "\\b(?:true|false|null|TRUE|FALSE|NULL)\\b"
        }, {
            token : "variable",
            regex : /\$\w+/
        }, {
            token : "constant.numeric",
            regex : "[+-]?[0-9]+(?:\\.[0-9]+)?(?:e[0-9]+)?"
        }, {
            token : ["support.class", "keyword.operator"],
            regex : "\\b(\\w+)(::)"
        }, {
            token : "constant.language", // constants
            regex : "\\b(?:[A-Z0-9_]+)\\b"
        }, {
            token : "string.unquoted",
            regex : "\\w+(?:-+\\w+)*"
        }, {
            token : "paren.lparen",
            regex : "[[({]"
        }, {
            token : "paren.rparen",
            regex : "[\\])}]"
        }, {
            token : "keyword.operator",
            regex : "::|=>|->|\\?->|\\?\\?->|\\+\\+|--|<<|>>|<=>|<=|>=|===|!==|==|!=|<>|&&|\\|\\||\\?\\?|\\?>|\\*\\*|\\.\\.\\.|[^'\"]" // =>, any char except quotes
        }
    ];

    this.normalizeRules();
};

oop.inherits(LatteHighlightRules, TextHighlightRules);

exports.S = LatteHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.3629.js.map