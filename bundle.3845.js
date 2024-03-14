"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[3845,3388],{

/***/ 93887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var Range = (__webpack_require__(91902)/* .Range */ .Q);
var BaseFoldMode = (__webpack_require__(51358).FoldMode);

var FoldMode = exports.l = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    
    //prevent naming conflict with any modes that inherit from cstyle and override this (like csharp)
    this._getFoldWidgetBase = this.getFoldWidget;
    
    /**
     * Gets fold widget with some non-standard extras:
     *
     * @example lineCommentRegionStart
     *      //#region [optional description]
     *
     * @example blockCommentRegionStart
     *      /*#region [optional description] *[/]
     *
     * @example tripleStarFoldingSection
     *      /*** this folds even though 1 line because it has 3 stars ***[/]
     * 
     * @note the pound symbol for region tags is optional
     */
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            // No widget for single line block comment unless region or triple star
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    
    /**
     * gets comment region block with end region assumed to be start of comment in any cstyle mode or SQL mode (--) which inherits from this.
     * There may optionally be a pound symbol before the region/endregion statement
     */
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 93845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var JavaScriptMode = (__webpack_require__(93388).Mode);
var GobstonesHighlightRules = (__webpack_require__(37490)/* .GobstonesHighlightRules */ .o);

var Mode = function() {
    JavaScriptMode.call(this);
    this.HighlightRules = GobstonesHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, JavaScriptMode);

