"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[3816],{

/***/ 23816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var VerilogHighlightRules = (__webpack_require__(11512)/* .VerilogHighlightRules */ .w);
var Range = (__webpack_require__(82080)/* .Range */ .E);

var Mode = function() {
    this.HighlightRules = VerilogHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$quotes = { '"': '"' };


    this.$id = "ace/mode/verilog";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 11512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var VerilogHighlightRules = function() {
var keywords = "always|and|assign|automatic|begin|buf|bufif0|bufif1|case|casex|casez|cell|cmos|config|" +
    "deassign|default|defparam|design|disable|edge|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|" +
    "endprimitive|endspecify|endtable|endtask|event|for|force|forever|fork|function|generate|genvar|highz0|" +
    "highz1|if|ifnone|incdir|include|initial|inout|input|instance|integer|join|large|liblist|library|localparam|" +
    "macromodule|medium|module|nand|negedge|nmos|nor|noshowcancelled|not|notif0|notif1|or|output|parameter|pmos|" +
    "posedge|primitive|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|rcmos|real|realtime|" +
    "reg|release|repeat|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|showcancelled|signed|small|specify|specparam|" +
    "strong0|strong1|supply0|supply1|table|task|time|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|" +
    "unsigned|use|vectored|wait|wand|weak0|weak1|while|wire|wor|xnor|xor" +
    "begin|bufif0|bufif1|case|casex|casez|config|else|end|endcase|endconfig|endfunction|" +
    "endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|for|forever|function|generate|if|ifnone|" +
    "macromodule|module|primitive|repeat|specify|table|task|while";

    var builtinConstants = (
        "true|false|null"
    );

    var builtinFunctions = (
        "count|min|max|avg|sum|rank|now|coalesce|main"
    );

    var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants
    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "//.*$"
        }, {
            token : "comment.start",
            regex : "/\\*",
            next : [
                { token : "comment.end", regex : "\\*/", next: "start" },
                { defaultToken : "comment" }
            ]
        }, {
            token : "string.start",
            regex : '"',
            next : [
                { token : "constant.language.escape", regex : /\\(?:[ntvfa\\"]|[0-7]{1,3}|\x[a-fA-F\d]{1,2}|)/, consumeLineEnd : true },
                { token : "string.end", regex : '"|$', next: "start" },
                { defaultToken : "string" }
            ]
        }, {
            token : "string",
            regex : "'^[']'"
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword.operator",
            regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
    this.normalizeRules();
};

oop.inherits(VerilogHighlightRules, TextHighlightRules);

exports.w = VerilogHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.3816.js.map