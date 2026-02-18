# 🧪 Exercise: Recreate `fetch()` Using Promises

## 📖 Description  

In this exercise, you will **simulate how the `fetch()` API works internally** using **JavaScript Promises**.  
You will create a function called `myFetch(url)` that:

- Returns a Promise  
- Simulates an HTTP request using `setTimeout()`  
- Resolves with fake data when the request is successful  
- Rejects with an error when the request fails (for e.g. if no url is provided)  

This exercise will help you understand:
- How Promises work
- How async operations are handled in JavaScript
- How real APIs like `fetch()` behave under the hood  

---

## ✅ Requirements  

1. Create a function called `myFetch(url)`  
2. The function must return a **Promise**  
3. Use `setTimeout()` to simulate a network delay (1–3 seconds)  
4. If the URL contains the word `"success"`, resolve the Promise with fake JSON data  
5. Otherwise, reject the Promise with an error message  
6. Use `.then()` and `.catch()` to handle the result  
