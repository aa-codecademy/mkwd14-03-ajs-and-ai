console.log("================= HIGHER ORDER FUNCTIONS (PART 1) =================");


// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];


console.log("");
console.log("========== forEach ==========");
// => Executes a function for each array element
// => Does NOT return a value (works on the original array)
// => Usecase: logging, iterating over arrays, performing actions on DOM elements, updating objects' properties, etc.

// without forEach
// for (const number of numbers) {
//     console.log(number);
// }

// numbers.forEach(function (num) {
//     console.log(num);
// })

// numbers.forEach(num => console.log(num))

// for (const student of students) {
//     student.isActive = true;
// }

students.forEach(student => student.isActive = true);

console.log(students);


console.log("");
console.log("========== filter ==========");
// => Creates a new array with all elements that pass the test
// => Returns the new filtered array
// => Does NOT modify the original array
// => Usecase: filtering data based on conditions, searching in arrays etc.

// Example 1: Even Numbers
// without filter()
const evenNumbersResult = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbersResult.push(num);
    }
}
console.log(evenNumbersResult);

const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);

// Example 2: Female Students
const femaleStudents = students.filter(student => student.gender === "Female");
console.log(femaleStudents);


console.log("");
console.log("========== map ==========");
// => Creates a new array by applying a function to every element in the array
// => Returns the new transformed array
// => Does NOT modify the original array
// => Usecase: transforming data, creating new properties, mapping to specific objects etc.

// Example 1: Squared Numbers 
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Example 2: Get Students full names
const studentFullNames = students.map(s => `${s.firstName} ${s.lastName}`);
console.log(studentFullNames);

// Example 3: Get Students age
const studentsAge = students.map(student => student.age);
console.log(studentsAge);

// Example 4: Get Students Name and Age (BONUS EXAMPLE)

// const studentsNameAndAgeError = students.map(student => { student.firstName, student.age })
// console.log(studentsNameAndAgeError); // WON'T WORK

const studentsNameAndAge = students.map(student => ({ firstName: student.firstName, age: student.age }))
console.log(studentsNameAndAge); // however, you would typically create new instances from existing constructor function / class



// ===> Combining filter() and map()
// EXAMPLE: Get students full names of all the female students
// const femaleStudentsNames = students.map(s => `${s.firstName} ${s.lastName}`).filter(s => s.gender === "Female");
// console.log(femaleStudentsNames); // EMPTY

const femaleStudentsNames = students
    .filter(s => s.gender === "Female")
    .map(s => `${s.firstName} ${s.lastName}`);

console.log(femaleStudentsNames);


console.log("");
console.log("========== reduce ==========");
// => Reduces an array to a single value by applying a function to each of the elements
// => Returns the accumulated value
// => Does NOT modify the original array
// => Usecase: calculating totals, aggregating data, grouping elements, finding extremes, etc.

// Example 1: Get Sum & Average of numbers
const sumOfNumbers = numbers.reduce((accumulate, current) => accumulate + current, 0);
// 0 => initial value
console.log(sumOfNumbers);

const average = sumOfNumbers / numbers.length;
console.log(average);

let accumulate = 0;
for (const num of numbers) {
    accumulate += num;
}
console.log(accumulate);

// Example 2: Get average age of students
const studentsAverageAge = students.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0) / students.length;
console.log(studentsAverageAge);

// Step by step...
const studentsAverageAgeDebug = students.reduce((previousValue, currentValue) => {
    // debugger;
    let result = 0;
    result = previousValue + currentValue.age
    return result
}, 0) / students.length;

console.log(studentsAverageAgeDebug);


console.log("");
console.log("========== sort ==========");

// Example 1: Sorting numbers
const numbersSort = [-4, 10, 34, -25, 5, 33, 100, -1000];
const sortedNumbersAscending = numbersSort.sort((a, b) => a - b); // ASC
console.log(sortedNumbersAscending);
console.log(numbersSort);

const sortedNumbersDescending = numbersSort.sort((a, b) => b - a); // DESC
console.log(sortedNumbersDescending);

// Example 2: Sort students by age 
const sortedByAgeAsc = students.sort((a, b) => a.age - b.age)
console.log(sortedByAgeAsc);

console.log(students);

// Example 3: Sort students by name
// ===> SORTING WITH STRINGS
// => must use localeCompare() method

students.sort((a, b) => a.firstName.localeCompare(b.firstName)) // ASC
console.log(students);

students.sort((a, b) => b.firstName.localeCompare(a.firstName)) // DESC


console.log("");
console.log("========== toSorted ==========");

const names = ["Bob", "John", "Ana", "Greg"];

const namesAsc = names.toSorted((a, b) => a.localeCompare(b))

console.log(names);
console.log(namesAsc);

// Sorting numbers with toSorted
const numbersToSort = [-4, 10, 34, -25, 5, 33, 100, -1000];
const sortedAscending = numbersToSort.toSorted((a, b) => a - b);
console.log("Sorted:", sortedAscending);
console.log("Original unchanged:", numbersToSort); // Original array remains unsorted