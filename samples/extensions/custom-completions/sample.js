// trigger extension
ace.require("ace/ext/language_tools");
var editor = ace.edit("example");
editor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/tomorrow");

editor.completers = [{
    getCompletions: function(editor, session, pos, prefix, callback) {
        var completions = [{
            caption: "my caption",
            snippet: "content",
            meta: "snippet",
            type: "snippet"
        }];
        callback(null, completions);
    }
}];
// enable autocompletion and snippets
editor.setOptions({
    enableLiveAutocompletion: true
});

//Try to write something in Result tab->