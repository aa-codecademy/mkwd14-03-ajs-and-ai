console.log("");
console.log("================ Using jQuery ajax ================");

const getJokeBtn = $("#get-joke-btn");
const jokesContainer = $("#jokes-container");

function getJoke() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        method: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response);
            jokesContainer.html(`
                <p>${response.value}</p>
                <img src="${response.icon_url}" alt="Chuck Norris Icon" style:"width: 50px; height: 50px">
            `);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

getJokeBtn.click(getJoke);