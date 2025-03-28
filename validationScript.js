    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


let subButton = document.getElementById("submit");
let inputField = document.getElementById("inputField");

document.getElementById("submit").addEventListener("click", (event) => {
  console.log("Button clicked!"); // For debugging purposes
  let inputValue = inputField.value;
  let pattern = /^[a-zA-Z0-9 ]+$/;
  if (pattern.test(inputValue)) {
    inputValue.setCustomValidity("");
    alert("The form has been submitted.");
  } else {
    inputValue.setCustomValidity("Error, your input is not alphanumeric.")
  }
})


