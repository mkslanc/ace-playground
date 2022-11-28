var value = `//example function
function foo(items, nada) {
    for (var i=0; i<items.length; i++) {
        alert(items[i] + "hello");
    }
}
`;

var editor = ace.edit("example", {
    mode: "ace/mode/javascript",
    value: value
});

//Close one level to see fold widget
setTimeout(() => editor.session.foldToLevel(1), 100);

// Editor's theme could be customised by providing your own css styles
editor.setTheme({cssClass: "my-custom-theme", isDark: true})