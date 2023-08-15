"use strict";
(self["webpackChunkace_playground"] = self["webpackChunkace_playground"] || []).push([[9886],{

/***/ 75560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var oop = __webpack_require__(89359);
var DocCommentHighlightRules = (__webpack_require__(62718)/* .DocCommentHighlightRules */ .c);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

// used by objective-c
var cFunctions = __webpack_unused_export__ = "hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen";

var c_cppHighlightRules = function(extraKeywords) {

    var keywordControls = (
        "break|case|continue|default|do|else|for|goto|if|_Pragma|" +
        "return|switch|while|catch|operator|try|throw|using"
    );
    
    var storageType = (
        "asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|" +
        "_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|" +
        "class|wchar_t|template|char16_t|char32_t"
    );

    var storageModifiers = (
        "const|extern|register|restrict|static|volatile|inline|private|" +
        "protected|public|friend|explicit|virtual|export|mutable|typename|" +
        "constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local"
    );

    var keywordOperators = (
        "and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|" +
        "const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace"
    );

    var builtinConstants = (
        "NULL|true|false|TRUE|FALSE|nullptr"
    );

    var keywordMapper = this.$keywords = this.createKeywordMapper(Object.assign({
        "keyword.control" : keywordControls,
        "storage.type" : storageType,
        "storage.modifier" : storageModifiers,
        "keyword.operator" : keywordOperators,
        "variable.language": "this",
        "constant.language": builtinConstants,
        "support.function.C99.c": cFunctions
    }, extraKeywords), "identifier");

    var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b";
    var escapeRe = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;
    var formatRe = "%"
          + /(\d+\$)?/.source // field (argument #)
          + /[#0\- +']*/.source // flags
          + /[,;:_]?/.source // separator character (AltiVec)
          + /((-?\d+)|\*(-?\d+\$)?)?/.source // minimum field width
          + /(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source // precision
          + /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source // length modifier
          + /(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source; // conversion type
          
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { 
        "start" : [
            {
                token : "comment",
                regex : "//$",
                next : "start"
            }, {
                token : "comment",
                regex : "//",
                next : "singleLineComment"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string", // character
                regex : "'(?:" + escapeRe + "|.)?'"
            }, {
                token : "string.start",
                regex : '"', 
                stateName: "qqstring",
                next: [
                    { token: "string", regex: /\\\s*$/, next: "qqstring" },
                    { token: "constant.language.escape", regex: escapeRe },
                    { token: "constant.language.escape", regex: formatRe },
                    { token: "string.end", regex: '"|$', next: "start" },
                    { defaultToken: "string"}
                ]
            }, {
                token : "string.start",
                regex : 'R"\\(', 
                stateName: "rawString",
                next: [
                    { token: "string.end", regex: '\\)"', next: "start" },
                    { defaultToken: "string"}
                ]
            }, {
                token : "constant.numeric", // hex
                regex : "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
            }, {
                token : "constant.numeric", // float
                regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
            }, {
                token : "keyword", // pre-compiler directives
                regex : "#\\s*(?:include|import|pragma|line|define|undef)\\b",
                next  : "directive"
            }, {
                token : "keyword", // special case pre-compiler directive
                regex : "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"
            }, {
                token : keywordMapper,
                regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
            }, {
              token : "punctuation.operator",
              regex : "\\?|\\:|\\,|\\;|\\."
            }, {
                token : "paren.lparen",
                regex : "[[({]"
            }, {
                token : "paren.rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : "\\*\\/",
                next : "start"
            }, {
                defaultToken : "comment"
            }
        ],
        "singleLineComment" : [
            {
                token : "comment",
                regex : /\\$/,
                next : "singleLineComment"
            }, {
                token : "comment",
                regex : /$/,
                next : "start"
            }, {
                defaultToken: "comment"
            }
        ],
        "directive" : [
            {
                token : "constant.other.multiline",
                regex : /\\/
            },
            {
                token : "constant.other.multiline",
                regex : /.*\\/
            },
            {
                token : "constant.other",
                regex : "\\s*<.+?>",
                next : "start"
            },
            {
                token : "constant.other", // single line
                regex : '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
                next : "start"
            }, 
            {
                token : "constant.other", // single line
                regex : "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
                next : "start"
            },
            // "\" implies multiline, while "/" implies comment
            {
                token : "constant.other",
                regex : /[^\\\/]+/,
                next : "start"
            }
        ]
    };

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
    this.normalizeRules();
};

oop.inherits(c_cppHighlightRules, TextHighlightRules);

exports.r = c_cppHighlightRules;


/***/ }),

/***/ 62718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var TextHighlightRules = (__webpack_require__(28053)/* .TextHighlightRules */ .K);

var DocCommentHighlightRules = function () {
    this.$rules = {
        "start": [
            {
                token: "comment.doc.tag",
                regex: "@\\w+(?=\\s|$)"
            }, DocCommentHighlightRules.getTagRule(), {
                defaultToken: "comment.doc",
                caseInsensitive: true
            }
        ]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.c = DocCommentHighlightRules;


/***/ }),

/***/ 12764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var Range = (__webpack_require__(59082)/* .Range */ .e);
var BaseFoldMode = (__webpack_require__(15369).FoldMode);

var FoldMode = exports.Z = function(commentRegex) {
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

/***/ 69886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/



var oop = __webpack_require__(89359);
var TextMode = (__webpack_require__(98030).Mode);
var ObjectiveCHighlightRules = (__webpack_require__(51852)/* .ObjectiveCHighlightRules */ .C);
var CStyleFoldMode = (__webpack_require__(12764)/* .FoldMode */ .Z);

var Mode = function() {
    this.HighlightRules = ObjectiveCHighlightRules;
    this.foldingRules = new CStyleFoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$id = "ace/mode/objectivec";
}).call(Mode.prototype);

exports.Mode = Mode;


/***/ }),

/***/ 51852:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var oop = __webpack_require__(89359);
var DocCommentHighlightRules = (__webpack_require__(62718)/* .DocCommentHighlightRules */ .c);
var CHighlightRules = (__webpack_require__(75560)/* .c_cppHighlightRules */ .r);

var ObjectiveCHighlightRules = function() {
    var NSKeywords = {
        "support.function.cocoa.leopard": "NSRectToCGRect|NSRectFromCGRect|NSMakeCollectable|NSStringFromProtocol|NSSizeToCGSize|NSSizeFromCGSize|NSDrawNinePartImage|NSDrawThreePartImage|NSPointToCGPoint|NSPointFromCGPoint|NSProtocolFromString|NSEventMaskFromType|NSValue",
        "support.function.cocoa": "NSRoundDownToMultipleOfPageSize|NSRoundUpToMultipleOfPageSize|NSRunCriticalAlertPanel|NSRunCriticalAlertPanelRelativeToWindow|NSRunInformationalAlertPanel|NSRunInformationalAlertPanelRelativeToWindow|NSRunAlertPanel|NSRunAlertPanelRelativeToWindow|NSResetMapTable|NSResetHashTable|NSRecycleZone|NSRectClip|NSRectClipList|NSRectFill|NSRectFillUsingOperation|NSRectFillList|NSRectFillListUsingOperation|NSRectFillListWithGrays|NSRectFillListWithColors|NSRectFillListWithColorsUsingOperation|NSRectFromString|NSRecordAllocationEvent|NSReturnAddress|NSReleaseAlertPanel|NSReadPixel|NSRealMemoryAvailable|NSReallocateCollectable|NSRegisterServicesProvider|NSRangeFromString|NSGetSizeAndAlignment|NSGetCriticalAlertPanel|NSGetInformationalAlertPanel|NSGetUncaughtExceptionHandler|NSGetFileType|NSGetFileTypes|NSGetWindowServerMemory|NSGetAlertPanel|NSMinX|NSMinY|NSMidX|NSMidY|NSMouseInRect|NSMapRemove|NSMapGet|NSMapMember|NSMapInsert|NSMapInsertIfAbsent|NSMapInsertKnownAbsent|NSMakeRect|NSMakeRange|NSMakeSize|NSMakePoint|NSMaxRange|NSMaxX|NSMaxY|NSBitsPerSampleFromDepth|NSBitsPerPixelFromDepth|NSBestDepth|NSBeep|NSBeginCriticalAlertSheet|NSBeginInformationalAlertSheet|NSBeginAlertSheet|NSShouldRetainWithZone|NSShowsServicesMenuItem|NSShowAnimationEffect|NSStringFromRect|NSStringFromRange|NSStringFromMapTable|NSStringFromSize|NSStringFromSelector|NSStringFromHashTable|NSStringFromClass|NSStringFromPoint|NSSizeFromString|NSSetShowsServicesMenuItem|NSSetZoneName|NSSetUncaughtExceptionHandler|NSSetFocusRingStyle|NSSelectorFromString|NSSearchPathForDirectoriesInDomains|NSSwapBigShortToHost|NSSwapBigIntToHost|NSSwapBigDoubleToHost|NSSwapBigFloatToHost|NSSwapBigLongToHost|NSSwapBigLongLongToHost|NSSwapShort|NSSwapHostShortToBig|NSSwapHostShortToLittle|NSSwapHostIntToBig|NSSwapHostIntToLittle|NSSwapHostDoubleToBig|NSSwapHostDoubleToLittle|NSSwapHostFloatToBig|NSSwapHostFloatToLittle|NSSwapHostLongToBig|NSSwapHostLongToLittle|NSSwapHostLongLongToBig|NSSwapHostLongLongToLittle|NSSwapInt|NSSwapDouble|NSSwapFloat|NSSwapLittleShortToHost|NSSwapLittleIntToHost|NSSwapLittleDoubleToHost|NSSwapLittleFloatToHost|NSSwapLittleLongToHost|NSSwapLittleLongLongToHost|NSSwapLong|NSSwapLongLong|NSHighlightRect|NSHostByteOrder|NSHomeDirectory|NSHomeDirectoryForUser|NSHeight|NSHashRemove|NSHashGet|NSHashInsert|NSHashInsertIfAbsent|NSHashInsertKnownAbsent|NSHFSTypeCodeFromFileType|NSHFSTypeOfFile|NSNumberOfColorComponents|NSNextMapEnumeratorPair|NSNextHashEnumeratorItem|NSContainsRect|NSConvertGlyphsToPackedGlyphs|NSConvertSwappedDoubleToHost|NSConvertSwappedFloatToHost|NSConvertHostDoubleToSwapped|NSConvertHostFloatToSwapped|NSCountMapTable|NSCountHashTable|NSCountFrames|NSCountWindows|NSCountWindowsForContext|NSCopyMemoryPages|NSCopyMapTableWithZone|NSCopyBits|NSCopyHashTableWithZone|NSCopyObject|NSColorSpaceFromDepth|NSCompareMapTables|NSCompareHashTables|NSClassFromString|NSCreateMapTable|NSCreateMapTableWithZone|NSCreateHashTable|NSCreateHashTableWithZone|NSCreateZone|NSCreateFilenamePboardType|NSCreateFileContentsPboardType|NSTemporaryDirectory|NSIsControllerMarker|NSIsEmptyRect|NSIsFreedObject|NSInsetRect|NSIncrementExtraRefCount|NSIntersectsRect|NSIntersectionRect|NSIntersectionRange|NSInterfaceStyleForKey|NSIntegralRect|NSZoneRealloc|NSZoneMalloc|NSZoneName|NSZoneCalloc|NSZoneFromPointer|NSZoneFree|NSOpenStepRootDirectory|NSOffsetRect|NSDisableScreenUpdates|NSDivideRect|NSDottedFrameRect|NSDecimalRound|NSDecimalMultiply|NSDecimalString|NSDecimalSubtract|NSDecimalNormalize|NSDecimalCopy|NSDecimalCompact|NSDecimalCompare|NSDecimalIsNotANumber|NSDecimalDivide|NSDecimalPower|NSDecimalAdd|NSDecrementExtraRefCountWasZero|NSDefaultMallocZone|NSDeallocateMemoryPages|NSDeallocateObject|NSDrawGroove|NSDrawGrayBezel|NSDrawBitmap|NSDrawButton|NSDrawColorTiledRects|NSDrawTiledRects|NSDrawDarkBezel|NSDrawWhiteBezel|NSDrawWindowBackground|NSDrawLightBezel|NSUserName|NSUnionRect|NSUnionRange|NSUnregisterServicesProvider|NSUpdateDynamicServices|NSJavaBundleSetup|NSJavaBundleCleanup|NSJavaSetup|NSJavaSetupVirtualMachine|NSJavaNeedsToLoadClasses|NSJavaNeedsVirtualMachine|NSJavaClassesForBundle|NSJavaClassesFromPath|NSJavaObjectNamedInPath|NSJavaProvidesClasses|NSPointInRect|NSPointFromString|NSPerformService|NSPlanarFromDepth|NSPageSize|NSEndMapTableEnumeration|NSEndHashTableEnumeration|NSEnumerateMapTable|NSEnumerateHashTable|NSEnableScreenUpdates|NSEqualRects|NSEqualRanges|NSEqualSizes|NSEqualPoints|NSEraseRect|NSExtraRefCount|NSFileTypeForHFSTypeCode|NSFullUserName|NSFreeMapTable|NSFreeHashTable|NSFrameRect|NSFrameRectWithWidth|NSFrameRectWithWidthUsingOperation|NSFrameAddress|NSWindowList|NSWindowListForContext|NSWidth|NSLocationInRange|NSLog|NSLogv|NSLogPageSize|NSAccessibilityRoleDescription|NSAccessibilityRoleDescriptionForUIElement|NSAccessibilityRaiseBadArgumentException|NSAccessibilityUnignoredChildren|NSAccessibilityUnignoredChildrenForOnlyChild|NSAccessibilityUnignoredDescendant|NSAccessibilityUnignoredAncestor|NSAccessibilityPostNotification|NSAccessibilityActionDescription|NSApplicationMain|NSApplicationLoad|NSAvailableWindowDepths|NSAllMapTableValues|NSAllMapTableKeys|NSAllHashTableObjects|NSAllocateMemoryPages|NSAllocateCollectable|NSAllocateObject",
        "support.class.cocoa.leopard": "NSRuleEditor|NSGarbageCollector|NSGradient|NSMapTable|NSHashTable|NSCondition|NSCollectionView|NSCollectionViewItem|NSToolbarItemGroup|NSTextInputClient|NSTreeNode|NSTrackingArea|NSInvocationOperation|NSOperation|NSOperationQueue|NSDictionaryController|NSDockTile|NSPointerFunctions|NSPointerArray|NSPathControl|NSPathControlDelegate|NSPathComponentCell|NSPathCell|NSPathCellDelegate|NSPrintPanelAccessorizing|NSPredicateEditor|NSPredicateEditorRowTemplate|NSViewController|NSFastEnumeration|NSAnimationContext|NSAnimatablePropertyContainer",
        "support.class.cocoa": "NSRunLoop|NSRulerMarker|NSRulerView|NSResponder|NSRecursiveLock|NSRelativeSpecifier|NSRandomSpecifier|NSRangeSpecifier|NSGetCommand|NSGlyphGenerator|NSGlyphStorage|NSGlyphInfo|NSGraphicsContext|NSXMLNode|NSXMLDocument|NSXMLDTD|NSXMLDTDNode|NSXMLParser|NSXMLElement|NSMiddleSpecifier|NSMovie|NSMovieView|NSMoveCommand|NSMutableString|NSMutableSet|NSMutableCharacterSet|NSMutableCopying|NSMutableIndexSet|NSMutableDictionary|NSMutableData|NSMutableURLRequest|NSMutableParagraphStyle|NSMutableAttributedString|NSMutableArray|NSMessagePort|NSMessagePortNameServer|NSMenu|NSMenuItem|NSMenuItemCell|NSMenuView|NSMethodSignature|NSMetadataItem|NSMetadataQuery|NSMetadataQueryResultGroup|NSMetadataQueryAttributeValueTuple|NSMachBootstrapServer|NSMachPort|NSMatrix|NSBitmapImageRep|NSBox|NSBundle|NSButton|NSButtonCell|NSBezierPath|NSBrowser|NSBrowserCell|NSShadow|NSScanner|NSScriptSuiteRegistry|NSScriptCoercionHandler|NSScriptCommand|NSScriptCommandDescription|NSScriptClassDescription|NSScriptObjectSpecifier|NSScriptExecutionContext|NSScriptWhoseTest|NSScroller|NSScrollView|NSScreen|NSStepper|NSStepperCell|NSStatusBar|NSStatusItem|NSString|NSStream|NSSimpleHorizontalTypesetter|NSSimpleCString|NSSocketPort|NSSocketPortNameServer|NSSound|NSSortDescriptor|NSSpecifierTest|NSSpeechRecognizer|NSSpeechSynthesizer|NSSpellServer|NSSpellChecker|NSSplitView|NSSecureTextField|NSSecureTextFieldCell|NSSet|NSSetCommand|NSSearchField|NSSearchFieldCell|NSSerializer|NSSegmentedControl|NSSegmentedCell|NSSlider|NSSliderCell|NSSavePanel|NSHost|NSHTTPCookie|NSHTTPCookieStorage|NSHTTPURLResponse|NSHelpManager|NSNib|NSNibConnector|NSNibControlConnector|NSNibOutletConnector|NSNotification|NSNotificationCenter|NSNotificationQueue|NSNull|NSNumber|NSNumberFormatter|NSNetService|NSNetServiceBrowser|NSNameSpecifier|NSChangeSpelling|NSCharacterSet|NSConstantString|NSConnection|NSControl|NSController|NSConditionLock|NSCoding|NSCoder|NSCountCommand|NSCountedSet|NSCopying|NSColor|NSColorSpace|NSColorPickingCustom|NSColorPickingDefault|NSColorPicker|NSColorPanel|NSColorWell|NSColorList|NSCompoundPredicate|NSComparisonPredicate|NSComboBox|NSComboBoxCell|NSCustomImageRep|NSCursor|NSCIImageRep|NSCell|NSClipView|NSCloseCommand|NSCloneCommand|NSClassDescription|NSCachedImageRep|NSCachedURLResponse|NSCalendar|NSCalendarDate|NSCreateCommand|NSThread|NSTypesetter|NSTimeZone|NSTimer|NSToolbar|NSToolbarItem|NSToolbarItemValidations|NSTokenField|NSTokenFieldCell|NSText|NSTextBlock|NSTextStorage|NSTextContainer|NSTextTab|NSTextTable|NSTextTableBlock|NSTextInput|NSTextView|NSTextField|NSTextFieldCell|NSTextList|NSTextAttachment|NSTextAttachmentCell|NSTask|NSTableHeaderCell|NSTableHeaderView|NSTableColumn|NSTableView|NSTabView|NSTabViewItem|NSTreeController|NSIndexSpecifier|NSIndexSet|NSIndexPath|NSInputManager|NSInputStream|NSInputServiceProvider|NSInputServer|NSInputServerMouseTracker|NSInvocation|NSIgnoreMisspelledWords|NSImage|NSImageRep|NSImageCell|NSImageView|NSOutputStream|NSOutlineView|NSOpenGLContext|NSOpenGLPixelBuffer|NSOpenGLPixelFormat|NSOpenGLView|NSOpenPanel|NSObjCTypeSerializationCallBack|NSObject|NSObjectController|NSDistantObject|NSDistantObjectRequest|NSDistributedNotificationCenter|NSDistributedLock|NSDictionary|NSDirectoryEnumerator|NSDocument|NSDocumentController|NSDeserializer|NSDecimalNumber|NSDecimalNumberBehaviors|NSDecimalNumberHandler|NSDeleteCommand|NSDate|NSDateComponents|NSDatePicker|NSDatePickerCell|NSDateFormatter|NSData|NSDrawer|NSDraggingInfo|NSUserInterfaceValidations|NSUserDefaults|NSUserDefaultsController|NSURL|NSURLResponse|NSURLRequest|NSURLHandle|NSURLHandleClient|NSURLConnection|NSURLCache|NSURLCredential|NSURLCredentialStorage|NSURLDownload|NSURLDownloadDelegate|NSURLProtocol|NSURLProtocolClient|NSURLProtectionSpace|NSURLAuthenticationChallenge|NSURLAuthenticationChallengeSender|NSUniqueIDSpecifier|NSUndoManager|NSUnarchiver|NSPipe|NSPositionalSpecifier|NSPopUpButton|NSPopUpButtonCell|NSPort|NSPortMessage|NSPortNameServer|NSPortCoder|NSPICTImageRep|NSPersistentDocument|NSPDFImageRep|NSPasteboard|NSPanel|NSParagraphStyle|NSPageLayout|NSPrintInfo|NSPrinter|NSPrintOperation|NSPrintPanel|NSProcessInfo|NSProtocolChecker|NSPropertySpecifier|NSPropertyListSerialization|NSProgressIndicator|NSProxy|NSPredicate|NSEnumerator|NSEvent|NSEPSImageRep|NSError|NSException|NSExistsCommand|NSExpression|NSView|NSViewAnimation|NSValidatedToobarItem|NSValidatedUserInterfaceItem|NSValueTransformer|NSKeyedUnarchiver|NSKeyedArchiver|NSQuickDrawView|NSQuitCommand|NSFileManager|NSFileHandle|NSFileWrapper|NSFont|NSFontManager|NSFontDescriptor|NSFontPanel|NSFormCell|NSFormatter|NSWhoseSpecifier|NSWindow|NSWindowController|NSWorkspace|NSLock|NSLocking|NSLocale|NSLogicalTest|NSLevelIndicator|NSLevelIndicatorCell|NSLayoutManager|NSAssertionHandler|NSAnimation|NSActionCell|NSAttributedString|NSAutoreleasePool|NSATSTypesetter|NSApplication|NSAppleScript|NSAppleEventManager|NSAppleEventDescriptor|NSAffineTransform|NSAlert|NSArchiver|NSArray|NSArrayController",
        "support.type.cocoa.leopard": "",
        "support.class.quartz": "CISampler|CIContext|CIColor|CIImage|CIImageAccumulator|CIPlugIn|CIPlugInRegistration|CIVector|CIKernel|CIFilter|CIFilterGenerator|CIFilterShape|CARenderer|CAMediaTiming|CAMediaTimingFunction|CABasicAnimation|CAScrollLayer|CAConstraint|CAConstraintLayoutManager|CATiledLayer|CATextLayer|CATransition|CATransaction|CAOpenGLLayer|CAPropertyAnimation|CAKeyframeAnimation|CALayer|CAAnimation|CAAnimationGroup|CAAction",
        "support.type.quartz": "CGFloat|CGPoint|CGSize|CGRect|CIFormat|CAConstraintAttribute",
        "support.type.cocoa": "NSRect|NSRectEdge|NSRange|NSGlyph|NSGlyphRelation|NSGlyphLayoutMode|NSGradientType|NSModalSession|NSMatrixMode|NSMapEnumerator|NSBitmapImageFileType|NSBorderType|NSButtonType|NSBezelStyle|NSBackingStoreType|NSBrowserColumnResizingType|NSScrollerPart|NSScrollerArrow|NSScrollArrowPosition|NSScreenAuxiliaryOpaque|NSStringEncoding|NSSize|NSSocketNativeHandle|NSSelectionGranularity|NSSelectionDirection|NSSelectionAffinity|NSSwappedDouble|NSSwappedFloat|NSSaveOperationType|NSHashEnumerator|NSHandler|NSHandler2|NSControlSize|NSControlTint|NSCompositingOperation|NSComparisonResult|NSCellState|NSCellType|NSCellImagePosition|NSCellAttribute|NSThreadPrivate|NSTypesetterGlyphInfo|NSTickMarkPosition|NSTitlePosition|NSTimeInterval|NSToolTipTag|NSToolbarSizeMode|NSToolbarDisplayMode|NSTokenStyle|NSTIFFCompression|NSTextTabType|NSTextAlignment|NSTabState|NSTableViewDropOperation|NSTabViewType|NSTrackingRectTag|NSImageInterpolation|NSZone|NSOpenGLContextAuxiliary|NSOpenGLPixelFormatAuxiliary|NSDocumentChangeType|NSDatePickerElementFlags|NSDrawerState|NSDragOperation|NSUsableScrollerParts|NSPoint|NSPrintingPageOrder|NSProgressIndicatorStyle|NSProgressIndicatorThickness|NSProgressIndicatorThreadInfo|NSEventType|NSKeyValueObservingOptions|NSFontSymbolicTraits|NSFontTraitMask|NSFontAction|NSFocusRingType|NSWindowOrderingMode|NSWindowDepth|NSWorkspaceIconCreationOptions|NSWorkspaceLaunchOptions|NSWritingDirection|NSLineBreakMode|NSLayoutStatus|NSLayoutDirection|NSAnimationProgress|NSAnimationEffect|NSApplicationTerminateReply|NSApplicationDelegateReply|NSApplicationPrintReply|NSAppleEventManagerSuspensionID|NSAffineTransformStruct|NSAlertStyle",
        "support.constant.cocoa": "NSRGBModeColorPanel|NSRGBColorSpaceModel|NSRightMouseDown|NSRightMouseDownMask|NSRightMouseDragged|NSRightMouseDraggedMask|NSRightMouseUp|NSRightMouseUpMask|NSRightTextMovement|NSRightTextAlignment|NSRightTabsBezelBorder|NSRightTabStopType|NSRightArrowFunctionKey|NSRoundRectBezelStyle|NSRoundBankers|NSRoundedBezelStyle|NSRoundedTokenStyle|NSRoundedDisclosureBezelStyle|NSRoundDown|NSRoundUp|NSRoundPlain|NSRoundLineCapStyle|NSRoundLineJoinStyle|NSRunStoppedResponse|NSRunContinuesResponse|NSRunAbortedResponse|NSResizableWindowMask|NSResetCursorRectsRunLoopOrdering|NSResetFunctionKey|NSRecessedBezelStyle|NSReceiversCantHandleCommandScriptError|NSReceiverEvaluationScriptError|NSReturnTextMovement|NSRedoFunctionKey|NSRequiredArgumentsMissingScriptError|NSRelevancyLevelIndicatorStyle|NSRelativeBefore|NSRelativeAfter|NSRegularSquareBezelStyle|NSRegularControlSize|NSRemoveTraitFontAction|NSRandomSubelement|NSRangeDateMode|NSRatingLevelIndicatorStyle|NSRadioModeMatrix|NSRadioButton|NSGIFFileType|NSGlyphBelow|NSGlyphInscribeBelow|NSGlyphInscribeBase|NSGlyphInscribeOverstrike|NSGlyphInscribeOverBelow|NSGlyphInscribeAbove|NSGlyphLayoutWithPrevious|NSGlyphLayoutAtAPoint|NSGlyphLayoutAgainstAPoint|NSGlyphAttributeBidiLevel|NSGlyphAttributeSoft|NSGlyphAttributeInscribe|NSGlyphAttributeElastic|NSGlyphAbove|NSGrooveBorder|NSGreaterThanComparison|NSGreaterThanOrEqualToComparison|NSGreaterThanOrEqualToPredicateOperatorType|NSGreaterThanPredicateOperatorType|NSGrayModeColorPanel|NSGrayColorSpaceModel|NSGradientNone|NSGradientConcaveStrong|NSGradientConcaveWeak|NSGradientConvexStrong|NSGradientConvexWeak|NSGraphiteControlTint|NSXMLNotationDeclarationKind|NSXMLNodeCompactEmptyElement|NSXMLNodeIsCDATA|NSXMLNodeOptionsNone|NSXMLNodeUseSingleQuotes|NSXMLNodeUseDoubleQuotes|NSXMLNodePreserveNamespaceOrder|NSXMLNodePreserveCharacterReferences|NSXMLNodePreserveCDATA|NSXMLNodePreserveDTD|NSXMLNodePreservePrefixes|NSXMLNodePreserveEntities|NSXMLNodePreserveEmptyElements|NSXMLNodePreserveQuotes|NSXMLNodePreserveWhitespace|NSXMLNodePreserveAttributeOrder|NSXMLNodePreserveAll|NSXMLNodePrettyPrint|NSXMLNodeExpandEmptyElement|NSXMLNamespaceKind|NSXMLCommentKind|NSXMLTextKind|NSXMLInvalidKind|NSXMLDocumentXMLKind|NSXMLDocumentXHTMLKind|NSXMLDocumentXInclude|NSXMLDocumentHTMLKind|NSXMLDocumentTidyXML|NSXMLDocumentTidyHTML|NSXMLDocumentTextKind|NSXMLDocumentIncludeContentTypeDeclaration|NSXMLDocumentValidate|NSXMLDocumentKind|NSXMLDTDKind|NSXMLParserGTRequiredError|NSXMLParserXMLDeclNotStartedError|NSXMLParserXMLDeclNotFinishedError|NSXMLParserMisplacedXMLDeclarationError|NSXMLParserMisplacedCDATAEndStringError|NSXMLParserMixedContentDeclNotStartedError|NSXMLParserMixedContentDeclNotFinishedError|NSXMLParserStandaloneValueError|NSXMLParserStringNotStartedError|NSXMLParserStringNotClosedError|NSXMLParserSpaceRequiredError|NSXMLParserSeparatorRequiredError|NSXMLParserNMTOKENRequiredError|NSXMLParserNotationNotStartedError|NSXMLParserNotationNotFinishedError|NSXMLParserNotWellBalancedError|NSXMLParserNoDTDError|NSXMLParserNamespaceDeclarationError|NSXMLParserNAMERequiredError|NSXMLParserCharacterRefInDTDError|NSXMLParserCharacterRefInPrologError|NSXMLParserCharacterRefInEpilogError|NSXMLParserCharacterRefAtEOFError|NSXMLParserConditionalSectionNotStartedError|NSXMLParserConditionalSectionNotFinishedError|NSXMLParserCommentNotFinishedError|NSXMLParserCommentContainsDoubleHyphenError|NSXMLParserCDATANotFinishedError|NSXMLParserTagNameMismatchError|NSXMLParserInternalError|NSXMLParserInvalidHexCharacterRefError|NSXMLParserInvalidCharacterRefError|NSXMLParserInvalidCharacterInEntityError|NSXMLParserInvalidCharacterError|NSXMLParserInvalidConditionalSectionError|NSXMLParserInvalidDecimalCharacterRefError|NSXMLParserInvalidURIError|NSXMLParserInvalidEncodingNameError|NSXMLParserInvalidEncodingError|NSXMLParserOutOfMemoryError|NSXMLParserDocumentStartError|NSXMLParserDelegateAbortedParseError|NSXMLParserDOCTYPEDeclNotFinishedError|NSXMLParserURIRequiredError|NSXMLParserURIFragmentError|NSXMLParserUndeclaredEntityError|NSXMLParserUnparsedEntityError|NSXMLParserUnknownEncodingError|NSXMLParserUnfinishedTagError|NSXMLParserPCDATARequiredError|NSXMLParserPublicIdentifierRequiredError|NSXMLParserParsedEntityRefMissingSemiError|NSXMLParserParsedEntityRefNoNameError|NSXMLParserParsedEntityRefInInternalSubsetError|NSXMLParserParsedEntityRefInInternalError|NSXMLParserParsedEntityRefInPrologError|NSXMLParserParsedEntityRefInEpilogError|NSXMLParserParsedEntityRefAtEOFError|NSXMLParserProcessingInstructionNotStartedError|NSXMLParserProcessingInstructionNotFinishedError|NSXMLParserPrematureDocumentEndError|NSXMLParserEncodingNotSupportedError|NSXMLParserEntityRefInDTDError|NSXMLParserEntityRefInPrologError|NSXMLParserEntityRefInEpilogError|NSXMLParserEntityReferenceMissingSemiError|NSXMLParserEntityReferenceWithoutNameError|NSXMLParserEntityRefLoopError|NSXMLParserEntityRefAtEOFError|NSXMLParserEntityBoundaryError|NSXMLParserEntityNotStartedError|NSXMLParserEntityNotFinishedError|NSXMLParserEntityIsParameterError|NSXMLParserEntityIsExternalError|NSXMLParserEntityValueRequiredError|NSXMLParserEqualExpectedError|NSXMLParserElementContentDeclNotStartedError|NSXMLParserElementContentDeclNotFinishedError|NSXMLParserExternalStandaloneEntityError|NSXMLParserExternalSubsetNotFinishedError|NSXMLParserExtraContentError|NSXMLParserEmptyDocumentError|NSXMLParserLiteralNotStartedError|NSXMLParserLiteralNotFinishedError|NSXMLParserLTRequiredError|NSXMLParserLTSlashRequiredError|NSXMLParserLessThanSymbolInAttributeError|NSXMLParserAttributeRedefinedError|NSXMLParserAttributeHasNoValueError|NSXMLParserAttributeNotStartedError|NSXMLParserAttributeNotFinishedError|NSXMLParserAttributeListNotStartedError|NSXMLParserAttributeListNotFinishedError|NSXMLProcessingInstructionKind|NSXMLEntityGeneralKind|NSXMLEntityDeclarationKind|NSXMLEntityUnparsedKind|NSXMLEntityParsedKind|NSXMLEntityParameterKind|NSXMLEntityPredefined|NSXMLElementDeclarationMixedKind|NSXMLElementDeclarationUndefinedKind|NSXMLElementDeclarationElementKind|NSXMLElementDeclarationEmptyKind|NSXMLElementDeclarationKind|NSXMLElementDeclarationAnyKind|NSXMLElementKind|NSXMLAttributeNMTokensKind|NSXMLAttributeNMTokenKind|NSXMLAttributeNotationKind|NSXMLAttributeCDATAKind|NSXMLAttributeIDRefsKind|NSXMLAttributeIDRefKind|NSXMLAttributeIDKind|NSXMLAttributeDeclarationKind|NSXMLAttributeEntityKind|NSXMLAttributeEntitiesKind|NSXMLAttributeEnumerationKind|NSXMLAttributeKind|NSMinXEdge|NSMiniaturizableWindowMask|NSMinYEdge|NSMinuteCalendarUnit|NSMiterLineJoinStyle|NSMiddleSubelement|NSMixedState|NSMonthCalendarUnit|NSModeSwitchFunctionKey|NSMouseMoved|NSMouseMovedMask|NSMouseEntered|NSMouseEnteredMask|NSMouseEventSubtype|NSMouseExited|NSMouseExitedMask|NSMoveToBezierPathElement|NSMomentaryChangeButton|NSMomentaryPushButton|NSMomentaryPushInButton|NSMomentaryLight|NSMomentaryLightButton|NSMenuFunctionKey|NSMacintoshInterfaceStyle|NSMacOSRomanStringEncoding|NSMatchesPredicateOperatorType|NSMappedRead|NSMaxXEdge|NSMaxYEdge|NSMACHOperatingSystem|NSBMPFileType|NSBottomTabsBezelBorder|NSBoldFontMask|NSBorderlessWindowMask|NSBoxSecondary|NSBoxSeparator|NSBoxOldStyle|NSBoxPrimary|NSButtLineCapStyle|NSBezelBorder|NSBevelLineJoinStyle|NSBelowBottom|NSBelowTop|NSBeginsWithComparison|NSBeginsWithPredicateOperatorType|NSBeginFunctionKey|NSBlueControlTint|NSBackspaceCharacter|NSBacktabTextMovement|NSBackingStoreRetained|NSBackingStoreBuffered|NSBackingStoreNonretained|NSBackTabCharacter|NSBackwardsSearch|NSBackgroundTab|NSBrowserNoColumnResizing|NSBrowserUserColumnResizing|NSBrowserAutoColumnResizing|NSBreakFunctionKey|NSShiftJISStringEncoding|NSShiftKeyMask|NSShowControlGlyphs|NSShowInvisibleGlyphs|NSShadowlessSquareBezelStyle|NSSysReqFunctionKey|NSSystemDomainMask|NSSystemDefined|NSSystemDefinedMask|NSSystemFunctionKey|NSSymbolStringEncoding|NSScannedOption|NSScaleNone|NSScaleToFit|NSScaleProportionally|NSScrollerNoPart|NSScrollerIncrementPage|NSScrollerIncrementLine|NSScrollerIncrementArrow|NSScrollerDecrementPage|NSScrollerDecrementLine|NSScrollerDecrementArrow|NSScrollerKnob|NSScrollerKnobSlot|NSScrollerArrowsMinEnd|NSScrollerArrowsMaxEnd|NSScrollerArrowsNone|NSScrollerArrowsDefaultSetting|NSScrollWheel|NSScrollWheelMask|NSScrollLockFunctionKey|NSScreenChangedEventType|NSStopFunctionKey|NSStringDrawingOneShot|NSStringDrawingDisableScreenFontSubstitution|NSStringDrawingUsesDeviceMetrics|NSStringDrawingUsesFontLeading|NSStringDrawingUsesLineFragmentOrigin|NSStreamStatusReading|NSStreamStatusNotOpen|NSStreamStatusClosed|NSStreamStatusOpen|NSStreamStatusOpening|NSStreamStatusError|NSStreamStatusWriting|NSStreamStatusAtEnd|NSStreamEventHasBytesAvailable|NSStreamEventHasSpaceAvailable|NSStreamEventNone|NSStreamEventOpenCompleted|NSStreamEventEndEncountered|NSStreamEventErrorOccurred|NSSingleDateMode|NSSingleUnderlineStyle|NSSizeDownFontAction|NSSizeUpFontAction|NSSolarisOperatingSystem|NSSunOSOperatingSystem|NSSpecialPageOrder|NSSecondCalendarUnit|NSSelectByCharacter|NSSelectByParagraph|NSSelectByWord|NSSelectingNext|NSSelectingPrevious|NSSelectionAffinityDownstream|NSSelectionAffinityUpstream|NSSelectedTab|NSSelectFunctionKey|NSSegmentSwitchTrackingMomentary|NSSegmentSwitchTrackingSelectOne|NSSegmentSwitchTrackingSelectAny|NSSquareLineCapStyle|NSSwitchButton|NSSaveToOperation|NSSaveOptionsYes|NSSaveOptionsNo|NSSaveOptionsAsk|NSSaveOperation|NSSaveAsOperation|NSSmallSquareBezelStyle|NSSmallControlSize|NSSmallCapsFontMask|NSSmallIconButtonBezelStyle|NSHighlightModeMatrix|NSHSBModeColorPanel|NSHourMinuteSecondDatePickerElementFlag|NSHourMinuteDatePickerElementFlag|NSHourCalendarUnit|NSHorizontalRuler|NSHomeFunctionKey|NSHTTPCookieAcceptPolicyNever|NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain|NSHTTPCookieAcceptPolicyAlways|NSHelpButtonBezelStyle|NSHelpKeyMask|NSHelpFunctionKey|NSHeavierFontAction|NSHPUXOperatingSystem|NSYearMonthDayDatePickerElementFlag|NSYearMonthDatePickerElementFlag|NSYearCalendarUnit|NSNonStandardCharacterSetFontMask|NSNonZeroWindingRule|NSNonactivatingPanelMask|NSNonLossyASCIIStringEncoding|NSNoBorder|NSNotificationSuspensionBehaviorHold|NSNotificationSuspensionBehaviorCoalesce|NSNotificationSuspensionBehaviorDeliverImmediately|NSNotificationSuspensionBehaviorDrop|NSNotificationNoCoalescing|NSNotificationCoalescingOnSender|NSNotificationCoalescingOnName|NSNotificationDeliverImmediately|NSNotificationPostToAllSessions|NSNotPredicateType|NSNotEqualToPredicateOperatorType|NSNoScriptError|NSNoScrollerParts|NSNoSubelement|NSNoSpecifierError|NSNoCellMask|NSNoTitle|NSNoTopLevelContainersSpecifierError|NSNoTabsBezelBorder|NSNoTabsNoBorder|NSNoTabsLineBorder|NSNoInterfaceStyle|NSNoImage|NSNoUnderlineStyle|NSNoFontChangeAction|NSNullGlyph|NSNullCellType|NSNumericSearch|NSNumericPadKeyMask|NSNumberFormatterRoundHalfDown|NSNumberFormatterRoundHalfUp|NSNumberFormatterRoundHalfEven|NSNumberFormatterRoundCeiling|NSNumberFormatterRoundDown|NSNumberFormatterRoundUp|NSNumberFormatterRoundFloor|NSNumberFormatterBehavior10|NSNumberFormatterBehaviorDefault|NSNumberFormatterScientificStyle|NSNumberFormatterSpellOutStyle|NSNumberFormatterNoStyle|NSNumberFormatterCurrencyStyle|NSNumberFormatterDecimalStyle|NSNumberFormatterPercentStyle|NSNumberFormatterPadBeforeSuffix|NSNumberFormatterPadBeforePrefix|NSNumberFormatterPadAfterSuffix|NSNumberFormatterPadAfterPrefix|NSNetServicesBadArgumentError|NSNetServicesNotFoundError|NSNetServicesCollisionError|NSNetServicesCancelledError|NSNetServicesTimeoutError|NSNetServicesInvalidError|NSNetServicesUnknownError|NSNetServicesActivityInProgress|NSNetworkDomainMask|NSNewlineCharacter|NSNextStepInterfaceStyle|NSNextFunctionKey|NSNEXTSTEPStringEncoding|NSNativeShortGlyphPacking|NSNaturalTextAlignment|NSNarrowFontMask|NSChangeReadOtherContents|NSChangeGrayCell|NSChangeGrayCellMask|NSChangeBackgroundCell|NSChangeBackgroundCellMask|NSChangeCleared|NSChangeDone|NSChangeUndone|NSChangeAutosaved|NSCMYKModeColorPanel|NSCMYKColorSpaceModel|NSCircularBezelStyle|NSCircularSlider|NSConstantValueExpressionType|NSContinuousCapacityLevelIndicatorStyle|NSContentsCellMask|NSContainsComparison|NSContainerSpecifierError|NSControlGlyph|NSControlKeyMask|NSCondensedFontMask|NSColorPanelRGBModeMask|NSColorPanelGrayModeMask|NSColorPanelHSBModeMask|NSColorPanelCMYKModeMask|NSColorPanelColorListModeMask|NSColorPanelCustomPaletteModeMask|NSColorPanelCrayonModeMask|NSColorPanelWheelModeMask|NSColorPanelAllModesMask|NSColorListModeColorPanel|NSCoreServiceDirectory|NSCompositeXOR|NSCompositeSourceIn|NSCompositeSourceOut|NSCompositeSourceOver|NSCompositeSourceAtop|NSCompositeHighlight|NSCompositeCopy|NSCompositeClear|NSCompositeDestinationIn|NSCompositeDestinationOut|NSCompositeDestinationOver|NSCompositeDestinationAtop|NSCompositePlusDarker|NSCompositePlusLighter|NSCompressedFontMask|NSCommandKeyMask|NSCustomSelectorPredicateOperatorType|NSCustomPaletteModeColorPanel|NSCursorUpdate|NSCursorUpdateMask|NSCursorPointingDevice|NSCurveToBezierPathElement|NSCenterTextAlignment|NSCenterTabStopType|NSCellHighlighted|NSCellHasImageHorizontal|NSCellHasImageOnLeftOrBottom|NSCellHasOverlappingImage|NSCellChangesContents|NSCellIsBordered|NSCellIsInsetButton|NSCellDisabled|NSCellEditable|NSCellLightsByGray|NSCellLightsByBackground|NSCellLightsByContents|NSCellAllowsMixedState|NSClipPagination|NSClosePathBezierPathElement|NSClosableWindowMask|NSClockAndCalendarDatePickerStyle|NSClearControlTint|NSClearDisplayFunctionKey|NSClearLineFunctionKey|NSCaseInsensitiveSearch|NSCaseInsensitivePredicateOption|NSCannotCreateScriptCommandError|NSCancelButton|NSCancelTextMovement|NSCachesDirectory|NSCalculationNoError|NSCalculationOverflow|NSCalculationDivideByZero|NSCalculationUnderflow|NSCalculationLossOfPrecision|NSCarriageReturnCharacter|NSCriticalRequest|NSCriticalAlertStyle|NSCrayonModeColorPanel|NSThickSquareBezelStyle|NSThickerSquareBezelStyle|NSTypesetterBehavior|NSTypesetterHorizontalTabAction|NSTypesetterContainerBreakAction|NSTypesetterZeroAdvancementAction|NSTypesetterOriginalBehavior|NSTypesetterParagraphBreakAction|NSTypesetterWhitespaceAction|NSTypesetterLineBreakAction|NSTypesetterLatestBehavior|NSTickMarkRight|NSTickMarkBelow|NSTickMarkLeft|NSTickMarkAbove|NSTitledWindowMask|NSTimeZoneDatePickerElementFlag|NSToolbarItemVisibilityPriorityStandard|NSToolbarItemVisibilityPriorityHigh|NSToolbarItemVisibilityPriorityUser|NSToolbarItemVisibilityPriorityLow|NSTopTabsBezelBorder|NSToggleButton|NSTIFFCompressionNone|NSTIFFCompressionNEXT|NSTIFFCompressionCCITTFAX3|NSTIFFCompressionCCITTFAX4|NSTIFFCompressionOldJPEG|NSTIFFCompressionJPEG|NSTIFFCompressionPackBits|NSTIFFCompressionLZW|NSTIFFFileType|NSTerminateNow|NSTerminateCancel|NSTerminateLater|NSTextReadInapplicableDocumentTypeError|NSTextReadWriteErrorMinimum|NSTextReadWriteErrorMaximum|NSTextBlockMinimumHeight|NSTextBlockMinimumWidth|NSTextBlockMiddleAlignment|NSTextBlockMargin|NSTextBlockMaximumHeight|NSTextBlockMaximumWidth|NSTextBlockBottomAlignment|NSTextBlockBorder|NSTextBlockBaselineAlignment|NSTextBlockHeight|NSTextBlockTopAlignment|NSTextBlockPercentageValueType|NSTextBlockPadding|NSTextBlockWidth|NSTextBlockAbsoluteValueType|NSTextStorageEditedCharacters|NSTextStorageEditedAttributes|NSTextCellType|NSTexturedRoundedBezelStyle|NSTexturedBackgroundWindowMask|NSTexturedSquareBezelStyle|NSTextTableFixedLayoutAlgorithm|NSTextTableAutomaticLayoutAlgorithm|NSTextFieldRoundedBezel|NSTextFieldSquareBezel|NSTextFieldAndStepperDatePickerStyle|NSTextWriteInapplicableDocumentTypeError|NSTextListPrependEnclosingMarker|NSTwoByteGlyphPacking|NSTabCharacter|NSTabTextMovement|NSTabletPoint|NSTabletPointMask|NSTabletPointEventSubtype|NSTabletProximity|NSTabletProximityMask|NSTabletProximityEventSubtype|NSTableColumnNoResizing|NSTableColumnUserResizingMask|NSTableColumnAutoresizingMask|NSTableViewReverseSequentialColumnAutoresizingStyle|NSTableViewGridNone|NSTableViewSolidHorizontalGridLineMask|NSTableViewSolidVerticalGridLineMask|NSTableViewSequentialColumnAutoresizingStyle|NSTableViewNoColumnAutoresizing|NSTableViewUniformColumnAutoresizingStyle|NSTableViewFirstColumnOnlyAutoresizingStyle|NSTableViewLastColumnOnlyAutoresizingStyle|NSTrackModeMatrix|NSInsertCharFunctionKey|NSInsertFunctionKey|NSInsertLineFunctionKey|NSIntType|NSInternalScriptError|NSInternalSpecifierError|NSIndexSubelement|NSInvalidIndexSpecifierError|NSInformationalRequest|NSInformationalAlertStyle|NSInPredicateOperatorType|NSItalicFontMask|NSISO2022JPStringEncoding|NSISOLatin1StringEncoding|NSISOLatin2StringEncoding|NSIdentityMappingCharacterCollection|NSIllegalTextMovement|NSImageRight|NSImageRepMatchesDevice|NSImageRepLoadStatusReadingHeader|NSImageRepLoadStatusCompleted|NSImageRepLoadStatusInvalidData|NSImageRepLoadStatusUnexpectedEOF|NSImageRepLoadStatusUnknownType|NSImageRepLoadStatusWillNeedAllData|NSImageBelow|NSImageCellType|NSImageCacheBySize|NSImageCacheNever|NSImageCacheDefault|NSImageCacheAlways|NSImageInterpolationHigh|NSImageInterpolationNone|NSImageInterpolationDefault|NSImageInterpolationLow|NSImageOnly|NSImageOverlaps|NSImageFrameGroove|NSImageFrameGrayBezel|NSImageFrameButton|NSImageFrameNone|NSImageFramePhoto|NSImageLoadStatusReadError|NSImageLoadStatusCompleted|NSImageLoadStatusCancelled|NSImageLoadStatusInvalidData|NSImageLoadStatusUnexpectedEOF|NSImageLeft|NSImageAlignRight|NSImageAlignBottom|NSImageAlignBottomRight|NSImageAlignBottomLeft|NSImageAlignCenter|NSImageAlignTop|NSImageAlignTopRight|NSImageAlignTopLeft|NSImageAlignLeft|NSImageAbove|NSOnState|NSOneByteGlyphPacking|NSOnOffButton|NSOnlyScrollerArrows|NSOtherMouseDown|NSOtherMouseDownMask|NSOtherMouseDragged|NSOtherMouseDraggedMask|NSOtherMouseUp|NSOtherMouseUpMask|NSOtherTextMovement|NSOSF1OperatingSystem|NSOpenGLGOResetLibrary|NSOpenGLGORetainRenderers|NSOpenGLGOClearFormatCache|NSOpenGLGOFormatCacheSize|NSOpenGLPFARobust|NSOpenGLPFARendererID|NSOpenGLPFAMinimumPolicy|NSOpenGLPFAMultisample|NSOpenGLPFAMultiScreen|NSOpenGLPFAMPSafe|NSOpenGLPFAMaximumPolicy|NSOpenGLPFABackingStore|NSOpenGLPFAScreenMask|NSOpenGLPFAStencilSize|NSOpenGLPFAStereo|NSOpenGLPFASingleRenderer|NSOpenGLPFASupersample|NSOpenGLPFASamples|NSOpenGLPFASampleBuffers|NSOpenGLPFASampleAlpha|NSOpenGLPFANoRecovery|NSOpenGLPFAColorSize|NSOpenGLPFAColorFloat|NSOpenGLPFACompliant|NSOpenGLPFAClosestPolicy|NSOpenGLPFAOffScreen|NSOpenGLPFADoubleBuffer|NSOpenGLPFADepthSize|NSOpenGLPFAPixelBuffer|NSOpenGLPFAVirtualScreenCount|NSOpenGLPFAFullScreen|NSOpenGLPFAWindow|NSOpenGLPFAAccumSize|NSOpenGLPFAAccelerated|NSOpenGLPFAAuxBuffers|NSOpenGLPFAAuxDepthStencil|NSOpenGLPFAAlphaSize|NSOpenGLPFAAllRenderers|NSOpenStepUnicodeReservedBase|NSOperationNotSupportedForKeyScriptError|NSOperationNotSupportedForKeySpecifierError|NSOffState|NSOKButton|NSOrPredicateType|NSObjCBitfield|NSObjCBoolType|NSObjCShortType|NSObjCStringType|NSObjCStructType|NSObjCSelectorType|NSObjCNoType|NSObjCCharType|NSObjCObjectType|NSObjCDoubleType|NSObjCUnionType|NSObjCPointerType|NSObjCVoidType|NSObjCFloatType|NSObjCLongType|NSObjCLonglongType|NSObjCArrayType|NSDisclosureBezelStyle|NSDiscreteCapacityLevelIndicatorStyle|NSDisplayWindowRunLoopOrdering|NSDiacriticInsensitivePredicateOption|NSDirectSelection|NSDirectPredicateModifier|NSDocModalWindowMask|NSDocumentDirectory|NSDocumentationDirectory|NSDoubleType|NSDownTextMovement|NSDownArrowFunctionKey|NSDescendingPageOrder|NSDesktopDirectory|NSDecimalTabStopType|NSDeviceNColorSpaceModel|NSDeviceIndependentModifierFlagsMask|NSDeveloperDirectory|NSDeveloperApplicationDirectory|NSDefaultControlTint|NSDefaultTokenStyle|NSDeleteCharacter|NSDeleteCharFunctionKey|NSDeleteFunctionKey|NSDeleteLineFunctionKey|NSDemoApplicationDirectory|NSDayCalendarUnit|NSDateFormatterMediumStyle|NSDateFormatterBehavior10|NSDateFormatterBehaviorDefault|NSDateFormatterShortStyle|NSDateFormatterNoStyle|NSDateFormatterFullStyle|NSDateFormatterLongStyle|NSDrawerClosingState|NSDrawerClosedState|NSDrawerOpeningState|NSDrawerOpenState|NSDragOperationGeneric|NSDragOperationMove|NSDragOperationNone|NSDragOperationCopy|NSDragOperationDelete|NSDragOperationPrivate|NSDragOperationEvery|NSDragOperationLink|NSDragOperationAll|NSUserCancelledError|NSUserDirectory|NSUserDomainMask|NSUserFunctionKey|NSURLHandleNotLoaded|NSURLHandleLoadSucceeded|NSURLHandleLoadInProgress|NSURLHandleLoadFailed|NSURLCredentialPersistenceNone|NSURLCredentialPersistencePermanent|NSURLCredentialPersistenceForSession|NSUnscaledWindowMask|NSUncachedRead|NSUnicodeStringEncoding|NSUnitalicFontMask|NSUnifiedTitleAndToolbarWindowMask|NSUndoCloseGroupingRunLoopOrdering|NSUndoFunctionKey|NSUndefinedDateComponent|NSUnderlineStyleSingle|NSUnderlineStyleNone|NSUnderlineStyleThick|NSUnderlineStyleDouble|NSUnderlinePatternSolid|NSUnderlinePatternDot|NSUnderlinePatternDash|NSUnderlinePatternDashDot|NSUnderlinePatternDashDotDot|NSUnknownColorSpaceModel|NSUnknownPointingDevice|NSUnknownPageOrder|NSUnknownKeyScriptError|NSUnknownKeySpecifierError|NSUnboldFontMask|NSUtilityWindowMask|NSUTF8StringEncoding|NSUpdateWindowsRunLoopOrdering|NSUpTextMovement|NSUpArrowFunctionKey|NSJustifiedTextAlignment|NSJPEG2000FileType|NSJPEGFileType|NSJapaneseEUCGlyphPacking|NSJapaneseEUCStringEncoding|NSPostNow|NSPosterFontMask|NSPostWhenIdle|NSPostASAP|NSPositionReplace|NSPositionBefore|NSPositionBeginning|NSPositionEnd|NSPositionAfter|NSPositiveIntType|NSPositiveDoubleType|NSPositiveFloatType|NSPopUpNoArrow|NSPopUpArrowAtBottom|NSPopUpArrowAtCenter|NSPowerOffEventType|NSPortraitOrientation|NSPNGFileType|NSPushInCell|NSPushInCellMask|NSPushOnPushOffButton|NSPenTipMask|NSPenUpperSideMask|NSPenPointingDevice|NSPenLowerSideMask|NSPeriodic|NSPeriodicMask|NSPPScaleField|NSPPStatusTitle|NSPPStatusField|NSPPSaveButton|NSPPNoteTitle|NSPPNoteField|NSPPNameTitle|NSPPNameField|NSPPCopiesField|NSPPTitleField|NSPPImageButton|NSPPOptionsButton|NSPPPaperFeedButton|NSPPPageRangeTo|NSPPPageRangeFrom|NSPPPageChoiceMatrix|NSPPPreviewButton|NSPPLayoutButton|NSPlainTextTokenStyle|NSPauseFunctionKey|NSParagraphSeparatorCharacter|NSPageDownFunctionKey|NSPageUpFunctionKey|NSPrintingReplyLater|NSPrintingSuccess|NSPrintingCancelled|NSPrintingFailure|NSPrintScreenFunctionKey|NSPrinterTableNotFound|NSPrinterTableOK|NSPrinterTableError|NSPrintFunctionKey|NSPropertyListXMLFormat|NSPropertyListMutableContainers|NSPropertyListMutableContainersAndLeaves|NSPropertyListBinaryFormat|NSPropertyListImmutable|NSPropertyListOpenStepFormat|NSProprietaryStringEncoding|NSProgressIndicatorBarStyle|NSProgressIndicatorSpinningStyle|NSProgressIndicatorPreferredSmallThickness|NSProgressIndicatorPreferredThickness|NSProgressIndicatorPreferredLargeThickness|NSProgressIndicatorPreferredAquaThickness|NSPressedTab|NSPrevFunctionKey|NSPLHeightForm|NSPLCancelButton|NSPLTitleField|NSPLImageButton|NSPLOKButton|NSPLOrientationMatrix|NSPLUnitsButton|NSPLPaperNameButton|NSPLWidthForm|NSEnterCharacter|NSEndsWithComparison|NSEndsWithPredicateOperatorType|NSEndFunctionKey|NSEvenOddWindingRule|NSEverySubelement|NSEvaluatedObjectExpressionType|NSEqualToComparison|NSEqualToPredicateOperatorType|NSEraserPointingDevice|NSEraCalendarUnit|NSEraDatePickerElementFlag|NSExclude10|NSExcludeQuickDrawElementsIconCreationOption|NSExpandedFontMask|NSExecuteFunctionKey|NSViewMinXMargin|NSViewMinYMargin|NSViewMaxXMargin|NSViewMaxYMargin|NSViewHeightSizable|NSViewNotSizable|NSViewWidthSizable|NSViaPanelFontAction|NSVerticalRuler|NSValidationErrorMinimum|NSValidationErrorMaximum|NSVariableExpressionType|NSKeySpecifierEvaluationScriptError|NSKeyDown|NSKeyDownMask|NSKeyUp|NSKeyUpMask|NSKeyPathExpressionType|NSKeyValueMinusSetMutation|NSKeyValueSetSetMutation|NSKeyValueChangeReplacement|NSKeyValueChangeRemoval|NSKeyValueChangeSetting|NSKeyValueChangeInsertion|NSKeyValueIntersectSetMutation|NSKeyValueObservingOptionNew|NSKeyValueObservingOptionOld|NSKeyValueUnionSetMutation|NSKeyValueValidationError|NSQTMovieNormalPlayback|NSQTMovieLoopingBackAndForthPlayback|NSQTMovieLoopingPlayback|NSF11FunctionKey|NSF17FunctionKey|NSF12FunctionKey|NSF18FunctionKey|NSF13FunctionKey|NSF19FunctionKey|NSF14FunctionKey|NSF15FunctionKey|NSF1FunctionKey|NSF10FunctionKey|NSF16FunctionKey|NSF7FunctionKey|NSFindPanelActionReplace|NSFindPanelActionReplaceAndFind|NSFindPanelActionReplaceAll|NSFindPanelActionReplaceAllInSelection|NSFindPanelActionShowFindPanel|NSFindPanelActionSetFindString|NSFindPanelActionSelectAll|NSFindPanelActionSelectAllInSelection|NSFindPanelActionNext|NSFindPanelActionPrevious|NSFindFunctionKey|NSFitPagination|NSFileReadNoSuchFileError|NSFileReadNoPermissionError|NSFileReadCorruptFileError|NSFileReadInvalidFileNameError|NSFileReadInapplicableStringEncodingError|NSFileReadUnsupportedSchemeError|NSFileReadUnknownError|NSFileHandlingPanelCancelButton|NSFileHandlingPanelOKButton|NSFileNoSuchFileError|NSFileErrorMinimum|NSFileErrorMaximum|NSFileWriteNoPermissionError|NSFileWriteInvalidFileNameError|NSFileWriteInapplicableStringEncodingError|NSFileWriteOutOfSpaceError|NSFileWriteUnsupportedSchemeError|NSFileWriteUnknownError|NSFileLockingError|NSFixedPitchFontMask|NSF21FunctionKey|NSF27FunctionKey|NSF22FunctionKey|NSF28FunctionKey|NSF23FunctionKey|NSF29FunctionKey|NSF24FunctionKey|NSF25FunctionKey|NSF2FunctionKey|NSF20FunctionKey|NSF26FunctionKey|NSFontMonoSpaceTrait|NSFontModernSerifsClass|NSFontBoldTrait|NSFontSymbolicClass|NSFontScriptsClass|NSFontSlabSerifsClass|NSFontSansSerifClass|NSFontCondensedTrait|NSFontCollectionApplicationOnlyMask|NSFontClarendonSerifsClass|NSFontTransitionalSerifsClass|NSFontIntegerAdvancementsRenderingMode|NSFontItalicTrait|NSFontOldStyleSerifsClass|NSFontOrnamentalsClass|NSFontDefaultRenderingMode|NSFontUnknownClass|NSFontUIOptimizedTrait|NSFontPanelShadowEffectModeMask|NSFontPanelStandardModesMask|NSFontPanelStrikethroughEffectModeMask|NSFontPanelSizeModeMask|NSFontPanelCollectionModeMask|NSFontPanelTextColorEffectModeMask|NSFontPanelDocumentColorEffectModeMask|NSFontPanelUnderlineEffectModeMask|NSFontPanelFaceModeMask|NSFontPanelAllModesMask|NSFontPanelAllEffectsModeMask|NSFontExpandedTrait|NSFontVerticalTrait|NSFontFamilyClassMask|NSFontFreeformSerifsClass|NSFontAntialiasedRenderingMode|NSFontAntialiasedIntegerAdvancementsRenderingMode|NSFocusRingBelow|NSFocusRingTypeNone|NSFocusRingTypeDefault|NSFocusRingTypeExterior|NSFocusRingOnly|NSFocusRingAbove|NSFourByteGlyphPacking|NSFormattingError|NSFormattingErrorMinimum|NSFormattingErrorMaximum|NSFormFeedCharacter|NSF8FunctionKey|NSFunctionExpressionType|NSFunctionKeyMask|NSF31FunctionKey|NSF32FunctionKey|NSF33FunctionKey|NSF34FunctionKey|NSF35FunctionKey|NSF3FunctionKey|NSF30FunctionKey|NSF9FunctionKey|NSF4FunctionKey|NSFPRevertButton|NSFPSizeTitle|NSFPSizeField|NSFPSetButton|NSFPCurrentField|NSFPPreviewButton|NSFPPreviewField|NSFloatingPointSamplesBitmapFormat|NSFloatType|NSFlagsChanged|NSFlagsChangedMask|NSFaxButton|NSF5FunctionKey|NSF6FunctionKey|NSWheelModeColorPanel|NSWindowsNTOperatingSystem|NSWindowsCP1251StringEncoding|NSWindowsCP1252StringEncoding|NSWindowsCP1253StringEncoding|NSWindowsCP1254StringEncoding|NSWindowsCP1250StringEncoding|NSWindows95InterfaceStyle|NSWindows95OperatingSystem|NSWindowMiniaturizeButton|NSWindowMovedEventType|NSWindowBelow|NSWindowCloseButton|NSWindowToolbarButton|NSWindowZoomButton|NSWindowOut|NSWindowDocumentIconButton|NSWindowExposedEventType|NSWindowAbove|NSWorkspaceLaunchNewInstance|NSWorkspaceLaunchInhibitingBackgroundOnly|NSWorkspaceLaunchDefault|NSWorkspaceLaunchPreferringClassic|NSWorkspaceLaunchWithoutActivation|NSWorkspaceLaunchWithoutAddingToRecents|NSWorkspaceLaunchAsync|NSWorkspaceLaunchAndHide|NSWorkspaceLaunchAndHideOthers|NSWorkspaceLaunchAndPrint|NSWorkspaceLaunchAllowingClassicStartup|NSWeekdayCalendarUnit|NSWeekdayOrdinalCalendarUnit|NSWeekCalendarUnit|NSWantsBidiLevels|NSWarningAlertStyle|NSWritingDirectionRightToLeft|NSWritingDirectionNatural|NSWritingDirectionLeftToRight|NSWrapCalendarComponents|NSListModeMatrix|NSLineMovesRight|NSLineMovesDown|NSLineMovesUp|NSLineMovesLeft|NSLineBorder|NSLineBreakByCharWrapping|NSLineBreakByClipping|NSLineBreakByTruncatingMiddle|NSLineBreakByTruncatingHead|NSLineBreakByTruncatingTail|NSLineBreakByWordWrapping|NSLineSeparatorCharacter|NSLineSweepRight|NSLineSweepDown|NSLineSweepUp|NSLineSweepLeft|NSLineToBezierPathElement|NSLineDoesntMove|NSLinearSlider|NSLiteralSearch|NSLikePredicateOperatorType|NSLighterFontAction|NSLibraryDirectory|NSLocalDomainMask|NSLessThanComparison|NSLessThanOrEqualToComparison|NSLessThanOrEqualToPredicateOperatorType|NSLessThanPredicateOperatorType|NSLeftMouseDown|NSLeftMouseDownMask|NSLeftMouseDragged|NSLeftMouseDraggedMask|NSLeftMouseUp|NSLeftMouseUpMask|NSLeftTextMovement|NSLeftTextAlignment|NSLeftTabsBezelBorder|NSLeftTabStopType|NSLeftArrowFunctionKey|NSLayoutRightToLeft|NSLayoutNotDone|NSLayoutCantFit|NSLayoutOutOfGlyphs|NSLayoutDone|NSLayoutLeftToRight|NSLandscapeOrientation|NSLABColorSpaceModel|NSAsciiWithDoubleByteEUCGlyphPacking|NSAscendingPageOrder|NSAnyType|NSAnyPredicateModifier|NSAnyEventMask|NSAnchoredSearch|NSAnimationBlocking|NSAnimationNonblocking|NSAnimationNonblockingThreaded|NSAnimationEffectDisappearingItemDefault|NSAnimationEffectPoof|NSAnimationEaseIn|NSAnimationEaseInOut|NSAnimationEaseOut|NSAnimationLinear|NSAndPredicateType|NSAtBottom|NSAttachmentCharacter|NSAtomicWrite|NSAtTop|NSASCIIStringEncoding|NSAdobeGB1CharacterCollection|NSAdobeCNS1CharacterCollection|NSAdobeJapan1CharacterCollection|NSAdobeJapan2CharacterCollection|NSAdobeKorea1CharacterCollection|NSAddTraitFontAction|NSAdminApplicationDirectory|NSAutosaveOperation|NSAutoPagination|NSApplicationSupportDirectory|NSApplicationDirectory|NSApplicationDefined|NSApplicationDefinedMask|NSApplicationDelegateReplySuccess|NSApplicationDelegateReplyCancel|NSApplicationDelegateReplyFailure|NSApplicationDeactivatedEventType|NSApplicationActivatedEventType|NSAppKitDefined|NSAppKitDefinedMask|NSAlternateKeyMask|NSAlphaShiftKeyMask|NSAlphaNonpremultipliedBitmapFormat|NSAlphaFirstBitmapFormat|NSAlertSecondButtonReturn|NSAlertThirdButtonReturn|NSAlertOtherReturn|NSAlertDefaultReturn|NSAlertErrorReturn|NSAlertFirstButtonReturn|NSAlertAlternateReturn|NSAllScrollerParts|NSAllDomainsMask|NSAllPredicateModifier|NSAllLibrariesDirectory|NSAllApplicationsDirectory|NSArgumentsWrongScriptError|NSArgumentEvaluationScriptError|NSAboveBottom|NSAboveTop|NSAWTEventType",
        "support.constant.notification.cocoa.leopard": "NSMenuDidBeginTrackingNotification|NSViewDidUpdateTrackingAreasNotification",
        "support.constant.notification.cocoa": "NSMenuDidRemoveItemNotification|NSMenuDidSendActionNotification|NSMenuDidChangeItemNotification|NSMenuDidEndTrackingNotification|NSMenuDidAddItemNotification|NSMenuWillSendActionNotification|NSSystemColorsDidChangeNotification|NSSplitViewDidResizeSubviewsNotification|NSSplitViewWillResizeSubviewsNotification|NSContextHelpModeDidDeactivateNotification|NSContextHelpModeDidActivateNotification|NSControlTintDidChangeNotification|NSControlTextDidBeginEditingNotification|NSControlTextDidChangeNotification|NSControlTextDidEndEditingNotification|NSColorPanelColorDidChangeNotification|NSColorListDidChangeNotification|NSComboBoxSelectionIsChangingNotification|NSComboBoxSelectionDidChangeNotification|NSComboBoxWillDismissNotification|NSComboBoxWillPopUpNotification|NSClassDescriptionNeededForClassNotification|NSToolbarDidRemoveItemNotification|NSToolbarWillAddItemNotification|NSTextStorageDidProcessEditingNotification|NSTextStorageWillProcessEditingNotification|NSTextDidBeginEditingNotification|NSTextDidChangeNotification|NSTextDidEndEditingNotification|NSTextViewDidChangeSelectionNotification|NSTextViewDidChangeTypingAttributesNotification|NSTextViewWillChangeNotifyingTextViewNotification|NSTableViewSelectionIsChangingNotification|NSTableViewSelectionDidChangeNotification|NSTableViewColumnDidResizeNotification|NSTableViewColumnDidMoveNotification|NSImageRepRegistryDidChangeNotification|NSOutlineViewSelectionIsChangingNotification|NSOutlineViewSelectionDidChangeNotification|NSOutlineViewColumnDidResizeNotification|NSOutlineViewColumnDidMoveNotification|NSOutlineViewItemDidCollapseNotification|NSOutlineViewItemDidExpandNotification|NSOutlineViewItemWillCollapseNotification|NSOutlineViewItemWillExpandNotification|NSDrawerDidCloseNotification|NSDrawerDidOpenNotification|NSDrawerWillCloseNotification|NSDrawerWillOpenNotification|NSPopUpButtonCellWillPopUpNotification|NSPopUpButtonWillPopUpNotification|NSViewGlobalFrameDidChangeNotification|NSViewBoundsDidChangeNotification|NSViewFocusDidChangeNotification|NSViewFrameDidChangeNotification|NSFontSetChangedNotification|NSWindowDidResizeNotification|NSWindowDidResignMainNotification|NSWindowDidResignKeyNotification|NSWindowDidMiniaturizeNotification|NSWindowDidMoveNotification|NSWindowDidBecomeMainNotification|NSWindowDidBecomeKeyNotification|NSWindowDidChangeScreenNotification|NSWindowDidChangeScreenProfileNotification|NSWindowDidDeminiaturizeNotification|NSWindowDidUpdateNotification|NSWindowDidEndSheetNotification|NSWindowDidExposeNotification|NSWindowWillMiniaturizeNotification|NSWindowWillMoveNotification|NSWindowWillBeginSheetNotification|NSWindowWillCloseNotification|NSWorkspaceSessionDidResignActiveNotification|NSWorkspaceSessionDidBecomeActiveNotification|NSWorkspaceDidMountNotification|NSWorkspaceDidTerminateApplicationNotification|NSWorkspaceDidUnmountNotification|NSWorkspaceDidPerformFileOperationNotification|NSWorkspaceDidWakeNotification|NSWorkspaceDidLaunchApplicationNotification|NSWorkspaceWillSleepNotification|NSWorkspaceWillUnmountNotification|NSWorkspaceWillPowerOffNotification|NSWorkspaceWillLaunchApplicationNotification|NSAntialiasThresholdChangedNotification|NSApplicationDidResignActiveNotification|NSApplicationDidBecomeActiveNotification|NSApplicationDidHideNotification|NSApplicationDidChangeScreenParametersNotification|NSApplicationDidUnhideNotification|NSApplicationDidUpdateNotification|NSApplicationDidFinishLaunchingNotification|NSApplicationWillResignActiveNotification|NSApplicationWillBecomeActiveNotification|NSApplicationWillHideNotification|NSApplicationWillTerminateNotification|NSApplicationWillUnhideNotification|NSApplicationWillUpdateNotification|NSApplicationWillFinishLaunchingNotification|NSAppleEventManagerWillProcessFirstEventNotification",
        "support.constant.cocoa.leopard": "NSRuleEditorRowTypeSimple|NSRuleEditorRowTypeCompound|NSRuleEditorNestingModeSingle|NSRuleEditorNestingModeSimple|NSRuleEditorNestingModeCompound|NSRuleEditorNestingModeList|NSGradientDrawsBeforeStartingLocation|NSGradientDrawsAfterEndingLocation|NSMinusSetExpressionType|NSMachPortDeallocateReceiveRight|NSMachPortDeallocateSendRight|NSMachPortDeallocateNone|NSMapTableStrongMemory|NSMapTableCopyIn|NSMapTableZeroingWeakMemory|NSMapTableObjectPointerPersonality|NSBoxCustom|NSBundleExecutableArchitectureX86|NSBundleExecutableArchitectureI386|NSBundleExecutableArchitecturePPC|NSBundleExecutableArchitecturePPC64|NSBetweenPredicateOperatorType|NSBackgroundStyleRaised|NSBackgroundStyleDark|NSBackgroundStyleLight|NSBackgroundStyleLowered|NSStringDrawingTruncatesLastVisibleLine|NSStringEncodingConversionExternalRepresentation|NSStringEncodingConversionAllowLossy|NSSubqueryExpressionType|NSSpeechSentenceBoundary|NSSpeechImmediateBoundary|NSSpeechWordBoundary|NSSpellingStateGrammarFlag|NSSpellingStateSpellingFlag|NSSplitViewDividerStyleThin|NSSplitViewDividerStyleThick|NSServiceRequestTimedOutError|NSServiceMiscellaneousError|NSServiceMalformedServiceDictionaryError|NSServiceInvalidPasteboardDataError|NSServiceErrorMinimum|NSServiceErrorMaximum|NSServiceApplicationNotFoundError|NSServiceApplicationLaunchFailedError|NSSegmentStyleRoundRect|NSSegmentStyleRounded|NSSegmentStyleSmallSquare|NSSegmentStyleCapsule|NSSegmentStyleTexturedRounded|NSSegmentStyleTexturedSquare|NSSegmentStyleAutomatic|NSHUDWindowMask|NSHashTableStrongMemory|NSHashTableCopyIn|NSHashTableZeroingWeakMemory|NSHashTableObjectPointerPersonality|NSNoModeColorPanel|NSNetServiceNoAutoRename|NSChangeRedone|NSContainsPredicateOperatorType|NSColorRenderingIntentRelativeColorimetric|NSColorRenderingIntentSaturation|NSColorRenderingIntentDefault|NSColorRenderingIntentPerceptual|NSColorRenderingIntentAbsoluteColorimetric|NSCollectorDisabledOption|NSCellHitNone|NSCellHitContentArea|NSCellHitTrackableArea|NSCellHitEditableTextArea|NSTimeZoneNameStyleShortStandard|NSTimeZoneNameStyleShortDaylightSaving|NSTimeZoneNameStyleStandard|NSTimeZoneNameStyleDaylightSaving|NSTextFieldDatePickerStyle|NSTableViewSelectionHighlightStyleRegular|NSTableViewSelectionHighlightStyleSourceList|NSTrackingMouseMoved|NSTrackingMouseEnteredAndExited|NSTrackingCursorUpdate|NSTrackingInVisibleRect|NSTrackingEnabledDuringMouseDrag|NSTrackingAssumeInside|NSTrackingActiveInKeyWindow|NSTrackingActiveInActiveApp|NSTrackingActiveWhenFirstResponder|NSTrackingActiveAlways|NSIntersectSetExpressionType|NSIndexedColorSpaceModel|NSImageScaleNone|NSImageScaleProportionallyDown|NSImageScaleProportionallyUpOrDown|NSImageScaleAxesIndependently|NSOpenGLPFAAllowOfflineRenderers|NSOperationQueueDefaultMaxConcurrentOperationCount|NSOperationQueuePriorityHigh|NSOperationQueuePriorityNormal|NSOperationQueuePriorityVeryHigh|NSOperationQueuePriorityVeryLow|NSOperationQueuePriorityLow|NSDiacriticInsensitiveSearch|NSDownloadsDirectory|NSUnionSetExpressionType|NSUTF16BigEndianStringEncoding|NSUTF16StringEncoding|NSUTF16LittleEndianStringEncoding|NSUTF32BigEndianStringEncoding|NSUTF32StringEncoding|NSUTF32LittleEndianStringEncoding|NSPointerFunctionsMachVirtualMemory|NSPointerFunctionsMallocMemory|NSPointerFunctionsStrongMemory|NSPointerFunctionsStructPersonality|NSPointerFunctionsCStringPersonality|NSPointerFunctionsCopyIn|NSPointerFunctionsIntegerPersonality|NSPointerFunctionsZeroingWeakMemory|NSPointerFunctionsOpaqueMemory|NSPointerFunctionsOpaquePersonality|NSPointerFunctionsObjectPointerPersonality|NSPointerFunctionsObjectPersonality|NSPathStyleStandard|NSPathStyleNavigationBar|NSPathStylePopUp|NSPatternColorSpaceModel|NSPrintPanelShowsScaling|NSPrintPanelShowsCopies|NSPrintPanelShowsOrientation|NSPrintPanelShowsPaperSize|NSPrintPanelShowsPageRange|NSPrintPanelShowsPageSetupAccessory|NSPrintPanelShowsPreview|NSExecutableRuntimeMismatchError|NSExecutableNotLoadableError|NSExecutableErrorMinimum|NSExecutableErrorMaximum|NSExecutableLinkError|NSExecutableLoadError|NSExecutableArchitectureMismatchError|NSKeyValueObservingOptionInitial|NSKeyValueObservingOptionPrior|NSFindPanelSubstringMatchTypeStartsWith|NSFindPanelSubstringMatchTypeContains|NSFindPanelSubstringMatchTypeEndsWith|NSFindPanelSubstringMatchTypeFullWord|NSFileReadTooLargeError|NSFileReadUnknownStringEncodingError|NSForcedOrderingSearch|NSWindowBackingLocationMainMemory|NSWindowBackingLocationDefault|NSWindowBackingLocationVideoMemory|NSWindowSharingReadOnly|NSWindowSharingReadWrite|NSWindowSharingNone|NSWindowCollectionBehaviorMoveToActiveSpace|NSWindowCollectionBehaviorCanJoinAllSpaces|NSWindowCollectionBehaviorDefault|NSWidthInsensitiveSearch|NSAggregateExpressionType"
    };
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var escapedConstRe = "\\\\(?:[abefnrtv'\"?\\\\]|" + 
                         "[0-3]\\d{1,2}|" +
                         "[4-7]\\d?|" +
                         "222|" +
                         "x[a-zA-Z0-9]+)";

    var specialVariables = [{
            regex: "\\b_cmd\\b",
            token: "variable.other.selector.objc"
        }, {
            regex: "\\b(?:self|super)\\b",
            token: "variable.language.objc"
        }
    ];

    var cObj = new CHighlightRules(NSKeywords);
    var cRules = cObj.getRules();
    this.$keywordList = cObj.$keywordList;

    this.$rules = {
    "start": [ 
        {
            token : "comment",
            regex : "\\/\\/.*$"
        },
        DocCommentHighlightRules.getStartRule("doc-start"),
        {
            token : "comment", // multi line comment
            regex : "\\/\\*",
            next : "comment"
        }, 
        {
            token: [ "storage.type.objc", "punctuation.definition.storage.type.objc", 
                       "entity.name.type.objc", "text", "entity.other.inherited-class.objc"
                     ],
            regex: "(@)(interface|protocol)(?!.+;)(\\s+[A-Za-z_][A-Za-z0-9_]*)(\\s*:\\s*)([A-Za-z]+)"
        },
        {
            token: [ "storage.type.objc" ],
            regex: "(@end)"
        },
        {
            token: [ "storage.type.objc", "entity.name.type.objc", 
                        "entity.other.inherited-class.objc"
                     ],
            regex: "(@implementation)(\\s+[A-Za-z_][A-Za-z0-9_]*)(\\s*?::\\s*(?:[A-Za-z][A-Za-z0-9]*))?"
        },
        {
            token: "string.begin.objc",
            regex: '@"',
            next: "constant_NSString"
        },
        {
            token: "storage.type.objc",
            regex: "\\bid\\s*<",
            next: "protocol_list"
        },
        {
            token: "keyword.control.macro.objc",
            regex: "\\bNS_DURING|NS_HANDLER|NS_ENDHANDLER\\b"
        },
        {
            token: ["punctuation.definition.keyword.objc", "keyword.control.exception.objc"],
            regex: "(@)(try|catch|finally|throw)\\b"
        },
        {
            token: ["punctuation.definition.keyword.objc", "keyword.other.objc"],
            regex: "(@)(defs|encode)\\b"
        },
        {
            token: ["storage.type.id.objc", "text"],
            regex: "(\\bid\\b)(\\s|\\n)?"
        },
        {
            token: "storage.type.objc",
            regex: "\\bIBOutlet|IBAction|BOOL|SEL|id|unichar|IMP|Class\\b"
        },
        {
            token: [ "punctuation.definition.storage.type.objc", "storage.type.objc"],
            regex: "(@)(class|protocol)\\b"
        },
        {
            token: [ "punctuation.definition.storage.type.objc", "punctuation"],
            regex: "(@selector)(\\s*\\()",
            next: "selectors"
        },
        {
            token: [ "punctuation.definition.storage.modifier.objc", "storage.modifier.objc"],
            regex: "(@)(synchronized|public|private|protected|package)\\b"
        },
        {
            token: "constant.language.objc",
            regex: "\\bYES|NO|Nil|nil\\b"
        },
        {
            token:  "support.variable.foundation",
            regex: "\\bNSApp\\b"
        },

        {
            token : cObj.getKeywords(),
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        },
        {
            token: "punctuation.section.scope.begin.objc",
            regex: "\\[",
            next: "bracketed_content"
        },
        {
            token: "meta.function.objc",
            regex: "^(?:-|\\+)\\s*"
        }
    ],
    "constant_NSString": [
        {
            token: "constant.character.escape.objc",
            regex: escapedConstRe
        },
        {
            token: "invalid.illegal.unknown-escape.objc",
            regex: "\\\\."
        },
        {
            token: "string",
            regex: '[^"\\\\]+'
        },
        {
            token: "punctuation.definition.string.end",
            regex: "\"",
            next: "start"
        }
    ],
    "protocol_list": [
        {
            token: "punctuation.section.scope.end.objc",
            regex: ">",
            next: "start"
        },
        {
            token: "support.other.protocol.objc",
            regex: "\bNS(?:GlyphStorage|M(?:utableCopying|enuItem)|C(?:hangeSpelling|o(?:ding|pying|lorPicking(?:Custom|Default)))|T(?:oolbarItemValidations|ext(?:Input|AttachmentCell))|I(?:nputServ(?:iceProvider|erMouseTracker)|gnoreMisspelledWords)|Obj(?:CTypeSerializationCallBack|ect)|D(?:ecimalNumberBehaviors|raggingInfo)|U(?:serInterfaceValidations|RL(?:HandleClient|DownloadDelegate|ProtocolClient|AuthenticationChallengeSender))|Validated(?:ToobarItem|UserInterfaceItem)|Locking)\b"
        }
    ],
    "selectors": [
        {
            token: "support.function.any-method.name-of-parameter.objc",
            regex: "\\b(?:[a-zA-Z_:][\\w]*)+"
        },
        {
            token: "punctuation",
            regex: "\\)",
            next: "start"
        }
    ],
    "bracketed_content": [
        {
            token: "punctuation.section.scope.end.objc",
            regex: "]",
            next: "start"
        },
        {
            token: ["support.function.any-method.objc"],
            regex: "(?:predicateWithFormat:| NSPredicate predicateWithFormat:)",
            next: "start"
        },
        {
            token: "support.function.any-method.objc",
            regex: "\\w+(?::|(?=]))",
            next: "start"
        }
    ],
    "bracketed_strings": [
        {
            token: "punctuation.section.scope.end.objc",
            regex: "]",
            next: "start"
        },
        {
            token: "keyword.operator.logical.predicate.cocoa",
            regex: "\\b(?:AND|OR|NOT|IN)\\b"
        },
        {
            token: ["invalid.illegal.unknown-method.objc", "punctuation.separator.arguments.objc"],
            regex: "\\b(\\w+)(:)"
        },
        {
            regex: "\\b(?:ALL|ANY|SOME|NONE)\\b",
            token: "constant.language.predicate.cocoa"
        },
        {
            regex: "\\b(?:NULL|NIL|SELF|TRUE|YES|FALSE|NO|FIRST|LAST|SIZE)\\b",
            token: "constant.language.predicate.cocoa"
        },
        {
            regex: "\\b(?:MATCHES|CONTAINS|BEGINSWITH|ENDSWITH|BETWEEN)\\b",
            token: "keyword.operator.comparison.predicate.cocoa"
        },
        {
            regex: "\\bC(?:ASEINSENSITIVE|I)\\b",
            token: "keyword.other.modifier.predicate.cocoa"
        },
        {
            regex: "\\b(?:ANYKEY|SUBQUERY|CAST|TRUEPREDICATE|FALSEPREDICATE)\\b",
            token: "keyword.other.predicate.cocoa"
        },
        {
            regex: escapedConstRe,
            token: "constant.character.escape.objc"
        },
        {
            regex: "\\\\.",
            token: "invalid.illegal.unknown-escape.objc"
        },
        {
            token: "string",
            regex: '[^"\\\\]'
        },
        {
            token: "punctuation.definition.string.end.objc",
            regex: "\"",
            next: "predicates"
        }
    ],
    "comment" : [
        {
            token : "comment", // closing comment
            regex : ".*?\\*\\/",
            next : "start"
        }, {
            defaultToken : "comment"
        }
    ],
    "methods" : [
        {
            token : "meta.function.objc",
            regex : "(?=\\{|#)|;",
            next : "start"
        }
    ]
};

    // copy in C-Rules directly
    for (var r in cRules) {
        if (this.$rules[r]) {
            if (this.$rules[r].push)
                this.$rules[r].push.apply(this.$rules[r], cRules[r]);
        } else {
            this.$rules[r] = cRules[r];
        }
    }
    
    this.$rules.bracketed_content = this.$rules.bracketed_content.concat(
        this.$rules.start, specialVariables
    );

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
};

oop.inherits(ObjectiveCHighlightRules, CHighlightRules);

exports.C = ObjectiveCHighlightRules;


/***/ })

}]);
//# sourceMappingURL=bundle.9886.js.map