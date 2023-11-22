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

// function longestWord(str) {
// let word = "";

// let brea = str.split(" ");
// let max = "";

// console.log(brea);

// for (let i = 0; i < brea.length; i++) {
//   if (max.length < brea[i].length) {
//     max = brea[i];
//   }
// }

//   for (let word of brea) {
//     if (word.length > max.length) {
//       max = word;
//     }
//   }

//   return max;
// }

// let str = "I, am a React JS Developer having 3 years of experience...";

// let res = longestWord(str);

// console.log(res);

// Q3. Write a function that checks whether a given string is a palindrome or not?

// function isPalindrome(str) {
//   let rev = str.split("").reverse().join("");

//   return str === rev;
// }

// let str = "racecar";

// let res = isPalindrome(str);

// console.log("palindrome or not: ", res);

// Q4. Write a function to remove duplicate elements from an array?

// function removeDuplicates(arr) {
// for (let i = 0; i < arr.length; i++) {
// if(arr[i])
//   for (let j = 1; j < arr.length - 1; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(i, 1, i);
//     }
//   }
// }

// let uniqueElements = [];

// for (let i = 0; i < arr.length; i++) {
//   if (uniqueElements.indexOf(arr[i]) === -1) {
//     uniqueElements.push(arr[i]);
//   }
// }

// return uniqueElements;

//   return [...new Set(arr)];
// }

// let arr = [1, 2, 3, 4, 4, 5, 6, 6];

// let res = removeDuplicates(arr); // output  [1,2,3,4,5,6]
// console.log(res);
// Q5. Write a function that checks whether two strings are anagrams or not?

// function anagram(str1, str2) {
//   let sortedStr1 = str1.split("").sort().join("");
//   let sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

// let str1 = "listen";
// let str2 = "silent";

// let res = anagram(str1, str2);

// console.log(res);

// Q6. Write a function that returns the number of vowels in a string?

// function countVowels(str) {
//   let count = 0;

//   let vowels = ["a", "e", "i", "o", "u"];

// for (let char of str.toLowerCase()) {
// Check if the character is a vowel
// if (vowels.includes(char)) {
// if true, increment the count
//       count++;
//     }
//   }

//   return count;
// }

// let vowels = "Hello, world!";

// let res = countVowels(vowels);

// console.log(res);

// Q7. Write a function to find the largest number in an array?

// function findLargestNumber(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// let arr = [2, 4, 6, 9, 3];

// let res = findLargestNumber(arr);

// console.log(res);

// Q8. Write a function to check if a given number is prime or not?

// function isPrime(number) {
//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(10));

// Q9. Write a function to calculate the factorial of a number?

function factorialNumber(num) {
  let fact = 1;

  if (num === 0) {
    return 1;
  }

  // for (let i = num; i > 0; i--) {
  //   fact *= i;
  // }

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

let num = 5;

let res = factorialNumber(num);

console.log(res);

// Q10. Write a program to remove all whitespaces characters from a string?
