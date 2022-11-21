var lines = [];
lines.length = 100;
lines.fill("console.log('Hello world');", 0, 100);
lines[72] += "//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, nisi nec venenatis tristique, magna justo ultricies justo, a tincidunt justo nulla at massa. Cras urna lectus, euismod id nisl at, gravida pharetra erat. In convallis et orci vitae fringilla. Aenean hendrerit gravida diam, quis commodo orci laoreet vitae. Donec rutrum tortor et condimentum tincidunt. Quisque tempus cursus congue. Maecenas non rutrum magna. Quisque et commodo lacus. Mauris eu nunc nec orci imperdiet aliquet. Phasellus iaculis augue et magna sollicitudin, a lobortis turpis cursus. Mauris consequat, tellus at sagittis porta, ligula tellus tincidunt odio, non consequat augue odio in odio."
var editor = ace.edit("example", {
    theme: "ace/theme/textmate",
    mode: "ace/mode/javascript",
    value: lines.join('\n')
});
setTimeout(() => editor.revealRange(new ace.Range(72, 150, 72, 160)), 1000);
