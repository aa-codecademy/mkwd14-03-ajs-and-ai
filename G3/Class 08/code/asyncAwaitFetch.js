//in this function we have a code that causes a delay, that is why we use the async for this function
async function getAndPrintDocuments() {
    try { //we try to execute the code in the try block. This is our happy scenario
        //the fetch returns a promise, that is a code that is delayed. We need the response for the rest of this function, so we want the rest of this function (not the rest of the code in this file) to wait for the response - that is why we put await in front of the fetch
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
        //the .json() returns a promise, that is a code that is delayed. We need the rest of this function to wait for the response (the parsedObject) from the .json, so we use the await keyword
        let parsedObject = await response.json();
        parsedObject.forEach(document => console.log(document));
        sayHello();
    } catch (errorResponse) { //if an error occurs anywhere in the try block, the catch block will be executed
        console.log(errorResponse);
    }
    finally {
        console.log("This will be executed always!")
    }
}

getAndPrintDocuments();
console.log("Hi!");

function sayHello(){
    console.log("Hello!");
}