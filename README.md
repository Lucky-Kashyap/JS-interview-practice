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

### use strict

- varible declaration

         "use strict";

          a = 12;

          console.log(a);

- can't delete the variable

        "use strict";

        var a = 12;

        a = 20;

        delete a;

- can't make same parameters in functions

      // b ki value overwrite ho rhi hai

      'use strict'

      function calculator(a, b, b) {

        return a + b + b;
      }

      let res = calculator(12, 2, 3);

      console.log(res);

      "use strict";

      function calculator(a, b, b) {
        return a + b;
      }

      let res = calculator(12, 2, 3);

      console.log(res);

### Recursion

print fun n times

      function fun(n){
        if(n==0){
          return ;
        }

        console.log('fun',n);

      }

      fun(10);

print factorial

        function fact(n){

          if(n==0 || n==1){

            return 1;
          }
          else{
            return n*fact(n-1);
          }
        }

        let res = fact(5);

        console.log(res);

### Map vs Filter vs Reduce

- they are basically array methods
- that are used to iterate over an array
- and perform transformation or computation
- each may return or not

      const nums = [1,2,3,4,5];

      // callback num,i,nums  -> element , index, array

      const multiplyThree = nums.map(num=>num*3);

      console.log(multiplyThree);

# filter

    const nums = [1,2,3,4,12,1,5];

    const moreThanTwo = nums.filter(num => num>2);

    console.log(moreThanTwo);

# reduce

    const nums = [1, 2, 3, 4, 5];

- by default acc = 0 acc,curr,i,arr
- acc result of previous value

- if there is no initial value, it takes
- first element of array as value for
- accumulator

      const sum = nums.reduce((acc, num,i,arr) => {
      return acc + num;
      });

      console.log(sum);

# Write polyfill

    const nums = [1,2,3,4,5];

    function mapPoyfill(callback,nums){
    let arr=[];
    for(let i=0;i<nums.length;i++){
    arr.push(callback(nums[i]));
    }

    return arr;

    }

    function multiplyThree(num){
    return num\*3;
    }

    const newArr = mapPoyfill(multiplyThree,nums);

    console.log(newArr);



        const nums = [1,2,3,4,5];

        Array.map((num,i,arr)=>{

        });

        Array.prototype.myMap = function(callback){
        let temp = [];

        for(let i=0;i<this.length;i++){
          temp.push(callback(this[i],i,this));
        }

        return temp;
        }

        const multiplyThree = nums.myMap((num,i,arr)=>{
        return num \* 3;
        });

        console.log(multiplyThree);

# filter polyfill

    const nums = [1, 2,12, 3, 4, 5];

    function filterPoyfill(callback, nums) {
    const newArr = [];

    for (let i = 0; i < nums.length; i++) {
    newArr.push(callback(nums[i]));
    if (callback(nums[i])) {
    newArr.push(nums[i]);
    }
    }

    return newArr;
    }

    function moreThanTwo(num) {
    return num > 2;
    }

    const filterThanTwo = filterPoyfill(moreThanTwo, nums);

    console.log(filterThanTwo);

    const nums = [1, 2, 3, 4, 5];

    Array.prototype.myFilter = function (callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
    temp.push(this[i]);
    }
    }
    return temp;
    };

    const moreThanTwo = nums.myFilter((num) => num > 2);

    console.log(moreThanTwo);

# reduce polyfill

    const nums = [1, 2, 3, 4, 5];

    Array.prototype.myReduce = function (callback) {
    let temp=0;

    for (let i = 0; i < this.length; i++) {
    temp += callback(0,this[i]);
    }
    return temp;
    };

    const sum = nums.myReduce((acc, num) => acc + num);

    console.log(sum);

    Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; }

    return accumulator;
    };

    const nums = [1,2,3,4,5,6];

    const result = nums.myReduce((acc,num)=>{
    return acc += num;
    },10);

    console.log(result);

