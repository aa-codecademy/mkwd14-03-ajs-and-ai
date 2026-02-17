console.log("==================== Callback Functions ====================");
// => function that is passed as an argument to another function and is expected to be executed after some async operation is completed

// Common use-cases:

// 1) setTimeout
function handleTimeout() {
    console.log("Hello after 3 seconds!");
}

// setTimeout(() => {
//     console.log("Hello after 3 seconds!");
// }, 3000);  

setTimeout(handleTimeout, 3000);

handleTimeout();

// 2) Event Handling
document.querySelector("#clickMeBtn").addEventListener("click", (e) => {
    console.log(e.target.id);
})

console.log("The End :D");


// 3) Asynchronous Operations
function performAsyncOperation(callback) {
    // debugger;
    console.log("Async operation started")
    setTimeout(() => {
        const result = "Async operation completed";
        callback(result)
    }, 2000);
    console.log("... Processing ...");
}

// performAsyncOperation(console.log);


// 4) Higher Order Functions callbacks
let testArray = [1, 2, 3, 4, 5, 6, 7];
// testArray.forEach(n => console.log(n));
// n => console.log(n)   ==> callback function


// 5) Making request to an API
function renderDataFromApi(url, renderFunctionCallback) {
    // the anonymous function in .then & .catch, also a callback
    fetch(url)
        .then(response => response.json())
        .then(result => renderFunctionCallback(result))
        .catch(error => console.error(error))
}

const USER_URL = "https://dummyjson.com/users/1";
function showDataInConsole(data) {
    console.log(data);
}

renderDataFromApi(USER_URL, showDataInConsole)
renderDataFromApi(USER_URL, (user) => console.log(user))
renderDataFromApi(USER_URL, console.log);
renderDataFromApi(USER_URL, function (data) {
    console.log(data)
});
renderDataFromApi(USER_URL, data => {
    console.log(data)
});
// they are all doing the same thing, the only difference is the SYNTAX !


console.log("");
console.log("==================== Callback Functions vs Functions as an argument ====================");
// Callback => expected to be executed later, usually after an asynchronous operation or an event (executed asynchroniously)
// Function as an argument => not expected to be executed later (executed synchroniously)

function someAsyncOperation(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
    console.log("Processing...");
}
someAsyncOperation(() => console.log("GREAT JOB !!!"))

function functionArguments(func1, func2) {
    console.log("Executing functions ...");
    func1();
    func2();
}
functionArguments(() => console.log("Hello from func1"), () => console.log("Hello from func2"))