let obj = {
    name: 'Trajan',
    lastName: 'Stevkovski'
}

let person = Object.create(obj);
// console.log(person.name);
// console.log(person.lastName);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

let obj1 = {...target, ...source};
let obj2 = Object.assign(target, source);
console.log(obj1);
console.log(obj2);

console.log(Object.entries(obj)); // [key-value]
console.log(Object.keys(obj)); // keys
console.log(Object.values(obj)); // values

for(let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}