# map vs forEach

    const arr = [2, 5, 3, 6];

    const newArr = arr.map((num) => num + 2);

    const newForEachArr = arr.forEach((num, i) => {
    arr[i] = num + 4;
    });

    console.log(newArr);

    console.log(arr);
    console.log(newForEachArr);

# Return only name of students in Capital

    let students = [
    {
    name: "Lucky",
    rollNumber: 31,
    marks: 80,
    },
    {
    name: "Jenny",
    rollNumber: 15,
    marks: 79,
    },
    {
    name: "Kaushal",
    rollNumber: 16,
    marks: 35,
    },
    {
    name: "Dilpreet",
    rollNumber: 7,
    marks: 85,
    },
    {
    name: "aushal",
    rollNumber: 16,
    marks: 85,
    },
    {
    name: "Dilpreet",
    rollNumber: 7,
    marks: 69,
    },
    ];

    let names = [];

    for(let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase());
    }

    console.log(names);

    const filterName = students.filter((st)=> st.name);

    const filterName = students
    .map((st) => st.name)
    .filter((name) => {
    return name.toUpperCase();
    });

    console.log(filterName);

    const capitalName = students
    .map((st) => st.name.toUpperCase())

    console.log(capitalName);

# return only details of those who scored more than 60 marks

    const score = students.filter(st=>st.marks>60);

    const score = students.map((st) => st.marks).filter((marks) => marks > 60);

    console.log(score);

    // more than 60 marks & rollNumber greater than 15

    const score = students.filter(st=>st.marks>60 && st.rollNumber>15);

    console.log(score);

    const sumOfMarks = students.map(st=>st.marks).reduce((acc,st)=>{
    return acc += st;
    });

    console.log(sumOfMarks);

# return only names of students who scored more than 60

    const nameScore = students.filter(st=> st.marks>60 ).map(st=>st.name);

    console.log(nameScore);

# return total marks for students with marks greater than 60 after 20

// marks have been added to those who scored less than 60

    const totalMarks = students
    .map((st) => {
    if (st.marks < 60) {
    st.marks += 20;
    }

        return st;

    })
    .filter((st) => st.marks > 60)
    .reduce((acc, curr) => acc + curr.marks, 0);

    console.log(totalMarks);

# Async vs Sync JS

- Basically how JS code excutes & run async code
- promise, setTimeout , async, await

For asynchronous Code :

- we write code in promise, setTimeout, async, await

- Javascript Engine Working
- Javascript Call Stacks
- Javascript Browser WebAPI's
- Javascript Task Queue and Micro Task Queue
- Working with Javascript Promises and Timers

- Javascript Task Queue and Micro Task Queue
- Async Javascript and Event Loop

       function a() {
         console.log("A");
       }

       setTimeout(() => {
         console.log("B");
       }, 0);

       a();

       console.log("C");

       Promise.resolve().then(() => console.log("D"));

       async function getData() {
         return 1;
       }

Example 2:

      console.log("A");

      console.log("B");

      setTimeout(() => console.log("C"), 0);

      getData().then(() => console.log("I got the data"));

      console.log("D");

      console.log("E");

      console.log("F");

# Hamburger Menu

Using HTML, CSS & JS

![ezgif com-video-to-gif (1)](https://github.com/Lucky-Kashyap/JS-interview-practice/assets/88204554/014cdcc6-c39e-457f-983e-5434658c63b7)

# Problem Based on map vs filter vs reduce

1. Convert array

Input: const arr = [1,2,3,58,5,6,24,8,15,4];

Output : [1,3,3,59,5,7,25,9,15,5]

    function convertArr(arr) {
      let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        arr[i] += 1;

    newArr.push(arr[i]);
      }
    }

      newArr = arr.map((el) => (el % 2 == 0 ? (el += 1) : el));

      return newArr;
    }

    const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

    let res = convertArr(arr);

    console.log(res);

