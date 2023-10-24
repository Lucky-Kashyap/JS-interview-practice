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

const user = {
    firstName :'lucky',
    getName(){
        const firstName = "Divyanshu";
        return this.firstName;
    }
};

console.log(user.getName());
