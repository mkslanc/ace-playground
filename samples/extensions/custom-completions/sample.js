var editor = ace.edit("example");
editor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/tomorrow");

// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});
editor.completers = [{
    getCompletions: function(editor, session, pos, prefix, callback) {
        var completions = [{
            caption: "my caption",
            snippet: "content: '$1'",
            meta: "snippet",
            type: "snippet"
        },
            {
                caption: "my value",
                value: "value",
                meta: "custom",
                type: "value"
            }
        ];
        callback(null, completions);
    },
    getDocTooltip: function(item) {
        if (!item.docHTML) {
            item.docHTML = [
                "<b>", item.caption, "</b>",
            ].join("");
        }
    }
}];

//Try to write something in Result tab->