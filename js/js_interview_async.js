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

async function getData() {
  return 1;
}

console.log("A");

console.log("B");

setTimeout(() => console.log("C"), 0);

getData().then(() => console.log("I got the data"));

console.log("D");

console.log("E");

console.log("F");
