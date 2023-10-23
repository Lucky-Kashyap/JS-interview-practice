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

const nums = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback) {
  let temp=0;

  for (let i = 0; i < this.length; i++) {
    temp += callback(0,this[i]);
  }
  return temp;
};

const sum = nums.myReduce((acc, num) => acc + num);

console.log(sum);
