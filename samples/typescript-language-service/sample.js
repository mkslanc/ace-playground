ace.require("ace/ext/language_tools");
let editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/typescript",
    value: `import * as libFile from "./dir/file";

let test;
let chainable = new ChainableOne();
chainable.chainableTwo.addAlpha("test").setBeta();
libFile.data.setAlpha("").chainableTwo;`
});
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

//create Language Provider for editor
let provider = LanguageProvider.fromCdn("https://cdn.jsdelivr.net/npm/ace-linters/build");

// Register the editor with the language provider
provider.registerEditor(editor);

provider.setGlobalOptions("typescript", {
    errorCodesToTreatAsWarning: [
        "6133"
    ],
    compilerOptions: {
        noUnusedLocals: true
    },
    extraLibs: {
        "libDeclaration.d.ts": {
            content:
`declare class ChainableOne {
    chainableTwo: ChainableTwo;
    setAlpha(value: string): this;
    setBeta(value: number): ChainableTwo;
}

declare class ChainableTwo {
    setGamma(value: boolean): this;
    addAlpha(value: string): ChainableOne;
}`,
            version: 1
        },
        "dir/file.ts": {
            content: "export var data = new ChainableOne();",
            version: 1
        }
    }
});
