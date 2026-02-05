// Create 2 variables with arrow functions:

// Change text color function

// Accepts two parameters:
// element – the HTML element to modify
// color – the text color to set (default value: black)
// Changes the text color of the given element.
// Change text size function

// Accepts two parameters:
// element – the HTML element to modify
// textSize – the text size to set (default value: 24)
// Changes the font size of the given element.
// Create an HTML document with:

// Two inputs:
// Input 1 – text size
// Input 2 – color
// A button
// An <h1> header with some initial text
// Behavior:
// When the button is clicked, the <h1> header should update according to the input values:

// Text size from Input 1
// Color from Input 2
// Use the arrow functions you declared earlier and an arrow function as the event listener for the button.

let sizeInput = document.getElementById("size");
let colorInput = document.getElementById("color");
let button = document.getElementById("change-btn");
let header = document.querySelector("h1");

let changeTextColor = (element, color = "black") => {
    element.style.color = color;
}

let changeTextSize = (element, textSize = 24) => {
    element.style.fontSize = textSize + "px";
}

//event-listener
button.addEventListener("click", () => {
    //we can add validation
    let textSize = sizeInput.value ? sizeInput.value : 24;
    let color = colorInput.value ? colorInput.value : "black";

    changeTextSize(header, textSize);
    changeTextColor(header, color);
});