import {Mode as JavascriptMode} from "ace-code/src/mode/javascript";

var theme = require("ace-code/src/theme/textmate");
import * as ace from "ace-code";

var editorCode = `window.example = ace.edit("example",
    {
        theme: theme,
        customScrollbar: true,
        mode: jsMode,
        value: "Hello world"
    });
`
var jsMode = new JavascriptMode();

var editor = ace.edit("editor",
    {
        theme: theme,
        customScrollbar: true,
        mode: jsMode,
        value: editorCode
    });
var button = document.createElement("button");
button.textContent = "Run";
document.body.appendChild(button);
button.onclick = () => {
    if (window["example"] && window["example"].destroy) {
        window["example"].destroy();
    }
    eval(editor.getValue());
};


