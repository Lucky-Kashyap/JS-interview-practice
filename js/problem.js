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

// Given an array of objects. Write a function to find the sum of ages of each person.

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

// Given an array. Write a function to find the product of all elements which are even.

// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

// console.log(
//   arr.filter((el) => el % 2 == 0).reduce((acc, curr) => (acc *= curr))
// );

// question4

// convert into object

// Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

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

// Given an array. Write a function to join all elements of the array with a hyphen in between them

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

// Flatten an array without using flat()

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "e"],
//   ["e", "d", "f"],
// ];

// const flatArr = [...input];

// const flatArr = input.reduce((acc, curr) => [...acc, ...curr], []);

// console.log(flatArr);

// question 6

// Write a function that takes in astring and converts all the characters to uppercase

// const input = "neogrammer";
// const str = "neoG";

// console.log(input.toUpperCase());
// console.log(str.toUpperCase());

//  question 7

// convert only vowels to uppercase

// Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase

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

// Given an array of objects. If the name of an item is more than 5 characters in length, add type as 'vegetable'. If the name of an item if less than or equal to 5 characters in length, add type as 'fruit'.

// const arr = [
//   {
//     name: "Apple",
//   },
//   {
//     name: "Mango",
//   },
//   {
//     name: "Potato",
//   },
//   {
//     name: "Guava",
//   },
//   {
//     name: "Capsicum",
//   },
// ];

// function addProperty(arr) {
// let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.length > 5) {
//       // obj.type='vegetable';
//       arr[i].type = "vegetable";
//     } else if (arr[i].name.length <= 5) {
//       arr[i].type = "fruit";
//     }
//   }

//   return arr;
// }

// let res = addProperty(arr);

// console.log(res);

// [
// Your output should be:

// [{
//     name: "Apple",
//     type: "fruit",
//   },
//   {
//     name: "Mango",
//     type: "fruit",
//   },
//   {
//     name: "Potato",
//     type: "vegetable",
//   },
//   {
//     name: "Guava",
//     type: "fruit",
//   },
//   {
//     name: "Capsicum",
//     type: "vegetable",
//   }
// ];

// Write a function that accepts a number as input and inserts hyphens between every two even numbers

// input  is: [24345687]

// Your output should be : 2-23456-87

// Given an array of objects

// const inventory = [
//   {
//     name: "fans",
//     quantity: 3,
//   },
//   {
//     name: "chimneys",
//     quantity: 0,
//   },
//   {
//     name: "bulbs",
//     quantity: 5,
//   },
//   {
//     name: "stove",
//     quantity: 1,
//   },
// ];

// part a : Get all the items in an array whose quantity is less than 2.
// part b : Get the total quantity of items present in the inventory
// part c : Find the object which contains the item whose quantity is zero

// console.log(inventory.filter((el) => el.quantity < 2));

// console.log(
// inventory.map((el) => el.quantity).reduce((acc, curr) => (acc += curr))
// );

// console.log(inventory.filter((el) => el.quantity === 0));

// Count the occurrences of distinct elements in the given array.

const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

function countOccurrences(input) {
  let freq = {};
  let count = 0;

  input.forEach((char) => {
    if (freq.hasOwnProperty(char)) freq[char]++;
    else freq[char] = 1;
  });

  // console.log(Object.keys(freq));

  let ans = Object.keys(freq).reduce((acc, num) => {
    return freq[acc] > freq[num] ? acc : num;
  });
  // console.log(ans);
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        count++;
      }
    }
  }

  return freq;
}

const occurrences = countOccurrences(
  input.reduce((acc, curr) => [...acc, ...curr], [])
);
console.log(occurrences);

// { a:1,b:1,c:2,d:2,e:2,f:1}

// console.log(input.reduce((acc, curr, index) => [...acc, ...curr], []));

// function occurrencesDistinct(input) {
//   let obj = {};
//   let count = 0;

//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[i].length; i++) {
//       if (input[i][j]) {
//         count++;
//         obj[input[i][j]] += count;
//       }
//     }
//   }

//   return obj;
// }

// let res = occurrencesDistinct(input);

// console.log(res);
