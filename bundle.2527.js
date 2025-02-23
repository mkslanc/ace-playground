"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2527],{

/***/ 13398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var XmlBehaviour = (__webpack_require__(63458).XmlBehaviour);

/**@type {(new() => Partial<import("../../../ace-internal").Ace.Behaviour>)}*/
var HtmlBehaviour = function () {

    XmlBehaviour.call(this);

};

oop.inherits(HtmlBehaviour, XmlBehaviour);

exports.D = HtmlBehaviour;


/***/ }),

/***/ 52527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* global define */

  

var oop = __webpack_require__(2645);
var HtmlMode = (__webpack_require__(32234).Mode);
var HandlebarsHighlightRules = (__webpack_require__(83628)/* .HandlebarsHighlightRules */ ._);
var HtmlBehaviour = (__webpack_require__(13398)/* .HtmlBehaviour */ .D);
var HtmlFoldMode = (__webpack_require__(6944).FoldMode);

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

/***/ 83628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* global define */



var oop = __webpack_require__(2645);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);

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

exports._ = HandlebarsHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.2527.js.map