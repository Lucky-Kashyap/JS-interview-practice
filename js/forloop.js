// for loop

// for(let i=0;i<3;i++){
//     console.log(i);
// }

// for(var i=0;i<3;i++){
//     console.log(i);
// }

// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }

// for (var i = 0; i <=3; i++) {
//   setTimeout(() => {
//     console.log(i + i);
//   }, 1000);
// }

// for (let i = 0; i <=3; i++) {
//     setTimeout(() => {
//       console.log(i + i);
//       console.log(i);
//     }, 1000);
//   }

// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i <= 3; i++)
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);

// if(true){
//   let a = 5;
// }

// forloop.js:47 Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context (at forloop.js:47:5)

// if(true)
//   let a = 5;

// if(true)
//     var a = 5;

// for (;;) {
//   console.log("hi");
// }

// for(let i=1;i<=3;i++){

//   const callback=()=>{
//     console.log(i);
//   }

//   setTimeout(callback,1000);
// }

// const arr=[];

// for(let i=1;i<=3;i++){

//   const callback=()=>{
//     console.log(i);
//   }

//   arr.push(callback);
//   setTimeout(callback,1000);
// }

// const arr=[];

// for(let i=1;i<=3;i++){

// const callback=()=>{
// console.log(i);
// }

// console.log(callback);
// console.dir(callback);

// arr.push(callback);
// setTimeout(callback,1000);
// }

// more examples

// for(let i=0;getI=()=>i, i<3;i++){
//   console.log(getI());
// }

// const arr=[];

// for(let i=0,getI=()=>i; i<3;i++){
//   arr.push(getI);
//   // console.dir(getI);
//   console.log(getI());
// }

// const arr=[];
// // 0 1 2
// for(let i=0,getI=()=>i; i<3;i++,getI=()=> i){
//   arr.push(getI);
//   // console.dir(getI);
//   console.log(getI());
// }

// alg alg baar function create hoga

// for (
//   let i = 0, getI = () => i, incrementI = () => i++;
//   getI() < 3;
//   incrementI()
// ) {
//   console.log(i);
// }

const nums = [1, 2, 3];

// for (const num of nums) {
//   setTimeout(() => {
//     console.log(num);
//   },1000);
// }


for (var num of nums) {
  setTimeout(() => {
    console.log(num);
  },1000);
}
