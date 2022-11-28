class AcePlayground extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: "open"});

        var dom = require("ace/lib/dom");
        dom.buildDom(["div", {id: "host"},
            ["div", {id: "html"}],
            ["div", {id: "css"}],
            ["iframe", {id: "preview"}],
            ["style", `
                #host {
                    border: solid 1px gray;
                    display: grid;
                    grid-template-areas: "html preview" "css preview";
                }
                #html {
                    grid-area: html;
                    height: 200px;
                }
                #css {
                    grid-area: css;
                    height: 200px;
                }
                #preview {
                    grid-area: preview;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            `]
        ], shadow);

        var htmlEditor = ace.edit(shadow.querySelector("#html"), {
            theme: "ace/theme/solarized_light",
            mode: "ace/mode/html",
            value: "<div>\n\thollow world!\n</div>\n<script><\/script>",
            autoScrollEditorIntoView: true
        });
        var cssEditor = ace.edit(shadow.querySelector("#css"), {
            theme: "ace/theme/solarized_dark",
            mode: "ace/mode/css",
            value: "*{\n\tcolor:red\n}",
            autoScrollEditorIntoView: true
        });

        var preview = shadow.querySelector("#preview");

        this.htmlEditor = htmlEditor;
        this.cssEditor = cssEditor;
        this.preview = preview;

        htmlEditor.renderer.attachToShadowRoot();

        this.updatePreview = this.updatePreview.bind(this)
        htmlEditor.on("input", this.updatePreview);
        cssEditor.on("input", this.updatePreview);

        this.updatePreview();
    }
    updatePreview() {
        var code = this.htmlEditor.getValue() + "<style>" + this.cssEditor.getValue() + "</style>";
        this.preview.src = "data:text/html," + encodeURIComponent(code)
    }
}

customElements.define('ace-playground', AcePlayground);

window.add = function() {
    var el = document.createElement("ace-playground");
    document.body.appendChild(el);
};