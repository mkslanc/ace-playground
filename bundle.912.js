(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[912],{

/***/ 30912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var oop = __webpack_require__(21984);
var HtmlMode = (__webpack_require__(62656).Mode);
var HtmlHighlightRules = (__webpack_require__(65312)/* .HtmlHighlightRules */ .v);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var DjangoHighlightRules = function(){
    this.$rules = {
        'start': [{
            token: "string",
            regex: '".*?"'
        }, {
            token: "string",
            regex: "'.*?'"
        }, {
            token: "constant",
            regex: '[0-9]+'
        }, {
            token: "variable",
            regex: "[-_a-zA-Z0-9:]+"
        }],
        'tag': [{
            token: "entity.name.function",
            regex: "[a-zA-Z][_a-zA-Z0-9]*",
            next: "start"
        }]
    };
};

oop.inherits(DjangoHighlightRules, TextHighlightRules);

var DjangoHtmlHighlightRules = function() {
    this.$rules = new HtmlHighlightRules().getRules();

    for (var i in this.$rules) {
        this.$rules[i].unshift({
            token: "comment.line",
            regex: "\\{#.*?#\\}"
        }, {
            token: "comment.block",
            regex: "\\{\\%\\s*comment\\s*\\%\\}",
            merge: true,
            next: "django-comment"
        }, {
            token: "constant.language",
            regex: "\\{\\{",
            next: "django-start"
        }, {
            token: "constant.language",
            regex: "\\{\\%",
            next: "django-tag"
        });
        this.embedRules(DjangoHighlightRules, "django-", [{
                token: "comment.block",
                regex: "\\{\\%\\s*endcomment\\s*\\%\\}",
                merge: true,
                next: "start"
            }, {
                token: "constant.language",
                regex: "\\%\\}",
                next: "start"
            }, {
                token: "constant.language",
                regex: "\\}\\}",
                next: "start"
        }]);
    }
};

oop.inherits(DjangoHtmlHighlightRules, HtmlHighlightRules);

var Mode = function() {
    HtmlMode.call(this);
    this.HighlightRules = DjangoHtmlHighlightRules;
};
oop.inherits(Mode, HtmlMode);

(function() {
    this.$id = "ace/mode/django";
    this.snippetFileId = "ace/snippets/django";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.912.js.map