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

// const sumOfDigits = (num) => {
//   let sum = 0;
//   while (num > 0) {
//     let temp = num % 10;
//     sum += temp;
//     num = Math.floor(num / 10);
//   }
//   return sum;

// let arr = Array.from(String(num), Number);

// console.log(arr);

// return arr.reduce((acc, cur) => (acc += cur), 0);
// };

// console.log(typeof sumOfDigits(1234)); // output: 10

// console.log(sumOfDigits(4321)); // Ouput: 10

// console.log(sumOfDigits(123456)); // Output: 21

// #Day 12

// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// The new Set() method in JavaScript creates a new Set object. A Set object is a
// collection of unique values. It can store any type of value, whether primitive values or ojbect references.

// The input array may contain both positive and negative integers.

// The input array may be empty.

// The elements in the input arrat are not guranteed to be sorted.
// The output array should retain the original order of elements from the
// input array

// const removeDuplicates = (arr) => {
// let newArr = [...new Set(arr)];

// console.log(newArr);

// return newArr;

//   return arr
//     .filter((index, item) => arr.indexOf(index) === item)
//     .sort((a, b) => {
//       return a - b;
//     });
// };

// console.log(removeDuplicates([1, 2, 3, 4])); // Output : [1,2,3,4]

// console.log(removeDuplicates([])); // Output : []

// console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output : [1,2,3,4]

// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output : [5,6,7,8,9];

// #Day 13

// Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o' and 'u'
// as vowels (both lowecase and uppercase)

// Note:

// The input string may contain letters in both uppercase and lowercase.

// The output should be a non-negative intger representing the count of vowels in the input string.

// const countVowels = (str) => {
// let vowels = ["a", "e", "i", "o", "u"];

// let arr = str.split("");
// let count = 0;

// for (let char of arr) {
//   if (vowels.includes(char.toLowerCase())) {
//     count++;
//   }
// }

// return count;

// str = str.toLowerCase();
// let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countVowels("Helloo world")); // Output: 4
// console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5

// console.log(countVowels("Brrrp")); // Output: 0

// Day 14

// Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is
// a power of two, and false otherwise.

// Note:

//  The input num will be a positive integer
// Zero (0)  and negative integers are not considered powers of two.

// The function should return true if the given number is a power of 2, and
// false otherwise.

// we can solve it using bitwise operator too but its your chance
// to do it....

// const isPowerOfTwo = (num) => {
// let op = false;

// for(let i=1;i<num;i++){
//   if(2**i===num){
//     op=true;
//   }
// }
// return op;
// let x = 1;
// while (x < num) {
//   x = x * 2;
// }
// return x === num;

// return (num & (num - 1)) === 0 && num !== 0;

// return num !== 0 && (num & (num - 1)) === 0;
// if (num < 1) return false;

// while (num != 1) {
//   if (num % 2 == 1) return false;

//   num = num / 2;
// }

// return true;

//   if (num <= 0) {
//     return false;
//   }
//   return (num & (num - 1)) === 0;
// };

// console.log(isPowerOfTwo(8)); // Output: true

// console.log(isPowerOfTwo(7)); // Output: false

// Day 15

// Write a function to calculate the sum of squares of al  elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1+4 + 9 = 14

// const sumOfSquares = (arr) => {
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] * arr[i];
// }

// return result;

// return arr.reduce((acc, curr) => acc + curr * curr);

//   let sum = 0;

//   for (let elem of arr) {
//     sum += elem * elem;
//   }

//   return sum;
// };

// console.log(sumOfSquares([1, 2, 3])); // Output: 14

// console.log(sumOfSquares([1, 3, 12, 3, 4])); // Output: 179

// console.log(sumOfSquares([11, 4, 3, 12])); // Output: 290

// #Day 16

// Find the Minimum Value in an Array

// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

// Note:

// The input array may contain both positive and negative integers
// The input array may be empty
// The input array may container duplicate values

// Ensure the function handles adge cases gracefully, such as an
// empty input array.

// Consider using ES6 features like the spread syntax (...) for a concise implementation.

// todo In JavaScript, the spread syntax (...) is used to expand
// an array into individual elements. In this function, ...arr is used
// to spread the elements of the input array arr.

