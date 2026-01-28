console.log("======================= FUNCTIONS =======================");
// => reusable piece of code

// Benefits of using functions:
// 1) Reusability
// 2) Modularity (break larger code into smaller manageable parts)
// 3) Readability

// Two-step process
// 1) Function Declaration
// 2) Function Execution


// ============== FUNCTION TYPES ==============

// ======= Function without parameters and return =======
function sayHello() {
    console.log("Hello!");
}

sayHello();
const hello = sayHello();
// hello = 234; ERROR ! Won't work
console.log(hello);

// ======= Function with parameters, without return =======
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

greet(); // Hello undefined undefined
greet("Bob", "Bobsky"); // Hello Bob Bobsky

// ======= Function with parameters and return =======
function multiply(num1, num2) {
    return num1 * num2;
}
let multiplyResult = multiply(250, 4);
console.log(multiplyResult);
console.log(multiply(250, 3));

// ======= Function with more complex parameters =======

// Example: array of numbers
function getAverage(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

// let average = getAverage(123); // ERROR => arguemnt/parameter is not a valid array
let average = getAverage([300, 100, 200]);
console.log(average);

// Example: array of objects
let students = [
    { id: 1, firstName: "Bob", lastName: "Bobski" },
    { id: 2, firstName: "Boba", lastName: "Bobski" },
    { id: 3, firstName: "John", lastName: "Johnski" },
];

function printStudents(studentsArray) {
    for (const student of studentsArray) {
        console.log(`Student #${student.id}. ${student.firstName} ${student.lastName}`);
    }
}

printStudents(students);
// printStudents(["Bob", "John"]);

// ======= Anonymous Function used in event handling =======

let clickMeBtn = document.querySelector("#click-me-btn");

clickMeBtn.addEventListener("click", function () {
    console.log("The button is clicked :)");
});

function handleButtonClick() {
    console.log("The button is clicked :)");
}
// clickMeBtn.addEventListener("click", handleButtonClick());
clickMeBtn.addEventListener("click", handleButtonClick);

// ======= many more... (will be learnt througout this subject) =======


// ============== RETURN KEYWORD ==============
// Use cases:
// 1) Returning a Value
// 2) End function execution

// Number.isFinite(value) => most common and safest way to validate number
function sum(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return; // end function execution if the arguments aren't valid numbers
    }
    return num1 + num2;
}

let result = sum(200, 300);
console.log(result);

console.log(sum(Infinity, 123));


// THE BIG QUESTION => "WHEN TO PUT SOMETHING IN A FUNCTION ?!?!"

// The sense of what to put into a function improves with experience and lots of coding ...

// However here are some of the cases when you should use a function:

// 1) Code duplication => if you use same code more than once, create a function

let numbersArray = [123, 123, 42, 353, 545, 54];

// ***** WITHOUT FUNCTION => BAD EXAMPLE *****

let sum1 = 0;
for (let number of numbersArray) {
    sum1 += number;
}
let average1 = sum1 / numbersArray.length;

// ... CODE CODE CODE ...
numbersArray.push(423, 343, 434);
// ... CODE CODE CODE ...

let sum2 = 0;
for (let number of numbersArray) {
    sum2 += number;
}
let average2 = sum2 / numbersArray.length;

// ***** WITH FUNCTION => GOOD EXAMPLE *****

function calculateAverage(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

let firstQuartalAvg = calculateAverage(numbersArray);
// ... CODE CODE CODE ...
numbersArray.push(124, 4242, 2434);
// ... CODE CODE CODE ...
let secondQuartalAvg = calculateAverage(numbersArray);

// 2) Modularity => breaking down your code into smaller, manageable chunks by separating logical operations in functions 