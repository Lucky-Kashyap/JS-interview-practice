# JS-interview-practice

javascript interview prep practice theory and problem solving

#Solving theory questions as well as some problem solving based on arrays , string & object.

### var vs let vs const

var has globl scope or function scope

- we can delclare it as many times as we want.
- value can redeclare and reinitialize.

      var a = 5;

      var a =  10;

      console.log(a);

let has block scope

- we can declare it with let keyword and can be accessed with that specific block
- redeclaration of let variable not allowed.

      // let num = 20;

      console.log(num);

      {
          let a = 20;
      }

      console.log(a);

        {
           let a = 20;
        }

      console.log(a);

const has also block

- declare it only one time and we can not mutate value of const variable
- redeclaration not allowed.

      const age = 20;

      console.log(a);

      {
        const a = 10;
        console.log(a);
      }

      console.log(age);
      console.log(a);  // give error

Hoisting: It means moving variables declaration & functions are top of the scope

      console.log(count);

      var count = 30;

      console.log(num);

      let num=10;

      console.log(PI);

      const PI = 3.14;

      let num = 10;
      var num =20;

      var num = 20;

      let num = 10;

var is hoisted but let a & const hoist in TDZ

Functions in JS :

- function expression
- function statement
- function declaration
- Anonymous function
- Arrow Function ()=>{}
- first class function:

basically it is variable like function it can be assigned

function can be passed to another function

        function square(num){
          console.log(num*num);
        }

        var square = function(num){
          console.log(num*num);
        }

- IIFE: Immediately invoked function

      (function square(num){
         return num* num;
       console.log(num * num);
      })(10);

      (function(x){
         return (function(y){
           console.log(x);
        })(2);
       })(1);

Arrow function vs regular function:

    function square(num){
        return num * num;
    }

    const square = (num)=>{
      return num * num;
    }

About 'this' keyword:

        console.log(this);

        function fn(){
          console.log(this);
        }

        fn();

Truthy & Falsy values:

0,null,'',{},-0,false,undefined,Infinity,-Infinity are falsy values

& all other are truthy values

          if(true){
            console.log('truthy');
          }

          if(0){
            console.log('falsy value');
          }
