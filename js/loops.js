// Problem 1: Finding the sum of natural numbers

// function sumOfNaturalNumbers(num) {
//   let sum = 0;

// for(let i=1;i<=num;i++){
//     sum += i;
// }

//   sum = (num * (num + 1)) / 2;

//   return sum;
// }

// let num = 5;

// let res = sumOfNaturalNumbers(num);

// console.log("Sum of n natural numbers : " + res);

// Problem 2: Finding the sum of digits

// function sumOfDigits(digit) {
//   let sum = 0;

//   while (digit != 0) {
// digit > 0
//     let rem = digit % 10;
//     sum += rem;
//     digit = Math.floor(digit / 10);   // for getting integer value
//   }

//   return sum;
// }

// let digit = 1234678;

// let res = sumOfDigits(digit);

// console.log(`Sum of ${digit} is : ${res}`);

// Problem 3: Counting the number of digits

// function countNumberOfDigits(digit) {
//   let count = 0;

//   while (digit > 0) {
//     let rem = digit % 10;
//     count++;
//     digit = Math.floor(digit / 10);
//   }

//   return count;
// }

// function countNumberOfDigits(digit){
// digit = Math.abs(digit);

//     let count = 0;

//     do{
//         count++;
//         digit = Math.floor(digit / 10);
//     }while(digit > 0);

//     return count++;
// }

// let digit = 123467;
// let digit = -121;

// let res = countNumberOfDigits(digit);

// console.log(`Count Digits ${digit} : ${res}`);

// console.log(`Count Digits ${digit} : ${res}`);

// Problem 4: Checking for palindrome numbers

function checkPalindromeNumber(num) {
  let bool = false;

  let rev = 0;
  let temp = num;
  while (temp > 0) {
    let rem = temp % 10;
    rev = rem + rev * 10;
    temp = Math.floor(temp / 10);
  }

  if (rev == num) {
    bool = true;
  }

  return bool;
}

let num = 1121;

let res = checkPalindromeNumber(num);

console.log(`Number palindrome for  ${num}  : ${res}`);
