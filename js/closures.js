// lexical scope

// closures

// var userName ='Lucky';  // global scope

// function local(){
// local scope
//     var userName ='Lucky';

//     console.log(userName);
// }

// local();

// function subscribe(){
//     var name = 'Lucky';

//     function displayName(){
// inner scope
// alert(name);
//         console.log(name);
//     }

//     displayName();
// }

// subscribe();

// var userName = 'Piyush';

// function makeFunc() {
//   var name = "Mozilla";

//   function displayName() {
//     console.log(name,userName);
//   }

//   return displayName;
// }

// var myFunc = makeFunc();

// myFunc();

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
