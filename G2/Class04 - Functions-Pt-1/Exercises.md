# Exercises

> **AI Assistance Guidance:** You can use AI tools (like Copilot, ChatGPT) to help you understand arrow functions, default parameters, and DOM manipulation. However, **always attempt the solution yourself first**, validate AI suggestions, and make sure all edge cases are covered.

## Exercise 1

Make 3 functions:

1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed.
It should show the results in the console.

#### Example:

**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative
 

## Exercise 2

Create **two variables** that store **arrow functions**:

1. **Change text color**
   - Parameters:
     - `element`
     - `color`
   - Behavior:
     - Changes the text color of the given element
     - If `color` is **not provided**, use **black** as the default value

2. **Change text size**
   - Parameters:
     - `element`
     - `textSize`
   - Behavior:
     - Changes the text size of the given element
     - If `textSize` is **not provided**, use **24** as the default value

---

Create an **HTML document** that contains:

- Two inputs  
  - **Input 1:** Text size  
  - **Input 2:** Text color
- One button
- One `<h1>` element with some text

---

When the **button is clicked**:

- Read the values from both inputs
- Update the `<h1>` element:
  - Change its **text size** using the first input value
  - Change its **text color** using the second input value
- Use:
  - The **arrow functions** you created earlier
  - An **arrow function** for the button’s event listener

#### Example:

* Input1: ** Person enters 28
* Input2: ** Person enters red
* Result: ** The `<h1>` text should become **size 28** and **color red**.

