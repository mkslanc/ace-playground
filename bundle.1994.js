"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[1994],{

/***/ 31994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var PropertiesHighlightRules = (__webpack_require__(85821)/* .PropertiesHighlightRules */ .T);

var Mode = function() {
    this.HighlightRules = PropertiesHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/properties";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 85821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var PropertiesHighlightRules = function() {

    var escapeRe = /\\u[0-9a-fA-F]{4}|\\/;

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : /[!#].*$/
            }, {
                // Empty value
                token : "keyword",
                regex : /[=:]$/
            }, {
                token : "keyword",
                regex : /[=:]/,
                next  : "value"
            }, {
                token : "constant.language.escape",
                regex : escapeRe
            }, {
                defaultToken: "variable"
            }
        ],
        "value" : [
            {
                // Multi-line string
                regex : /\\$/,
                token : "string",
                next : "value"
            }, {
                regex : /$/,
                token : "string",
                next : "start"
            }, {
                token : "constant.language.escape",
                regex : escapeRe
            }, {
                defaultToken: "string"
            }
        ]
    };

};

oop.inherits(PropertiesHighlightRules, TextHighlightRules);

exports.T = PropertiesHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.1994.js.map