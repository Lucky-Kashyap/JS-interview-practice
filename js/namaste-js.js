// 1 call apply bind

// let name = {
//   firstname: "Lucky",
//   lastname: "Kashyap",
// printFullName: function () {
//   console.log(this.firstname + " " + this.lastname);
// },
// };

// let printFullName = function (hometown, state) {
//   console.log(
//     this.firstname +
//       " " +
//       this.lastname +
//       " from " +
//       hometown +
//       " state " +
//       state
//   );
// };

// let name2 = {
//   firstname: "Ajay",
//   lastname: "Kumar",
// printFullName: function () {
//   console.log(this.firstname + " " + this.lastname);
// },
// };

// console.log(name);

// name.printFullName();

// invoked function directly

// function borrowing
// printFullName.call(name);
// printFullName.call(name2);

// for more arguments

// apply would come into picture

// printFullName.apply(name, ["Delhi", "Delhi NCR"]);
// printFullName.apply(name2, ["Agra", "UP"]);

// bind method

// it gives you the copy of that method which can be invoked later

// return function and invoked later

// let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");

// printMyName();

// Polyfill for bind method

// currying in JS

// let multiply = function (x, y) {
//   console.log(x + y);
// };

// let multiplyByTwo = multiply.bind(this, 2);

// let multiplyByThree = multiply.bind(this, 4);

// console.log(multiplyByTwo);

// multiplyByTwo(10);

// multiplyByThree(6);

// debouncing concept

// let count = 0;

// const getData = () => {
// calls an API and gets data

//   console.log("Fetching data...", count++);
// };

// const doSomeMagic = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     let args = arguments;

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       // fn();
//       getData.apply(context, arguments);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);

// only do some magic when the difference is greater than 300 ms

// closure

//  A closure in JavaScript is a combination of a function and the lexical environment

// closure can be used for data modification with data privacy (encapsulation)

// closures are used to modify data or variables safely

// persistent data & state each time createCounter() is called, it creates a new closure with its own seperate count variable

// code reusabilty the closure returned by createCounter()
//  is  a reusable counter function

function createCounter() {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
}

// DAta privacy & encapsulated

const closure1 = createCounter();

closure1(); // 1

closure1(); // 2

// persistent data & state

const closure2 = createCounter();

closure2(); // 1