2 - Given an array of objects. Write a function to find the sum of ages of each person.

    const arr = [
      {
        name: "jay",
        age: 60,
      },
      {
        name: "Gloria",
        age: 36,
      },
      {
        name: "Maddy",
        age: 16,
      },
      {
        name: "Joe",
        age: 9,
      },
    ];

    // output  121 // 60 + 36 + 16 + 9

    console.log(arr.map((el) => (el.age += el.age)));

    console.log(arr.map((el) => el.age).reduce((acc, curr) => (acc += curr)));

3 - Given array of object & find this :

Output: ['Tanay','Tanvi'];

    const family = [
      {
        name: "Tanay",
        haveCycle: true,
      },
      {
        name: "Akansha",
        haveCycle: false,
      },
      {
        name: "Tanvi",
        haveCycle: true,
      },
      {
        name: "Kanak",
        haveCycle: false,
      },
    ];



    console.log(
      family.filter((name) => name.haveCycle == true).map((name) => name.name)
    );

    console.log(family.map((el) => el.haveCycle === true).filter((name) => name));

    console.log(family);

4 - Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number

Output: [2,6,8,4]

    const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

    console.log(arr.filter((el) => el % 2 == 0 && el <= 8));

5 - Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

Your output should be : ['repeat']

    const arr = ["eat", "sleep", "repeat", "code"];

    console.log(arr.filter((el) => el.length > 5));

6 - Given an array. Write a function to get the sum of all elements which are greater than 50.

Your output should be: 190

    const arr = [1, 2, 3, 58, 5, 62, 6, 8, 70];



    console.log(arr.reduce((acc, cur) => (acc += cur > 50)));

    console.log(arr.filter((el) => el > 50).reduce((acc, curr) => (acc += curr)));

7 - Given an array. Write a function to find the product of all elements which are even.

Your output should be: 96

      const arr = [1, 2, 3, 7, 5, 6, 8, 9];



      console.log(
        arr.filter((el) => el % 2 == 0).reduce((acc, curr) => (acc *= curr))
      );

8 - Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

Output : {'0':'you','1':'all','2':'are','3':'rockstars'};

    function convertIntoObj(arr) {
      let obj = {};

      for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
      }

      return obj;
    }

    let res = convertIntoObj(arr);

    console.log(res);

    console.log(arr.reduce((acc, curr, index) => ({ ...acc, [index]: curr }), {}));

9 - Given an array. Write a function to join all elements of the array with a hyphen in between them

Output: Violet-Indigo-Blue-Green-Yellow-Orange-Red

    function addArrow(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += "-";
    }

      return arr.join("-");
    }

    let res = addArrow(arr);

    console.log(res);

    const arr = "Violet";

    console.log([...arr].join("-"));

10 - Flatten an array without using flat()

    const input = [
      ["a", "b", "c"],
      ["c", "d", "e"],
      ["e", "d", "f"],
    ];

    const flatArr = [...input];

    const flatArr = input.reduce((acc, curr) => [...acc, ...curr], []);

    console.log(flatArr);

### Scenario Based Questions

- How to validate user input as they type in a form

- How to implement pagination for displaying large sets of data?

- How to store key-value pairs & efficiently access and manipulate the data?

- How to implement drag-and-drop functionality for elements on a webpage?

- How to iterate over elements in an array and perform a specific operation on each element?

- How to implement a feature that allows users to search for specific items in a large dataset?

- How to implement a feature that allows users to perform live search suggestions as they type?

# 100 Days of JavaScript Coding Challenges

## Day 1

#### Write a function to find longest word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

- Constraints

  - The input string may contain alphabetic characters, digits, spaces, and punctuation.

  - The input string is non-empty.

  - The input string may contain multiple words seperated by spaces

- Note

  - If the input strng is empty or contains only whitespace, the function should return an false.

  - The function should ignore leading and trailing whitespace when determining the longest word.

- sort method sort values in unicode value . first letter in a ascending order

- a>b 1 b>a -1

## Day 2

#### Programming Question: HAsh Tag Generator

- You are required to implement a function generateHAsh that generates a hash tag from a given input string.

- The hash tag should be constructed as follows:

- The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

