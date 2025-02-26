"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4186],{

/***/ 21277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);


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

exports.h = CuttlefishHighlightRules;


/***/ }),

/***/ 64186:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var CuttlefishHighlightRules = (__webpack_require__(21277)/* .CuttlefishHighlightRules */ .h);

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


/***/ })

}]);
//# sourceMappingURL=bundle.4186.js.map