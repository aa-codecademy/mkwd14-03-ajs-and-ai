console.log("===================== ARROW FUNCTIONS =====================");
// => introduced in ES6
// => shorter version of the anonymous functions (*syntactic sugar*)
// => better readability and cleaner syntax 

// =========== No parameters, no return ===========

// ===> Regular function
function sayHello() {
    console.log("Hello !");
}

// ===> Anonymous function
const sayHelloAnonymous = function () {
    console.log("Hello !");
}

// ===> Arrow function
const sayHelloArrow = () => {
    console.log("Helo !");
}

// NOTE: when we have only one expression in the body of the function we can use even shorter syntax (without {})
const sayHelloArrowOneLine = () => console.log("Hello !");

sayHelloArrowOneLine();


// =========== No parameters, return ===========

function getRandomNum() {
    return Math.random() * 100;
}

console.log(getRandomNum());

const randomNumber = getRandomNum();
const randomNumberText = `This is another random value: ${randomNumber}`
const randomNumberText2 = `This is another random value: ${getRandomNum()}`
console.log(randomNumberText);

// ===> With arrow function
// const getRandomNumber = () => {
//     return Math.random() * 100;
// }
const getRandomNumber = () => Math.random() * 100;

console.log(getRandomNumber())


// =========== One parameter, one expression (returns value) ===========
function isEven(number) {
    return number % 2 === 0;
}

// NOTE: We don't add 'return' keyword after the arrow '=>' !!!
// const isNumberEven = (number) => return number % 2 === 0; // ERROR

// const isNumberEven = (number) => number % 2 === 0;
// ===> when we have only one parameter we can leave out the parenthesis
const isNumberEven = number => number % 2 === 0;


console.log(isNumberEven(234))


// =========== Multiple parameters, one expression (returns value) ===========

const sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(10, 20, 30));

// =========== Multiple parameters, multiple expressions ===========

const getMaxNumber = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
// BONUS
// const ternaryExample = (num1, num2) => num1 > num2 ? num1 : num2;

const largerNum = getMaxNumber(234, 342_343);
console.log(largerNum);


// =========== Arrow function in an event listener ===========");

document.querySelector("button").addEventListener("click", (e) => {
    console.log(e.target);
    console.log("Button is clicked!");
});

//  =========== Arrow function in a fetch  ===========

// ===> Using Anonymous functions
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });

// ===> Using Arrow functions
fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => response.json())
    // ===> when we have only one parameter we can leave out the parenthesis
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

