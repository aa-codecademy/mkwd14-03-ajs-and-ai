let obj = {
    name: 'Trajan',
    lastName: 'Stevkovski'
}

let person = Object.create(obj);
// console.log(person.name);
// console.log(person.lastName);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

let obj1 = { ...target, ...source };
let obj2 = Object.assign(target, source);
// console.log(obj1);
// console.log(obj2);

// console.log(Object.entries(obj)); // [key-value]
// console.log(Object.keys(obj)); // keys
// console.log(Object.values(obj)); // values

// for(let [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

let obj3 = {
    name: 'Trajan',
    lastName: 'Stevkovski'
};

Object.freeze(obj3);

obj3.name = 'Bob';
obj3.newProp = 'something';
console.log(obj3);

let config = {
    apiUrl: '',
    apiKey: '',
    user: { }
}
console.log(Object.isFrozen(config));
if (!Object.isFrozen(config)) {
    Object.freeze(config);
}
console.log(Object.isFrozen(config));


let config1 = {
    apiUrl: '',
    apiKey: '',
    user: { }
}

Object.seal(config1);

config1.apiKey = '12esad3r';
config1.apiUrl = 'www.google.com',
config1.user = {
    id: 1,
    name: 'Trajan'
}

delete config1.apiKey;
config1.newProp = 'something';
console.log(config1);

console.log(Object.isSealed(config1));
console.log(Object.isSealed(config));
console.log(Object.isSealed(obj));