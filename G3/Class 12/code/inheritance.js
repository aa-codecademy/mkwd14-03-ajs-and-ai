function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`ID: ${this.id}, Name: ${this.name}, Series Number: ${this.seriesNum}, Price: ${this.price}`);
    }
}

let vehicle = new Vehicle(1, "Opel", "C123", 20000);
console.log(vehicle);

let wheeledVehicle = Object.create(vehicle); // Inherit from Vehicle - we copy the properties and methods of Vehicle to wheeledVehicle
//only wheeledVehicle will have this property
wheeledVehicle.numOfWheels = 4; //we add specific property for wheeledVehicle
console.log(wheeledVehicle);
console.log(wheeledVehicle.name); //we can access the inherited property from Vehicle
wheeledVehicle.printVehicle(); //we can also access the inherited method from Vehicle

//overrride values
wheeledVehicle.name = "Opel Corsa";
console.log(vehicle);
console.log(wheeledVehicle);
console.log(wheeledVehicle.name);

let car = Object.create(wheeledVehicle); // Inherit from wheeledVehicle - we copy the properties and methods of wheeledVehicle to car
car.model = "Corsa";
console.log(car);
console.log(car.name);

let bike = Object.create(wheeledVehicle); // Inherit from wheeledVehicle - we copy the properties and methods of wheeledVehicle to bike
bike.model = "Mountain Bike";
bike.numOfWheels = 2;
console.log(bike);
console.log(bike.numOfWheels); //it will take the value from bike
console.log(bike.name); //it will take the value from wheeledVehicle - Opel Corsa
console.log(bike.price); //it will take the value from Vehicle - 20000

console.log("====Prototypes======");
console.log(wheeledVehicle.__proto__); //it will show the prototype of wheeledVehicle - Vehicle
console.log(wheeledVehicle.__proto__.price); //it will show the price property from Vehicle - 20000

console.log(car.__proto__); //it will show the prototype of car - wheeledVehicle
console.log(car.__proto__.__proto__); //it will show the prototype of car's prototype - Vehicle
console.log(car.__proto__.name); //it will show the name property from wheeledVehicle - Opel Corsa
console.log(car.__proto__.__proto__.name); //it will show the name property from Vehicle - Opel

vehicle.name = "Peugeot";
console.log(vehicle.name); //Peugeot
console.log(wheeledVehicle.name); //Opel Corsa - it will not change because we have overridden the name property in wheeledVehicle
console.log(car.name);
console.log(car.__proto__.__proto__.name); //Peugeot - it will change because we have changed the name property in Vehicle