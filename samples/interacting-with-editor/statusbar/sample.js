var editor = ace.edit("editor");
var StatusBar = ace.require("ace/ext/statusbar").StatusBar;
// create a simple selection status indicator
var statusBar = new StatusBar(editor, document.getElementById("statusBar"));
editor.setTheme("ace/theme/dawn");
editor.session.setMode("ace/mode/html");