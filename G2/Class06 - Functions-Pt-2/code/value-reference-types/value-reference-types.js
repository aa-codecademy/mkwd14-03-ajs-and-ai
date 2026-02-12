console.log("=============== VALUE TYPE ===============");
// primitive values (string, number, boolean, null, undefined) are value types
// both *variable* and *value* are stored in the memory STACK
// when you assign a value type to another variable, a copy of the value is made

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string"

console.log(valueTypeVariable); // "This is a string"
console.log(newValueTypeVariable); // "This is a NEW string"

let num1 = 10;
let num2 = num1;
// let num2 = 10;
num2 = 103120403403;

console.log(num1);
console.log(num2);


console.log("");
console.log("=============== REFERENCE TYPE ===============");
// complex datatypes (objects, arrays, functions etc..)
// the *variable* is stored in the STACK, the *value* in the HEAP
// when you assign a reference type to another variable, you are copying the reference, not the actual value

// ===> Example with object

const personObject = {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    printFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

console.log(personObject);

const newPersonObject = personObject;
newPersonObject.firstName = "Pink";
newPersonObject.lastName = "Panther";

console.log(personObject);
console.log(newPersonObject);

// ===> Example with array
const testArray = [1, 2, 3, 4];
const newTestArray = testArray;
newTestArray.push(324, 433, 444)

console.log(testArray);
console.log(newTestArray);


console.log("");
console.log("=============== Creating Copy of an Array ===============");
// => since arrays are REFERENCE type, in many cases we don't want to modify the original array, so we need a way to create a copy of it with the changes we want, and not affect the original as mentioned.

// ===> Using custom function
function copyArray(array) {
    let copyArray = [];
    array.forEach(element => copyArray.push(element));
    return copyArray;
}

