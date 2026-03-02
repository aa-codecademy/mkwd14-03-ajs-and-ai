console.log("================== CLASSES ==================");
// => JavaScript was not built with OOP in mind
// => Objects, prototypes and constructor functions were the way to use OOP in the past
// => From ES6 forward we have new features specifically designed with OOP in mind
// => Classes provide a more structured and object-oriented way to define objects compared to traditional constructor functions
// => They consist of properties, methods, constructor, static members, getters, setters 

// ===> Traditional way, using function constructor
// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.isActive = true;
//     this.printInfo = function () {
//         console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
//     }
// }

// ===> Using ES6 class
class Employee {
    // => Field declarations are optional when properties are assigned in the constructor
    // firstName;
    // lastName; 
    // age; 
    // salary;
    isActive = true;

    // ===> Constructor 
    // => A special method that runs when an object is created
    constructor(firstName, lastName, age, salary) {
        // ===> Properties
        console.log("Hello from ctor");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary
    }

    // ===> Methods
    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }

    greetColleague(name) {
        console.log(`${this.firstName} says hello to ${name}`);
    }
}

const employee = new Employee("Bob", "Bobsky", 32, 3000);
console.log(employee);
employee.printInfo();


console.log("");
console.log("================== INHERITANCE WITH CLASSES ==================");
// Inheritance allows a class to extend another class, inheriting its properties and methods
// The 'extends' keyword is used to create a subclass that inherits from a parent class

// ===> Inheritance using constructor function
// function Developer(firstName, lastName, age, salary, programmingLanguages) {
//     Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
//     this.programmingLanguages = programmingLanguages ?? [];
//     this.code = function () {
//         console.log(`${this.firstName} is doing magic :D`);
//     }
// }

// ===> Inheritance using CLASSES
// => The 'Developer' class extends 'Employee', meaning it inherits all its properties and methods
// => Employee is also called a parent class (base class, super class)

class Developer extends Employee {
    constructor(firstName, lastName, age, salary, programmingLanguages) {
        super(firstName, lastName, age, salary);
        this.programmingLanguages = programmingLanguages || [];
    }

    code() {
        console.log(`${this.firstName} is doing magic :)`);
    }
}

class Tester extends Employee {
    constructor(firstName, lastName, age, salary, bugsFound) {
        super(firstName, lastName, age, salary);
        this.bugsFound = bugsFound;
    }

    testSoftware() {
        console.log(`${this.firstName} is testing the software and found ${this.bugsFound}.`);
    }
}

class AutomationTester extends Tester {
    constructor(firstName, lastName, age, salary, bugsFound, framework) {
        super(firstName, lastName, age, salary, bugsFound);
        this.framework = framework;
    }

    writeAutomationTests() {

    }
}

const dev = new Developer("John", "Johnsky", 23, 3000, ["JavaScript", "C#"]);
const tester = new Tester("Bob", "Johnson", 32, 5000, 25);
const automation = new AutomationTester("Boba", "Johnson", 25, 5000, 25, "Cypress")

console.log(dev);
console.log(tester);
console.log(automation);

// dev.code();
// dev.greetColleague("Bob");
// dev.printInfo();


console.log("");
console.log("=========== Check if an object is an instance of a class ===========");
// The 'instanceof' operator is used to check whether an object is an instance of a specific class

console.log(dev instanceof Developer); // true
console.log(dev instanceof Employee); // true
console.log(dev instanceof Object); // true
console.log(dev instanceof Tester); // false
