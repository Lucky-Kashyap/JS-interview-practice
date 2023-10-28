// 1 - Given a string, reverse each word in the sentence

// let str = "Harsh bhai kese ho";

// let res = str.split(' ').map(function(word){
//     return word.split('').reverse().join('')
// });

// console.log(res.join(' '));
// console.log(res);

// function reverse(str){
//     let rev = '';

//     rev = str.split('').reverse().join('');

//     // rev.reverse();

//     // rev.join("");

//     return rev;
// }

// let res = reverse(str);

// console.log(res);

// 2 - how to check if an object is an array or not

// function checkArr(el){
//     let check = Array.isArray(el);

//     console.log(check);

// }

// checkArr([]);
// checkArr({});

// 3- how to empty an array

// function empty(arr) {
//   arr.length = 0;

//   return arr;

// arr=[];

// return arr;
// return [];
// }

// console.log(empty([2, 3, 4, 5, 6, 2, 3]));

// 4 - how would you check if an number is an integer

// function checkInteger(a){
//     return Number.isInteger(a);
// }

// console.log(checkInteger(''));

// let a = 15;

// console.log(a%1);   // 0
// if(a%1===0){
//     console.log('Integer');
// }
// else{
//     console.log('Not an Integer');
// }

// 5- make this work  duplicate ([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr){
//     return arr.concat(arr);
// }

// let arr = [1,2,3,4,5];

// let res = duplicate(arr);

// console.log(res);

// 6 - reverse number

// function reverseNumber(num){

//     let rev=0;
//     // console.log(num%10);
//     let temp = num;
//     while(temp!=0){
//         let rem = temp % 10;
//         rev = rev*10 + rem;
//         // num =num<<1;
//         temp=Math.floor(temp/10);
//     }

//     return rev;
// }

// function reverseNumber(num){
//     return Number(num.toString().split('').reverse().join(''));
// }

// let num = 123544;

// let res = reverseNumber(num);

// console.log(res);

// 7 string is palindrome or not

// function isPalindrome(str) {
// let rev = str.split("").reverse().join("");

//   if (rev === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let str = "rahul";

// let res = isPalindrome(str);

// console.log(res);

// 8 - write a javascript function that returns a passed string with letters in
// alphabetical order

// function alphabeticalOrder(str){
//     return str.split('').sort().join("");
// }

// let str ='divyanshukashyap';

// let res = alphabeticalOrder(str);

// console.log(res);

// 9 Write a Javascript function that accepts a string as a parameter
//and converts the first letter of each word of the string in uppercase

// let str = "hello how are You..";

// function firstUpper(str) {
//   let upper = str.split(" ").map(word=> word.charAt(0).toUpperCase() + word.substring(1));

// let res = upper.charAt(0).toUpperCase() + upper.substring(1);

// for (let i = 0; i < upper.length; i++) {
//   // upper.charAt(i).toUpperCase();
//   upper = upper[i].charAt(i).toUpperCase() + upper.substring(1)
// }

//   return upper.join(' ');
// }

// let res = firstUpper(str);

// console.log(res);

// find targeted element

// let arr = [10, 20, 30, 40, 50, 60];

// function findTarget(target, arr) {
//   let start = 0;
//   let end = arr.length;
//   let mid = start + (end -start) / 2;
//   let res = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       res = true;
//     } else if (arr[mid] < target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//     mid =start + (end -start) / 2;
//   }
// console.log(start,end);
//   return res;
// }

// let target = 100;

// let res = findTarget(target, arr);

// console.log(res);

// 11 - write a js function to get the number of occurrences of each letter in specified string

// apple = a - 1 p - 2 l - 1 e - 1

// let str = "hello i am lucky";

// function findOccurences(str) {
// let count = [];
//   let occ = {};

//   str.split("").forEach((char) => {
//     if (occ.hasOwnProperty(char) === false) {
//       occ[char] = 1;
//     } else {
//       occ[char]++;
//     }
//   });

// for(let i=0;i<str.length;i++){
//   for(let j=1;j<str.length;j++){
//     if(str[i]==str[j]){
//       // count++;

//     }
//   }
// }
//   return occ;
// }

// let res = findOccurences(str);

// console.log(res);

// loops

// loop an array and add all members of it

// let arr = [1,2,3,4,5,6];

// function addAll(arr){
//   let sum = 0;

//   for(let i=0;i<arr.length;i++){
//     sum +=arr[i];
//   }

//   return sum;
// }

// let res = addAll(arr);

// console.log(res);

// var arr = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// arr.forEach((num) => (sum += num));

// console.log(sum);

// in an array of numbers and strings, only add
// those members which are not strings

// let arr =['Hello',123,"jhbvh ","hjb u","hjgbuyhj",3,4,'ugvyug'];

// let sum = 0;

// arr.forEach(char=>{
//   if(typeof char === 'number'){
//     sum += char;
//   }
// });

// console.log(sum);

// loop an array of objects and remove all objects
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

// let newArr = arr.filter(char=> char.gender === 'male');

// console.log(newArr);

// sbase pehle total non-male count lo
// ek non male bande ko hataane ka code likho
// fir us code ko total non-male chla do

let count = 0;

arr.forEach((char) => {
  if (char.gender !== "male") count++;
});

// console.log(count);

for (let i = 0; i <= count; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

console.log(arr);
