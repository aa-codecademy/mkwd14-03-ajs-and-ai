# ⁉️ JavaScript Advanced - QUIZ  (with answers)

## 📦 Topic 1 - AJAX, HTTP & JSON

**1. What does AJAX stand for, and what problem does it solve in web development?**

AJAX stands for **Asynchronous JavaScript and XML**. It solves the problem of needing to reload the entire page to fetch new data from a server. With AJAX, JavaScript can send and receive data in the background and update only parts of the page dynamically.

---

**2. What is the difference between an API and a JSON file?**

An **API** (Application Programming Interface) is a service or endpoint that your code communicates with to request or send data. A **JSON file** is just a data format used to structure and transfer that data. APIs often *respond with* JSON, but they are not the same thing — an API is a communication contract, JSON is a format.

---

**3. `fetch()` is a synchronous function - it blocks the rest of your code until the response arrives. (true/false)**

❌ **False.** `fetch()` is asynchronous. It returns a Promise and does not block code execution while waiting for the response.

---

**4. What does the following code do? What will be logged?**

```javascript
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

It makes an HTTP GET request to the URL. When the response arrives, `.json()` parses the body into a JavaScript object/array, which is then logged. If anything fails (network error, bad URL, etc.), the `.catch()` logs the error prefixed with `"Error:"`.

---

**5. JSON supports all JavaScript data types, including functions and `undefined`. (true/false)**

❌ **False.** JSON only supports: strings, numbers, booleans, arrays, objects, and `null`. Functions and `undefined` are not valid JSON and get stripped out during serialization with `JSON.stringify()`.

---

**6. What HTTP method does `fetch()` use by default?**

`fetch()` uses the **GET** method by default. To use other methods like POST, PUT, or DELETE, you need to pass an options object with a `method` property.

---

**7. What is the purpose of the `.json()` method called on a fetch response?**

The response from `fetch()` is a `Response` object — the body has not been parsed yet. Calling `.json()` reads the response body and parses it from a JSON string into a usable JavaScript object or array. It returns a Promise.

---

**8. How would you send a POST request using `fetch()`? What options do you need to include?**

```javascript
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Ana", age: 25 })
});
```

You need: `method` set to `"POST"`, a `Content-Type` header so the server knows the format, and a `body` with the data serialized using `JSON.stringify()`.

---

## 🔁 Topic 2 - Function Types, Scope & Recursion

**1. What is the difference between a parameter and an argument?**

A **parameter** is the variable name defined in the function declaration — it's a placeholder. An **argument** is the actual value passed when the function is called. Example: in `function greet(name)`, `name` is the parameter. In `greet("Ana")`, `"Ana"` is the argument.

---

**2. What is the difference between these two function definitions? When can each be called?**

```javascript
// A
function sayHello() { console.log("Hello"); }

// B
const sayHello = () => { console.log("Hello"); };
```

**A** is a function declaration — it is **hoisted**, so it can be called anywhere in the file, even before the line it's defined on. **B** is an arrow function assigned to a `const` — it is **not hoisted**, so it can only be called after that line is reached during execution.

---

**3. What is the difference between `let` and `var` in terms of scope?**

`var` is **function-scoped** — accessible anywhere within the function it was declared in (or globally if declared outside a function). `let` is **block-scoped** — it only exists within the `{}` block it was declared in (e.g. inside an `if` or `for`). `let` is preferred because it's more predictable and avoids common bugs.

---

**4. Arrow functions have their own `this` binding. (true/false)**

❌ **False.** Arrow functions do **not** have their own `this`. They inherit `this` from the surrounding lexical context where they were defined. This is a key difference from regular functions.

---

**5. What does this recursive function do? What is the output of `countdown(3)`?**

```javascript
function countdown(n) {
  if (n <= 0) { console.log("Go!"); return; }
  console.log(n);
  countdown(n - 1);
}
```

It counts down from `n` to 1, then logs `"Go!"`. Calling `countdown(3)` outputs:
```
3
2
1
Go!
```
The base case `n <= 0` stops the recursion.

---

**6. What is a self-invoked (IIFE) function and why would you use one?**

An **IIFE** (Immediately Invoked Function Expression) is a function that is defined and called at the same time:
```javascript
(function() {
  console.log("I run immediately!");
})();
```
It is used to create a **private scope** — variables declared inside it don't leak to the outer/global scope. Useful for avoiding naming conflicts and encapsulating logic.

---

**7. What will this code log? Why?**

```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const increment = outer();
increment();
increment();
increment();
```

It logs `1`, `2`, `3`. This demonstrates a **closure** — `inner` keeps a reference to `count` from `outer`'s scope even after `outer` has finished executing. Each call to `increment()` updates and logs the same `count` variable.

---

**8. What is the difference between function scope and block scope?**

**Function scope** means a variable is accessible anywhere within the function it was declared in. **Block scope** means a variable is only accessible within the `{}` block it was declared in. `var` is function-scoped, while `let` and `const` are block-scoped.

---

**9. What will this code output? Explain why.**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

It logs `3`, `3`, `3`. Because `var` is function-scoped (not block-scoped), all three `setTimeout` callbacks share the **same `i` variable**. By the time they execute, the loop has finished and `i` is `3`. Using `let` instead of `var` would log `0`, `1`, `2` because `let` creates a new binding per iteration.

---

**10. Every recursive function must have a base case. What happens if you forget to include one? (true/false + explain)**

✅ **True.** Without a base case, the function calls itself indefinitely. This keeps adding frames to the call stack until it exceeds its limit, causing a **stack overflow** error (`Maximum call stack size exceeded`).

---

## ⚙️ Topic 3 - Higher-Order Functions

**1. What makes a function a "higher-order function"? Give one example from JavaScript's built-in array methods.**

A higher-order function is one that either **takes a function as an argument** or **returns a function**. Examples: `map()`, `filter()`, `reduce()` — all accept a callback function as an argument.

---

**2. What is the value of `result` after this code runs?**

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(n => n % 2 === 0).map(n => n * 10);
```

