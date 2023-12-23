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

// async await still relies on Promises for handling the asynchronous nature of code

// function fetchData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("DAta has been fetched");
//     }, 1000);
//   });
// }

// promises

// fetchData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async await

// async function doSomething() {
//   try {
//     const result = await fetchData();
//     console.log(result);
//   } catch (e) {
//     console.error(e);
//   }
// }

// doSomething();

// Browser APIs

// DOM API

// XMLHttpRequest (XHR)

// Fetch API

// Storage API

// History API

// Geolocation API

// Notification API

// Canvas API

// Audio & Video APIs

// What is the difference between Promise.all() and Promise.race()

// Promise.all() is used when you want to wait for all the inut promises to settle

// The returned promise resolves with an array of resolved values from the input promises, in the same order as the input promises.

// Promise.race() is used when you want to react as soon a the first promise settles

// The settles value(fulfilled values or rejection reason) of the first settled promise is used as the settled value of the returned promise

let promise1 = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});
let promise2 = new Promise((resolve, reject) => {
  let a = 10;
  if (a === 1) {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});
let promise3 = new Promise((resolve, reject) => {
  let str = "lucky";
  if (str === "") {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.error(e);
  });

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.error(e);
  });
