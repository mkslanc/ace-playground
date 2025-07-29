"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[1236],{

/***/ 1236:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var NunjucksFoldMode = (__webpack_require__(52930)/* .FoldMode */ .l);
var lang = __webpack_require__(39955);
var HtmlMode = (__webpack_require__(32234).Mode);
var NunjucksHighlightRules = (__webpack_require__(14615)/* .NunjucksHighlightRules */ .D);

// http://www.w3.org/TR/html5/syntax.html#void-elements
var voidElements = [
    "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source",
    "track", "wbr"
];
var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];

var Mode = function () {
    this.HighlightRules = NunjucksHighlightRules;
    this.foldingRules = new NunjucksFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
};

oop.inherits(Mode, HtmlMode);

(function () {
    this.$id = "ace/mode/nunjucks";
    this.voidElements = lang.arrayToMap(voidElements);

}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 14615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);

var NunjucksHighlightRules = function() {
    HtmlHighlightRules.call(this);
    this.$rules["start"].unshift({
        token: "punctuation.begin",
        regex: /{{-?/,
        push: [{
            token: "punctuation.end",
            regex: /-?}}/,
            next: "pop"
        },
            {include: "expression"}
        ]
    }, {
        token: "punctuation.begin",
        regex: /{%-?/,
        push: [{
            token: "punctuation.end",
            regex: /-?%}/,
            next: "pop"
        }, {
            token: "constant.language.escape",
            regex: /\b(r\/.*\/[gimy]?)\b/
        },
            {include: "statement"}
        ]
    }, {
        token: "comment.begin",
        regex: /{#/,
        push: [{
            token: "comment.end",
            regex: /#}/,
            next: "pop"
        },
            {defaultToken: "comment"}
        ]
    });
    this.addRules({
        attribute_value: [{
            token: "string.attribute-value.xml",
            regex: "'",
            push: [
                {token: "string.attribute-value.xml", regex: "'", next: "pop"},
                {
                    token: "punctuation.begin",
                    regex: /{{-?/,
                    push: [{
                        token: "punctuation.end",
                        regex: /-?}}/,
                        next: "pop"
                    },
                        {include: "expression"}
                    ]
                },
                {include: "attr_reference"},
                {defaultToken: "string.attribute-value.xml"}
            ]
        }, {
            token: "string.attribute-value.xml",
            regex: '"',
            push: [
                {token: "string.attribute-value.xml", regex: '"', next: "pop"},
                {
                    token: "punctuation.begin",
                    regex: /{{-?/,
                    push: [{
                        token: "punctuation.end",
                        regex: /-?}}/,
                        next: "pop"
                    },
                        {include: "expression"}
                    ]
                },
                {include: "attr_reference"},
                {defaultToken: "string.attribute-value.xml"}
            ]
        }],
        "statement": [{
            token: "keyword.control",
            regex: /\b(block|endblock|extends|endif|elif|for|endfor|asyncEach|endeach|include|asyncAll|endall|macro|endmacro|set|endset|ignore missing|as|from|raw|verbatim|filter|endfilter)\b/
        },
            {include: "expression"}
        ],
        "expression": [{
            token: "constant.language",
            regex: /\b(true|false|none)\b/
        }, {
            token: "string",
            regex: /"/,
            push: [{
                token: "string",
                regex: /"/,
                next: "pop"
            },
                {include: "escapeStrings"},
                {defaultToken: "string"}
            ]
        }, {
            token: "string",
            regex: /'/,
            push: [{
                token: "string",
                regex: /'/,
                next: "pop"
            },
                {include: "escapeStrings"},
                {defaultToken: "string"}
            ]
        }, {
            token: "constant.numeric", // hexadecimal, octal and binary
            regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
        }, {
            token: "constant.numeric", // decimal integers and floats
            regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
        }, {
            token: "keyword.operator",
            regex: /\+|-|\/\/|\/|%|\*\*|\*|===|==|!==|!=|>=|>|<=|</
        }, {
            token: "keyword.control",
            regex: /\b(and|else|if|in|import|not|or)\b/
        }, {
            token: "support.function",
            regex: /[a-zA-Z_]+(?=\()/
        }, {
            token: "paren.lpar",
            regex: /[(\[{]/
        }, {
            token: "paren.rpar",
            regex: /[)\]}]/
        }, {
            token: "punctuation",
            regex: /[,]/
        }, {
            token: ["punctuation", "support.function"],
            regex: /(\.)([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/
        }, {
            token: ["punctuation", "variable.parameter"],
            regex: /(\.)([a-zA-Z_][a-zA-Z0-9_]*)/
        }, {
            token: ["punctuation", "text", "support.other"],
            regex: /(\|)(\s)*([a-zA-Z_][a-zA-Z0-9_]*)/
        }, {
            token: "variable",
            regex: /[a-zA-Z_][a-zA-Z0-9_]*/
        }
        ],
        "escapeStrings": [{
            token: "constant.language.escape",
            regex: /(\\\\n)|(\\\\)|(\\")|(\\')|(\\a)|(\\b)|(\\f)|(\\n)|(\\r)|(\\t)|(\\v)/
        }, {
            token: "constant.language.escape",
            regex: /\\(?:x[0-9A-F]{2}|(?:U[0-9A-Fa-f]{8})|(?:u[0-9A-Fa-f]{4})|(?:N{[a-zA-Z ]+}))/
        }]
    });

    this.normalizeRules();
};

oop.inherits(NunjucksHighlightRules, TextHighlightRules);

exports.D = NunjucksHighlightRules;


/***/ }),

/***/ 52930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
const {FoldMode: MixedFoldMode} = __webpack_require__(90610);
var HtmlFoldMode = (__webpack_require__(6944).FoldMode);
var Range = (__webpack_require__(91902)/* .Range */ .Q);
var TokenIterator = (__webpack_require__(99339).TokenIterator);


var FoldMode = exports.l = function (voidElements, optionalTags) {
    HtmlFoldMode.call(this, voidElements, optionalTags);
};

oop.inherits(FoldMode, HtmlFoldMode);

(function () {//TODO: set|endset
    this.getFoldWidgetRangeBase = this.getFoldWidgetRange;
    this.getFoldWidgetBase = this.getFoldWidget;

    this.indentKeywords = {
        "block": 1,
        "if": 1,
        "for": 1,
        "asyncEach": 1,
        "asyncAll": 1,
        "macro": 1,
        "filter": 1,
        "call": 1,
        "else": 0,
        "elif": 0,
        "set": 1,
        "endblock": -1,
        "endif": -1,
        "endfor": -1,
        "endeach": -1,
        "endall": -1,
        "endmacro": -1,
        "endfilter": -1,
        "endcall": -1,
        "endset": -1
    };

    this.foldingStartMarkerNunjucks = /(?:\{%-?\s*)(?:(block|if|else|elif|for|asyncEach|asyncAll|macro|filter|call)\b.*)|(?:\bset(?:[^=]*))(?=%})/i;
    this.foldingStopMarkerNunjucks = /(?:\{%-?\s*)(endblock|endif|endfor|endeach|endall|endmacro|endfilter|endcall|endset)\b.*(?=%})/i;

    this.getFoldWidgetRange = function (session, foldStyle, row) {
        var line = session.doc.getLine(row);
        let offset = calculateOffset(this.foldingStartMarkerNunjucks, line);
        if (offset) {
            return this.nunjucksBlock(session, row, offset);
        }

        offset = calculateOffset(this.foldingStopMarkerNunjucks, line);
        if (offset) {
            return this.nunjucksBlock(session, row, offset);
        }
        return this.getFoldWidgetRangeBase(session, foldStyle, row);
    };

    /**
     *
     * @param {RegExp} regExp
     * @param line
     * @return {*}
     */
    function calculateOffset(regExp, line) {
        var match = regExp.exec(line);
        if (match) {
            var keyword = match[0].includes("set") ? "set" : match[1].toLowerCase();
            if (keyword) {
                var offsetInMatch = match[0].toLowerCase().indexOf(keyword);
                return match.index + offsetInMatch + 1;
            }
        }
    }

    // must return "" if there's no fold, to enable caching
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        var isStart = this.foldingStartMarkerNunjucks.test(line);
        var isEnd = this.foldingStopMarkerNunjucks.test(line);
        if (isStart && !isEnd) {
            var offset = calculateOffset(this.foldingStartMarkerNunjucks, line);
            if (offset) {
                var type = session.getTokenAt(row, offset).type;
                if (type === "keyword.control") {
                    return "start";
                }
            }
        }
        if (isEnd && !isStart && foldStyle === "markbeginend") {
            var offset = calculateOffset(this.foldingStopMarkerNunjucks, line);
            if (offset) {
                var type = session.getTokenAt(row, offset).type;
                if (type === "keyword.control") {
                    return "end";
                }
            }
        }
        return this.getFoldWidgetBase(session, foldStyle, row);
    };

    /**
     *
     * @param {TokenIterator} stream
     */
    function getTokenPosition(stream, findStart) {
        let token;
        const currentIndex = stream.$tokenIndex;
        const type = findStart ? "punctuation.begin" : "punctuation.end";
        stream.step = findStart ? stream.stepBackward : stream.stepForward;
        while (token = stream.step()) {
            if (token.type !== type) continue;
            break;
        }
        if (!token) return;
        let pos = stream.getCurrentTokenPosition();
        if (!findStart) {
            pos.column = pos.column + token.value.length;
        }
        stream.$tokenIndex = currentIndex;
        return pos;
    }

    this.nunjucksBlock = function (session, row, column) {
        var stream = new TokenIterator(session, row, column);

        var token = stream.getCurrentToken();
        if (!token || token.type != "keyword.control") return;

        var val = token.value;
        var stack = [val];
        var dir = this.indentKeywords[val];

        if (val === "else" || val === "elif") {
            dir = 1;
        }

        if (!dir) return;

        var start = getTokenPosition(stream, dir === -1);

        if (!token) return;

        stream.step = dir === -1 ? stream.stepBackward : stream.stepForward;
        while (token = stream.step()) {
            if (token.type !== "keyword.control") continue;
            var level = dir * this.indentKeywords[token.value];

            if (token.value === "set") {
                var tokenPos = stream.getCurrentTokenPosition();
                var line = session.getLine(tokenPos.row).substring(tokenPos.column);
                if (!/^[^=]*%}/.test(line)) {
                    continue;
                }
            }
            if (level > 0) {
                stack.unshift(token.value);
            }
            else if (level <= 0) {
                stack.shift();
                if (!stack.length) break;
                if (level === 0) stack.unshift(token.value);
            }
        }

        if (!token) return null;

        var end = getTokenPosition(stream, dir === 1);
        return dir === 1 ? Range.fromPoints(start, end) : Range.fromPoints(end, start);
    };

}).call(FoldMode.prototype);


/***/ })

}]);
//# sourceMappingURL=bundle.1236.js.map