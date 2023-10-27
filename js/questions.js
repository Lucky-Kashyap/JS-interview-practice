// 1 - Given a string, reverse each word in the sentence

// let str = "Harsh bhai kese ho";

// let res = str.split(' ').map(function(word){
//     return word.split('').reverse().join('')
// });

// console.log(res.join(' '));
// console.log(res);

// function reverse(str){
//     let rev = '';

//     rev = str.split('').reverse().join('');

//     // rev.reverse();

//     // rev.join("");

//     return rev;
// }

// let res = reverse(str);

// console.log(res);

// 2 - how to check if an object is an array or not

// function checkArr(el){
//     let check = Array.isArray(el);

//     console.log(check);

// }

// checkArr([]);
// checkArr({});

// 3- how to empty an array

// function empty(arr) {
//   arr.length = 0;

//   return arr;

// arr=[];

// return arr;
// return [];
// }

// console.log(empty([2, 3, 4, 5, 6, 2, 3]));

// 4 - how would you check if an number is an integer

// function checkInteger(a){
//     return Number.isInteger(a);
// }

// console.log(checkInteger(''));

// let a = 15;

// console.log(a%1);   // 0
// if(a%1===0){
//     console.log('Integer');
// }
// else{
//     console.log('Not an Integer');
// }

// 5- make this work  duplicate ([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr){
//     return arr.concat(arr);
// }

// let arr = [1,2,3,4,5];

// let res = duplicate(arr);

// console.log(res);



// 6 - reverse number

// function reverseNumber(num){

//     let rev=0;
//     // console.log(num%10);
//     let temp = num;
//     while(temp!=0){
//         let rem = temp % 10;
//         rev = rev*10 + rem;
//         // num =num<<1;
//         temp=Math.floor(temp/10);
//     }

//     return rev;
// }


function reverseNumber(num){
    return Number(num.toString().split('').reverse().join(''));
}


let num = 123544;

let res = reverseNumber(num);

console.log(res);
