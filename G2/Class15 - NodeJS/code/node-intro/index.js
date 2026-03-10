// ===> Imported using CommonJS syntax
// const greetService = require("./modules/greet-service.js");
// ===> Imported using ES Modules syntax
import { sayHello, sayBye } from "./modules/greet-service.js";
import * as fileService from "./modules/file-service.js"
import "colors"

console.log("")
console.log("=========== This is the main JS file ===========".blue);

console.log("Hello, World!".america);
console.log("Hello, World! Italic".italic);

const bob = {
    firstName: "Bob",
    lastName: "Bobsky"
};

sayHello(bob.firstName);
sayBye("John")


console.log("")
console.log("=========== Working with File System ===========".cyan)


fileService.addText("Hello, this is our FIRST line.\n")

fileService.appendText("This is appended SECOND line.")

const fileText = fileService.readText();
console.log("The file content: ", fileText);

console.log("")