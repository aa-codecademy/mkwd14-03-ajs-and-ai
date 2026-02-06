console.log("===================== SELF-INVOKED FUNCTIONS =====================");


// function test() {
//     console.log("TESTTTT");
// }
// test();

// (function () {
//     console.log("This will be exectued immediately!");
// })();

(() => console.log("This will be exectued immediately!"))();

// ===> Fetch and render something initially from API
// 'https://dummyjson.com/products/1'
(() => {
    const productUrl = 'https://dummyjson.com/products/1';
    const productContainer = document.querySelector("#product-container");
    fetch(productUrl)
        .then(response => response.json())
        .then(product => {
            productContainer.innerHTML = `
            <h3>Title: ${product.title}</h3>
            <p>Description: ${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        })
        .catch(error => console.log(error));
})();


(function sayHello(name) {
    console.log("Hello " + name);
})("Bob Bobsky")

// sayHello("Bob"); // ERROR