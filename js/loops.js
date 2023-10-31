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

// function checkPalindromeNumber(num) {
//   let bool = false;

//   let rev = 0;
//   let temp = num;
//   while (temp > 0) {
//     let rem = temp % 10;
//     rev = rem + rev * 10;
//     temp = Math.floor(temp / 10);
//   }

//   if (rev == num) {
//     bool = true;
//   }

//   return bool;
// }

// let num = 1121;

// let res = checkPalindromeNumber(num);

// console.log(`Number palindrome for  ${num}  : ${res}`);

// Problem 5: Finding Fibonacci numbers

// function fibonacciNumber(num) {
//   // let fib = 0;

//   // if(num == 0 || num == 1){
//   //         return 0;
//   // }
//   let curr = 0;
//   let prev = 1;

//   console.log(curr,prev);
//   for (let i = 1; i < num; i++) {
//     next = curr + prev;
//     console.log(next);
//     curr = prev;
//     prev = next;
//   }
// }

// function fibonacciNumber(num) {
//   if (num == 0 || num == 1) {
//     return num;
//   }

//   let prev = 0;
//   let curr = 1;
//   let next;

//   for (let i = 1; i < num; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next;
//   }

//   return next;
// }

// let num = 4;

// let res = fibonacciNumber(num);

// console.log(`fibonacci number ${num} : ${res}`);

// Problem 6: Identifying missing numbers

// function findMissingNumber(num){
//     // let missing;
//     // let sum = 0;
//     // for(let i=0;i<num.length;i++){
//     //     sum += num[i];
//     // }

//     // missing = num.length*(num.length + 1)/2 - sum;

//     // return missing;
// }

// let nums = [9,6,4,2,3,5,7,0,1];

// let res = findMissingNumber(nums);

// console.log(`Mising Number of ${nums} : ${res}`);

// Count Odd Numbers in an Interval Range

// function countOddNumbers(low, high) {
//   let count = 0;
// let arr= [];

//   for(let i=low;i<=high;i++){
//         if(i%2 !=0){
//             arr.push(i);
//         }

//   }

//   for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2!=0){
//         count++;
//     }
//   }

//   console.log(arr);

//   for (let i = low; i <= high; i++) {
//     if (i % 2) {
//       count++;
//     }
//   }

//   return count;
// }

// let low = 8;
// let high = 10;

// let low = 3;
// let high = 7;

// let res = countOddNumbers(low, high);

// console.log(`Count Odd Numbers ${low} to ${high} : ${res}`);

function fizzBuzz(num) {
  let str = [];

  for (let i = '1'; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str.push("FizzBuzz");
    } else if (i % 3 == 0) {
      str.push("Fizz");
    } else if (i % 5 == 0) {
      str.push("Buzz");
    } else {
      str.push(i.toString());
    }
  }

  return str;
}

let num = 3; // ['1','2','Fizz']

let res = fizzBuzz(num);

console.log(res);
