// array

// const myArr = [];

// const arr = new Array();

// console.log(myArr,arr);

// console.log(typeof arr,typeof myArr);

// console.log(myArr);

// %DebugPrint(myArr);

const arr = [1, 2, 3, 4, "hello"];

// pop
// push
// shift
// unshift

// arr.pop();

// console.log(arr);

// Q1 : How do you check if an element exits in an array?

const findElement = (arr, target) => {
  for (let x of arr) {
    console.log(x);
    if (x == target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, "hello"));

console.log(findElement(arr, 3));
