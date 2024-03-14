(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[5005],{

/***/ 25005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var GherkinHighlightRules = (__webpack_require__(18394)/* .GherkinHighlightRules */ .M);

var Mode = function() {
    this.HighlightRules = GherkinHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/gherkin";

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var space2 = "  ";

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        
        if(line.match("[ ]*\\|")) {
            indent += "| ";
        }

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }
        

        if (state == "start") {
            if (line.match("Scenario:|Feature:|Scenario Outline:|Background:")) {
                indent += space2;
            } else if(line.match("(Given|Then).+(:)$|Examples:")) {
                indent += space2;
            } else if(line.match("\\*.+")) {
                indent += "* ";
            } 
        }
        

        return indent;
    };
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 18394:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);
var stringEscape =  "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";

var GherkinHighlightRules = function() {
    var languages = [{
        name: "en",
        labels: "Feature|Background|Scenario(?: Outline)?|Examples",
        keywords: "Given|When|Then|And|But"
    }
    /* TODO find a way to enable this when first line in the file is # language: pl
    , {
        name: "pl",
        labels: "Właściwość|Funkcja|Aspekt|Potrzeba biznesowa|Założenia|Scenariusz|Szablon scenariusza|Przykłady",
        keywords: "Mając|Zakładając(?:, że)?|Jeżeli|Jeśli|Gdy|Kiedy|Wtedy|Oraz|I|Ale"
    }
    */];
    
    var labels = languages.map(function(l) {
        return l.labels;
    }).join("|");
    var keywords = languages.map(function(l) {
        return l.keywords;
    }).join("|");
    
    // need to include constant ints
    this.$rules = {
        start : [{
            token: "constant.numeric",
            regex: "(?:(?:[1-9]\\d*)|(?:0))"
        }, {
            token : "comment",
            regex : "#.*$"
        }, {
            token : "keyword",
            regex : "(?:" + labels + "):|(?:" + keywords + ")\\b"
        }, {
            token : "keyword",
            regex : "\\*"
        }, {
            token : "string",           // multi line """ string start
            regex : '"{3}',
            next : "qqstring3"
        }, {
            token : "string",           // " string
            regex : '"',
            next : "qqstring"
        }, {
            token : "text",
            regex : "^\\s*(?=@[\\w])",
            next : [{
                token : "text",
                regex : "\\s+"
            }, {
                token : "variable.parameter",
                regex : "@[\\w]+"
            }, {
                token : "empty",
                regex : "",
                next : "start"
            }]
        }, {
            token : "comment",
            regex : "<[^>]+>"
        }, {
            token : "comment",
            regex : "\\|(?=.)",
            next : "table-item"
        }, {
            token : "comment",
            regex : "\\|$",
            next : "start"
        }],
        "qqstring3" : [ {
            token : "constant.language.escape",
            regex : stringEscape
        }, {
            token : "string", // multi line """ string end
            regex : '"{3}',
            next : "start"
        }, {
            defaultToken : "string"
        }],
        "qqstring" : [{
            token : "constant.language.escape",
            regex : stringEscape
        }, {
            token : "string",
            regex : "\\\\$",
            next  : "qqstring"
        }, {
            token : "string",
            regex : '"|$',
            next  : "start"
        }, {
            defaultToken: "string"
        }],
        "table-item" : [{
            token : "comment",
            regex : /$/,
            next : "start"
        }, {
            token : "comment",
            regex : /\|/
        }, {
            token : "string",
            regex : /\\./
        }, {
            defaultToken : "string"
        }]
    };
    this.normalizeRules();
};

oop.inherits(GherkinHighlightRules, TextHighlightRules);

exports.M = GherkinHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.5005.js.map