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

function empty(arr) {
  arr.length = 0;

  return arr;

  // arr=[];

  // return arr;
  // return [];
}

console.log(empty([2, 3, 4, 5, 6, 2, 3]));