- If the length of the input string is greater then 280 characters or if the input string is empty or contains only whitespaces, the function should return false.

- Otherwise the function should return the generated hash tag prefixed with #.

- write a function generateHAsh to accomplish this task

- generatehash
  - input str = 'my name is lucky kashyap';
  - output #MyNameIsLuckyKashyap

## Day 3

#### Programming Question: Count Occurrences of Character

- Write a function called countChar tht takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

- Input : console.log(countChar("MissIssippi","I")) // output : 4

- Note:
  - The function should be case-senstive
  - The function should handle both lowercase and uppercase characters
  - The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

## Day 4

#### Coding Challenge: Check Triangle

- Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene"

- 3 3 3 "equilateral"
- 3 4 3 "isosceles"
- 5 8 6 "scalene"

- Todo The Function should adhere to the following rules:

  - If all three sides are of equal length, return "equilateral"
  - If only two sides are of equal length, return "isosceles"
  - If all three sides have different lengths, return "scalene"

## Day 5

#### Write a function to sort an array of numbers in an ascending order.

- Note:

  - The function should take an array of numbers as input.
  - It should return a new array with the numbers sorted in ascending order.
  - The original array should remain unchanged.
  - You are not allowed to use the built-in sort() method.

## Day 6

#### Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

- Note:

  - The input string may contain letters, digits, spaces, punctuation, and special characters.

  - The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.

  - Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.

  - The function should return true if the input string is a palindrome and false otherwise.

  - .replace(/\W/g,''); Uses the replace() method with a regular ecpression (/\W/g) to remove ll non-word characters from the string. Here:

  - \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).

  - The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.

  - So, replace(/\W/g,'') replaces all non-word characters with an empty string, effectively removing them from the string.

## day 7

#### Write a function findMax that takes an array of numbers as input nd returns the maximum number in the array.

## Day 8

### Challenge: Factorial Finder

#### Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

- Here are some examples of factorial calculations:

  - factorial(0) => 1
  - factorial(1) => 1
  - factorial(2) => 2
  - factorial(3) => 6
  - factorial(4) => 24
  - factorial(5) => 120

- Your function should work for any non-negative integer

## Day 9

### Challenge: Calculate the Average

#### Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

##### Your function should:

- Accept an array of numbers as input.

- Calculate the sum of all the numbers in the array.

- Divide the sum by total number of elements in the array to find the average.

- Return the calculated average.

- Note:

  - Ensure the function handles arrays of any length.
  - The average should be returned as a floating-point-number.

## day 10

#### Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contains the same elements in the same order), and false otherwise.

- Note:

  - The function should return false if the arrays have different lengths.
  - The function should compare each element of arr1 with the corresponding element in arr2.
  - The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

## Day 11

#### Write a function that takes a number as input and returns the sum of its digits.

- Note:

  - The input number will always be a positive integer.

  - The input number can have multiple digits.

  - The output should be the sum of all the digits in the input number.

  - This function calculates the sum of digits without converting the number to a string.

## Day 12

#### Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

- The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.

- Note:

  - The input array may contain both positive and negative integers.

  - The input array may be empty.

  - The elements in the input array are not guranteed to be sorted.
  - The output array should retain the original order of elements from the input array

## Day 13

#### Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o' and 'u' as vowels (both lowercase and uppercase)

- Note:

  - The input string may contain letters in both uppercase and lowercase.

  - The output should be a non-negative intger representing the count of vowels in the input string.

## Day 14

#### Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

- Note:

  - The input num will be a positive integer
    Zero (0) and negative integers are not considered powers of two.

  - The function should return true if the given number is a power of 2, and false otherwise.

## Day 15

#### Write a function to calculate the sum of squares of al elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3\*3 = 1+4 + 9 = 14

## Day 16

#### Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.Find the Minimum Value in an Array

- Note:

  - The input array may contain both positive and negative integers
  - The input array may be empty
  - The input array may container duplicate values

- Ensure the function handles edge cases gracefully, such as an empty input array.

- Consider using ES6 features like the spread syntax (...) for a concise implementation.