`result` is `[20, 40]`. `filter` keeps only even numbers `[2, 4]`, then `map` multiplies each by 10.

---

**3. What does `reduce` return here?**

```javascript
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => acc + curr, 0);
```

`10`. `reduce` accumulates a running sum starting at `0`: `0+1=1`, `1+2=3`, `3+3=6`, `6+4=10`.

---

**4. A pure function can read and modify a global variable as long as it always returns a value. (true/false)**

❌ **False.** A pure function must have **no side effects**. Reading or modifying external/global state violates purity. It must depend only on its inputs and always return the same output for the same inputs.

---

**5. What is the difference between `map()` and `forEach()`?**

`map()` returns a **new array** with the transformed values — the original is unchanged. `forEach()` executes a function for each element but returns `undefined` — it's used purely for side effects like logging, not for producing a new array.

---

**6. What does this code log? What concept does it demonstrate?**

```javascript
function transform(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

console.log(transform([1, 2, 3, 4], n => n * n));
```

Logs `[1, 4, 9, 16]`. It demonstrates passing a **function as an argument** (higher-order function). The `operation` parameter receives the arrow function `n => n * n` and applies it to each element.

---

**7. Using `map`, `filter`, and `reduce`, what does this chain produce?**

```javascript
const words = ["hello", "world", "js", "is", "awesome"];
const result = words
  .filter(w => w.length > 2)
  .map(w => w.toUpperCase())
  .reduce((acc, w) => acc + " " + w);
```

Result: `"HELLO WORLD AWESOME"`. `filter` removes words with 2 or fewer characters (`"js"` and `"is"`), leaving `["hello", "world", "awesome"]`. `map` uppercases them. `reduce` joins them with a space.

---

**8. What is the difference between a pure function and an impure function? Give an example of each.**

A **pure function** always returns the same output for the same input and has no side effects:
```javascript
function add(a, b) { return a + b; } // pure
```
An **impure function** has side effects or depends on external state:
```javascript
let total = 0;
function addToTotal(n) { total += n; } // impure - modifies external variable
```

---

**9. Functions in JavaScript are "first-class citizens". What does this mean?**

It means functions are treated like any other value — they can be stored in variables, passed as arguments to other functions, returned from functions, and stored in arrays or objects. This is what makes higher-order functions and callbacks possible.

---

**10. What will this code output?**

```javascript
const actions = [
  n => n + 1,
  n => n * 2,
  n => n - 3
];

const result = actions.reduce((acc, fn) => fn(acc), 10);
console.log(result);
```

`19`. Starting with `10`: `10 + 1 = 11`, `11 * 2 = 22`, `22 - 3 = 19`. Each function in the array is applied to the result of the previous one.

---

## ⏱️ Topic 4 - Under The Hood & Asynchronous JavaScript

**1. Where is JavaScript code actually executed? Is it compiled or interpreted?**

JavaScript is executed in a **JavaScript engine** — in browsers, the most common is Google's **V8** engine (also used in Node.js). Modern JS engines use a technique called **JIT (Just-In-Time) compilation** — the code is parsed and compiled to machine code right before execution, making it faster than pure interpretation.

---

