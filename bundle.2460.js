"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2460],{

/***/ 96:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var XmlBehaviour = (__webpack_require__(18220)/* .XmlBehaviour */ .m);

var HtmlBehaviour = function () {

    XmlBehaviour.call(this);

};

oop.inherits(HtmlBehaviour, XmlBehaviour);

exports.E = HtmlBehaviour;


/***/ }),

/***/ 82460:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* global define */

  

var oop = __webpack_require__(21984);
var HtmlMode = (__webpack_require__(62656).Mode);
var HandlebarsHighlightRules = (__webpack_require__(86192)/* .HandlebarsHighlightRules */ .k);
var HtmlBehaviour = (__webpack_require__(96)/* .HtmlBehaviour */ .E);
var HtmlFoldMode = (__webpack_require__(77440)/* .FoldMode */ .W);

var Mode = function() {
    HtmlMode.call(this);
    this.HighlightRules = HandlebarsHighlightRules;
    this.$behaviour = new HtmlBehaviour();
};

oop.inherits(Mode, HtmlMode);

(function() {
    this.blockComment = {start: "{{!--", end: "--}}"};
    this.$id = "ace/mode/handlebars";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 86192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* global define */



var oop = __webpack_require__(21984);
var HtmlHighlightRules = (__webpack_require__(65312)/* .HtmlHighlightRules */ .v);

function pop2(currentState, stack) {
    stack.splice(0, 3);
    return stack.shift() || "start";
}
var HandlebarsHighlightRules = function() {
    HtmlHighlightRules.call(this);
    var hbs = {
        regex : "(?={{)",
        push : "handlebars"
    };
    for (var key in this.$rules) {
        this.$rules[key].unshift(hbs);
    }
    this.$rules.handlebars = [{
        token : "comment.start",
        regex : "{{!--",
        push : [{
            token : "comment.end",
            regex : "--}}",
            next : pop2
        }, {
            defaultToken : "comment"
        }]
    }, {
        token : "comment.start",
        regex : "{{!",
        push : [{
            token : "comment.end",
            regex : "}}",
            next : pop2
        }, {
            defaultToken : "comment"
        }]
    }, {
        token : "support.function", // unescaped variable
        regex : "{{{",
        push : [{
            token : "support.function",
            regex : "}}}",
            next : pop2
        }, {
            token : "variable.parameter",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }, {
        token : "storage.type.start", // begin section
        regex : "{{[#\\^/&]?",
        push : [{
            token : "storage.type.end",
            regex : "}}",
            next : pop2
        }, {
            token : "variable.parameter",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }];

    this.normalizeRules();
};

oop.inherits(HandlebarsHighlightRules, HtmlHighlightRules);

exports.k = HandlebarsHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.2460.js.map