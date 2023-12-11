// How to validate user input as they type in a form

// by using event handling or event listeners on input event.

// get input feild data

const inputField = document.getElementById("myInput");

// Event listener for input event

inputField.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  // perform validation logic
  if (inputValue.length < 3) {
    // Display an error message or apply visual feeback
    console.log("Input must be at least 3 characters long");
  } else {
    // Input is valid

    console.log("Input is Valid");
  }
});
