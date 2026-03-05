console.log("============== Local Storage ==============");
// *localStorage* provides persistent storage in the browser (~5MB)
// Data is stored with no expiration time and remains available even after the browser is closed or the user navigates away from the page

// Usecases:
// => saving user preferences
// => tracking user/app state
// => storing authentication info (token), etc...

console.log(localStorage)

const bob = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 23
}

// ===> Storing data
// NOTE: When working with object, you must first serialize them (transfer them into JSON format)
localStorage.setItem("user", JSON.stringify(bob))
localStorage.setItem("theme", "dark");

// ===> Retrieving data
const currentUserJson = localStorage.getItem("user")
console.log(currentUserJson);  // user json string

const currentUser = JSON.parse(currentUserJson)
console.log(currentUser);  // user obj
console.log(currentUser.firstName);

console.log(localStorage.getItem("theme"));

// ===> Removing data
// localStorage.removeItem('theme');

// ===> Clearing all data
// localStorage.clear();


// sessionStorage.setItem("session", 1)