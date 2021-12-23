const Ajv = require("ajv")
const ajv = new Ajv()
const schema = require("./schema.json")

function json_validate(data) {
    const validate_schema = ajv.compile(schema);

    return validate_schema(data)
}

const data = {
    name: "test-name",
    description: "test description",
    gitLink: "https://test.git",
    params: ["uid", "name"],
    events: [
      {
        eventName: "test-event",
        callbackDetails: ["test callback"]
      }, 
    ],
    bundle: "test bundle"
};

console.log("start json validation");

console.log("validate result: ", json_validate(data));

console.log("end the json validation")


