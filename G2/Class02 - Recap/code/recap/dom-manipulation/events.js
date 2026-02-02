console.log("");
console.log("===================== EVENTS =====================");

const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");


buttonOne.addEventListener("click", function () {
    console.log("Button 1 is clicked!");
});

buttonTwo.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.dataset);

})

function handleClick(event) {
    console.log("Button 3 has been clicked!");
    console.log("This is the event:");
    console.log(event);
}

buttonThree.addEventListener("click", handleClick);