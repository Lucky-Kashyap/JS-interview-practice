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

### About For Loop

Learning - You don't Know FOR LOOP yet! : 😁

-In JavaScript, the code is executed in two phases:

- Memory Creation Phase. ⚡
- Code Execution Phase. ⚡

- About for loop - The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop. (Mozilla) docs about JS For Loop.

Examples:

          for(let i=0;i<3;i++){
          console.log(i); // 0 1 2
          }

          for(var i=0;i<3;i++){
          console.log(i); // 0 1 2
          }

- var - global scope
- let - block scope.
- with setTimeOut

      for(let i=0;i<3;i++){
      setTimeout(()=>{
      console.log(i); // 0 1 2
      },1000);
      }

  for (var i = 0; i <=3; i++) {
  setTimeout(() => {
  console.log(i); // 4 - (4) times
  }, 1000);
  }

- SetTimeout basically goes inside WEB API (call back Queue) of Browser.

- Lexical Declaration cannot appear in a single statement context.

- The only thing is read MDN DOCS For knowing all about for loop.

- In Docs, all aspects will be cover and given examples.

- Examples:

        for(let i=0;getI=()=>i, i<3;i++){
        console.log(getI());
        }

- Declaring a variable within the initialization block has important differences from declaring it in the upper scope, especially when creating a closure within the loop body.

- new lexical scope is created with new block level (let & const both).

- new block is created every time .when it executes loop.

- new block created for every value

       for(let i=0 ;i<3;i++){
       setTimeout(()=>console.log(i)); // 0 1 2
       }

### JS objects

Object is a collection of properties & methods.

- Key-value pair

        let user = {
          name:"Lucky",
          age:22,
      };

- We can add & remove property in object.
- we use of for in loop to iterate over every value.

Object is most Important in JS.

Everything in JavaScript is Derived From the Objects.

### Logical Based Questions

1 - Given a string, reverse each word in the sentence

      let str = "Harsh bhai kese ho";

    let res = str.split(' ').map(function(word){
        return word.split('').reverse().join('')
    });

    console.log(res.join(' '));
    console.log(res);

    function reverse(str){
    let rev = '';

    rev = str.split('').reverse().join('');

    // rev.reverse();

    // rev.join("");

    return rev;
    }
    let res = reverse(str);

    console.log(res);

2 - how to check if an object is an array or not

    function checkArr(el){
    let check = Array.isArray(el);

    console.log(check);

      }

      checkArr([]);
      checkArr({});

3- how to empty an array

    function empty(arr) {
      arr.length = 0;

      return arr;

    arr=[];

    return arr;
    return [];
    }

    console.log(empty([2, 3, 4, 5, 6, 2, 3]));

4 - how would you check if an number is an integer

    function checkInteger(a){
        return Number.isInteger(a);
    }

    console.log(checkInteger(''));

    let a = 15;

    console.log(a%1);   // 0
    if(a%1===0){
        console.log('Integer');
    }
    else{
        console.log('Not an Integer');
    }

5- make this work  
duplicate ([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

    function duplicate(arr){
        return arr.concat(arr);
    }

    let arr = [1,2,3,4,5];

    let res = duplicate(arr);

    console.log(res);

6 - reverse number

    function reverseNumber(num){

        let rev=0;
        // console.log(num%10);
        let temp = num;
        while(temp!=0){
            let rem = temp % 10;
            rev = rev*10 + rem;
            // num =num<<1;
            temp=Math.floor(temp/10);
        }

        return rev;
    }

    function reverseNumber(num){
        return Number(num.toString().split('').reverse().join(''));
    }

    let num = 123544;

    let res = reverseNumber(num);

    console.log(res);

7- string is palindrome or not

    function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

      if (rev === str) {
        return true;
      } else {
        return false;
      }
    }

    let str = "rahul";

    let res = isPalindrome(str);

    console.log(res);

8 - write a javascript function that returns a passed string with letters in
// alphabetical order

    function alphabeticalOrder(str){
        return str.split('').sort().join("");
    }

    let str ='divyanshukashyap';

    let res = alphabeticalOrder(str);

    console.log(res);

9- Write a Javascript function that accepts a string as a parameter
//and converts the first letter of each word of the string in uppercase

    let str = "hello how are You..";

    function firstUpper(str) {
      let upper = str.split(" ").map(word=> word.charAt(0).toUpperCase() + word.substring(1));

    let res = upper.charAt(0).toUpperCase() + upper.substring(1);

    for (let i = 0; i < upper.length; i++) {
      // upper.charAt(i).toUpperCase();
      upper = upper[i].charAt(i).toUpperCase() + upper.substring(1)
    }

      return upper.join(' ');
    }

    let res = firstUpper(str);

    console.log(res);

10- find targeted element

    let arr = [10, 20, 30, 40, 50, 60];

    function findTarget(target, arr) {
      let start = 0;
      let end = arr.length;
      let mid = start + (end -start) / 2;
      let res = false;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
          res = true;
        } else if (arr[mid] < target) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
        mid =start + (end -start) / 2;
      }
    console.log(start,end);
      return res;
    }

    let target = 100;

    let res = findTarget(target, arr);

    console.log(res);

11 - write a js function to get the number of occurrences of each letter in specified string

