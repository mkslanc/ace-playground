"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2561],{

/***/ 23124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var lang = __webpack_require__(39955);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var CssHighlightRules = __webpack_require__(74275);

var ScssHighlightRules = function() {
    
    var properties = lang.arrayToMap(CssHighlightRules.supportType.split("|"));

    var functions = lang.arrayToMap(
        ("hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|" +
         "alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|" + 
         "floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|" + 
         "nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|" +
         "scale_color|transparentize|type_of|unit|unitless|unquote").split("|")
    );

    var constants = lang.arrayToMap(CssHighlightRules.supportConstant.split("|"));

    var colors = lang.arrayToMap(CssHighlightRules.supportConstantColor.split("|"));
    
    var keywords = lang.arrayToMap(
        ("@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare").split("|")
    );
    
    var tags = lang.arrayToMap(
        ("a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|" + 
         "big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|" + 
         "command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|" + 
         "figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|" + 
         "header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|" + 
         "link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|" + 
         "option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|" + 
         "small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|" + 
         "textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp").split("|")
    );

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // multi line string start
                regex : '["].*\\\\$',
                next : "qqstring"
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "string", // multi line string start
                regex : "['].*\\\\$",
                next : "qstring"
            }, {
                token : "constant.numeric",
                regex : numRe + "(?:ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
            }, {
                token : "constant.numeric", // hex6 color
                regex : "#[a-f0-9]{6}"
            }, {
                token : "constant.numeric", // hex3 color
                regex : "#[a-f0-9]{3}"
            }, {
                token : "constant.numeric",
                regex : numRe
            }, {
                token : ["support.function", "string", "support.function"],
                regex : "(url\\()(.*)(\\))"
            }, {
                token : function(value) {
                    if (properties.hasOwnProperty(value.toLowerCase()))
                        return "support.type";
                    if (keywords.hasOwnProperty(value))
                        return "keyword";
                    else if (constants.hasOwnProperty(value))
                        return "constant.language";
                    else if (functions.hasOwnProperty(value))
                        return "support.function";
                    else if (colors.hasOwnProperty(value.toLowerCase()))
                        return "support.constant.color";
                    else if (tags.hasOwnProperty(value.toLowerCase()))
                        return "variable.language";
                    else
                        return "text";
                },
                regex : "\\-?[@a-z_][@a-z0-9_\\-]*"
            }, {
                token : "variable",
                regex : "[a-z_\\-$][a-z0-9_\\-$]*\\b"
            }, {
                token: "variable.language",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: ":[a-z0-9-_]+"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                token : "keyword.operator",
                regex : "<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"
            }, {
                token : "paren.lparen",
                regex : "[[({]"
            }, {
                token : "paren.rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }, {
                caseInsensitive: true
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : "\\*\\/",
                next : "start"
            }, {
                defaultToken : "comment"
            }
        ],
        "qqstring" : [
            {
                token : "string",
                regex : '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                next : "start"
            }, {
                token : "string",
                regex : '.+'
            }
        ],
        "qstring" : [
            {
                token : "string",
                regex : "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                next : "start"
            }, {
                token : "string",
                regex : '.+'
            }
        ]
    };
};

oop.inherits(ScssHighlightRules, TextHighlightRules);

exports.ScssHighlightRules = ScssHighlightRules;


/***/ }),

