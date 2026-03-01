function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`ID: ${this.id}, Name: ${this.name}, Series Number: ${this.seriesNum}, Price: ${this.price}`);
    }
}

function WheeledVehicle(numberOfWheels, name){
    this.numberOfWheels = numberOfWheels;
    this.name = name;
    this.drive = function(){
        console.log(`You are driving a ${this.name} with ${this.numberOfWheels} wheels!`);
    }
}

//WheeledVehicle.prototype = Object.create(new Vehicle());
WheeledVehicle.prototype = Object.create(new Vehicle(1, "Opel", 12345, 20000));

let wheeledVehicle = new WheeledVehicle(4, "Peugeot");
console.log(wheeledVehicle);

let wheeledVehicle2 = new WheeledVehicle(2, "Motorcycle");
console.log(wheeledVehicle2);
wheeledVehicle2.price = 10000;

WheeledVehicle.prototype.stop = function(){
    console.log(`You stopped the ${this.name}!`);
}

wheeledVehicle2.name = "Yamaha";
console.log(wheeledVehicle);
wheeledVehicle.stop();
wheeledVehicle2.stop();

