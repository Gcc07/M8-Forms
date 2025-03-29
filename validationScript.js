    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


let subButton = document.getElementById("submit");
let inputField = document.getElementById("inputField");
const alphanumeric = /^[a-zA-Z0-9 ]+$/;

document.getElementById("submit").addEventListener("click", () => {
  console.log("Button clicked!"); // For debugging purposes
  if (alphanumeric.test(inputField.value)) {
    inputField.setCustomValidity("");
    alert("The form has been submitted.");
    document.getElementById("myForm").submit();
  } else {
    inputField.setCustomValidity("Error, your input is not alphanumeric.")
  }
})


