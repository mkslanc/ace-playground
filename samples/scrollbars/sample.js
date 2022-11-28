//scrollbar options
let editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    vScrollBarAlwaysVisible: true,
    customScrollbar: true,
    mode: "ace/mode/javascript",
    value: "console.log('Hello world');"
});

setTimeout(function () {
    editor.setOption("hScrollBarAlwaysVisible", true);
}, 1000);


var tryButton = document.getElementById('try-button');

tryButton.onclick = function() {
    editor.session.setValue(
        "console.log('Some text');\n\n".repeat(20)
        + "//" + "very long comment ".repeat(50)
        + "console.log('Some more text');\n\n".repeat(50)

    );
}