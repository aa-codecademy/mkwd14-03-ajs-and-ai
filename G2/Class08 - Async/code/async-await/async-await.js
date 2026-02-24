console.log("======================= ASYNC / AWAIT =======================");
// `async/await` is a modern way to handle asynchronous operations in JavaScript
// It is built on top of Promises and provides a cleaner, more readable syntax for writing asynchronous code
// Avoids deeply nested .then() chains (Promise chaining)

// ===> WHAT IS `async` ?
// - A keyword placed before a function declaration
// - It marks the function as asynchronous
// - ALWAYS returns a Promise, no matter what you return inside it

// ===> WHAT IS `await` ?
// - A keyword placed before a Promise (usually a function call that returns one)
// - It PAUSES execution of the async function until the Promise resolves
// - Can ONLY be used inside an async function (or top-level in ES Modules)


console.log("");
console.log("============ Basic Example of async/await ============");

// ===> Example with Promises
function getDataPromise() {
    return new Promise((resolve, reject) => {
        resolve("Data fetched successfully!")
    });
}

const dataFromPromise = getDataPromise();
console.log(dataFromPromise);

// dataFromPromise
//     .then((message) => console.log(message))
//     .then(() => console.log("Everything finished !"))


// ===> Example with async/await 
// The getDataAsync function is marked as async (using keyword 'async'), which means it always returns a Promise !!!   
async function getDataAsync() {
    return "Data fetched successfully Async!";
}

// const dataPromise = getDataAsync();
// console.log(dataPromise);

// const data = await getDataAsync();

async function processDataAsync() {
    console.log("Begin async task...");
    // `await` pauses execution until the Promise resolves
    const data = await getDataAsync();
    console.log(data.length);

    console.log("End async task...");
}

// processDataAsync();


(async () => {
    const data = await getDataAsync();
    // console.log(data);
})();



console.log("");
console.log("============ Fetch Example with async/await ============");

const apiUrl = "https://fakestoreapi.com/products";

// const responsePromise = fetch(apiUrl);

// responsePromise
//     .then(response => response.json())
//     .then(product => console.log(product))
//     .catch(error => console.log("ERROR!", error))
//     .finally(() => console.log(`Everything completed at ${new Date().toLocaleTimeString()}`))


// NOTE: The try-catch(-finally) block is used in JavaScript for handling unexpected errors !!!
async function fetchProduct() {
    try {
        const response = await fetch(apiUrl + "/15"); // fetch() returns a Promise
        const product = await response.json(); // json() also returns a Promise
        console.log(product);
    } catch (error) {
        console.log("Something went wrong!", error);
    } finally {
        console.log(`Everything completed at ${new Date().toLocaleTimeString()}`);
    }
}
// fetchProduct();


async function getProducts() {
    try {
        const response = await fetch(apiUrl);
        console.log(response);
        if (!response.ok) {
            throw new Error("Fetching products failed!")
            // return;
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.log("Something went wrong!", error);
    }
}

document.querySelector("#get-products-btn").addEventListener("click", async () => {
    const products = await getProducts();
    console.log(products);
})



console.log("");
console.log("============ Using 'await' outside async function ============");
// NOTE: Top-level `await` (using await outside of an async function) is only supported in ES Modules (files with "type": "module")

// const products = await getProducts();
// console.log(products);

// HOWEVER, in many cases it is better to avoid using top-level await, since it will block the remaining script execution

// ===> Classic script workaround => wrap everything in an async IIFE:
(async () => {
    const products = await getProducts();
    console.log(products);
})();

console.log("==== SYNC CODE END ====");



console.log("");
console.log("============ Async/Await vs Promises (Steps example) ============");

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 3000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 2000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

(async () => {
    try {
        await step1();
        await step2();
        await step3();
    } catch (error) {
        console.error("Error:", error);
    }
})();