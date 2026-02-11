console.log("================= HIGHER ORDER FUNCTIONS (PART 2) =================");

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
console.log("========== every ==========");
// => Tests whether ALL elements in the array pass the condition
// => Returns true if ALL elements satisfy the condition, otherwise false
// => Does NOT modify the original array
// => Usecase: checking uniform conditions across an array

// Example 1: Are all numbers positive ?
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// Example 2: Are all students older than 20 ?
const allOlderThanTwenty = students.every(s => s.age > 20);
console.log(allOlderThanTwenty); // false


console.log("");
console.log("========== some ==========");
// => Tests whether at least ONE element in the array passes the test
// => Returns true if AT LEAST ONE element satisfies the condition, otherwise, false
// => Does NOT modify the original array
// => Usecase: checking if at least one element meets a condition

// Example 1: Is there at least one even number?
const hasEvenNumber = numbers.some(n => n % 2 === 0);
console.log(hasEvenNumber); // true


console.log("");
console.log("========== find ==========");
// => Returns the FIRST element that satisfies the test function
// => Returns undefined if no element is found
// => Does NOT modify the original array
// => Usecase: finding an object or element in an array

// Example 1: Find first even number larger than 20
const firstEvenNumber = numbers.find(n => n % 2 === 0 && n > 20);
console.log(firstEvenNumber); // 10

// Example 2: Find the first student starting on letter 'J'
const firstStudentsStartingOnJ = students.find(s => s.firstName.startsWith("J"));
console.log(firstStudentsStartingOnJ); // { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false }


console.log("");
console.log("========== findIndex ==========");
// => Returns the INDEX of the first element that satisfies the test function
// => Returns -1 if no element is found
// => Does NOT modify the original array
// => Usecase: finding the index of an element

// Example 1: Find the index of the first number greater than 20
const indexGreaterThan20 = numbers.findIndex(n => n > 20);
console.log(indexGreaterThan20); // 2


console.log("");
console.log("========== includes ==========");
// => Checks if an array contains a specific value
// => Returns true if found, otherwise false
// => Does NOT modify the original array
// => Usecase: checking for the presence of a value in an array

// Example 1: Check if 20 exists in numbers array
const hasTwenty = numbers.includes(20);
console.log(hasTwenty); // true

// Example 2: Check if "Marie" is present in students array
const hasMarie = students.includes("Marie");
console.log(hasMarie); // false
// it's better to use 'some' for objects
console.log(students.some(s => s.firstName === "Marie")); // true


console.log("");
console.log("========== flat ==========");
// => Flattens a nested array to a specified depth
// => Returns a new flattened array
// => Does NOT modify the original array
// => Usecase: working with nested arrays, reducing complexity

// Example 1: Flatten a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedOneLevel = nestedArray.flat(1);
console.log(flattenedOneLevel); // [1, 2, 3, 4, [5, 6], 7]

const fullyFlattened = nestedArray.flat(Infinity);
console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6, 7]


console.log("");
console.log("========== flatMap ==========");
// => Combines map() and flat() in one step
// => Returns a new array that is mapped and flattened one level
// => Does NOT modify the original array
// => Usecase: transforming and flattening nested structures in one step

const subjects = [
    { title: "JavaScript", topics: ["Objects", "Functions", "Promises"] },
    { title: "C#", topics: ["LINQ", "Delegates", "Async/Await"] },
    { title: "SQL", topics: ["Joins", "Indexes", "Transactions"] }
];

// Example: Extract all subjects topics
console.log(subjects.map(x => x.topics)); // here we get array of arrays

const allTopics = subjects.flatMap(subject =>
    subject.topics.map(topic => topic)
);
console.log(allTopics);


console.log("");
console.log("========== split (for strings) ==========");
// => Splits a string into an array of substrings based on a delimiter (separating character)
// => Returns a new array
// => Does NOT modify the original string
// => Usecase: breaking text into words

// Example 1: Split a sentence into words
const sentence = "JavaScript is awesome!";
const words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "awesome!"]


console.log("");
console.log("========== join ==========");
// => Joins all elements of an array into a single string
// => Returns a new string
// => Does NOT modify the original array
// => Usecase: converting arrays into strings, formatting output

// Example 1: Join words into a sentence
const joinedSentence = words.join(" ");
console.log(joinedSentence); // "JavaScript is awesome!"


console.log("");
console.log("========== slice ==========");
// => Returns a copy of a portion of an array
// => Does NOT modify the original array
// => Usecase: extracting parts of an array

// Example: Get first 3 numbers
const firstThreeNumbers = numbers.slice(0, 3);
console.log(firstThreeNumbers); // [5, 10, 15]


console.log("");
console.log("========== splice ==========");
// => Changes an array by removing, replacing, or adding elements
// => Returns the removed elements
// => Modifies the original array
// => Usecase: inserting, removing, or replacing elements in an array

// Example 1: Remove two elements starting from index 2
const removedNumbers = numbers.splice(2, 2);
console.log(removedNumbers); // [15, 20]
console.log(numbers); // Original array is modified!


console.log("");
console.log("========== reverse ==========");
// => Reverses the order of elements in an array
// => Returns the reversed array
// => Modifies the original array
// => Usecase: reversing order

// Example 1: Reverse numbers array
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [50, 45, 40, ..., 5]
console.log(numbers); // Original array is modified!

// Example 2: Reverse students array
const reversedStudents = students.reverse();
console.log(reversedStudents);
console.log(students);
