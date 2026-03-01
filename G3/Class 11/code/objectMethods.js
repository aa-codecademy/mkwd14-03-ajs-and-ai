let dog = {
    name: "Sparky",
    isHappy: true,
    bark: function() {
        console.log("Woof!");
    }
}

//create - completely new object with the same properties and methods as the original
//barnie is a new objectt with the same properties and methods as dog, but it is not the same object in memory (different reference)
let barnie = Object.create(dog);
console.log(barnie.name); // Sparky
barnie.bark(); // Woof!
barnie.name = "Barnie";
console.log(barnie.name); // Barnie
console.log(dog.name); // Sparky

//assign - copies the properties and methods from one object to another, but it is the same object in memory (same reference)
let addressInfo = {
    street: "Dog street",
    streetNumber: 123,
    isHappy: false //it will overwrite the isHappy property of the dog object, because it is the same object in memory
}

console.log(dog.street); // undefined

//the first param is the object that will get all the properties and methods from the second param, and it will return the first param with all the properties and methods from the second param
let dogUpdate = Object.assign(dog, addressInfo); //the dog will now have its own properties plus the properties of the addressInfo
//the dogUpdate object is the same as the dog object, but it has all the properties and methods of the addressInfo object
//the dog object and dogUpdate are referencing the same object in memory, so any changes to one will affect the other
console.log("After assign:");
console.log(dog);
console.log(dogUpdate);
console.log(addressInfo); // the addressInfo object is not changed, it is still the same object in memory, but the dog object now has all the properties of the addressInfo object

dogUpdate.street = "New dog street";
console.log(dog.street); // New dog street
console.log(dogUpdate.street); // New dog street

//keys - returns an array of the keys of an object (the key part from the key-value pairs of the object)
console.log(Object.keys(dog)); // ["name", "isHappy", "bark", "street"]
console.log(Object.keys(dog)[1]); // isHappy

dog.isHappy = false;
console.log(dog.isHappy); // false

dog['isHappy'] = true;
console.log(dog.isHappy); // true

dog[Object.keys(dog)[1]] = false;
console.log(dog.isHappy); // false

//values - returns an array of the values of an object (the value part from the key-value pairs of the object)

console.log(Object.values(dog)); // ["Sparky", false, [Function: bark], "New dog street"]
dog.printValues = function() {
    Object.values(this).forEach(value => console.log(value));
}

dog.printValues(); // Sparky, false, [Function: bark], New dog street

Object.values(dog)[2](); // Woof! (calls the bark method)
console.log(Object.values(dog)[0]); // Sparky (the name of the dog)

//freeze - prevents any changes to an object (no new properties nor methods can be added, existing properties and methods cannot be removed or changed)
let luna = {
    name: "Luna",
    isHappy: true,
    friend: "Sparky",
    bark: function() {
        console.log("Woof!");
    }
}
console.log(luna);
Object.freeze(luna);
luna.friend = "Barnie"; // this will not change the friend property of the luna object, because it is frozen
console.log(luna.friend); // Sparky (the friend property is still the same, it was not changed to Barnie)

luna.age = 5;
console.log(luna.age); // undefined (the age property was not added to the luna object, because it is frozen)

//seal - prevents new properties from being added to an object, but existing properties and methods can be changed or removed
let hera = {
    name: "Hera",
    isHappy: true,
    friend: "Sparky",
}

Object.seal(hera);
console.log(hera.friend); // Sparky
hera.friend = "Barnie";
console.log(hera.friend); // Barnie (the friend property was changed to Barnie, because the hera object is sealed, not frozen)
hera.age = 3;
console.log(hera.age); // undefined (the age property was not added to the hera object, because it is sealed)