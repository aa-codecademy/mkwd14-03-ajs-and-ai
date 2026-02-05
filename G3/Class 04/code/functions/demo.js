//declaration of the function getFullName
function getFullName(firstName, lastName) {
    //console.log(firstName + " " + lastName);
    return `${firstName} ${lastName}`;
}

//execution of the function - calling the function

//in console.log() - a method of the object console
console.log(getFullName("Petko", "Petkovski"));

//in a variable
let fullName = getFullName("Marko", "Markovski");

//here we are calling thr function without params, which means that the fristname and lastname will be undefined
let emptyFullName = getFullName();
let moreParams = getFullName("Petko", "Petkovski", 5); //we can call the function with more params, but only the "valid" ones will be mapped

function printPersonDetails(firstName, lastName, age, address = "Unknown") {
    console.log(`The age of ${firstName} is ${age}`);
    let personFullName = getFullName(firstName, lastName); // we can call another function from inside a function
    console.log(personFullName);

    return `The age of ${personFullName} is ${age} and this person lives on ${address}`; //return ends the function execution
    console.log("This code will never be executed. It is unreachable, because it is after a return statement");
}

console.log(printPersonDetails("Petko", "Petkovski", 30, "Address 1"));
console.log(printPersonDetails("Petko", "Petkovski", 30));

//a function can also be called in an if statement
function checkIfNumberIsOdd(number) {
    if (number % 2 !== 0) {
        return true; //if the number is odd then the function will return true and the execution will stop here
    }
    return false; //this will only be executed if it never enters the if block
}

if (checkIfNumberIsOdd(7)) {
    console.log("The number is odd")
}
