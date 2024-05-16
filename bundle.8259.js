"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[8259],{

/***/ 42124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var DocCommentHighlightRules = function () {
    this.$rules = {
        "start": [
            {
                token: "comment.doc.tag",
                regex: "@\\w+(?=\\s|$)"
            }, DocCommentHighlightRules.getTagRule(), {
                defaultToken: "comment.doc",
                caseInsensitive: true
            }
        ]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.l = DocCommentHighlightRules;


/***/ }),

/***/ 52649:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var CStyleFoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);
var Range = (__webpack_require__(91902)/* .Range */ .Q);

var FoldMode = exports.l = function() {};
oop.inherits(FoldMode, CStyleFoldMode);

(function() {
    this.importRegex = /^import /;
    this.getCStyleFoldWidget = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        if (foldStyle === "markbegin") {
            var line = session.getLine(row);
            if (this.importRegex.test(line)) {
                if (row == 0 || !this.importRegex.test(session.getLine(row - 1)))
                    return "start";
            }
        }

        return this.getCStyleFoldWidget(session, foldStyle, row);
    };
    
    this.getCstyleFoldWidgetRange = this.getFoldWidgetRange;
    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        var match = line.match(this.importRegex);
        if (!match || foldStyle !== "markbegin")
            return this.getCstyleFoldWidgetRange(session, foldStyle, row, forceMultiline);

        var startColumn = match[0].length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            var line = session.getLine(row);
            if (line.match(/^\s*$/))
                continue;

            if (!line.match(this.importRegex))
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

/***/ 38259:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var JavaScriptMode = (__webpack_require__(93388).Mode);
var JavaHighlightRules = (__webpack_require__(12712)/* .JavaHighlightRules */ .m);
var JavaFoldMode = (__webpack_require__(52649)/* .FoldMode */ .l);

var Mode = function() {
    JavaScriptMode.call(this);
    this.HighlightRules = JavaHighlightRules;
    this.foldingRules = new JavaFoldMode();
};
oop.inherits(Mode, JavaScriptMode);

(function() {
    
    this.createWorker = function(session) {
        return null;
    };

    this.$id = "ace/mode/java";
    this.snippetFileId = "ace/snippets/java";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 12712:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var DocCommentHighlightRules = (__webpack_require__(42124)/* .DocCommentHighlightRules */ .l);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var JavaHighlightRules = function() {
    var identifierRe = "[a-zA-Z_$][a-zA-Z0-9_$]*";

    // taken from http://download.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html
    var keywords = (
    "abstract|continue|for|new|switch|" +
    "assert|default|goto|package|synchronized|" +
    "boolean|do|if|private|this|" +
    "break|double|implements|protected|throw|" +
    "byte|else|import|public|throws|" +
    "case|enum|instanceof|return|transient|" +
    "catch|extends|int|short|try|" +
    "char|final|interface|static|void|" +
    "class|finally|long|strictfp|volatile|" +
    "const|float|native|super|while|" +
    "var|exports|opens|requires|uses|yield|" +
    "module|permits|(?:non\\-)?sealed|var|" +
    "provides|to|when|" +
    "open|record|transitive|with"    
    );

    var buildinConstants = ("null|Infinity|NaN|undefined");


    var langClasses = (
        "AbstractMethodError|AssertionError|ClassCircularityError|"+
        "ClassFormatError|Deprecated|EnumConstantNotPresentException|"+
        "ExceptionInInitializerError|IllegalAccessError|"+
        "IllegalThreadStateException|InstantiationError|InternalError|"+
        "NegativeArraySizeException|NoSuchFieldError|Override|Process|"+
        "ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|"+
        "SuppressWarnings|TypeNotPresentException|UnknownError|"+
        "UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|"+
        "InstantiationException|IndexOutOfBoundsException|"+
        "ArrayIndexOutOfBoundsException|CloneNotSupportedException|"+
        "NoSuchFieldException|IllegalArgumentException|NumberFormatException|"+
        "SecurityException|Void|InheritableThreadLocal|IllegalStateException|"+
        "InterruptedException|NoSuchMethodException|IllegalAccessException|"+
        "UnsupportedOperationException|Enum|StrictMath|Package|Compiler|"+
        "Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|"+
        "NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|"+
        "NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|"+
        "Character|Boolean|StackTraceElement|Appendable|StringBuffer|"+
        "Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|"+
        "StackOverflowError|OutOfMemoryError|VirtualMachineError|"+
        "ArrayStoreException|ClassCastException|LinkageError|"+
        "NoClassDefFoundError|ClassNotFoundException|RuntimeException|"+
        "Exception|ThreadDeath|Error|Throwable|System|ClassLoader|"+
        "Cloneable|Class|CharSequence|Comparable|String|Object"
    );

    var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "constant.language": buildinConstants,
        "support.function": langClasses
    }, "identifier");

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            },
            {include: "multiline-strings"},
            {include: "strings"},
            {include: "constants"},
            {
                regex: "(open(?:\\s+))?module(?=\\s*\\w)",
                token: "keyword",
                next: [{
                    regex: "{",
                    token: "paren.lparen",
                    next: [{
                        regex: "}",
                        token: "paren.rparen",
                        next: "start"
                    }, {
                        // From Section 3.9 of http://cr.openjdk.java.net/~mr/jigsaw/spec/java-se-9-jls-diffs.pdf
                        regex: "\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",
                        token: "keyword" 
                    }]
                }, {
                    token : "text",
                    regex : "\\s+"
                }, {
                    token : "identifier",
                    regex : "\\w+"
                }, {
                    token : "punctuation.operator",
                    regex : "."
                }, {
                    token : "text",
                    regex : "\\s+"
                }, {
                    regex: "", // exit if there is anything else
                    next: "start"
                }]
            },
            {include: "statements"}
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
        "strings": [
            {
                token: ["punctuation", "string"],
                regex: /(\.)(")/,
                push: [
                    {
                        token: "lparen",
                        regex: /\\\{/,
                        push: [
                            {
                                token: "text",
                                regex: /$/,
                                next: "start"
                            }, {
                                token: "rparen",
                                regex: /}/,
                                next: "pop"
                            }, {
                                include: "strings"
                            }, {
                                include: "constants"
                            }, {
                                include: "statements"
                            }
                        ]
                    }, {
                        token: "string",
                        regex: /"/,
                        next: "pop"
                    }, {
                        defaultToken: "string"
                    }
                ]
            },  {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }
        ],
        "multiline-strings": [
            {
                token: ["punctuation", "string"],
                regex: /(\.)(""")/,
                push: [
                    {
                        token: "string",
                        regex: '"""',
                        next: "pop"
                    }, {
                        token: "lparen",
                        regex: /\\\{/,
                        push: [
                            {
                                token: "text",
                                regex: /$/,
                                next: "start"
                            }, {
                                token: "rparen",
                                regex: /}/,
                                next: "pop"
                            }, {
                                include: "multiline-strings"
                            }, {
                                include: "strings"
                            }, {
                                include: "constants"
                            }, {
                                include: "statements"
                            }
                        ]
                    }, {
                        token: "constant.language.escape",
                        regex: /\\./
                    }, {
                        defaultToken: "string"
                    }
                ]
            },
            {
                token: "string",
                regex: '"""',
                push: [
                    {
                        token: "string",
                        regex: '"""',
                        next: "pop"
                    }, {
                        token : "constant.language.escape",
                        regex : /\\./
                    }, {
                        defaultToken: "string"
                    }
                ]
            }
        ],
        "constants": [
            {
                token: "constant.numeric", // hex
                regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            }, {
                token: "constant.numeric", // float
                regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            }, {
                token: "constant.language.boolean",
                regex: "(?:true|false)\\b"
            }
        ],
        "statements": [
            {
                token: ["keyword", "text", "identifier"],
                regex: "(record)(\\s+)("+identifierRe+")\\b"
            },
            {
                token: "keyword",
                regex: "(?:" + keywords + ")\\b"
            }, {//annotations
                token: "storage.type.annotation",
                regex: "@" + identifierRe + "\\b"
            }, {
                token: "entity.name.function",
                regex: identifierRe + "(?=\\()"
            }, {
                token: keywordMapper, // TODO: Unicode escape sequences
                // TODO: Unicode identifiers
                regex: identifierRe + "\\b"
            }, {
                token: "keyword.operator",
                regex: "!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            }, {
                token: "lparen",
                regex: "[[({]"
            }, {
                token: "rparen",
                regex: "[\\])}]"
            }, {
                token: "text",
                regex: "\\s+"
            }
        ]
    };

    
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
    this.normalizeRules();
};

oop.inherits(JavaHighlightRules, TextHighlightRules);

exports.m = JavaHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.8259.js.map