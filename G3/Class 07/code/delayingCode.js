//call stack - LIFO - Last In First Out
function sayHi() {
    console.log("Hi");
}

function greeting() {
    console.log("Our first greeting");
    sayHi();
    console.log("Our second greeting");

}

greeting();

//Synchronous executing

function firstGreeting() {
    console.log("First greeting");
}

function secondGreeting() {
    console.log("Second greeting");
}

firstGreeting();
secondGreeting(); //we always know the order of execution

//Asynchronous executing
console.log("======setTimeout======"); //wait for a given time

function hello() {
    //it will wait for 4 seconds before executing the hello arrow function
    setTimeout(() => console.log("Hello from Hello function"), 4000); //it will wait for 4 seconds
}

function hi() {
    console.log("Hi");
}

hello();
hi();

function first() {
    setTimeout(() => {
        console.log("First");
        second();
        console.log("End");
    }, 5000);
}

function second() {
    console.log("Second");
}

first();

console.log("======setInterval======");  //repeat

let interval = setInterval(() => console.log(new Date()), 3000); //repeat every 3 seconds

document.getElementById("ourBtn").addEventListener("click", function(){
    clearInterval(interval);
})