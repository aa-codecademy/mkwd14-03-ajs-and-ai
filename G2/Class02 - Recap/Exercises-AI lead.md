# Exercises 🏋️‍♂️

> 🤖 Using AI Tools (Important Notice)  
> You may use AI tools (ChatGPT, GitHub Copilot, etc.) while working on these exercises.
>
> Rules:
> - Think about the solution BEFORE asking AI
> - Use AI as support, not as a replacement
> - Be critical of AI suggestions
> - Test edge cases and negative scenarios
> - Make sure you understand the final solution

---

## Generating arrays

Tasks:
- Generate an array with all numbers divisible by 3 from 1 to 1000
- Generate an array with all even numbers divisible by 4 from 1 to 1000
- Generate an array with all numbers that end with digit 1 from 1 to 1000

🤖 AI Assistance:
- Ask AI to explain the logic step by step
- Ask AI how loops and conditions should work
- Ask AI to review your solution

✅ Validation:
- Are all values inside the 1–1000 range?
- Does every value meet the requirement?
- Can the range be changed easily?

---

## Clean arrays

Tasks:
- Create a function that keeps only STRINGS
- Create a function that keeps only NUMBERS
- Create a function that removes undefined, null, NaN, and empty strings

Test array (use this for validation):
    let test = [
      true, false, 12, 13, 44, 2345,
      "Bob", "Jill", false, undefined,
      1000, null, "Jack", "",
      "", 99, "Greg", undefined, NaN,
      1, 22
    ];

🤖 AI Assistance:
- Ask AI how to detect data types
- Ask AI how to correctly check for NaN
- Ask AI to review filtering logic

✅ Validation:
- Is the original array unchanged?
- Are only expected values returned?
- Can you explain why each value was kept or removed?

---

## Random color page

Tasks:
- Create an HTML page
- On every refresh, generate a random background color
- Display the RGB values in the center of the page

🤖 AI Assistance:
- Ask AI how to generate random RGB values
- Ask AI how to apply styles dynamically

✅ Validation:
- Does the color change on every refresh?
- Are RGB values between 0 and 255?
- Does the displayed text match the background color?

---

## Title Generator

Tasks:
- Create three inputs: Color, Font Size, Text
- Create a button to generate titles
- On click, generate a new H1 element using input values

🤖 AI Assistance:
- Ask AI how to read input values
- Ask AI how to create elements dynamically

✅ Validation:
- Is a new title created on every click?
- Are styles applied correctly?
- What happens if inputs are empty?

---

## Student constructor function

Tasks:
- Create a constructor function Student with:
  - firstName
  - lastName
  - birthYear
  - academy
  - grades (array)
- Methods:
  - getAge()
  - getInfo()
  - getGradesAverage()
- Create an array with 3 students

🤖 AI Assistance:
- Ask AI to explain constructor functions
- Ask AI to review method logic

✅ Validation:
- Is age calculated correctly?
- What happens if grades array is empty?
- Are methods reusable?

---

## List generator from an array

Tasks:
- Create an array of 5 names
- Create an HTML page with a header, empty UL, and button
- On click, populate the list with names

🤖 AI Assistance:
- Ask AI how to loop through arrays
- Ask AI how to append list items

✅ Validation:
- Does the list fill only after clicking?
- Are all names displayed?

---

## List Generator dynamically from inputs

Tasks:
- Create inputs for Color, Font Size, and Items
- Items should be separated by commas
- Generate a UL dynamically on button click

🤖 AI Assistance:
- Ask AI how to split strings
- Ask AI how to create lists dynamically

✅ Validation:
- Are items split correctly?
- Are styles applied to the list?

---

## Create a student registry page

Tasks:
- Create a form with First Name, Last Name, Age, Email
- Create a Student generator function
- On submit:
  - Create a student object
  - Add it to a database array
  - Log the database
  - Clear the inputs

🤖 AI Assistance:
- Ask AI how to handle form submit
- Ask AI how to store objects in arrays

✅ Validation:
- Is the student added correctly?
- Are inputs cleared after submit?

---

## Movies renting App

Tasks:
- Create an array of movie names
- Create input and search button
- Search the array on click
- Show success or failure message
- Input must be case-insensitive

🤖 AI Assistance:
- Ask AI how to normalize strings
- Ask AI how to search arrays

✅ Validation:
- Does case-insensitive search work?
- Are messages styled correctly?

---

## Reminder App

Tasks:
- Create inputs for title, priority, color, description
- Create buttons to add and show reminders
- Store reminders in an array
- Display reminders in a table
- Title color should match the reminder color

🤖 AI Assistance:
- Ask AI how to structure objects
- Ask AI how to generate tables dynamically

✅ Validation:
- Are reminders stored correctly?
- Does the table render properly?
- Are colors applied as expected?
