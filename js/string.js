

// Question 1: Find the longest word length


// function findLongestWordLength(str){

//     let count=0;

//     for(let i=0;i<str.length;i++){
//         if(str[i].length > count){
//             count=str[i].length;
//         }
//     }

//     return count;
// }


// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

// let res = findLongestWordLength(words);

// console.log(words[3].length);


// console.log(`Longest word Length ${res}`);


// Question 2 -  Find the longest word



function findLongestWord(str){

    let count=str[0].length;
    let word ='';

    for(let i=0;i<str.length;i++){
        if(str[i].length > count){
            count=str[i].length;
            word=str[i];
        }
    }

    return word;
}


const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

let res = findLongestWord(words);

// console.log(words[3].length);


console.log(`Longest word Length ${res}`);




