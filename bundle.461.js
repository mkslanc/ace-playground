"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[461],{

/***/ 8317:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var JavaScriptHighlightRules = (__webpack_require__(15903).JavaScriptHighlightRules);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var SJSHighlightRules = function() {
    var parent = new JavaScriptHighlightRules({noES6: true});
    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
        "u[0-9a-fA-F]{4}|" + // unicode
        "[0-2][0-7]{0,2}|" + // oct
        "3[0-6][0-7]?|" + // oct
        "37[0-7]?|" + // oct
        "[4-7][0-7]?|" + //oct
        ".)";

    var contextAware = function(f) {
        f.isContextAware = true;
        return f;
    };

    var ctxBegin = function(opts) {
        return {
            token: opts.token,
            regex: opts.regex,
            next: contextAware(function(currentState, stack) {
                if (stack.length === 0)
                    stack.unshift(currentState);
                stack.unshift(opts.next);
                return opts.next;
            })
        };
    };

    var ctxEnd = function(opts) {
        return {
            token: opts.token,
            regex: opts.regex,
            next: contextAware(function(currentState, stack) {
                stack.shift();
                return stack[0] || "start";
            })
        };
    };

    this.$rules = parent.$rules;
    this.$rules.no_regex = [
        {
            token: "keyword",
            regex: "(waitfor|or|and|collapse|spawn|retract)\\b"
        },
        {
            token: "keyword.operator",
            regex: "(->|=>|\\.\\.)"
        },
        {
            token: "variable.language",
            regex: "(hold|default)\\b"
        },
        ctxBegin({
            token: "string",
            regex: "`",
            next: "bstring"
        }),
        ctxBegin({
            token: "string",
            regex: '"',
            next: "qqstring"
        }),
        ctxBegin({
            token: "string",
            regex: '"',
            next: "qqstring"
        }),
        {
            token: ["paren.lparen", "text", "paren.rparen"],
            regex: "(\\{)(\\s*)(\\|)",
            next: "block_arguments"
        }

    ].concat(this.$rules.no_regex);

    this.$rules.block_arguments = [
        {
            token: "paren.rparen",
            regex: "\\|",
            next: "no_regex"
        }
    ].concat(this.$rules.function_arguments);

    this.$rules.bstring = [
        {
            token : "constant.language.escape",
            regex : escapedRe
        },
        {
            token : "string",
            regex : "\\\\$",
            next: "bstring"
        },
        ctxBegin({
            token : "paren.lparen",
            regex : "\\$\\{",
            next: "string_interp"
        }),
        ctxBegin({
            token : "paren.lparen",
            regex : "\\$",
            next: "bstring_interp_single"
        }),
        ctxEnd({
            token : "string",
            regex : "`"
        }),
        {
            defaultToken: "string"
        }
    ];
    
    this.$rules.qqstring = [
        {
            token : "constant.language.escape",
            regex : escapedRe
        },
        {
            token : "string",
            regex : "\\\\$",
            next: "qqstring"
        },
        ctxBegin({
            token : "paren.lparen",
            regex : "#\\{",
            next: "string_interp"
        }),
        ctxEnd({
            token : "string",
            regex : '"'
        }),
        {
            defaultToken: "string"
        }
    ];

    // collect all context-aware (or stateless), brace-less
    // states. This gives us most normal highlighting
    // for use within interpreted contexts
    // without interfering with context nesting
    var embeddableRules = [];
    for (var i=0; i < this.$rules.no_regex.length; i++) {
        var rule = this.$rules.no_regex[i];
        var token = String(rule.token);
        if (token.indexOf('paren') == -1 && (!rule.next || rule.next.isContextAware)) {
            embeddableRules.push(rule);
        }
    }

    this.$rules.string_interp = [
        ctxEnd({
            token: "paren.rparen",
            regex: "\\}"
        }),
        ctxBegin({
            token: "paren.lparen",
            regex: '{',
            next: "string_interp"
        })
    ].concat(embeddableRules);

    // backtick strings can have single interpolation, which accept
    // \w+ followed by an optional set of function call parens
    this.$rules.bstring_interp_single = [
        {
            token: ["identifier", "paren.lparen"],
            regex: '(\\w+)(\\()',
            next: 'bstring_interp_single_call'
        },
        // identifier-only match ends this interp
        ctxEnd({
            token : "identifier",
            regex : "\\w*"
        })
    ];
    
    // the call part of a bstring_interp_single
    // is terminated by a close paren `)`, but
    // can have nested parens.
    this.$rules.bstring_interp_single_call = [
        ctxBegin({
            token: "paren.lparen",
            regex: "\\(",
            next: "bstring_interp_single_call"
        }),
        ctxEnd({
            token: "paren.rparen",
            regex: "\\)"
        })
    ].concat(embeddableRules);
};
oop.inherits(SJSHighlightRules, TextHighlightRules);

exports.w = SJSHighlightRules;


/***/ }),

/***/ 30461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var oop = __webpack_require__(2645);
var JSMode = (__webpack_require__(93388).Mode);
var SJSHighlightRules = (__webpack_require__(8317)/* .SJSHighlightRules */ .w);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);
var CStyleFoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = SJSHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, JSMode);
(function() {
    // disable jshint
    this.createWorker = function(session) {
        return null;
    };
    this.$id = "ace/mode/sjs";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.461.js.map