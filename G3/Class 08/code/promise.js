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

//what we get as response is a promise that we will handle in then or in catch
//we handle in then everything that was passed on in the resolve part (only if it is a success)
//we handle in the catch part everything that was passed on in the reject part (only if there was an error)
//in the finally part we handle the things that we want to be executed always - no matter if it was a success or there was an error
//because the value of our argument is > 0 -> this promise will be resolved - only the then part and the finally part will be executed
waitSomeTime(4000) //the response will be Promise
    .then(function (successResponse) {
        console.log(successResponse); //here we are waiting for the message from resolve
    })
    .catch(function (errorResponse) {
        console.log(errorResponse); //here we are eaiting for the message from the reject
    })
    .finally(function () {
        console.log("This message will be logged anyway"); //finally is executed always
    });

console.log("Hello!");

//because the value of our argument is < 0 -> this promise will be rejected - only the catch part and the finally part will be executed
waitSomeTime(-4000) //the response will be Promise
    .then(function (successResponse) {
        console.log(successResponse); //here we are waiting for the message from resolve
    })
    .catch(function (errorResponse) {
        console.log(errorResponse); //here we are eaiting for the message from the reject
    })
    .finally(function () {
        console.log("This message will be logged anyway"); //finally is executed always
    });