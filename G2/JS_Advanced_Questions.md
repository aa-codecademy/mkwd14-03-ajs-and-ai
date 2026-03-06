# JavaScript Advanced - QUIZ ⁉️


## 📦 Topic 1 - AJAX, HTTP & JSON

1. What does AJAX stand for, and what problem does it solve in web development?

2. What is the difference between an API and a JSON file?

3. `fetch()` is a synchronous function - it blocks the rest of your code until the response arrives. (true/false)

4. What does the following code do? What will be logged?

```javascript
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

5. JSON supports all JavaScript data types, including functions and `undefined`. (true/false)

6. What HTTP method does `fetch()` use by default?

7. What is the purpose of the `.json()` method called on a fetch response?

8. How would you send a POST request using `fetch()`? What options do you need to include?



## 🔁 Topic 2 - Function Types, Scope & Recursion

1. What is the difference between a **parameter** and an **argument**?

2. What is the difference between these two function definitions? When can each be called?

```javascript
// A
function sayHello() {
  console.log("Hello");
}

// B
const sayHello = () => {
  console.log("Hello");
};
```

3. What is the difference between `let` and `var` in terms of scope?

4. Arrow functions have their own `this` binding. (true/false)

5. What does this recursive function do? What is the output of `countdown(3)`?

```javascript
function countdown(n) {
  if (n <= 0) {
    console.log("Go!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
```

6. What is a self-invoked (IIFE) function and why would you use one?

7. What will this code log? Why?

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

8. What is the difference between **function scope** and **block scope**?

9. What will this code output? Explain why.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

10. Every recursive function must have a **base case**. What happens if you forget to include one? (true/false + explain)



## ⚙️ Topic 3 - Higher-Order Functions

1. What makes a function a "higher-order function"? Give one example from JavaScript's built-in array methods.

2. What is the value of `result` after this code runs?

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(n => n % 2 === 0).map(n => n * 10);
```

3. What does `reduce` return here?

```javascript
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => acc + curr, 0);
```

4. A pure function can read and modify a global variable as long as it always returns a value. (true/false)

5. What is the difference between `map()` and `forEach()`?

6. What does this code log? What concept does it demonstrate?

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

7. Using `map`, `filter`, and `reduce`, what does this chain produce?

```javascript
const words = ["hello", "world", "js", "is", "awesome"];
const result = words
  .filter(w => w.length > 2)
  .map(w => w.toUpperCase())
  .reduce((acc, w) => acc + " " + w);
```

8. What is the difference between a **pure function** and an **impure function**? Give an example of each.

9. Functions in JavaScript are "first-class citizens". What does this mean?

10. What will this code output?

```javascript
const actions = [
  n => n + 1,
  n => n * 2,
  n => n - 3
];

const result = actions.reduce((acc, fn) => fn(acc), 10);
console.log(result);
```



## ⏱️ Topic 4 - Under The Hood & Asynchronous JavaScript

1. Where is JavaScript code actually executed? Is it compiled or interpreted?

2. JavaScript can run multiple threads at the same time to handle heavy tasks. (true/false)

3. What is the **call stack** and how does it work? What happens when a function calls another function?

4. What will this code log and in what order? Explain using the call stack.
```javascript
function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first();
```

5. What is a **stack overflow** error? What typically causes it?

6. Since JavaScript is single-threaded, how is it able to handle async operations like timers and network requests without freezing the page?

7. What are **Web APIs**? Give three examples of things handled by the browser outside of the JavaScript engine.

8. What is the **event loop**? Describe its job in one or two sentences.

9. What order are these lines logged in? Why?
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

10. What is the difference between `setTimeout` and `setInterval`? How do you stop a running `setInterval`?

11. What will this code log? Explain the answer.

```js
let x = 5;
let y = x;
y = 100;

const obj1 = { score: 5 };
const obj2 = obj1;
obj2.score = 100;

console.log(x);       // ?
console.log(y);       // ?
console.log(obj1.score); // ?
console.log(obj2.score); // ?
```

## 🤝 Topic 5 - Promises & Async/Await

1. What are the three possible states of a JavaScript Promise?

2. Rewrite this Promise chain using `async/await`:

```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

3. You can use `await` outside of an `async` function. (true/false)

4. What is "callback hell" and how do Promises help solve it?

5. `async/await` is completely different from Promises under the hood - they are separate mechanisms. (true/false)

6. What does `Promise.all()` do? How is it different from running multiple `await` calls one after another?

7. What will this code log?

```javascript
async function getData() {
  return 42;
}

const result = getData();
console.log(result);
```

8. What is the role of `try/catch` when using `async/await`?

9. An `async` function always returns a **Promise**, even if you return a plain value inside it. (true/false)

10. What will this code output and why?

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



## 🏗️ Topic 6 - Advanced Objects & OOP

1. What is the difference between a **constructor function** and an **ES6 class** in JavaScript?

2. What is logged by this code?

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rex");
d.speak();
```

3. What is `this` in JavaScript? How does its value change depending on context?

4. What do the spread operator and destructuring do here?

```javascript
const person = { name: "Ana", age: 25, city: "Skopje" };
const { name, age } = person;
const updated = { ...person, age: 26 };
```

5. A static method on a class can be called on an **instance** of that class. (true/false)

6. What is the difference between `Object.freeze()` and `Object.seal()`?

7. What does `Object.keys()` return? What about `Object.entries()`?

8. What will this code log?

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a);
console.log(rest);
```

9. What are **getters** and **setters** in a class? Write a simple example using `get` and `set`.

10. Two objects with identical properties and values are strictly equal (`===`) in JavaScript. (true/false)



## 🔗 Topic 7 - Prototypes & Inheritance

1. How is inheritance done in JavaScript and what does it solve ?

2. What is the **prototype chain** in JavaScript?

3. All objects in JavaScript ultimately inherit from `Object`. (true/false)

4. What does `instanceof` check in this example? What will be logged?

```javascript
class Vehicle {}
class Car extends Vehicle {}

const myCar = new Car();
console.log(myCar instanceof Car);      // ?
console.log(myCar instanceof Vehicle);  // ?
console.log(myCar instanceof Object);  // ?
```

5. What is the purpose of calling `super()` inside a child class constructor?

6. What will this code log?

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `I am a ${this.color} shape.`;
  }
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

7. You can add a method to all instances of a built-in type (like `Array`) by adding it to its prototype. This is always a recommended practice. (true/false + explain)

8. What is the difference between **own properties** and **inherited properties** on an object? How can you check if a property is an own property?

9. What will this code output?

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

10. What are `getters` and `setters` and why are they used for ?

