

function getAllUsers() {
    return JSON.parse(localStorage.getItem("users"));
}
function getUserById(id) {
    let usersFromStorage = getAllUsers();
    return usersFromStorage.filter(u => u.id === id);
}
function addNewUser(user) {
    let usersFromStorage = getAllUsers();
    if (!user) 
        throw new Error("UserNotValidError");
    usersFromStorage.push(user);
    localStorage.setItem("users", JSON.stringify(usersFromStorage));
}
function editUser(user) {
    let usersFromStorage = getAllUsers();
    let userToEdit = usersFromStorage.filter(u => u.id === user.id);

    deleteUser(user.id);
    
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
function deleteUser(id) {
    let usersFromStorage = getAllUsers();

    let updatedUsers = usersFromStorage.filter(u => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
}

export default {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    addNewUser: addNewUser,
    editUser: editUser,
    deleteUser: deleteUser
}