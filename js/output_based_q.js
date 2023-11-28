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

// myFun();

// var myFun = function () {
//   console.log("First");
// };

// myFun();

// function myFun() {
//   console.log("SEcond");
// }

// myFun();

// 4)

// var variable = 10;

// (() => {
//   console.log(variable);

//   variable = 20;

//   console.log(variable);
// })();

// console.log(variable);

// var variable = 30;

// console.log(variable);

// 5)

// foo = 30;

// console.log("FOO", foo);

// var foo = 100;

// console.log("FOO", foo);

// 6.)

// variable = 10;

// (() => {
//   foo = 100;
//   console.log(variable);

//   var foo = 100;
//   variable = 20;

//   console.log(variable);
// })();

// console.log(foo);

// console.log(variable);

// var variable = 30;

// console.log(variable);

// 7.)

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// 8.)

// var fullName = "Lucky Kashyap";

// var obj = {
// fullName: "Hacked Full Name",
//   prop: {
//     fullName: "Inside Prop",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
//   getFullName: function () {
//     return this.fullName;
//   },
//   getFullNameV2: () => this.fullName,
//   getFullNameV3: (function () {
//     return this.fullName;
//   })(),
// };

// console.log(obj);

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3);
