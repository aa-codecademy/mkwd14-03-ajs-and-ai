console.log("===================== Arrays =====================");
// one type of JS collection (other existing types: Set, Map..)
// collection of related data
// zero-indexed 

let mixedArray = [true, 234, "String", NaN, null, 1_999_999_999]; // avoid using mixed types in an array !

let testArray = [1, 23, 353_523, 34534, 45];
console.log(testArray[1]);
console.log(testArray.length);


console.log("");
console.log("========= Array built-in methods =========");

// push(item) => adds an item/items at the end of the array
testArray.push(100);
testArray.push(500, 1000, 1500);
// pop( ) => Removes an item from the end of the array and returns it
let lastItem = testArray.pop();
// unshift(item) => adds an item at the beginning of the array
testArray.unshift(300);
// shift() => removes an item from the beginning of the array and returns it
let firstItem = testArray.shift();

console.log(testArray);

// splice() => removes elements from an array and, if necessary, inserts new elements in their place. 

testArray.splice(2, 2);
// adding new items at the place of the removed ones
// testArray.splice(2, 2, 1_000_000);

// delete everything starting from index 1
// testArray.splice(1);
console.log(testArray);

// slice() => returns a copy of a section of an array. 
// NOTE: It DOES NOT change the original array
// extracts elements from index 1 (inclusive) to index 3 (exclusive)
let slicedArray = testArray.slice(2, 4);
console.log(testArray);
console.log(slicedArray);


console.log("");
console.log("========= Storing complex data types in arrays =========");

// Ex. strings 
let strings = ["Some string", "Some other string"];

// Ex. Storing objects (most common scenario)
let objects = [
    { id: 1, firstName: "Bob", lastName: "Bobsky" }, // index 0
    { id: 2, firstName: "John", lastName: "Doe" }, // index 1
];

console.log(objects[1].lastName);
console.table(objects); // display data in the console in form of a table 

// Ex. Storing functions (not so common thing to do)
function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

let functionsArray = [
    sum,
    subtract
];

let sumResult = functionsArray[0](10, 20);
console.log(sumResult);


console.log("");
console.log("===================== Loops =====================");
// => repetitive execution of code
// => iterate over collections of data (arrays)

console.log("");
console.log("========= WHILE =========");

let whileTestArray = [2, 12, 34, 54, 23, 101];
let counter = 0;
let index = 0;

while (counter < whileTestArray.length) {
    console.log(whileTestArray[counter]);
    counter++;
}

console.log("");
console.log("========= DO WHILE =========");

let input = "";
// do {
// input = prompt("Enter your name")
// } while (!input)
// } while (input === "" || input === null || input === undefined)
console.log(input);

console.log("");
console.log("========= FOR =========");

let students = ["Pavel", "Aneta", "Andrej"];
for (let i = 0; i < students.length; i++) {
    console.log(`Student #${i + 1} ${students[i]}`);
}

console.log("");
console.log("========= FOR OF =========");

for (let student of students) {
    console.log(student);
}


console.log("");
console.log("========= BREAK & CONTINUE =========");

let numbers = [123, 23, 424, 343, 5, 54, 77];

