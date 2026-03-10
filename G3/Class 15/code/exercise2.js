// Make a request to the following link to get all the student objects
// After you get the students, map their full names after a timeout of 5 seconds.

async function getData() {
    try {
        //here we put await because we need to wait for the fetch promise to return a result, because we need that result (response) for our next logic
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
        let students = await response.json(); //here we also put await because we need the data from the response for our next logic
        let fullNames = await getStudentsFullName(students);
        console.log(fullNames);
    }
    catch {
        console.log("An error occured!")
    }
}

function sayHello() {
    console.log("The function call is finished");
}

//here we should retrun a Promise
//we have a function that has some kind of a delay (the same way that fetch has a delay beacuse it makes a call, the same way the .json has a delay because it searches and parses the data...)
//the functions that have a delay should return a promise, so that we can await them and let the rest of the code know that they have a delay and that they should be transfered to browser APIs, so that the rest of the code can continue executing without blocking the call stack
function getStudentsFullName(students) {
    return new Promise(function (resolve, reject) {

        if (!students || students.length === 0) { //validation
            reject("No students!"); //we reject it, we have no students whose names we can map
        }
        //this is the success scenario - we resolve the promise
        setTimeout(() => { resolve(students.map(s => `${s.firstName} ${s.lastName}`)) }, 5000)

    })
}

getData();
sayHello();