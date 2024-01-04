// what is an IIfE in JS

// Immediately Invoked Function Expression

// (function a() {
//   console.log("hi");
// })();

// a();

// practical  use case

// it will not polute the global scope

// (function () {
//   const h1 = document.querySelector("h1");

//   const p = document.querySelector("p");

//   const num = 120;

//   h1.style.backgroundColor = "pink";

//   h1.style.color = "black";

//   p.innerText = num;
// })();

// (function () {
//   const h1 = document.querySelector("h1");

//   const p = document.querySelector("p");

//   const num = 120;

//   h1.style.backgroundColor = "pink";

//   h1.style.color = "black";

//   p.innerText = num;
// })();

// +(function () {
//   console.log("IIFE");
// })();

// -(function () {
//   console.log("IIFE");
// })();

// const a = (function () {
//   console.log("IIFE");
// })();

// const a = (function () {
//   console.log("IIFE");
// })();

// !(function () {
//   console.log("IIFE");
// })();

// ~(function () {
//   console.log("IIFE");
// })();

// void (function () {
//   console.log("IIFE");
// })();

// new (function () {
//   console.log("IIFE");
// })();

// (function () {
//   console.log("IIFE");
// })();

// true &&
//   (function () {
//     console.log("IIFE");
//   })();

// false ||
//   (function () {
//     console.log("IIFE");
//   })();

// true
//   ? (function () {
//       console.log("IIFE");
//     })()
//   : "";

// try {
//   throw (function () {
//     console.log("IIFE");
//   })();
// } catch (e) {
//   e();
// }