(function() {

    this.createWorker = function() {
        return null;
    };

    this.$id = "ace/mode/gobstones";
    this.snippetFileId = "ace/snippets/gobstones";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 37490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextHighlightRules = (__webpack_require__(16387)/* .TextHighlightRules */ .r);

var GobstonesHighlightRules = function() {

  var definitions = {
    standard: "program|procedure|function|interactive|return|let",
    type: "type|is|variant|record|field|case"
  };

  var control = {
    commands: {
      repetitions: "repeat|while|foreach|in",
      alternatives: "if|elseif|else|switch"
    },
    expressions: {
      alternatives: "choose|when|otherwise|matching|select|on"
    }
  };

  var values = {
    colors: "Verde|Rojo|Azul|Negro",
    cardinals: "Norte|Sur|Este|Oeste",
    booleans: "True|False",
    numbers: /([-]?)([0-9]+)\b/,
    strings: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
  };

  var primitives = {
    commands: "Poner|Sacar|Mover|IrAlBorde|VaciarTablero|BOOM",
    expressions: "nroBolitas|hayBolitas|puedeMover|"+
                  "siguiente|previo|opuesto|"+
                  "minBool|maxBool|minDir|maxDir|minColor|maxColor|"+
                  "primero|sinElPrimero|esVacía|"+
                  "boom",
    keys: "K_A|K_B|K_C|K_D|K_E|K_F|K_G|K_G|K_H|K_I|K_J|K_K|K_L|K_M|K_N|K_Ñ|"+
      "K_O|K_P|K_Q|K_R|K_S|K_T|K_U|K_V|K_W|K_X|K_Y|K_Z|"+
      "K_0|K_1|K_2|K_3|K_4|K_5|K_6|K_7|K_8|K_9|"+
      "K_F1|K_F2|K_F3|K_F4|K_F5|K_F6|K_F7|K_F8|K_F9|K_F10|K_F11|K_12|"+
      "K_UP|K_DOWN|K_LEFT|K_RIGHT|K_RETURN|K_BACKSPACE|K_TAB|K_SPACE|K_ESCAPE"+

      "K_CTRL_A|K_CTRL_B|K_CTRL_C|K_CTRL_D|K_CTRL_E|K_CTRL_F|K_CTRL_G|K_CTRL_G|"+
      "K_CTRL_H|K_CTRL_I|K_CTRL_J|K_CTRL_K|K_CTRL_L|K_CTRL_M|K_CTRL_N|K_CTRL_Ñ|"+
      "K_CTRL_O|K_CTRL_P|K_CTRL_Q|K_CTRL_R|K_CTRL_S|K_CTRL_T|K_CTRL_U|K_CTRL_V|"+
      "K_CTRL_W|K_CTRL_X|K_CTRL_Y|K_CTRL_Z|"+
      "K_CTRL_0|K_CTRL_1|K_CTRL_2|K_CTRL_3|K_CTRL_4|K_CTRL_5|K_CTRL_6|K_CTRL_7|K_CTRL_8|K_CTRL_9|"+
      "K_CTRL_F1|K_CTRL_F2|K_CTRL_F3|K_CTRL_F4|K_CTRL_F5|K_CTRL_F6|K_CTRL_F7|"+
      "K_CTRL_F8|K_CTRL_F9|K_CTRL_F10|K_CTRL_F11|K_CTRL_F12|"+
      "K_CTRL_UP|K_CTRL_DOWN|K_CTRL_LEFT|K_CTRL_RIGHT|K_CTRL_RETURN|"+
      "K_CTRL_BACKSPACE|K_CTRL_TAB|K_CTRL_SPACE|K_CTRL_ESCAPE"+

      "K_ALT_A|K_ALT_B|K_ALT_C|K_ALT_D|K_ALT_E|K_ALT_F|K_ALT_G|K_ALT_G|K_ALT_H|"+
      "K_ALT_I|K_ALT_J|K_ALT_K|K_ALT_L|K_ALT_M|K_ALT_N|K_ALT_Ñ|K_ALT_O|K_ALT_P|"+
      "K_ALT_Q|K_ALT_R|K_ALT_S|K_ALT_T|K_ALT_U|K_ALT_V|K_ALT_W|K_ALT_X|K_ALT_Y|K_ALT_Z|"+
      "K_ALT_0|K_ALT_1|K_ALT_2|K_ALT_3|K_ALT_4|K_ALT_5|K_ALT_6|K_ALT_7|K_ALT_8|K_ALT_9|"+
      "K_ALT_F1|K_ALT_F2|K_ALT_F3|K_ALT_F4|K_ALT_F5|K_ALT_F6|K_ALT_F7|K_ALT_F8|"+
      "K_ALT_F9|K_ALT_F10|K_ALT_F11|K_ALT_F12|"+
      "K_ALT_UP|K_ALT_DOWN|K_ALT_LEFT|K_ALT_RIGHT|K_ALT_RETURN|K_ALT_BACKSPACE|"+
      "K_ALT_TAB|K_ALT_SPACE|K_ALT_ESCAPE"+

      "K_SHIFT_A|K_SHIFT_B|K_SHIFT_C|K_SHIFT_D|K_SHIFT_E|K_SHIFT_F|K_SHIFT_G|"+
      "K_SHIFT_G|K_SHIFT_H|K_SHIFT_I|K_SHIFT_J|K_SHIFT_K|K_SHIFT_L|K_SHIFT_M|"+
      "K_SHIFT_N|K_SHIFT_Ñ|K_SHIFT_O|K_SHIFT_P|K_SHIFT_Q|K_SHIFT_R|K_SHIFT_S|"+
      "K_SHIFT_T|K_SHIFT_U|K_SHIFT_V|K_SHIFT_W|K_SHIFT_X|K_SHIFT_Y|K_SHIFT_Z|"+
      "K_SHIFT_0|K_SHIFT_1|K_SHIFT_2|K_SHIFT_3|K_SHIFT_4|K_SHIFT_5|K_SHIFT_6|"+
      "K_SHIFT_7|K_SHIFT_8|K_SHIFT_9|"+
      "K_SHIFT_F1|K_SHIFT_F2|K_SHIFT_F3|K_SHIFT_F4|K_SHIFT_F5|K_SHIFT_F6|"+
      "K_SHIFT_F7|K_SHIFT_F8|K_SHIFT_F9|K_SHIFT_F10|K_SHIFT_F11|K_SHIFT_F12|"+
      "K_SHIFT_UP|K_SHIFT_DOWN|K_SHIFT_LEFT|K_SHIFT_RIGHT|K_SHIFT_RETURN|"+
      "K_SHIFT_BACKSPACE|K_SHIFT_TAB|K_SHIFT_SPACE|K_SHIFT_ESCAPE"+

      "K_CTRL_ALT_A|K_CTRL_ALT_B|K_CTRL_ALT_C|K_CTRL_ALT_D|K_CTRL_ALT_E|"+
      "K_CTRL_ALT_F|K_CTRL_ALT_G|K_CTRL_ALT_G|K_CTRL_ALT_H|K_CTRL_ALT_I|"+
      "K_CTRL_ALT_J|K_CTRL_ALT_K|K_CTRL_ALT_L|K_CTRL_ALT_M|K_CTRL_ALT_N|"+
      "K_CTRL_ALT_Ñ|K_CTRL_ALT_O|K_CTRL_ALT_P|K_CTRL_ALT_Q|K_CTRL_ALT_R|"+
      "K_CTRL_ALT_S|K_CTRL_ALT_T|K_CTRL_ALT_U|K_CTRL_ALT_V|K_CTRL_ALT_W|"+
      "K_CTRL_ALT_X|K_CTRL_ALT_Y|K_CTRL_ALT_Z|"+
      "K_CTRL_ALT_0|K_CTRL_ALT_1|K_CTRL_ALT_2|K_CTRL_ALT_3|K_CTRL_ALT_4|"+
      "K_CTRL_ALT_5|K_CTRL_ALT_6|K_CTRL_ALT_7|K_CTRL_ALT_8|K_CTRL_ALT_9|"+
      "K_CTRL_ALT_F1|K_CTRL_ALT_F2|K_CTRL_ALT_F3|K_CTRL_ALT_F4|K_CTRL_ALT_F5|"+
      "K_CTRL_ALT_F6|K_CTRL_ALT_F7|K_CTRL_ALT_F8|K_CTRL_ALT_F9|K_CTRL_ALT_F10|"+
      "K_CTRL_ALT_F11|K_CTRL_ALT_F12|"+
      "K_CTRL_ALT_UP|K_CTRL_ALT_DOWN|K_CTRL_ALT_LEFT|K_CTRL_ALT_RIGHT|"+
      "K_CTRL_ALT_RETURN|K_CTRL_ALT_BACKSPACE|K_CTRL_ALT_TAB|K_CTRL_ALT_SPACE|K_CTRL_ALT_ESCAPE"+

      "K_CTRL_SHIFT_A|K_CTRL_SHIFT_B|K_CTRL_SHIFT_C|K_CTRL_SHIFT_D|K_CTRL_SHIFT_E|"+
      "K_CTRL_SHIFT_F|K_CTRL_SHIFT_G|K_CTRL_SHIFT_G|K_CTRL_SHIFT_H|K_CTRL_SHIFT_I|"+
      "K_CTRL_SHIFT_J|K_CTRL_SHIFT_K|K_CTRL_SHIFT_L|K_CTRL_SHIFT_M|K_CTRL_SHIFT_N|"+
      "K_CTRL_SHIFT_Ñ|K_CTRL_SHIFT_O|K_CTRL_SHIFT_P|K_CTRL_SHIFT_Q|K_CTRL_SHIFT_R|"+
      "K_CTRL_SHIFT_S|K_CTRL_SHIFT_T|K_CTRL_SHIFT_U|K_CTRL_SHIFT_V|K_CTRL_SHIFT_W|"+
      "K_CTRL_SHIFT_X|K_CTRL_SHIFT_Y|K_CTRL_SHIFT_Z|"+
      "K_CTRL_SHIFT_0|K_CTRL_SHIFT_1|K_CTRL_SHIFT_2|K_CTRL_SHIFT_3|K_CTRL_SHIFT_4|"+
      "K_CTRL_SHIFT_5|K_CTRL_SHIFT_6|K_CTRL_SHIFT_7|K_CTRL_SHIFT_8|K_CTRL_SHIFT_9|"+
      "K_CTRL_SHIFT_F1|K_CTRL_SHIFT_F2|K_CTRL_SHIFT_F3|K_CTRL_SHIFT_F4|"+
      "K_CTRL_SHIFT_F5|K_CTRL_SHIFT_F6|K_CTRL_SHIFT_F7|K_CTRL_SHIFT_F8|"+
      "K_CTRL_SHIFT_9|K_CTRL_SHIFT_10|K_CTRL_SHIFT_11|K_CTRL_SHIFT_12|"+
      "K_CTRL_SHIFT_UP|K_CTRL_SHIFT_DOWN|K_CTRL_SHIFT_LEFT|K_CTRL_SHIFT_RIGHT|"+
      "K_CTRL_SHIFT_RETURN|K_CTRL_SHIFT_BACKSPACE|K_CTRL_SHIFT_TAB|"+
      "K_CTRL_SHIFT_SPACE|K_CTRL_SHIFT_ESCAPE"+

      "K_ALT_SHIFT_A|K_ALT_SHIFT_B|K_ALT_SHIFT_C|K_ALT_SHIFT_D|K_ALT_SHIFT_E|"+
      "K_ALT_SHIFT_F|K_ALT_SHIFT_G|K_ALT_SHIFT_G|K_ALT_SHIFT_H|K_ALT_SHIFT_I|"+
      "K_ALT_SHIFT_J|K_ALT_SHIFT_K|K_ALT_SHIFT_L|K_ALT_SHIFT_M|K_ALT_SHIFT_N|"+
      "K_ALT_SHIFT_Ñ|K_ALT_SHIFT_O|K_ALT_SHIFT_P|K_ALT_SHIFT_Q|K_ALT_SHIFT_R|"+
      "K_ALT_SHIFT_S|K_ALT_SHIFT_T|K_ALT_SHIFT_U|K_ALT_SHIFT_V|K_ALT_SHIFT_W|"+
      "K_ALT_SHIFT_X|K_ALT_SHIFT_Y|K_ALT_SHIFT_Z|"+
      "K_ALT_SHIFT_0|K_ALT_SHIFT_1|K_ALT_SHIFT_2|K_ALT_SHIFT_3|K_ALT_SHIFT_4|"+
      "K_ALT_SHIFT_5|K_ALT_SHIFT_6|K_ALT_SHIFT_7|K_ALT_SHIFT_8|K_ALT_SHIFT_9|"+
      "K_ALT_SHIFT_F1|K_ALT_SHIFT_F2|K_ALT_SHIFT_F3|K_ALT_SHIFT_F4|"+
      "K_ALT_SHIFT_F5|K_ALT_SHIFT_F6|K_ALT_SHIFT_F7|K_ALT_SHIFT_F8|"+
      "K_ALT_SHIFT_9|K_ALT_SHIFT_10|K_ALT_SHIFT_11|K_ALT_SHIFT_12|"+
      "K_ALT_SHIFT_UP|K_ALT_SHIFT_DOWN|K_ALT_SHIFT_LEFT|K_ALT_SHIFT_RIGHT|"+
      "K_ALT_SHIFT_RETURN|K_ALT_SHIFT_BACKSPACE|K_ALT_SHIFT_TAB|K_ALT_SHIFT_SPACE|"+
      "K_ALT_SHIFT_ESCAPE"+

      "K_CTRL_ALT_SHIFT_A|K_CTRL_ALT_SHIFT_B|K_CTRL_ALT_SHIFT_C|K_CTRL_ALT_SHIFT_D|"+
      "K_CTRL_ALT_SHIFT_E|K_CTRL_ALT_SHIFT_F|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_G|"+
      "K_CTRL_ALT_SHIFT_H|K_CTRL_ALT_SHIFT_I|K_CTRL_ALT_SHIFT_J|K_CTRL_ALT_SHIFT_K|"+
      "K_CTRL_ALT_SHIFT_L|K_CTRL_ALT_SHIFT_M|K_CTRL_ALT_SHIFT_N|K_CTRL_ALT_SHIFT_Ñ|"+
      "K_CTRL_ALT_SHIFT_O|K_CTRL_ALT_SHIFT_P|K_CTRL_ALT_SHIFT_Q|K_CTRL_ALT_SHIFT_R|"+
      "K_CTRL_ALT_SHIFT_S|K_CTRL_ALT_SHIFT_T|K_CTRL_ALT_SHIFT_U|K_CTRL_ALT_SHIFT_V|"+
      "K_CTRL_ALT_SHIFT_W|K_CTRL_ALT_SHIFT_X|K_CTRL_ALT_SHIFT_Y|K_CTRL_ALT_SHIFT_Z|"+
      "K_CTRL_ALT_SHIFT_0|K_CTRL_ALT_SHIFT_1|K_CTRL_ALT_SHIFT_2|K_CTRL_ALT_SHIFT_3|"+
      "K_CTRL_ALT_SHIFT_4|K_CTRL_ALT_SHIFT_5|K_CTRL_ALT_SHIFT_6|K_CTRL_ALT_SHIFT_7|"+
      "K_CTRL_ALT_SHIFT_8|K_CTRL_ALT_SHIFT_9|"+
      "K_CTRL_ALT_SHIFT_F1|K_CTRL_ALT_SHIFT_F2|K_CTRL_ALT_SHIFT_F3|K_CTRL_ALT_SHIFT_F4|"+
      "K_CTRL_ALT_SHIFT_F5|K_CTRL_ALT_SHIFT_F6|K_CTRL_ALT_SHIFT_F7|K_CTRL_ALT_SHIFT_F8|"+
      "K_CTRL_ALT_SHIFT_F9|K_CTRL_ALT_SHIFT_F10|K_CTRL_ALT_SHIFT_F11|K_CTRL_ALT_SHIFT_F12|"+
      "K_CTRL_ALT_SHIFT_UP|K_CTRL_ALT_SHIFT_DOWN|K_CTRL_ALT_SHIFT_LEFT|K_CTRL_ALT_SHIFT_RIGHT|"+
      "K_CTRL_ALT_SHIFT_RETURN|K_CTRL_ALT_SHIFT_BACKSPACE|K_CTRL_ALT_SHIFT_TAB|"+
      "K_CTRL_ALT_SHIFT_SPACE|K_CTRL_ALT_SHIFT_ESCAPE"
  };

  var operations = {
    commands: ":=",
    expressions: {
      numeric: "\\+|\\-|\\*|\\^|div|mod",
      comparison: ">=|<=|==|\\/=|>|<",
      boolean: "\\|\\||&&|not",
      other: "\\+\\+|<\\-|\\[|\\]|\\_|\\->"
    }
  };

  var comments = {
    line: {
      double_slash: "\\/\\/.*$",
      double_dash: "\\-\\-.*$",
      number_sign: "#.*$"
    },
    block: { start: "\\/\\*", end: "\\*\\/" },
    block_alt: { start: "\\{\\-", end: "\\-\\}" }
  };

  this.$rules = {
    "start" : [
      // comments
      {
        token : "comment.line.double-slash.gobstones",
        regex : comments.line.double_slash
      },
      {
        token : "comment.line.double-dash.gobstones",
        regex : comments.line.double_dash
      },
      {
        token : "comment.line.number-sign.gobstones",
        regex : comments.line.number_sign
      },
      {
        token : "comment.block.dash-asterisc.gobstones",
        regex : comments.block.start,
        next : "block_comment_end"
      },
      {
        token : "comment.block.brace-dash.gobstones",
        regex : comments.block_alt.start,
        next : "block_comment_alt_end"
      },
      // numbers
      {
        token : "constant.numeric.gobstones",
        regex : values.numbers
      },
      // strings
      {
        token : "string.quoted.double.gobstones",
        regex : values.strings
      },
      //  operations
      {
        token : "keyword.operator.other.gobstones",
        regex : operations.expressions.other
      },
      {
        token : "keyword.operator.numeric.gobstones",
        regex : operations.expressions.numeric
      },
      {
        token : "keyword.operator.compare.gobstones",
        regex : operations.expressions.comparison
      },
      {
        token : "keyword.operator.boolean.gobstones",
        regex : operations.expressions.boolean
      },
      // keywords
      {
        token : this.createKeywordMapper({
          // basic constructs
          "storage.type.definitions.gobstones": definitions.standard,
          "storage.type.types.gobstones": definitions.type,
          "keyword.control.commands.repetitions.gobstones": control.commands.repetitions,
          "keyword.control.commands.alternatives.gobstones": control.commands.alternatives,
          "keyword.control.expressions.alternatives.gobstones": control.expressions.alternatives,
          // types
          "constant.language.colors.gobstones":values.colors,
          "constant.language.cardinals.gobstones": values.cardinals,
          "constant.language.boolean.gobstones": values.booleans,
          // primitives
          "support.function.gobstones": primitives.commands,
          "support.variable.gobstones": primitives.expressions,
          "variable.language.gobstones": primitives.keys
      }, "identifier.gobstones"),
        regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      },
      {
        token : "comma.gobstones",
        regex : ","
      },
      {
        token : "semicolon.gobstones",
        regex : ";"
      },
      {
        token : "lparen",
        regex : "[[({]"
      },
      {
        token : "rparen",
        regex : "[\\])}]"
      },
      {
        token : "text",
        regex : "\\s+"
      }
    ],
    "block_comment_end": [{
        token : "comment.block.dash-asterisc.gobstones",
        regex : comments.block.end,
        next : "start"
      }, {
        defaultToken : "comment.block.dash-asterisc.gobstones"
      }
    ],
    "block_comment_alt_end": [{
        token : "comment.block.brace-dash.gobstones",
        regex : comments.block_alt.end,
        next : "start"
      }, {
        defaultToken : "comment.block.brace-dash.gobstones"
      }
    ]
  };
};

oop.inherits(GobstonesHighlightRules, TextHighlightRules);

exports.o = GobstonesHighlightRules;


/***/ }),

/***/ 93388:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(2645);
var TextMode = (__webpack_require__(49432).Mode);
var JavaScriptHighlightRules = (__webpack_require__(15903).JavaScriptHighlightRules);
var MatchingBraceOutdent = (__webpack_require__(28670).MatchingBraceOutdent);
var WorkerClient = (__webpack_require__(28402).WorkerClient);
var CstyleBehaviour = (__webpack_require__(32589)/* .CstyleBehaviour */ ._);
var CStyleFoldMode = (__webpack_require__(93887)/* .FoldMode */ .l);

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;

    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$quotes = {'"': '"', "'": "'", "`": "`"};
    this.$pairQuotesAfter = {
        "`": /\w/
    };

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        if (state == "start" || state == "no_regex") {
            var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start" || endState == "no_regex") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/javascript";
    this.snippetFileId = "ace/snippets/javascript";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 28670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var Range = (__webpack_require__(91902)/* .Range */ .Q);

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;


/***/ })

}]);
//# sourceMappingURL=bundle.3845.js.map