// Make 3 functions:

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

//1. Function that takes a number through a parameter and returns how many digits that number has
function countDigits(num) {
    let count = 0;

    // handle 0 explicitly
    if (num === 0) {
        return 1;
    }

    // make sure the number is positive
    num = Math.abs(num);

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

//2. Function that takes a number through a parameter and returns if its even or odd

function checkIfNumberIsOddOrEven(number) {
    // if (number % 2 !== 0) {
    //     return true; //if the number is odd then the function will return true and the execution will stop here
    // }
    // return false; //this will only be executed if it never enters the if block

    return number %2 !== 0 ? "odd" : "even";
}

//3. Function that takes a number through a parameter and returns if its positive or negative
function checkPositiveOrNegative(number){
    return number > 0 ? "positive" : "negative"
}

function getNumberStats(number){
    console.log(`Number ${number} has ${countDigits(number)}, is ${checkIfNumberIsOddOrEven(number)} and is ${checkPositiveOrNegative(number)}`);
}

getNumberStats(-23);
getNumberStats(4);
getNumberStats(123425);