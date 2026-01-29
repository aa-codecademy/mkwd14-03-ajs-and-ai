//Arrays
let array = [1, "G3", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(array);
console.log("Length of the array is: ", array.length);
console.log("Element at index 2 is: ", array[2]);
array.push("New Element");
console.log("Array after push: ", array);
let element = array.pop();
console.log("Popped element: ", element);

//Loops
console.log("=====WHILE LOOP=====");
let counter = 0; //we need to initialize the counter
while (counter < 5) { //condition - at some point this needs to be false
    console.log("Counter is at: ", counter);
    counter++; //increment - we need to change the counter so the loop can end
}

while (true) {
    console.log("This will run forever unless we break");
    if (5 > 3) {
        break; //we use break to exit the loop
    }
}

counter = 0;//reset the counter
while (counter < array.length) {
    console.log("Element at index " + counter + " is: ", array[counter]); //we access the element at the current counter index
    counter++;
}

while (5 < 3) {
    console.log("This will never run");
}

console.log("=====DO-WHILE LOOP=====");
counter = 0; //reset the counter
do {
    console.log("Counter is at: ", counter); //this will run at least once
    counter++;
} while (counter > 5); //condition is false, but the code inside do{} runs once - 0 will be printed

console.log("=====FOR LOOP=====");
//initialize; condition; increment
for (let i = 0; i < array.length; i++) {
    console.log("Element at index " + i + " is: ", array[i]); //we access the element at the current i index
}

//reverse for loop
for (let j = array.length - 1; j >= 0; j--) {
    console.log("Element at index " + j + " is: ", array[j]); //we access the element at the current j index
}

console.log("=====FOR-OF LOOP=====");
for (let element of array) {
    console.log("Current element is: ", element);
}