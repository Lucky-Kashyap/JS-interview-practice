// make an array of objects representing items, filter the items based on a specific condition (e.g., items with a certain property value) and transform the filtered data into a new format.

// Given an array of objects with a numerical property, implement a function to sort the objects based on that proprty. Additionally, add a order to each object based on its position in the sorted array

// There are two arrays on is of users and other is of cities they live in, make a new array which contains the unified data.

// 1)

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 399,
    inStock: false,
  },
  {
    id: 3,
    name: "Tablet",
    price: 199,
    inStock: true,
  },
  {
    id: 4,
    name: "Headphones",
    price: 99,
    inStock: false,
  },
  {
    id: 5,
    name: "Camera",
    price: 599,
    inStock: true,
  },
];

const inStock = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    inStock.push(products[i]);
  }
}

console.log(inStock);
