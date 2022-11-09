import {AceLayout, Box, EditorType, TabManager} from "ace-layout";
import {Mode as JavascriptMode} from "ace-code/src/mode/javascript";

var theme = require("ace-code/src/theme/textmate");

var editorBox: Box, outerBox: Box, exampleBox: Box;

document.body.innerHTML = "";
var base = new Box({
    vertical: false,
    0: outerBox = new Box({
        vertical: true,
        0: new Box({
            0: editorBox = new Box({isMain: true}),
            1: exampleBox = new Box({isMain: true})
        }),
        1: new Box({
            ratio: 1,
            size: 100,
            isMain: true,
            buttonList: [{
                class: "consoleCloseBtn", title: "F6", onclick: function () {
                    outerBox[1].hide();
                }
            }],
        }),
        toolBars: {},
    }),
});
new AceLayout(base);

base.render();

var onResize = function () {
    base.setBox(0, 0, window.innerWidth, window.innerHeight);
};
window.onresize = onResize;

document.body.appendChild(base.element);
var tabManager = window["tabManager"] = TabManager.getInstance({
    containers: {
        main: editorBox,
        example: exampleBox,
        console: outerBox[1],
    }
});
tabManager.setState({});

onResize();

var jsMode = new JavascriptMode();
var tab = tabManager.open({title: "Creating ACE editor", path: "creating-the-editor/js"});
var previewTab = tabManager.open({title: "Result", editorType: EditorType.preview, path: "result/js"}, "example");
var editorCode = `// Easiest way to run ACE editor in container with id="example"
ace.edit("example",
    {
        theme: "ace/theme/textmate",
        customScrollbar: true,
        mode: "ace/mode/javascript",
        value: "console.log('Hello world');"
    });
`
tab.editor.editor.setOptions({
    theme: theme,
    customScrollbar: true,
    mode: jsMode,
    value: editorCode
});
var div = document.createElement("div");
var button = document.createElement("button");
button.textContent = "Run";

button.onclick = () => {
    var html = `<html>
<head>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            height: 100%
        }
    </style>
</head>
<body>
<div id='example' style="height: 100%"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js"
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script> ${tab.editor.editor.getValue()};</script>
</body>
</html>`;
    previewTab = tabManager.open({title: "Result", editorType: EditorType.preview, path: "result/js"}, "example");
    previewTab.editor.setSession(previewTab, html);
};

div.appendChild(button);

editorBox.addButtons(div);