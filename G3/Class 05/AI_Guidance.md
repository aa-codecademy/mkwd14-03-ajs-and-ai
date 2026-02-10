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
