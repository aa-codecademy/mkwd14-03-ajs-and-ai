# Browser Storage 🗄️

Modern browsers offer several ways to persist data on the client side. Each has different use cases, limitations, and lifetimes - choosing the right one depends on what you're storing and for how long.


## Overview

| Storage Type | Capacity | Lifetime | Accessible From | Sent with Requests |
|---|---|---|---|---|
| `localStorage` | ~5MB | Until manually cleared | Same origin | ❌ |
| `sessionStorage` | ~5MB | Until tab is closed | Same tab only | ❌ |
| `Cookies` | ~4KB | Configurable expiry | Same origin + server | ✅ |
| `IndexedDB` | Hundreds of MB | Until manually cleared | Same origin | ❌ |
| `Cache API` | Varies | Until manually cleared | Same origin (Service Workers) | ❌ |


## localStorage

Persists data with no expiry - survives page refreshes, tab closes, and browser restarts. Best for user preferences, themes, or settings.

```js
// Store a value
localStorage.setItem("theme", "dark");

// Retrieve a value
const theme = localStorage.getItem("theme");
console.log(theme); // "dark"

// Remove a specific key
localStorage.removeItem("theme");

// Clear everything
localStorage.clear();
```

> ⚠️ `localStorage` only stores strings. Always use `JSON.stringify` / `JSON.parse` for objects:

```js
const user = { name: "John", age: 25 };

// Store object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const stored = JSON.parse(localStorage.getItem("user"));
console.log(stored.name); // "John"
```


## sessionStorage

Works exactly like `localStorage` but is scoped to the current tab and cleared when the tab is closed. Good for temporary state like form progress or a multi-step wizard.

```js
// Store a value
sessionStorage.setItem("step", "2");

// Retrieve a value
const step = sessionStorage.getItem("step");
console.log(step); // "2"

// Remove a specific key
sessionStorage.removeItem("step");

// Clear everything
sessionStorage.clear();
```

> 💡 Two tabs open on the same site do **not** share `sessionStorage` - each tab has its own isolated instance.


## Cookies 🍪

Small pieces of data sent automatically with every HTTP request to the server. Best for authentication tokens and session management. Can be set from both JavaScript and the server.

```js
// Set a cookie (expires in 7 days)
const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
document.cookie = `username=John; expires=${expires}; path=/`;

// Read all cookies (returns one big string)
console.log(document.cookie); // "username=John; theme=dark"

// Helper to get a specific cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    const found = cookies.find(c => c.startsWith(`${name}=`));
    return found ? found.split("=")[1] : null;
}

console.log(getCookie("username")); // "John"

// Delete a cookie by setting its expiry in the past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```


## Extra Materials 📘

- [MDN - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN - IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [MDN - Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)