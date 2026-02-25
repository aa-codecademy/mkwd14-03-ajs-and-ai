console.log("================== INHERITANCE EXAMPLES (Classes) ==================");

// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary

//     this.printInfo = () => console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary: ${this.salary}`);
// }

class Employee {
    constructor(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary
    }

    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary: ${this.salary}`)
    }
}

class Developer extends Employee {
    constructor(firstName, lastName, age, salary, programmingLanguages, database) {
        super(firstName, lastName, age, salary);
        this.programmingLanguages = programmingLanguages;
        this.database = database;
    }

    developFeature(feature) {
        console.log(`Developer ${this.firstName} ${this.lastName} is developing new feature ${feature} using ${this.programmingLanguages.join(', ')}`);
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

class Manager extends Employee {
    constructor(firstName, lastName, age, salary, department) {
        super(firstName, lastName, age, salary);
        this.department = department;
    }

    organiseMeeting() {
        console.log(`The Manager ${this.firstName} is organising a meeting for the ${this.department} department`);
    }
}

const dev = new Developer("Bob", "Bobsky", 32, 23234, ["JavaScript", "C#"], "SQL");
dev.developFeature("Portfolio Website");