// debouncing
// search bar
// scrolling
// window resizez

// unwanted function

// application performance

// function baar baar call na ho

// let input = document.getElementById("search");

// let count = 0;

// function getData() {
//   count++;
//   console.log("fetching data", count);
// }

// function myDebounce(call, id) {
//   let timer;

//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     setTimeout(() => {
//       call();
//     }, id);
//   };
// }
// const betterFunction = myDebounce(getData, 1000);

// What is eval() function in JS ?

// eval () is a built-in function that evaluates a string as a JavaScript code and dynamically executes it.

// let num = 10;

// let num2 = 20;

// let res = "num + num2";

// console.log(eval(res));

// console.log(typeof eval("120"));

// Waht are constructor functions?

// constructor functions are a way of creating objects and initializing their properties

// using class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`${this.name} + ${this.age}`);
  }
}

// constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating objects from class

var person1 = new Person("Bob", 23);

//  uisng constructor function

// same way object create

var person2 = new Person("Ajay", 26);
