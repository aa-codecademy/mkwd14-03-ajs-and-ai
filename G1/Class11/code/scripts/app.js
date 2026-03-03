function Vehicle(id, name, serialNumber, price) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.price = price;
    this.printVehicle = function () {
        console.log(`${this.id}. ${this.name}, 
            Ser.Number: ${this.serialNumber}, 
            Price: ${this.price}`);
    }
}

let obj = {};
console.log(obj);

let wheeledVehicle = Object.create(new Vehicle(1, "Ford", 123, 5000));
wheeledVehicle.numOfWheels = 4;
wheeledVehicle.drive = function() {
    console.log("WROOM, WROOM...");
}
console.log(wheeledVehicle);


let car = Object.create(wheeledVehicle);
car.fuelTankCapacity = 50;
car.drive();
car.printVehicle();
console.log(car);

let bike = Object.create(wheeledVehicle);
bike.id = 2;
bike.name = "Specialized";
bike.price = 500;
bike.serialNumber = 112;
bike.numOfWheels = 2;

bike.drive();
bike.printVehicle();
console.log(bike.model);




let wheeledVehicle1 = new Vehicle(3, "Seat", 112233, 10000);

// let wheeldVehicle2 = Object.create(wheeledVehicle1);
let wheeledVehicle2 = {};
wheeledVehicle2.__proto__ = new Vehicle(4, "Yugo", 123334, 500);

console.log(wheeledVehicle1.__proto__);
console.log(wheeledVehicle2);



