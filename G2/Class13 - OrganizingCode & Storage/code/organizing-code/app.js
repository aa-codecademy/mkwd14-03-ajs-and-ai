// import { user } from "./models/user.js" // has to match the name of the export
import { User } from "./models/user.js"
// import { logError, logInfo } from "./services/loggerService.js"
import * as logger from "./services/loggerService.js"
import userService from "./services/userService.js"; // export *default* has to be set in userService.js

console.log("========== Hello from app.js ==========");

// ===> Create users
let john = new User("John", "john@example.com", 25);
let bob = new User("Bob", "bob@example.com", 30);

// ===> Add users
try {
    // logInfo("Adding Users started");
    logger.logInfo("Adding Users started");
    userService.addUser(john);
    userService.addUser(bob);
    userService.addUser(bob);
} catch (error) {
    // ===> Handle potential errors
    // logError(error.message);
    logger.logError(error.message);
} finally {
    // logInfo("Adding Users finished");
    logger.logInfo("Adding Users finished");
}

// ===> Get and display users
console.log(userService.testProperty);
const allUsers = userService.getUsers();
console.log("All users:", allUsers);
