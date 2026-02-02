console.log("======================= OBJECTS =======================");
// representation of entities that exist in the real world
// consists of PROPERTIES and METHODS

// 1) created using curly brackets (object literal) {} 
const dog = {
    name: "Sparky",
    color: "brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    favouriteFood: ["Carrot", "Bacon", "Bones"],
    bark: function () {
        console.log("AF AF AF !");
    },
    eat: function (food) {
        console.log(`The dog ${this.name} is eating ${food}!`);
        // for (const favourite of this.favoriteFood) {
        //     if (favourite === food) {
        //         console.log("Its favourite!")
        //     }
        // }
        // ===> Same thing as above, just using built in method
        if (this.favouriteFood.includes(food)) {
            console.log("Its favourite !");
        }
        console.log("NOM NOM NOM");
    }
};

console.log(dog.owner.firstName);
dog.bark()
dog.eat("Bacon");
// Objects in Javascript are DYNAMIC !!! 
// => meaning you can add new properties and methods after the objects creation
dog.isLazy = true;

console.log(dog);
console.log(dog.name);
console.log(dog["name"]);

// 2) created using the 'new' keyword
const otherDog = new Object();
otherDog.name = "Chapo";
otherDog["isStreetDog"] = true;
console.log(otherDog);

// 3) created using Constructor Notation Template (Constructor Function)
function Human(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 4) created using ES6 Class Notation Template
class Person {
    constructor(firstName, lastName, age, favouriteSubject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favouriteSubject = favouriteSubject;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const nikola = new Person("Nikola", "Nikolovski", 28);
const bob = new Person("Bob", "Bobsky", 23, { title: "JavaScript" });

// Accessing objects properties
console.log(nikola.firstName);
console.log(nikola["lastName"]);

// Updating values
nikola.firstName = "Petko";
nikola["lastName"] = "Petkovski";

nikola.favouriteSubject = {
    title: "C#",
    numberOfClasses: 15
}



console.log("======================= BONUS PART =======================");
// we will dive deeper into this topic in the following classes
// this is just a brief introduction 

console.log("=========== The 'window' object ===========");
// the global object !!!
// variables and functions declared globally become properties and methods of the window object
console.log(window);
console.log(this); //global this === window
console.log(window.innerWidth);

console.log("=========== The 'document' object ===========");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document
console.log(window.document);
console.log(document);