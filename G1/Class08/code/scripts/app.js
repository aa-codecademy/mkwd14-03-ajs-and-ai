
let first = () => console.log("I am first");
let second = () => console.log("I am second");
let third = () => console.log("I am third");

// If we call these functions in the following order, they
// will get executed in the exact same order

// first();
// second();
// third();


console.log("========== Example 1 of setTimeout() ============");

// first();
// setTimeout(second, 2000);
// third();



console.log("========== Example 2 of setTimeout() ============");
// first();
// setTimeout(function() {
//     console.log("I am second");
// }, 0);
// third();


console.log("========== Example 3 of setTimeout() ============");
// first();
// setTimeout(function() {
//     console.log("I am before second");
//     second();
// }, 2000);
// third();

console.log("========== Example 4 of setTimeout() ============");
// setTimeout(function () {
//     first();
//     setTimeout(function () {
//         second();
//     }, 2000)
// }, 3000);
// third();



// Callbacks

console.log("=========== Callbacks ==========")
let sayHello = (personName) =>
    console.log(`First say hello! Hello, ${personName}`);

let sayGoodbye = (personName) =>
    console.log(`Bye bye ${personName}`);


let greetSomeone = (callback) => {
    setTimeout(function () {
        console.log("Greet person first!");
        callback("Martin");
    }, 1000)
}


// greetSomeone(sayHello);



setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function() {
            console.log("Third");
        }, 1000);
    }, 1000);
}, 1000);



