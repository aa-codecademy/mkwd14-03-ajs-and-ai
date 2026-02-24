console.log("Document type:");
console.log(typeof(document)); //object
console.log(typeof(document.getElementById)); //function
console.log("Empty array type");
console.log(typeof([])); //object
console.log("Console type:");
console.log(typeof(console)); //object
console.log("Console log type");
console.log(typeof(console.log)); //function
console.log("Window type");
console.log(typeof(window)); //object

console.log(window); //window object

console.log("hello");
window.console.log("Hello"); //window is the global object, so we can omit it when calling console.log() and just write console.log() instead.

//alert("This is an alert!"); //alert() is a method of the window object, so we can call it directly without prefixing it with window.
//window.alert("This is an alert!"); //This will show an alert dialog with the message "This is an alert!"

console.log(JSON.stringify({a : 1})); //JSON is a built-in object that is a part of the window object
console.log(window.JSON.stringify({a : 1})); //This will convert the object {a: 1} to a JSON string and log it to the console.
console.log("=======functions========");
function sayHello(){
    console.log("Hello!");
} //each function we define in the global scope becomes a property (method) of the window object, so sayHello is a property (method) of the window object.

console.log(window);
sayHello();
window.sayHello(); //This will call the sayHello function, which is a property of the window object, and log "Hello!" to the console.

console.log("=======var vs let========");

//when we declare a variable using var, it becomes a property of the window object. When we declare a variable using let or const, it does not become a property of the window object.
var firstVariable = 5;
console.log(firstVariable); //5
console.log(window.firstVariable); //5

//when we declare a variable using let, it does not become a property of the window object, so we cannot access it through the window object.
let secondVariable = 10;
console.log(secondVariable);
console.log(window.secondVariable); //undefined, because secondVariable is not a property of the window object.

//when we declare a variable using const, it also does not become a property of the window object, so we cannot access it through the window object.
const a = 5;
console.log(a); //5
console.log(window.a); //undefined, because a is not a property of the window object.
//a = 7; //This will throw an error because we cannot reassign a value to a constant variable.

const exampleObject ={
    name: "John",
    age: 30,
    greet: function(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

//we can change the properties of an object even if it is declared as a constant, because the object itself is not immutable, only the reference to the object is immutable.
console.log(exampleObject.name); //John
exampleObject.name = "Jane"; //We can change the value of the name property of the exampleObject.
console.log(exampleObject.name); //Jane

//we can add elements in the array even if it is declared as a constant, because the array itself is not immutable, only the reference to the array is immutable.
const array = [1, 2, 3];
console.log(array.length); //3
array.push(4); //We can add a new element to the array using the push() method.
console.log(array); //[1, 2, 3, 4]


console.log("=====Constructor functions========");

function Food(name, color){
    this.name = name;
    this.color = color;
    this.compare = function(food){
        debugger
        return this.name === food.name && this.color === food.color;
    }
}

function Dog(name, color, age, favouriteFood){
    this.name = name ? name : "Unknown";
    this.color = color ? color : "Unknown";
    this.age = age;
    this.hasOwner = false; //default value
    this.favouriteFood = favouriteFood ? favouriteFood : [new Food("Bacon", "pink")];
    this.bark = function(){
        console.log("Woof!");
    }
    this.isMyFavouriteFood = function(food){
        //filter returns a new arrray. If the food is found it will return a new array with the food that was found. If the food was not found it will return an empty array
        let isFound = this.favouriteFood.filter(f => f.name === food.name && f.color === food.color).length > 0;
        if(isFound){
            console.log(food.name + " is one of my favourite foods!");
        }
        else{
            console.log(food.name + " is not one of my favourite foods.");
        }
    }
}

let barnie = new Dog("Barnie", "Brown", 5, [new Food("Bone", "white"), new Food("Meat", "red")]);
console.log(barnie);
barnie.isMyFavouriteFood(new Food("Bone", "white")); //This will check if the food is in the favouriteFood array of barnie and return true if it is, otherwise it will return false.
barnie.isMyFavouriteFood(new Food("Fish", "gray")); //This will check if the food is in the favouriteFood array of barnie and return true if it is, otherwise it will return false.

let scooby = new Dog("Scooby", "Black and Brown", 7);

barnie.bark();
scooby.bark();

barnie.bark = function(){
    console.log("Woof Woof!");
} //this will change the bark method of barnie to a new function that logs "Woof Woof!" to the console. But the bark method of scooby will remain unchanged because it is a different object.

barnie.bark();
scooby.bark();

console.log("=====Comparison of objects========");

let apple = new Food("Apple", "Red");
let anotherApple = new Food("Apple", "Red");

//comparison by reference
console.log(apple === anotherApple); //false, because they are two different objects in memory, even though they have the same properties and values.

let areIdentical = apple.compare(anotherApple); //This will compare the properties of the two objects and return true if they are the same, otherwise it will return false.
console.log(areIdentical); //true, because the compare method checks if the name and color properties of the two objects are the same, and in this case they are.

let yellowApple = new Food("Apple", "Yellow");
console.log(apple.compare(yellowApple)); //false, because the color property of the two objects is different, even though the name property is the same.

let redApple = apple;
console.log(apple === redApple); //true, because they are the same object in memory, they reference the same object.

let tmpA = 5;
let tmpB = 5;
let tmpC = tmpA; //byValue
//comparison by value
console.log(tmpA === tmpB); //true, because they are both primitive values and have the same value.
console.log(tmpA === tmpC); //true, because they are both primitive values and have the same value. Even though tmpC is a different variable, it holds the same value as tmpA, so they are considered equal when using the strict equality operator (===).

//by reference
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(array1 === array2); //false, because they are two different arrays in memory, even though they have the same elements and values.

let array3 = array1; //passed by reference
console.log(array1 === array3); //true, because they are the same array in memory, they reference the same array.