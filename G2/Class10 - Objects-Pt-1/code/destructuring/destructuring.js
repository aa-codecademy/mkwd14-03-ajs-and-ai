console.log("====================== DESTRUCTURING ======================");
// => breaking down a complex structure into simpler managable parts
// => cleaner syntax to get items from arrays, or property-values from objects, and put them into distinct variables

console.log("");
console.log("============== Object Destructuring ==============");
// https://dummyjson.com/users/1

const userObj = {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 28,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
        "color": "Brown",
        "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
        },
        "country": "United States"
    }
};


// ===> Example: take id, firstName, lastName (WITHOUT DESTRUCTURING)
const userId = userObj.id;
const userFirstName = userObj.firstName;
const userLastName = userObj.lastName;
console.log(userId, userFirstName, userLastName);

// ===> Example: take id, firstName, lastName (WITH DESTRUCTURING)
const { id, firstName, lastName } = userObj;
console.log(id, firstName, lastName);


// ===> Example: take firstName, lastName, age
// const { userObjFirstName, userObjLastName, age } = userObj;
// console.log(userObjFirstName, userObjLastName, age); // undefined, undefined, 28

// NOTE: We must use the same key-names (property names) !!!  
// *However, there is workaround syntax even for that* 
// Syntax: { propertyName : ourCustomVariableName } = ourObject
const { firstName: userObjFirstName, lastName: userObjLastName, age: godini } = userObj;
console.log(userObjFirstName, userObjLastName, godini);


// ===> Example: take address latitude and longitude (WITHOUT DESTRUCTURING)
let latitude = userObj.address.coordinates.lat;
let longitude = userObj.address.coordinates.lng;

console.log(latitude, longitude);

// ===> Example: take address latitude and longitude (WITH *NESTED* DESTRUCTURING)
// const { address: { coordinates: { lat, lng } } } = userObj;
// console.log(lat, lng);

// const { lat, lng } = userObj.address.coordinates;
// console.log(lat, lng);


// ===> Example: take address city, latitude and longitude (WITH DESTRUCTURING)
const { city: grad, coordinates: { lat: dolzina, lng: sirina } } = userObj.address;
console.log(grad, dolzina, sirina);



console.log("");
console.log("============== Parameters Destructuring ==============");

// ===> Example: without destructuring
function getUserFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}
console.log(getUserFullName(userObj));

// ===> Example: with PARAMETERS DESTRUCTURING 
function getUserFullNameWith({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(getUserFullNameWith(userObj));



console.clear();
console.log("");
console.log("============== Array Destructuring ==============");


const testArray = [100, 300, 5_000, 400, 10_000];

// ===> Example: take first 3 items from the array (WITHOUT DESCTRUCTURING)
const firstNum = testArray[0];
const secondNum = testArray[1];
const thirdNum = testArray[2];

console.log(firstNum, secondNum, thirdNum);

// ===> Example: take first 3 items from the array (WITH DESCTRUCTURING)
const [itemOne, itemTwo, broj3, , item5] = testArray;
console.log(itemOne, itemTwo, broj3, item5);

// ===> Example: take first and third div with class array-demo (WITH DESCTRUCTURING)
const [firstDiv, , thirdDiv] = document.querySelectorAll(".array-demo");

console.log(firstDiv);
// console.log(secondDiv); 
console.log(thirdDiv);


// ===> Example: Destructuring with default values 

const testArrayTwo = ["First string", "Second string"]

// => if there isn't third item in the array, use the default value
const [firstString, secondString, thirdString = "Third string"] = testArrayTwo

console.log(firstString, secondString, thirdString);


// ===> Example: Swapping variables using array destructuring
let a = 10, b = 20, c = 30;
// let b = 20;
// let c = 30;
// let temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// => With Destructuring
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10



console.clear();
console.log("");
console.log("============== Spread operator ==============");
// The spread operator (...) is used to expand iterable elements (arrays, objects, strings) into individual elements or properties 
// It is commonly used for copying, merging and passing elements as arguments to functions

const numbers = [-5, 10, 34, 350, 123, 10_000, 43];

console.log(numbers); // prints the whole array object
console.log(...numbers); // prints only the values

// *** Spread in fucntion calls ***

console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 10_000


// *** Spread with Arrays ***
const dogs = ["Bax", "Axe", "Chapo"];
const cats = ["Zuza", "Missy"];

// ===> Example: merge 2 arrays into 1 (WITH SPREAD)
const allPets = [...dogs, ...cats];
console.log(allPets);

// ===> Example: create copy of dogs array
const dogsCopy = [...dogs]
dogsCopy.push("Berta");  // won't change the original dogs array
console.log(dogs);
console.log(dogsCopy);


// *** Spread with Objects ***
// ===> Example: merge 2 objects into 1 (WITH SPREAD)

const dog = {
    name: "Aks",
    breed: "Pug"
};

const dogDescription = {
    group: "Toy",
    color: "Appricot Fawn",
    origin: "China"
}

// Object.assign(dog, dogDescription)
console.log(dog);

const aksDogInfo = { ...dog, ...dogDescription, isHappy: true }
console.log(aksDogInfo);

// *** Spread with Strings ***
// ===> Example: Converts a string into an array of characters
const word = "Hello";
const letters = [...word]
console.log(letters);


console.log("");
console.log("============== Rest operator ==============");

const students = ["Bob", "Jill", "John", "Steve", "Rob"];

const [bob, jill, ...restStudents] = students;

console.log(bob);
console.log(jill);
console.log(restStudents);


// ===> Example: function that sums random count of numbers passed as arguments

// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(sum(3, 4, 5));

function sum(...nums) {
    return nums?.length ? nums.reduce((acc, curr) => acc + curr) : 0;
}
console.log(sum(32432, -3434, 54, -100000));
