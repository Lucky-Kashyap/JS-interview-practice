// recursion

// console.log("recursion");

// print fun n times

// trust your function

// function fun(n) {
//   if (n === 0) {
//     return;
//   }
// console.log("fun", n);
// fun();    // maximum call stack size exceeded

//   fun(n - 1);
// }

// fun(10);

// factorial

// function fact(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }

// }

// let res = fact(5);

// console.log(res);

// fibonacci

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Printing n fibonacci sequence
// n = 10;

// for (let i = 0; i < n; i++) {
//   console.log(fibonacci(i));
// }

// sum of array

// function sumOfArrays(arr, n) {
// if (arr.length === 0) {
//   return 0;
// }

// return arr[arr.length - 1] + sumOfArrays(arr.slice(0, arr.length - 1));

// const lastElement = arr.pop();

// return lastElement + sumOfArrays(arr);

//   if (n === 0) {
//     return 0;
//   }

//   return arr[n - 1] + sumOfArrays(arr, n - 1);
// }

// console.log(sumOfArrays([1, 2, 3, 4, 5], 5));

// find array elements product

// function product(arr, n) {
//   if (n === 0) {
//     return 0;
//   }

//   return arr[n - 1] * product(arr, n - 1);
// }

// console.log(product([1, 2, 3, 4, 5], 5));

function fibo(n) {
  if (n < 2) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
