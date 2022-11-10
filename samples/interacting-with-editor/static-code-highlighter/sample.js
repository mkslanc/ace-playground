var highlight = ace.require("ace/ext/static_highlight");
function qsa(sel) {
    return Array.apply(null, document.querySelectorAll(sel));
}

qsa(".code").forEach(function (codeEl) {
    highlight(codeEl, {
        mode: codeEl.getAttribute("ace-mode"),
        theme: codeEl.getAttribute("ace-theme"),
        firstLineNumber: 1,
        showGutter: codeEl.getAttribute("ace-gutter"),
        trim: true
    }, function (highlighted) {

    });
});