//used as a variable
let greeting = function (name) {
    console.log("Hello " + name);
}

greeting("G3"); //we call the function using the variable name, because the value of the variable is the function itself

// function anotherGreeting(name){
//     console.log(`Hello ${name} from G3!`);
// }

let anotherGreeting = (name) => console.log(`Hello ${name} from G3!`); //arrow function in a variable
anotherGreeting("Petko");

//used as member of an array
let numberStatsFunctions = [
    num => num > 0 ? "Positive number" : "Negative number or equal to zero",
    num => num % 2 === 0 ? "Even number" : "Odd number",
    "We can have other types of elements in this array as well"
];

console.log(numberStatsFunctions[0](3)); //calling the first function in the array
console.log(numberStatsFunctions[1](25)); //calling the second function in the array

//used as an argument 
function sum(num1, num2) {
    return num1 + num2;
}

function diff(num1, num2) {
    return num1 - num2;
}

function print() {
    console.log("I was called from the calculator function");
}

function calculator(number1, number2, calculatorFunction) {
    let result = calculatorFunction(number1, number2); //in each call the function that will be executed is the function that was sent as an argument when calling calculator
    console.log(result);
}

calculator(2, 3, sum);
calculator(5, 1, diff);
calculator(1, 2, print);
// calculator(1,2,3);

//used as a return value
function calculate(operator) {
    console.log(arguments);
    switch (operator) {
        case "+":
            return (number1, number2) => number1 + number2; //return the function with which we could calculate the sum
        case "-":
            return (number1, number2) =>{console.log(arguments); number1 - number2;} //return the function with which we could calculate the diff
        case "*":
            return ((number1, number2) => number1 * number2)(arguments[1], arguments[2]);
        default:
            console.log(`${operator} is invalid operator`);
            return null;
    }
}

let resultFunction = calculate("+"); //resultFunction = (number1, number2) => number1 + number2; - the whole function, the value of this variable will be the function
console.log(resultFunction(3, 4)); //7

console.log(calculate("-")(5, 3)); //we call one function calculate which returns another function which we immediately call

console.log(calculate("*", 3, 2, "Tijana", 32, [1, 2]));

//using functions as objects
function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello.defaultName = "John"; //we can add properties to a function - the function can "act" as an object
sayHello.defaultGreeting = function () { console.log("Hi!") }
sayHello("G3");
console.log(sayHello.defaultName);
sayHello.defaultGreeting();

console.log(sayHello);

//Function arguments
//the values with which we call a function - sayHello("G3", 2, 3, 5) - "G3", 2, 3 and 5 are arguments
//in JS we can call a function that has one param with multiple arguments, one argument or no argument at all
//we can access all the arguments that we used to call the function with with the keyword arguments

function longestString(){
    console.log(arguments); //an array of all the arguments that were sent when calling the function
    let longest = arguments[0];
    for(let argument of arguments){
        if(argument.length > longest.length){
            longest = argument;
        }
    }
    console.log("The longest string is " + longest);
}

longestString("Bob", "John", "Programming", "Avenga");
longestString("Web Programming", "Avenga");