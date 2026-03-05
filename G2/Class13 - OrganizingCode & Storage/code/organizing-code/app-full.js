/*
    ============================================================
    ⚠️ DEMO PURPOSES ONLY — DO NOT USE THIS APPROACH 
    ============================================================
    > This file intentionally puts everything in one place to 
    demonstrate what code looks like BEFORE being split into modules
    > This is the WORST way to organize JavaScript because:
        - Everything pollutes the global scope
        - No separation of concerns - models, services and logic are tangled
        - Nothing is reusable or importable by other files
        - Hard to maintain and scale as the project grows
    >>> See app.js for the correct modular approach <<<
    ============================================================
*/

class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const users = [];

function logInfo(message) {
    const dateTime = new Date();
    console.log(`[INFO][${dateTime.toLocaleString()}]: ${message}`);
}

function addUser(user) {
    if (users.some(u => u.name === user.name)) {
        throw new Error(`User with name ${user.name} already exists`);
    }
    users.push(user);
    logInfo(`User ${user.name} added.`);
}

function getUsers() {
    return [...users];
}

function logError(error) {
    const dateTime = new Date();
    console.error(`[ERROR][${dateTime.toLocaleString()}]: ${error}`);
}

// ===> Create user instances
let john = new User("John", "john@example.com", 25);
let bob = new User("Bob", "bob@example.com", 30);

// ===> Add users, handling duplicates gracefully
try {
    logInfo("Adding Users started");

    addUser(john);
    addUser(bob);
    addUser(bob);

} catch (error) {
    logError(error.message);
} finally {
    logInfo("Adding Users finished");
}

// ===> Retrieve and display all users
const allUsers = getUsers();
console.log("All users:", allUsers);