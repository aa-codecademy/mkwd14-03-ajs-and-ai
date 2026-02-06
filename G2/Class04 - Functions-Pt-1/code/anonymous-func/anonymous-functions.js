console.log("===================== ANONYMOUS FUNCTIONS =====================");
// Anonymous functions are functions that are defined without a name
// Used when the function does not need to be reusable

// ============= Anonymous function in an event listener  =============

document.querySelector("button").addEventListener("click", function () {
    console.log("Button clicked!");
});

// ============= Anonymous function in a fetch  =============

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (pavel) { // pavel => placeholder for the value
        console.log(pavel);
    })
    .catch(function (error) {
        console.log(error);
    });

// ============= Anonymous function in a variable  =============

const greet = function (name) {
    console.log(`Hello ${name}`);
}

console.log(typeof greet); // function
greet("Bob");
