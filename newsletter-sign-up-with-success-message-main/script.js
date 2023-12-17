// const btnSubscribe = document.querySelector(".btn-subscribe");
// const successMsg = document.querySelector(".success-message");
// const container = document.querySelector("main");

// btnSubscribe.addEventListener("click", (e) => {
//   e.preventDefault(); // bc the default behavior of a button in a form is to reload the page, hence we prevent that action here

//   container.style.display = "none";
//   successMsg.style.display = "block";
// });

"use strict";

const container = document.querySelector("main");
const emailInput = document.getElementById("email");
const form = document.querySelector("form");
const btnSubscribe = document.querySelector(".btn-subscribe");
const successMessage = document.querySelector(".success-message");
const successMessageInfo = document.querySelector(".success-message p");
const btnDismiss = document.querySelector(".btn-dismiss");
const errorMsg = document.querySelector(".input__wrapper label .error-msg");

// Function to validate email format
const isValidEmail = function (email) {
  // Use a regular expression to check if the email is in a valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleInputValidation = function () {
  const emailValue = emailInput.value;

  if (isValidEmail(emailValue)) {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    btnSubscribe.disabled = false;
    errorMsg.style.display = "none";
    successMessageInfo.innerHTML = `A confirmation email has been sent to <a class='email'>${emailValue}</a>. Please open
    it and click the button inside to confirm your subscription.`;
  } else {
    emailInput.classList.remove("success");
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
    btnSubscribe.disabled = true;
  }
};

const showSuccessMessage = function () {
  container.style.display = "none";
  successMessage.style.display = "block";
};

const dismissSuccessMessage = function () {
  container.style.display = "grid";
  successMessage.style.display = "none";
  emailInput.value = ""; // clearing the input field
  emailInput.classList.remove("success");
  btnSubscribe.disabled = true;
};

emailInput.addEventListener("input", handleInputValidation);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  handleInputValidation();

  if (isValidEmail(emailInput.value.trim())) {
    showSuccessMessage();
  }
});

btnDismiss.addEventListener("click", dismissSuccessMessage);

// console.log(emailInput.value);
// const container = document.querySelector("main");
// const emailInput = document.getElementById("email");
// const form = document.querySelector("form");
// const successMessage = document.querySelector(".success-message");
// const btnDismiss = document.querySelector(".btn-dismiss");

// // Function to validate email format
// function isValidEmail(email) {
//   // Use a regular expression to check if the email is in a valid format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Function to handle input validation
// function handleInputValidation() {
//   const emailValue = emailInput.value.trim();

//   if (isValidEmail(emailValue)) {
//     emailInput.classList.remove("error");
//   } else {
//     emailInput.classList.add("error");
//   }
// }

// // Function to show success message
// function showSuccessMessage() {
//   container.style.display = "none";
//   successMessage.style.display = "block";
// }

// // Function to dismiss success message
// function dismissSuccessMessage() {
//   container.style.display = "grid";
//   successMessage.style.display = "none";
//   emailInput.value = ""; // Clear the input field after dismissing the message
// }

// // Event listener for input validation
// emailInput.addEventListener("input", handleInputValidation);

// // Event listener for form submission
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent the default form submission behavior

//   // Validate email before showing the success message
//   handleInputValidation();

//   if (isValidEmail(emailInput.value.trim())) {
//     showSuccessMessage();
//   }
// });

// // Event listener to dismiss the success message
// btnDismiss.addEventListener("click", dismissSuccessMessage);
