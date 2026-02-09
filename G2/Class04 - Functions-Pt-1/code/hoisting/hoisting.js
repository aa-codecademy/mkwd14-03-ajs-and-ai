console.log("===================== HOISTING =====================");
// Hoisting is a JavaScript mechanism where variables, function declarations, and classes are moved to the top of their scope before the code is executed
// This means that you can use functions and variables before they are declared


console.log("");
console.log("=========== Functions Hoisting ===========");

// ===> Can be called before declaration
sayHello();

// ===> Function Declaration
function sayHello() {
    console.log("Hello, I'm hoisted!");
}

sayHello();
// HOWEVER... only regular functions are hoisted (functions declared using the 'function' keyword)


// sayHelloArrow(); // ERROR
const sayHelloArrow = () => console.log("Arrow functions are not hoisted!");
sayHelloArrow();


console.log("");
console.log("=========== Variables Hoisting ===========");

// console.log(student); // ERROR
let student = "Bob";
console.log(student);

// console.log(academy); // ERROR
const academy = "Avenga";
console.log(academy);

// ===> 'var' behaves differently (DON'T USE VAR IN JAVASCRIPT !)
console.log(isVarHoisted); // no ERROR, but the value is undefined, since it gets it's value further down the code
var isVarHoisted = true;