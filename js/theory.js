// What are callback functions? what is it use?

// A callback function is a function that is passed as an argument to another function

// function add(x, y) {
//   return x + y;
// }
// function multiply(x, y) {
//   return x * y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function divide(x, y) {
//   return x / y;
// }

// let a = 3,
//   b = 5;

// let res = add(a, b);

// console.log(res); // 8

// function display(x, y, operation) {
//   let res = operation(x, y);

//   console.log(res);
// }

// display(10, 5, add);

// display(10, 5, multiply);

// display(10, 5, subtract);

// display(10, 5, divide);

// What is Higher order function in JS

// A Higher order function
// take one or more functions as arguments (callback function) OR Return a function as a result

// Take one or more functions as arguments

// function hof(func) {
//   func();
// }

// hof(sayHello);

// function sayHello() {
//   console.log("Hello !");
// }

// //  return a function as a result

// function createAdder(number) {
//   return function (value) {
//     return value + number;
// };
// }

// const addFive = createAdder(5);

// console.log(addFive(5));

// What are Pure and Impure functions in JS

// A Pure function that always produces the same output for the same input

// Pure function

// function add(a, b) {
//   return a + b;
// }

// console.log(add(4, 5));

// console.log(add(4, 5));

// Impure function

// An impure function can produce different outputs for the same input
//  impure functions can modify the state.
//  impure functions can have side effects

let total = 0;

function addToTotal(value) {
  total += value;

  return total;
}

console.log(addToTotal(5));

console.log(addToTotal(5));
