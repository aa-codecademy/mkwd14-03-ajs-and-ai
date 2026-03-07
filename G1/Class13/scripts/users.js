import userService from './modules/userService.js';
import storageService from './modules/storageService.js';


let html = {
    loadBtn: document.getElementById("loadUserBtn"),
    saveBtn: document.getElementById("saveUserBtn"),
    usersTableBody: document.querySelector("#usersTable tbody"),
    inputSearch: document.getElementById("userId"),
    inputFullName: document.getElementById("name"),
    inputEmail: document.getElementById("email"),
    inputUsername: document.getElementById("username"),
    inputcompanyName: document.getElementById("companyName"),
    inputStreet: document.getElementById("street"),
    inputCity: document.getElementById("city"),

};

function renderUsers(userList) {
    if (!html.usersTableBody)
        return;

    html.usersTableBody.innerHTML = "";

    userList.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.city}</td>
            <td>${user.street}</td>
            <td>${user.companyName}</td>
            <td>
                <button type="button" class="btn btn-sm btn-primary me-1" data-action="edit" data-id="${user.id}">Edit</button>
                <button type="button" class="btn btn-sm btn-danger" data-action="delete" data-id="${user.id}">Delete</button>
            </td>
        `;

        html.usersTableBody.appendChild(row);
    });
}

function handleTableClick(event) {
    const button = event.target.closest("button");
    if (!button || !html.usersTableBody.contains(button))
        return;

    const action = button.dataset.action;
    const id = parseInt(button.dataset.id, 10);
    if (isNaN(id))
        return;

    if (action === "delete") {
        storageService.deleteUser(id);
        loadUsers();
    }

    if (action === "edit") {
        const users = storageService.getAllUsers() || [];
        const user = users.find(u => u.id === id);
        if (!user)
            return;

        html.inputSearch.value = user.id;
        html.inputFullName.value = user.name;
        html.inputEmail.value = user.email;
        html.inputUsername.value = user.username;
        html.inputCity.value = user.city;
        html.inputStreet.value = user.street;
        html.inputcompanyName.value = user.companyName;
    }
}

function loadUsers() {
    const users = storageService.getAllUsers() || [];
    renderUsers(users);
}

html.loadBtn.addEventListener("click", function () {
    const searchInput = html.inputSearch.value;
    let users = storageService.getAllUsers() || [];

    if (searchInput > 0) {
        users = storageService.getUserById(parseInt(searchInput, 10));
    }

    renderUsers(users);
});

html.usersTableBody.addEventListener("click", handleTableClick);

html.saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let users = storageService.getAllUsers() || [];

    if (html.inputSearch.value > 0) {
        let userToEdit = storageService.getUserById(parseInt(html.inputSearch.value));
        storageService.editUser(userToEdit[0]);
    } else {
        let user = {
            id: users.length + 1,
            name: html.inputFullName.value,
            email: html.inputEmail.value,
            username: html.inputUsername.value,
            street: html.inputStreet.value,
            city: html.inputCity.value,
            companyName: html.inputcompanyName.value,
        }

        storageService.addNewUser(user);
    }
    loadUsers();
});
