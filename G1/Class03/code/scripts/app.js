
let trainerJson = `{
    "trainerName": "Martin",
    "assistant": "ChatGPT",
    "students": [
        "Mario",
        "Dimitar",
        "Ognen",
        "Damjan"
    ],
    "academy": "Avenga Academy"
}`

console.log(trainerJson);
console.log(typeof trainerJson);

let trainerObject = JSON.parse(trainerJson);
console.log(trainerObject);
console.log(trainerObject.students[0]);

trainerObject.age = 32;

let trainerString = JSON.stringify(trainerObject);
console.log(trainerString);


// Get data from API using Plain JS (the very old method)

// let btn = document.getElementById("sendRequest");
// btn.addEventListener("click", function () {

// this is same as the following
// sometimes we don't need to create a btn variable
// if it is not needed

// })

// document.getElementById("sendRequest")
//     .addEventListener("click", function () {
//         let xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             console.log("Request is sent!");
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 console.log("Request successfull!");
//                 let objectResponse = JSON.parse(xhr.response);
//                 console.log(objectResponse);
//             } else {
//                 console.log(xhr.responseText);
//             }
//         }
//         xhr.open("GET", "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json")
//         xhr.send();
//     })


// Get data from API using jQuery AJAX

// let btn = $("#sendRequest");

// btn.on("click", function () {
//     $.ajax({
//         url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
//         success: function(data) {
//             let dataObject = JSON.parse(data);
//             console.log(dataObject);
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     })
// })


// Get data from API using plain JS with fetch()

document.getElementById("sendRequest")
    .addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(todos) {
                console.log(todos)
                let list = document.getElementById("todos");
                list.innerHTML = "";
                for (let todo of todos) {
                    // we can add our custom property and modify the object if for some reason we need to do that
                    todo.currentTime = new Date().getSeconds();
                    list.innerHTML += `<li>This is todo for user: ${todo.userId} ${todo.title} | Completed: ${todo.completed} - ${todo.currentTime}</li>`
                }
            }).catch(function(error) {
                console.log(error);
            })
    });
