import { User } from "../models/user.js"
import { logInfo } from "./loggerService.js"

// Private array — not exported directly, only accessible through the functions below
const users = [];

const testProperty = "Testing"

function addUser(user) {
    if (!(user instanceof User)) {
        throw new Error(`Enter valid User`);
    }
    if (users.some(u => u.name === user.name)) {
        throw new Error(`User with name ${user.name} already exists`);
    }
    users.push(user);
    logInfo(`User ${user.name} added.`);
}

function getUsers() {
    return [...users];
}

// Default export — bundles multiple functions into a single importable object
// Imported without curly braces: import userService from "..."
export default {
    addUser,
    getUsers,
    testProperty
}