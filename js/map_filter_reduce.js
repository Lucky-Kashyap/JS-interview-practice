// they are basically array methods
// that are used to iterate over an array
// and perform  transformation or computation
// each may return or not

//  const nums = [1,2,3,4,5];

// callback num,i,nums  -> element , index, array

//  const multiplyThree = nums.map(num=>num*3);

//  console.log(multiplyThree);

// filter

// const nums = [1,2,3,4,12,1,5];

// const moreThanTwo = nums.filter(num => num>2);

// console.log(moreThanTwo);

// reduce

// const nums = [1, 2, 3, 4, 5];

// by default acc = 0 acc,curr,i,arr
// acc result of previous value

// if there is no initial value, it takes
// first element of array as value for
// accumulator

// const sum = nums.reduce((acc, num,i,arr) => {
//   return acc + num;
// });

// console.log(sum);

// polyfill

// const nums = [1,2,3,4,5];

// function mapPoyfill(callback,nums){
//     let arr=[];
//     for(let i=0;i<nums.length;i++){
//         arr.push(callback(nums[i]));
//     }

//     return arr;

// }

// function multiplyThree(num){
//     return num*3;
// }

// const newArr = mapPoyfill(multiplyThree,nums);

// console.log(newArr);

// const nums = [1,2,3,4,5];

// Array.map((num,i,arr)=>{

// });

// Array.prototype.myMap = function(callback){
//     let temp = [];

//     for(let i=0;i<this.length;i++){
//         temp.push(callback(this[i],i,this));
//     }

//     return temp;
// }

// const multiplyThree = nums.myMap((num,i,arr)=>{
//     return num * 3;
// });

// console.log(multiplyThree);

// filter

// const nums = [1, 2,12, 3, 4, 5];

// function filterPoyfill(callback, nums) {
//   const newArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     // newArr.push(callback(nums[i]));
//     if (callback(nums[i])) {
//       newArr.push(nums[i]);
//     }
//   }

//   return newArr;
// }

// function moreThanTwo(num) {
//   return num > 2;
// }

// const filterThanTwo = filterPoyfill(moreThanTwo, nums);

// console.log(filterThanTwo);

// const nums = [1, 2, 3, 4, 5];

// Array.prototype.myFilter = function (callback) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const moreThanTwo = nums.myFilter((num) => num > 2);

// console.log(moreThanTwo);

// reduce

// const nums = [1, 2, 3, 4, 5];

// Array.prototype.myReduce = function (callback) {
//   let temp=0;

//   for (let i = 0; i < this.length; i++) {
//     temp += callback(0,this[i]);
//   }
//   return temp;
// };

// const sum = nums.myReduce((acc, num) => acc + num);

// console.log(sum);

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1,2,3,4,5,6];

// const result = nums.myReduce((acc,num)=>{
//     return acc += num;
// },10);

// console.log(result);

// map vs forEach

// const arr = [2, 5, 3, 6];

// const newArr = arr.map((num) => num + 2);

// const newForEachArr = arr.forEach((num, i) => {
//   arr[i] = num + 4;
// });

// console.log(newArr);

// console.log(arr);
// console.log(newForEachArr);

// Return only name of students in Capital

let students = [
  {
    name: "Lucky",
    rollNumber: 31,
    marks: 80,
  },
  {
    name: "Jenny",
    rollNumber: 15,
    marks: 79,
  },
  {
    name: "Kaushal",
    rollNumber: 16,
    marks: 35,
  },
  {
    name: "Dilpreet",
    rollNumber: 7,
    marks: 85,
  },
  {
    name: "aushal",
    rollNumber: 16,
    marks: 85,
  },
  {
    name: "Dilpreet",
    rollNumber: 7,
    marks: 69,
  },
];

// let names = [];

// for(let i=0;i<students.length;i++){
//     names.push(students[i].name.toUpperCase());
// }

// console.log(names);

// const filterName = students.filter((st)=> st.name);

// const filterName = students
//   .map((st) => st.name)
//   .filter((name) => {
//     return name.toUpperCase();
//   });

// console.log(filterName);

// const capitalName = students
//   .map((st) => st.name.toUpperCase())

//   console.log(capitalName);

// return only details of those who scored more than 60 marks

// const score = students.filter(st=>st.marks>60);

// const score = students.map((st) => st.marks).filter((marks) => marks > 60);

// console.log(score);


// more than 60 marks & rollNumber greater than 15

const score = students.filter(st=>st.marks>60 && st.rollNumber>15);


console.log(score);


