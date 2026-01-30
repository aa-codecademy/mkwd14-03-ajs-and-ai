// Create a form with First Name, Last Name, Age, Email
// Create a Student generator function
// On submit:
// Create a student object
// Add it to a database array
// Log the database
// Clear the inputs

//get the elements
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let submitButton = document.getElementById("submitBtn");

//database array
let studentDatabase = [];

//student generator function
function Student(firstName, lastName, age, email) {
    //this.firstName = firstNameInput.value;
    this.firstName = firstName? firstName : "Unnamed";
    this.lastName = lastName? lastName : "Unnamed";
    this.age = age; //we cannot set default age to 0 because 0 is a falsy value
    this.email = email ? email : "no email";
}

submitButton.addEventListener("click", function () {
    //validation
    if (!firstNameInput.value || !lastNameInput.value || !ageInput.value || !emailInput.value) {
        console.log("Please fill in all fields.");
        return; //do not proceed if validation fails
    }

    let student = new Student(
        firstNameInput.value,
        lastNameInput.value,
        ageInput.value,
        emailInput.value
    );

    studentDatabase.push(student);
    console.log(studentDatabase);
    //clear inputs
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
});

let hardcodedStudent = new Student("John", "Doe", 20, "john@test.com");