"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[5941],{

/***/ 95941:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var VHDLHighlightRules = (__webpack_require__(49730)/* .VHDLHighlightRules */ .K);

var Mode = function() {
    this.HighlightRules = VHDLHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "--";

    this.$id = "ace/mode/vhdl";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 49730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var VHDLHighlightRules = function() {


    
    var keywords = "access|after|alias|all|architecture|assert|attribute|"+
                   "begin|block|body|buffer|bus|case|component|configuration|"+
                   "context|disconnect|downto|else|elsif|end|entity|exit|"+
                   "file|for|force|function|generate|generic|group|guarded|"+
                   "if|impure|in|inertial|inout|is|label|library|linkage|"+
                   "literal|loop|map|new|next|of|on|or|open|others|out|"+
                   "package|parameter|port|postponed|procedure|process|"+
                   "protected|pure|range|record|register|reject|release|"+
                   "report|return|select|severity|shared|signal|subtype|then|"+
                   "to|transport|type|unaffected|units|until|use|variable|"+
                   "wait|when|while|with";
    
    var storageType = "bit|bit_vector|boolean|character|integer|line|natural|"+
                      "positive|real|register|signed|std_logic|"+
                      "std_logic_vector|string||text|time|unsigned";
    
    var storageModifiers = "array|constant";
    
    var keywordOperators = "abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|sra"+
                           "srl|xnor|xor";
    
    var builtinConstants = (
        "true|false|null"
    );


    var keywordMapper = this.createKeywordMapper({
        "keyword.operator": keywordOperators,
        "keyword": keywords,
        "constant.language": builtinConstants,
        "storage.modifier": storageModifiers,
        "storage.type": storageType
    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "--.*$"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "string",           // ' string
            regex : "'.*?'"
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : "keyword", // pre-compiler directives
            regex : "\\s*(?:library|package|use)\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword.operator",
            regex : "&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>" 
        }, {
              token : "punctuation.operator",
              regex : "\\'|\\:|\\,|\\;|\\."
        },{
            token : "paren.lparen",
            regex : "[[(]"
        }, {
            token : "paren.rparen",
            regex : "[\\])]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]

       
    };
};

oop.inherits(VHDLHighlightRules, TextHighlightRules);

exports.K = VHDLHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.5941.js.map