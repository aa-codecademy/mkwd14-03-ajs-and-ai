console.log("");
console.log("============ Clean arrays ============");

// Create a function that keeps only STRINGS
// Create a function that keeps only NUMBERS
// Create a function that removes undefined, null, NaN, and empty strings

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", " ", 99, "Greg", undefined, NaN, 1, 22, 0, -0];

// Function that cleans undefined, null, NaN, false and "" and leaves all other values
function removeFalsyValues(valuesArray) {
    const result = [];
    for (const item of valuesArray) {
        if (item || Number.isFinite(item)) {
            result.push(item)
        }
    }
    return result;
}

const truthyArray = removeFalsyValues(test);
console.log(truthyArray);

// Reminder:
// FALSY VALUES => false, undefined, null, 0, -0, "", NaN
// TRUTHY VALUES => true, " ", 1, "hello", functions, objects etc....


// Function that leaves only STRINGS
function cleanAllButStrings(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "string") {
            result.push(inputArray[i]);
        }
    }
    return result;
}
let stringArray = cleanAllButStrings(test);
console.log(stringArray);

// Function that leaves only NUMBERS
function cleanAllButNumbers(inputArray) {
    let result = [];
    for (let item of inputArray) {
        if (typeof item === "number" /*&& Number.isFinite(item)*/) {
            result.push(item);
        }
    }
    return result;
}
let numberArray = cleanAllButNumbers(test);
console.log(numberArray);



console.log("============ Generating arrays ============");
/*
    * Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
    * Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
    * Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
    * NOTE: Use functions 
*/

// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
function numbersDivisibleBy3() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }
    return result;
}

// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
function evenNumbersDivisibleBy4() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0 && i % 4 === 0) {
            result.push(i);
        }
    }
    return result;
}

// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
function numbersEndingWith1() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 === 1) {
            result.push(i);
        }
    }
    return result;
}
