// =========== OPTIONAL PARAMETERS ===========
// if we don't pass the value for the parameter, the default value will be used
// it can be a value of any type

function multiply(num1, num2 = 10) {
    console.log(`Result: ${num1 * num2}`);
}

multiply(10, 2);
multiply(100)


console.log("================= FUNCTIONS - FIRST CLASS CITIZENS =================");

// ===> Storing function as a variable
const greet = name => console.log(`Hello ${name}`);

// ===> Stored in an array (already shown)

// ===> Used as an argument to another function *** 
// IMPORTANT !!!

function calculator(num1, num2, calculateFunc) {
    return calculateFunc(num1, num2);
}

function sum(num1, num2) {
    return num1 + num2;
}

// calculator(10, 20, 30) // ERROR

const result1 = calculator(10, 20, sum)
const result2 = calculator(10, 20, function (num1, num2) {
    return num1 * num2;
})
const result3 = calculator(10, 20, (x, y) => x - y);

console.log(result1, result2, result3);


// ===> Used as a return value from another function

function getOperation(operator) { // +, -, /, *, ** 
    switch (operator) {
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        case "/":
            return (num1, num2) => num1 / num2;
        case "*":
            return (num1, num2) => num1 * num2;
        case "**":
            // ** => power operator
            return (num1, num2) => num1 ** num2;
        default:
            console.error("Enter valid operator !")
            break;
    }
}

const divide = getOperation("/");
console.log(divide(50, 2));

const power = getOperation("**");
console.log(power(50, 2));


// ===> Have properties like objects
function greetStudent(name) {
    console.log(`Hello there ${name}!`);
}

greetStudent("Bob");
greetStudent.firstName = "Petko";

// ===> Have methods like objects
console.log(greetStudent.firstName);
greetStudent.getFullName = lastName => greetStudent.firstName + " " + lastName;
console.log(greetStudent.getFullName("Petkovski"));

// It's so confusing...

// NOTE: Using functions with properties and methods is technically allowed in JavaScript. 
// However, it is *NOT RECOMMENDED* for most use cases in modern JavaScript development


console.log("");
console.log("=========== Function Arguments ===========");
// => keyword 'arguments'
// Useful for functions where the number of arguments is unknown or dynamic

function someFunction() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}

someFunction("Petko", "Bob", "John", "Greg", "Jane");

function sumOfAll() {
    let result = 0;
    for (const number of arguments) {
        result += number;
    }
    console.log(result);
    return result;
}

sumOfAll(332423, 34343, 3535);
sumOfAll(100, 4343, 4234, 545, 6565, 34343, 3535);

// const test = () => console.log(arguments);
// test(1, 2, 3)

// NOTE: The `arguments` object is NOT available in arrow functions
// const test = () => console.log(arguments)
// test(123, 123) // ERROR!