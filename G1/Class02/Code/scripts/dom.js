// let pageBody = document.querySelector("body");

// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);


// pageBody.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;


// Exercise 4 - Title generator

let color = document.getElementById("color");
let fontSize = document.getElementById("font-size");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let resultDiv = document.getElementById("title");


btn.addEventListener("click", function() {
// let header = document.createElement("h1");
resultDiv.innerHTML = `
<h1 
style="font-size:${fontSize.value}px; 
color:${color.value}">${text.value}
</h1>
`;
});


