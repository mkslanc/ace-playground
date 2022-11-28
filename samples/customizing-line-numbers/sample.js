// Easiest way to run ACE editor in container with id="example"
var editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/javascript",
    value: "console.log('Hello world!');\n\n".repeat(20)
});

var hexNumberRenderer = {
    getText: function(session, row) {
        return (row + 1).toString(16);
    },
    getWidth: function(session, lastLineNumber, config) {
        return Math.max(
            lastLineNumber.toString(16).length,
            (config.lastRow + 1).toString(16).length,
            2
        ) * config.characterWidth;
    },
    update: function(e, editor) {
        editor.renderer.$loop.schedule(editor.renderer.CHANGE_GUTTER);
    },
    attach: function(editor) {
        editor.renderer.$gutterLayer.$renderer = this;
        editor.on("changeSelection", this.update);
        this.update(null, editor);
    },
    detach: function(editor) {
        if (editor.renderer.$gutterLayer.$renderer == this)
            editor.renderer.$gutterLayer.$renderer = null;
        editor.off("changeSelection", this.update);
        this.update(null, editor);
    }
};

setTimeout(function () {
    hexNumberRenderer.attach(editor);
}, 2000);