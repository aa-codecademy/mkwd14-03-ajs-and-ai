console.log("=============== Debugging ===============");
// => the process of identifying, isolating, and fixing errors or bugs in our program
// => ensure that the program behaves as expected
// => common ways to debug in Javascript
// 1) console.log
// 2) using browsers Developer Tools (Sources tab)
// 3) using keyword debugger;

// console.log("This is before debugger;");
// debugger;
// console.log("This is after debugger;");


console.log("");
console.log("=============== Synchronous and asynchronous executing ===============");
// => JAVASCRIPT IS SINGLE THREADED !!! 
// => the code is executed only on one place in the browser (the Call Stack)
// => at any given point in time, that single JS thread is running at most ONE line of JS code

console.log("");
console.log("=============== Synchronous ===============");
// ***Synchronous execution***
// => code is executed sequentially, one line at a time
// => each line of code must be completed before moving on to the next one
// => blocking nature
// NOTE: Synchronous code always has PRIORITY in JavaScript.

function first() {
    console.log("First thing !");
}

function second() {
    console.log("Second thing !");
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Heavy operation, the Call Stack is blocked...
// let result = fibonacci(100);
// console.log(result);

first();
second();
second();
second();
second();
first();
second();



console.log("");
console.log("=============== Asynchronous ===============");
// ***Asynchronous execution***
// => ability of the program to perform tasks 'in the background'
// => started executing some code, but not waiting for it to complete before moving on to the next line of code
// => when one line of code gets executed later on
// => most common examples: 
// 1) making http request with fetch (Fetch API) & handling the responses without freezing the UI
// 2) handling events

// debugger;

// ===> Typical async operation => api call using fetch
fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then(product => console.log("Here is the product: ", product));

console.log("This is printed after the product ! or not :D");


// ===> Built in functions that execute asynchronously

// ***setTimeout***
// => executes a function (first argument) when a given time passes (second argument)

setTimeout(() => {
    console.log("This is printed after 5 seconds!");
}, 5000); // 5000 ms => 5s

console.log("The End :)");

// ***setInterval***
// => executes a function (first argument) repeatedly on a specified time interval (second argument)
let intervalId = setInterval(() => {
    console.log("This is printed every 3 seconds!");
}, 3000);
clearInterval(intervalId)

console.log("The End Part 2 :)");


// Example: function containing setTimeout
function greet(name) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, 2500);
}

greet("Students")
console.log("This is printed after Students ?");


// ===> Synchronous vs Asynchronous execution

// ==> Synchronous
console.log(1);
console.log(2);
console.log(3);
// Result
// 1
// 2
// 3

// ==> Asynchronous
setTimeout(() => console.log(4), 0) // even though delay is 0ms, this is still asynchronous

console.log(5);
setTimeout(() => console.log(6), 2000)
// Result
// 5
// 4
// 6

// NOTE: Synchronous code always has PRIORITY in JavaScript.
// Useful tool: https://jsflow.info/