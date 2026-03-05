# 🤖 AI Assistance Guide – WeatherAlert ⛅

This is a workshop-level project designed to be built progressively.
Students are expected to use AI as a helper, NOT as a replacement for thinking.

AI tools allowed:
- GitHub Copilot
- Copilot Chat / ChatGPT

// NOTE: This file is only an example of how to prompt Copilot and use AI tools; students should understand and write their own code.


--------------------------------------------------

IMPORTANT NOTE ABOUT THE API

This project uses OpenWeatherMap API.
You MUST:
- Register for an API key
- Wait for the key to activate (can take up to 2 hours)
- Store the key safely (do NOT commit it to GitHub)

AI PROMPT:
"Explain how to safely use an API key in a frontend JavaScript project."

--------------------------------------------------

GENERAL AI USAGE RULES

Do NOT ask:
"Build the whole WeatherAlert app for me"

DO ask:
- How to structure
- How to calculate statistics
- How to refactor
- How to debug

AI should help you THINK, not SKIP learning.

--------------------------------------------------

PROJECT REMINDER

WeatherAlert is:
- Single Page Application
- Desktop only
- Uses OpenWeatherMap API
- Has navigation WITHOUT page reload
- Shows statistics and hourly weather data

--------------------------------------------------

PHASE 1 – After AJAX, Functions base & Event Listeners

What you know:
- fetch
- functions
- event listeners
- DOM manipulation
- basic tables

Goal:
Fetch weather data and display it

COPILOT CHAT PROMPTS:

"How should I structure a simple SPA with navigation without reloading the page?"

"How do I fetch hourly weather data from OpenWeatherMap API?"

"Explain the structure of OpenWeatherMap hourly forecast response."

"How can I dynamically change views when navbar links are clicked?"

INLINE COPILOT COMMENT PROMPTS (script.js):

// create a function that fetches weather data using fetch and API key

// add event listeners to navbar links (Home, Hourly, About)

// create a function that renders the hourly weather table

// dynamically switch views without reloading the page

THINKING PROMPTS:

"What data do I need immediately on page load?"

"What parts of the DOM should always exist, and which should change?"

--------------------------------------------------

PHASE 2 – After Higher Order Functions & Objects

What you now know:
- map, filter, reduce
- objects
- better data processing

Goal:
Calculate statistics and clean up logic

COPILOT CHAT PROMPTS:

"How can I calculate highest, lowest, and average temperature using reduce?"

"How can I calculate average humidity and wind speed?"

"How do I find the warmest and coldest hour in a dataset?"

"How can I transform API data into a format easier to work with?"

INLINE COPILOT COMMENT PROMPTS:

// extract temperatures into an array

// calculate highest, lowest, and average temperature using reduce

// find warmest and coldest hour based on temperature

// use map to generate table rows for hourly weather

REFACTORING PROMPTS:

"Refactor this statistics calculation into reusable functions."

"How can I avoid repeating logic for temperature, humidity, and wind?"

--------------------------------------------------

PHASE 3 – After Async/Await, Classes, Full OOP Knowledge

What you now know:
- async / await
- classes
- better architecture

Goal:
Make the app scalable and maintainable

COPILOT CHAT PROMPTS: <br>
"Should I maybe use objects or even classes for separating functionality?"

"How can I create a WeatherService class to handle API calls?"

"How can I separate UI logic from data-fetching logic?"

"How should I manage app state for navigation and data?"

"What classes would make sense for this application?"

INLINE COPILOT COMMENT PROMPTS:

// create a WeatherApi class responsible only for fetching data

// create a StatisticsService class for calculating weather stats

// create a UIController class to manage navigation and rendering

// refactor fetch calls to async/await

DEBUGGING & IMPROVEMENT PROMPTS:

"Why is my SPA navigation not updating the view correctly?"

"How can I prevent multiple API calls when switching tabs?"

"How can I add loading and error states?"

--------------------------------------------------

FINAL POLISH PROMPTS

"Review my code and suggest improvements for readability and structure."

"Refactor this project to follow best practices for SPA architecture."

"What would you improve if this were a production weather app?"

--------------------------------------------------

IMPORTANT REMINDER FOR STUDENTS

AI is a tool, not a shortcut.

You are expected to:
- understand every calculation
- explain how statistics are computed
- justify architectural decisions
- modify AI-generated code

If you cannot explain it → you did not learn it.

Think first.
Ask AI second.
Understand always.
