 function BaseEntity(id, name){
    debugger
    this.id = id;
    this.name = name;
}

function Vehicle(id, name, seriesNum, price){
    debugger
    Object.setPrototypeOf(this, new BaseEntity(id, name));
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`ID: ${this.id}, Name: ${this.name}, Series Number: ${this.seriesNum}, Price: ${this.price}`);
    }   
}

function WheeledVehicle(id, name, seriesNum, price, numOfWheels){
    debugger
    //we are saying that every instance of wheeled vehicle will have the properties of vehicle and then some more properties of its own
    //and we are doing this by using the setPrototypeOf method which is a built in method in javascript which is used to set the prototype of an object to another object
    //and we let it set the values of the properties for each instance of the wheeled vehicle by passing the parameters to the constructor function of the vehicle and then we set the prototype of the wheeled vehicle to be an instance of the vehicle constructor function
    Object.setPrototypeOf(this, new Vehicle(id, name, seriesNum, price));
    this.numOfWheels = numOfWheels;
    this.drive = function(){
        console.log(`Driving a ${this.name} with ${this.numOfWheels} wheels`);
    }
}

let wheeledVehicle = new WheeledVehicle(1, 'Opel', 'CV123', 20000, 4);
console.log(wheeledVehicle);
console.log(wheeledVehicle.name);
wheeledVehicle.drive();
wheeledVehicle.printVehicle();

let wheeledVehicle2 = new WheeledVehicle(2, 'BMW', 'MC456', 10000, 2);
console.log(wheeledVehicle2);
console.log(wheeledVehicle2.name);
wheeledVehicle2.drive();
wheeledVehicle2.printVehicle();

function Car(id, name, seriesNum, price, numOfWheels, numOfDoors){
    debugger
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, seriesNum, price, numOfWheels));
    this.numOfDoors = numOfDoors;
}

let car = new Car(3, 'Mercedes', 'MB789', 50000, 4, 4);
console.log(car.id);
console.log(car.name);
console.log(car.seriesNum);
console.log(car.price);
car.printVehicle();

car.name = "Mercedes-Benz";