// Functions in JS are also known as First Class Citizens

// 1. Stored in a variable
let sayHello = function (name) {
    console.log(`Hello there ${name}`);
}
sayHello("Bob");


// 2. Stored in an array
let numberStatFunctions = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num % 2 === 0 ? "Even" : "Odd",
    (num) => num > 0 ? num.toString().length : num.toString().length - 1
]
console.log(numberStatFunctions[0](123));
console.log(numberStatFunctions[1](123));
console.log(numberStatFunctions[2](123));


// 3. Used as an argument to another function
function calculator(num1, num2, calculateFunc) {
    return calculateFunc(num1, num2);
}

function sum(num1, num2) {
    return num1 + num2;
}

function difference(num1, num2) {
    return num1 - num2;
}


console.log(calculator(22, 236, sum));
console.log(calculator(22, 236, difference));
console.log(calculator(15, 128, function (first, second) {
    return first * second;
}));

console.log(calculator(15, 128, (first, second) => first * second));


// 4. Used as return value from another function

function calculate(operator) {
    switch (operator) {
        case "+":
            return function (num1, num2) {
                return num1 + num2;
            }
        case "-":
            return function (num1, num2) {
                return num1 - num2;
            }
        case "*":
            return function (num1, num2) {
                return num1 * num2;
            }
        case "/":
            return function (num1, num2) {
                return num1 / num2;
            }
        default:
            break;
    }
}

let result = calculate("*");
console.log(result(20, 20));

// 5. Can have properties like a regular objects in JS
// 6. Can have methods like a regular objects in JS

function sayGoodbye(name) {
    return `Goodbye there ${name}`;
}

sayGoodbye.defaultName = "Bob";

console.log(sayGoodbye(sayGoodbye.defaultName));

sayGoodbye.differentGreeting = function (name) {
    return `Bye bye ${name}!`;
}
console.log(sayGoodbye.differentGreeting("Martin"));


function print() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}
print("Martin", "Mario");


console.log("Martin", "Mario");
console.log(true, false, 2, 32, "Martin");

function myCustomLog() {
    let result = "";
    for (const argument of arguments) {
        result += argument + " ";
    }
    console.log(result);
}
myCustomLog(true, false, 2, 32, "Martin");


// Higher-Order Functions

// 1. forEach();
let array = [22, 30, 1, 5, 6, 0, -12, -22, -4, 100, 1002];

array.forEach(function (num) {
    console.log(num);
});
array.forEach(num => console.log(num));


// 2. filter
let positiveNums = [];
for (const el of array) {
    if (el > 0) {
        positiveNums.push(el);
    }
}
console.log(positiveNums);

// let positives = array.filter(function(num) {
//     return num > 0;
// });
let positives = array.filter(num => num > 0);

console.log(positives);

// 3. map
// Increase each element for 1 of the array
let increased = [];
for (const element of array) {
    increased.push(element + 1);
}
console.log(increased);

let increasedByOne = array.map(num => num + 1);
console.log(increasedByOne);


// 4. sort

let sortedByAsc = array.sort((a, b) => a - b);
console.log(sortedByAsc);

let sortedByDesc = array.sort((a, b) => b - a);
console.log(sortedByDesc);


let names = ["Bob", "Gill", "Ana", "Ognen"];
// let sortedNames = names.sort((a, b) => b.localeCompare(a));
// console.log(sortedNames);

// console.log(names.reverse());

console.log(names);

let newNames = names;
newNames.push("Cvetko");

console.log(newNames);
console.log(names);


