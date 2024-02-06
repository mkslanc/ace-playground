"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[2920],{

/***/ 84580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
* Folding mode for Cabal files (Haskell): allow folding each seaction, including
* the initial general section.
*/



var oop = __webpack_require__(21984);
var BaseFoldMode = (__webpack_require__(82896).FoldMode);
var Range = (__webpack_require__(82080)/* .Range */ .E);

var FoldMode = exports.W = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
  /**
  is the row a heading?
  */
  this.isHeading = function (session,row) {
      var heading = "markup.heading";
      var token = session.getTokens(row)[0];
      return row==0 || (token && token.type.lastIndexOf(heading, 0) === 0);
  };

  this.getFoldWidget = function(session, foldStyle, row) {
      if (this.isHeading(session,row)){
        return "start";
      } else if (foldStyle === "markbeginend" && !(/^\s*$/.test(session.getLine(row)))){
        var maxRow = session.getLength();
        while (++row < maxRow) {
          if (!(/^\s*$/.test(session.getLine(row)))){
              break;
          }
        }
        if (row==maxRow || this.isHeading(session,row)){
          return "end";
        }
      }
      return "";
  };


  this.getFoldWidgetRange = function(session, foldStyle, row) {
      var line = session.getLine(row);
      var startColumn = line.length;
      var maxRow = session.getLength();
      var startRow = row;
      var endRow = row;
      // go until next heading
      if (this.isHeading(session,row)) {
          while (++row < maxRow) {
              if (this.isHeading(session,row)){
                row--;
                break;
              }
          }

          endRow = row;
          // remove empty lines at end
          if (endRow > startRow) {
              while (endRow > startRow && /^\s*$/.test(session.getLine(endRow)))
                  endRow--;
          }

          if (endRow > startRow) {
              var endColumn = session.getLine(endRow).length;
              return new Range(startRow, startColumn, endRow, endColumn);
          }
      // go back to heading
      } else if (this.getFoldWidget(session, foldStyle, row)==="end"){
        var endRow = row;
        var endColumn = session.getLine(endRow).length;
        while (--row>=0){
          if (this.isHeading(session,row)){
            break;
          }
        }
        var line = session.getLine(row);
        var startColumn = line.length;
        return new Range(row, startColumn, endRow, endColumn);
      }
    };

}).call(FoldMode.prototype);


/***/ }),

/***/ 72920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
* Haskell Cabal files mode (https://www.haskell.org/cabal/users-guide/developing-packages.html)
**/



var oop = __webpack_require__(21984);
var TextMode = (__webpack_require__(83736).Mode);
var CabalHighlightRules = (__webpack_require__(77600)/* .CabalHighlightRules */ .e);
var FoldMode = (__webpack_require__(84580)/* .FoldMode */ .W);

var Mode = function() {
    this.HighlightRules = CabalHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "--";
    this.blockComment = null;
    this.$id = "ace/mode/haskell_cabal";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 77600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Haskell Cabal files highlighter (https://www.haskell.org/cabal/users-guide/developing-packages.html)
 **/



var oop = __webpack_require__(21984);
var TextHighlightRules = (__webpack_require__(98176)/* .TextHighlightRules */ .Y);

var CabalHighlightRules = function() {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "^\\s*--.*$"
            }, {
                token: ["keyword"],
                regex: /^(\s*\w.*?)(:(?:\s+|$))/
            }, {
                token : "constant.numeric", // float
                regex : /[\d_]+(?:(?:[\.\d_]*)?)/
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
            }, {
                token : "markup.heading",
                regex : /^(\w.*)$/
            }
        ]};

};

oop.inherits(CabalHighlightRules, TextHighlightRules);

exports.e = CabalHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.2920.js.map