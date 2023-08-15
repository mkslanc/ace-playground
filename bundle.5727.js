"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[5727],{

/***/ 62718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

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


exports.c = DocCommentHighlightRules;


/***/ }),

/***/ 12764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var Range = (__webpack_require__(59082)/* .Range */ .e);
var BaseFoldMode = (__webpack_require__(15369).FoldMode);

var FoldMode = exports.Z = function(commentRegex) {
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

/***/ 25727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(89359);
var TextMode = (__webpack_require__(98030).Mode);
var RustHighlightRules = (__webpack_require__(5278)/* .RustHighlightRules */ .q);
var FoldMode = (__webpack_require__(12764)/* .FoldMode */ .Z);

var Mode = function() {
    this.HighlightRules = RustHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/", nestable: true};
    this.$quotes = { '"': '"' };
    this.$id = "ace/mode/rust";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* This file was autogenerated from https://raw.github.com/dbp/sublime-rust/master/Rust.tmLanguage (uuid: ) */



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);
var DocCommentHighlightRules = (__webpack_require__(62718)/* .DocCommentHighlightRules */ .c);

var stringEscape = /\\(?:[nrt0'"\\]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\})/.source;
var wordPattern = /[a-zA-Z_\xa1-\uffff][a-zA-Z0-9_\xa1-\uffff]*/.source;
var RustHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    var keywordMapper = this.createKeywordMapper({
        "keyword.source.rust": "abstract|alignof|as|async|await|become|box|break|catch|continue|const|crate|"
            + "default|do|dyn|else|enum|extern|for|final|if|impl|in|let|loop|macro|match|mod|move|mut|offsetof|"
            + "override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|"
            + "unsafe|unsized|use|virtual|where|while|yield|try",
        "storage.type.source.rust": "Self|isize|usize|char|bool|u8|u16|u32|u64|u128|f16|f32|f64|i8|i16|i32|i64|"
            + "i128|str|option|either|c_float|c_double|c_void|FILE|fpos_t|DIR|dirent|c_char|c_schar|c_uchar|c_short|"
            + "c_ushort|c_int|c_uint|c_long|c_ulong|size_t|ptrdiff_t|clock_t|time_t|c_longlong|c_ulonglong|intptr_t|"
            + "uintptr_t|off_t|dev_t|ino_t|pid_t|mode_t|ssize_t",
        "constant.language.source.rust": "true|false|Some|None|Ok|Err|FALSE|TRUE",
        "support.constant.source.rust": "EXIT_FAILURE|EXIT_SUCCESS|RAND_MAX|EOF|SEEK_SET|SEEK_CUR|SEEK_END|_IOFBF|"
            + "_IONBF|_IOLBF|"
            + "BUFSIZ|FOPEN_MAX|FILENAME_MAX|L_tmpnam|TMP_MAX|O_RDONLY|O_WRONLY|O_RDWR|O_APPEND|O_CREAT|O_EXCL|O_TRUNC|"
            + "S_IFIFO|S_IFCHR|S_IFBLK|S_IFDIR|S_IFREG|S_IFMT|S_IEXEC|S_IWRITE|S_IREAD|S_IRWXU|S_IXUSR|S_IWUSR|S_IRUSR|"
            + "F_OK|R_OK|W_OK|X_OK|STDIN_FILENO|STDOUT_FILENO|STDERR_FILENO",
        "constant.language": "macro_rules|mac_variant"
    }, "identifier");

    this.$rules = {
        start: [
            {
                token: 'variable.other.source.rust', // `(?![\\\'])` to keep a lifetime name highlighting from continuing one character
                // past the name. The end `\'` will block this from matching for a character like
                // `'a'` (it should have character highlighting, not variable highlighting).
                regex: '\'' + wordPattern + '(?![\\\'])'
            }, {
                token: 'string.quoted.single.source.rust',
                regex: "'(?:[^'\\\\]|" + stringEscape + ")'"
            }, {
                token: 'identifier',
                regex: "r#" + wordPattern + "\\b"
            }, {
                stateName: "bracketedComment",
                onMatch: function (value, currentState, stack) {
                    stack.unshift(this.next, value.length - 1, currentState);
                    return "string.quoted.raw.source.rust";
                },
                regex: /r#*"/,
                next: [
                    {
                        onMatch: function (value, currentState, stack) {
                            var token = "string.quoted.raw.source.rust";
                            if (value.length >= stack[1]) {
                                if (value.length > stack[1]) token = "invalid";
                                stack.shift();
                                stack.shift();
                                this.next = stack.shift();
                            }
                            else {
                                this.next = "";
                            }
                            return token;
                        },
                        regex: /"#*/,
                        next: "start"
                    }, {
                        defaultToken: "string.quoted.raw.source.rust"
                    }
                ]
            }, {
                token: 'string.quoted.double.source.rust',
                regex: '"',
                push: [
                    {
                        token: 'string.quoted.double.source.rust',
                        regex: '"',
                        next: 'pop'
                    }, {
                        token: 'constant.character.escape.source.rust',
                        regex: stringEscape
                    }, {defaultToken: 'string.quoted.double.source.rust'}
                ]
            }, {
                token: ['keyword.source.rust', 'text', 'entity.name.function.source.rust', 'punctuation'],
                regex: '\\b(fn)(\\s+)((?:r#)?' + wordPattern + ')(<)',
                push: "generics"
            }, {
                token: ['keyword.source.rust', 'text', 'entity.name.function.source.rust'],
                regex: '\\b(fn)(\\s+)((?:r#)?' + wordPattern + ')'
            }, {
                token: ['support.constant', "punctuation"],
                regex: "(" + wordPattern + '::)(<)',
                push: "generics"
            }, {
                token: 'support.constant',
                regex: wordPattern + '::'
            }, {
                token: 'variable.language.source.rust',
                regex: '\\bself\\b'
            }, DocCommentHighlightRules.getStartRule("doc-start"), {
                token: 'comment.line.doc.source.rust',
                regex: '///.*$'
            }, {
                token: 'comment.line.doc.source.rust',
                regex: '//!.*$'
            }, {
                token: 'comment.line.double-dash.source.rust',
                regex: '//.*$'
            }, {
                token: 'comment.start.block.source.rust',
                regex: '/\\*',
                stateName: 'comment',
                push: [
                    {
                        token: 'comment.start.block.source.rust',
                        regex: '/\\*',
                        push: 'comment'
                    }, {
                        token: 'comment.end.block.source.rust',
                        regex: '\\*/',
                        next: 'pop'
                    }, {defaultToken: 'comment.block.source.rust'}
                ]
            }, {
                token: ["keyword.source.rust", "identifier", "punctuaction"],
                regex: "(?:(impl)|(" + wordPattern + "))(<)",
                stateName: 'generics',
                push: [
                    {
                        token: "punctuaction",
                        regex: "<",
                        push: "generics"
                    }, {
                        token: 'variable.other.source.rust', // `(?![\\\'])` to keep a lifetime name highlighting from continuing one character
                        // past the name. The end `\'` will block this from matching for a character like
                        // `'a'` (it should have character highlighting, not variable highlighting).
                        regex: '\'' + wordPattern + '(?![\\\'])'
                    }, {
                        token: "storage.type.source.rust",
                        regex: "\\b(u8|u16|u32|u64|u128|usize|i8|i16|i32|i64|i128|isize|char|bool)\\b"
                    }, {
                        token: "punctuation.operator",
                        regex: "[,:]"
                    }, {
                        token: "keyword",
                        regex: "\\b(?:const|dyn)\\b"
                    }, {
                        token: "punctuation",
                        regex: ">",
                        next: "pop"
                    }, {
                        token: "paren.lparen",
                        regex: "[(]"
                    }, {
                        token: "paren.rparen",
                        regex: "[)]"
                    }, {
                        token: "identifier",
                        regex: "\\b"+wordPattern+"\\b"
                    }, {
                        token: 'keyword.operator',
                        regex: "="
                    }
                ]
            }, {
                token: keywordMapper,
                regex: wordPattern
            }, {
                token: 'keyword.operator', // `[*/](?![*/])=?` is separated because `//` and `/* */` become comments and must be
                // guarded against. This states either `*` or `/` may be matched as long as the match
                // it isn't followed by either of the two. An `=` may be on the end.
                regex: /\$|[-=]>|[-+%^=!&|<>]=?|[*/](?![*/])=?/
            }, {
                token: "punctuation.operator",
                regex: /[?:,;.]/
            }, {
                token: "paren.lparen",
                regex: /[\[({]/
            }, {
                token: "paren.rparen",
                regex: /[\])}]/
            }, {
                token: 'meta.preprocessor.source.rust',
                regex: '\\b\\w\\(\\w\\)*!|#\\[[\\w=\\(\\)_]+\\]\\b'
            }, {
                token: 'constant.numeric.source.rust',
                regex: /\b(?:0x[a-fA-F0-9_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*(?!\.))(?:[iu](?:size|8|16|32|64|128))?\b/
            }, {
                token: 'constant.numeric.source.rust',
                regex: /\b(?:[0-9][0-9_]*)(?:\.[0-9][0-9_]*)?(?:[Ee][+-][0-9][0-9_]*)?(?:f32|f64)?\b/
            }
        ]
    };

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
    this.normalizeRules();
};

RustHighlightRules.metaData = { fileTypes: [ 'rs', 'rc' ],
      foldingStartMarker: '^.*\\bfn\\s*(\\w+\\s*)?\\([^\\)]*\\)(\\s*\\{[^\\}]*)?\\s*$',
      foldingStopMarker: '^\\s*\\}',
      name: 'Rust',
      scopeName: 'source.rust' };


oop.inherits(RustHighlightRules, TextHighlightRules);

exports.q = RustHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.5727.js.map