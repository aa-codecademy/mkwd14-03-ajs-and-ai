console.log("=================== SCOPES ===================");

// ====> GLOBAL SCOPE
// => variables and functions declared outside of any function or block have global scope
// => they can be accessed from anywhere within the script

let globalNumber = 2000;

function printGlobalNumber() {
    globalNumber = 3000;
    console.log(globalNumber);
}

printGlobalNumber();


// ====> LOCAL SCOPE  (Function Scope)
// => variables/functions declared within a function have local scope, meaning they can only be accessed within that function

// Example 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log(result);
}
// console.log(localNumber); // ERROR => not defined
localScope(globalNumber)

// Example 2
let greeting = "Hello everybody! :)";
function printGreeting() {
    let greeting = "Hello again :D"
    console.log(greeting);
}
printGreeting();

// Example 3
function outerFunction() {
    let outerVariable = "I'm from the outher function";

    function innerFunction() {
        let innerVariable = "I'm from the inner function";
        console.log(innerVariable);
        console.log(outerVariable);
    }

    // console.log(innerVariable); // ERROR => not defined
    innerFunction();
}

outerFunction();
// innerFunction() // ERROR => not defined


// ====> BLOCK SCOPE
// => variables declared with let or const within a block (inside {}) are only accessible within that block

if (true) {
    let blockNumber = 100 + 300;
    // 'var' behaves differently... don't use it :)
    // var varNumber = 3430;
    console.log(blockNumber);
}

// console.log(blockNumber);
// console.log(varNumber);


// BAD EXAMPLE
// 1) Depends on global state (variable)
// 2) It's not reusable
// 3) Hidden side effects
// 4) Hard to debug
let result = 0;
function processSomething() {
    // logic...
    result = 300;
}

// GOOD EXAMPLE
function getProcessedValue() {
    let result = 0;
    // logic....
    result = 300;
    return result;
}

const processResult = getProcessedValue();