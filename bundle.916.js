"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[916],{

/***/ 80916:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* caption: Visualforce; extensions: component,page,vfp */



var oop = __webpack_require__(21984);
var HtmlMode = (__webpack_require__(62656).Mode);
var VisualforceHighlightRules = (__webpack_require__(89160)/* .VisualforceHighlightRules */ .m);
var XmlBehaviour = (__webpack_require__(18220)/* .XmlBehaviour */ .m);
var HtmlFoldMode = (__webpack_require__(77440)/* .FoldMode */ .W);

function VisualforceMode() {
    HtmlMode.call(this);

    this.HighlightRules = VisualforceHighlightRules;
    this.foldingRules = new HtmlFoldMode();
    this.$behaviour = new XmlBehaviour();
}

oop.inherits(VisualforceMode, HtmlMode);

VisualforceMode.prototype.emmetConfig = {
    profile: "xhtml"
};

exports.Mode = VisualforceMode;


/***/ }),

/***/ 89160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* global define */



var oop = __webpack_require__(21984);
var HtmlHighlightRules = (__webpack_require__(65312)/* .HtmlHighlightRules */ .v);

function string(options) {
    return {
        token: options.token + ".start",
        regex: options.start,
        push: [{
            token : "constant.language.escape",
            regex : options.escape
        }, {
            token: options.token + ".end",
            regex: options.start,
            next: "pop"
        }, {
            defaultToken: options.token
        }]
    };
}
var VisualforceHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
            "$Action|$Api|$Component|$ComponentLabel|$CurrentPage|$FieldSet|$Label|$Label|" +
            "$ObjectType|$Organization|$Page|$Permission|$Profile|$Resource|$SControl|" +
            "$Setup|$Site|$System.OriginDateTime|$User|$UserRole|" +
            "Site|UITheme|UIThemeDisplayed",
        "keyword":
            "",
        "storage.type":
            "",
        "constant.language":
            "true|false|null|TRUE|FALSE|NULL",
        "support.function":
            "DATE|DATEVALUE|DATETIMEVALUE|DAY|MONTH|NOW|TODAY|YEAR|BLANKVALUE|ISBLANK|" +
            "NULLVALUE|PRIORVALUE|AND|CASE|IF|ISCHANGED|ISNEW|ISNUMBER|NOT|OR|ABS|" +
            "CEILING|EXP|FLOOR|LN|LOG|MAX|MIN|MOD|ROUND|SQRT|BEGINS|BR|CASESAFEID|" +
            "CONTAINS|FIND|GETSESSIONID|HTMLENCODE|ISPICKVAL|JSENCODE|JSINHTMLENCODE|" +
            "LEFT|LEN|LOWER|LPAD|MID|RIGHT|RPAD|SUBSTITUTE|TEXT|TRIM|UPPER|URLENCODE|VALUE|" +
            "GETRECORDIDS|INCLUDE|LINKTO|REGEX|REQUIRESCRIPT|URLFOR|VLOOKUP|HTMLENCODE|JSENCODE|" +
            "JSINHTMLENCODE|URLENCODE"
    }, "identifier");

    HtmlHighlightRules.call(this);
    var hbs = {
        token : "keyword.start",
        regex : "{!",
        push : "Visualforce"
    };
    for (var key in this.$rules) {
        this.$rules[key].unshift(hbs);
    }
    this.$rules.Visualforce = [
        string({
            start: '"',
            escape: /\\[btnfr"'\\]/,
            token: "string",
            multiline: true
        }),
        string({
            start: "'",
            escape: /\\[btnfr"'\\]/,
            token: "string",
            multiline: true
        }),
        {
            token: "comment.start",
            regex : "\\/\\*",
            push: [
                {token : "comment.end", regex : "\\*\\/|(?=})", next : "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }, {
            token : "keyword.end",
            regex : "}",
            next : "pop"
        }, {
            token : keywordMapper,
            regex : /[a-zA-Z$_\u00a1-\uffff][a-zA-Z\d$_\u00a1-\uffff]*\b/
        }, {
            token : "keyword.operator",
            regex : /==|<>|!=|<=|>=|&&|\|\||[+\-*/^()=<>&]/
        }, {
            token : "punctuation.operator",
            regex : /[?:,;.]/
        }, {
            token : "paren.lparen",
            regex : /[\[({]/
        }, {
            token : "paren.rparen",
            regex : /[\])}]/
        }
    ];

    this.normalizeRules();
};

oop.inherits(VisualforceHighlightRules, HtmlHighlightRules);

exports.m = VisualforceHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.916.js.map