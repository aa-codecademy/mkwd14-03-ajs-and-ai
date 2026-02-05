let button = document.getElementById("getStudentsBtn");
let ul = document.getElementById("students");

button.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json") //returns a promise for eventual completition - a success or an error
        .then(function (response) { //this is connected to fetch - this will be executed if the call was successfull
            //success - response is a whole object response that was sent from server and that contains a lot of information
            console.log(response.body);
            //we need to read the data from the response object, because that is the data that we need to keep on working with
            //but the data in the response is in format json, so we need to parse it
            //when we use fetch, we use .json() for reading and parsing the json data from the response object (we cannot use just json.parse because we have a response object, but not the data itself)
            response.json() //.json also returns a promise, .json() needs to find the data and parse it - we don't know how much time it would taka and if it will be successful, that is why it returns a promise
                //because it returns a promise we need .then() and .catch() for both scenarios
                .then(function (data) { //this is connected to .json() - this will be executed if the call was successfull
                    console.log(data);
                    for(let student of data.students){
                        console.log(student);
                        ul.innerHTML += "<li>" + student + "</li>";
                    }
                })
                .catch(function (jsonError) { //this is connected to the .json() - this will be executed if the call was unsuccessfull
                    console.log(jsonError)
                })

            //  response.text() //if we don't know the content type that is returned, we can use .text() to just return the data and then do our logic ourselves depending on the text that we get (json, xml...)
            //     .then(function (data) { 
            //     console.log(data);
            //     })
            //     .catch(function (jsonError) { 
            //         console.log(jsonError)
            //     })
        }
        )
        .catch(function (error) {//this is connected to the fetch - this will be executed if the call was unsuccessfull - there was an error
            console.log(error);
        })
});