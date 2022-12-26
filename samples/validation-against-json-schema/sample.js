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

//link schema to json service
setLanguageGlobalOptions("json", {
    jsonSchemas: [{
        uri: "common.schema.json",
        schema: jsonSchema
    }]
});
//create Language Provider for json doc from ace linters
// `jsonSchemaUri` should point to related schemas uri
let provider = new LanguageProvider(editor, {jsonSchemaUri: "common.schema.json"});

//try to write something inside curly braces ->
