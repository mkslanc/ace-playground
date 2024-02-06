"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[9808],{

/***/ 79808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var PropertiesHighlightRules = (__webpack_require__(31980)/* .PropertiesHighlightRules */ .E);

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

/***/ 31980:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

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

exports.E = PropertiesHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.9808.js.map