// they are basically array methods
 // that are used to iterate over an array 
 // and perform  transformation or computation 
 // each may return or not

//  const nums = [1,2,3,4,5];

// callback num,i,nums  -> element , index, array


//  const multiplyThree = nums.map(num=>num*3);

//  console.log(multiplyThree);

// filter

const nums = [1,2,3,4,12,1,5];


const moreThanTwo = nums.filter(num => num>2);

console.log(moreThanTwo);



