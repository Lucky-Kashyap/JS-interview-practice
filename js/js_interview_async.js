// async promis

// Topics Covered
// Javascript Engine Working
// Javascript Call Stacks
// Javascript Browser WebAPI's
// Javascript Task Queue and Micro Task Queue
// Working with Javascript Promises and Timers

// - Javascript Interview Questions
// - Javascript For Beginners
// - Javascript Interview Questions  For Beginners
// - Javascript Interview Preparation
// - Javascript Interview Questions and Answers
// - Javascript Task Queue and Micro Task Queue
// - Async Javascript and Event Loop

// function a() {
//   console.log("A");
// }

// setTimeout(() => {
//   console.log("B");
// }, 0);

// a();

// console.log("C");

// Promise.resolve().then(() => console.log("D"));

// async function getData() {
//   return 1;
// }

// console.log("A");

// console.log("B");

// setTimeout(() => console.log("C"), 0);

// getData().then(() => console.log("I got the data"));

// console.log("D");

// console.log("E");

// console.log("F");

// What is the purpose of async/await? Compare it with Promises?

// Try {}
// catch()

// promise constructor
// resolve
// reject

// promises
// then
// catch

// Similarities and differences promises and async - await

// Promises and async/await can achieve the same goal of handling asynchronous operations

// async/await provides a more concise and readable syntax that resembles synchronous code whereas Promises use a chaining syntax with then() and catch() which is not that readable

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("DAta has been fetched");
    }, 1000);
  });
}

// promises

fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// async await

async function doSomething() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

doSomething();
