let dog = {
    dogName : "Barnie",
    dogColor: "brown",
    dogAge : 5
};

console.log(dog.dogName); //we need to access the dogName using dot notation

//destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
//object destructuring- each property of the object is mapped in a corresponding variable with the same name as the property
let {dogName, dogColor, dogAge} = dog; //we are creating variables with the same name as the properties of the object and assigning them the corresponding values from the object
console.log("after destructuring");
console.log(dogName);
console.log(dogColor);
console.log(dogAge);

function Dog(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;
}

let anotherDog = new Dog("Max", "black", 3);
const {name, color} = anotherDog; //we are destructuring the properties of the anotherDog object into variables with the same name
console.log(name);
console.log(color);
console.log(anotherDog.color); 
console.log(anotherDog.age); //we can still access the age property using dot notation since we didn't destructure it into a variable

let anotherDogColor = anotherDog.color; //instead of doing it like this, we can use destructuring to get the color property directly into a variable

let student = {
    firstName   : "John",
    lastName    : "Doe",
    age         : 20,
    grades: {
        JavaScript: 85,
        Python: 90,
        Java: 80
    }
}

//if we want to get the firstName and lastName properties into variables with different names, we can do it like this
const { firstName: fName, lastName: lName } = student;

function PrintStudent(student){
    console.log(student.firstName);
    console.log(student.lastName);
    console.log(student.age);
    console.log(student.grades.JavaScript);
}

//{firstName, lastName, age, grades: {JavaScript, Python, Java}}
//in firstName we will have the value of student.firstName
//in JavaScript we will have the value of student.grades.JavaScript since we are destructuring the grades object as well
function displayInfo({firstName, lastName, age, grades: {JavaScript, Python, Java}}){ //we are destructuring the student object in the function parameters to get the properties we need directly into variables
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(JavaScript); //students.grades.JavaScript is now just JavaScript since we destructured it in the function parameters
    console.log(Python);
    console.log(Java);
}

displayInfo(student);

console.log("====array destructuring====");

let rgb = [255, 0, 0]; //we have an array with three values representing the red, green and blue components of a color

let [red, green, blue] = rgb; //we are destructuring the array into three variables red, green and blue which will have the corresponding values from the array
console.log(red); //255
console.log(green); //0
console.log(blue); //0

let colors = ["red", [255, 0, 255], "rgb(255, 0, 255)", "#FF00FF"];
let [colorName, [r, g, b], rgbString, hex] = colors; //we are destructuring the colors array into four variables colorName, r, g, b, rgbString and hex
console.log(colorName); //red
console.log(r); //255
console.log(g); //0
console.log(b); //255
console.log(rgbString); //rgb(255, 0, 255)
console.log(hex); //#FF00FF

console.log("====spread operator====");
let array = [1, 2, 3, 4, 5, 6];

function sum(a, b, c){
    debugger
    let arg = arguments;
    return a + b + c;
}

let result = sum(array[0], array[1], array[2]); //we are passing the elements of the array as separate arguments to the sum function
console.log(result); //6

let spreadResult = sum(...array); //we are using the spread operator to pass the elements of the array as separate arguments to the sum function
console.log(spreadResult); //6