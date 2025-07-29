const createDiffView = ace.require("ace/ext/diff").createDiffView;

const valueA = `
function factorial(n) {
    if (n == 0) return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));  // 120
`;

const valueB = `
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));  // 120
`;

// Create the editor (right-hand side)
const editorB = ace.edit("example", {
    mode: "ace/mode/javascript",
    value: valueB,
});

// Turn on the inline diff
const diffView = createDiffView({
    inline: "b",
    editorB: editorB,  // right-hand editor
    valueA: valueA    // left-hand contents
});

diffView.editorA.session.setMode("ace/mode/javascript")