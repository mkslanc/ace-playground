ace.require("ace/ext/language_tools");
// Easiest way to run ACE editor in container with id="example"
let editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/typescript",
    value: "console.log('Hello world' ;"
});
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

//create Language Provider for json doc from ace linters

let provider = LanguageProvider.fromCdn("https://cdn.jsdelivr.net/npm/ace-linters/build");

// Register the editor with the language provider
provider.registerEditor(editor);
