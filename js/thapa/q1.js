// Question 1

// Write a function to find longest word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraints

// The input string may contain alphabetic characters, digits, spaces, and punctuation.

// The input string is non-empty.

// The input string may contain multiple words seperated by spaces

// Note

// If the input strng is empty or contains only whitespace, the function should return an false.

// The function should ignore leading and trailing whitespace when determining the longest word.

// function findLongestWord(str) {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   let strArr = str.split(" ");

// console.log(strArr);

// strArr = strArr.sort((a, b) => a.length - b.length);

// return strArr.at(-1);

// return strArr.reduce(
//     (acc, curr) => (curr.length > acc.length ? curr : acc),
//     ""
//   );
// }

// sort method sort values in unicode value . first letter in a ascending order

// a>b 1 b>a -1

// console.log(
//   findLongestWord("Watch Thapa Technical javascript course on youtube")
// );

// #Day 2

// Programming Question: HAsh Tag Generator

// You are required to implement a function generateHAsh that generates a hash tag from a given input string.

// The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greater then 280 characters or if the input string is empty or contains only whitespaces, the function should return false.

// Otherwise the function should return the generated hash tag prefixed with #.

// write a function generateHAsh to accomplish this task

// generatehash

// str = 'my name is lucky kashyap';

// output   #MyNameIsLuckyKashyap

// const generateHash = (str) => {
//   if (str.length > 280 || str.trim().length === 0) {
//     return false;
//   }

//   let newStr = str.split(" ");

//   console.log(newStr);

//   newStr = newStr.map((el) => el.replace(el[0], el[0].toUpperCase()));

// approach 2

// newStr = newStr.map(el=>el.replace(el[0],el.charAt(0).toUpperCase()));

// el.charAt(0).toUpperCase();

// console.log(newArray);

// str = `#${str.join("")}`;

//   return "#" + newStr.join("");
// };

// const str = "my name is lucky kashyap";

// console.log(generateHash(str));

// Day 3

// Inter view Question: Count Occurrences of Character

// Write a function called countChar tht takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

//  console.log(countChar("MissIssippi","I"))   // output : 4

// Note the function should be case-senstive
// The function should handle both lowercase and uppercase characters

// The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

// function countChar(str, char) {
//   str = str.toLowerCase().split("");

//   console.log(str);

//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] === char.toLowerCase()) {
//       count++;
//     }
//   }

//   return count;
// }

// const countChar = (word, char) => {
//   word = word.toLowerCase();
//   char = char.toLowerCase();

// use reduce method

//   let totalCount = word.split("").reduce((acc, curr) => {
//     if (curr === char) {
//       acc++;
//     }
//     return acc;
//   }, 0);

//   return totalCount;
// };
// console.log(countChar("MissIssippi", "I")); // output 4

// # Day 4

// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle:
// "equilateral", "isosceles", or "scalene"

// 3 3 3 "equilateral"
// 3 4 3  "isosceles"
// 5 8 6  "scalene"

// todo The Function should adhere to the following rules:

// If all three sides are of equal length, return "equilateral"
// If only two sides are of equal length, return "isosceles"

// If all three sides have different lengths, return "scalene"

// const checkTriangleType = (a, b, c) => {
//   if (a === b && b === c) return "equilateral";
//   if (a === b || b === c || a === c) return "isosceles";

//   return "scalene";
// };

// console.log("Input sides 3 3 3 ", checkTriangleType(3, 3, 3));

// console.log("Input sides 3 4 3 ", checkTriangleType(3, 4, 3));
// console.log("Input sides 5 6 7 ", checkTriangleType(5, 6, 7));

// #Day 5

// Write a function to sort an array of numbers in an ascending order.

//  Example

//  console.log(sortAscending([5,3,1,8]));  // Output: [1,3,5,8]

// console.log(typeof sortAscending[2]);

// Note:

//  The function should take an array of numbers as input.
// It should return a new array with the numbers sorted in ascending order.

// The original array should remain unchanged.
// you are not allowed to use the built-in sort() method.

// const sortAscending = (arr) => {
// return arr.sort((a, b) => a - b);

