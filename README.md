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

### Hoisting: It means moving variables declaration & functions are top of the scope

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

### Functions in JS :

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

### Arrow function vs regular function:

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

### Truthy & Falsy values:

0,null,'',{},-0,false,undefined,Infinity,-Infinity are falsy values

& all other are truthy values

          if(true){
            console.log('truthy');
          }

          if(0){
            console.log('falsy value');
          }

### Solving Array Based Questions logical Based:

1.  How do you check if an element exits in an array?

          const findElement = (arr, target) => {
          for (let x of arr) {
            console.log(x);
            if (x == target) {
              return true;
            }
          }
          return false;
        };
          console.log(findElement(arr, "hello"));

          console.log(findElement(arr, 3));

          console.log(arr.includes("hello"));

2.  How do check if an element exits or not if exits return its index

          const findElementIndex =    (arr,target)=>{
            for(let i=0;i<arr.length;i++){
                if(arr[i] === target){
                    return i;
                }
            }
            return -1;
        }
        console.log(findElementIndex(arr,3));
        console.log(arr.indexOf(2));

3.  How to delete, add & Update element from specific index

            arr.splice(1,3);  // delete 3 items from 1 index

        console.log(arr);

        arr.splice(1, 0, 10, 20, 30); // add items from 1 index

        arr.splice(1,3,10,20,30,40);

        let subArr = arr.slice(1,3);   //slice or break arr into subarray

4.  how to add two array

          const newArr = [...arr, ...arrE];

          console.log(newArr);

          const arr = [1, 2, 3, 4, "hello"];

5.  how to check if two arrays are equal

        const isArrayEqual=(arr1,arr2)=>{
        if(arr1.length !== arr2.length){
            return false;
        }

        for(let i=0;i<arr1.length;i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }

        // return true;

        return arr1.length === arr2.length && arr1.every((ele,i)=> arr1[i] === arr2[i])

        }

        const arr = [1, 2, 3, 4, "hello"];

        const arr2 = [1,2,3,4,'hello'];

        console.log(isArrayEqual(arr,arr2));

6.  how to sort an array in ascending and desending order

        let arr =[1,4,6,0,-9,-5];

        arr.sort();

        console.log(arr);

7.  How to reverse array

          let arr = [1,4,6,0,-9,-5];

          arr.reverse();
          let newArr = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          newArr.push(arr[i]);
        }

        console.log(newArr);

8.  filter vs find

// find method return first element when condition satisfies

// filter check for revery element and return all elements which satisfy the condition

        const numbers = [1, 2, 3, 4, 5];

      // const evenNumbers = numbers.filter((number) => number % 2 === 0);

    const evenNumbers = numbers.find((number) => number % 2 === 0);
    console.log(evenNumbers); // return first element which statis condiiton