**2. JavaScript can run multiple threads at the same time to handle heavy tasks. (true/false)**

❌ **False.** JavaScript is **single-threaded** — it has one call stack and executes one thing at a time. It relies on the browser's Web APIs and the event loop to handle async tasks without blocking.

---

**3. What is the call stack and how does it work? What happens when a function calls another function?**

The **call stack** is a data structure that tracks which function is currently executing. When a function is called, a new frame is pushed onto the stack. When it returns, the frame is popped off. When a function calls another function, the new function is pushed on top — execution continues from the top of the stack downward as functions complete.

---

**4. What will this code log and in what order? Explain using the call stack.**

```javascript
function first() { console.log("first"); second(); }
function second() { console.log("second"); third(); }
function third() { console.log("third"); }
first();
```

Logs: `"first"`, `"second"`, `"third"`. `first()` is pushed onto the stack, logs `"first"`, then calls `second()` which is pushed on top. `second()` logs `"second"`, calls `third()`. `third()` logs `"third"` and returns, then `second()` returns, then `first()` returns.

---

**5. What is a stack overflow error? What typically causes it?**

A **stack overflow** occurs when the call stack exceeds its maximum size. It's typically caused by **infinite recursion** — a function that calls itself without ever hitting a base case, so stack frames keep getting added until memory runs out. Results in: `Maximum call stack size exceeded`.

---

**6. Since JavaScript is single-threaded, how is it able to handle async operations like timers and network requests without freezing the page?**

JavaScript delegates async operations to **browser Web APIs** (like `setTimeout`, `fetch`, DOM events). The browser handles these in the background. When they complete, their callbacks are placed in the **callback queue**. The **event loop** watches the call stack — when it's empty, it moves callbacks from the queue onto the stack to be executed.

---

**7. What are Web APIs? Give three examples of things handled by the browser outside of the JavaScript engine.**

**Web APIs** are browser-provided features that JavaScript can use but that run outside the JS engine itself. Examples:
- `setTimeout` / `setInterval` — timer management
- `fetch` — network requests
- `addEventListener` — DOM event handling

---

**8. What is the event loop? Describe its job in one or two sentences.**

The **event loop** continuously monitors the call stack and the callback queue. When the call stack is empty, it takes the first callback from the queue and pushes it onto the stack to be executed — this is how async callbacks get to run after the synchronous code finishes.

---

**9. What order are these lines logged in? Why?**

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

Order: `1`, `3`, `2`. Even with a `0ms` delay, `setTimeout` is a Web API — its callback goes to the callback queue and only runs after the call stack is empty. So `1` and `3` log synchronously first, then `2` runs.

---

**10. What is the difference between `setTimeout` and `setInterval`? How do you stop a running `setInterval`?**

`setTimeout` executes its callback **once** after a given delay. `setInterval` executes its callback **repeatedly** at a given interval. To stop a `setInterval`, you save its return value (an ID) and pass it to `clearInterval()`:
```javascript
const id = setInterval(() => console.log("tick"), 1000);
clearInterval(id); // stops it
```

---

**11. What will this code log? Explain the answer.**

```javascript
let x = 5;
let y = x;
y = 100;

const obj1 = { score: 5 };
const obj2 = obj1;
obj2.score = 100;

console.log(x);          // 5
console.log(y);          // 100
console.log(obj1.score); // 100
console.log(obj2.score); // 100
```

`x` stays `5` because numbers are **value types** — `y = x` copies the value, so changing `y` doesn't affect `x`. Objects are **reference types** — `obj2 = obj1` does not copy the object, both variables point to the **same object in memory**. So changing `obj2.score` also changes `obj1.score`.

---

## 🤝 Topic 5 - Promises & Async/Await

**1. What are the three possible states of a JavaScript Promise?**

- **Pending** — the operation has not completed yet
- **Fulfilled** — the operation succeeded and has a resolved value
- **Rejected** — the operation failed and has a reason (error)

---

**2. Rewrite this Promise chain using `async/await`:**

```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

```javascript
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

**3. You can use `await` outside of an `async` function. (true/false)**

❌ **False** (with a caveat). `await` must be used inside an `async` function. The exception is top-level `await` in ES modules, but this is not available in regular scripts.

---

**4. What is "callback hell" and how do Promises help solve it?**

**Callback hell** is the pattern of deeply nested callbacks that becomes hard to read and maintain — often called the "pyramid of doom". Promises solve this by allowing `.then()` chaining, which keeps code flat and readable. `async/await` improves this further, making async code look almost like synchronous code.

---

**5. `async/await` is completely different from Promises under the hood - they are separate mechanisms. (true/false)**

