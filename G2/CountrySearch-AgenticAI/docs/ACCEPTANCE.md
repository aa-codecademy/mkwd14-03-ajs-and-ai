# DONE.md — Acceptance Checklist

Before considering the task complete, verify every item below. Do not skip any.
Every item must pass. If any item fails, fix it before finishing.

---

## Project Structure
- [ ] Folder structure matches `ARCHITECTURE.md` exactly — including `js/models/` and `js/utils/`
- [ ] All filenames are kebab-case (e.g. `country-card.js`, `sort-menu.js`)
- [ ] `index.html` uses `<script type="module" src="js/main.js">`
- [ ] No JavaScript exists inside `index.html` — no inline `<script>` tags
- [ ] All styles are in `css/style.css` — no inline styles, no `<style>` tags in HTML
- [ ] Google Fonts `<link>` tags appear in `index.html` before `style.css`

## ES Modules
- [ ] Every module lives in its own `.js` file
- [ ] All files use `export` / `import` — no global variables, no `window.*` assignments
- [ ] All `import` paths are kebab-case and include the `.js` extension
- [ ] `main.js` is the only file that wires top-level modules together

## Module Pattern
- [ ] Components and API modules are implemented as classes
- [ ] Models are implemented as factory functions (`createCountryModel`, `createNotificationModel`, `createSortModel`)
- [ ] `formatter.js` exports only pure functions — no state, no DOM, no side effects
- [ ] `country-api.js` never touches the DOM

## Data Models
- [ ] `createCountryModel(raw)` maps all fields from raw API data including `region`
- [ ] All fallbacks (`"N/A"`, `[]`, `0`) are applied inside `createCountryModel` — not in UI modules
- [ ] No module receives raw API data — only mapped `CountryModel` objects
- [ ] `Notification.show()` is always called with a `NotificationModel` object
- [ ] `SortMenu` emits a `SortModel` object via its `onSort` callback
- [ ] `CountryList` holds `SortModel` as internal state and re-sorts without an API call

## Features
- [ ] Page renders a meaningful empty state on first load — before any interaction
- [ ] Search input + button fetches by country name
- [ ] Pressing Enter in the input triggers search
- [ ] Empty search input shows warning notification: `"Please enter a search value!"`
- [ ] No-results response shows notification: `"No countries found for '{query}'."`
- [ ] "Europe" button fetches and displays all European countries
- [ ] "Africa" button fetches and displays all African countries
- [ ] "Macedonia" button fetches and displays North Macedonia by code `MKD`
- [ ] "Neighbors of Macedonia" performs the two-step fetch correctly — first fetches `MKD`, then fetches all border countries by code list
- [ ] Each card shows: flag, name, population (formatted), area (formatted), capital, Wikipedia link
- [ ] Flag `<img>` uses `flags.alt` as the `alt` attribute
- [ ] Population is formatted with thousands separators using `formatter.formatPopulation()`
- [ ] Area is formatted with thousands separators and `km²` using `formatter.formatArea()`
- [ ] Wikipedia link uses `formatter.wikiUrl()` — not a hardcoded formula
- [ ] Wikipedia link opens in a new tab (`target="_blank"`)
- [ ] Sort dropdown works on all three fields (`name`, `population`, `area`) in both directions
- [ ] Sorting does not trigger a new API call

## Loading & Errors
- [ ] Loader is visible during every fetch operation
- [ ] Loader disappears when the fetch completes — both on success and on failure
- [ ] Search button and Quick buttons are disabled while loading
- [ ] A `404` response shows a friendly "no results" notification — not a crash
- [ ] Non-`ok` responses show a descriptive error notification with the status code
- [ ] Network timeout (8000ms via `Promise.race()`) shows a "Request timed out" notification
- [ ] Notifications auto-dismiss after 5000ms
- [ ] A new successful result dismisses any existing notification immediately
- [ ] No errors are silently swallowed — all failures surface through `Notification`
- [ ] No `console.error` calls left in production code

## Constants
- [ ] `MACEDONIA_CODE`, `DEFAULT_REGION_EUROPE`, `DEFAULT_REGION_AFRICA`, and
  `API_TIMEOUT_MS` are defined as named constants in `main.js`
- [ ] No magic strings or magic numbers exist anywhere else in the codebase

## Styling
- [ ] All colors, spacing, font sizes, shadows, and transitions use CSS custom properties
- [ ] No hardcoded values outside `:root`
- [ ] Layout is responsive — verified at `375px`, `768px`, and `1280px` widths
- [ ] Cards display in a CSS Grid: 1 column at mobile, 2 at tablet, 4 at desktop
- [ ] Breakpoints match `STYLING.md` exactly: `768px` and `1024px`
- [ ] Loader is a pure CSS spinner — no GIF, no external assets
- [ ] Notification has a color-coded `4px` left border per type
- [ ] Header is sticky and uses the correct `z-index` from the custom property scale
- [ ] Buttons show disabled state (`opacity: 0.5; cursor: not-allowed`) during loading

## Code Quality
- [ ] All modules have comments explaining non-obvious logic
- [ ] No dead code, no unused imports, no unused variables
- [ ] `main.js` owns all top-level `try/catch` blocks
- [ ] Components do not catch errors — they propagate upward