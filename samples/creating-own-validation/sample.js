function validate() {
    editor.session.clearAnnotations();
    var lines = editor.session.getDocument().getAllLines();
    let annotations = [];
    for (var i in lines) {
        if (!/^[\w\s]*$/.test(lines[i])) {
            annotations.push({
                row: i,
                type: "error",
                text: "This line contains special symbols!"
            });
        }
        else if (/\d/.test(lines[i])) {
            annotations.push({
                row: i,
                type: "warning",
                text: "This line contains numbers!"
            });
        }
        else if (/_/.test(lines[i])) {
            annotations.push({
                row: i,
                type: "info",
                text: "This line contains _!"
            });
        }

    }
    editor.session.setAnnotations(annotations);
}

var value = `
Common test line
Line with 01234
Another common line
Some_line
Line with $ symbol
`;

var editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/text",
    value: value
});

validate();
editor.on("input", () => {
    validate();
});