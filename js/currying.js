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

// function evaluate(op) {
//   return function (a) {
//     return function (b) {
//       if (op === "sum") return a + b;
//       else if (op === "multiply") return a * b;
//       else if (op === "divide") return a / b;
//       else if (op === "substract") return a - b;
//       else return "Invalid operation";
//     };
//   };
// }

// console.log(evaluate("sum")(4)(2));

// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// infinite currying

// function add(a){
//     return function(b){
//         // return a+b;
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(5)(2)(10)(23)(24)());

// partial app vs currying

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5, 6));
// console.log(x(3, 2));

// or

// console.log(sum(20)(1, 4));

// DOM

function updateElementText (id){
    return function(content){
        document.querySelector('#' + id).textContent = content;


    };
};

const updateHeader = updateElementText("Heading");

updateHeader("follow my github profile");
