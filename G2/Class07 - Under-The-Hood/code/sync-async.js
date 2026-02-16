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



console.log("");
console.log("=============== Synchronous ===============");

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
console.log(1);
console.log(2);
console.log(3);
// Result
// 1
// 2
// 3

setTimeout(() => console.log(4), 0)
console.log(5);
setTimeout(() => console.log(6), 2000)
// Result
// 5
// 4
// 6