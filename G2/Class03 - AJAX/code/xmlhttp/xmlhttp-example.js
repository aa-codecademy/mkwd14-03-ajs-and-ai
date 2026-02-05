console.log("");
console.log("================ Using XMLHttpRequest ================");
// The `XMLHttpRequest` object is an older way for establishing interaction with servers
// It allows you to send HTTP or HTTPS requests directly from the browser and receive responses

// 1) Create an instance of the XMLHttpRequest object 
const xhr = new XMLHttpRequest();

// 2) Configure the HTTP request using the `open` method 
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

// 3) Define the onload callback function, which executes when the request is completed
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("The request succeeded!");
        const parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse);
    } else {
        console.log("The request failed!");
        console.log(xhr.responseText);
    }
}

// 4) Send the HTTP request to the server
xhr.send();