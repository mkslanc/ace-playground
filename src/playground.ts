import {Ace, AceEditor, AceLayout, Box, CommandManager, dom, EditorType, MenuToolBar, TabManager} from "ace-layout";
import {addMenu} from "./menu";
import {pathToTitle, request} from "./utils";
import {generateTemplate} from "./template";
import * as twoColumnsBottom from "./layouts/two-columns-bottom.json";
import {Tab} from "ace-layout/src/widgets/tabs/tab";
import {SAMPLES} from "./samples";
import {LanguageProvider} from "ace-linters";
import {LayoutEditor} from "../../ace-layout/src/widgets/widget";
let event = require("ace-code/src/lib/event");
let {HashHandler} = require("ace-code/src/keyboard/hash_handler");
let keyUtil = require("ace-code/src/lib/keys");

var editorBox: Box, exampleBox: Box, consoleBox: Box;
document.body.innerHTML = "";
var base = new Box({
    toolBars: {
        top: new MenuToolBar(),
    },
    vertical: false,
    0: new Box({
        0: editorBox = new Box({isMain: true}),
        1: new Box({
            vertical: true,
            0: exampleBox = new Box({isMain: true}),
            1: consoleBox = new Box({
                ratio: 1,
                size: 100,
                isMain: true,
                buttonList: [{
                    class: "consoleCloseBtn", title: "F6", onclick: function () {
                        consoleBox.hide();
                    }
                }],
            }),
        })
    }),
});

new AceLayout(base);
addMenu(loadSample);

let worker = new Worker(new URL('./webworker.ts', import.meta.url));
let languageProvider = LanguageProvider.create(worker);

request('ace.d.ts').then(function (response: XMLHttpRequest) {
    languageProvider.setGlobalOptions("typescript", {
        extraLibs: {
            "ace.d.ts": {
                content: correctDeclaration(response.responseText),
                version: 1
            },
        }
    });
});

function correctDeclaration(declaration) {
    return declaration.replace(/export\s+namespace\s+Ace/, "declare namespace Ace")
        .replace(/export\s+const\s+version/, "declare namespace ace {\nexport const version") + "}";
}

editorBox.on("editorAdded", (editor: LayoutEditor) => {
    if (editor instanceof AceEditor)
        languageProvider.registerEditor(editor.editor);
});

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
        console: consoleBox,
    }
});
tabManager.setState(twoColumnsBottom);

onResize();

var allSamples = Object.values(SAMPLES).reduce((prev, curr) => prev.concat(curr.map(path => path.toLowerCase())), []);

var hashSample = new URL(document.URL).hash.replace("#", "");
if (!allSamples.includes(hashSample))
    hashSample = "hello-world";

var tabCSS: Tab<Ace.EditSession>, tabHTML: Tab<Ace.EditSession>, tabJs: Tab<Ace.EditSession>;


let menuKb = new HashHandler([
    {
        bindKey: "Ctrl-Shift-B",
        name: "format",
        exec: function () {
            languageProvider.format();
        }
    }
]);

event.addCommandKeyListener(window, function (e, hashId, keyCode) {
    let keyString = keyUtil.keyCodeToString(keyCode);
    let command = menuKb.findKeyCommand(hashId, keyString);
    if (command) {
        command.exec();
        e.preventDefault();
    }
});
function getTab(title: string, path: string) {
    return tabManager.open<Ace.EditSession>({title: title, path: path}, "main");
}

export function initTabs() {
    tabCSS = getTab("CSS", "sample.css");
    tabHTML = getTab("HTML", "sample.html");
    tabJs = getTab("JavaScript", "sample.js");
}

loadSample('samples/' + hashSample);

export function createRunButton() {
    var button = document.createElement("button");
    button.textContent = "Run";
    button.style.marginLeft = "auto";
    button.style.marginRight = "5px";
    button.setAttribute('title', 'Ctrl+Enter');
    button.onclick = runSample;
    return button;
}

export function runSample() {
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
}

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
    var url = new URL(document.URL);
    url.hash = path.split("/").pop();
    document.location.href = url.href;

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

            runSample();
        },
        function (err) {
            displayError(err);
        }
    );
}

function displayError(errorMessage) {
    if (typeof errorMessage !== "string") return;
    var terminal = tabManager.open<Ace.EditSession>({
        title: "Problems",
        path: 'terminal',
        editorType: EditorType.ace
    }, "console");
    terminal.session.setValue(errorMessage);
    tabManager.loadFile(terminal);
}
consoleBox.addButtons();