❌ **False.** `async/await` is **syntactic sugar built on top of Promises**. An `async` function always returns a Promise, and `await` pauses execution inside that function until the awaited Promise resolves.

---

**6. What does `Promise.all()` do? How is it different from running multiple `await` calls one after another?**

`Promise.all()` runs multiple Promises **in parallel** and waits for all of them to resolve:
```javascript
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```
Running `await` calls one after another executes them **sequentially** — each one waits for the previous to finish before starting. `Promise.all()` is faster when the operations are independent.

---

**7. What will this code log?**

```javascript
async function getData() {
  return 42;
}

const result = getData();
console.log(result);
```

It logs a **Promise object** (e.g. `Promise { 42 }`), not `42`. An `async` function always returns a Promise — to get `42` you'd need `await getData()` or `.then()`.

---

**8. What is the role of `try/catch` when using `async/await`?**

`try/catch` is used to handle errors in `async/await` code. If an awaited Promise rejects (or any error is thrown inside the `try` block), execution jumps to the `catch` block — equivalent to `.catch()` in a Promise chain.

---

**9. An `async` function always returns a Promise, even if you return a plain value inside it. (true/false)**

✅ **True.** Returning a plain value from an `async` function automatically wraps it in a resolved Promise. So `return 42` becomes `Promise.resolve(42)`.

---

**10. What will this code output and why?**

```javascript
async function fetchData() {
  console.log("A");
  const result = await Promise.resolve("B");
  console.log(result);
  console.log("C");
}

console.log("D");
fetchData();
console.log("E");
```

Output: `D`, `A`, `E`, `B`, `C`.

`D` logs first (synchronous). `fetchData()` is called — `A` logs immediately (before the first `await`). The `await` pauses `fetchData` and hands control back. `E` logs (synchronous code continues). Then the microtask queue resumes `fetchData`: `B` logs, then `C`.

---

## 🏗️ Topic 6 - Advanced Objects & OOP

**1. What is the difference between a constructor function and an ES6 class in JavaScript?**

Both create objects from a template. A **constructor function** is the older approach — a regular function called with `new`. An **ES6 class** is cleaner, more readable syntax that does the same thing under the hood. Classes support explicit `constructor()`, `extends` for inheritance, and `get`/`set` more clearly. Internally, JavaScript classes are still prototype-based.

---

**2. What is logged by this code?**

```javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

class Dog extends Animal {
  speak() { console.log(`${this.name} barks.`); }
}

const d = new Dog("Rex");
d.speak();
```

`"Rex barks."` — `Dog` overrides the `speak()` method from `Animal`. Since `d` is a `Dog` instance, its own `speak()` runs, not the parent's.

---

**3. What is `this` in JavaScript? How does its value change depending on context?**

`this` refers to the object currently executing the code. Its value depends on context:
- Regular function called alone → global object (or `undefined` in strict mode)
- Object method → the object the method belongs to
- Event handler → the element that fired the event
- Arrow function → inherited from the surrounding lexical scope
- With `new` → the newly created object

---

**4. What do the spread operator and destructuring do here?**

```javascript
const person = { name: "Ana", age: 25, city: "Skopje" };
const { name, age } = person;
const updated = { ...person, age: 26 };
```

`{ name, age } = person` is **destructuring** — extracts `name` and `age` into standalone variables. `{ ...person, age: 26 }` uses the **spread operator** to copy all properties into a new object, then overrides `age` with `26`. Result: `{ name: "Ana", age: 26, city: "Skopje" }`. The original `person` is unchanged.

---

**5. A static method on a class can be called on an instance of that class. (true/false)**

❌ **False.** Static methods belong to the **class itself**, not instances. They must be called on the class directly: `MyClass.myMethod()`. Calling them on an instance throws an error.

---

**6. What is the difference between `Object.freeze()` and `Object.seal()`?**

`Object.freeze()` makes an object **fully immutable** — no properties can be added, removed, or modified. `Object.seal()` **prevents adding or removing** properties, but existing properties can still be modified. Both are shallow — nested objects are not affected.

---

**7. What does `Object.keys()` return? What about `Object.entries()`?**

`Object.keys()` returns an array of the object's own **property names** (keys). `Object.entries()` returns an array of **[key, value] pairs**. Example:
```javascript
const obj = { a: 1, b: 2 };
Object.keys(obj);    // ["a", "b"]
Object.entries(obj); // [["a", 1], ["b", 2]]
```

---

