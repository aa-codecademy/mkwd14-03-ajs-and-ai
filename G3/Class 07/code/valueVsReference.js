//By value - numbers, strings, booleans..

let a = 5;
console.log(a); //5
let b = a; 
console.log(b); //5

a = 8;
console.log(a); //8
console.log(b); //5

let number = 6;

function changeValue(num){
    console.log(num); //6
    num = 77;
    console.log(num); //77
    console.log(number); //6
}

console.log("Number before calling changeVal " + number); //6
//let num = number //by value
changeValue(number); //pass by value -> primitive type (when we pass on a primitive type (number, string, bool..) in the background a literal copy is made in another place, so any changes on the original do not affect the copy)
console.log("Number after calling changeVal " + number); //6

//Array - REFERENCE

let array1 = [10, 4, 5, 2];
let array2 = array1; //pass by reference

console.log(array1); //[10, 4, 5, 2]
console.log(array2); //[10, 4, 5, 2]

array1[0] = 2342;
console.log(array1);  //[2342, 4, 5, 2]
console.log(array2); //[2342, 4, 5, 2]

array2[1] = 12;
console.log(array1);  //[2342, 12, 5, 2]
console.log(array2); //[2342, 12, 5, 2]

let nums = [4, 5, 6, 7];

function changeArray (array){
    array.push(1111);
}

console.log("Nums before changeArray");
console.log(nums); //[4, 5, 6, 7]
changeArray(nums); //let array = nums -> by reference
console.log("Nums after changeArray");
console.log(nums); // [4, 5, 6, 7, 1111]

//Objects - REFERENCE

let obj1 = {
    prop1: "Test1"
};

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1.prop1 = "Updated test";

console.log(obj1);
console.log(obj2);

//let obj = obj1 => reference
function changeObj (obj){
   obj.prop2 = "New prop"
}

console.log("Obj1 before changeObj");
console.log(obj1);
changeObj(obj1); // let obj = obj1 -> by reference
console.log("Obj1 after changeObj");
console.log(obj1); //both obj1 and obj2 will have the new prop2
console.log(obj2);

