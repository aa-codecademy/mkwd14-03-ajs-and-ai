console.log("===================== RECURSION =====================");
// Recursion is a programming concept where a function calls itself to solve a problem
// It’s useful when a problem can naturally be divided into smaller, similar sub-problems
// Use cases: traversing data structures, solving mathematical problems, etc.

// Key Parts of Recursion:
// 1) Base Case - the condition where the recursion stops
// 2) Recursive Case - the part where the function calls itself with a smaller or simpler input

// IMPORTANT !!!
// Always define a base case to stop the recursion
// Without it, you risk creating infinite loops and stack overflows

// ===> Example: Sum to Number
// input 15 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 .... + 15

// => With loop
function sumToNumberLoop(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}

console.log(sumToNumberLoop(5));

// => With recursion
function sumToNumber(number) {
    // debugger;
    // EXIT CASE !
    if (number === 0) {
        return 0;
    }
    return number + sumToNumber(number - 1);
}

console.log(sumToNumber(5));


// ===> Example: Factoriel
// 5! = 5 * 4 * 3 * 2 * 1

function factoriel(n) {
    // EXIT CASE !
    if (n === 1) {
        return n;
    }
    return n * factoriel(n - 1);
}

console.log(factoriel(5));


// ===> Example: Fibonacci
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

function fibonacci(n) {
    // Exit case !
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 5 is ", fibonacci(5));
console.log("Fibonacci of 10 is ", fibonacci(10));
// console.log("Fibonacci of 10 is ", fibonacci(50)); // will take a while for the calculation to complete...
