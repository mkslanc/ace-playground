var lines = [];
lines.length = 100;
lines.fill("console.log('Hello world');", 0, 30);
var editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    customScrollbar: true,
    mode: "ace/mode/text",
    value: lines.join('\n')
});
editor.session.setAnnotations([
    {
        row: 1,
        column: 2,
        type: "error",
        text: "My error annotation"
    }, {
        row: 4,
        column: 1,
        type: "warning",
        text: "My warning annotation"

    }, {
        row: 20,
        column: 1,
        type: "info",
        text: "My info annotation"
    }
]);