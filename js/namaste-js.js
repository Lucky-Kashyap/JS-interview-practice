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

let count = 0;

const getData = () => {
  // calls an API and gets data

  console.log("Fetching data...", count++);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      // fn();
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);

// only do some magic when the difference is greater than 300 ms
