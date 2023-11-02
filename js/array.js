// array

// const myArr = [];

// const arr = new Array();

// console.log(myArr,arr);

// console.log(typeof arr,typeof myArr);

// console.log(myArr);

// %DebugPrint(myArr);

// const arr = [1, 2, 3, 4, "hello"];

// pop
// push
// shift
// unshift

// arr.pop();

// console.log(arr);

// Q1 : How do you check if an element exits in an array?

// const findElement = (arr, target) => {
//   for (let x of arr) {
//     console.log(x);
//     if (x == target) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(findElement(arr, "hello"));

// console.log(findElement(arr, 3));

// console.log(arr.includes("hello"));

// Q2 : How do check if an element exits or not if exits return its index

// const findElementIndex = (arr,target)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(findElementIndex(arr,3));

// console.log(arr.indexOf(2));

// Q3 : How to delete, add & Update element from specific index

// arr.splice(1,3);  // delete 3 items from 1 index

// console.log(arr);

// arr.splice(1, 0, 10, 20, 30); // add items from 1 index

// arr.splice(1,3,10,20,30,40);

// let subArr = arr.slice(1,3);   // slice or break arr into subarray

// console.log(subArr);

// console.log(arr);

// deep copy array

// const arrC = [...arr];
// const arrD = Array.from(arr);
// const arrE = arr.concat();

// arrC.splice(1, 4);
// arrD.splice(1, 4);
// console.log(arrC, arrD, arrE, arr);

// Q 4 : how to add two array

// const newArr = [...arr, ...arrE];

// console.log(newArr);

// const arr = [1, 2, 3, 4, "hello"];

// concat
// spread operatow

// how to check if two arrays are equal

// const isArrayEqual=(arr1,arr2)=>{
// if(arr1.length !== arr2.length){
//     return false;
// }

// for(let i=0;i<arr1.length;i++){
//     if(arr1[i] !== arr2[i]){
//         return false;
//     }
// }

// return true;

// return arr1.length === arr2.length && arr1.every((ele,i)=> arr1[i] === arr2[i])

// }

// const arr = [1, 2, 3, 4, "hello"];

// const arr2 = [1,2,3,4,'hello'];

// console.log(isArrayEqual(arr,arr2));
