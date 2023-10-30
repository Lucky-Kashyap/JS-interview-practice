// Problem 1: Finding the sum of natural numbers

function sumOfNaturalNumbers(num) {
  let sum = 0;

  // for(let i=1;i<=num;i++){
  //     sum += i;
  // }

  sum = (num * (num + 1)) / 2;

  return sum;
}

let num = 5;

let res = sumOfNaturalNumbers(num);

console.log("Sum of n natural numbers : " + res);
