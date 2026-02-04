console.log("");
console.log("================ Fetch ================");
// => Fetch API
// => built-in (browser) functionality used to make HTTP requests

// ================ Single Joke Example ================
// ===> First step when working with APIs is to actually now the API and read its documentation !!!
// JOKE API: https://v2.jokeapi.dev/#try-it

const randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";
const getJokeBtn = document.getElementById("get-joke-btn");
const jokeParagraph = document.getElementById("joke-paragraph");

getJokeBtn.addEventListener("click", function () {
    // The first 'then' block handles the response from the server
    fetch(randomJokeUrl)
        .then(function (response) {
            // The 'response' is an object containing the data, but in JSON format, not yet parsed
            console.log(response);
            const parsedResponse = response.json();
            // The '.json()' method parses the JSON data from the response
            return parsedResponse;
        })
        // Once the JSON data is parsed, it's passed to the second 'then' block
        .then(function (jokeData) {
            // Here we add logic for working with the data from the response
            console.log(jokeData);
            jokeParagraph.textContent = jokeData.joke;
        })
        .catch(function (error) {
            // The 'catch' block handles any errors that occur during the fetch request or while parsing
            console.error(error);
        })
        .finally(function () {
            // This code block is executed everytime
            console.log("Everything done :)");
        })
});


// ================ Multiple Jokes Example ================

const getJokesBtn = document.getElementById("get-jokes-btn");
const jokesAmountInput = document.getElementById("jokes-amount");
const jokesContainer = document.getElementById("jokes-container");

function generateJokesList(jokesData) {
    const ul = document.createElement("ul");
    for (const data of jokesData) {
        const li = document.createElement("li");
        li.textContent = data.joke;
        ul.appendChild(li);
    }
    return ul;
}

function getJokes(url) {
    fetch(url)
        .then(function (response) {
            // return response.json();
            const parsedResponse = response.json();
            return parsedResponse;
        })
        .then(function (jokesData) {
            console.log(jokesData);
            const jokesList = generateJokesList(jokesData.jokes);
            jokesContainer.innerHTML = "";
            jokesContainer.appendChild(jokesList)
        })
}

getJokesBtn.addEventListener("click", function () {
    // const amount = Number(jokesAmountInput.value);
    const amount = +jokesAmountInput.value;
    const url = `${randomJokeUrl}&amount=${amount}`
    getJokes(url);
})