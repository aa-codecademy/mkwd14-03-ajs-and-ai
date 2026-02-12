// Global scope

// The name variable lives (it is declared) in the 
// global scope

let username = "Martin";

function printName(username) {
    // the input parameter name belongs to the 
    // block (function) scope of the printName() function
    console.log(username);
}
printName("Filip");


let displayInConsole = () => {
    let message = "Hello there and welcome!";
    username = "Mario";
    console.log(`${username} ${message}`);
}
message = "New message!";
displayInConsole();


let sayHello = () => {
    username = "Marko";
    console.log(`Hello there ${username}`);
}

let sayGoodbye = () => {
    console.log(`Goodbye ${username}`);
}
sayHello();
sayGoodbye();

function first() {
    let number = 10;

    function second() {
        let positiveNum = 20;

        function third() {
            let negativeNum = -10;
            console.log(username, positiveNum, negativeNum, number);
        }
    }
}
first();

var x = 20;
console.log(x);

x = 40;

var x = 35;
console.log(x);

y = 120;
console.log(y);


console.warn("window");
console.error("Ooops something went wrong!");

