// Create inputs for Color, Font Size, and Items
// Items should be separated by commas
// Generate an UL dynamically on button click

//1. get the elements
const colorInput = document.getElementById('color');
const fontSizeInput = document.getElementById('fontSize');
const itemsInput = document.getElementById('items');
const generateButton = document.getElementById('generateButton');
const result = document.getElementById('result');

generateButton.addEventListener('click', function() {
    //pizza,fries,soda -> include comma - valid input
    //pizza fries soda -> no comma - invalid input
    //validate inputs                               //parse to float to check if it's a number (decimal)      //does the input include a comma
    if(!colorInput.value || !fontSizeInput.value || !parseFloat(fontSizeInput.value) || !itemsInput.value || !itemsInput.value.includes(',')) {
        console.log('Please fill in all fields with valid values.');
        return; //we don't want to proceed if validation fails
    }

    //2. create the UL element
    const ul = document.createElement('ul');

    //3. get the items and split them into an array -> pizza, fries, soda -> ['pizza', ' fries', ' soda']
    let itemsArray = itemsInput.value.split(','); //split separates by the characters that we tell it to and creates an array

    //4. loop through the array and create LI for each item
    for(let items of itemsArray) {
        const li = document.createElement('li'); //create LI element
        li.textContent = items.trim(); //set the text content of the LI to the current item, trim removes extra spaces
        li.style.color = colorInput.value; //set the color style
        li.style.fontSize = fontSizeInput.value + 'px'; //set the font size style
        ul.appendChild(li); //append the LI to the UL
    }
    //5. append the UL to the result div
    result.innerHTML = ''; //clear previous results
    result.appendChild(ul); //append the newly created UL

    //6. clear the input fields - so that the user can enter new values
    colorInput.value = '';
    fontSizeInput.value = '';
    itemsInput.value = '';
});