/***/ 28068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



    var oop = __webpack_require__(2645);
    var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

    oop.inherits(CoffeeHighlightRules, TextHighlightRules);

    function CoffeeHighlightRules() {
        var identifier = "[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*";

        var keywords = (
            "this|throw|then|try|typeof|super|switch|return|break|by|continue|" +
            "catch|class|in|instanceof|is|isnt|if|else|extends|for|own|" +
            "finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|" +
            "or|on|unless|until|and|yes|yield|export|import|default"
        );

        var langConstant = (
            "true|false|null|undefined|NaN|Infinity"
        );

        var illegal = (
            "case|const|function|var|void|with|enum|implements|" +
            "interface|let|package|private|protected|public|static"
        );

        var supportClass = (
            "Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|String|" +
            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|" +
            "SyntaxError|TypeError|URIError|"  +
            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|" +
            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray"
        );

        var supportFunction = (
            "Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|" +
            "encodeURIComponent|decodeURI|decodeURIComponent|String|"
        );

        var variableLanguage = (
            "window|arguments|prototype|document"
        );

        var keywordMapper = this.createKeywordMapper({
            "keyword": keywords,
            "constant.language": langConstant,
            "invalid.illegal": illegal,
            "language.support.class": supportClass,
            "language.support.function": supportFunction,
            "variable.language": variableLanguage
        }, "identifier");

        var functionRule = {
            token: ["paren.lparen", "variable.parameter", "paren.rparen", "text", "storage.type"],
            regex: /(?:(\()((?:"[^")]*?"|'[^')]*?'|\/[^\/)]*?\/|[^()"'\/])*?)(\))(\s*))?([\-=]>)/.source
        };

        var stringEscape = /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)/;

        this.$rules = {
            start : [
                {
                    token : "constant.numeric",
                    regex : "(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"
                }, {
                    stateName: "qdoc",
                    token : "string", regex : "'''", next : [
                        {token : "string", regex : "'''", next : "start"},
                        {token : "constant.language.escape", regex : stringEscape},
                        {defaultToken: "string"}
                    ]
                }, {
                    stateName: "qqdoc",
                    token : "string",
                    regex : '"""',
                    next : [
                        {token : "string", regex : '"""', next : "start"},
                        {token : "paren.string", regex : '#{', push : "start"},
                        {token : "constant.language.escape", regex : stringEscape},
                        {defaultToken: "string"}
                    ]
                }, {
                    stateName: "qstring",
                    token : "string", regex : "'", next : [
                        {token : "string", regex : "'", next : "start"},
                        {token : "constant.language.escape", regex : stringEscape},
                        {defaultToken: "string"}
                    ]
                }, {
                    stateName: "qqstring",
                    token : "string.start", regex : '"', next : [
                        {token : "string.end", regex : '"', next : "start"},
                        {token : "paren.string", regex : '#{', push : "start"},
                        {token : "constant.language.escape", regex : stringEscape},
                        {defaultToken: "string"}
                    ]
                }, {
                    stateName: "js",
                    token : "string", regex : "`", next : [
                        {token : "string", regex : "`", next : "start"},
                        {token : "constant.language.escape", regex : stringEscape},
                        {defaultToken: "string"}
                    ]
                }, {
                    regex: "[{}]", onMatch: function(val, state, stack) {
                        this.next = "";
                        if (val == "{" && stack.length) {
                            stack.unshift("start", state);
                            return "paren";
                        }
                        if (val == "}" && stack.length) {
                            stack.shift();
                            this.next = stack.shift() || "";
                            if (this.next.indexOf("string") != -1)
                                return "paren.string";
                        }
                        return "paren";
                    }
                }, {
                    token : "string.regex",
                    regex : "///",
                    next : "heregex"
                }, {
                    token : "string.regex",
                    regex : /(?:\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)(?:[imgy]{0,4})(?!\w)/
                }, {
                    token : "comment",
                    regex : "###(?!#)",
                    next : "comment"
                }, {
                    token : "comment",
                    regex : "#.*"
                }, {
                    token : ["punctuation.operator", "text", "identifier"],
                    regex : "(\\.)(\\s*)(" + illegal + ")"
                }, {
                    token : "punctuation.operator",
                    regex : "\\.{1,3}"
                }, {
                    //class A extends B
                    token : ["keyword", "text", "language.support.class",
                     "text", "keyword", "text", "language.support.class"],
                    regex : "(class)(\\s+)(" + identifier + ")(?:(\\s+)(extends)(\\s+)(" + identifier + "))?"
                }, {
                    //play = (...) ->
                    token : ["entity.name.function", "text", "keyword.operator", "text"].concat(functionRule.token),
                    regex : "(" + identifier + ")(\\s*)([=:])(\\s*)" + functionRule.regex
                }, 
                functionRule, 
                {
                    token : "variable",
                    regex : "@(?:" + identifier + ")?"
                }, {
                    token: keywordMapper,
                    regex : identifier
                }, {
                    token : "punctuation.operator",
                    regex : "\\,|\\."
                }, {
                    token : "storage.type",
                    regex : "[\\-=]>"
                }, {
                    token : "keyword.operator",
                    regex : "(?:[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])"
                }, {
                    token : "paren.lparen",
                    regex : "[({[]"
                }, {
                    token : "paren.rparen",
                    regex : "[\\]})]"
                }, {
                    token : "text",
                    regex : "\\s+"
                }],


            heregex : [{
                token : "string.regex",
                regex : '.*?///[imgy]{0,4}',
                next : "start"
            }, {
                token : "comment.regex",
                regex : "\\s+(?:#.*)?"
            }, {
                token : "string.regex",
                regex : "\\S+"
            }],

            comment : [{
                token : "comment",
                regex : '###',
                next : "start"
            }, {
                defaultToken : "comment"
            }]
        };
        this.normalizeRules();
    }

    exports.CoffeeHighlightRules = CoffeeHighlightRules;


/***/ }),

