"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[9706],{

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


/***/ }),

/***/ 13149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);
var JavaHighlightRules = (__webpack_require__(12712)/* .JavaHighlightRules */ .m);

var JspHighlightRules = function() {
    HtmlHighlightRules.call(this);

    var builtinVariables = 'request|response|out|session|' +
            'application|config|pageContext|page|Exception';

    var keywords = 'page|include|taglib';

    var startRules = [
        {
            token : "comment",
            regex : "<%--",
            push : "jsp-dcomment"
        }, {
            token : "meta.tag", // jsp open tag
            regex : "<%@?|<%=?|<%!?|<jsp:[^>]+>",
            push  : "jsp-start"
        }
    ];

    var endRules = [
        {
            token : "meta.tag", // jsp close tag
            regex : "%>|<\\/jsp:[^>]+>",
            next  : "pop"
        }, {
            token: "variable.language",
            regex : builtinVariables
        }, {
            token: "keyword",
            regex : keywords
        }
    ];

    for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);

    this.embedRules(JavaHighlightRules, "jsp-", endRules, ["start"]);

    this.addRules({
        "jsp-dcomment" : [{
            token : "comment",
            regex : ".*?--%>",
            next : "pop"
        }]
    });

    this.normalizeRules();
};

oop.inherits(JspHighlightRules, HtmlHighlightRules);

exports.t = JspHighlightRules;


/***/ }),

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
                defaultToken: "comment.doc.body",
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
        regex: /\/\*\*(?!\/)/,
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

/***/ 93887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var Range = (__webpack_require__(91902)/* .Range */ .Q);
var BaseFoldMode = (__webpack_require__(51358).FoldMode);

var FoldMode = exports.l = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    
    //prevent naming conflict with any modes that inherit from cstyle and override this (like csharp)
    this._getFoldWidgetBase = this.getFoldWidget;
    
    /**
     * Gets fold widget with some non-standard extras:
     *
     * @example lineCommentRegionStart
     *      //#region [optional description]
     *
     * @example blockCommentRegionStart
     *      /*#region [optional description] *[/]
     *
     * @example tripleStarFoldingSection
     *      /*** this folds even though 1 line because it has 3 stars ***[/]
     * 
     * @note the pound symbol for region tags is optional
     */
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            // No widget for single line block comment unless region or triple star
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    
    /**
     * gets comment region block with end region assumed to be start of comment in any cstyle mode or SQL mode (--) which inherits from this.
     * There may optionally be a pound symbol before the region/endregion statement
     */
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 99706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var JspHighlightRules = (__webpack_require__(13149)/* .JspHighlightRules */ .t);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);
var CStyleFoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = JspHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.$id = "ace/mode/jsp";
    this.snippetFileId = "ace/snippets/jsp";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.9706.js.map