// let i = 0,
//   j;
// while (i < arr.length) {
//   j = i + 1;
//   while (j < arr.length) {
//     if (arr[j] < arr[i]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < arr.length; i++) {
// j=i+1;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

//   return arr;
// };

// const arr = [2, 3, 1, 10, 30, 12, 11];

// console.log(sortAscending(arr));

// console.log(arr.sort((a,b)=>a-b));

//  #Day 6

// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// console.log(isPalindrome('A man, a plan, a canal, Panama'));   // Output : true

// console.log(isPalindrome('racecar'));   // Output : true

// console.log(isPalindrome('Lucky'));   // Output : false

// Note:

// The input string may contain letters, digits, spaces, punctuation, and special characters.

// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.

// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.

// The function should return true if the input string is a palindrome and false otherwise.

// .replace(/\W/g,''); Uses the replace() method with a regular ecpression (/\W/g) to remove ll non-word characters from the string. Here:

// \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).

// The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.

// So, replace(/\W/g,'') replaces all non-word characters with an empty string, effectively removing them from the string.

// const isPalindrome = (str) => {
//   str = str.toLowerCase().replace(/\W/g, "");
//   let revStr = str.split("").reverse().join("");

//   console.log(revStr);

//   return str === revStr ? true : false;
// };

// console.log(isPalindrome("racecar"));

// console.log(isPalindrome("Lucky"));

// #Day 7

// Write a function findMax that takes an array of numbers as input nd returns the maximum number in the array.

// Example Usage:

// const findMax = (arr) => {
// return Math.max(...arr);

//   return arr.reduce((acc, elem) => {
//     if (acc < elem) {
//       acc = elem;
//     }
//     return acc;
//   });
// };

// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9

// console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2

// console.log(findMax([5])); // Output: 5

//  #Day 8

// Challenge: Factorial Finder

// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations:

// factorial(0) => 1
// factorial(1) => 1

// factorial(2) => 2

// factorial(3) => 6

// factorial(4) => 24

// factorial(5) => 120

// Your function should work for any non-negative integer

// const factorial= (num)=>{
//   let fact = 1;

//   for(let i=1;i<=num;i++){
//     fact *=i;
//   }

//   return fact;
// }

// Use recursive method

// const factorial= (num)=>{

//     if (num === 0 || num === 1) {
//       return 1;
//   }

//   else {
//       return num * factorial(num - 1);
//   }
// }

// console.log(factorial(5));  // Output: 120

// console.log(factorial(0));   // Output: 1

// console.log(factorial(3));   // Output: 6

// #Day 9

// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.

// Calculate the sum of all the numbers in the array.

// Divide the sum by total number of elements in the array to find the average.

// Return the calculated average.

// Note:

// Ensure the function handles arrays of any length.
// The average should be returned as a floating-point-number.

// const calculateAverage = (arr) => {
// let sum = arr.reduce((acc, el) => acc + el);

// console.log(sum);

// return sum / arr.length;

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calculateAverage([5, 10, 2, 8])); // Output: 6.25

// console.log(calculateAverage([2, 6, 17, 45, 3]));

// #day 10

// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contains the same elements in the same order), and false otherwise.

// Note:

// The function should return false if the arrays have different lengths.

// The function should compare each element of arr1 with the corresponding element in arr2.

// The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

// const arraysAreEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
// return arr1.every((cur, index) => cur === arr2[index]);

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output- true

// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output- false

// console.log(arraysAreEqual([], [])); // Output- true

// #Day 11

// Write a function that takes a number as input and returns the sum of its digits.

// Note:

// The input number will always be a positive integer.

// The input number can have multiple digits.

// The output should be the sum of all the digits in the input number.

// This function calculates the sum of digits without converting the number to a string.

const sumOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    let temp = num % 10;
    sum += temp;
    num = Math.floor(num / 10);
  }
  return sum;

  // let arr = Array.from(String(num), Number);

  // console.log(arr);

  // return arr.reduce((acc, cur) => (acc += cur), 0);
};

console.log(typeof sumOfDigits(1234)); // output: 10

console.log(sumOfDigits(4321)); // Ouput: 10

console.log(sumOfDigits(123456)); // Output: 21
