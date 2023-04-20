import {Ace, AceEditor, AceLayout, Box, CommandManager, EditorType, MenuToolbar, TabManager} from "ace-layout";
import {addMenu} from "./menu";
import {pathToTitle, request} from "./utils";
import {generateTemplate} from "./template";
import * as defaultLayout from "./layouts/two-columns-bottom.json";
import {Tab} from "ace-layout/widgets/tabs/tab";
import {SAMPLES} from "./samples";
import {registerLanguageProvider} from "./linters/linters";
import {displayError, windowError} from "./error_handler";

let editorBox: Box, exampleBox: Box, consoleBox: Box;
let currentPath: string | undefined;
let serializedTabData = "";
let previewTab: Tab | undefined;

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
                size: 100,
                isMain: true,
            }),
        })
    }),
});

new AceLayout(base);
addMenu(setSample);

base.render();
document.body.appendChild(base.element);
registerLanguageProvider(editorBox);

function onResize() {
    base.setBox(0, 0, window.innerWidth, window.innerHeight);
}

let tabManager = TabManager.getInstance({
    containers: {
        main: editorBox,
        example: exampleBox,
        console: consoleBox,
    }
});
let tabState = localStorage.playground_tabs ? JSON.parse(localStorage.playground_tabs) : {"main": defaultLayout};
tabManager.setState(tabState);

onResize();

let allSamples = Object.values(SAMPLES).reduce((prev, curr) => prev.concat(curr.map(path => path.toLowerCase())), []);

let tabCSS: Tab<Ace.EditSession>, tabHTML: Tab<Ace.EditSession>, tabJs: Tab<Ace.EditSession>;

function getTab(title: string, path: string): Tab<Ace.EditSession> {
    let tab = tabManager.open<Ace.EditSession>({title: title, path: path}, "main");
    onSessionValueChange(tab.session);
    return tab;
}

export function initTabs() {
    tabCSS = getTab("CSS", "sample.css");
    tabHTML = getTab("HTML", "sample.html");
    tabJs = getTab("JavaScript", "sample.js");
}

let hashSample;
let sampleValues: [string, string, string] | undefined;

function loadHashSample() {
    hashSample = new URL(document.URL).hash.replace("#", "");
    let path = 'samples/' + (allSamples.includes(hashSample) ? hashSample : "hello-world");
    let value = new URL(document.URL).searchParams.get("value");
    if (value) {
        try {
            let data = window.atob(value).split("\\0");
            if (data.length == 3)
                sampleValues = data as [string, string, string];
        } catch (e) {
        }
    } else {
        let state = new URL(document.URL).searchParams.get("state");
        if (state) {
            try {
                localStorage[path] = window.atob(state);
            } catch (e) {
            }
        }
    }

    setSample(path);
}

function createEditorButton(textContent: string, title: string, onclick: () => void) {
    let button = document.createElement("button");
    button.textContent = textContent;
    button.style.marginLeft = "auto";
    button.style.marginRight = "5px";
    button.setAttribute('title', title);
    button.onclick = onclick;
    editorBox.addButton(button);
}

function createRollbackButton() {
    createEditorButton("Rollback", 'Rollback to default sample', function () {
        localStorage[currentPath!] = null;
        initTabs();
        loadSample(currentPath!);
    });
}

function createRunButton() {
    createEditorButton("Run", "Ctrl+Enter", runSample);
}

function serializeTabsData() {
    return [tabJs, tabCSS, tabHTML].map(tab => tab.session.getValue()).join("\\0");
}

function createCopyLinkButton() {
    createEditorButton("Copy link", "Copy link", function () {
        let url = new URL(document.URL);
        url.searchParams.set("value", window.btoa(serializeTabsData()));
        navigator.clipboard.writeText(url.toString()).then(r => {
        });
    });
}

function createCopyStateButton() {
    createEditorButton("Copy state", "Copy state", function () {
        saveSample();
        let url = new URL(document.URL);
        url.searchParams.set("state", window.btoa(localStorage[currentPath!]));
        navigator.clipboard.writeText(url.toString()).then(r => {
        });
    });
}

function createCloseConsoleButton() {
    consoleBox.renderButtons([{
        class: "consoleCloseBtn",
        title: "F6",
        onclick: function () {
            consoleBox.hide();
        },
        content: "x"
    }]);
}

export function createButtons() {
    createRollbackButton();
    createCopyLinkButton();
    // createCopyStateButton();
    createRunButton();
    createCloseConsoleButton();
}

export function runSample() {
    window.onmessage ??= windowError;
    let html = generateTemplate(tabJs.session.getValue(), tabHTML.session.getValue(), tabCSS.session.getValue())
    previewTab = tabManager.open({
        title: "Result",
        editorType: EditorType.preview,
        path: "result"
    }, "example");
    displayError("");
    previewTab.editor!.setSession(previewTab, html);
    serializedTabData = serializeTabsData();
    tabDataIsRun();
}

CommandManager.registerCommands([{
    bindKey: {
        win: "Ctrl-Enter",
        mac: "Command-Enter"
    },
    exec: runSample
}]);

createButtons();

function setSample(path: string) {
    saveSample();

    let hash = path.split("/").pop()!;
    if (hash != hashSample) {
        let url = new URL(document.URL);
        url.hash = hash;
        url.searchParams.delete("value");
        url.searchParams.delete("state");
        document.location.href = url.href;
    }

    initTabs();

    if (sampleValues) {
        setTabValues(sampleValues);
        sampleValues = undefined;
    } else if (localStorage[path]) {
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

    let storage = getTabData();
    localStorage[currentPath] = JSON.stringify(storage);
}

export function getTabData() {
    let storage = {};
    function saveTabData(tab: Tab<Ace.EditSession>) {
        storage["@file@" + tab.path] = AceEditor.getSessionState(tab);
    }
    saveTabData(tabJs);
    saveTabData(tabCSS);
    saveTabData(tabHTML);
    return storage;
}

function setTabValues(samples: [string, string, string]) {
    tabJs.session.setValue(samples[0]);
    tabCSS.session.setValue(samples[1]);
    tabHTML.session.setValue(samples[2]);

    runSample();
}

function loadSample(path: string) {
    let js = request(path + '/sample.js').then(function (response: XMLHttpRequest) {
        return `//${pathToTitle(path)}\n\n` + response.responseText;
    });
    let css = request(path + '/sample.css').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let html = request(path + '/sample.html').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });

    Promise.all([js, css, html]).then(
        function (samples) {
            setTabValues(samples);
        },
        function (err) {
            displayError("");
        }
    );
}

function tabDataIsChanged() {
    previewTab!.setTitle("Result*");
    previewTab!.element.style.fontStyle = "italic";
}

function tabDataIsRun() {
    previewTab!.setTitle("Result");
    previewTab!.element.style.fontStyle = "";
}

function onSessionValueChange(session: Ace.EditSession) {
    session.on("change", () => {
        if (!previewTab)
            return;
        let newTabData = serializeTabsData();
        if (newTabData != serializedTabData) {
            tabDataIsChanged();
        } else {
            tabDataIsRun();
        }
    })
}

window.onpopstate = loadHashSample;
window.onload = loadHashSample;
window.onresize = onResize;
window.onbeforeunload = function () {
    localStorage.playground_tabs = JSON.stringify(tabManager.toJSON());
    saveSample();
}
