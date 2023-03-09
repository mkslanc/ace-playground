import {Ace, AceEditor, AceLayout, Box, CommandManager, EditorType, MenuToolbar, TabManager} from "ace-layout";
import {addMenu} from "./menu";
import {pathToTitle, request} from "./utils";
import {generateTemplate} from "./template";
import * as defaultLayout from "./layouts/two-columns-bottom.json";
import {Tab} from "ace-layout/src/widgets/tabs/tab";
import {SAMPLES} from "./samples";
import {LanguageProvider} from "ace-linters";
import {LayoutEditor} from "../../ace-layout/src/widgets/widget";
let event = require("ace-code/src/lib/event");
let {HashHandler} = require("ace-code/src/keyboard/hash_handler");
let keyUtil = require("ace-code/src/lib/keys");

let editorBox: Box, exampleBox: Box, consoleBox: Box;

let currentPath: string;

document.body.innerHTML = "";
let base = new Box({
    toolBars: {
        top: new MenuToolbar(),
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
            }),
        })
    }),
});

new AceLayout(base);
addMenu(setSample);

let worker = new Worker(new URL('./webworker.ts', import.meta.url));
let languageProvider = LanguageProvider.create(worker);

request('ace.d.ts').then(function (response: XMLHttpRequest) {
    languageProvider.setGlobalOptions("typescript", {
        extraLibs: {
            "ace.d.ts": {
                content: correctDeclaration(response.responseText),
                version: 1
            },
        },
        compilerOptions: {
            allowJs: true,
            checkJs: true
        }
    }, true);
});

function correctDeclaration(declaration) {
    return declaration.replace(/export\s+namespace\s+Ace/, "declare namespace Ace")
            .replace(/export\s+const\s+version/, "declare namespace ace {\nexport const version") + "}" +
        `\ndeclare class LanguageProvider {
    private $activeEditor;
    private $descriptionTooltip;
    private readonly $markdownConverter;
    private readonly $messageController;
    private $sessionLanguageProviders;
    private $editors;
    static fromCdn(cdnUrl: string): LanguageProvider;
    registerEditor(editor: Ace.Editor)
    setOptions(session: Ace.EditSession, options);
    setGlobalOptions(serviceName, options, merge?:boolean)
}
`;
}

editorBox.on("editorAdded", (editor: LayoutEditor) => {
    if (editor instanceof AceEditor)
        languageProvider.registerEditor(editor.editor);
});

base.render();

let onResize = function () {
    base.setBox(0, 0, window.innerWidth, window.innerHeight);
};
window.onresize = onResize;

document.body.appendChild(base.element);
let tabManager = TabManager.getInstance({
    containers: {
        main: editorBox,
        example: exampleBox,
        console: consoleBox,
    }
});
tabManager.setState({"main": defaultLayout});

onResize();

window.onpopstate = () => {
    loadHashSample();
}

let allSamples = Object.values(SAMPLES).reduce((prev, curr) => prev.concat(curr.map(path => path.toLowerCase())), []);

let tabCSS: Tab<Ace.EditSession>, tabHTML: Tab<Ace.EditSession>, tabJs: Tab<Ace.EditSession>;

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
function getTab(title: string, path: string): Tab<Ace.EditSession> {
    return tabManager.open<Ace.EditSession>({title: title, path: path}, "main");
}

export function initTabs() {
    tabCSS = getTab("CSS", "sample.css");
    tabHTML = getTab("HTML", "sample.html");
    tabJs = getTab("JavaScript", "sample.js");
}

let hashSample;
function loadHashSample() {
    hashSample = new URL(document.URL).hash.replace("#", "");
    setSample('samples/' + (allSamples.includes(hashSample) ? hashSample : "hello-world"));
}

loadHashSample();

export function createRollbackButton() {
    let button = document.createElement("button");
    button.textContent = "Rollback";
    button.style.marginLeft = "auto";
    button.style.marginRight = "5px";
    button.setAttribute('title', 'Rollback to default sample');
    button.onclick = function () {
        localStorage[currentPath] = null;
        initTabs();
        loadSample(currentPath);
    };
    editorBox.addButton(button);
}

export function createRunButton() {
    let button = document.createElement("button");
    button.textContent = "Run";
    button.style.marginLeft = "auto";
    button.style.marginRight = "5px";
    button.setAttribute('title', 'Ctrl+Enter');
    button.onclick = runSample;
    editorBox.addButton(button);
}

export function createCloseConsoleButton() {
    consoleBox.renderButtons([{
        class: "consoleCloseBtn",
        title: "F6",
        onclick: function () {
            consoleBox.hide();
        },
        content: "x"
    }]);
}

export function runSample() {
    let html = generateTemplate(tabJs.session.getValue(), tabHTML.session.getValue(), tabCSS.session.getValue())
    let previewTab = tabManager.open({
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

createRollbackButton();
createRunButton();
createCloseConsoleButton();

function setSample(path) {
    saveSample();

    let hash = path.split("/").pop();
    if (hash != hashSample) {
        let url = new URL(document.URL);
        url.hash = hash;
        document.location.href = url.href;
    }

    initTabs();

    if (localStorage[path]) {
        restoreSample(path);
    } else {
        loadSample(path);
    }

    currentPath = path;
}

function restoreSample(path) {
    let storage = JSON.parse(localStorage[path]);
    tabManager.restoreFrom(storage);
    runSample();
}

function saveSample() {
    if (!currentPath)
        return;

    let storage = {};
    tabManager.saveTo(storage);
    localStorage[currentPath] = JSON.stringify(storage);
}


window.onbeforeunload = function () {
    saveSample();
}

function loadSample(path) {
    let js = request(path + '/sample.js').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let css = request(path + '/sample.css').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let html = request(path + '/sample.html').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });

    Promise.all([js, css, html]).then(
        function (samples) {
            tabJs.session.setValue(`//${pathToTitle(path)}\n\n` + samples[0]);
            tabCSS.session.setValue(samples[1]);
            tabHTML.session.setValue(samples[2]);

            runSample();
        },
        function (err) {
            displayError(err);
        }
    );
}

function displayError(errorMessage) {
    if (typeof errorMessage !== "string") return;
    let terminal = tabManager.open<Ace.EditSession>({
        title: "Problems",
        path: 'terminal',
        editorType: EditorType.ace
    }, "console");
    terminal.session.setValue(errorMessage);
    tabManager.loadFile(terminal);
}
