# Organizing Code in Separate Scripts 🗂️

JavaScript has long been a browser language where files were loaded one by one via `<script>` tags. Developers had to manually track which classes and functions each file needed.

The rise of server-side JavaScript made a better system necessary. **ES Modules** solved this by introducing a native `import`/`export` syntax, giving us a clean way to split code across files with explicit, trackable dependencies.

The idea is straightforward:
1. Divide your code across multiple `.js` files
2. **Export** only what you want other files to access
3. **Import** exactly what you need, where you need it
4. Use the imported functions, values, or objects as normal

<br>

> ⚠️ **Prerequisites**
> - The entry-point `<script>` tag must have `type="module"` set
> - ES Modules don't work when opening HTML files directly (`file://`) — you need a local server. Try the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code


## Folder Structure 📁

```
index.html
script.js
modules/
    ├── messageService.js
    └── sayService.js
```

## Code Walkthrough 🔍

#### `index.html`
```html
<script type="module" src="./script.js"></script>
```

#### `script.js`
```js
import { sayHello, sayGoodbye } from "./modules/sayService.js";

sayHello("Bob");
console.log("How are you?");
sayGoodbye("Bob");
```

#### `modules/messageService.js`
```js
// Named exports can be declared inline with the value/function
export const words = {
    helloVariants: ["Hey", "Hi", "Hello", "Yo"],
    goodbyeVariants: ["Bye", "Goodbye", "Cheers", "Peace"]
};

export function getRandomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
```

#### `modules/sayService.js`
```js
// Exporting can also be done directly on the function declaration
import { getRandomWord, words } from "./messageService.js";

export function sayHello(name) {
    console.log(`${getRandomWord(words.helloVariants)} there, ${name}!`);
}

export function sayGoodbye(name) {
    console.log(`${getRandomWord(words.goodbyeVariants)}, ${name}!`);
}
```


## Going Further 🔎

### Default Exports

A module can have one **default export**, which is imported without curly braces and can be named anything on import:

```js
// logger.js
export default function log(message) {
    console.log(`[LOG]: ${message}`);
}
```

```js
// script.js
import log from "./logger.js";  // name can be anything you choose
log("Hello!");
```

### Aliasing Imports

Rename an import to avoid naming conflicts or improve clarity:

```js
import { sayHello as greet } from "./modules/sayService.js";
greet("Alice");
```


## Why Use Modules ⁉️

| Without Modules | With Modules |
|---|---|
| All variables are global | Variables are scoped to their file |
| Load order must be managed manually | Dependencies are declared explicitly |
| Easy to accidentally overwrite values | No global namespace pollution |
| Hard to tell what a file depends on | Imports make dependencies obvious |

---

## Extra Materials 📘

- [MDN — JavaScript Modules Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info — Modules Introduction](https://javascript.info/modules-intro) *(beginner-friendly)*
