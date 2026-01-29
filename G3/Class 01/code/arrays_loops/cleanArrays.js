// Create a function that keeps only STRINGS
// Create a function that keeps only NUMBERS
// Create a function that removes all falsy values
//Create a function that removes undefined, null, NaN, and empty strings

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function keepOnlyStrings(array) {
    let result = [];
    for (let element of array) {
        if (element && typeof element === 'string') { //check if element is a string and not empty
            result.push(element); //push all strings to result array
        }
    }
    return result;
}

console.log(keepOnlyStrings(test)); // ["Bob", "Jill", "Jack", "Greg"]

function keepOnlyNumbers(array) {
    let result = [];
    for (let element of array) {
        if (typeof element === 'number' && !isNaN(element)) { //check if element is a number and not NaN
            result.push(element); //push all numbers to result array
        }
    }
    return result; //after the loop ends - return the result array
}

function removeFalsyValues(array) {
    let result = [];
    for (let element of array) {
        if (element) { //check if element is truthy
            result.push(element); //push all truthy values to result array
        }
    }
    return result; //after the loop ends - return the result array
}

function removeSpecificFalsyValues(array) {
    let result = [];    
    for (let element of array) {
        if (element !== undefined && element !== null && !(typeof element === 'number' && isNaN(element)) && element !== "") {
            result.push(element); //push all values that are not undefined, null, NaN, or empty strings to result array (but it will keep other falsy values like false and 0)
        }
    }
    return result; //after the loop ends - return the result array
}