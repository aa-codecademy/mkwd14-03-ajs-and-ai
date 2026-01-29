//Object literal
//key-value pairs
let dog = {
    name: "Sparky",
    color: "brown",
    age: 3,
    favouriteFood: ["chicken", "beef", "carrots"],
    bark: function () {
        console.log("Woof Woof!");
    },
    eat: function (food) {
        console.log("Yum Yum!" + " I love " + food);
    }
}
//Accessing properties - we use the dot notation to access the properties of an object
dog.bark(); //Output: Woof Woof!
console.log(dog.name); //Output: Sparky
console.log(dog.favouriteFood[1]); //Output: beef
dog.eat("chicken"); //Output: Yum Yum!

//Modifying properties of an object - we use the dot notation to modify the properties of an object
dog.age = 4;
console.log(dog.age); //Output: 4
dog.bark = function () {
    console.log("Woof Woof Woof!");
}
dog.bark(); //Output: Woof Woof Woof!

//new Object() syntax
let anotherdog = new Object(); //we use the new keyword followed by Object() 
//we use the dot notation to add properties and methods to the object
anotherdog.name = "Buddy";
anotherdog.color = "black";
anotherdog.age = 2;
anotherdog.favouriteFood = ["lamb", "fish", "rice"];
anotherdog.bark = function () {
    console.log("Woof!");
}
anotherdog.eat = function (food) {
    console.log("Yummy!" + " I like " + food);
}

//Accessing properties
anotherdog.bark();
console.log(anotherdog.name); //Output: Buddy
console.log(anotherdog.favouriteFood[0]); //Output: lamb
anotherdog.eat("fish"); //Output: Yummy! I like fish

//Ternary operator to set default value
// contditional ? value if true : value if false
let message = 3 > 2 ? "Three is greater than two" : "Two is greater than three";
if(3 > 2) {
    message = "Three is greater than two";
} else {
    message = "Two is greater than three";
}

//Constructor function syntax
// function Dog(name = "Unnamed", color, age, favouriteFood = []) {
//     // if (!name) {
//     //     this.name = "Unnamed";
//     // }
//     // else {
//     //     this.name = name;
//     // }
//     this.name = name;
//     console.log(this.name); //it will print null
//     this.favouriteFood = favouriteFood;
//     console.log(this.favouriteFood); //it will print []
// }

let thirdDog = new Dog(null, "brown", 5, ["turkey", "peas", "sweet potatoes"]);
let fourthDog = new Dog("Max", "golden", 4);

function Dog(name, color, age, favouriteFood) {
    //this will refer to the object that is being created
    this.name = name ? name : "Unnamed";
    //this.name = !name ? "Unnamed" : name;
    this.color = color;
    this.age = age;
    this.favouriteFood = favouriteFood ? favouriteFood : []; //default value is an empty array - if later on we want to add values and say dog.favouriteFood.push() and favouriteFood is null - we would have null.push() and it would throw an error
    this.hasOwner = false; //default value is false - later on we can change it to true if the dog gets adopted
    this.bark = function () {
        console.log("Woof Woof!");
    }
    this.eat = function (food) {
        console.log("Yum Yum!" + " I love " + food);
    }
}

let Luna = new Dog("Luna", "white", 2, ["salmon", "sweet potatoes"]);
console.log(Luna.name); //Output: Luna
console.log(Luna.favouriteFood); //Output: ["salmon", "sweet potatoes"]


let Hera = new Dog("Hera", "black", 3)
console.log(Hera.name); //Output: Hera
console.log(Hera.favouriteFood); //Output: []