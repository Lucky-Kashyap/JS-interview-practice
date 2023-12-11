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

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const itemsPerPage = 10;

const pageNumber = 1;

const startIndex = (pageNumber - 1) * itemsPerPage;

const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

console.log(paginatedData);
