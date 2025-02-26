"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4583],{

/***/ 58292:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var AssemblyARM32HighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { 
        start: [ 
            { 
                token: 'keyword.control.assembly',
                // should cover every instruction listed in https://pages.cs.wisc.edu/~markhill/restricted/arm_isa_quick_reference.pdf
                regex: '\\b(?:cpsid|cpsie|cps|setend|(?:srs|rfe)(?:ia|ib|da|db|fd|ed|fa|ea)|bkpt|nop|pld|cdp2|mrc2|mrrc2|mcr2|mcrr2|ldc2|stc2|(?:add|adc|sub|sbc|rsb|rsc|mul|mla|umull|umlal|smull|smlal|mvn|and|eor|orr|bic)(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?s?|(?:(?:q|qd)?(?:add|sub)|umaal|smul(?:b|t)(?:b|t)|smulw(?:b|t)|smla(?:b|t)(?:b|t)|smlaw(?:b|t)|smlal(?:b|t)(?:b|t)|smuadx?|smladx?|smlaldx?|smusdx?|smlsdx?|smlsldx?|smmulr?|smmlar?|smmlsr?|mia|miaph|mia(?:b|t)(?:b|t)|clz|(?:s|q|sh|u|uq|uh)(?:add16|sub16|add8|sub8|addsubx|subaddx)|usad8|usada8|mrs|msr|mra|mar|cpy|tst|teq|cmp|cmn|ssat|ssat16|usat|usat16|pkhbt|pkhtb|sxth|sxtb16|sxtb|uxth|uxtb16|uxtb|sxtah|sxtab16|sxtab|uxtah|uxtab16|uxtab|rev|rev16|revsh|sel|b|bl|bx|blx|bxj|swi|svc|ldrex|strex|cdp|mrc|mrrc|mcr|mcrr|ldc|stc)(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?|ldr(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?(?:t|b|bt|sb|h|sh|d)?|str(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?(?:t|b|bt|h|d)?|(?:ldm|stm)(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?(?:ia|ib|da|db|fd|ed|fa|ea)|swp(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?b?|mov(?:t|w)?)\\b',
                caseInsensitive: true
            },
            { 
                token: 'variable.parameter.register.assembly', 
                //          first half are actual registers until spsr, where it changes to fields and flexible operands
                regex: '\\b(?:r0|r1|r2|r3|r4|r5|r6|r7|r8|r9|r10|r11|r12|r13|r14|r15|fp|ip|sp|lr|pc|cpsr|spsr|c|f|s|x|lsl|lsr|asr|ror|rrx)\\b',
                caseInsensitive: true 
            },
            { 
                token: 'constant.character.hexadecimal.assembly',
                regex: '#0x[A-F0-9]+',
                caseInsensitive: true 
            },
            { 
                token: 'constant.character.decimal.assembly',
                regex: '#[0-9]+' 
            },
            { 
                token: 'string.assembly', 
                regex: /'([^\\']|\\.)*'/ 
            },
            { 
                token: 'string.assembly', 
                regex: /"([^\\"]|\\.)*"/ 
            },
            { 
                token: 'support.function.directive.assembly',
                regex: '(?:\.section|\.global|\.text|\.asciz|\.asciiz|\.ascii|\.align|\.byte|\.end|\.data|\.equ|\.extern|\.include)'
            },
            { 
                token: 'entity.name.function.assembly', 
                regex: '^\\s*%%[\\w.]+?:$' 
            },
            { 
                token: 'entity.name.function.assembly', 
                regex: '^\\s*%\\$[\\w.]+?:$' 
            },
            {
                token: 'entity.name.function.assembly', 
                regex: '^[\\w.]+?:' 
            },
            { 
                token: 'entity.name.function.assembly', 
                regex: '^[\\w.]+?\\b'
            },
            {
                token: 'comment.assembly', 
                regex: '\\/\\*', next: 'comment'
            },
            { 
                token: 'comment.assembly', 
                regex: '(?:;|//|@).*$' 
            } 
        ],
        comment:[
            {
                token: 'comment.assembly',
                regex: '\\*\\/', next:'start'
            },
            {
                defaultToken:'comment'
            }
        ]
    };
    
    this.normalizeRules();
};

AssemblyARM32HighlightRules.metaData = { fileTypes: [ 's' ],
      name: 'Assembly ARM32',
      scopeName: 'source.assembly' };


oop.inherits(AssemblyARM32HighlightRules, TextHighlightRules);

exports.V = AssemblyARM32HighlightRules;


/***/ }),

/***/ 64583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var AssemblyARM32HighlightRules = (__webpack_require__(58292)/* .AssemblyARM32HighlightRules */ .V);
var FoldMode = (__webpack_require__(69261)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = AssemblyARM32HighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = [";"];
	this.blockComment = {start: "/*", end: "*/"};
    this.$id = "ace/mode/assembly_arm32";
}).call(Mode.prototype);

exports.Mode = Mode;

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


/***/ })

}]);
//# sourceMappingURL=bundle.4583.js.map