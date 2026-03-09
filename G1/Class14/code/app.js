// IMPORT from another .js file

const funcs = require("./functions")


console.log("Hello there from my script file!");

let a = 10;
let b = 20;

let person = {
    fullName: "Martin Panovski",
    age: 32,
    jobTitle: "Software Developer"
}

let printPersonInfo = (person) => {
    console.log(`FullName ${person.fullName} | Age: ${person.age} | Job position: ${person.jobTitle}`);
}

console.log(a);
console.log(b);

printPersonInfo(person);


funcs.sayHello("Bob");
funcs.sayGoodbye("Bob");

funcs.printInConsole("This is something to be printed in console!");
