# API.md — External API Contract

## Base URL

```
https://restcountries.com/v3.1
```

## Endpoints to Use

### Search by name
```
GET /name/{query}?fields=name,flags,population,capital,area,borders,cca3,region
```
Used when the user types a country name or partial name into the search bar.

### Get all countries in a region
```
GET /region/{region}?fields=name,flags,population,capital,area,borders,cca3,region
```
Used for the "Europe" and "Africa" quick buttons.
- Europe: `europe`
- Africa: `africa`

### Get a country by code
```
GET /alpha/{code}?fields=name,flags,population,capital,area,borders,cca3,region
```
Used for the "Macedonia" quick button.
- Macedonia's code: `MKD` — store as a named constant, do not hardcode inline

### Get multiple countries by code list
```
GET /alpha?codes={code1},{code2}&fields=name,flags,population,capital,area,borders,cca3,region
```
Used to fetch the border countries of Macedonia.

## Fields Filter

Every request must include the fields filter to limit response size. The full
filter string used on every endpoint is:

```
fields=name,flags,population,capital,area,borders,cca3,region
```

Never omit this filter. Fetching without it returns ~50 fields per country and
will slow the app significantly.

## Two-Step Borders Fetch

Fetching Macedonia's neighbors requires two sequential requests:

```
Step 1: GET /alpha/MKD?fields=borders
        → returns { borders: ["ALB", "BGR", "GRC", "SRB", "XKX"] }

Step 2: GET /alpha?codes=ALB,BGR,GRC,SRB,XKX&fields=name,flags,population,capital,area,borders,cca3,region
        → returns CountryModel[] for each neighbor
```

Implement this as a single `fetchBorders(code)` method on `CountryAPI` that
handles both steps internally and returns a `CountryModel[]`.

## Response Shape (per country object)

```json
{
  "name": {
    "common": "North Macedonia",
    "official": "Republic of North Macedonia"
  },
  "flags": {
    "png": "https://flagcdn.com/w320/mk.png",
    "svg": "...",
    "alt": "Flag description"
  },
  "population": 2077132,
  "capital": ["Skopje"],
  "area": 25713.0,
  "borders": ["ALB", "BGR", "GRC", "SRB", "XKX"],
  "cca3": "MKD",
  "region": "Europe"
}
```

## Error Handling

| Response | Meaning | What to do |
|----------|---------|------------|
| `404` | No countries matched | Throw a user-friendly "No results found" error — not a crash |
| Non-`ok` (other) | Network or server error | Throw a descriptive error with the status code |
| `fetch()` never resolves | Network timeout or offline | Use `Promise.race()` with a 8000ms timeout — throw "Request timed out" |

Rules:
- Always check `response.ok` before calling `.json()`
- `CountryAPI` methods always throw — never return `null` or `undefined` on failure
- All thrown errors must have human-readable messages — `main.js` passes them
  directly to `Notification`

## Constants

Define these in `main.js` — do not hardcode values inline across modules:

```js
const MACEDONIA_CODE = 'MKD'
const DEFAULT_REGION_EUROPE = 'europe'
const DEFAULT_REGION_AFRICA = 'africa'
const API_TIMEOUT_MS = 8000
```