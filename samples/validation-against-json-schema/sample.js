// trigger extension
ace.require("ace/ext/language_tools");

var editor = ace.edit("example");
editor.session.setMode("ace/mode/json");
editor.setTheme("ace/theme/tomorrow");
// enable autocompletion
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    useWorker: false,
    value: "{\n  \"name\": \"Jo\"\n}"
});

//add simple JSON schema
var jsonSchema = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 50
    },
    "age": {
      "type": "integer",
      "minimum": 0,
      "maximum": 120
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "favoriteColor": {
      "type": "string",
      "enum": ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    }
  },
  "required": ["name", "age", "email"],
  "additionalProperties": false
}
`;

function $workerBlob(script) {
    return new Blob([script.toString()], {"type": "application/javascript"});
}

function createWorker(script) {
    if (typeof Worker == "undefined") return {
        postMessage: function () {
        },
        terminate: function () {
        }
    };

    var blob = $workerBlob(script);
    var URL = window.URL || window.webkitURL;
    var blobURL = URL.createObjectURL(blob);
    // calling URL.revokeObjectURL before worker is terminated breaks it on IE Edge
    return new Worker(blobURL);
}

let worker = createWorker("!" + function () {
    importScripts("https://cdn.jsdelivr.net/npm/ace-linters/build/service-manager.js");
    let manager = new ServiceManager(self);
    manager.registerService("json", {
        module: () => {
            importScripts("https://cdn.jsdelivr.net/npm/ace-linters/build/json-service.js");
            return {JsonService};
        },
        className: "JsonService",
        modes: "json|json5"
    });

} + "();");


//create Language Provider for json doc from ace linters

let provider = LanguageProvider.create(worker);

//link schema to json service
provider.setGlobalOptions("json", {
    schemas: [
        {
            uri: "common.schema.json",
            schema: jsonSchema
        }
    ]
});

provider.registerEditor(editor);
provider.setOptions(editor.session, {schemaUri: "common.schema.json"});

//try to write something inside curly braces ->
