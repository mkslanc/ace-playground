var editor = ace.edit("example");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");

// add command to lazy-load keybinding_menu extension
editor.commands.addCommand({
    name: "showKeyboardShortcuts",
    bindKey: {
        win: "Ctrl-Alt-h",
        mac: "Command-Alt-h"
    },
    exec: function (editor) {
        ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
            module.init(editor);
            editor.showKeyboardShortcuts();
        });
    }
});
editor.execCommand("showKeyboardShortcuts");