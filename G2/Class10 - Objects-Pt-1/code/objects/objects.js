// 'use strict'

console.log("======================= OBJECTS PART 1 =======================");
// => representation of entities that exist in the real world
// => consists of PROPERTIES and METHODS


// ===> Example: Anonymous object, created using object-literals (curly brackets {})
const dog = {
    name: "Sparky",
    "color": "brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    bark: function () {
        console.log("BARK BARK BARK");
    },
    printDogInfo: function () {
        // console.log(`Dog: ${name}. Age: ${age}. Owner: ${owner.firstName}`); // ReferenceError: age is not defined
        console.log(`Dog: ${this.name}. Age: ${this.age}. Owner: ${this.owner.firstName}`);
    },
    // 'this' examples
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);
    },
    printThis: function () {
        console.log(this);
    }
}

dog.printDogInfo();

console.log(dog.getThis); // window
dog.printThisAnonymous(); // window
dog.printThis(); // the dog object
// TIP: when using anonymous objects use 'function' for creating methods


console.log("");
console.log("=========== Optional Chaining Operator (?.) ===========");

dog.owner = null; // The owner left it :@

// ===> Optional Chaining (?.)
// => safely access nested object properties without throwing an error
// => if the property doesn't exist, it returns 'undefined' instead of throwing a TypeError

// A) Without optional chaining - throws error if owner is undefined
// console.log(dog.owner.firstName); // TypeError if owner doesn't exist

// if (dog.owner) {
//     console.log(dog.owner.firstName);
//     console.log(dog.owner.lastName);
// }

// B) With optional chaining - safe access
console.log(dog.owner?.firstName); // undefined (no error!)
console.log(dog.owner?.lastName); // undefined (no error!)



console.log("");
console.log("=========== Using Constructor Function ===========");

function Person(firstName, lastName) {
    // ===> Ternary Operator => check if `firstName` is truthy, If yes, assigns `firstName`; otherwise, assigns "FirstName N/A"
    // this.firstName = firstName ? firstName : "FirstName N/A";

    // ===> Nullish Coalescing Operator (??), which checks if `firstName` is null or undefined only
    // If `firstName` is null or undefined, assigns "FirstName N/A"; otherwise, assigns `firstName` as-is.
    // this.firstName = firstName ?? "FirstName N/A";

    // ===> Logical OR (||) operator, which assigns "FirstName N/A" if `firstName` is falsy  
    this.firstName = firstName || "FirstName N/A";
    this.lastName = lastName;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }

    // 'this' examples
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);
    }
    this.printThis = function () {
        console.log(this);
    }
}

const anonymous = new Person(null, null)

const john = new Person("John", "Doe")

console.log(john.getFullName());


console.log(john.getThis); // current Person object (instance)
john.printThisAnonymous(); // current Person object (instance)
john.printThis(); // current Person object (instance)



console.log("");
console.log("=========== The 'window' object ===========");
// the global object !!!
// variables and functions declared globally become properties and methods of the window object
function testWindowObject() {
    console.log("Hello from function");
}
window.testWindowObject();
var testWindow = "test"
console.log(window.testWindow);


console.log("");
console.log("=========== The 'document' object ===========");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document


console.clear();
console.log("");
console.log("======================= OBJECT BUILT-IN METHODS =======================");

// ***create***
// => method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument 

const person = {
    firstName: "Bob",
    lastName: "Bobsky",
    greet: function () {
        console.log("Hello!");
    }
}
console.log(person);

const bob = Object.create(person);
console.log(bob);

console.log(bob.firstName);

const anonymousObj = Object.create(null);
console.log(anonymousObj);


// ***assign***
// => method that can merge two objects into one. It accepts two objects and tries to merge the second object into the first one
const bobAddress = {
    street: "Bobsky St.",
    city: "Skopje"
}

Object.assign(bob, bobAddress)
console.log(bobAddress);
console.log(bob);

const bobsInfo = Object.assign(bob, bobAddress);



console.log("");
console.log("============== Exploring the object ==============");

const barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("Aw Aw Aw !");
    },
}

// *** keys ***
// => returns all the property and method names of our object in an array
const barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

// *** values ***
// => returns all values from our properties and methods ( the whole functions ) in an array
const barniesValues = Object.values(barnie);
console.log(barniesValues);

// *** entries ***
// => returns an array of arrays that have a key and value pair
const keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);


// *** for..in loop ***
// for...in goes through all the KEYS of an object
for (let key in barnie) {
    console.log(key);
    console.log(barnie[key]);
    console.log(`${key}: ${barnie[key]}`);
}



console.clear();
console.log("");
console.log("============== Changing the object accessibility ==============");


// *** freeze ***
// => lock our object for any modifications
// => adding new properties/methods is not allowed
// => changing the values of existing is also not allowed

Object.freeze(barnie);
console.log(barnie);
barnie.color = "white"; // won't add new property
barnie.name = "Chapo"; // won't change the existing value
console.log(barnie);

// *** seal ***
// => can't add new properties or methods
// => can change the existing ones

const marley = {
    name: "Marley",
    color: "brown"
}

Object.seal(marley)
marley.age = 2;  // won't add new property
marley.color = "black";  // will change the existing value with the newly assigned
console.log(marley);