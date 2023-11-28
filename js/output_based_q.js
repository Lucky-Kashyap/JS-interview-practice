// output based questions

// Javascript Execution Context
// Global Execution Context
// Javascript Hoisting
// Javascript Temporal Dead Zone
// Javascript IIFE

// 1)

// console.log("Value of Age is", age);

// var age = 20;

// console.log("Value of Age is", age);

// 2)

// age = 100;

// console.log("Value of Age is", age);

// age = 100;

// var age = 20;

// let age = 30;
// age = 100;

// console.log("Value of Age is", age);

// 3)

myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("SEcond");
}

myFun();
