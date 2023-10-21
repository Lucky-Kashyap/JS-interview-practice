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

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// console.log(nums);

// function multiplyByTwo(nums) {
//   for (key in nums) {
//     if (typeof nums[key] === "number") {
//       console.log(nums[key] * 2);
//     }
//   }
// }

// function multiplyByTwo(nums){
//     console.log(nums*2);
// }

// console.log(nums);
// multiplyByTwo(nums);

// what is output

// const a = {};

// const b = {key:'b'};
// const c = {key:"c"};

// a[b] = 123;
// a[c] = 456;   // Object Object

// console.log(a[b]);

// what is JSON.stringify & JSON.parse  ?

// const user = {
//   name: "lucky",
//   age: 24,
// };

// const strObj = JSON.stringify(user);

// localStorage.setItem('test',user);
// localStorage.setItem('test',strObj);   // store obj into local storage

// console.log(JSON.parse(localStorage.getItem('test')));

// console.log(strObj);

// console.log(strObj.name);

// const convertObj = JSON.parse(strObj);

// console.log(convertObj);

// console.log(JSON.parse(strObj));

// console.log(user.name);

// console.log(user);
// console.log(JSON.stringify(user));

// console.log([..."Lucky"]);   // spread

// const user = { name: "Lucky", age: 22 };

// const admin = { admin: true, ...user };

// console.log(admin);

// const settings = {
//   username: "lucky",
//   level: 22,
//   health: 95,
// };

// const data = JSON.stringify(settings, ["level", "health"]);   // specifically stringify value

// console.log(data);

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// destructuring

// taking out the specific properties

// let user = {
//   name: "Lucky",
//   age: 22,
//   fullName: {
//     first: "Lucky",
//     second: "KAshyap",
//   },
// };

// const { name: n, age } = user;

// const {
//   fullName: { first },
// } = user;

// console.log(n, age);

// console.log(first);

// console.log(name);

// function getItems(fruitList,...args){
//     return [...fruitList,...args];
// }

// const res = getItems(["banana","apple"],"pear","orange")

// console.log(res);

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

// let person = { name: "Lucky" };

// const numbers = [person];

// const numbers = person;

// person = null;
// person.name = null;
// console.log(numbers);

// const value = {number : 10};

// const multiply = (x = {...value})=>{
//     console.log((x.number *= 2));
// }

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   };

//   return person;
// }

// const personObj1 = {
//   name: "Alex",
//   age: 30,
// };
// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);

// waht is shallow & deep copy

// shallow copy one level        
// 
// deep copy nested level


let user = {
    name:"Lucky",
    age:22,
};

// this will not clone nested objects
// const objColne = Object.assign({},user);

// const objColne = JSON.parse(JSON.stringify(user));

const objColne = {...user};

objColne.name = "Arun";

console.log(user);
console.log(objColne);