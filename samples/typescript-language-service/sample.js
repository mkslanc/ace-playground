ace.require("ace/ext/language_tools");
// Easiest way to run ACE editor in container with id="example"
let editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/typescript",
    value: "console.log('Hello world' ;",
    useWorker: false
});
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

function $workerBlob(script) {
    return new Blob([script.toString()], {"type": "application/javascript"});
}

function createWorker(script) {
    if (typeof Worker == "undefined") return {
        postMessage: function () {
        },
        terminate: function () {
        }
    };

    var blob = $workerBlob(script);
    var URL = window.URL || window.webkitURL;
    var blobURL = URL.createObjectURL(blob);
    // calling URL.revokeObjectURL before worker is terminated breaks it on IE Edge
    return new Worker(blobURL);
}

let worker = createWorker("!" + function () {
    importScripts("https://cdn.jsdelivr.net/npm/ace-linters/build/service-manager.js");
    let manager = new ServiceManager(self);
    manager.registerService("typescript", {
        module: () => {
            importScripts("https://cdn.jsdelivr.net/npm/ace-linters/build/typescript-service.js");
            return {TypescriptService};
        },
        className: "TypescriptService",
        modes: "typescript|javascript|tsx|jsx"
    });

} + "();");

let languageProvider = LanguageProvider.default(worker);

// Register the editor with the language provider
languageProvider.registerEditor(editor);
