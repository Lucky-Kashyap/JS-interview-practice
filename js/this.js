// this

// impicit
// explicit

// console.log(this);

// this.a = 5;
// console.log(this);
// console.log(this.a);

// var calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   subtract(a) {
//     this.total -= a;
//     return this;
//   },
// };

// const result = calc.add(10);

// // calc.subtract(2);

// console.log(result);

// this.a = 10;

// function getParam(){
//     console.log(this);
// }

// const getParam= ()=>{
//     console.log(this);
// }

// getParam();

// let user = {
//     name:'Lucky',
//     age:23,
//     getDetails(){
//         console.log(this.name);
//     },
//     getDetailsArrow:()=>{
//         console.log(this.name);
//         console.log(this);
//     }
// }

// console.log(user);
// user.getDetails();

// user.getDetailsArrow();

// let user = {
//     name:'Lucky',
//     age:23,
//     getDetails(){
//         const nestedArrow = ()=> console.log(this);
//         nestedArrow();
//     }
// }

// user.getDetails();

// class user{
//     constructor(n){
//         this.name = n;
//     }

//     getName(){
//         console.log(this.name);
//     }
// }

// const User = new user('Lucky');

// console.log(User);

// User.getName();

// const user = {
// firstName :'lucky',
//     getName(){
//         const firstName = "Divyanshu";
//         return this.firstName;
//     }
// };

// console.log(user.getName());

// function makeUser() {
//   return {
//     name: "John",
//     // ref: this,
//     ref(){
//         return this;
//     }
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);
// console.log(user.ref().name);

// const user = {
//     name:'Lucky kashyap',
//     logMessage(){
//         console.log(this.name);
//     }
// };

// setTimeout(user.logMessage(),1000);
// setTimeout(user.logMessage,1000);

// user.logMessage();

// const user = {
//     name:'Lucky',
//     greet(){
//         return `Hello, ${this.name}!`;
//     },
//     farewell:()=>{
//         return `Goodbye, ${this.name}!`;
//     },
// };

// console.log(user.greet());

// console.log(user.farewell());

// let calculator = {
//     a:10,
//     b:20,
//     read(){
//         console.log(this.a,this.b);
//         // return this.a;
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// };

// calculator.read();
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

// var length = 4;

// function callback(){
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method(fn){
//         fn();
//     },
// };

// const object = {
//     length : 5,
//     method(){
//         console.log(arguments);
//         arguments[0]();
//     },
// };

// object.method(callback,2,3);

const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  subtract(a) {
    this.total = this.total - a;
    return this;
  },
  multiply(a) {
    this.total = this.total * a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);
