import {LanguageProvider} from "ace-linters";
import {request} from "../utils";
import {AceEditor, Box} from "ace-layout";
import {LayoutEditor} from "ace-layout/src/widgets/widget";
let event = require("ace-code/src/lib/event");
let {HashHandler} = require("ace-code/src/keyboard/hash_handler");
let keyUtil = require("ace-code/src/lib/keys");
let languageProvider: LanguageProvider;

function requestDeclarations() {
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
}


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
    static fromCdn(cdnUrl: string, options?:ProviderOptions): LanguageProvider;
    registerEditor(editor: Ace.Editor)
    setSessionOptions(session: Ace.EditSession, options);
    setGlobalOptions(serviceName, options, merge?:boolean)
}\n
    declare interface ProviderOptions {
        functionality: {
            hover: boolean,
            completion: {
                overwriteCompleters: boolean    
            } | false,
            completionResolve: boolean,
            format: boolean
        },
        markdownConverter?: MarkDownConverter
    }
`;
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
