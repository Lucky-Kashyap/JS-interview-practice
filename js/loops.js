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

function countNumberOfDigits(digit) {
  let count = 0;

  while (digit > 0) {
    let rem = digit % 10;
    count++;
    digit = Math.floor(digit / 10);
  }

  return count;
}

let digit = 123467;

let res = countNumberOfDigits(digit);

console.log(`Count Digits ${digit} : ${res}`);