// const findMin = (arr) => {
// arr = arr.sort((a, b) => {
//   if (b > a) return -1;
// });
// return arr[0];
// if (arr.length === 0) return "Array is Empty";
// return Math.min(...arr);
// let min = Infinity;
// if (arr.length === 0) {
//   return "Array is Empty";
// }
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// return min;
// };

// console.log(findMin([5, 10, 2, 8])); // Output: 2
// console.log(findMin([5, -3, 0, 12, -7])); // Output: -7

// console.log(findMin([])); // Output: undefined

// Day 17

// Write a function to convert a string to camelCase & snake_case.

// const toCamelCase = (str) => {
//   str = str.trim().split(" ");

//   str = str.map((curr, index) => {
//     if (index === 0) {
//       return curr.toLowerCase();
//     } else {
//       return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
//     }
//   });

//   return str.join("");
// };

// const toSnakeCase = (str) => {
// return str.toLowerCase().split("").join("_");

// return str.toLowerCase().trim().replace("", "_");
// str = str.trim();

// let arr = str.split(" ");
// let i = 0;
// while (i < arr.length) {
//   arr[i] = arr[i].charAt(0) + arr[i].slice(1);
//   i++;
// }
// return arr.join("_");

// return str.toLowerCase().replaceAll(" ", "_");

// return str
//   .split(" ")
//   .map((x) => x.toLowerCase())
//   .join("_");

//   let res = "";
//   for (let char of str) {
//     if (char === char.toUpperCase()) {
//       res += "_" + char.toLowerCase();
//     } else {
//       res += char;
//     }
//   }
//   return res;
// };
// console.log(toCamelCase("hello world luCky")); // Output: helloWorldLucky

// console.log(toSnakeCase("helloWorld")); // Output: hello_world

// slice() extracts a part of a string and returns the extracted part in
// a new String.

// 1 JS counts positions from zero.
// 2: slice() extracts up to but not includding indexEnd.

// todo homework:

// Day 18

// Write a function to chek if a character is uppercase or lowercase.

// Constraints:

// The input char will be a single character.
// The character can be any printable ASCII character.
// You can assume that the input will always be a string of length 1.

// Note:

// Ensure that the function correctly identifies uppercase characters based on their ASCII values.

// Optimize the function to handle edge cases efficiently.

// const isUpperCase = (char) => {
// if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//   return true;
// }

// return false;

//   return char === char.toUpperCase();
// };

// console.log(isUpperCase("S")); // Output: true
// console.log(isUpperCase("b")); // Output: false
// Coding Challenge

// Day 19

// Write a function to check if a given string starts with a specific substring.

// str: A string (e.g. "Hello world").

// subStr: A substring to check if it starts the given string(e.g. "Hello").

// Output: true if the given string starts with the specified substring, otherwise false

// const startsWith = (str, substr) => {
//   return str.toLowerCase().startsWith(substr.toLowerCase());

// return str.toLowerCase().slice(0,substr.length) === substr.toLowerCase();
// };

// console.log(startsWith("Hello world", "hello")); // Output: true

// console.log(startsWith("Hello world", "World")); // Output: false

// Day 20

// Write a function to reverse a string without using any built-in method or libraries.The function should take a string as input and return the reversed string.

// const reverseString = (str) => {
//   return str.split("").reverse().join("");

// let rev = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// return rev;

// return str.split('').reduce((rev, char) => char + rev, '');
// };

// console.log(reverseString("hello")); // Output: olleh

// console.log(reverseString("lucky kashyap"));

// Day 21

// Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

// Note :

// In math, the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbers.

// Constraints:

// The input array may contain positive and nagetive integers,
// The input array may be empty. If it is empty, the function should return 0.

// const calculateMean = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }

// let sum = arr.reduce((acc, cur) => acc + cur, 0);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// return sum / arr.length;
// };

// console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3

// console.log(calculateMean([10, 20, 30])); // Output: 20
// console.log(calculateMean([-1, 0, 1])); // Output: 0
// console.log(calculateMean([])); // Output: 0

// Day 22

// Write a JS function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values

// For example, the median of 3, 3, 5, 9, 15 is 5. If there ia an even number of observations, then there is no single middl values; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6

// todo

// Sort the array in ascending order.

// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two middle elements.

// const findMedian = (arr) => {
//   // Step 1: Sort the array

//   console.log(arr.sort((a, b) => a - b));

//   // Step 2: Check if the array length is odd or even

//   let len = arr.length;
//   let mid = Math.floor(len / 2);
//   // console.log(mid);

//   // Step 3: for even length array

//   if (len % 2 === 0) {
//     return (arr[mid] + arr[mid - 1]) / 2;
//   } else {
//     // Step 4: for odd length array
//     return arr[mid];
//   }
// };

// console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
// console.log(findMedian([2, 4, 6, 8])); // Output: 5
// console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6

// Day 23

// Write a JS function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

// Note:

// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.

// Iterate through each number in the array.
// For each number, increment the count in the counts object.
// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.

// The input aray may contain positive integers only.
// You can assume that the input array is not empty.

// Input
// const numbers = [1, 2, 2, 3, 1, 4, 2];

// const count = (nums) => {
// let counts = {};

// for (let i = 0; i < nums.length; i++) {
//   let count = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] === nums[j]) {
//       count++;
//     }
//   }
//   counts[nums[i]] = count;
// }

// return counts;
// };

// const count = (arr) => {
// let count = 1;
// var res = {};
// for (ele of arr) {
//   if (res[ele] === undefined) {
//     res[ele] = count;
//   } else {
//     res[ele] = res[ele] + count;
//   }
// }
// return res;
// };
// console.log(count(numbers));

// Output
//  {'1' :2,'2' :3,'3' :1,'4' :1}

// Day 24

// Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

// Note:

// The input array will always contain at least one element.
// The mode will be unique (i.e., there won't be multiple numbers with the same highest frequency).

// const findMode = (arr) => {
// let count = {};

// let high = 0;
// let mode;

// for (let el of arr) {
//   count[el] = (count[el] || 0) + 1;

//   if (3 > high) {
//     high = count[el];
//     mode = el;
//   }
// }

// return mode;
//   if (arr.length === 0) {
//     return null;
//   }

//   let count = {};
//   let high = 0;
//   let mode = null;

//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] > high) {
//       high = count[num];
//       mode = num;
//     }
//   }

//   return mode;
// };

// console.log(findMode([1, 2, 2, 3, 1, , 4, 2])); // Output: 2

// Day 25

// Write a function to calculate the factorial of a number (using Recursion)

//  Recursion is a programming technique where a function calls itself in order to solve a problem. Inessence, it's  function that calls itself with smaller or simpler input until it reaches a base case

// Base Case:

// The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion, Withput a base case the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

// Recursive Case:

// It is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. EAch recursive call should move closer to the base case, evetually leading to termination of the recursion

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };

// console.log(factorial(5)); // Output: 120

// Day 26

// Write a function series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It starts with 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// Note:
// Fibonacci number is calculated using formula:

// F(n)= F(n-1) + F(n-2), where, F(1) = F(2)= 1.

// const fibonacci = (num) => {
//   if (num <= 1) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// };

// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(2)); // Output: 1
// console.log(fibonacci(3)); // Output: 2
// console.log(fibonacci(4)); // Output: 3
// console.log(fibonacci(5)); // Output: 5

// tribonacci number

// const tribonacciNumber = (n) => {
//   if (n == 0) return 0;

//   let a = 0,
//     b = 1,
//     c = 1;

//   for (i = 3; i <= n; i++) {
//     [a, b, c] = [b, c, a + b + c];
//   }

//   return c;
// };

// Day 27

// Write a function called repeatString that takes two parameters:

// str: A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string str the specified number of times num and return the resulting string.

// const repeatString = (str, count) => {
//   let res = "";

//   for (let i = 0; i < count; i++) {
//     res += str;
//   }

// return res;

//   return count > 0 ? str.repeat(count) : str;
// };

// console.log(repeatString("abc", 10));
// console.log(repeatString("lucky", 5));

// Output: 'abcabcabcabcabc'

// Note:

// The input string str will contain only alphanumeric characters and punctuation marks.
// The input number num will be a non-negative integer.
// The output string length should not exceed the length of str multiplied by num.

// Day 28

// Write a function called truncateString tht takes two parameters:

