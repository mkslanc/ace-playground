var editor = ace.edit("editor");
ace.require('ace/ext/settings_menu').init(editor);
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");
editor.commands.addCommands([
    {
        name: "showSettingsMenu",
        bindKey: {
            win: "Ctrl-q",
            mac: "Ctrl-q"
        },
        exec: function (editor) {
            editor.showSettingsMenu();
        },
        readOnly: true
    }
]);
editor.showSettingsMenu();

//Try to use `Ctrl+Q` for menu to appear