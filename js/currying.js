// currying

// function f(a,b){
//     console.log(a,b);
// }

// function f(a){
//     return fn(b){
//         console.log(a,b);
//     }
//     fn(b);
// }

// f(10,20);

// let res = f(10)(20);
// console.log(res);

// function f(a){
//     return function(b){
//         console.log(a,b);
//     }
// }

// console.log(f(5)(90));

// sum(2)(6)(1)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// evaluate('sum')(4)(2) => 6
// evaluate('multiply')(4)(2) => 8
// evaluate('divide')(4)(2) => 2
// evaluate('subtract')(4)(2) => 2

function evaluate(op) {
  return function (a) {
    return function (b) {
      if (op === "sum") return a + b;
      else if (op === "multiply") return a * b;
      else if (op === "divide") return a / b;
      else if (op === "substract") return a - b;
      else return "Invalid operation";
    };
  };
}

console.log(evaluate("sum")(4)(2));

console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
