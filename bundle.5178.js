"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[5178],{

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

/***/ 15178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var ZeekHighlightRules = (__webpack_require__(61101)/* .ZeekHighlightRules */ .l);
var FoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = ZeekHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    // Extra logic goes here.
    this.$id = "ace/mode/zeek";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 61101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var ZeekHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start": [
            {
            token: "comment.line",
            regex: "#.*$"
            },
            {
            token: "string.double",
            regex: /"/,
            next: "string-state"
            },
            {
            token: "string.regexp",
            regex: "(/)(?=.*/)",
            next: "pattern-state"
            },
            {
            token: ["keyword.other", "meta.preprocessor"],
            regex: /(@(?:load-plugin|load-sigs|load|unload))(.*$)/
            },
            {
            token: "keyword.other",
            regex: /@(?:DEBUG|DIR|FILENAME|deprecated|if|ifdef|ifndef|else|endif)/
            },
            {
            token: [
                "keyword.other",
                "meta.preprocessor",
                "keyword.operator",
                "meta.preprocessor"
            ],
            regex: /(@prefixes)(\s*)(\+?=)(.*$)/
            },
            {
            token: "storage.modifier.attribute",
            regex: /\&\b(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|error_handler|type_column|deprecated)\b/
            },
            {
            token: "constant.language",
            regex: /\b(?:T|F)\b/
            },
            {
            token: "constant.numeric.port",
            regex: /\b\d{1,5}\/(?:udp|tcp|icmp|unknown)\b/
            },
            {
            token: "constant.numeric.addr",
            regex: /\b(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\b/,
            comment: "IPv4 address"
            },
            {
            token: "constant.numeric.addr",
            regex: /\[(?:[0-9a-fA-F]{0,4}:){2,7}(?:[0-9a-fA-F]{0,4})?(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2}))?\]/,
            comment: "IPv6 address"
            },
            {
            token: "constant.numeric.float.decimal.interval",
            regex: /(?:(?:\d*\.\d*(?:[eE][+-]?\d+)?|\d*[eE][+-]?\d+|\d*\.\d*)|\d+)\s*(?:day|hr|min|msec|usec|sec)s?/
            },
            {
            token: "constant.numeric.float.decimal",
            regex: /\d*\.\d*(?:[eE][+-]?\d+)?|\d*[eE][+-]?\d+|\d*\.\d*/
            },
            {
            token: "constant.numeric.hostname",
            regex: /\b[A-Za-z0-9][A-Za-z0-9\-]*(?:\.[A-Za-z0-9][A-Za-z0-9\-]*)+\b/
            },
            {
            token: "constant.numeric.integer.hexadecimal",
            regex: /\b0x[0-9a-fA-F]+\b/
            },
            {
            token: "constant.numeric.integer.decimal",
            regex: /\b\d+\b/
            },
            {
            token: "keyword.operator",
            regex: /==|!=|<=|<|>=|>/
            },
            {
            token: "keyword.operator",
            regex: /(&&)|(\|\|)|(!)/
            },
            {
            token: "keyword.operator",
            regex: /=|\+=|-=/
            },
            {
            token: "keyword.operator",
            regex: /\+\+|\+|--|-|\*|\/|%/
            },
            {
            token: "keyword.operator",
            regex: /&|\||\^|~/
            },
            {
            token: "keyword.operator",
            regex: /\b(?:in|as|is)\b/
            },
            {
            token: "punctuation.terminator",
            regex: /;/
            },
            {
            token: "punctuation.accessor",
            regex: /\??\$/
            },
            {
            token: "punctuation.accessor",
            regex: /::/
            },
            {
            token: "keyword.operator",
            regex: /\?/
            },
            // Unsure how to tell if colon is used as operator vs. separator.
            // {
            // token: "keyword.operator",
            // regex: /:/
            // },
            {
            token: "punctuation.separator",
            regex: /:/
            },
            {
            token: "punctuation.separator",
            regex: /,/
            },
            {
            token: [
                "keyword.other",
                "meta.namespace",
                "entity.name.namespace"
            ],
            regex: /(module)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)/
            },
            {
            token: "keyword.other",
            regex: /\bexport\b/
            },
            {
            token: "keyword.control.conditional",
            regex: /\b(?:if|else)\b/
            },
            {
            token: "keyword.control",
            regex: /\b(?:for|while)\b/
            },
            {
            token: "keyword.control",
            regex: /\b(?:return|break|next|continue|fallthrough)\b/
            },
            {
            token: "keyword.control",
            regex: /\b(?:switch|default|case)\b/
            },
            {
            token: "keyword.other",
            regex: /\b(?:add|delete)\b/
            },
            {
            token: "keyword.other",
            regex: /\bprint\b/
            },
            {
            token: "keyword.control",
            regex: /\b(?:when|timeout|schedule)\b/
            },
            {
            token: [
                "keyword.other",
                "meta.struct.record",
                "entity.name.struct.record",
                "meta.struct.record",
                "punctuation.separator",
                "meta.struct.record",
                "storage.type.struct.record"
            ],
            regex: /\b(type)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(\s*)(:)(\s*\b)(record)\b/
            },
            {
            token: [
                "keyword.other",
                "meta.enum",
                "entity.name.enum",
                "meta.enum",
                "punctuation.separator",
                "meta.enum",
                "storage.type.enum"
            ],
            regex: /\b(type)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(\s*)(:)(\s*\b)(enum)\b/
            },
            {
            token: [
                "keyword.other",
                "meta.type",
                "entity.name.type",
                "meta.type",
                "punctuation.separator"
            ],
            regex: /\b(type)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(\s*)(:)/
            },
            {
            token: [
                "keyword.other",
                "meta.struct.record",
                "storage.type.struct.record",
                "meta.struct.record",
                "entity.name.struct.record"
            ],
            regex: /\b(redef)(\s+)(record)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)\b/
            },
            {
            token: [
                "keyword.other",
                "meta.enum",
                "storage.type.enum",
                "meta.enum",
                "entity.name.enum"
            ],
            regex: /\b(redef)(\s+)(enum)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)\b/
            },
            {
            token: [
                "storage.type",
                "text",
                "entity.name.function.event"
            ],
            regex: /\b(event)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(?=s*\()/
            },
            {
            token: [
                "storage.type",
                "text",
                "entity.name.function.hook"
            ],
            regex: /\b(hook)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(?=s*\()/
            },
            {
            token: [
                "storage.type",
                "text",
                "entity.name.function"
            ],
            regex: /\b(function)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)(?=s*\()/
            },
            {
            token: "keyword.other",
            regex: /\bredef\b/
            },
            {
            token: "storage.type",
            regex: /\bany\b/
            },
            {
            token: "storage.type",
            regex: /\b(?:enum|record|set|table|vector)\b/
            },
            {
            token: [
                "storage.type",
                "text",
                "keyword.operator",
                "text",
                "storage.type"
            ],
            regex: /\b(opaque)(\s+)(of)(\s+)([A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*)\b/
            },
            {
            token: "keyword.operator",
            regex: /\bof\b/
            },
            {
            token: "storage.type",
            regex: /\b(?:addr|bool|count|double|file|int|interval|pattern|port|string|subnet|time)\b/
            },
            {
            token: "storage.type",
            regex: /\b(?:function|hook|event)\b/
            },
            {
            token: "storage.modifier",
            regex: /\b(?:global|local|const|option)\b/
            },
            {
            token: "entity.name.function.call",
            regex: /\b[A-Za-z_][A-Za-z_0-9]*(?:::[A-Za-z_][A-Za-z_0-9]*)*(?=s*\()/
            },
            {
            token: "punctuation.section.block.begin",
            regex: /\{/
            },
            {
            token: "punctuation.section.block.end",
            regex: /\}/
            },
            {
            token: "punctuation.section.brackets.begin",
            regex: /\[/
            },
            {
            token: "punctuation.section.brackets.end",
            regex: /\]/
            },
            {
            token: "punctuation.section.parens.begin",
            regex: /\(/
            },
            {
            token: "punctuation.section.parens.end",
            regex: /\)/
            }

        ], // state: start

        "string-state": [
            {
            token: "constant.character.escape",
            regex: /\\./
            },
            {
            token: "string.double",
            regex: /"/,
            next: "start"
            },
            {
            token: "constant.other.placeholder",
            regex: /%-?[0-9]*(\.[0-9]+)?[DTdxsefg]/
            },
            {
            token: "string.double",
            regex: "."
            }
        ], // state: string-state

        "pattern-state": [
            {
            token: "constant.character.escape",
            regex: /\\./
            },
            {
            token: "string.regexp",
            regex: "/",
            next: "start"
            },
            {
            token: "string.regexp",
            regex: "."
            }
        ] // state: pattern-state

    };

    this.normalizeRules();
};

ZeekHighlightRules.metaData = {
    fileTypes: ["bro", "zeek"],
    name: "Zeek",
    scopeName: "source.zeek"
};


oop.inherits(ZeekHighlightRules, TextHighlightRules);

exports.l = ZeekHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.5178.js.map