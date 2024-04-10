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

const sortAscending = (arr) => {
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

  for (let i = 0; i < arr.length; i++) {
    // j=i+1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

const arr = [2, 3, 1, 10, 30, 12, 11];

console.log(sortAscending(arr));

// console.log(arr.sort((a,b)=>a-b));
