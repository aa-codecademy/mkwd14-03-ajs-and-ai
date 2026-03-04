console.log("========== Hello from app.js ==========");

// ===> Create users
let john = new User("John", "john@example.com", 25);
let bob = new User("Bob", "bob@example.com", 30);

// ===> Add users
try {
    logInfo("Adding Users started");
    addUser(john);
    addUser(bob);
    addUser(bob);
} catch (error) {
    // ===> Handle potential errors
    logError(error.message);
} finally {
    logInfo("Adding Users finished");
}

// ===> Get and display users
const allUsers = getUsers();
console.log("All users:", allUsers);
