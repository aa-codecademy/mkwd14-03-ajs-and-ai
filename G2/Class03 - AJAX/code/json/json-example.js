console.log("================ JSON (JavaScript Object Notation) ================");
// JSON (JavaScript Object Notation) is a lightweight data format that is easy for humans to read and write and easy for machines to parse and generate 
// It is widely used for exchanging data between a client and server in web applications

console.log("");
console.log("================ Create JSON from JavaScript Object ================");
// Creating a JSON string from a JavaScript object is called "serialization"
// This is useful for sending data to a server (or saving it to a file in backend applications)
// JSON.stringify(JSObject)

const jsObject = {
    firstName: "Bob",
    "lastName": "Bobsky", // before ES6, the properties had to be written as strings
    age: 25,
    isStudent: true,
    favouriteSubjects: [
        "JavaScript",
        "C#"
    ],
    printInfo: function() {
        console.log(`Name: ${this.firstName} ${this.lastName}. Age: ${this.age}`);
    },
    newProp: 123
};

console.log(jsObject["firstName"]);
console.log(jsObject.firstName);
console.log(jsObject);
jsObject.printInfo();
console.log(typeof jsObject); // object

// ===> Serialize JavaScript object to JSON 
const jsonString = JSON.stringify(jsObject);

console.log("");
console.log("Serialized object:\n", jsonString);
console.log(typeof jsonString); // string


console.log("");
console.log("================ Create JavaScript Object from JSON ================");
// Converting a JSON string into a JavaScript object is called "deserialization"
// This is useful when receiving JSON data from an API or reading JSON from a file.
// JSON.parse(jsonString)

const courseJson = `{
  "trainer": "John Doe",
  "assistant": "Jane Doe",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg",
    "Maria",
    "Tom",
    "Sue"
  ],
  "academy": "Code"
}`;

// ===> Deserialize JSON to JavaScript object  
const jsonData = JSON.parse(courseJson);
console.log(jsonData);
console.log(typeof jsonData); // object

// BONUS: This is how the courseJson json would look like in an XML format 
<course>
    <trainer>John Doe</trainer>
    <assistant>Jane Doe</assistant>
    <students>
        <student>Bob</student>
        <student>Samantha</student>
        <student>Chris</student>
        <student>Jill</student>
        <student>Greg</student>
        <student>Maria</student>
        <student>Tom</student>
        <student>Sue</student>
    </students>
    <academy>Code</academy>
</course>