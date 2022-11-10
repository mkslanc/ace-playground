import {AceLayout, Box, EditorType, MenuToolBar, TabManager} from "ace-layout";
import {addMenu} from "./menu";
import {pathToTitle, request} from "./utils";
import {generateTemplate} from "./template";

var editorBox: Box, outerBox: Box, exampleBox: Box;

document.body.innerHTML = "";
var base = new Box({
    toolBars: {
        top: new MenuToolBar(),
    },
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
addMenu(loadSample);

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

var startingSample = 'samples/creating-ace-editor/hello-world';
var tabCSS = tabManager.open({title: "CSS", path: 'sample.css', active: false}, "main");
var tabHTML = tabManager.open({title: "HTML", path: 'sample.html', active: false}, "main");
var tabJs = tabManager.open({title: "JavaScript", path: 'sample.js'}, "main");

loadSample(startingSample);


var button = document.createElement("button");
button.textContent = "Run";
button.style.marginLeft = "auto";
button.style.marginRight = "5px";
button.onclick = () => {
    var html = generateTemplate(tabJs.session.getValue(), tabHTML.session.getValue(), tabCSS.session.getValue())
    var previewTab = tabManager.open({
        title: "Result",
        editorType: EditorType.preview,
        path: "result"
    }, "example");
    displayError("");
    if (!window.onmessage) window.onmessage = (e) => {
        displayError(e.data);
    }
    previewTab.editor.setSession(previewTab, html);
};
editorBox.addButtons(button);

function loadSample(path) {
    var js = request(path + '/sample.js').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    var css = request(path + '/sample.css').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    var html = request(path + '/sample.html').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });

    Promise.all([js, css, html]).then(
        function (samples) {
            tabCSS = tabManager.open({title: "CSS", path: 'sample.css', active: false}, "main");
            tabCSS.editor
                .editor.setOptions({
                value: samples[1]
            });
            tabHTML = tabManager.open({title: "HTML", path: 'sample.html', active: false}, "main");
            tabHTML.editor.editor.setOptions({
                value: samples[2]
            });
            tabJs = tabManager.open({title: "JavaScript", path: 'sample.js'}, "main");
            tabJs.editor.editor.setOptions({
                value: `//${pathToTitle(path)}\n\n` + samples[0]
            });

        },
        function (err) {
            displayError(err);
        }
    );
}

function displayError(errorMessage) {
    if (typeof errorMessage !== "string") return;
    var terminal = tabManager.open({title: "Problems", path: 'terminal'}, "console");
    terminal.editor.editor.setOptions({
        value: errorMessage
    });
}
