# MODELS.md — Data Models

These models define the shape of data as it flows through the app — from the raw API response to what each module actually uses. Raw API data must be mapped into these shapes before being passed to any UI module.

User classes for creating the models !

---

## `CountryModel`

Represents a single country as used throughout the app. Created by transforming the raw API response.

```
CountryModel {
  name        : String   // country.name.common
  officialName: String   // country.name.official
  flag        : String   // country.flags.png (URL)
  flagAlt     : String   // country.flags.alt  (fallback: "{name} flag")
  population  : Number   // country.population
  capital     : String   // country.capital[0] (fallback: "N/A")
  area        : Number   // country.area       (fallback: 0)
  code        : String   // country.cca3
  borders     : String[] // country.borders    (fallback: [])
  wikiUrl     : String   // derived — see Formatter.wikiUrl(name)
  region     : String    // country.region
}
```

**Rules:**
- Never pass a raw API object to a component — always map to a `CountryModel` first
- All fallbacks must be applied at mapping time, not in the UI
- Implement as a plain object factory function: `createCountryModel(raw)` → returns a `CountryModel`

---

## `NotificationModel`

Represents a notification message shown to the user.

```
NotificationModel {
  message : String                       // human-readable text
  type    : 'error' | 'warning' | 'info' // controls visual style
  duration: Number                       // ms before auto-dismiss (default: 5000)
}
```

---

## `SortModel`

Represents the current sort state of the displayed list.

```
SortModel {
  field    : 'name' | 'population' | 'area'
  direction: 'asc' | 'desc'
}
```

**Rules:**
- `CountryList` holds the active `SortModel` internally
- When a new sort is applied, `CountryList` re-sorts its current `CountryModel[]` array in place — no API call
- Sorting by `name` uses locale-aware string comparison (`localeCompare`)
- Sorting by `population` and `area` uses numeric comparison

---

## Data Flow

```
REST API response (raw JSON)
        │
        ▼
  country-api.js  ── createCountryModel(raw) ──►  CountryModel[]
        │
        ▼
    main.js  ──── passes CountryModel[] ────►  country-list.js
        │
        ▼
  country-list.js  ──── passes one CountryModel ────►  country-card.js (render)
```

No module below `main.js` ever sees raw API data.