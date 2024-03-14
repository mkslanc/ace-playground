"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[4341],{

/***/ 54341:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var lang = __webpack_require__(39955);
var HtmlMode = (__webpack_require__(32234).Mode);
var ColdfusionHighlightRules = (__webpack_require__(18178)/* .ColdfusionHighlightRules */ .E);

var voidElements = "cfabort|cfapplication|cfargument|cfassociate|cfbreak|cfcache|cfcollection|cfcookie|cfdbinfo|cfdirectory|cfdump|cfelse|cfelseif|cferror|cfexchangecalendar|cfexchangeconnection|cfexchangecontact|cfexchangefilter|cfexchangetask|cfexit|cffeed|cffile|cfflush|cfftp|cfheader|cfhtmlhead|cfhttpparam|cfimage|cfimport|cfinclude|cfindex|cfinsert|cfinvokeargument|cflocation|cflog|cfmailparam|cfNTauthenticate|cfobject|cfobjectcache|cfparam|cfpdfformparam|cfprint|cfprocparam|cfprocresult|cfproperty|cfqueryparam|cfregistry|cfreportparam|cfrethrow|cfreturn|cfschedule|cfsearch|cfset|cfsetting|cfthrow|cfzipparam)".split("|");

var Mode = function() {
    HtmlMode.call(this);
    
    this.HighlightRules = ColdfusionHighlightRules;
};
oop.inherits(Mode, HtmlMode);

(function() {

    // mix with html void elements
    this.voidElements = oop.mixin(lang.arrayToMap(voidElements), this.voidElements);

    this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
    };

    this.$id = "ace/mode/coldfusion";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 18178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var JavaScriptHighlightRules = (__webpack_require__(15903).JavaScriptHighlightRules);
var HtmlHighlightRules = (__webpack_require__(10413).HtmlHighlightRules);

var ColdfusionHighlightRules = function() {
    HtmlHighlightRules.call(this);
    this.$rules.tag[2].token = function (start, tag) {
        var group = tag.slice(0,2) == "cf" ? "keyword" : "meta.tag";
        return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
            group + ".tag-name.xml"];
    };

    var jsAndCss = Object.keys(this.$rules).filter(function(x) {
        return /^(js|css)-/.test(x);
    });
    this.embedRules({
        cfmlComment: [
            { regex: "<!---", token: "comment.start", push: "cfmlComment"}, 
            { regex: "--->", token: "comment.end", next: "pop"},
            { defaultToken: "comment"}
        ]
    }, "", [
        { regex: "<!---", token: "comment.start", push: "cfmlComment"}
    ], [
        "comment", "start", "tag_whitespace", "cdata"
    ].concat(jsAndCss));
    
    
    this.$rules.cfTag = [
        {include : "attributes"},
        {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "pop"}
    ];
    var cfTag = {
        token : function(start, tag) {
            return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
                "keyword.tag-name.xml"];
        },
        regex : "(</?)(cf[-_a-zA-Z0-9:.]+)",
        push: "cfTag"
    };
    jsAndCss.forEach(function(s) {
        this.$rules[s].unshift(cfTag);
    }, this);
    
    this.embedTagRules(new JavaScriptHighlightRules({jsx: false}).getRules(), "cfjs-", "cfscript");

    this.normalizeRules();
};

oop.inherits(ColdfusionHighlightRules, HtmlHighlightRules);

exports.E = ColdfusionHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.4341.js.map