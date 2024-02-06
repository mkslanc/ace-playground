"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[3764],{

/***/ 93764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var CuttlefishHighlightRules = (__webpack_require__(40380)/* .CuttlefishHighlightRules */ .k);

var Mode = function() {
    this.HighlightRules = CuttlefishHighlightRules;
    this.foldingRules = null;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.blockComment = null;
    this.$id = "ace/mode/cuttlefish";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 40380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);


var CuttlefishHighlightRules = function () {
    this.$rules = {
        start: [{
            token: ['text', 'comment'],
            regex: /^([ \t]*)(#.*)$/
        }, {
            token: ['text', 'keyword', 'text', 'string', 'text', 'comment'],
            regex: /^([ \t]*)(include)([ \t]*)([A-Za-z0-9-\_\.\*\/]+)([ \t]*)(#.*)?$/
        }, {
            token: ['text', 'keyword', 'text', 'operator', 'text', 'string', 'text', 'comment'],
            regex: /^([ \t]*)([A-Za-z0-9-_]+(?:\.[A-Za-z0-9-_]+)*)([ \t]*)(=)([ \t]*)([^ \t#][^#]*?)([ \t]*)(#.*)?$/
        }, {
            defaultToken: 'invalid'
        }]
    };

    this.normalizeRules();
};

CuttlefishHighlightRules.metaData = {
    fileTypes: ['conf'],
    keyEquivalent: '^~C',
    name: 'Cuttlefish',
    scopeName: 'source.conf'
};


oop.inherits(CuttlefishHighlightRules, TextHighlightRules);

exports.k = CuttlefishHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.3764.js.map