/***/ 41425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var CssHighlightRules = __webpack_require__(74275);

var LessHighlightRules = function() {


    var keywordList = "@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|" + 
        "@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|" +
        "or|and|when|not";

    var keywords = keywordList.split('|');

    var properties = CssHighlightRules.supportType.split('|');

    var keywordMapper = this.createKeywordMapper({
        "support.constant": CssHighlightRules.supportConstant,
        "keyword": keywordList,
        "support.constant.color": CssHighlightRules.supportConstantColor,
        "support.constant.fonts": CssHighlightRules.supportConstantFonts
    }, "identifier", true);   

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : ["constant.numeric", "keyword"],
                regex : "(" + numRe + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
            }, {
                token : "constant.numeric", // hex6 color
                regex : "#[a-f0-9]{6}"
            }, {
                token : "constant.numeric", // hex3 color
                regex : "#[a-f0-9]{3}"
            }, {
                token : "constant.numeric",
                regex : numRe
            }, {
                token : ["support.function", "paren.lparen", "string", "paren.rparen"],
                regex : "(url)(\\()(.*)(\\))"
            }, {
                token : ["support.function", "paren.lparen"],
                regex : "(:extend|[a-z0-9_\\-]+)(\\()"
            }, {
                token : function(value) {
                    if (keywords.indexOf(value.toLowerCase()) > -1)
                        return "keyword";
                    else
                        return "variable";
                },
                regex : "[@\\$][a-z0-9_\\-@\\$]*\\b"
            }, {
                token : "variable",
                regex : "[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"
            }, {
                token : function(first, second) {
                    if(properties.indexOf(first.toLowerCase()) > -1) {
                        return ["support.type.property", "text"];
                    }
                    else {
                        return ["support.type.unknownProperty", "text"];
                    }
                },
                regex : "([a-z0-9-_]+)(\\s*:)"
            }, {
                token : "keyword",
                regex : "&"   // special case - always treat as keyword
            }, {
                token : keywordMapper,
                regex : "\\-?[@a-z_][@a-z0-9_\\-]*"
            }, {
                token: "variable.language",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: ":[a-z_][a-z0-9-_]*"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                token : "keyword.operator",
                regex : "<|>|<=|>=|=|!=|-|%|\\+|\\*"
            }, {
                token : "paren.lparen",
                regex : "[[({]"
            }, {
                token : "paren.rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }, {
                caseInsensitive: true
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : "\\*\\/",
                next : "start"
            }, {
                defaultToken : "comment"
            }
        ]
    };
    this.normalizeRules();
};

oop.inherits(LessHighlightRules, TextHighlightRules);

exports.LessHighlightRules = LessHighlightRules;


/***/ }),

/***/ 95253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var modes = (__webpack_require__(76321).$modes);

