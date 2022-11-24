import {Ace, AceLayout, Box, CommandManager, EditorType, MenuToolBar, TabManager} from "ace-layout";
import {addMenu} from "./menu";
import {pathToTitle, request} from "./utils";
import {generateTemplate} from "./template";
import * as twoColumnsBottom from "./layouts/two-columns-bottom.json";
import {Tab} from "ace-layout/src/widgets/tabs/tab";

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
tabManager.setState(twoColumnsBottom);

onResize();

var startingSample = 'samples/creating-ace-editor/hello-world';
var tabCSS: Tab<Ace.EditSession>, tabHTML: Tab<Ace.EditSession>, tabJs: Tab<Ace.EditSession>;

export function initTabs() {
    tabCSS = tabManager.open({title: "CSS", path: 'sample.css', active: false}, "main");
    tabHTML = tabManager.open({title: "HTML", path: 'sample.html', active: false}, "main");
    tabJs = tabManager.open({title: "JavaScript", path: 'sample.js'}, "main");
}

loadSample(startingSample);

export function createRunButton() {
    var button = document.createElement("button");
    button.textContent = "Run";
    button.style.marginLeft = "auto";
    button.style.marginRight = "5px";
    button.setAttribute('title', 'Ctrl+Enter');
    button.onclick = runSample;
    return button;
}

var runSample = () => {
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

CommandManager.registerCommands([{
    bindKey: {
        win: "Ctrl-Enter",
        mac: "Command-Enter"
    },
    exec: runSample
}]);

var button = createRunButton();
editorBox.addButtons(button);

function loadSample(path) {
    initTabs();

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
            tabManager.loadFile(tabCSS, samples[1]);
            tabManager.loadFile(tabHTML, samples[2]);
            tabManager.loadFile(tabJs, `//${pathToTitle(path)}\n\n` + samples[0]);
        },
        function (err) {
            displayError(err);
        }
    );
}

function displayError(errorMessage) {
    if (typeof errorMessage !== "string") return;
    var terminal = tabManager.open<Ace.EditSession>({title: "Problems", path: 'terminal', editorType: EditorType.ace}, "console");
    terminal.session.setValue(errorMessage);
    tabManager.loadFile(terminal);
}
