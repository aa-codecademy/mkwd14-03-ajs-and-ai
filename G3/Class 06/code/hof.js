function Student (fName, lName, age, averageGrade){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [
    new Student("Bob", "Johnson", 20, 5),
    new Student("Petko", "Petkovski", 23, 4),
    new Student("Marko", "Markovski", 17, 3)
];

//what we usually used - for-of
for(let student of students){
    console.log(`${student.firstName} ${student.lastName}`);
}

function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}

for(let student of students){
    logFullName(student);
}

//HOF - forEach

console.log("====forEach======");

students.forEach(logFullName); //for each member of student, the logFullName function will be called and in each iteration the current student will be sent as an argument
students.forEach(s => console.log(`${s.firstName} ${s.lastName} ${s.age}`)); //s will be each member of the students array (the current student of the iteration)
students.forEach(function(student){console.log(`${student.firstName} ${student.lastName} ${student.age}`) });

// function print(student) {
//     logFullName(student);
// }
// students.forEach(s => logFullName(s));  //this is as if we have the print function - one arrow function that in its body calls another function

//filter - does not change the original array, it returns a new array with filtered values according to the condition that we wrote
console.log("====filter======");
function checkAge(student){
    return student.age > 18;
}

let studentsAbove18 = students.filter(checkAge);
console.log(studentsAbove18);

let array = [2, 3, "G3", 5];

let numbersArray = array.filter(element => typeof(element) === "number");
console.log(numbersArray);

console.log("====chaining======");
students //here we have the original students array
.filter(s => s.age > 18) //the result of filter will be a new array only with the students that are above 18 - so from now on we work with that array
.forEach(logFullName); //here forEach will be called on the filtered array

//same as
let studentsAboveEighteen = students.filter(s => s.age > 18);
studentsAboveEighteen.forEach(logFullName);

//map - returns a new arrat that contains what we chose in the function that was a param in the map
console.log("====map======");

let studentsAvgGrades = students.map(s => s.averageGrade); //it selects (maps) only the avg grades, the new result array will contain all the students avg grades
console.log(studentsAvgGrades);

//chaining
let studentsDescription = [];
for(let student of students){
    if(student.averageGrade > 3){
        studentsDescription.push(`${student.firstName} ${student.lastName} - ${student.age}`);
    }
}
console.log(studentsDescription); //this is an array of strings

let studentDesc = students //here we have the original array of students
.filter(s => s.averageGrade > 3) //at this moment we have a filtered array of students
.map(student => `${student.firstName} ${student.lastName} ${student.age}`) //here we use the map function on the already filtered array and the result of this map function is another array, but now it only consists of strings with the description
.forEach(sd => console.log(sd)); //here we are working with the student description array (only strings) and we iterate through it and print each string


let studentFullNameLength = students
.map(s => `${s.firstName}${s.lastName}`) //here the result will be an array of strings that consists of students full name
.map(sf => sf.length); //here we work with the array of strings and the result array will be an array of numbers

function returnStudentInfo(student){
    return `${student.firstName} ${student.lastName}`;
}

//we want to print out the length of the info of all studnets whose last name has more than 5 letters
students //here we have the original array of students
.filter(s => s.lastName.length > 5) //here we will have all students whose last name has more than 5 letters
.map(returnStudentInfo) //here we have an array of the info of all students whose last name has more than 5 letters
.map(si => si.length) //here we are getting the length of the strings of the previous array with the strings with info about the students - this will be an array of numbers
.forEach(sl => console.log(sl)); //here we iterate through the array of lengths 

//we need to filter the objects before mapping - THE ORDER IN THE CHAINING IS VERY IMPORTANT
// students
// .map(returnStudentInfo) //here we will have only strings with students info
// .filter(s => s.lastName.length > 5) //here lastName is not defined, because here we are working with the previous array of strings - we are not working with the objects students anymore after the map


console.log("====reduce======");
let studentAvgGrades = students.map(s => s.averageGrade); //studentAvgGrades is an array of numbers - all the avg grades

function aggregate(currentSum, grade){
    currentSum += grade;
}

//reduce has two params
//1. a function
//2. an inital value
//the function (the first param of reduce) takes the initial value as first param and each member of the array as second param
console.log(studentAvgGrades.reduce(aggregate, 0));

let sum = students.filter(s => s.averageGrade > 1)
.map(s => s.averageGrade)
.reduce(aggregate, 0);

function multiply(result, grade){
    result *= grade;
}

// let multResult = 1;
// function multiply(grades){
//     for(let grade of grades){
//     multResult *= grade;
//     }
//     return multResult;
// }

let mul = students //here we have the original array
.filter(s => s.averageGrade > 1) //here we have a filtered array of students
.map(s => s.averageGrade) //here we work with the filtered array and the result is an array of numbers - the avgGrades
.reduce(multiply, 1); //here we work with the mapped array (of avgGrades) and her the initial value must be 1, it cannot be 0 because the result would always be 0 - the initial value depends on the logic


numbers = [1,2,3,4,5,6];

let concatenate = function(currentResult, currentValue){
    debugger
    return currentResult += currentValue;
}

let sumOfNumbers = numbers.reduce(concatenate, 0); 
console.log(sumOfNumbers); //here we will have a number that is the sum of all the numbers

let concatenatedNumbers = numbers.reduce(concatenate, "");
console.log(concatenatedNumbers); //here the result will be a string 123456