var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var SlimHighlightRules = function() {

    this.$rules = {
        "start": [
            {
                token: "keyword",
                regex: /^(\s*)(\w+):\s*/,
                onMatch: function(value, state, stack, line) {
                    var indent = /^\s*/.exec(line)[0];
                    var m = value.match(/^(\s*)(\w+):/);
                    var language = m[2];
                    if (!/^(javascript|ruby|coffee|markdown|css|scss|sass|less)$/.test(language))
                        language = "";
                    stack.unshift("language-embed", [], [indent, language], state);
                    return this.token;
                },
                stateName: "language-embed",
                next: [{
                    token: "string",
                    regex: /^(\s*)/,
                    onMatch: function(value, state, stack, line) {
                        var indent = stack[2][0];
                        if (indent.length >= value.length) {
                            stack.splice(0, 3);
                            this.next = stack.shift();
                            return this.token;
                        }
                        this.next = "";
                        return [{type: "text", value: indent}];
                    },
                    next: ""
                }, {
                    token: "string",
                    regex: /.+/,
                    onMatch: function(value, state, stack, line) {
                        var indent = stack[2][0];
                        var language = stack[2][1];
                        var embedState = stack[1];
                        
                        if (modes[language]) {
                            var data = modes[language].getTokenizer().getLineTokens(line.slice(indent.length), embedState.slice(0));
                            stack[1] = data.state;
                            return data.tokens;
                        }
                        return this.token;
                    }
                }]
            },
            {
                token: 'constant.begin.javascript.filter.slim',
                regex: '^(\\s*)():$'
            }, {
                token: 'constant.begin..filter.slim',
                regex: '^(\\s*)(ruby):$'
            }, {
                token: 'constant.begin.coffeescript.filter.slim',
                regex: '^(\\s*)():$'
            }, {
                token: 'constant.begin..filter.slim',
                regex: '^(\\s*)(markdown):$'
            }, {
                token: 'constant.begin.css.filter.slim',
                regex: '^(\\s*)():$'
            }, {
                token: 'constant.begin.scss.filter.slim',
                regex: '^(\\s*)():$'
            }, {
                token: 'constant.begin..filter.slim',
                regex: '^(\\s*)(sass):$'
            }, {
                token: 'constant.begin..filter.slim',
                regex: '^(\\s*)(less):$'
            }, {
                token: 'constant.begin..filter.slim',
                regex: '^(\\s*)(erb):$'
            }, {
                token: 'keyword.html.tags.slim',
                regex: '^(\\s*)((:?\\*(\\w)+)|doctype html|abbr|acronym|address|applet|area|article|aside|audio|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dialog|dfn|dir|div|dl|dt|embed|fieldset|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|link|li|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|source|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|xmp|b|u|s|em|a)(?:([.#](\\w|\\.)+)+\\s?)?\\b'

            }, {
                token: 'keyword.slim',
                regex: '^(\\s*)(?:([.#](\\w|\\.)+)+\\s?)'
            }, {
                token: "string",
                regex: /^(\s*)('|\||\/|(\/!))\s*/,
                onMatch: function(val, state, stack, line) {
                    var indent = /^\s*/.exec(line)[0];
                    if (stack.length < 1) {
                        stack.push(this.next);
                    }
                    else {
                        stack[0] = "mlString";
                    }

                    if (stack.length < 2) {
                        stack.push(indent.length);
                    }
                    else {
                        stack[1] = indent.length;
                    }
                    return this.token;
                },
                next: "mlString"
            }, {
                token: 'keyword.control.slim',
                regex: '^(\\s*)(\\-|==|=)',
                push: [{
                    token: 'control.end.slim',
                    regex: '$',
                    next: "pop"
                }, {
                    include: "rubyline"
                }, {
                    include: "misc"
                }]

            }, {
                token: 'paren',
                regex: '\\(',
                push: [{
                    token: 'paren',
                    regex: '\\)',
                    next: "pop"
                }, {
                    include: "misc"
                }]

            }, {
                token: 'paren',
                regex: '\\[',
                push: [{
                    token: 'paren',
                    regex: '\\]',
                    next: "pop"
                }, {
                    include: "misc"
                }]
            }, {
                include: "misc"
            }
        ],
        "mlString": [{
            token: "indent",
            regex: /^\s*/,
            onMatch: function(val, state, stack) {
                var curIndent = stack[1];

                if (curIndent >= val.length) {
                    this.next = "start";
                    stack.splice(0);
                }
                else {
                    this.next = "mlString";
                }
                return this.token;
            },
            next: "start"
        }, {
            defaultToken: "string"
        }],
        "rubyline": [{
            token: "keyword.operator.ruby.embedded.slim",
            regex: "(==|=)(<>|><|<'|'<|<|>)?|-"
        }, {
            token: "list.ruby.operators.slim",
            regex: "(\\b)(for|in|do|if|else|elsif|unless|while|yield|not|and|or)\\b"
        }, {
            token: "string",
            regex: "['](.)*?[']"
        }, {
            token: "string",
            regex: "[\"](.)*?[\"]"
        }],
        "misc": [{
            token: 'class.variable.slim',
            regex: '\\@([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        }, {
            token: "list.meta.slim",
            regex: "(\\b)(true|false|nil)(\\b)"
        }, {
            token: 'keyword.operator.equals.slim',
            regex: '='
        }, {
            token: "string",
            regex: "['](.)*?[']"
        }, {
            token: "string",
            regex: "[\"](.)*?[\"]"
        }]
    };
    this.normalizeRules();
};


oop.inherits(SlimHighlightRules, TextHighlightRules);

exports.SlimHighlightRules = SlimHighlightRules;


/***/ }),