- Todo In JavaScript, the spread syntax (...) is used to expand
  an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.

## Day 17

#### Write a function to convert a string to camelCase & snake_case.

- slice() extracts a part of a string and returns the extracted part ina new String.

  - JS counts positions from zero.
  - slice() extracts up to but not includding indexEnd.

## Day 18

#### Write a function to chek if a character is uppercase or lowercase.

- Constraints:

  - The input char will be a single character.
  - The character can be any printable ASCII character.
  - You can assume that the input will always be a string of length 1.

- Note:

  - Ensure that the function correctly identifies uppercase characters based on their ASCII values.
  - Optimize the function to handle edge cases efficiently.

## Day 19

#### Write a function to check if a given string starts with a specific substring.

- str: A string (e.g. "Hello world").

- subStr: A substring to check if it starts the given string(e.g. "Hello").

- Output: true if the given string starts with the specified substring, otherwise false

## Day 20

#### Write a function to reverse a string without using any built-in method or libraries.The function should take a string as input and return the reversed string.

## Day 21

#### Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

- Note :

  - In math, the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbers.

- Constraints:

  - The input array may contain positive and negative integers.
  - The input array may be empty. If it is empty, the function should return 0.

## Day 22

#### Write a JS function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values

##### For example, the median of 3, 3, 5, 9, 15 is 5. If there ia an even number of observations, then there is no single middl values; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6

- todo

  - Sort the array in ascending order.
  - If the array has an odd number of elements, the median is the middle element.
  - If the array has an even number of elements, the median is the average of the two middle elements.

## Day 23

#### Write a JS function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

- Note:

  - Accept an array of numbers as input.
  - Create an empty object called counts to store the counts of each element.
  - Iterate through each number in the array.
  - For each number, increment the count in the counts object.
  - If the count for a number does not exist yet, initialize it to 1.
  - Return the counts object containing the counts of each element.
  - The input aray may contain positive integers only.
  - You can assume that the input array is not empty.

## Day 24

#### Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

- Note:

  - The input array will always contain at least one element.
  - The mode will be unique (i.e., there won't be multiple numbers with the same highest frequency).

## Day 25

#### Write a function to calculate the factorial of a number (using Recursion)

- Recursion is a programming technique where a function calls itself in order to solve a problem. Inessence, it's function that calls itself with smaller or simpler input until it reaches a base case

- Base Case:

  - The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion, Withput a base case the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

- Recursive Case:

  - It is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion

## Day 26

#### Write a function series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It starts with 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

- Note:
  - Fibonacci number is calculated using formula:
  - F(n)= F(n-1) + F(n-2), where, F(1) = F(2)= 1.

## Day 27

#### Write a function called repeatString that takes two parameters:

- str: A string that needs to be repeated.
- num: An integer representing the number of times the string should be repeated.
- The function should repeat the input string str the specified number of times num and return the resulting string.

- Note:

  - The input string str will contain only alphanumeric characters and punctuation marks.
  - The input number num will be a non-negative integer.
  - The output string length should not exceed the length of str multiplied by num.

## Day 28

#### Write a function called truncateString tht takes two parameters:

- str: A string tht needs to be truncated.
- maxLength: An integer representing the maximum length of the string allowed.
- The function should truncate the input string str if its length exceeds the specified maxLength. If trunction occurs, function should add '...' to the end of the trucated string.

- Constraints:
  - The input string str will contain only alphanumeric characters and punctution marks.
  - The maximum length maxLength will be a positive integer.
  - The output string length should not exceed maxLength + 3 characters due to the addition of '...'.

## Day 29

#### Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive)

- Input:

  - a: An integer representing the starting number of the range.
  - b: An integer representing the ending number of the range.
  - arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

- Output:

  - An array containing consecutive numbers from a to b (inclusive).

- Constraints:
  - a and b will be integers.
  - a will be less than or equal to b

# Interview Prep

Happy Learning! ✨

Made with ☕️ by Divyanshu Kashyap
