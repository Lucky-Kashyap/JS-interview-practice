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

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  // use reduce method

  let totalCount = word.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);

  return totalCount;
};
console.log(countChar("MissIssippi", "I")); // output 4
