console.log("================== INHERITANCE EXAMPLES ==================");

function Employee(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary

    this.printInfo = () => console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary: ${this.salary}`);
}

function Developer(firstName, lastName, age, salary, programmingLanguages, database) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary))
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    // this.salary = salary
    this.programmingLanguages = programmingLanguages || [];
    this.database = database;
    this.developFeature = (feature) => console.log(`Developer ${this.firstName} ${this.lastName} is developing new feature ${feature} using ${this.programmingLanguages.join(', ')}`);
}

function Tester(firstName, lastName, age, salary, bugsFound, automationFramework) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary))
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    // this.salary = salary
    this.bugsFound = bugsFound;
    this.automationFramework = automationFramework;
}

function Manager(firstName, lastName, age, salary, department) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary))
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    // this.salary = salary
    this.department = department;
}

const andrej = new Tester("Andrej", "Kichev", 20, 99999, 0, "Selenium");
console.log(andrej);
andrej.printInfo();

const ibro = new Developer("Ibro", "Ismail", 33, 33333, ["JavaScript", "C#", "Java"], "SQL");
console.log(ibro);
ibro.printInfo();
ibro.developFeature("Web API")