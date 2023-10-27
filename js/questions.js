// 1 - Given a string, reverse each word in the sentence

let str = "Harsh bhai kese ho";

// let res = str.split(' ').map(function(word){
//     return word.split('').reverse().join('')
// });

// console.log(res);

function reverse(str){
    let rev = '';

    rev = str.split('').reverse().join('');

    // rev.reverse();

    // rev.join("");

    return rev;
}

let res = reverse(str);

console.log(res);
