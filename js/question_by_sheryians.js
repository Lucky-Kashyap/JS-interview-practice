// make an array of objects representing items, filter the items based on a specific condition (e.g., items with a certain property value) and transform the filtered data into a new format.

// 1)

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 999,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 399,
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "Tablet",
//     price: 199,
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Headphones",
//     price: 99,
//     inStock: false,
//   },
//   {
//     id: 5,
//     name: "Camera",
//     price: 599,
//     inStock: true,
//   },
// ];

// const inStock = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].inStock) {
//     inStock.push(products[i]);
//   }
// }

// console.log(inStock);

// console.log(products.filter((prod) => prod.inStock === true));

// const ans = products
//   .filter((prod) => prod.inStock === true)
//   .map((item) => ({ name: item.name, price: item.price }));

// console.log(ans);

// Given an array of objects with a numerical property, implement a function to sort the objects based on that proprty. Additionally, add a order to each object based on its position in the sorted array

// const prices = [
//   {
//     id: 1,
//     value: 30,
//   },
//   {
//     id: 2,
//     value: 10,
//   },
//   {
//     id: 3,
//     value: 50,
//   },
//   {
//     id: 4,
//     value: 20,
//   },
//   {
//     id: 5,
//     value: 40,
//   },
// ];

// for (let i = 0; i < prices.length - 1; i++) {
//   for (let j = i + 1; j < prices.length; j++) {
//     if (prices[i].value > prices[j].value) {
//       const temp = prices[i];
//       prices[i] = prices[j];
//       prices[j] = temp;
//     }
//   }
// }

// shorter way

// const data = prices
//   .sort((a, b) => a.value - b.value)
//   .map((item) => ({ ...item, grade: "very well" }));

// const data = prices
//   .sort((a, b) => a.value - b.value)
//   .map((item, index) => ({ ...item, grade: index + 1 }));

// console.log(data);

// There are two arrays on is of users and other is of cities they live in, make a new array which contains the unified data.

// const users = [
//   {
//     id: 1,
//     name: "John",
//     age: 24,
//   },
//   {
//     id: 2,
//     name: "Johnny",
//     age: 29,
//   },
//   {
//     id: 3,
//     name: "John ke Chacha",
//     age: 21,
//   },
// ];

// const cities = [
//   {
//     id: 11,
//     city: "Agra",
//   },
//   { id: 2, city: "Delhi" },
//   { id: 3, city: "Bijnor" },
// ];

// const data = users.map((item) => ({
//   ...item,
//   ...cities.find((item2) => item.id === item2.id),
// }));

// console.log(data);

// 20-12-23

// array - map filter

// objects - access loop

// freeze, this call apply bind

// ek array se ek naya array banao jismien agar word ki lebgth 5 akshar ho to p tag mein daalo nahitoword ko span tag mein daalo

// let arr = ["hello", "a", "apples", "guava", "lucky", "ajay"];

// let res = arr.map((val) => {
//   if (val.length === 5) return `<p>${val}</p>`;
//   else return `<span>${val}</span>`;
// });

// console.log(res);

// let arr = [
//   {
//     name: "lucky",
//     age: 23,
//   },
//   {
//     name: "harsh",
//     age: 25,
//   },
//   {
//     name: "ajay",
//     age: 21,
//   },
// ];

// let res = arr.map((val) => {
//   return { name: val.name };
// });

// console.log(res);

// filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let res = arr.filter((val) => {
//   if (val % 2 === 0) {
//     return true;
//   }
// });

// let res = arr.filter((val) => val % 2 === 0);

// console.log(res);

// let arr = ["lucky", "amit", "raghav", "nisha", "sumit", "avinya"];

// let res = arr.filter((val) => !val.includes("a"));

// console.log(res);

// let res = arr.filter((val) => {
// if (val.split("a").length <= 2) return true;
// });

// console.log(res);

// q1 write a js function to check whether an input is an array or not

// function is_array(arr) {
// return Array.isArray(arr);
// return arr instanceof Array;
// }

// console.log(is_array("w3resource")); // false

// console.log(is_array([1, 2, 4, 0])); // true

// q2 write a JS function to clone an array

// function array_clone(arr) {
//   return [...arr];
// }

// console.log(array_clone([1, 2, 4, 0]));
// console.log(array_clone([1, 2, [4, 0]]));

// q3 write a JS function to get the first elemet of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function first(arr, get = 1) {
// return [arr[0]];
//   let clone = [];
//   for (let i = 0; i < get; i++) {
//     clone.push(arr[i]);
//   }

//   return clone;
// }

// console.log(first([1, 2, 3, 4, 5]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));

// console.log(first([7, 9, 0, -2], -3));

// q4 write a simple JS program to join all elements of the following array into a string.

// let myColor = ["Red", "Green", "White", "Black"];

// function joinArray(arr) {
//   return arr.join(",");
// }

// console.log(joinArray(myColor));
