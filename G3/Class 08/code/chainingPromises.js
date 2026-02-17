function getDocuments(url) {
    fetch(url) //the url is sent as a param - the fetch returns a PROMISE
        .then(function (response) { //reponse is a complex response object - if the fetch was resolved
            response.json()  //returns a PROMISE - in the then part where we handle one promise, we call another function that also returns a promise
                //we need to handle the second promise as well
                .then(function (data) { //if the json() was resolved
                    console.log(data);
                    // waitSomeTime(4000) //the response will be Promise
                    //     .then(function (successResponse) {
                    //         console.log(successResponse); //here we are waiting for the message from resolve
                    //     })
                    //     .catch(function (errorResponse) {
                    //         console.log(errorResponse); //here we are eaiting for the message from the reject
                    //     })
                    //     .finally(function () {
                    //         console.log("This message will be logged anyway"); //finally is executed always
                    //     });
                })
                .catch(function (jsonError) {
                    console.log(jsonError); //if the json() was rejected
                })
                .finally(function () {
                    console.log("This will be logged always - no matter if the .json was a success or not!")
                })
        })
        .catch(function (errorResponse) {
            console.log(errorResponse); //if the fetch promise was rejected
        })
        .finally(function () {
            console.log("This will be logged always - no matter if the fetch was a success or not!")
        })
}

function waitSomeTime(delayInMiliseconds) {
    //we have some code that causes delay
    //by returning a Promise we tell that there is some delayed code in this function
    //we know that the code will eventually end, but we do not know how (success, error)
    return new Promise((resolve, reject) => {
        if (delayInMiliseconds < 0) {
            reject("The delay cannot be negative"); //promise goes into failure/rejected status (this will be handled in the catch)
        } else {
            setTimeout(function () {
                resolve(`Message after ${delayInMiliseconds} miliseconds`) //the promise goes into the state Fulfilled -> success (this will be handled in the then part)
            }, delayInMiliseconds);
        }
    })
}

getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");