// 'use strict' // => uncomment if you want to enable strict mode


console.log("================= PURE FUNCTIONS =================");
/*
    What are Pure Functions ?

    1) No External Dependencies
        => A pure function does not depend on variables or state outside its scope that might change over time (e.g., global variables);
    2) No Side Effects
        => does not modify any external state, such as changing global variables, updating DOM elements, or logging to the console
    3) Same input, same output

    => core concept in "Functional Programming" 
*/

console.log("==== ADDING ELEMENTS EXAMPLE ====");

// => Using Impure Function
const impureArray = [1, 2, 3];

function addToArrayImpure(array, item) {
    array.push(item);
    return array;
}

let resultImpure = addToArrayImpure(impureArray, 99999);
console.log(resultImpure);
console.log(impureArray);

// => Using Pure Function
const pureArray = [1, 2, 3];

function addToArrayPure(array, item) {
    const result = [];
    for (const element of array) {
        result.push(element);
    }
    result.push(item);
    return result;
}

let resultPure = addToArrayPure(pureArray, 4444);
console.log(pureArray);
console.log(resultPure);


console.log("==== SHOPPING CART EXAMPLE ====");

// => Impure function
const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
]

function calculateTotalImpure() {
    let total = 0;
    for (const cartItem of cart) {
        total += cartItem.price;
    }
    console.log("The total is " + total);
    return total;
}

console.log("Impure approach :");
console.log(calculateTotalImpure()); // 1025


// => Pure function

function calculateTotalPure(cartItems) {
    let total = 0;
    for (const cartItem of cartItems) {
        total += cartItem.price;
    }
    return total;
}

console.log("Pure approach :");
console.log(calculateTotalPure(cart));


console.log("");
console.log("================= STRICT TYPING IN JAVASCRIPT =================");
// JavaScript is a loosely typed (or dynamically typed) language, meaning variables can hold values of any type
// The `use strict` keyword (directive) enables Strict Mode, which enforces stricter rules for code execution

// 'use strict' // ===> MUST BE PLACED AT THE TOP OF THE SCRIPT

// These lines of code will throw an error if we use strict mode
number = 15 // no declaration

number = true

console.log(number);

delete number; // can't delete stuff
// console.log(number);


// cannot have same parameter names
function sum(num1, num1) {
    return num1 + num1;
}
console.log(sum(10, 30)); // 60

let arguments = 234; // cant use keyword arguments
console.log(arguments);
let eval = 5; // can't use keyword eval
