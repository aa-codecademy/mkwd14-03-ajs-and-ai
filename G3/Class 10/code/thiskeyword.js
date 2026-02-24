console.log(this); //window - global object

console.log("==== inside a function ====");
function myFunc() {
  console.log(this); //window - global object
}

myFunc(); //window.myFunc() - function invocation

console.log("====inside object literal====");

let a = this; //window
let someObject = {
    someProperty: this, //window
    someMethod: function() {
        console.log(this); //someObject - method invocation
    }
}

console.log(someObject.someProperty); //window
someObject.someMethod(); //inside the method, the value of this eill be the object that we used to call the method with

console.log("====inside a constructor function====");

function SomeTemplate(someString){
    debugger
    this.description  = someString; //this - the new object that is being created
    console.log(this); //the new object that is being created
    this.someMethod = function() {
        console.log("example method"); 
        console.log(this); //the new object that is being created
    }
}

//when we use the new keyword for creating an object from the constructor function, the value of this inside the constructor function will be the new object that is being created
let ourObject = new SomeTemplate("this is some description"); //the new object that is being created
ourObject.someMethod(); //the new object that is being created

//we can call the constructor function without the new keyword, but in that case we are not creating a new obejct, and the value of this will be the global object (window)
SomeTemplate("this is some global description"); //window - global object