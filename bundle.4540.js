"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4540],{

/***/ 24540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var CsoundDocumentHighlightRules = (__webpack_require__(3692)/* .CsoundDocumentHighlightRules */ .q);

var Mode = function() {
    this.HighlightRules = CsoundDocumentHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/csound_document";
    this.snippetFileId = "ace/snippets/csound_document";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 3692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(21984);

var CsoundOrchestraHighlightRules = (__webpack_require__(27700)/* .CsoundOrchestraHighlightRules */ ._);
var CsoundScoreHighlightRules = (__webpack_require__(1240)/* .CsoundScoreHighlightRules */ .w);
var HtmlHighlightRules = (__webpack_require__(65312)/* .HtmlHighlightRules */ .v);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var CsoundDocumentHighlightRules = function() {

    var orchestraHighlightRules = new CsoundOrchestraHighlightRules("csound-");
    var scoreHighlightRules = new CsoundScoreHighlightRules("csound-score-");

    this.$rules = {
        "start": [
            {
                token : ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
                regex : /(<)(CsoundSynthesi[sz]er)(>)/,
                next  : "synthesizer"
            },
            {defaultToken : "text.csound-document"}
        ],

        "synthesizer": [
            {
                token : ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
                regex : "(</)(CsoundSynthesi[sz]er)(>)",
                next  : "start"
            }, {
                token : ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
                regex : "(<)(CsInstruments)(>)",
                next  : orchestraHighlightRules.embeddedRulePrefix + "start"
            }, {
                token : ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
                regex : "(<)(CsScore)(>)",
                next  : scoreHighlightRules.embeddedRulePrefix + "start"
            }, {
                token : ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
                regex : "(<)([Hh][Tt][Mm][Ll])(>)",
                next  : "html-start"
            }
        ]
    };

    this.embedRules(orchestraHighlightRules.getRules(), orchestraHighlightRules.embeddedRulePrefix, [{
        token : ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex : "(</)(CsInstruments)(>)",
        next  : "synthesizer"
    }]);
    this.embedRules(scoreHighlightRules.getRules(), scoreHighlightRules.embeddedRulePrefix, [{
        token : ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex : "(</)(CsScore)(>)",
        next  : "synthesizer"
    }]);
    this.embedRules(HtmlHighlightRules, "html-", [{
        token : ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex : "(</)([Hh][Tt][Mm][Ll])(>)",
        next  : "synthesizer"
    }]);

    this.normalizeRules();
};

oop.inherits(CsoundDocumentHighlightRules, TextHighlightRules);

exports.q = CsoundDocumentHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.4540.js.map