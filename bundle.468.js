"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[468],{

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

/***/ 40468:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var HighlightRules = (__webpack_require__(79255)/* .HighlightRules */ .G);
// TODO: pick appropriate fold mode
var FoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = HighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/", nestable: true};
    
    this.$id = "ace/mode/swift";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 79255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var oop = __webpack_require__(2645);
var lang = __webpack_require__(39955);
var DocCommentHighlightRules = (__webpack_require__(42124)/* .DocCommentHighlightRules */ .l);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var SwiftHighlightRules = function() {
   var keywordMapper = this.createKeywordMapper({
        "variable.language": "",
        "keyword": "__COLUMN__|__FILE__|__FUNCTION__|__LINE__"
            + "|as|associativity|break|case|class|continue|default|deinit|didSet"
            + "|do|dynamicType|else|enum|extension|fallthrough|for|func|get|if|import"
            + "|in|infix|init|inout|is|left|let|let|mutating|new|none|nonmutating"
            + "|operator|override|postfix|precedence|prefix|protocol|return|right"
            + "|safe|Self|self|set|struct|subscript|switch|Type|typealias"
            + "|unowned|unsafe|var|weak|where|while|willSet"
            + "|convenience|dynamic|final|infix|lazy|mutating|nonmutating|optional|override|postfix"
            + "|prefix|required|static|guard|defer",
        "storage.type": "bool|double|Double"
            + "|extension|float|Float|int|Int|open|internal|fileprivate|private|public|string|String",
        "constant.language":
            "false|Infinity|NaN|nil|no|null|null|off|on|super|this|true|undefined|yes",
        "support.function":
            ""
    }, "identifier");
    
    function string(start, options) {
        var nestable = options.nestable || options.interpolation;
        var interpStart = options.interpolation && options.interpolation.nextState || "start";
        var mainRule = {
            regex: start + (options.multiline ? "" : "(?=.)"),
            token: "string.start"
        };
        var nextState = [
            options.escape && {
                regex: options.escape,
                token: "character.escape"
            },
            options.interpolation && {
                token : "paren.quasi.start",
                regex : lang.escapeRegExp(options.interpolation.lead + options.interpolation.open),
                push  : interpStart
            },
            options.error && {
                regex: options.error,
                token: "error.invalid"
            }, 
            {
                regex: start + (options.multiline ? "" : "|$"),
                token: "string.end",
                next: nestable ? "pop" : "start"
            }, {
                defaultToken: "string"
            }
        ].filter(Boolean);
        
        if (nestable)
            mainRule.push = nextState;
        else
            mainRule.next = nextState;
        
        if (!options.interpolation)
            return mainRule;
        
        var open = options.interpolation.open;
        var close = options.interpolation.close;
        var counter = {
            regex: "[" + lang.escapeRegExp(open + close) + "]",
            onMatch: function(val, state, stack) {
                this.next = val == open ? this.nextState : "";
                if (val == open && stack.length) {
                    stack.unshift("start", state);
                    return "paren";
                }
                if (val == close && stack.length) {
                    stack.shift();
                    this.next = stack.shift();
                    if (this.next.indexOf("string") != -1)
                        return "paren.quasi.end";
                }
                return val == open ? "paren.lparen" : "paren.rparen";
            },
            nextState: interpStart
        }; 
        return [counter, mainRule];
    }
    
    function comments() {
        return [{
                token : "comment",
                regex : /\/\//,
                next : [
                    DocCommentHighlightRules.getTagRule(),
                    {token : "comment", regex : "$|^", next: "start"},
                    {defaultToken : "comment", caseInsensitive: true}
                ]
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment.start",
                regex : /\/\*/,
                stateName: "nested_comment",
                push : [
                    DocCommentHighlightRules.getTagRule(),
                    {token : "comment.start", regex : /\/\*/, push: "nested_comment"},
                    {token : "comment.end", regex : "\\*\\/", next : "pop"},
                    {defaultToken : "comment", caseInsensitive: true}
                ]
            }
        ];
    }
    

    this.$rules = {
        start: [
            string('"""', {
                escape: /\\(?:[0\\tnr"']|u{[a-fA-F1-9]{0,8}})/,
                interpolation: {lead: "\\", open: "(", close: ")"},
                error: /\\./,
                multiline: true
            }),
            string('"', {
                escape: /\\(?:[0\\tnr"']|u{[a-fA-F1-9]{0,8}})/,
                interpolation: {lead: "\\", open: "(", close: ")"},
                error: /\\./,
                multiline: false
            }),
            comments(),
            {
                 regex: /@[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,
                 token: "variable.parameter"
            },
            {
                regex: /[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,
                token: keywordMapper
            },  
            {
                token : "constant.numeric", 
                regex : /[+-]?(?:0(?:b[01]+|o[0-7]+|x[\da-fA-F])|\d+(?:(?:\.\d*)?(?:[PpEe][+-]?\d+)?)\b)/
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start"
            }, {
                token : "paren.rparen",
                regex : /[\])}]/
            } 
            
        ]
    };
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
    
    this.normalizeRules();
};


oop.inherits(SwiftHighlightRules, TextHighlightRules);

exports.G = SwiftHighlightRules;
__webpack_unused_export__ = SwiftHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.468.js.map