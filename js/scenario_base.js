// How to validate user input as they type in a form

// by using event handling or event listeners on input event.

// get input feild data

// const inputField = document.getElementById("myInput");

// Event listener for input event

// inputField.addEventListener("input", (e) => {
//   const inputValue = e.target.value;

// perform validation logic
// if (inputValue.length < 3) {
// Display an error message or apply visual feeback
// console.log("Input must be at least 3 characters long");
// } else {
// Input is valid

//     console.log("Input is Valid");
//   }
// });

// How to implement pagination for displaying large sets of data?

// By using Slice() method or pagination libraries like react-paginate

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const itemsPerPage = 10;

// const pageNumber = 1;

// const startIndex = (pageNumber - 1) * itemsPerPage;

// const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

// console.log(paginatedData);

// How to store key-value pairs & efficiently access and manipulate the data?

// By using Objects or Maps.

// store key value pair

// const person = {
//   name: "Lucky",
//   age: 23,
//   work: "Software Engineer",
// };

// access value by key

// console.log(person.name);

// modify value

// person.name = "Divyanshu Kashyap";

// console.log(person.name);

// How to implement drag-and-drop functionality for elements on a webpage?

// by setting draggable='true' for the element in html file

// by adding event listener to dragstart event in JS.

// const draggableElement = document.getElementById("dragElement");

// draggableElement.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", e.target.id);
// });

// How to iterate over elements in an array and perform a specific operation on each element?

// By using Array methods forEach() or map() or for... of loop.

// Array of numbers

const numbers = [1, 2, 3, 4, 5];

// Fetch number one by one

numbers.forEach((number) => {
  // modify each element
  number = number * 2;

  console.log(number);
});
