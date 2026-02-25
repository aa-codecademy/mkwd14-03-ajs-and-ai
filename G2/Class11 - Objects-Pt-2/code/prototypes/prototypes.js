console.log("================== PROTOTYPES ==================");

// ===> Example with Object.create();

// => Parent object
const animal = {
    type: "Mamal",
    eat: function () {
        console.log("Nom Nom Nom");
    }
}

// => Creating new object that inherits from 'animal'
const dog = Object.create(animal);
console.log(dog);
console.log(dog.type); // Mammal - Inherited from 'animal'

// Adding a new property to 'dog'
dog.breed = "German Shepard";  // 'dog' object now has its own 'breed' property

dog.eat(); // Inherited method



console.log("");
console.log("========== __proto__ ==========");
// The __proto__ property is a reference to the object's prototype
// It allows access to properties and methods from the prototype chain

// ===> The Prototype Chain
// Every object in JavaScript has a prototype
// If a property or method is not found on the object, JavaScript looks up the prototype chain
console.log(dog.__proto__); // the 'animal' object
console.log(dog.__proto__.type); // Mamal
console.log(dog.__proto__.__proto__); // Object
console.log(dog.__proto__.__proto__.__proto__); // null
// console.log(dog.__proto__.__proto__.__proto__.__proto__); // ERROR

console.log(dog.prototype);  // undefined, only constructor functions (and classes) contain the 'prototype' property

console.log(dog.street)



console.log("");
console.log("========== prototype ==========");
// The __proto__ property is a reference to the object's prototype.
// It allows access to properties and methods from the prototype chain.

function Animal(name) {
    // Each instance of Animal will have its own 'name' property
    this.name = name;
    // This method is assigned directly to the instance, meaning each new Animal object will have its own copy of the 'eat' function (not shared across instances)
    this.eat = () => console.log(`${this.name} is eating`);
}

const animalDog = new Animal("Dog");
const animalRabbit = new Animal("Rabbit");

animalDog.eat();
animalRabbit.eat();

console.log(Animal.prototype);

Animal.prototype.makeSound = function () {
    console.log(`The ${this.name} is making a sound !`);
}

animalDog.makeSound();



console.clear();
console.log("");
console.log("========== Object.setPrototypeOf ==========");
// Used to change the prototype of an existing object

const swimAbility = {
    isGoodSwimmer: false,
    swim: function () {
        console.log(`${this.name} is swimming. It is a ${this.isGoodSwimmer ? "good" : "bad"} swimmer`);
    }
}

// ===> Example: Swimming Turtle :)
const turtle = new Animal("Turtle");
// turtle.swim(); // ERROR

// Object.setPrototypeOf(turtle, swimAbility);
// ===> Problem: by using the method we are completely replacing the prototype of turtle, meaning it loses access to the Animal.prototype methods (makeSound...)
turtle.eat();
// turtle.makeSound(); // ERROR
turtle.swim();

// ===> Solution: first set the Animal.prototype as prototype to swimAbility object
Object.setPrototypeOf(swimAbility, Animal.prototype);
Object.setPrototypeOf(turtle, swimAbility);
turtle.eat();
turtle.makeSound();
turtle.swim();


console.log("");
console.log("========== Object.getPrototypeOf ==========");
// Used to check the prototype of an object

console.log(Object.getPrototypeOf(turtle));
