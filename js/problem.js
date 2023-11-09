// const arr = [1,2,3,58,5,6,24,8,15,4];

// output

// [1,3,3,59,5,7,25,9,15,5]

// function convertArr(arr) {
//   let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr[i] += 1;

// newArr.push(arr[i]);
//   }
// }

//   newArr = arr.map((el) => (el % 2 == 0 ? (el += 1) : el));

//   return newArr;
// }

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// let res = convertArr(arr);

// console.log(res);

// question 2

// const arr = [
//   {
//     name: "jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Maddy",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// ouput  121 // 60 + 36 + 16 + 9

// console.log(arr.map((el) => (el.age += el.age)));

// console.log(arr.map((el) => el.age).reduce((acc, curr) => (acc += curr)));

// question 3

// const family = [
//   {
//     name: "Tanay",
//     haveCycle: true,
//   },
//   {
//     name: "Akansha",
//     haveCycle: false,
//   },
//   {
//     name: "Tanvi",
//     haveCycle: true,
//   },
//   {
//     name: "Kanak",
//     haveCycle: false,
//   },
// ];

// output  ['Tanay','Tanvi'];

// console.log(
//   family.filter((name) => name.haveCycle == true).map((name) => name.name)
// );

// console.log(family.map((el) => el.haveCycle === true).filter((name) => name));

// console.log(family);

// question4

// convert into object

// const arr = ["you", "all", "are", "rockstars"];

// output

// {'0':'you','1':'all','2':'are','3':'rockstars'};

// function convertIntoObj(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }

//   return obj;
// }

// let res = convertIntoObj(arr);

// console.log(res);

// console.log(arr.reduce((acc, curr, index) => ({ ...acc, [index]: curr }), {}));

// question 5

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// output

// Violet-Indigo-Blue-Green-Yellow-Orange-Red

function addArrow(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] += "-";
  // }

  return arr.join("-");
}

let res = addArrow(arr);

console.log(res);
