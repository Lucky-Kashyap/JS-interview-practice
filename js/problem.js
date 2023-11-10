// const arr = [1,2,3,58,5,6,24,8,15,4];

// output

// [1,3,3,59,5,7,25,9,15,5]

// function convertArr(arr) {
//   let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr[i] += 1;

// newArr.push(arr[i]);
//   }
// }

//   newArr = arr.map((el) => (el % 2 == 0 ? (el += 1) : el));

//   return newArr;
// }

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// let res = convertArr(arr);

// console.log(res);

// question 2

// const arr = [
//   {
//     name: "jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Maddy",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// ouput  121 // 60 + 36 + 16 + 9

// console.log(arr.map((el) => (el.age += el.age)));

// console.log(arr.map((el) => el.age).reduce((acc, curr) => (acc += curr)));

// question 3

// const family = [
//   {
//     name: "Tanay",
//     haveCycle: true,
//   },
//   {
//     name: "Akansha",
//     haveCycle: false,
//   },
//   {
//     name: "Tanvi",
//     haveCycle: true,
//   },
//   {
//     name: "Kanak",
//     haveCycle: false,
//   },
// ];

// output  ['Tanay','Tanvi'];

// console.log(
//   family.filter((name) => name.haveCycle == true).map((name) => name.name)
// );

// console.log(family.map((el) => el.haveCycle === true).filter((name) => name));

// console.log(family);

// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// output [2,6,8,4]

// console.log(arr.filter((el) => el % 2 == 0 && el <= 8));

// Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

// const arr = ["eat", "sleep", "repeat", "code"];

// Your output should be : ['repeat']

// console.log(arr.filter((el) => el.length > 5));

// Given an array. Write a function to get the sum of all elements which are greater than 50.

// const arr = [1, 2, 3, 58, 5, 62, 6, 8, 70];

// Your output should be: 190

// console.log(arr.reduce((acc, cur) => (acc += cur > 50)));

// console.log(arr.filter((el) => el > 50).reduce((acc, curr) => (acc += curr)));

// question4

// convert into object

// const arr = ["you", "all", "are", "rockstars"];

// output

// {'0':'you','1':'all','2':'are','3':'rockstars'};

// function convertIntoObj(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }

//   return obj;
// }

// let res = convertIntoObj(arr);

// console.log(res);

// console.log(arr.reduce((acc, curr, index) => ({ ...acc, [index]: curr }), {}));

// question 5

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// output

// Violet-Indigo-Blue-Green-Yellow-Orange-Red

// function addArrow(arr) {
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += "-";
// }

//   return arr.join("-");
// }

// let res = addArrow(arr);

// console.log(res);

// const arr = "Violet";

// console.log([...arr].join("-"));

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "e"],
//   ["e", "d", "f"],
// ];

// const flatArr = [...input];

// const flatArr = input.reduce((acc, curr) => [...acc, ...curr], []);

// console.log(flatArr);

// question 6

// const input = "neogrammer";

// console.log(input.toUpperCase());

//  question 7

// convert only vowels to uppercase

// const input = "neog";

// function convertVowelUppercase(input) {
//   let newStr = "";

//   for (let i = 0; i < input.length; i++) {
//     if (
//       input[i] === "a" ||
//       input[i] === "e" ||
//       input[i] === "i" ||
//       input[i] === "o" ||
//       input[i] === "u"
//     ) {
//       newStr += input[i].toUpperCase();
//       // console.log(input[i]);
//     } else {
//       newStr += input[i];
//     }
//   }

//   return newStr;
// }

// let res = convertVowelUppercase(input);

// console.log(res);
