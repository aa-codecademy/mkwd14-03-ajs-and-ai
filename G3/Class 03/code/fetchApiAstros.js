let button = document.getElementById("getAstrosBtn");

button.addEventListener("click", function () {
    fetch("http://api.open-notify.org/astros.json") //returns a promise
        .then(function (response) { //this response is an object
            //if the call was success
            response.json() //we want to get and parse the data from the response that was returned from the server - .json() also returns a promise
                .then(function (data) {
                    //if .json() was a success

                    //here the data is js objects
                    for (let person of data.people) {
                        console.log(person.name);
                    }
                })
                .catch(function (errorJson) { //if an error occurs during retrieving or parsing the data from the response
                    console.log(errorJson);
                })
        })
        .catch(function (errorFetch) { //if an error occurs during making the call - not found, wrong url, no permission etc
            console.log(errorFetch);
        })
})