// apple = a - 1 p - 2 l - 1 e - 1

    let str = "hello i am lucky";

    function findOccurences(str) {
    let count = [];
      let occ = {};

      str.split("").forEach((char) => {
        if (occ.hasOwnProperty(char) === false) {
          occ[char] = 1;
        } else {
          occ[char]++;
        }
      });

    for(let i=0;i<str.length;i++){
      for(let j=1;j<str.length;j++){
        if(str[i]==str[j]){
            count++;

        }
      }
    }
      return occ;
    }

    let res = findOccurences(str);

    console.log(res);

12- loop an array and add all members of it

    let arr = [1,2,3,4,5,6];

    function addAll(arr){
      let sum = 0;

      for(let i=0;i<arr.length;i++){
        sum +=arr[i];
      }

      return sum;
    }

    let res = addAll(arr);

    console.log(res);

    var arr = [1, 2, 3, 4, 5, 6];

    let sum = 0;

    arr.forEach((num) => (sum += num));

    console.log(sum);

13 - in an array of numbers and strings, only add
// those members which are not strings

    let arr =['Hello',123,"jhbvh ","hjb u","hjgbuyhj",3,4,'ugvyug'];

    let sum = 0;

    arr.forEach(char=>{
    if(typeof char === 'number'){
    sum += char;
    }
    });

    console.log(sum);

14 - loop an array of objects and remove all objects
// which don't have gender's value male

    let arr = [
    {
    name: "lucky",
    gender: "male",
    },
    {
    name: "harsh",
    gender: "female",
    },
    {
    name: "arun",
    gender: "non",
    },
    {
    name: "mukul",
    gender: "others",
    },
    {
    name: "lucky",
    gender: "female",
    },
    ];

    let newArr = arr.filter(char=> char.gender === 'male');

    console.log(newArr);

15 - sbase pehle total non-male count lo
// ek non male bande ko hataane ka code likho
// fir us code ko total non-male chla do

      let count = 0;

      arr.forEach((char) => {
      if (char.gender !== "male") count++;
      });

      console.log(count);

      for (let i = 1; i <= count; i++) {
      for (let j = 0; j < arr.length; j++) {
      if (arr[j].gender !== "male") {
      arr.splice(j, 1);
      }
      }
      }

      console.log(arr);

16 - write a js function to clone an array

    function cloneArr(arr) {
    return [...arr];

    let newArr = [];

    arr.forEach((el) => newArr.push(el));

    return newArr;

    return arr.map((char) => char);
    }

    let arr = [1, 2, 3, 4, 5];

    let res = cloneArr(arr);

    console.log(arr, res);

17 - write a js function which accepts an argument & returns the type
// Note : there are six possible values that typeof returns : object, boolean, function, number , string & undefined

    function typeTeller(arg){
    return typeof arg;
    }

    console.log(typeof typeTeller);

    // console.log(typeTeller([]));
    // console.log(typeTeller('lucky'));
    // console.log(typeTeller(null));
    // console.log(typeTeller({}));
    // console.log(typeTeller(true));
    // console.log(typeTeller(10));

18 - write a js function to get the first element of an array. Passing a paramter 'n' will return the first 'n' elements of the array.

    function retreive(arr = [], n = 1) {
    console.log(arr);
    let newArr = [];

    if(n<=arr.length){
    for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
    }
    }
    else{
    console.log('limit exceded');
    }

    for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
    }

    return newArr;
    }

    let arr = [1, 2, 3, 4, 5];

    let res = retreive(arr,4);

    console.log(res);

19 - write a js function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

    function retreive(arr=[],n=1){

    if(n<=arr.length){
    for(let i=0;i<n;i++){
    console.log(arr[arr.length - 1 - i]);
    }
    }
    else{
    console.log('limit exceeded');
    }
    }

    let arr = [1,2,3,4,5,6];

    let res = retreive(arr,3);

    console.log(res);

20 - write a js program to find the most frequent item of an array

    function freq(arr){
    let freq= {};

    arr.forEach(char=>{
    if(freq.hasOwnProperty(char)) freq[char]++;
    else freq[char] = 1;
    });

    console.log(Object.keys(freq));

    let ans = Object.keys(freq).reduce((acc,num)=>{
    return freq[acc] > freq[num] ? acc : num;
    })
    console.log(ans);
    for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
    if(arr[i]==arr[j]){
    count++;
    }
    }
    }
    }

    let arr = [1,2,3,12,2,3,12,1,2,3,2121];

    freq(arr);

21 - write a js program to shuffle an
// array

// [1,2,3,4,5,6,7] = > [2,4,5,1,3,6];

    function shuffleArr(arr){
    let totalShuffleArea = arr.length;

    while(totalShuffleArea>0){
    totalShuffleArea--;
    let indexToBeExchanged = Math.floor(Math.random() \* totalShuffleArea);

    let temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
    }

    return arr;
    }

    let arr = [1,2,3,4,5,6];

    let res = shuffleArr(arr);

    console.log(res);

22 - write a js program to compute the union
// of two arrays

    function unionArr(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
    }

    let arr1 = [1, 2, 3, 4];
    let arr2 = [2, 3, 4, 6666];

    let res = unionArr(arr1, arr2);

    console.log(res);

    // count words

    function countWord(str) {
    let character = str.length;

    let wordLength = str.trim().split(" ").length;

    console.log("Character length ", character);

    return wordLength;
    }

    let str = "React JS Developer from India";

    let res = countWord(str);

    console.log("Word Count : " + res);
