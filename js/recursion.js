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

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing n fibonacci sequence
n = 10;

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
