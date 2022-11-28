var buildDom = require("ace/lib/dom").buildDom;
var editor = ace.edit();
editor.setOptions({
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/markdown",
    maxLines: 30,
    minLines: 30,
    autoScrollEditorIntoView: true
});
var refs = {};

function updateToolbar() {
    refs.saveButton.disabled = editor.session.getUndoManager().isClean();
    refs.undoButton.disabled = !editor.session.getUndoManager().hasUndo();
    refs.redoButton.disabled = !editor.session.getUndoManager().hasRedo();
}

editor.on("input", updateToolbar);
editor.session.setValue(localStorage.savedValue || "Welcome to ace Toolbar demo!");

function save() {
    localStorage.savedValue = editor.getValue();
    editor.session.getUndoManager().markClean();
    updateToolbar();
}

editor.commands.addCommand({
    name: "save",
    exec: save,
    bindKey: {
        win: "ctrl-s",
        mac: "cmd-s"
    }
});

buildDom([
    "div", {class: "toolbar"}, [
        "button", {
            ref: "saveButton",
            onclick: save
        }, "save"
    ], [
        "button", {
            ref: "undoButton",
            onclick: function () {
                editor.undo();
            }
        }, "undo"
    ], [
        "button", {
            ref: "redoButton",
            onclick: function () {
                editor.redo();
            }
        }, "redo"
    ], [
        "button", {
            style: "font-weight: bold",
            onclick: function () {
                editor.insertSnippet("**${1:$SELECTION}**");
                editor.renderer.scrollCursorIntoView();
            }
        }, "bold"
    ], [
        "button", {
            style: "font-style: italic",
            onclick: function () {
                editor.insertSnippet("*${1:$SELECTION}*");
                editor.renderer.scrollCursorIntoView();
            }
        }, "Italic"
    ]
], document.body, refs);
document.body.appendChild(editor.container);

window.editor = editor;