**8. What will this code log?**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a);
console.log(rest);
```

`a` logs `1`. `rest` logs `{ b: 2, c: 3 }`. The **rest operator** in destructuring collects all remaining properties not explicitly destructured into a new object.

---

**9. What are getters and setters in a class? Write a simple example using `get` and `set`.**

Getters and setters allow you to define how a property is accessed and assigned, while running logic behind the scenes:
```javascript
class User {
  constructor(name) { this._name = name; }

  get name() { return this._name.toUpperCase(); }

  set name(value) {
    if (typeof value !== "string") return;
    this._name = value;
  }
}

const u = new User("ana");
console.log(u.name); // "ANA"
u.name = "marko";
console.log(u.name); // "MARKO"
```

---

**10. Two objects with identical properties and values are strictly equal (`===`) in JavaScript. (true/false)**

❌ **False.** `===` for objects checks **reference equality** — whether both variables point to the exact same object in memory, not whether they look the same. Two separate objects with identical contents are not `===` equal.

---

## 🔗 Topic 7 - Prototypes & Inheritance

**1. How is inheritance done in JavaScript and what does it solve?**

In JavaScript, inheritance is done through the **prototype chain**. Every object has a prototype, and when a property or method is not found on the object itself, JavaScript looks up the chain. It solves **code reuse** — instead of duplicating properties and methods across many objects, shared behavior can be defined once and inherited.

---

**2. What is the prototype chain in JavaScript?**

Every object has an internal link to another object called its **prototype**. When you access a property or method, JavaScript first looks on the object itself, then walks up the prototype chain — checking each linked prototype — until it finds it or reaches `null`. This chain is how inheritance works in JavaScript.

---

**3. All objects in JavaScript ultimately inherit from `Object`. (true/false)**

✅ **True.** All standard JavaScript objects ultimately inherit from `Object.prototype` at the top of the prototype chain. This is why methods like `.toString()` and `.hasOwnProperty()` are available on every object.

---

**4. What does `instanceof` check in this example? What will be logged?**

```javascript
class Vehicle {}
class Car extends Vehicle {}

const myCar = new Car();
console.log(myCar instanceof Car);      // ?
console.log(myCar instanceof Vehicle);  // ?
console.log(myCar instanceof Object);   // ?
```

All three log `true`. `instanceof` checks whether a constructor appears anywhere in the object's prototype chain. Since `Car` extends `Vehicle` which extends `Object`, `myCar` is an instance of all three.

---

**5. What is the purpose of calling `super()` inside a child class constructor?**

`super()` calls the **parent class's constructor**. It must be called before using `this` in a child class constructor. It initializes the parent's properties on the new object, ensuring the child correctly inherits them.

---

**6. What will this code log?**

```javascript
class Shape {
  constructor(color) { this.color = color; }
  describe() { return `I am a ${this.color} shape.`; }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  describe() {
    return super.describe() + ` I am a circle with radius ${this.radius}.`;
  }
}

const c = new Circle("red", 5);
console.log(c.describe());
```

`"I am a red shape. I am a circle with radius 5."` — `Circle`'s `describe()` calls `super.describe()` to get the parent's result, then appends its own info.

---

**7. You can add a method to all instances of a built-in type (like `Array`) by adding it to its prototype. This is always a recommended practice. (true/false + explain)**

❌ **False** — while it is *possible*, it is **not recommended**. This is called **prototype pollution** and can cause serious issues: it may conflict with future built-in methods, break third-party libraries, and lead to unexpected behavior across your codebase. It's considered a bad practice in production code.

---

**8. What is the difference between own properties and inherited properties on an object? How can you check if a property is an own property?**

**Own properties** are defined directly on the object itself. **Inherited properties** come from the prototype chain. You can check using `hasOwnProperty()`:
```javascript
const obj = { a: 1 };
console.log(obj.hasOwnProperty("a"));        // true  (own)
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

---

**9. What will this code output?**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const p = new Person("Marko");
console.log(p.greet());
console.log(p.hasOwnProperty("name"));
console.log(p.hasOwnProperty("greet"));
```

- `"Hi, I'm Marko"` — `greet()` is found on the prototype chain
- `true` — `name` is an own property (set via `this.name` in the constructor)
- `false` — `greet` is on `Person.prototype`, not on the instance itself

---

**10. What are getters and setters and why are they used for?**

**Getters** and **setters** are special methods that control how a property is read (`get`) and written (`set`). They are used to:
- **Validate** input before assigning a value (e.g. reject negative numbers)
- **Compute** a value on the fly instead of storing it (e.g. `area` from `width * height`)
- **Control access** to private/internal properties (convention: `_propertyName`)
- **Add logic** without changing how the property looks to the outside — it still looks like a regular property access
