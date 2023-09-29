// start with js interview questions

// start with var vs let vs const
// we can declare variables using these 3 keywords

// console.log(num);
// var num = 10;

// console.log(num);

// scope

// it is a certain region where particular variable can be accessed beyond that we can not access

// var is functional scope but let & const is block scope

// var a = 5;
// console.log(a);

// console.log(num);

// let num = 20;

// console.log(num);

// {
//     var a = 20;
// }

// console.log(a);

// {
//     let a = 20;
// }

// console.log(a);

// {
//     const a = 20;
// }

// console.log(a);

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";

//     console.log(a);
//   }

//   console.log(a);
// }

// function test() {
//     var a = "Hello";

//     if (true) {
//       let a = "Hi";

//       console.log(a);
//     }

//     console.log(a);
//   }

//   function test() {
//     let a = "Hello";

//     if (true) {
//       var a = "Hi";

//       console.log(a);
//     }

//     console.log(a);
//   }

// function test() {
//     var a = "Hello";
//     let b = "Bye";

//     if (true) {
//       let a = "Hi";
//     //   var b = "Good bye";

//       console.log(a);
//       console.log(b);
//     }

//     console.log(a);
//   }

// test();

// declaration

// var a;
// var a;

// let b;
// let b;

// const d;
// const d;

// let a;
// {
//     let a;
// }

// initialization

// var a;

// let b;

// const d;  // error

// const d = 20;

// reinitialization

// var num = 20;

// var num = 30;

// let num = 10;

// let num = 20;

// const num = 30;
// const num=40;

// var num=10;
// num =30;
// let a = 10;
// a = 40;

// const PI = 3.14;
// PI=3;

// Javascript Execution Context

// Hoisting

// It means moving variables declaration & functions are top of the scope

// console.log(count);

// var count = 30;

// console.log(num);

// let num=10;

// console.log(PI);

// const PI = 3.14;

// let num = 10;
// var num =20;

// var num = 20;

// let num = 10;

// var is hoisted but let  a & const hoist in TDZ

// function abc() {
//   console.log(a, b, c);

//   const c = 30;
//   let b = 10;
//   var a = 20;
// }

// abc();

// console.log(count);

// let count = 10;
// var count2 = 2;


// Functions

// what is function declaration


function square(num){
  return num * num;
}




