// What are callback functions? what is it use?

// A callback function is a function that is passed as an argument to another function

function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

let a = 3,
  b = 5;

let res = add(a, b);

console.log(res); // 8

function display(x, y, operation) {
  let res = operation(x, y);

  console.log(res);
}

display(10, 5, add);

display(10, 5, multiply);

display(10, 5, subtract);

display(10, 5, divide);
