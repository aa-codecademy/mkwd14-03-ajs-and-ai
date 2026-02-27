let obj = {
    name: 'Trajan',
    age: 38,
    lastName: 'Stevkovski'
}

let name1 = obj.name;
let lastName1 = obj.lastName;
let age1 = obj.age;

let { name, lastName, age = 25 } = obj;
// console.log(name);
// console.log(age);

let { name: ime, lastName: prezime, age: godini } = obj;
// console.log(prezime);


function showPersonInfo(name, lastName, age) {
    console.log(`${name} ${lastName} has age of ${age}`);
}

function showPersonInfo1(person) {
    console.log(`${person.name} ${person.lastName} has age of ${person.age}`);
}
// showPersonInfo(obj.name, obj.lastName, obj.age);
// showPersonInfo1(obj);

function showPersonInfo2({ name, lastName: prezime, age = 25 }) {
    console.log(`${name} ${prezime} has age of ${age}`);
}
// showPersonInfo2(obj);


let array = [1, 2, 3, 4, 5];

let first1 = array[0];
let second1 = array[1];
let third1 = array[2];

let [first, second, third] = array;

// console.log(first, second, third);

let arr = [1, [1,2,3], [2]];
let [first2, [first3, second3, third3], [first4]] = arr;

// console.log(first2, first3, second3, third3, first4);



let obj1 = {
    fnc: () => console.log('0'),
    fnc1: () => console.log('1'),
    fnc2: () => console.log('2'),
    fnc3: () => console.log('3'),
    fnc4: () => console.log('4'),
}

let { fnc4 } = obj1;
// fnc4();


let obj2 = {
    name: 'Laptop',
    price: 1200,
    quantity: 20,
    inStock: true,
    category: 'Laptops'
}

let product = {
    ...obj2,
    name: 'PC',
    price: 2000,
    components: ['ram', 'hdd']
}
// console.log(obj2, product);

let arr1 = [1, 2];
let arr2 = [2, 3];

let newArr = arr1.concat(arr2);
console.log(newArr);

let newArr1 = [...arr1, ...arr2];
console.log(newArr1);

let longArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...rest] = longArr;
console.log(a, b, rest);

function sumOfThree(num, num1, num2, num4) {
    return num + num1 + num2 + num4;
}

console.log(sumOfThree(...longArr));