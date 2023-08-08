import {LanguageProvider} from "ace-linters";
import {request} from "../utils";
import {AceEditor, Box} from "ace-layout";
import {LayoutEditor} from "ace-layout/widgets/widget";
import event from "ace-code/src/lib/event";
import {HashHandler} from "ace-code/src/keyboard/hash_handler";
import keyUtil from "ace-code/src/lib/keys";

let languageProvider: LanguageProvider;

function requestDeclarations() {
    let ace = request('ace.d.ts').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let aceModes = request('ace-modes.d.ts').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let languageProviderDeclaration = request('language-provider.d.ts').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    let languageServiceDeclaration = request('language-service.d.ts').then(function (response: XMLHttpRequest) {
        return response.responseText;
    });
    Promise.all([ace, languageProviderDeclaration, aceModes, languageServiceDeclaration]).then(function (responses) {
        languageProvider.setGlobalOptions("typescript", {
            extraLibs: {
                "ace.d.ts": {
                    content: correctAceDeclaration(responses[0]),
                    version: 1
                },
                "language-provider.d.ts": {
                    content: correctDeclaration(responses[1]),
                    version: 1
                },
                "ace-modes.d.ts": {
                    content: responses[2],
                    version: 1
                },
                "language-service.d.ts": {
                    content: correctDeclaration(responses[3]),
                    version: 1
                },
            },
            compilerOptions: {
                allowJs: true,
                checkJs: true
            }
        }, true);    
    });
}


function correctAceDeclaration(declaration) {
    return declaration.replace(/export\s+namespace\s+Ace/, "declare namespace Ace")
            .replace(/export\s+const\s+version/, "declare namespace ace {\nexport const version") + "}";
}

function correctDeclaration(declaration) {
    return declaration.replaceAll(/^\s*import\s.*$/gm, "").replaceAll(/export\s+/g,"declare ");
}

function registerCommands() {
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
}

export function registerLanguageProvider(box: Box) {
    let worker = new Worker(new URL('./webworker.ts', import.meta.url));
    languageProvider = LanguageProvider.create(worker);
    requestDeclarations();
    registerCommands();

    box.on("editorAdded", (editor: LayoutEditor) => {
        if (editor instanceof AceEditor)
            languageProvider.registerEditor(editor.editor);
    });
}
