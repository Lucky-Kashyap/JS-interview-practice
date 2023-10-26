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

const person1 = {
    Name : 'suman',
    age: 23,
    gmail:'suman@gmal.com',
    address:'indore',
    country:'india'
}

const person2 = {...person1, Name:'ram',age:200}


console.log("this is person 2 = ",person2)


const arr1 = [10,20,30];

const arr2 = [...arr1,40,50,60];
console.log(arr1)
console.log(arr2)
