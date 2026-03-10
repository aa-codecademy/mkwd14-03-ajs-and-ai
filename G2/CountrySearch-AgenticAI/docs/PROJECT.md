# PROJECT.md — App Overview

## What You Are Building

**CountrySearch** is a browser-based single-page application. A user types a country 
name into a search field, results appear dynamically from a live REST API, and 
clicking a result displays detailed information about that country.

There is no build step. The app opens directly in a browser via `index.html`.

## Hard Constraints

| Constraint | Detail |
|-----------|--------|
| Language | Vanilla JavaScript only — no frameworks, no libraries, no CDN scripts |
| Module system | ES Modules (`type="module"`) — no bundler, no transpiler |
| No inline JS | All JavaScript lives in `.js` files — never inside HTML `<script>` tags |
| CSS | External stylesheet only — no inline styles, no `<style>` tags in HTML |
| Browser target | Chrome, Firefox, Edge, Safari — latest stable versions |
| Entry point | `index.html` — this is what a user opens to run the app |

## Non-Goals

These are explicitly out of scope. Do not implement them:

- No backend, no server, no Node.js runtime
- No authentication or user accounts
- No persistent storage — no localStorage, sessionStorage, or cookies
- No routing — this is a single page, there are no URLs to manage
- No CSS frameworks or resets loaded from CDN

## What Success Looks Like

The finished app:

- Opens in a browser by loading `index.html` directly (no server required)
- Fetches live country data from the external API defined in `API.md`
- Allows a user to search, browse results, and view country detail
- Runs without errors in Chrome, Firefox, Edge, and Safari