// str: A string tht needs to be truncated.
// maxLength: An integer representing the maximum length of the string allowed.
// The function should truncate the input string str if its length exceeds the specified maxLength. If trunction occurs, function should add '...' to the end of the trucated string.

// Constraints:
// The input string str will contain only alphanumeric characters and punctution marks.
// The maximum length maxLength will be a positive integer.
// The output string length should not exceed maxLength + 3 characters due to the addition of '...'.

// const truncateString = (str, count) => {
// if (count <= 0) {
//   return str;
// } else if (str.length > count) {
//   return str.slice(0, count).concat("...");
// }

// return count <= 0 ? str : str.slice(0, count).concat("...");

// return count <= 0 ? str : str.slice(0, count) + "...";
//   return count <= 0 ? str : str.substr(0, count) + "...";
// };

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: 'A-tisket...'

// Day 29

// Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive)

// Input:
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

// Output:
// An array containing consecutive numbers from a to b (inclusive).

// Constraints:
// a and b will be integers.
// a will be less than or equal to b

// const numberRange = (start, end) => {
//   let arr = [];

// for (let i = start; i <= end; i++) {
//   arr.push(i);
// }

// while (start <= end) {
//     arr.push(start);
//     start++;
//   }

//   return arr;
// };

// console.log(numberRange(0, 5)); // Output: [0,1,2,3,4,5]
// console.log(numberRange(3, 7)); // Output: [3,4,5,6,7]

// console.log(numberRange(-2, 2)); // Output: [-2,-1,0,1,2]

// Day 30

// Write a function called numberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive)

// Input:
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

// Output:
// An array containing consecutive numbers from a to b (inclusive).

// Constraints:
// a and b will be integers.
// a will be less than or equal to b

// const numberRangeRecursive = (start, end, arr = []) => {
// if (start <= end) {
//   arr.push(start);
//   return numberRangeRecursive(start + 1, end, arr);
// } else {
//   return arr;
// }
// };

// console.log(numberRangeRecursive(0, 5)); // Output: [0,1,2,3,4,5]
// console.log(numberRangeRecursive(3, 7)); // Output: [3,4,5,6,7]

// console.log(numberRangeRecursive(-2, 2)); // Output: [-2,-1,0,1,2]

// Day 31

// Write a function called simplePasswordValidator that takes a single parameter

// password: A string representing the password to be validated.
// The function should validate the password based on following criteria:

// The password must contain at least one lowercase letter, one uppercase letter, and one digit
// The length of the password must be at least 8 characters
// The function should return true if the password meets all the criteria, otherwise, it should return false

// Input:
// password: A non-empty string representing the password to be validated.

// Output:
// true if the password meets all the criteria
// false otherwise

// Constraints
// The input string password will contain only alphanumeric characters and punctuation marks

// const simplePasswordValidator = (str) => {
// let lowerCasePass = false;
// let upperCasePass = false;
// let numberPass = false;

// for (let elem of str) {
//   if (elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90) {
//     upperCasePass = true;
//   } else if (elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122) {
//     lowerCasePass = true;
//   } else if (!isNaN(Number(elem))) {
//     numberPass = true;
//   }
// }

// if (!lowerCasePass || !upperCasePass || !numberPass || str.length < 8) {
//   return false;
// }
// return true;
// };

// console.log(simplePasswordValidator("avhLK234jhb"));

// console.log(simplePasswordValidator("avhhjbL4"));
// console.log(simplePasswordValidator("2Dgvhhjbjhj"));
// console.log(simplePasswordValidator("avhhjbjhj"));

// Day 32

// Image Filter Project

//  filter-btns

const menu_tabs = document.querySelector(".filter-btns");
const images = document.querySelectorAll(".images");

menu_tabs.addEventListener("click", (e) => {
  // console.log(e.target.dataset.category);

  if (e.target.dataset.category !== undefined) {
    filterSearch(e.target.dataset.category);
  }
});

const filterSearch = (search) => {
  images.forEach((cur) => {
    // console.log(cur.dataset.category);
    if (cur.dataset.category === search || search === "all") {
      cur.style.display = "block";
    }
    // else if (search === "all") {
    //   cur.style.display = "block";
    // }
    else {
      cur.style.display = "none";
    }
  });
};
