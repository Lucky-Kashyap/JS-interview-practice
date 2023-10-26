// most important

// var vs let vs const

// var a = 10;

// let a = 20;

// var a = 20;

// console.log(a);

// let b = 20;

// console.log(b);

// let block scope const block scope
// var function scope

// console.log("Hello console")

// var = block level scope and global scope
// let = block level scope
// const = block level scope

// var Name = 'suman'

// const print = () =>{
//   var Name = 'ram';
// console.log(Name);
// }
// print();
// var Name = 'mohan'
// console.log(Name)

// function print(){
// var Name = 'Luckcy';

// console.log(Name);
// }

// print();

// console.log(Name);

// let Name = 'suman'

// const print = () =>{
//     let Name = 'ram';
//     console.log(Name);
// }

// print();
// Name = 'mohan'
// console.log(Name)

// const Name = 'suman'

// const print = () =>{
//     let Name = 'ram';
//     console.log(Name);
// }
// print();
// Name = 'mohan'
// console.log(Name)

//typeof operator
// defenition :- Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. The operand can be any variable, function, or object whose type you want to find out using the typeof operator.

// const suman = true;

// console.log(typeof(suman))

// const number1 = 10;
// const number2 = 10;

// const number = "10";

// console.log(typeof(number) === 'string');

// console.log(typeof 'string');

// == and ===
// defenition :- Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

// const number1 = 10;
// const number2 = 10;

// console.log(number1 == number2) // == only check the values

// console.log(number1 === number2) // ===check the values and type as well

// Spread Operator
// defenition :- The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

// const person1 = {
//     Name : 'suman',
//     age: 23,
//     gmail:'suman@gmal.com',
//     address:'indore',
//     country:'india'
// }

// const person2 = {...person1, Name:'ram',age:200}

// console.log("this is person 2 = ",person2)

// const arr1 = [10,20,30];

// const arr2 = [...arr1,40,50,60];
// console.log(arr1)
// console.log(arr2)

//call by value

// const number = (x,y) =>{
// x = 100;
// y = 200;
// }

// const a = 10;
// const b = 20;
// console.log("Before calling function "+a+" "+b);
// number(a,b);
// console.log("After calling function "+a+" "+b);

//call by reference

// con/st callByReference = (obj) =>{
//     obj.name = 'suman';
//     obj.age = 500
// }

// const obj = {
//  name : 'ram',
// age:23
// }

// console.log("Before calling a function ",obj.name,obj.age)
// callByReference(obj)
// console.log("After calling a function ",obj.name,obj.age)

// selfInvoking function
// defenition :- A self-invoking function is a JavaScript function that executes immediately after it has been defined. This is done by wrapping the function in parentheses and then immediately calling it.

// (function(){
//     console.log("This is self Invoking function");
// })();

//callbacks
// defenition :- A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// function greet(name,callback){
//     console.log("Hello Mr "+name);
//     callback();
// }

// function hello(){
//     console.log("This is callback function 1");
// }
// function hello2(){
//     console.log("This is callback function 2");
// }

// greet('ram',hello)

// app = 100
// friend = 100 (udhar diya)

// paisa lauta dega
// paisa nhi degaś

// promises
//defenition :- A promise in JavaScript is an object that represents the eventual completion of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more predictable way.

// promise has three stage

// 1.) Pending
// 2.) Fulfilled -> .then  [resolve]
// 3.) Reject   -> .catch  [reject]

// let p = new Promise((resolve,reject)=>{

//     let number = "30"
//     if(number === 30){
//       resolve('This is a number')
//     }else{
//         reject('This is not a number');
//     }
// })
// p.then((msg)=>console.log(msg)).catch((err)=>console.log(err))



//callback hell

// const userLeft = true;
// const watchingAdd = true;

// function watchTutorial(callback,callbackerror){
//     if(userLeft){
//         callbackerror({
//             satus:'user has been left'
//         })
//     }else if(watchingAdd){
//         callbackerror({
//             satus:'Watching add right now'
//         })
//     }else{
//         callback('Error in code..')
//     }
// }
// watchTutorial((msg)=>console.log(msg),(err)=>console.log(err))


