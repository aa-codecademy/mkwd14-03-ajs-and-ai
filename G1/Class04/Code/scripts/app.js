
// Function in JS

function sayHello() {
    console.log("Hello from my function");
}
sayHello();


function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
sumTwoNumbers(5, 10);
sumTwoNumbers("2", "4");


// Anonymous function
let diffTwoNumbers = function (num1, num2) {
    return num2 - num1;
}
diffTwoNumbers(10, 20)


let multiply = function (num1, num2) {
    return num1 * num2;
}

let division = function (num1, num2) {
    return num1 / num2;
}

// Arrow functions
let multiplyArrow = (num1, num2) => num1 * num2;
let divisionArrow = (num1, num2) => num1 / num2;
let sumOfThreeArrow = (num1, num2, num3) => num1 + num2 + num3;
let diffOfThreeArrow = (num1, num2, num3) => num1 - num2 - num3;

let squareNumberArrow = num => num * num;

let convertCurrency = (currencyType, currencyValue) => {
    if (currencyType === "EUR") {
        return currencyValue / 61.5;
    }
    if (currencyType === "MKD") {
        return currencyValue * 61.5;
    }
}

// (2 * 5) + (2 / 5)

let product = multiply(2, 5);
let divisionValue = division(2, 5);

sumTwoNumbers(product, divisionValue);

console.log(sumTwoNumbers(multiplyArrow(2, 5), divisionArrow(2, 5)));
console.log(sumTwoNumbers(2 * 5, 2 / 5));


// Self-invoked functions or IFFEs (Immediately Invoked Function Expressions)

(function (num1, num2) {
    console.log(num1 + num2);
})(100, 50);

((num1, num2) => {
    console.log(num1 + num2);
})(100, 50);



let array = [1, 2, 3, (num1, num2) => num1 + num2];
console.log(array[3](22, 44));


// Exercise 1.

// Solution to exercise 1 using anonymous functions

let countDigits = function (num) {
    return Math.abs(num).toString().length;
}

let checkEvenOrOdd = function (num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let checkPositiveOrNegative = function (num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

let numberInfo = function (num) {
    console.log(`The number ${num} has 
                ${countDigits(num)} digits,
                it is ${checkEvenOrOdd(num)}, 
                and it is ${checkPositiveOrNegative(num)}`)
}

numberInfo(-124);


let countNumberDigits = num => Math.abs(num).toString().length;
let everOrOdd = num => num % 2 === 0 ? "Even" : "Odd";
let posOrNeg = num => num > 0 ? "Positive" : "Negative";

let numInfo = num => console.log(`The number ${num} has 
                ${countNumberDigits(num)} digits,
                it is ${everOrOdd(num)}, 
                and it is ${posOrNeg(num)}`);

numInfo(225);


function sumTo(number) {
    if(number === 0){
        return 0;
    }
    return number + sumTo(number - 1);
}

console.log(sumTo(20));


// recursive arrow function in one line
let recursion = (number) => number === 0 ?  0 : number + recursion(number - 1);
console.log(recursion(20));

console.log(window.innerHeight);
console.log(window.innerWidth);


