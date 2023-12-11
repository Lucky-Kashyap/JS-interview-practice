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

// const numbers = [1, 2, 3, 4, 5];

// Fetch number one by one

// numbers.forEach((number) => {
// modify each element
//   number = number * 2;

//   console.log(number);
// });

// How to implement a feature that allows users to search for specific items in a large dataset?

// const data = ["My", "Name", "is", "Lucky"];

// const searchTerm = "pp";

// const filteredData = data.filter((item) => item.includes(searchTerm));

// console.log(filteredData);

// How to implement a feature that allows users to perform live search suggestions as they type?

// const input = document.getElementById("myInput");

// input.addEventListener("input", (e) => {
//   const searchText = e.target.value;

//   fetch(`/search/suggestions?query=${searchText}`)
//     .then((res) => res.json())
//     .then((data) => {
// Display search suggestions to the user
// });
// });

// Simulated data for demonstration purposes
const suggestionsData = [
  "JavaScript",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Angular",
  "Vue.js",
  "TypeScript",
];

const searchInput = document.getElementById("myInput");
const suggestionsContainer = document.getElementById("suggestions-container");

function getSuggestions(query) {
  // Filter suggestions based on the query
  const filteredSuggestions = suggestionsData.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  // Display suggestions
  displaySuggestions(filteredSuggestions);
}

function displaySuggestions(suggestions) {
  // Clear previous suggestions
  suggestionsContainer.innerHTML = "";

  // Display new suggestions
  suggestions.forEach((suggestion) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.className = "suggestion";
    suggestionElement.textContent = suggestion;

    // Handle suggestion click
    suggestionElement.addEventListener("click", () => {
      // Set the selected suggestion as the search input value
      searchInput.value = suggestion;
      // Hide suggestions container
      suggestionsContainer.style.display = "none";
    });

    suggestionsContainer.appendChild(suggestionElement);
  });

  // Show suggestions container if there are suggestions, hide otherwise
  suggestionsContainer.style.display = suggestions.length ? "block" : "none";
}

// Close suggestions container if user clicks outside of it
document.addEventListener("click", (event) => {
  if (
    !suggestionsContainer.contains(event.target) &&
    event.target !== searchInput
  ) {
    suggestionsContainer.style.display = "none";
  }
});
