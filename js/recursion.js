// recursion

// console.log("recursion");

// print fun n times

// trust your function

function fun(n) {
  if (n === 0) {
    return;
  }
  console.log("fun", n);
  // fun();    // maximum call stack size exceeded

  fun(n - 1);
}

fun(10);
