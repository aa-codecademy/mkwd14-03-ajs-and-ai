const users = [];

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
