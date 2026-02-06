# Exercises

## Exercise 1

Make 3 functions:

1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed.
It should show the results in the console.

#### Ex:

**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative
 
## Exercise 2 

> **AI Assistance Guidance:** You can use AI tools (like Copilot, ChatGPT) to help you understand arrow functions, default parameters, and DOM manipulation. However, **always attempt the solution yourself first**, validate AI suggestions, and make sure all edge cases are covered.

### Task Description

Create 2 variables with arrow functions:

1. **Change text color function**
   * Accepts two parameters:
     * `element` – the HTML element to modify
     * `color` – the text color to set (default value: **black**)
   * Changes the text color of the given element.

2. **Change text size function**
   * Accepts two parameters:
     * `element` – the HTML element to modify
     * `textSize` – the text size to set (default value: 24)
   * Changes the font size of the given element.

Create an HTML document with:

* Two inputs:
  * Input 1 – text size
  * Input 2 – color
* A button
* An `<h1>` header with some initial text

**Behavior:**  
When the button is clicked, the `<h1>` header should update according to the input values:

* Text size from Input 1
* Color from Input 2

Use the arrow functions you declared earlier and an arrow function as the event listener for the button.

#### Example

* **Input1:** 28  
* **Input2:** red  
* **Result:** The `<h1>` text should change to size 28 and color red.

---

### AI Assistance Tips

* Ask AI to **explain how default parameters work in arrow functions**.
* AI can suggest **how to select HTML elements and change styles using JavaScript**, but check the solution carefully.
* Validate your code by testing:
  * Inputs left empty (should use default values)
  * Inputs with invalid values (text size not a number, invalid color)
  * Multiple clicks – ensure styles update correctly.
* Try to **write the code first**, then ask AI to suggest improvements or alternative implementations.
