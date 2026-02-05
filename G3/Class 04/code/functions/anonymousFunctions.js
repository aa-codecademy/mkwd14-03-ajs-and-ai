//Anonymous functions

//we can declare the function as a value of a variable and call it by the name of the variable
let greeting = function (name) {
    console.log("Hello" + name);
}
greeting("Petko");
greeting();

//member of an array
let mixedArray = [2, 5, "test", function () { return 2 + 3 }];
let func = mixedArray[3]; //this is the whole function
console.log(func); //ƒ () { return 2 + 3 }
let result = mixedArray[3](); //we use the () to call the function
console.log(result); //5

//Sent as param in another function
function printResult(paramFunction) {
    let result = paramFunction();
}

printResult(function () { return 5 + 7 });

//anon function in event listener - it is called when the event is triggred
document.getElementById("myButton").addEventListener("click", function(){
    console.log("Clicked");
});

//Arrow functions

                 //param  //body of the function
let sumWithTen = num => num + 10; //if we have just one param, we don't put ()
console.log(sumWithTen(3));

//multiple params -> we put the params in ()
let sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(1,2,3));

//when we have a function that has a body that is only one line of code, we don't need to use {}
//when there are multiple lines of code, we use {}

let sumOfTwoNumbers = (num1, num2) => {
    console.log(num1);
    console.log(num2);
    console.log(num1 + num2);
}

// if (3 > 2) 
//     console.log("yay");
// console.log("This is not a part of the if anymore");

// //Better practise - use the {}
// if (3 > 2) {
//     console.log("yay");
//     console.log("This is a part of the if");
// }

//no params - we use empty () when we don't have params
let greetingHello = () => console.log("hello");

let checkNumber = ourNumber => {
    if(ourNumber == null || ourNumber === undefined || isNaN(ourNumber)){
        console.log("Invalid input");
        return;
    }

    ourNumber > 5 ? console.log("Greater than 5") : console.log("Less or equal to 5");
}
checkNumber(7);