/***/ 96930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var lang = __webpack_require__(39955);
var ScssHighlightRules = (__webpack_require__(23124).ScssHighlightRules);

var SassHighlightRules = function() {
    ScssHighlightRules.call(this);
    var start = this.$rules.start;
    if (start[1].token == "comment") {
        start.splice(1, 1, {
            onMatch: function(value, currentState, stack) {
                stack.unshift(this.next, -1, value.length - 2, currentState);
                return "comment";
            },
            regex: /^\s*\/\*/,
            next: "comment"
        }, {
            token: "error.invalid",
            regex: "/\\*|[{;}]"
        }, {
            token: "support.type",
            regex: /^\s*:[\w\-]+\s/
        });
        
        this.$rules.comment = [
            {regex: /^\s*/, onMatch: function(value, currentState, stack) {
                if (stack[1] === -1)
                    stack[1] = Math.max(stack[2], value.length - 1);
                if (value.length <= stack[1]) {
                    /*shift3x*/stack.shift();stack.shift();stack.shift();
                    this.next = stack.shift();
                    return "text";
                } else {
                    this.next = "";
                    return "comment";
                }
            }, next: "start"},
            {defaultToken: "comment"}
        ];
    }
};

oop.inherits(SassHighlightRules, ScssHighlightRules);

exports.SassHighlightRules = SassHighlightRules;


/***/ }),

/***/ 98137:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var modes = (__webpack_require__(76321).$modes);

var oop = __webpack_require__(2645);
var lang = __webpack_require__(39955);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);

var escaped = function(ch) {
    return "(?:[^" + lang.escapeRegExp(ch) + "\\\\]|\\\\.)*";
};

