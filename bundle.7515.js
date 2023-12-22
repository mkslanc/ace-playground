"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[7515],{

/***/ 37515:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextMode = (__webpack_require__(98030).Mode);
var CirruHighlightRules = (__webpack_require__(14321)/* .CirruHighlightRules */ .O);
var CoffeeFoldMode = (__webpack_require__(35090)/* .FoldMode */ .Z);

var Mode = function() {
    this.HighlightRules = CirruHighlightRules;
    this.foldingRules = new CoffeeFoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/cirru";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 14321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

// see http://cirru.org for more about this language
var CirruHighlightRules = function() {
    this.$rules = {
        start: [{
            token: 'constant.numeric',
            regex: /[\d\.]+/
        }, {
            token: 'comment.line.double-dash',
            regex: /--/,
            next: 'comment'
        }, {
            token: 'storage.modifier',
            regex: /\(/
        }, {
            token: 'storage.modifier',
            regex: /,/,
            next: 'line'
        }, {
            token: 'support.function',
            regex: /[^\(\)"\s{}\[\]]+/,
            next: 'line'
        }, {
            token: 'string.quoted.double',
            regex: /"/,
            next: 'string'
        }, {
            token: 'storage.modifier',
            regex: /\)/
        }],
        comment: [{
            token: 'comment.line.double-dash',
            regex: / +[^\n]+/,
            next: 'start'
        }],
        string: [{
            token: 'string.quoted.double',
            regex: /"/,
            next: 'line'
        }, {
            token: 'constant.character.escape',
            regex: /\\/,
            next: 'escape'
        }, {
            token: 'string.quoted.double',
            regex: /[^\\"]+/
        }],
        escape: [{
            token: 'constant.character.escape',
            regex: /./,
            next: 'string'
        }],
        line: [{
            token: 'constant.numeric',
            regex: /[\d\.]+/
        }, {
            token: 'markup.raw',
            regex: /^\s*/,
            next: 'start'
        }, {
            token: 'storage.modifier',
            regex: /\$/,
            next: 'start'
        }, {
            token: 'variable.parameter',
            regex: /[^\(\)"\s{}\[\]]+/
        }, {
            token: 'storage.modifier',
            regex: /\(/,
            next: 'start'
        }, {
            token: 'storage.modifier',
            regex: /\)/
        }, {
            token: 'markup.raw',
            regex: /^ */,
            next: 'start'
        }, {
            token: 'string.quoted.double',
            regex: /"/,
            next: 'string'
        }]
    };

};

oop.inherits(CirruHighlightRules, TextHighlightRules);

exports.O = CirruHighlightRules;


/***/ }),

/***/ 35090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var BaseFoldMode = (__webpack_require__(15369).FoldMode);
var Range = (__webpack_require__(59082)/* .Range */ .e);

var FoldMode = exports.Z = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    this.commentBlock = function(session, row) {
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "#")
            return;

        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            line = session.getLine(row);
            var level = line.search(re);

            if (level == -1)
                continue;

            if (line[level] != "#")
                break;

            endRow = row;
        }

        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
            return range;

        range = this.commentBlock(session, row);
        if (range)
            return range;
    };

    // must return "" if there's no fold, to enable caching
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);

        if (indent == -1) {
            session.foldWidgets[row - 1] = prevIndent!= -1 && prevIndent < nextIndent ? "start" : "";
            return "";
        }

        // documentation comments
        if (prevIndent == -1) {
            if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
                session.foldWidgets[row - 1] = "";
                session.foldWidgets[row + 1] = "";
                return "start";
            }
        } else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
            if (session.getLine(row - 2).search(/\S/) == -1) {
                session.foldWidgets[row - 1] = "start";
                session.foldWidgets[row + 1] = "";
                return "";
            }
        }

        if (prevIndent!= -1 && prevIndent < indent)
            session.foldWidgets[row - 1] = "start";
        else
            session.foldWidgets[row - 1] = "";

        if (indent < nextIndent)
            return "start";
        else
            return "";
    };

}).call(FoldMode.prototype);


/***/ })

}]);
//# sourceMappingURL=bundle.7515.js.map