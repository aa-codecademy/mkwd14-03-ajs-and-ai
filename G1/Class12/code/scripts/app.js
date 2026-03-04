// Classes and Inheritance in JS

class Vehicle {
    constructor(id, model, yearOfMake, price) {
        this.id = id;
        this.model = model;
        this.yearOfMake = yearOfMake;
        this.price = price;
    }

    displayInfo() {
        console.log(`${this.id}. ${this.model} | Price: ${this.price} EUR.`);
    }
}

class WheeledVehicle extends Vehicle {
    constructor(id, model, yearOfMake, price, numberOfWheels, fuelType) {
        //super() - means the constructor of the parent class
        //it will call the parent constructor
        super(id, model, yearOfMake, price);

        this.numberOfWheels = numberOfWheels;
        this.fuelType = fuelType;
    }

    drive() {
        switch (this.fuelType) {
            case "petrol":
                console.log(`This car spend 10l/100km`);
                break;
            case "diesel":
                console.log("This car spend 6l/100km");
                break;
            case "gas":
                console.log("This car spend 3l/100km");
                break;
            default:
                console.log("No info for consumption.");
                break;
        }
    }
}

let ford = new WheeledVehicle(1, "Ford Focus", 2022, 25000, 4, "petrol");
let toyota = new WheeledVehicle(2, "Toyota Corolla", 2018, 18000, 4, "gas");

console.log(ford);
console.log(toyota);

ford.displayInfo();
toyota.displayInfo();

ford.drive();
toyota.drive();




class MathOperations {

    // define PI as a static property on the class itself
    static PI = 3.141592653589793;

    // no need for an instance constructor when all members are static
    static sum(a, b) {
        return a + b;
    }

    sum(a, b) {

    }

    static diff(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static division(a, b) {
        if (b === 0) {
            console.log("Cannot divide by 0");
        }
        return a / b;
    }

     static areEqual(a, b) {
        return a === b;
    }
}


let div = MathOperations.division(20, 4);
let sum = MathOperations.sum(10, 10);

let calc = MathOperations.sum(10, 10) / MathOperations.multiply(2, 2);


console.log(div);
console.log(sum);
console.log(calc);
console.log(MathOperations.areEqual(5, 10));

console.log(Math.PI);
console.log(MathOperations.PI);

console.log(ford instanceof Vehicle);
console.log(ford instanceof WheeledVehicle);
console.log(ford instanceof MathOperations);


// How to set and get items in localStorage in the browser

localStorage.ssetItem("ford-car", JSON.stringify(ford));
localStorage.setItem("toyota-car", JSON.stringify(toyota));
let fordObj = JSON.parse(localStorage.getItem("ford-car"));
console.log(fordObj);


fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  .then((response) => response.json())
  .then((posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  });