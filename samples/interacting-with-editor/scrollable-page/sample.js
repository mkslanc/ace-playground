var $ = document.getElementById.bind(document);
//var dom = require("ace/lib/dom");

ace.config.set("enableBasicAutocompletion", true);

//add command to all new editor instances
require("ace/commands/default_commands").commands.push({
    name: "Toggle Fullscreen",
    bindKey: "F11",
    exec: function (editor) {
        var fullScreen = dom.toggleCssClass(document.body, "fullScreen");
        dom.setCssClass(editor.container, "fullScreen", fullScreen);
        editor.setAutoScrollEditorIntoView(!fullScreen);
        editor.resize();
    }
});

// create first editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");
editor.renderer.setScrollMargin(10, 10);
editor.setOptions({
    // "scrollPastEnd": 0.8,
    autoScrollEditorIntoView: true
});

var count = 1;

function add() {
    var oldEl = editor.container;
    var pad = document.createElement("div");
    pad.style.padding = "40px";
    oldEl.parentNode.insertBefore(pad, oldEl.nextSibling);

    var el = document.createElement("div");
    oldEl.parentNode.insertBefore(el, pad.nextSibling);

    count++;
    var theme = themes[Math.floor(themes.length * Math.random() - 1e-5)];
    editor = ace.edit(el);
    editor.setOptions({
        mode: "ace/mode/javascript",
        theme: theme,
        autoScrollEditorIntoView: true
    });

    editor.setValue([
        "this is editor number: ", count, "\n", "using theme \"", theme, "\"\n", ":)"
    ].join(""), -1);

    scroll();
}

function scroll(speed) {
    var top = editor.container.getBoundingClientRect().top;
    speed = speed || 10;
    if (top > 60 && speed < 500) {
        if (speed > top - speed - 50) speed = top - speed - 50; else setTimeout(scroll, 10, speed + 10);
        window.scrollBy(0, speed);
    }
}

var themes = require("ace/ext/themelist").themes.map(function (t) {
    return t.theme;
});

window.add = add;
window.scroll = scroll;