//define and execute

(function() {
    console.log("Inside a self-invoked function");
    console.log("Hello");
})(); //this function is immediately called

let res = (function(num1, num2){
    return num1 + num2;
})(3,6); //here the fuction is defined and executed (with values for the params 3 and 6) and the result is stored in the res variable


function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let sumResult = sum(4, 5, ((number1, number2) => number1*number2)(3,4)); //sum(4,5,12)
console.log(sumResult);
console.log(sum(1,2,3));

//sum is called , but one of its arguments is a self invoked function-so that function will be executed first and then with that result as third param, sum will be executed