"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[5143],{

/***/ 16948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var PascalHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
        "keyword.control": "absolute|abstract|all|and|and_then|array|as|asm|attribute|begin|bindable|case|class" +
            "|const|constructor|destructor|div|do|do|else|end|except|export|exports|external|far|file|finalization" +
            "|finally|for|forward|goto|if|implementation|import|in|inherited|initialization|interface|interrupt|is" +
            "|label|library|mod|module|name|near|nil|not|object|of|only|operator|or|or_else|otherwise|packed|pow|private" +
            "|program|property|protected|public|published|qualified|record|repeat|resident|restricted|segment|set|shl|shr" +
            "|then|to|try|type|unit|until|uses|value|var|view|virtual|while|with|xor"
    }, "identifier", true);

    this.$rules = {
        start: [{
                caseInsensitive: true,
                token: ['variable', "text",
                    'storage.type.prototype',
                    'entity.name.function.prototype'
                ],
                regex: '\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))'
            }, {
                caseInsensitive: true,
                token: ['variable', "text", 'storage.type.function', 'entity.name.function'],
                regex: '\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?'
            }, {
                caseInsensitive: true,
                token: keywordMapper,
                regex: /\b[a-z_]+\b/
            }, {
                token: 'constant.numeric',
                regex: '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b'
            }, {
                token: 'punctuation.definition.comment',
                regex: '--.*$'
            }, {
                token: 'punctuation.definition.comment',
                regex: '//.*$'
            }, {
                token: 'punctuation.definition.comment',
                regex: '\\(\\*',
                push: [{
                        token: 'punctuation.definition.comment',
                        regex: '\\*\\)',
                        next: 'pop'
                    },
                    { defaultToken: 'comment.block.one' }
                ]
            }, {
                token: 'punctuation.definition.comment',
                regex: '\\{',
                push: [{
                        token: 'punctuation.definition.comment',
                        regex: '\\}',
                        next: 'pop'
                    },
                    { defaultToken: 'comment.block.two' }
                ]
            }, {
                token: 'punctuation.definition.string.begin',
                regex: '"',
                push: [{ token: 'constant.character.escape', regex: '\\\\.' },
                    {
                        token: 'punctuation.definition.string.end',
                        regex: '"',
                        next: 'pop'
                    },
                    { defaultToken: 'string.quoted.double' }
                ]
                //Double quoted strings are an extension and (generally) support C-style escape sequences.
            }, {
                token: 'punctuation.definition.string.begin',
                regex: '\'',
                push: [{
                        token: 'constant.character.escape.apostrophe',
                        regex: '\'\''
                    },
                    {
                        token: 'punctuation.definition.string.end',
                        regex: '\'',
                        next: 'pop'
                    },
                    { defaultToken: 'string.quoted.single' }
                ]
            }, {
                token: 'keyword.operator',
                regex: '[+\\-;,/*%]|:=|='
            }
        ]
    };

    this.normalizeRules();
};

oop.inherits(PascalHighlightRules, TextHighlightRules);

exports.G = PascalHighlightRules;


/***/ }),

/***/ 69261:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var BaseFoldMode = (__webpack_require__(51358).FoldMode);
var Range = (__webpack_require__(91902)/* .Range */ .Q);

var FoldMode = exports.l = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    this.commentBlock = function(session, row) {
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "#")
            return;

        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            line = session.getLine(row);
            var level = line.search(re);

            if (level == -1)
                continue;

            if (line[level] != "#")
                break;

            endRow = row;
        }

        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
            return range;

        range = this.commentBlock(session, row);
        if (range)
            return range;
    };

    // must return "" if there's no fold, to enable caching
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);

        if (indent == -1) {
            session.foldWidgets[row - 1] = prevIndent!= -1 && prevIndent < nextIndent ? "start" : "";
            return "";
        }

        // documentation comments
        if (prevIndent == -1) {
            if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
                session.foldWidgets[row - 1] = "";
                session.foldWidgets[row + 1] = "";
                return "start";
            }
        } else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
            if (session.getLine(row - 2).search(/\S/) == -1) {
                session.foldWidgets[row - 1] = "start";
                session.foldWidgets[row + 1] = "";
                return "";
            }
        }

        if (prevIndent!= -1 && prevIndent < indent)
            session.foldWidgets[row - 1] = "start";
        else
            session.foldWidgets[row - 1] = "";

        if (indent < nextIndent)
            return "start";
        else
            return "";
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 75143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var PascalHighlightRules = (__webpack_require__(16948)/* .PascalHighlightRules */ .G);
// TODO: pick appropriate fold mode
var FoldMode = (__webpack_require__(69261)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = PascalHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
       
    this.lineCommentStart = ["--", "//"];
    this.blockComment = [
        {start: "(*", end: "*)"},
        {start: "{", end: "}"}
    ];
    
    this.$id = "ace/mode/pascal";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.5143.js.map