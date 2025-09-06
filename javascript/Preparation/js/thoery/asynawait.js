/*
1. What is the purpose of `async` and `await` in JavaScript?
2. Explain the difference between synchronous and asynchronous code.
3. How do you define an asynchronous function in JavaScript using `async`?
4. What is the return type of an asynchronous function in JavaScript?
5. How does `await` work in the context of an asynchronous function?
6. What happens when an `async` function is called?
7. How do you handle errors in an `async/await` function?
8. Explain the concept of the event loop in the context of `async/await`.
9. What is the difference between using `async/await` and using Promises?
10. How can you use `async/await` with `try/catch` for error handling?
11. Discuss the role of the `await` keyword in making asynchronous code look synchronous.
12. Can you use `async/await` with traditional callback-based functions?
13. Explain the behavior of multiple `await` statements in an `async` function.
14. What is the purpose of the `Promise.all` method in conjunction with `async/await`?
15. How do you handle parallel asynchronous operations using `async/await`?
16. What is the significance of the `async` keyword in function declarations and arrow functions?
17. How can you convert a Promise-based function to use `async/await` syntax?
18. What happens if you `await` a non-Promise value inside an `async` function?
19. Discuss the role of the `finally` block in `async/await` error handling.
20. How does the order of execution differ between `async/await` and Promises?
21. Explain how you might handle timeouts using `async/await`.
22. Discuss the potential pitfalls or common mistakes when using `async/await`.
23. How does `async/await` improve code readability compared to callback-based or Promise-based code?
24. Can you use `async/await` with event-driven programming in Node.js?
25. How do you handle concurrency issues with multiple `async/await` calls?
*/

const result =async ()=>{
    const message= await "this is promis"
    console.log(message)
} 

async function name(params) {
    return await "ello"}