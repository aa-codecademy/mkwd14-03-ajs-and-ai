
// Retrieves all users from browser localStorage and sorts them by ID.
// Returns an empty array if no users exist to prevent null reference errors.
function getAllUsers() {
    let users = JSON.parse(localStorage.getItem("users"));
    return users ? users.sort((a, b) => a.id - b.id) : [];
}
// Fetches a single user by their ID from the stored list in localStorage.
// Returns an array containing the matching user (or empty array if not found).
function getUserById(id) {
    let usersFromStorage = getAllUsers();
    return usersFromStorage.filter(u => u.id === id);
}
// Adds a single new user to storage after validating that the user object is not null.
// Throws an error if the user data is invalid to prevent corrupting the storage.
function addNewUser(user) {
    let usersFromStorage = getAllUsers();
    if (!user) 
        throw new Error("UserNotValidError");
    usersFromStorage.push(user);
    localStorage.setItem("users", JSON.stringify(usersFromStorage));
}
// Stores an entire list of users at once (typically when fetching from an API).
// Validates that the list is not empty before saving to prevent data loss.
function addListOfUsers(users) {
    if (!users || users.length === 0)
        throw new Error("UsersNotValidError");
    localStorage.setItem("users", JSON.stringify(users));
}

// Updates an existing user's properties by removing the old record and saving the modified version.
// Deletes the old entry first to avoid duplicate IDs in storage.
function editUser(user) {
    let usersFromStorage = getAllUsers();
    let userToEdit = usersFromStorage.find(u => u.id === user.id);

    deleteUser(user.id);
    usersFromStorage = getAllUsers();

    userToEdit.id = user.id;
    userToEdit.name = user.name;
    userToEdit.email = user.email;
    userToEdit.username = user.username;
    userToEdit.city = user.city;
    userToEdit.companyName = user.companyName
    userToEdit.street = user.street;

    usersFromStorage.push(userToEdit);

    localStorage.setItem("users", JSON.stringify(usersFromStorage));


}
// Removes a user from storage by filtering out the user with the matching ID.
// Updates localStorage with the new list immediately after deletion.
function deleteUser(id) {
    let usersFromStorage = getAllUsers();

    let updatedUsers = usersFromStorage.filter(u => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
}

export default {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    addNewUser: addNewUser,
    addListOfUsers: addListOfUsers,
    editUser: editUser,
    deleteUser: deleteUser
}