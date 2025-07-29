/**@type{typeof import("ace-builds/src-noconflict/ext-diff").createDiffView}*/
const createDiffView = ace.require("ace/ext/diff").createDiffView;

//example function to create side-by-side editors
const createSplitEditor = function (editorA, editorB) {
    const el = document.getElementById('example');
    var e0 = document.getElementById('editorA');
    var s = document.getElementById('splitter');
    var e1 = document.getElementById('editorB');
    e0.style.position = e1.style.position = s.style.position = "absolute";
    el.style.position = "relative";

    const ratio = 0.5;

    var split = { $container: el };

    split.resize = function resize() {
        var height = el.parentNode["clientHeight"] - el.offsetTop;
        var total = el.clientWidth;
        var w1 = total * ratio;
        var w2 = total * (1 - ratio);
        s.style.left = w1 - 1 + "px";
        s.style.height = el.style.height = height + "px";

        var st0 = editorA.container.style;
        var st1 = editorB.container.style;
        st0.width = w1 + "px";
        st1.width = w2 + "px";
        st0.left = 0 + "px";
        st1.left = w1 + "px";

        st0.top = st1.top = "0px";
        st0.height = st1.height = height + "px";

        editorA.resize();
        editorB.resize();
    };

    window.addEventListener("resize", split.resize);
    split.resize();
    return split;
};



const valueA = `function factorial(n) {
    if (n == 0) return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));  // 120

//Partially same comment
`;

const valueB = `
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));  // 120

//partially same comment
`;

// Create the editor (left side)
const editorA = ace.edit("editorA", {
    mode: "ace/mode/javascript",
    value: valueA,
});

// Create the editor (right side)
const editorB = ace.edit("editorB", {
    mode: "ace/mode/javascript",
    value: valueB,
});

/**@type{import("ace-builds/src-noconflict/ext-diff").DiffViewOptions}*/
const options = {
    syncSelections: true, //Whether to synchronize selections between both editors
    ignoreTrimWhitespace: true //Whether to ignore trimmed whitespace when computing diffs
}

// Turn on the split diff
const diffView = createDiffView({
    editorA: editorA,  // left-hand editor
    editorB: editorB    // right-hand editor
}, options);

// prepare layout for two editors
createSplitEditor(editorA, editorB);