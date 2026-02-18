console.log("======================= PROMISES =======================");
// => better way for handling asynchronous operations
// => object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// It has three states:
// 1️) Pending  - The initial state. The operation has started but has not yet completed (neither resolved nor rejected).
// 2️) Fulfilled - The operation completed successfully, and the promise is resolved with/without a value.
// 3️) Rejected  - The operation failed, and the promise is rejected with an error message.

// Commonly used for API calls, file operations, and async tasks.

// then(), catch(), finally() are the core functionalities that make working with Promises easier
// these three methods allow you to manage asynchronous tasks more effectively and with less complexity

// then() => handles success (resolve)
// catch() => handles errors (reject)
// finally() => runs no matter what (cleanup logic)

console.log("");
console.log("============ Creating a Promise ============");

const API_URL = "https://fakestoreapi.com/products/1";

const productPromise = fetch(API_URL);

// productPromise
//     .then((response) => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log("ERROR ", error))
//     .finally(() => console.log(`Everything completed at ${new Date().toLocaleTimeString()}`))


// ===> Example: Function returning Promise
function simplePromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(); // .then is executed
            reject(); // .catch is executed
        }, 3000)
    });
    return promise;
}

// const promiseObject = simplePromise();
// console.log(promiseObject);

// promiseObject
//     // .then() runs when the Promise is fulfilled (resolve callback is executed)
//     .then(() => console.log("The promise is RESOLVED."))
//     // .catch() runs when the Promise is rejected (reject callback is executed)
//     .catch(() => console.log("The promise is REJECTED."))
//     // .finally() runs no matter what
//     .finally(() => console.log("This is executed anyway :D"))


// ===> Example: Function that simulates an asynchronous operation

function simulateAsyncTask(success) {
    return new Promise((resolve, reject) => {
        console.log("Operation started ...");
        if (success) {
            const result = {
                id: 1,
                firstName: "Bob",
                lastName: "Bobsky"
            }
            resolve(result); // returns object 
            // resolve("The promise is FULLFILED !!!"); // returns string 
            // resolve(); // doesn't return value
        } else {
            reject("The promise is REJECTED !!!"); // returns string 
        }
    })
}

// simulateAsyncTask(true)
//     // the parameter here (successMessage) is sent as the resolve-method parameter in the promise
//     .then(successMessage => console.log(successMessage))
//     // the parameter here (errorMessage) is sent as the reject-method parameter in the promise
//     .catch(errorMessage => console.log(errorMessage))
//     .finally(() => console.log(`Everything completed at ${new Date().toLocaleTimeString()}`));



console.log("");
console.log("============ Chaining promises ============");

// ===> Example: Rewrite the Steps example with Promises

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 3000);
// }

function step1() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 3000);
    });
    return promise;
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 2000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Step 3 failed") // step4, won't be executed
            // console.log("Step 3 completed");
            // resolve();
        }, 1000);
    });
}

function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("FINAL STEP COMPLETED !");
        }, 1000);
    });
}

// ===> Chaining promises to avoid callback hell
// step1()
//     // .then(() => step2())
//     // .then(() => step3())
//     // .then(() => step4())
//     .then(step2)
//     .then(step3)
//     .then(step4)
//     .then(message => console.log(message))
//     .catch(errorMessage => console.log(errorMessage))
//     .finally(() => console.log(`Everything completed at ${new Date().toLocaleTimeString()}`));



console.log("");
console.log("============ Promise All ============");
// Promise.all() => run multiple async tasks simultaneously
// If ANY promise rejects, Promise.all rejects immediately
// Excellent for unrelated tasks !

function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 5000);
    });
}

function taskB() {
    return new Promise((resolve) => {
        throw new Error("Task B failed!");
        setTimeout(() => {
            resolve("Task B completed");
        }, 2000);
    });
}

function taskC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task C completed");
        }, 3000);
    });
}

// ===> Example: Run tasks one after another (each one waits for the previous to
// finish)

// console.time("Sequential Tasks");
// taskA()
//     .then(result => {
//         console.log(result)
//         return taskB();
//     })
//     .then(result => {
//         console.log(result)
//         return taskC();
//     })
//     .then(result => {
//         console.log(result)
//         console.log("All tasks completed");
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.timeEnd("Sequential Tasks")) // ~ 10 seconds (the sum of all tasks durations)

// ===> Example: Run tasks in parallel

// console.time("Parallel Tasks");
// Promise.all([taskA(), taskB(), taskC()])
//     .then(results => {
//         console.log(results); // Note: the order matches the input array, not the order tasks finished in
//         console.log("All tasks completed");
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.timeEnd("Parallel Tasks")) // ~ 5 seconds (the duration of the longest task)


// ===> ***Promise.allSettled***
// If we want all the results regardless if any failed we can use Promise.allSettled instead of Promise.all
Promise.allSettled([taskA(), taskB(), taskC()])
    .then(results => {
        console.log(results);
        console.log("All tasks completed");
    })
    .catch(error => console.log(error))
    .finally(() => console.timeEnd("Parallel Tasks"))