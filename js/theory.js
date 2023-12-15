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

// let total = 0;

// function addToTotal(value) {
//   total += value;

//   return total;
// }

// console.log(addToTotal(5));

// console.log(addToTotal(5));

//  What is the difference between arguments & parameters

//  Parameters are the placeholders defined in the function declaration

//  a & b are parameters

// function add(a, b) {
//   console.log(a + b);
// }

// Arguments are the actual values passed to a function when it is invoked or called

// add(3, 4);

//  3 4 are arguments

// What is the difference map() & forEach() array methods of an Array?

// Array methods for modification & iteration

// map() forEach()

// Using map()

// let arr1 = [1, 2, 3];

// let mapArray = arr1.map((e) => e * 2);

// console.log(mapArray);

// map return a new array

// [2,4,6]
// The map() method is used when you want to modify each element of an array & create a new aaray with the modified values

// Using forEach()

// let arr2 = [1, 2, 3];

// arr2.forEach((e) => console.log(e * 2));

// Does not return anything

// 2 4 6

// console.log(arr2);

// [1,2,3]

//  The forEach method is used when you want to perform some operation on each element of an array without creating a new array

// What is the difference between for...of & for...in loop ?

// for... of loop is used to loop through the values of an object like arrays,strings.

// It allows you to access each value directly,without having to use an index

// let arr = [1, 2, 3];

// for (let val of arr) {
//   console.log(val);
// }

// 1 2 3

//  for...in loop is used to loop through the properties of an object

//  It allows you to iterate over the keys of an object and access the values associated by using keys as the index.

// for in loop

// const person = {
//   name: "Lucky",
//   role: "Developer",
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// for (let key in arr) {
// console.log(person[key]);
//   console.log(key);
// }

// Lucky Developer

// What is the difference between for and for... of loop in JS

// for loop is slightly more complex having more lines of code whereas for... of is much simpler and better for iterating arrays.

// let arr = [1, 2, 3];

// for loop has more code

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 1 2 3

//  for of is much simpler

// for (let val of arr) {
//   console.log(val);
// }

//  1 2 3

//  What is the difference between named and anonymous functions whean to use what in applications

//  Named functions have a name identifier

// Named function
//  function declaration

// function sum(a, b) {
//   return a + b;
// }

// console.log(add(5, 4));

// output 9

//  Use named functions for big & complex logics

//  Use when you want to reuse one function at multiple places

// ANonymous functions do not have a name identifier and cannot be referenced directly by name

console.log(
  (function (a, b) {
    return a * b;
  })(4, 5)
);

//  output 20

// Use anonymous functions for small logics

//  Use when want to use a function in a single place
