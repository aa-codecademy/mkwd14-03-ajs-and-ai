class Vehicle {
    constructor(id, name, seriesNum, price) {
        //debugger
        this.id = id;
        this.name = name;
        this.seriesNum = seriesNum;
        this.price = price;
    }
    printVehicle() {
        console.log(`Vehicle ${this.name} ${this.seriesNum} - ${this.price} EUR`)
    }
}

//CLASSES -> templates
//OBJECTS -> instances

let vehicle = new Vehicle(1, "Opel", "432", 10000); //constructor is called
console.log(vehicle);
console.log(vehicle.name);
vehicle.printVehicle();

//Inheritance

//1. extends - we inherit from the parent using the extends keyword
//2. super - we call the parent construcor using the super keyword
class WheeledVehicle extends Vehicle {
    constructor(id, name, seriesNum, price, numOfWheels) {
        //debugger
        //super -> constructor of the parent (Vehicle)
        //initialize and inherit the properties of Vehicle
        super(id, name, seriesNum, price); //here the constructor of Vehicle is called
        this.numOfWheels = numOfWheels; //specific properties for WheeledVehicle
    }
    driveWheeledVehicle() {
        console.log(`Drive carefully the ${this.name}`);
    }
}

let wheeledVehicle = new WheeledVehicle(2, "bike", "3142", 200, 2);
console.log(wheeledVehicle);

//Static
class Car extends WheeledVehicle {
    constructor(id, name, seriesNum, price, numOfWheels, plateNum, hasAc) {
        //debugger
        super(id, name, seriesNum, price, numOfWheels); //calls the constructor of the parent class (WheeledVehicle)
        this.plateNum = plateNum;
        this.hasAc = hasAc;
    }
    buyCar(money) {
        money >= this.price ? console.log("Congrats, you bought a car!") : console.log("Sorry!");
    }

    //static - belong to the class, not to the object (not to a concrete instance)
    static addAirConditioning(carObject) {
        if (carObject.hasAc) { //if the car has Ac (hasAc === true)
            console.log("The car already has AC")
        } else { //if car does not have AC (hasAc === false)
            carObject.hasAc = true;
            carObject.price += 300;
        }
    }
    static print() {
        console.log("Hello from Car class");
    }

    static isRentable = false;
}

let firstCar = new Car(5, "BMW", "342", 20000, 4, "SK1234AB", true);
firstCar.buyCar(); //we call the properties and methods using the object (the instance)
console.log(firstCar.numOfWheels);
console.log(firstCar);

//we use the name of the class (Car) to access the static methods and properties
//for static methods and properties we do not need an object (an instance) to call them, we use the class itself because they belong to the class
Car.addAirConditioning(firstCar);
Car.print();
console.log(Car.isRentable);
Car.isRentable = true;
console.log(Car.isRentable);

//Getters and setters
class ElectricCar extends Car {
    constructor(id, name, seriesNum, price, numOfWheels, plateNum, hasAc, owner, numOfDoors) {
        super(id, name, seriesNum, price, numOfWheels, plateNum, hasAc);
        this.owner = owner; //this will call the set
        this.numOfDoors = numOfDoors;
    }
    //the name of the set and get method must be the same as the prop that we want to set/get
    set owner(ownerName) {
        console.log("We are setting the value of owner");
        console.log("We will not accept an empty string");
        !ownerName ? this._owner = "no owner" : this._owner = ownerName;
    }

    get owner(){
        console.log("We are getting the value of owner");
        return this._owner; //_owner is the property that is known to the instance. The outside world uses (calls) the get and set in the background
    }
}


let electricCar = new ElectricCar(6, "Tesla", "34342", 30000, 4, "SK1234AB", true, "Petko", 5);
console.log(electricCar.owner); //this will call get
console.log(electricCar);
electricCar.owner = "Marko"; //this will call the set
console.log(electricCar.owner); //this will call get

