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



console.log("");
console.log("============== Array Destructuring ==============");







