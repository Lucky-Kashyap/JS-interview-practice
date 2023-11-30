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

function a() {
  console.log("A");
}

setTimeout(() => {
  console.log("B");
}, 0);

a();

console.log("C");

Promise.resolve().then(() => console.log("D"));
