// trigger extension
ace.require("ace/ext/language_tools");
var editor = ace.edit("example");
editor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/tomorrow");
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

//Try to write something in Result tab->