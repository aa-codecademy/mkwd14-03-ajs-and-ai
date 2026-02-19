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

//because there is a part of the code that we want to wait some time
//we put the call in printAllMessages and we make this function async
//this way, the rest of the code will not wait for this function to end (will not wait for the delay that we have here)
async function printAllMessages(){
    let message = await waitSomeTime(3000); //(3) js sees the await keyword, the rest of this function will wait for this delayed code, but the code outside of this function can continue
    console.log(`Wait some time message response: ${message}`); //(5) - after waitSomeTime was finished, resolved, this line can be executed
}

console.log("Message at the start!"); //(1) 
printAllMessages(); //(2) - the call of print AllMessages
console.log("Message after the call"); //(4) - while the rest of the code in printAllMessages waits for the waitSomeTime to finish, the rest of the code can continue