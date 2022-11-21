// Editor main events
let editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/javascript",
    value: "console.log('Hello world');"
});

let events = [
    'blur',
    'input',
    'change',
    'changeSelectionStyle',
    'changeSession',
    'copy',
    'focus',
    'paste',
    'mousemove',
    'mouseup',
    'mousewheel',
    'click'
]

var output = document.getElementById('output');
function showEvent(str) {
    while (output.childNodes.length > 50) {
        output.removeChild(output.firstChild);
    }
    output.appendChild(document.createTextNode(str));
    output.appendChild(document.createElement('br'));
    output.scrollTop = output.scrollHeight;
}

for (let event of events) {
    editor.on(event, () => {
        showEvent("Editor event: " + event);
    })
}


setTimeout(function () {
    editor.setSession(ace.createEditSession(`console.log('Hello new world!');`));
}, 5000);