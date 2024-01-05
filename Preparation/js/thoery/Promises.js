//RoadsideCoder

/*
 what is the promises?
 what is synchronus and asynchronous?
1. What is a Promise in JavaScript?
2. Explain the purpose of Promises in asynchronous programming.
3. How do Promises differ from traditional callback functions?
4. What are the three states of a Promise?
5. How do you create a Promise in JavaScript?
6. What are the two arguments passed to the Promise constructor?
7. Explain the roles of `resolve` and `reject` in a Promise.
8. How can you handle successful and failed outcomes in a Promise?
9. What is chaining in the context of Promises?
10. Describe the use of the `then` method in a Promise chain.
11. How does error handling work in Promises?
12. What is the purpose of the `catch` method in Promises?
13. Explain the difference between `Promise.all` and `Promise.race`.
14. How do you convert callback-based functions to use Promises?
15. What is the async/await syntax, and how does it relate to Promises?
16. How can you handle multiple asynchronous operations concurrently with Promises?
17. What are the common pitfalls or anti-patterns when working with Promises?
18. How do you create a Promise that resolves after a certain time delay?
19. Explain the concept of the event loop in the context of Promises.
20. How can you cancel a Promise in JavaScript?
21. What is the role of the `finally` block in Promises?
22. Can you create a Promise without using the `new Promise` syntax?
23. How does error propagation work in a Promise chain?
24. Discuss the differences between Promises and Observables.
25. How would you handle multiple asynchronous calls in sequence using Promises?
 */


 // basic use of promise
const promis = new Promise(function(resolved, reject) {
    setTimeout(() => {
    let result= false
    if(result) resolved("working")
    else   reject("error")
    }, 2000);
    
  })
  
  promis.then((res)=> console.log(res)).catch((er)=> console.log(er))
  

  /*
  what is promise chaining?
  promise chaining is a process of chaining promises together to form a sequence of asynchronous operations.
  */
  
 
  /*
  what is promise combinator?
  promise combinator is a function that takes a promise as an argument and returns a new promise.

  there 4 promise combinators
  promise.all([]) -> all promise shuld be resolved
    promise.rase([]) -> which one come firt it will show output
    promise.any([]) -> which one come firt it will show output
    promise.allSettled([]) -> which one come firt it will show output
  */