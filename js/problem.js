// const arr = [1,2,3,58,5,6,24,8,15,4];

// output

// [1,3,3,59,5,7,25,9,15,5]

function convertArr(arr) {
  let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {
  //     arr[i] += 1;

  // newArr.push(arr[i]);
  //   }
  // }

  newArr = arr.map((el) => (el % 2 == 0 ? (el += 1) : el));

  return newArr;
}

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

let res = convertArr(arr);

console.log(res);
