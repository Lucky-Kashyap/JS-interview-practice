// About objects

// const user = {
//     name:'Lucky',
//     age:23,
// }

// user.name = 'Divyanshu';

// delete user.age;

// console.log(user);

// console.log(user.name);

// delete is used in case of objects not local variables

// const func = (function(a){
//     delete a;
//     return a;
// })(5);

// console.log(func);   // 5

// const user= {
//     name:'Lucky',
//     age:23,
//     "Like this repo":true,
// }

// console.log(user);

// delete user["Like this repo"];

// console.log(user);

// console.log(user["Like this repo"]);

// const prperty = "firstName";
// const name = "Lucky";

// const user = {
//     prperty:name
// }

// const user = {
//     [prperty]:name
// }

// console.log(user);
// console.log(user.firstName);

// const user = {
//   name: "lucky",
//   age: 23,
//   isValid: true,
// };

// console.log(user);

// for (let key in user) {
// console.log(key);
//   console.log(user[key]);
// }

// for(let item of user){
//     console.log(item);    // object is not iterable

// }

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three", // overwrite it
// };

// console.log(obj);

//  create a fucntion multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

// console.log(nums);

function multiplyByTwo(nums) {
  for (key in nums) {
    if (typeof nums[key] === "number") {
      console.log(nums[key] * 2);
    }
  }
}

// function multiplyByTwo(nums){
//     console.log(nums*2);
// }

multiplyByTwo(nums);
