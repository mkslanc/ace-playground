var editor1 = ace.edit("editor1");
editor1.setOptions({
    hasCssTransforms: true,
    theme: "ace/theme/tomorrow_night_blue",
    mode: "ace/mode/html"
});

var editor2 = ace.edit("editor2", {
    hasCssTransforms: true,
    theme: "ace/theme/kuroir",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true
});

var editor3 = ace.edit("editor3", {
    hasCssTransforms: true,
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true
});


var editor4 = ace.edit("editor4", {
    hasCssTransforms: true,
    theme: "ace/theme/solarized_light",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true
});

var editor = ace.edit("editor", {
    hasCssTransforms: true,
    mode: "ace/mode/html",
    value: "editor 4\n from a mirror",
    enableBasicAutocompletion: true
});
editor.renderer.setScrollMargin(10, 10, 10, 10);


var checkbox = document.getElementById("option");
checkbox.onchange = function () {
    editor1.setOption("autoScrollEditorIntoView", checkbox.checked);
    editor2.setOption("autoScrollEditorIntoView", checkbox.checked);
    editor3.setOption("autoScrollEditorIntoView", checkbox.checked);
    editor4.setOption("autoScrollEditorIntoView", checkbox.checked);
    editor.setOption("autoScrollEditorIntoView", checkbox.checked);
};
checkbox.onchange();
window.editor = editor;
window.editor4 = editor4;