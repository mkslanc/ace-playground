import {LanguageProvider} from "ace-linters";
import {request} from "../utils";
import {AceEditor, Box, LayoutEditor} from "ace-layout";
import event from "ace-code/src/lib/event";
import {HashHandler} from "ace-code/src/keyboard/hash_handler";
import keyUtil from "ace-code/src/lib/keys";

let languageProvider: LanguageProvider;

async function requestDeclarations() {
    const declarationFiles = [
        'ace.d.ts',
        'ace-modes.d.ts',
        'ace-modules.d.ts',
        'ace-linters.d.ts',
        'ace-lib.d.ts',
        'ace-ext.d.ts',
        'ace-snippets.d.ts',
        'ace-theme.d.ts'
    ];

    try {
        const requests = declarationFiles.map(filename =>
            request(filename).then((response: XMLHttpRequest) => ({
                filename,
                content: response.responseText
            }))
        );

        const declarations = await Promise.all(requests);

        const extraLibs = declarations.reduce((libs, { filename, content }) => {
            let processedContent = content;

            if (filename === 'ace.d.ts') {
                processedContent = correctAceDeclaration(content);
            } else if (filename === 'ace-linters.d.ts') {
                processedContent = correctDeclaration(content);
            }

            libs[filename] = {
                content: processedContent,
                version: 1
            };

            return libs;
        }, {} as Record<string, { content: string; version: number }>);

        languageProvider.setGlobalOptions("typescript", {
            extraLibs,
            compilerOptions: {
                allowJs: true,
                checkJs: true
            }
        }, true);

    } catch (error) {
        console.error('Failed to load declaration files:', error);
    }
}


function correctAceDeclaration(declaration) {
    return declaration + `

declare module ace {
  export * from "ace-builds";
}`;
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
        let keyString = keyUtil["keyCodeToString"](keyCode);
        let command = menuKb.findKeyCommand(hashId, keyString);
        if (command?.exec) {
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
