// Q1. Write a function that returns the reverse of string?

// function reverseString(str) {
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }

//   return str.split("").reverse().join("");
// }

// let str = "Lucky Kashyap";

// let res = reverseString(str);

// console.log(res);

// Q2. Write a function that returns the longest word in the sentence?

function longestWord(str) {
  // let word = "";

  let brea = str.split(" ");
  let max = "";

  // console.log(brea);

  // for (let i = 0; i < brea.length; i++) {
  //   if (max.length < brea[i].length) {
  //     max = brea[i];
  //   }
  // }

  for (let word of brea) {
    if (word.length > max.length) {
      max = word;
    }
  }

  return max;
}

let str = "I, am a React JS Developer having 3 years of experience...";

let res = longestWord(str);

console.log(res);

// Q3. Write a function htat checks whether a given string is a palindrome or not?
// Q4. Write a function to remove duplicate elements from an array?
// Q5. Write a function that checks whether two strings are anagrams or not?
// Q6. Write a function that returns the number of vowels in a string?
// Q7. Write a function to find the largest number in an array?
// Q8. Write a function to check if a given number is prime or not?
// Q9. Write a function to calculate the factorial of a number?
// Q10. Write a program to remove all whitespaces characters from a string?
