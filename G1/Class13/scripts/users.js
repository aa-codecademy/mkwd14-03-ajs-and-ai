import userService from './modules/userService.js';
import storageService from './modules/storageService.js';

// Select DOM elements for later use, reducing the need for repeated document queries.
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

// Renders a list of users by creating table rows dynamically.
// Clears existing content and generates HTML for each user with edit/delete buttons.
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

}

// Handles edit and delete actions triggered by clicking buttons in the user table.
// ASYNC because delete requires refreshing the full user list from storage (which may trigger an API fetch).
// Flow: 
// 1) Validate that event that came from a button inside the table; 
// 2) Get action type (data-action) and user ID (data-id) from button attributes;
// 3) If delete: remove user, reload all users asynchronously, then re-render; 
// 4) If edit: populate form fields with user data.
// Using event delegation (addEventListener on tbody) is efficient—catches all button clicks without attaching listeners to each row.
async function handleTableClick(event) {
    const button = event.target.closest("button");
    if (!button || !html.usersTableBody.contains(button))
        return;

    const action = button.dataset.action;
    const id = parseInt(button.dataset.id, 10);
    if (isNaN(id))
        return;

    if (action === "delete") {
        storageService.deleteUser(id);
        let users = await loadUsers();  
        renderUsers(users);
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

}

// Loads users from localStorage; if none exist, fetches from API and store the result in localStorage.
// ASYNC because fetching from an external API (userService.getAll()) requires waiting for the network response.
// Returns the user array so callers can work with the fresh data immediately.
async function loadUsers() {
    let users = storageService.getAllUsers();
    if (!users || users.length === 0) {
        users = await userService.getAll();
        storageService.addListOfUsers(users);
    }
    return users;
}

}

// Resets all input fields to empty strings, preparing the form for new user entry.
function clearInputFields() {
    html.inputSearch.value = "";
    html.inputFullName.value = "";
    html.inputEmail.value = "";
    html.inputUsername.value = "";
    html.inputCity.value = "";
    html.inputStreet.value = "";
    html.inputcompanyName.value = "";
}

}

// Extracts and returns user input values from the form fields as a single object.
// Allows other functions to access form data consistently without directly accessing the DOM multiple times.
function collectInputData() {
    return {
        name: html.inputFullName.value,
        email: html.inputEmail.value,
        username: html.inputUsername.value,
        city: html.inputCity.value,
        street: html.inputStreet.value,
        companyName: html.inputcompanyName.value,
    };
}

}

// Checks that all required user fields contain non-empty values.
// Returns false and alerts the user if any field is missing; called before saving new users to prevent invalid records.
function validateInputData(user) {
    if (!user.name || !user.email || !user.username || !user.city || !user.street || !user.companyName) {
        alert("All fields are required!");
        return false;
    }
}

// Event listener for the "Load Users" button:
// 1) Gets the search input value (user ID); 
// 2) Loads users from storage (or API if storage is empty); 
// 3) If search input is provided, filters users by ID; 
// 4) Renders the resulting user list in the table.
html.loadBtn.addEventListener("click", async function () {
    const searchInput = html.inputSearch.value;
    let users = await loadUsers() || [];

    if (searchInput > 0) {
        users = storageService.getUserById(parseInt(searchInput, 10));
    }

    renderUsers(users);
});

// Event listener for clicks on the user table body:
// Delegates to handleTableClick which determines if an edit or delete button was clicked and acts accordingly.
html.usersTableBody.addEventListener("click", handleTableClick);

// Event listener for the "Save User" button:
// 1) Prevents default form submission behavior; 
// 2) Loads current users from storage;
// 3) If search input has a value, treats it as an edit operation: collects form data, sets the ID, and calls editUser; 
// 4) If search input is empty, treats it as a new user: validates form data, collects it, and calls addNewUser;
// 5) Clears form fields, reloads users from storage, and re-renders the table to reflect changes.
html.saveBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    let users = await loadUsers() || [];

    if (html.inputSearch.value > 0) {
        let userToEdit = collectInputData();
        userToEdit.id = parseInt(html.inputSearch.value, 10);
        storageService.editUser(userToEdit);
    } else {
        if (!validateInputData(collectInputData()))
            return;
        let user = collectInputData();
        storageService.addNewUser(user);
    }
    clearInputFields();
    users = await loadUsers();
    renderUsers(users);
});


