# ARCHITECTURE.md — Structure & Module Design

## Folder Structure

```
CountrySearch/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js                        ← entry point, wires all modules together
    ├── api/
    │   └── country-api.js             ← all fetch logic, never touches the DOM
    ├── components/
    │   ├── search-bar.js              ← search input + button
    │   ├── quick-buttons.js           ← 3 preset region buttons (not the sort button)
    │   ├── country-card.js            ← renders a single country card
    │   ├── country-list.js            ← renders a collection of cards, owns sort state
    │   ├── notification.js            ← user-facing messages (errors, warnings)
    │   ├── loader.js                  ← loading spinner
    │   └── sort-menu.js               ← sort dropdown UI + emits SortModel on change
    ├── models/
    │   ├── country-model.js           ← createCountryModel() factory
    │   ├── notification-model.js      ← createNotificationModel() factory
    │   └── sort-model.js              ← createSortModel() factory
    └── utils/
        └── formatter.js               ← pure formatting helper functions
```

## Module Pattern

All modules follow one of two patterns — use the correct one for each file:

**Classes** (components and API):
```js
// search-bar.js
export class SearchBar {
  constructor({ onSearch }) { ... }
}

// country-api.js
export class CountryAPI { ... }

// country-list.js
export class CountryList {
  constructor({ onCountrySelect }) { ... }
}
```

**Factory functions** (models and utilities):
```js
// country-model.js
export function createCountryModel(raw) { ... }

// formatter.js
export function formatPopulation(number) { ... }
```

Models and utilities are plain factory functions — they produce simple data
objects or return values and do not need class instantiation.

## Module Responsibilities

### `country-api.js`
- Encapsulates all `fetch()` calls to the REST Countries API
- One method per query type: `fetchByName`, `fetchByRegion`, `fetchByCode`,
  `fetchBorders`
- Maps every raw API response into a `CountryModel` before returning
- Throws meaningful errors — never swallows them silently
- **Never touches the DOM**
- Does not catch errors — throws them up to `main.js`

### `search-bar.js`
- Owns the `<input>` and Search `<button>` elements
- Constructor accepts `{ onSearch }` — calls `onSearch(query)` on button click
  or Enter key
- Validates that input is not empty before triggering the callback
- Does not know about the API or country data

### `quick-buttons.js`
- Owns the **3 preset region/country buttons only** — not the Sort button
- Constructor accepts `{ onRegionSelect }`
- Calls the provided callback with the selected region string on click

### `country-card.js`
- Receives a single `CountryModel` object
- `render()` method returns an `HTMLElement` — does not append it to the DOM
- Responsible for the card's full HTML structure and content

### `country-list.js`
- Owns the list container element in the DOM
- `display(countries)` — accepts a `CountryModel[]` array, clears and re-renders
- `clear()` — empties the container
- **Holds the active `SortModel` as internal state** — this is intentional so the
  list can re-sort without triggering a new API call
- Uses `CountryCard` internally to render each card
- Does not catch errors — any thrown errors propagate to `main.js`

### `notification.js`
- Owns a notification `<div>` in the DOM
- `show(notificationModel)` — displays message and type from a `NotificationModel`
- `hide()` — hides the notification
- Auto-hides after the duration specified in the `NotificationModel`

### `loader.js`
- Owns the loading spinner element
- `show()` and `hide()` — called by `main.js` around every API call

### `sort-menu.js`
- Owns the sort dropdown UI and the Sort button that opens it
- Constructor accepts `{ onSort }`
- Calls `onSort(sortModel)` with a `SortModel` when the selection changes
- Supports sort fields: `name`, `population`, `area`
- Supports directions: `asc`, `desc`

### `formatter.js`
- Pure functions only — no state, no DOM, no side effects
- `formatPopulation(number)` → `"44,012,345"`
- `formatArea(number)` → `"603,550 km²"`
- `wikiUrl(countryName)` → `"https://en.wikipedia.org/wiki/North_Macedonia"`

### `country-model.js`
- `createCountryModel(raw)` — maps raw API data to a clean `CountryModel` shape
- Applies all fallbacks at creation time (see `MODELS.md` for the full shape)

### `notification-model.js`
- `createNotificationModel(message, type, duration)`
- `duration` defaults to `5000` ms if not provided

### `sort-model.js`
- `createSortModel(field, direction)`

## Entry Point: `main.js`

- Imports and instantiates all top-level classes
- Wires modules together — `SearchBar` → `CountryAPI` → `CountryList`
- Is the only file that wires top-level modules together — components may
  use other components or models internally
- Owns all top-level `try/catch` blocks — all API errors surface here
- Shows and hides `Loader` around every API call
- Passes caught errors to `Notification` for display