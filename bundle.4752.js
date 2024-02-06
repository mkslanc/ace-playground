"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4752],{

/***/ 74752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var GitignoreHighlightRules = (__webpack_require__(28720)/* .GitignoreHighlightRules */ .I);

var Mode = function() {
    this.HighlightRules = GitignoreHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/gitignore";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 28720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var GitignoreHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : /^\s*#.*$/
            }, {
                token : "keyword", // negated patterns
                regex : /^\s*!.*$/
            }
        ]
    };
    
    this.normalizeRules();
};

GitignoreHighlightRules.metaData = {
    fileTypes: ['gitignore'],
    name: 'Gitignore'
};

oop.inherits(GitignoreHighlightRules, TextHighlightRules);

exports.I = GitignoreHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.4752.js.map