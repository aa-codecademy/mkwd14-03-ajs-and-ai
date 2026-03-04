console.log("=================== STATIC MEMBERS ===================");
// => created using the keyword *static* before the method/property definition
// => static method is a method that is associated with the class itself, rather than with instances (objects) created from that particular class
// => this means that you can call a static method without creating an instance of the class, simply by typing the syntax: ClassName.methodName()
// Use cases: 
// => Shared functionality that does not depend on a specific instance
// => Utility functions that operate on multiple instances
// => Helpers, Utility classes etc..

class Employee {
    // ===> Example static property
    static idCounter = 0;  // accessed only from the Employee class itself, not its instances

    constructor(firstName, lastName, age, salary) {
        // this.id = ++this.idCounter; // NaN => ERROR
        this.id = ++Employee.idCounter; // Assign unique Id
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }

    // ===> Example static method
    static getTotalEmployees() {
        return `Total Employees: ${this.idCounter}`
    }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
const employee1 = new Employee();
const employee2 = new Employee();
const employee3 = new Employee();
const employee4 = new Employee();
const employee5 = new Employee();

console.log(bob);
console.log(bob.id); // 1
console.log(bob.idCounter); // undefined

console.log(Employee.getTotalEmployees());

console.log(Employee.idCounter); // 6


console.log("");
console.log("========= String Helper class =========");
// => A Utility Class for Common String Operations

// tHiS is SomE Text ==> This Is Some Text 

class StringHelper {
    static toTitleCase(str = "") {
        let splitString = str.toLowerCase().split(" ");
        for (let index = 0; index < splitString.length; index++) {
            let word = splitString[index];
            splitString[index] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return splitString.join(" ");
    }

    static truncate(str = "", maxLength) {
        return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
    }

    // more string operations ...
}

// "This is very very very very very very very very long string" => "This is very ..."

console.log(StringHelper.toTitleCase("tHiS is SomE TeXt")); // This Is Some Text

const shortenString = StringHelper.truncate("This is very very very very very very very very long string", 10);
console.log(shortenString);



console.log("");
console.log("============== GET / SET ==============");
// => *GETTER* is a method that is used to get the value of a specific property. It is invoked without the use of parentheses when the property is accessed
// => *SETTER* is a method that is used to set the value of a specific property. It is invoked when the property is assigned a new value

// => GETTER SYNTAX: get propertyName() { return this._propertyName; }
// => SETTER SYNTAX: set propertyName(value) { this._propertyName = value; }
// => NOTE: The internal property name inside getters and setters is usually prefixed with an UNDERSCORE (_) to avoid naming conflicts (example: this._propertyName).

// => Use cases:
// 1) data validation
// 2) encapsulation
// 3) access control etc...

// ***NOTE*** => Get & Set work under the hood without the need for explicitly creating them. We create them ONLY in cases where we want to do some checks, validations, restrict access.. of some of the properties


class Product {
    static idCounter = 1;

    constructor(name, price) {
        this.id = Product.idCounter++;
        this.name = name;
        this.price = price;
    }

    // Getter for price - returns formatted price string
    get price() {
        console.log("HELLO FROM PRICE PROPERTY GETTER");
        return `$${this._price.toFixed(2)}`;
    }

    // Setter for price - ensures price is not negative
    set price(value) {
        console.log("HELLO FROM PRICE PROPERTY SETTER", value);
        if (value < 0) {
            console.error("Price cannot be negative !");
            return;
        }
        this._price = value
    }

    // ===> Making the 'id' property a readonly 
    get id() {
        return this._id;
    }

    set id(value) {
        if (!this.id) {
            this._id = value;
        } else {
            console.warn("Cannot reassign id");
        }
    }

}

const product = new Product("Smartphone", 1000)
console.log(product);
console.log(product.name);
product.price = 2000;
console.log(product.price); // $2000.00
product.price = -100; // Invalid update

product.id = 1342424; // Invalid update



console.log("=================== PRIVATE FIELDS ===================");
// => Private fields and methods are declared with a # prefix
// => They are ONLY accessible within the class body - not from instances, subclasses, or anywhere outside
// => They MUST be declared at the top level of the class, outside the constructor

class User {
    // ===> Private fields
    #password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.#password = this.#hashPassword(password);
        this.createdAt = new Date().toLocaleDateString();
    }

    // ===> Private methods - internal use only
    #hashPassword(password) {
        // Simple hash simulation with 'salt & papper'
        return `hashed_${password}_123`;
    }

    changePassword(oldPassword, newPassword) {
        // logic...
    }
}

const user1 = new User("john_doe", "john@mail.com", "securePass1!");
console.log(user1);
// console.log(user1.#password); // ERROR!
