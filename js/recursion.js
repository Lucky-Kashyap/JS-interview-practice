// recursion

console.log("recursion");

function fun() {
  console.log("fun");
  // fun();    // maximum call stack size exceeded
}

fun();
