"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[955,5934],{

/***/ 17161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);


var TsvHighlightRules = function() {
    TextHighlightRules.call(this);
};

oop.inherits(TsvHighlightRules, TextHighlightRules);

exports.N = TsvHighlightRules;


/***/ }),

/***/ 20688:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);


var CsvHighlightRules = function() {
    TextHighlightRules.call(this);
};

oop.inherits(CsvHighlightRules, TextHighlightRules);

exports.I = CsvHighlightRules;


/***/ }),

/***/ 30955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var escapeRegExp = (__webpack_require__(39955).escapeRegExp);
var CsvHighlightRules = (__webpack_require__(20688)/* .CsvHighlightRules */ .I);

var Mode = function(options) {
    this.HighlightRules = CsvHighlightRules;
    if (!options) options = {};
    var separatorRegex = [options.splitter || ",", options.quote || '"']
        .map(escapeRegExp).join("|");
    this.$tokenizer = {
        getLineTokens: function(line, state, row) {
            return tokenizeCsv(line, state, this.options);
        },
        options: {
            quotes: options.quote || '"',
            separatorRegex: new RegExp("(" + separatorRegex + ")"),
            spliter: options.splitter || ","
        },
        states: {},
    };
    this.$highlightRules = new this.HighlightRules();
};
oop.inherits(Mode, TextMode);

(function() {
    this.getTokenizer = function() {
        return this.$tokenizer;
    };

    this.$id = "ace/mode/csv";
}).call(Mode.prototype);

exports.Mode = Mode;


var classNames = ["keyword", "text", "string", "string.regex", "variable", "constant.numeric"];

function tokenizeCsv(line, state, options) {
    var result = [];
    var parts = line.split(options.separatorRegex);
    var spliter = options.spliter;
    var quote = options.quote || '"';
    var stateParts = (state||"start").split("-");
    var column = parseInt(stateParts[1]) || 0;
    var inString = stateParts[0] == 'string';
    var atColumnStart = !inString;
    for (var i = 0; i < parts.length; i++) {
        var value = parts[i];
        if (value) {
            var isSeparator = false;
            if (value == spliter && !inString) {
                column++;
                atColumnStart = true;
                isSeparator = true;
            } 
            else if (value == quote) {
                if (atColumnStart) {
                    inString = true;
                    atColumnStart = false;
                } else if (inString) {
                    if (parts[i + 1] == '' && parts[i + 2] == quote) {
                        value = quote + quote;
                        i += 2;
                    } else {
                        inString = false;
                    }
                }
            }
            else {
                atColumnStart = false;
            }

            result.push(
                {
                    value: value,
                    type: classNames[column % classNames.length] + ".csv_" + column + (isSeparator ? ".csv_separator" : "")
                }
            );
        }
    }
    return { tokens: result, state: inString ? "string-" + column : "start" };

}

/***/ }),

/***/ 45934:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var CSVMode = (__webpack_require__(30955).Mode);
var TsvHighlightRules = (__webpack_require__(17161)/* .TsvHighlightRules */ .N);

var Mode = function(options) {
    var mode = new CSVMode({
        splitter: "\t",
        quote: '"'
    });
    mode.HighlightRules = TsvHighlightRules;
    mode.$id = "ace/mode/tsv";
    return mode;
};

exports.Mode = Mode;


/***/ })

}]);
//# sourceMappingURL=bundle.5934.js.map