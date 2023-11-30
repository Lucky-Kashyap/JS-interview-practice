// make an array of objects representing items, filter the items based on a specific condition (e.g., items with a certain property value) and transform the filtered data into a new format.

// There are two arrays on is of users and other is of cities they live in, make a new array which contains the unified data.

// 1)

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 999,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 399,
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "Tablet",
//     price: 199,
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Headphones",
//     price: 99,
//     inStock: false,
//   },
//   {
//     id: 5,
//     name: "Camera",
//     price: 599,
//     inStock: true,
//   },
// ];

// const inStock = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].inStock) {
//     inStock.push(products[i]);
//   }
// }

// console.log(inStock);

// console.log(products.filter((prod) => prod.inStock === true));

// const ans = products
//   .filter((prod) => prod.inStock === true)
//   .map((item) => ({ name: item.name, price: item.price }));

// console.log(ans);

// Given an array of objects with a numerical property, implement a function to sort the objects based on that proprty. Additionally, add a order to each object based on its position in the sorted array

const prices = [
  {
    id: 1,
    value: 30,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 50,
  },
  {
    id: 4,
    value: 20,
  },
  {
    id: 5,
    value: 40,
  },
];

// for (let i = 0; i < prices.length - 1; i++) {
//   for (let j = i + 1; j < prices.length; j++) {
//     if (prices[i].value > prices[j].value) {
//       const temp = prices[i];
//       prices[i] = prices[j];
//       prices[j] = temp;
//     }
//   }
// }

// shorter way

// const data = prices
//   .sort((a, b) => a.value - b.value)
//   .map((item) => ({ ...item, grade: "very well" }));

const data = prices
  .sort((a, b) => a.value - b.value)
  .map((item, index) => ({ ...item, grade: index + 1 }));

console.log(data);