var MarkdownHighlightRules = function() {
    HtmlHighlightRules.call(this);
    // regexp must not have capturing parentheses
    // regexps are ordered -> the first match is used
    var codeBlockStartRule = {
        token : "support.function",
        regex : /^\s*(```+[^`]*|~~~+[^~]*)$/,
        onMatch: function(value, state, stack, line) {
            var m = value.match(/^(\s*)([`~]+)(.*)/);
            var language = /[\w-]+|$/.exec(m[3])[0];
            // TODO lazy-load modes
            if (!modes[language])
                language = "";
            stack.unshift("githubblock", [], [m[1], m[2], language], state);
            return this.token;
        },
        next  : "githubblock"
    };
    var codeBlockRules = [{
        token : "support.function",
        regex : ".*",
        onMatch: function(value, state, stack, line) {
            var embedState = stack[1];
            var indent = stack[2][0];
            var endMarker = stack[2][1];
            var language = stack[2][2];
            
            var m = /^(\s*)(`+|~+)\s*$/.exec(value);
            if (
                m && m[1].length < indent.length + 3
                && m[2].length >= endMarker.length && m[2][0] == endMarker[0]
            ) {
                stack.splice(0, 3);
                this.next = stack.shift();
                return this.token;
            }
            this.next = "";
            if (language && modes[language]) {
                var data = modes[language].getTokenizer().getLineTokens(value, embedState.slice(0));
                stack[1] = data.state;
                return data.tokens;
            }
            return this.token;
        }
    }];

    this.$rules["start"].unshift({
        token : "empty_line",
        regex : '^$',
        next: "allowBlock"
    }, { // h1
        token: "markup.heading.1",
        regex: "^=+(?=\\s*$)"
    }, { // h2
        token: "markup.heading.2",
        regex: "^\\-+(?=\\s*$)"
    }, {
        token : function(value) {
            return "markup.heading." + value.length;
        },
        regex : /^#{1,6}(?=\s|$)/,
        next : "header"
    },
    codeBlockStartRule,
    { // block quote
        token : "string.blockquote",
        regex : "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
        next  : "blockquote"
    }, { // HR * - _
        token : "constant",
        regex : "^ {0,3}(?:(?:\\* ?){3,}|(?:\\- ?){3,}|(?:\\_ ?){3,})\\s*$",
        next: "allowBlock"
    }, { // list
        token : "markup.list",
        regex : "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
        next  : "listblock-start"
    }, {
        include : "basic"
    });

    this.addRules({
        "basic" : [{
            token : "constant.language.escape",
            regex : /\\[\\`*_{}\[\]()#+\-.!]/
        }, { // code span `
            token : "support.function",
            regex : "(`+)(.*?[^`])(\\1)"
        }, { // reference
            token : ["text", "constant", "text", "url", "string", "text"],
            regex : "^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:[\"][^\"]+[\"])?(\\s*))$"
        }, { // link by reference
            token : ["text", "string", "text", "constant", "text"],
            regex : "(\\[)(" + escaped("]") + ")(\\]\\s*\\[)("+ escaped("]") + ")(\\])"
        }, { // link by url
            token : ["text", "string", "text", "markup.underline", "string", "text"],
            regex : "(\\!?\\[)(" +                                        // [
                    escaped("]") +                                    // link text or alt text
                    ")(\\]\\()"+                                      // ](
                    '((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)' +        // href or image
                    '(\\s*"' +  escaped('"') + '"\\s*)?' +            // "title"
                    "(\\))"                                           // )
        }, { // strong ** __
            token : "string.strong",
            regex : "([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"
        }, { // emphasis * _
            token : "string.emphasis",
            regex : "([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"
        }, { //
            token : ["text", "url", "text"],
            regex : "(<)("+
                      "(?:https?|ftp|dict):[^'\">\\s]+"+
                      "|"+
                      "(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+"+
                    ")(>)"
        }],

        // code block
        "allowBlock": [
            {token : "support.function", regex : "^ {4}.+", next : "allowBlock"},
            {token : "empty_line", regex : '^$', next: "allowBlock"},
            {token : "empty", regex : "", next : "start"}
        ],

        "header" : [{
            regex: "$",
            next : "start"
        }, {
            include: "basic"
        }, {
            defaultToken : "heading"
        } ],

        "listblock-start" : [{
            token : "support.variable",
            regex : /(?:\[[ x]\])?/,
            next  : "listblock"
        }],

        "listblock" : [ { // Lists only escape on completely blank lines.
            token : "empty_line",
            regex : "^$",
            next  : "start"
        }, { // list
            token : "markup.list",
            regex : "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
            next  : "listblock-start"
        }, {
            include : "basic", noEscape: true
        },
        codeBlockStartRule,
        {
            defaultToken : "list" //do not use markup.list to allow stling leading `*` differntly
        } ],

        "blockquote" : [ { // Blockquotes only escape on blank lines.
            token : "empty_line",
            regex : "^\\s*$",
            next  : "start"
        }, { // block quote
            token : "string.blockquote",
            regex : "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
            next  : "blockquote"
        }, {
            include : "basic", noEscape: true
        }, {
            defaultToken : "string.blockquote"
        } ],

        "githubblock" : codeBlockRules
    });

    this.normalizeRules();
};
oop.inherits(MarkdownHighlightRules, TextHighlightRules);

exports.R = MarkdownHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.2561.js.map