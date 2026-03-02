function Animal(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;

    this.printInfo = function() {
        console.log(`I am ${this.name} the animal! Age: ${this.age} Color: ${this.color}`);
    }
}

// function EarthAnimal(numOfLegs) {
//     this.numOfLegs = numOfLegs;
//     this.walk = function() {
//         console.log(`I am earth animal with ${this.numOfLegs} legs!`)
//     }
// }

function EarthAnimal(name, color, age, numOfLegs) {
    //this.__proto__ = Object.create(new Animal(name, color, age));
    Object.setPrototypeOf(this, new Animal(name, color, age))
    
    // Avoid setting values of properties for EathAnimal like the line below
    // Do the setting like line 19 or line 20
    // this.name = name;
    // this.color = color;
    // this.age = age;
    this.numOfLegs = numOfLegs;
    this.walk = function() {
        console.log(`I am earth animal with ${this.numOfLegs} legs!`)
    }
}


// EarthAnimal.prototype = Object.create(new Animal());

// let dog = new EarthAnimal(4);
// dog.name = "Sharko";
// dog.color = "Black";
// dog.age = 4;

// Another better way
let dog = new EarthAnimal("Sharko", "black", 4, 4);
dog.printInfo();
dog.walk();
console.log(dog);



// How the process of inheritance using prototype works in JS

// 1. new EarthAnimal
// 2. EarthAnimal constructor function is called
// 3. setPrototypeOf() a new Animal object is created
// 4. the values are passed to the new Animal() constructor function
// 5. Animal constructor function is called
// 6. Animal object is built from the animal constructor function
// 7. The returned Animal object is set as prototype to the current object that is created
// 8. The current object (EarthAnimal) is created
// 9. EarthAnimal object is returned from the new EarthAnimal and stored in our 'dog' variable



