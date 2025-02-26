"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4255],{

/***/ 3180:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var DocCommentHighlightRules = (__webpack_require__(42124)/* .DocCommentHighlightRules */ .l);

var ApexHighlightRules = function() {
    var mainKeywordMapper = this.createKeywordMapper({
        "variable.language": "activate|any|autonomous|begin|bigdecimal|byte|cast|char|collect|const"
             + "|end|exit|export|float|goto|group|having|hint|import|inner|into|join|loop|number|object|of|outer"
             + "|parallel|pragma|retrieve|returning|search|short|stat|synchronized|then|this_month"
             + "|transaction|type|when",
        "keyword": "private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final"
             + "|and|array|as|asc|break|bulk|by|catch|class|commit|continue|convertcurrency"
             + "|delete|desc|do|else|enum|extends|false|final|finally|for|from|future|global"
             + "|if|implements|in|insert|instanceof|interface|last_90_days|last_month"
             + "|last_n_days|last_week|like|limit|list|map|merge|new|next_90_days|next_month|next_n_days"
             + "|next_week|not|null|nulls|on|or|override|package|return"
             + "|rollback|savepoint|select|set|sort|super|testmethod|this|this_week|throw|today"
             + "|tolabel|tomorrow|trigger|true|try|undelete|update|upsert|using|virtual|webservice"
             + "|where|while|yesterday|switch|case|default",
        "storage.type":
            "def|boolean|byte|char|short|int|float|pblob|date|datetime|decimal|double|id|integer|long|string|time|void|blob|Object",
        "constant.language":
            "true|false|null|after|before|count|excludes|first|includes|last|order|sharing|with",
        "support.function":
            "system|apex|label|apexpages|userinfo|schema"
    }, "identifier", true);
    function keywordMapper(value) {
        if (value.slice(-3) == "__c") return "support.function";
        return mainKeywordMapper(value);
    }
    
    function string(start, options) {
        return {
            regex: start + (options.multiline ? "" : "(?=.)"),
            token: "string.start",
            next: [{
                regex: options.escape,
                token: "character.escape"
            }, {
                regex: options.error,
                token: "error.invalid"
            }, {
                regex: start + (options.multiline ? "" : "|$"),
                token: "string.end",
                next: options.next || "start"
            }, {
                defaultToken: "string"
            }]
        };
    }
    
    function comments() {
        return [{
                token : "comment",
                regex : "\\/\\/(?=.)",
                next : [
                    DocCommentHighlightRules.getTagRule(),
                    {token : "comment", regex : "$|^", next : "start"},
                    {defaultToken : "comment", caseInsensitive: true}
                ]
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : /\/\*/,
                next : [
                    DocCommentHighlightRules.getTagRule(),
                    {token : "comment", regex : "\\*\\/", next : "start"},
                    {defaultToken : "comment", caseInsensitive: true}
                ]
            }
        ];
    }
    
    this.$rules = {
        start: [
            string("'", {
                escape: /\\[nb'"\\]/,
                error: /\\./,
                multiline: false
            }),
            comments("c"),
            {
                type: "decoration",
                token: [
                    "meta.package.apex",
                    "keyword.other.package.apex",
                    "meta.package.apex",
                    "storage.modifier.package.apex",
                    "meta.package.apex",
                    "punctuation.terminator.apex"
                ],
                regex: /^(\s*)(package)\b(?:(\s*)([^ ;$]+)(\s*)((?:;)?))?/
            }, {
                 regex: /@[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,
                 token: "constant.language"
            },
            {
                regex: /[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,
                token: keywordMapper
            },  
            {
                regex: "`#%",
                token: "error.invalid"
            }, {
                token : "constant.numeric", // float
                regex : /[+-]?\d+(?:(?:\.\d*)?(?:[LlDdEe][+-]?\d+)?)\b|\.\d+[LlDdEe]/
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[]/,
                next  : "maybe_soql",
                merge : false
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start",
                merge : false
            }, {
                token : "paren.rparen",
                regex : /[\])}]/,
                merge : false
            } 
        ], 
        maybe_soql: [{
            regex: /\s+/,
            token: "text"
        }, {
            regex: /(SELECT|FIND)\b/,
            token: "keyword",
            caseInsensitive: true,
            next: "soql"
        }, {
            regex: "",
            token: "none",
            next: "start"
        }],
        soql: [{
            regex: "(:?ASC|BY|CATEGORY|CUBE|DATA|DESC|END|FIND|FIRST|FOR|FROM|GROUP|HAVING|IN|LAST"
                + "|LIMIT|NETWORK|NULLS|OFFSET|ORDER|REFERENCE|RETURNING|ROLLUP|SCOPE|SELECT"
                + "|SNIPPET|TRACKING|TYPEOF|UPDATE|USING|VIEW|VIEWSTAT|WHERE|WITH|AND|OR)\\b",
            token: "keyword",
            caseInsensitive: true
        }, {
            regex: "(:?target_length|toLabel|convertCurrency|count|Contact|Account|User|FIELDS)\\b",
            token: "support.function",
            caseInsensitive: true
        }, {
            token : "paren.rparen",
            regex : /[\]]/,
            next  : "start",
            merge : false
        }, 
        string("'", {
            escape: /\\[nb'"\\]/,
            error: /\\./,
            multiline: false,
            next: "soql"
        }),
        string('"', {
            escape: /\\[nb'"\\]/,
            error: /\\./,
            multiline: false,
            next: "soql"
        }),
        {
            regex: /\\./,
            token: "character.escape"
        },
        {
            regex : /[\?\&\|\!\{\}\[\]\(\)\^\~\*\:\"\'\+\-\,\.=\\\/]/,
            token : "keyword.operator"
        }],
        
        "log-start" : [ {
            token : "timestamp.invisible",
            regex : /^[\d:.() ]+\|/, 
            next: "log-header"
        },  {
            token : "timestamp.invisible",
            regex : /^  (Number of|Maximum)[^:]*:/,
            next: "log-comment"
        }, {
            token : "invisible",
            regex : /^Execute Anonymous:/,
            next: "log-comment"
        },  {
            defaultToken: "text"
        }],
        "log-comment": [{
            token : "log-comment",
            regex : /.*$/,
            next: "log-start"
        }],
        "log-header": [{
            token : "timestamp.invisible",
            regex : /((USER_DEBUG|\[\d+\]|DEBUG)\|)+/
        },
        {
            token : "keyword",
            regex: "(?:EXECUTION_FINISHED|EXECUTION_STARTED|CODE_UNIT_STARTED"
                + "|CUMULATIVE_LIMIT_USAGE|LIMIT_USAGE_FOR_NS"
                + "|CUMULATIVE_LIMIT_USAGE_END|CODE_UNIT_FINISHED)"
        }, {
            regex: "",
            next: "log-start"
        }]
    };
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
        

    this.normalizeRules();
};


oop.inherits(ApexHighlightRules, TextHighlightRules);

exports.U = ApexHighlightRules;


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

/***/ 54255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* caption: Apex; extensions: apex,cls,trigger,tgr */



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var ApexHighlightRules = (__webpack_require__(3180)/* .ApexHighlightRules */ .U);
var FoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

function ApexMode() {
    TextMode.call(this);

    this.HighlightRules = ApexHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
}

oop.inherits(ApexMode, TextMode);

ApexMode.prototype.lineCommentStart = "//";

ApexMode.prototype.blockComment = {
    start: "/*",
    end: "*/"
};

exports.Mode = ApexMode;


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


/***/ })

}]);
//# sourceMappingURL=bundle.4255.js.map