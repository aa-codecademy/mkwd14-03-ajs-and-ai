# 👩‍💻 JavaScript Advanced — Coding Assessment

> **Base URL:** `https://dummyjson.com/users`

## ⏱️ Topic 1: Async/Await, fetch, APIs

**1.**
Write a function that fetches all users from the API and returns the `users` array.
Make sure errors are handled and a meaningful message is logged if something goes wrong.
Call the function and log the total number of users returned.



**2.**
Write another function that fetches only 30 users from the API and returns them.



**3.**
Write a function that fetches users by a provided name.



## 🚀 Topic 2: Higher Order Functions

**4.**
Get all users who are **older than 30**.
Log their full names and ages.



**5.**
Get the **email addresses** of all users who work in the `"Engineering"` department.
Log the result.



**6.**
Calculate the **average age** of all users.
Log: `"Average age: XX.XX"`



**7.**
Build a formatted string for each user:
`"#[id] | [Full Name] | [age] | [email] | [city], [country]"`
Log each string.



**8.** (*BONUS*)
Group users by their department.
The result should be an object where each key is a department name and the value is an array of full names belonging to that department.
Log the result.



**9.**
Find all users whose **email contains their username**.
Log their full names and emails.



**10.**
Find the **oldest** user in the list.
Log their full name and age.



**11.**
Sort all users **alphabetically by last name**.
Log their full names in the sorted order.



**12.**
Sort all users by **age from youngest to oldest**.
Log their full names and ages.



**13.**
Find the **first user** who works in the `"Marketing"` department.
Log their full name and job title.



**14.**
Check if **any** user is younger than 20.
Check if **all** users are older than 18.
Log the results.



## ⚜️ Topic 3: Classes

**15.**
Create a `User` class that holds the following user information:
`id`, `firstName`, `lastName`, `age`, `gender`, `email`, `username`

The class should have a way to get the full name and a way to describe the user in this format:
`"[Full Name] is [age] years old ([gender]). Email: [email]"`



**16.**
Convert all raw API users into `User` instances.
Log the description of each one.



**17.**
Create an `Employee` class that is based on `User` and additionally holds:
`company`, `department`, `title`

Its description should extend the parent's with:
`"...and works as [title] in the [department] department at [company]."`



**18.**
Convert all users into `Employee` instances.

