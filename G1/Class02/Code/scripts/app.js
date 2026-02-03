// 1. Generate array that has numbers divisible by 3
// 1.1 Create empty array 
// 1.2 Make a for loop starting from 1 to 1000 
// 1.3 If number is divisible by 3 push in the array




function generateArrDivBy3() {
    let divisibleBy3Arr = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            divisibleBy3Arr.push(i);
        }
    }
    console.log(divisibleBy3Arr);
}
generateArrDivBy3();

function generateArrDivBy4() {
    let divisibleBy4Arr = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 4 === 0) {
            divisibleBy4Arr.push(i);
        }
    }
    console.log(divisibleBy4Arr);
}
generateArrDivBy4();

function generateArrEndWithOne() {
    let endsWithOne = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 === 1) {
            endsWithOne.push(i);
        }
    }
    console.log(endsWithOne);
}
generateArrEndWithOne();



// Exercise 2

// 1. Create a function
// 2. Check if type of EACH element is STRING
// 3. Add the value in a new array
// 4. Return the array


let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];


function leaveOnlyStrings(arr) {
    let onlyStrings = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string"){
            onlyStrings.push(arr[i]);
        }
    }
    return onlyStrings;
}
console.log("ONLY STRINGS:");
console.log(leaveOnlyStrings(test));

function leaveOnlyNumbers(arr) {
    let onlyNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number" && !Number.isNaN(arr[i])){
            onlyNumbers.push(arr[i]);
        }
    }
    return onlyNumbers;
}

console.log("ONLY NUMBERS:")
console.log(leaveOnlyNumbers(test));

function leaveOnlyTruthyValues(arr) {
    let onlyTruthy = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] || typeof arr[i] === "boolean"){
            onlyTruthy.push(arr[i]);
        }
    }
    return onlyTruthy;
}
console.log("ONLY TRUTHY:");
console.log(leaveOnlyTruthyValues(test));