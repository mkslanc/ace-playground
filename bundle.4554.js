"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4554],{

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

/***/ 34554:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var DroolsHighlightRules = (__webpack_require__(99133)/* .DroolsHighlightRules */ .n);
var DroolsFoldMode = (__webpack_require__(69000)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = DroolsHighlightRules;
    this.foldingRules = new DroolsFoldMode();
    this.$behaviour = this.$defaultBehaviour;

};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.$id = "ace/mode/drools";
    this.snippetFileId = "ace/snippets/drools";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 99133:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var JavaHighlightRules = (__webpack_require__(12712)/* .JavaHighlightRules */ .m);
var DocCommentHighlightRules = (__webpack_require__(42124)/* .DocCommentHighlightRules */ .l);

var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";
var packageIdentifierRe = "[a-zA-Z\\$_\u00a1-\uffff][\\.a-zA-Z\\d\\$_\u00a1-\uffff]*";

var DroolsHighlightRules = function() {

    var keywords = ("date|effective|expires|lock|on|active|no|loop|auto|focus" +
        "|activation|group|agenda|ruleflow|duration|timer|calendars|refract|direct" +
        "|dialect|salience|enabled|attributes|extends|template" +
        "|function|contains|matches|eval|excludes|soundslike" +
        "|memberof|not|in|or|and|exists|forall|over|from|entry|point|accumulate|acc|collect" +
        "|action|reverse|result|end|init|instanceof|extends|super|boolean|char|byte|short" +
        "|int|long|float|double|this|void|class|new|case|final|if|else|for|while|do" +
        "|default|try|catch|finally|switch|synchronized|return|throw|break|continue|assert" +
        "|modify|static|public|protected|private|abstract|native|transient|volatile" +
        "|strictfp|throws|interface|enum|implements|type|window|trait|no-loop|str"
      );

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
        "keyword": keywords,
        "constant.language": "null",
        "support.class" : langClasses,
        "support.function" : "retract|update|modify|insert"
    }, "identifier");

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var stringRules = function() {
      return [{
        token : "string", // single line
        regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
      }, {
        token : "string", // single line
        regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
      }];
    };


      var basicPreRules = function(blockCommentRules) {
        return [{
            token : "comment",
            regex : "\\/\\/.*$"
        },
        DocCommentHighlightRules.getStartRule("doc-start"),
        {
            token : "comment", // multi line comment
            regex : "\\/\\*",
            next : blockCommentRules
        }, {
            token : "constant.numeric", // hex
            regex : "0[xX][0-9a-fA-F]+\\b"
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : "constant.language.boolean",
            regex : "(?:true|false)\\b"
          }];
      };

      var blockCommentRules = function(returnRule) {
        return [
            {
                token : "comment.block", // closing comment
                regex : "\\*\\/",
                next : returnRule
            }, {
                defaultToken : "comment.block"
            }
        ];
      };

      var basicPostRules = function() {
        return [{
            token : keywordMapper,
            // TODO: Unicode escape sequences
            // TODO: Unicode identifiers
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword.operator",
            regex : "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
        }, {
            token : "lparen",
            regex : "[[({]"
        }, {
            token : "rparen",
            regex : "[\\])}]"
        }, {
            token : "text",
            regex : "\\s+"
        }];
      };


    this.$rules = {
        "start" : [].concat(basicPreRules("block.comment"), [
              {
                token : "entity.name.type",
                regex : "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
              }, {
                // package com.example
                token : ["keyword","text","entity.name.type"],
                regex : "(package)(\\s+)(" + packageIdentifierRe +")"
              }, {
                // import function com.Util.staticMethod
                token : ["keyword","text","keyword","text","entity.name.type"],
                regex : "(import)(\\s+)(function)(\\s+)(" + packageIdentifierRe +")"
              }, {
                // import function com.Util.staticMethod
                token : ["keyword","text","entity.name.type"],
                regex : "(import)(\\s+)(" + packageIdentifierRe +")"
              }, {
                // global com.example.Type identifier
                token : ["keyword","text","entity.name.type","text","variable"],
                regex : "(global)(\\s+)(" + packageIdentifierRe +")(\\s+)(" + identifierRe +")"
              }, {
                // declare trait DeclaredType
                token : ["keyword","text","keyword","text","entity.name.type"],
                regex : "(declare)(\\s+)(trait)(\\s+)(" + identifierRe +")"
              }, {
                // declare trait DeclaredType
                token : ["keyword","text","entity.name.type"],
                regex : "(declare)(\\s+)(" + identifierRe +")"
              }, {
                // declare trait DeclaredType
                token : ["keyword","text","entity.name.type"],
                regex : "(extends)(\\s+)(" + packageIdentifierRe +")"
              }, {
                // rule ...
                token : ["keyword","text"],
                regex : "(rule)(\\s+)",
                next :  "asset.name"
              }],
              stringRules(),
              [{
                // variable :
                token : ["variable.other","text","text"],
                regex : "(" + identifierRe + ")(\\s*)(:)"
              }, {
                // query ...
                token : ["keyword","text"],
                regex : "(query)(\\s+)",
                next :  "asset.name"
              }, {
                // when ...
                token : ["keyword","text"],
                regex : "(when)(\\s*)"
              }, {
                // then <java/mvel code> end
                token : ["keyword","text"],
                regex : "(then)(\\s*)",
                next :  "java-start"
              }, {
                  token : "paren.lparen",
                  regex : /[\[({]/
              }, {
                  token : "paren.rparen",
                  regex : /[\])}]/
              }], basicPostRules()),
        "block.comment" : blockCommentRules("start"),
        "asset.name" : [
            {
                token : "entity.name",
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "entity.name",
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "entity.name",
                regex : identifierRe
            }, {
                regex: "",
                token: "empty",
                next: "start"
            }]
    };
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);

    this.embedRules(JavaHighlightRules, "java-", [
      {
       token : "support.function",
       regex: "\\b(insert|modify|retract|update)\\b"
     }, {
       token : "keyword",
       regex: "\\bend\\b",
       next  : "start"
    }]);

};

oop.inherits(DroolsHighlightRules, TextHighlightRules);

exports.n = DroolsHighlightRules;


/***/ }),

/***/ 69000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var Range = (__webpack_require__(91902)/* .Range */ .Q);
var BaseFoldMode = (__webpack_require__(51358).FoldMode);
var TokenIterator = (__webpack_require__(99339).TokenIterator);

var FoldMode = exports.l = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    // regular expressions that identify starting and stopping points
    this.foldingStartMarker = /\b(rule|declare|query|when|then)\b/; 
    this.foldingStopMarker = /\bend\b/;

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1]) {
                var position = {row: row, column: line.length};
                var iterator = new TokenIterator(session, position.row, position.column);
                var seek = "end";
                var token = iterator.getCurrentToken();
                if (token.value == "when") {
                    seek = "then";
                }
                while (token) {
                    if (token.value == seek) { 
                        return Range.fromPoints(position ,{
                            row: iterator.getCurrentTokenRow(),
                            column: iterator.getCurrentTokenColumn()
                        });
                    }
                    token = iterator.stepForward();
                }
            }

        }
        // test each line, and return a range of segments to collapse
    };

}).call(FoldMode.prototype);


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
//# sourceMappingURL=bundle.4554.js.map