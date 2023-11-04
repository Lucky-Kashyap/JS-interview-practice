// lexical scope

// closures

// var userName ='Lucky';  // global scope

// function local(){
// local scope
//     var userName ='Lucky';

//     console.log(userName);
// }

// local();

// function subscribe(){
//     var name = 'Lucky';

//     function displayName(){
// inner scope
// alert(name);
//         console.log(name);
//     }

//     displayName();
// }

// subscribe();

// var userName = 'Piyush';

// function makeFunc() {
//   var name = "Mozilla";

//   function displayName() {
//     console.log(name,userName);
//   }

//   return displayName;
// }

// var myFunc = makeFunc();

// myFunc();

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
      // outer functions scope
//       return function (d) {
        // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// output based qs


// let count = 0;

// (function printCount(){
//     if(count === 0){
//         let count = 1;

//         console.log(count);
//     }

//     console.log(count);
// })();

// Write a function that would allow you to do this

// var addSix = createBase(6);


// function createBase(num){
    
    // return function(innerNum){
        // console.log(innerNum + num);
        // return innerNum + num;
//     }
// }

// addSix(10);  // return 16

// addSix(21);   // return 27


// Time optimization

// function find(){
//     let a = [];

//     for(let i=0;i<1000000;i++){
//         a[i] = i*i;
//     }

    // console.log(a[index]);

//     return function(index){
//         console.log(a[index]);
//     }
// }

// const closure = find();
// console.time('6');
// find(6);
// closure(6);
// console.timeEnd('6');
// console.time('50')
// find(12);
// closure(50)
// console.timeEnd('50');


// for(var i = 0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);  // 3 times 3
//     },1000);
// }

// for(let i = 0;i<3;i++){

//     function inner(i){
//         setTimeout(()=>{
//             console.log(i);  // 3 times 3
//         },1000);
//     }

//     inner(i);
    // setTimeout(()=>{
    //     console.log(i);  // 3 times 3
    // },1000);
// }


// how would you use a closure to create a private counter

// function counter(){
//     var _counter = 0;

//     function add(increment){
//         _counter += increment;
//     }

//     function retrieve(){
//         return 'Counter = ' + _counter
//     }

//     return {
//         add,
//         retrieve
//     }
// }

// const c = counter();

// c.add(5);
// c.add(10);

// console.log(c.retrieve());



// module pattern

// var Module = (function(){
    // function privateMethod(){
        // do something
        // console.log('private');
    // }

    // return {
        // publicMethod:function(){
            // console.log('public');
            // can call privateMethod()
//         },
//     };
// })();


// Module.publicMethod();
// Module.privateMethod();








