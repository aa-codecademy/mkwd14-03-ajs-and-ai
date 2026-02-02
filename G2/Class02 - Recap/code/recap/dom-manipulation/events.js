console.log("");
console.log("===================== EVENTS =====================");

// Find the element on which you want to add an event listener
const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");

// Listen for a click event on the #btn-one
buttonOne.addEventListener("click", function () {
    console.log("Button 1 is clicked!");
});

// Listen for a click event and catching the event object
// The event object in JavaScript is automatically passed as an argument to the event handler function when the event occures
buttonTwo.addEventListener("click", function (event) {
    console.log(event);
    // The event.target is the object representation of the element that is clicked
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.dataset);
    // event.target.dataset => retrieves all the data-* attributes on the element as an object used for transfering additional informations and data
})

// NOTE: The standard event handler function in JavaScript typically receives only one parameter: the event object !!!

// Using a pre-defined function instead of annonymous one
function handleClick(event) {
    console.log("Button 3 has been clicked!");
    console.log("This is the event:");
    console.log(event);
}

buttonThree.addEventListener("click", handleClick);