// Question 1: Find the longest word length

// function findLongestWordLength(str){

//     let count=0;

//     for(let i=0;i<str.length;i++){
//         if(str[i].length > count){
//             count=str[i].length;
//         }
//     }

//     return count;
// }

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

// let res = findLongestWordLength(words);

// console.log(words[3].length);

// console.log(`Longest word Length ${res}`);

// Question 2 -  Find the longest word

// function findLongestWord(str){

//     let count=str[0].length;
//     let word ='';

//     for(let i=0;i<str.length;i++){
//         if(str[i].length > count){
//             count=str[i].length;
//             word=str[i];
//         }
//     }

//     return word;
// }

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

// let res = findLongestWord(words);

// console.log(words[3].length);

// console.log(`Longest word Length ${res}`);

// Question 3: Calculate the factorial of the largest number in the array

// function factorialLargest(arr) {
//   let fact = 1;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > count) {
//       count = arr[i];
//     }
//   }

//   for (let i = count; i > 0; i--) {
//     fact = fact * i;
//   }

//   return fact;
// }

// const numbers = [5, 2, 8, 4, 3];

// let res = factorialLargest(numbers);

// console.log(`Factorial of the largest number : ${res}`);

// Question 4: Calculate the average score of students who scored above 90

// const students = [
//   { name: "John", score: 85 },
//   { name: "Sarah", score: 92 },
//   { name: "Michael", score: 88 },
//   { name: "Emma", score: 95 },
//   { name: "Daniel", score: 90 },
// ];

// function averageScore(students) {
//   let average = 0;

//   average = students
//     .filter((student) => student.score > 90)
//     .reduce((acc, curr, i, arr) => acc + curr.score / arr.length, 0);

//   return average;
// }

// let res = averageScore(students);

// console.log(res);

//  Question 1: Filter out books published before the year 2000 and return their titles

// const books = [
//   { title: "Book 1", year: 1998 },
//   { title: "Book 2", year: 2003 },
//   { title: "Book 3", year: 1995 },
//   { title: "Book 4", year: 2001 },
// ];

// const filterBooks = books
//   .filter((book) => {
//     if (book.year > 2000) {
//       return book.title;
//     }
//   })
//   .map((book) => book.title);

// console.log(filterBooks);

// Question 2: Capitalize the first letter of each word in the array

const strings = ["hello world", "i am openai", "welcome to javascript"];

// Expected Output: ['Hello World', 'I Am Openai', 'Welcome To Javascript']

function capitalizeFirstWord(str) {
  let capital = str.map((word) => {
    let elem = word.split(" ");

    let result = elem.map((word) => word[0].toUpperCase() + word.slice(1));

    return result.join(" ");
  });
  return capital;
}

let res = capitalizeFirstWord(strings);

console.log(res);
