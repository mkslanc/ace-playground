var editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/javascript",
    value: `function foo(items, nada) {
    for (var i=0; i<items.length; i++) {
        alert(items[i] + "juhu");
    }
}
`
});
var command = {
    name: "My command",
    //key or key combination, you could use {mac:"key-combination", win:"key-combination"}
    //to provide different key combination for mac and win
    bindKey: "Ctrl-Shift-A",
    exec: (ace) => {
        var cursor = ace.getCursorPositionScreen();
        alert(`My command run at ${cursor.row + 1}: ${cursor.column}`);
    }
};
editor.commands.addCommand(command);

//Try to use `Ctrl+Shift+A` to execute your command