// With options editor could be easily customised
// You can call `editor.setOption()` or `editor.setOptions()` at any time to change the options.

var editor = ace.edit("example", {
    mode: "ace/mode/javascript",
    value: "\n\nfunction hello() {\n    alert('Hello world!');\n}\n\n\n",
    theme: "ace/theme/dracula",
    showGutter: false
});
setTimeout(function () {
    editor.setOption("showGutter", true);
}, 3000);
