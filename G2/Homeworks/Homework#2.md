# Homework 2

> **AI Assistance Guidance:** You are encouraged to use AI tools (like Copilot, ChatGPT) for guidance, explanations, or hints. However, you **must first try to solve the tasks yourself**. Validate all AI suggestions, check edge cases, and critically think about the solution.

## Task 1

Create an HTML page with a table and a button. When the button is clicked, show results for the first 10 planets from the Star Wars API. The information in the table should include:

* Planet Name
* Population
* Climate
* Gravity

There should be a function that makes the call to the API (the URL should be passed as a parameter).

There should be a function that prints planets into the table.

**API URL:**  https://swapi.py4e.com/api/planets/?page=1  (https://swapi.dev/api/planets/?page=1)


## Task 2

After the user clicks the button to get the first 10 planets, a button should appear below the table labeled **NEXT 10**. When clicked:

* Make another API call to get the next 10 planets.
* Replace the table contents with the next 10 planets.

After the NEXT 10 planets are shown:

* The **NEXT 10** button should disappear.
* A new **PREVIOUS 10** button should appear.
* Clicking **PREVIOUS 10** should return the first 10 planets in the table.
* The buttons should toggle visibility accordingly.

**API URL:** https://swapi.py4e.com/api/planets/?page=2
