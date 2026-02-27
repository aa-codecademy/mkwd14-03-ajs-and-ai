# Exercises

## Exercise 1 – Object Templates

Instructions:
Create 3 object templates: Academy, Student, and Subject.

Structure:

Academy
- Name – string
- Students – array of Students
- Subjects – array of Subjects
- Start – Date when it starts
- End – Date when it ends
- NumberOfClasses – number of subjects * 10 (not settable)
- PrintStudents – method that prints all students in console
- PrintSubjects – method that prints all subjects in console

Subject
- Title – string
- NumberOfClasses – default 10 (not settable)
- isElective – boolean
- Academy – Academy object
- Students – array of Students
- OverrideClasses – accepts a number and rewrites NumberOfClasses. The number cannot be smaller than 3.

Student
- FirstName – string
- LastName – string
- Age – number
- CompletedSubjects – empty array as default (not settable)
- Academy – null as default (not settable)
- CurrentSubject – null as default (not settable)
- StartAcademy – accepts an Academy object and sets it to the Academy property of the student
- StartSubject – accepts a Subject object and adds it to CurrentSubject only if the student has an Academy and the subject exists in it. Otherwise, show an error and do not set CurrentSubject


AI Assistance:
You are encouraged to use AI tools (like ChatGPT or GitHub Copilot) to help you write the classes, functions, and methods. You can ask AI for:
- Examples of object templates with default values
- How to calculate dynamic properties (e.g., NumberOfClasses)
- How to write methods that print arrays in the console

Example AI Prompts:
- "Create a JavaScript class for Student with default properties CompletedSubjects and Academy."
- "Create a Subject class that prevents NumberOfClasses from being set below 3."
- "Write a method PrintStudents for Academy that prints all students in console."
- "Write a method PrintSubjects for Academy that prints all subjects in console."

---

## Exercise 2 – Dynamic Functions

Instructions:
Make the functions StartAcademy and StartSubject dynamic:

- StartAcademy – When called, the student should also be added to the Academy’s Students array.
- StartSubject – When called, the student should also be added to the Subject’s Students array. If there was a previous CurrentSubject, move it to CompletedSubjects and then set the new subject as CurrentSubject.

AI Assistance:
You can ask AI for help to implement these dynamic behaviors. Example prompts:
- "Write a method for a Student class that adds the student to the Academy’s Students array when calling StartAcademy."
- "Write a method for a Student that moves the previous CurrentSubject to CompletedSubjects and adds the new subject to CurrentSubject and the subject’s Students array."
- "Show an example of error handling if a student tries to start a subject not in their Academy."
- "Demonstrate calling StartAcademy and StartSubject with sample objects."

---

Note for Students:
Use AI as a learning assistant, not to copy everything blindly. You can ask for hints, examples, or code templates and then implement the logic yourself. Make sure to test your code in the browser console or VS Code to understand how objects interact dynamically.
