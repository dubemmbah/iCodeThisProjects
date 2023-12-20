const buttons = document.querySelectorAll("button");
const creditCardNumber = document.getElementById("card-number");
const expiryDateNumber = document.getElementById("expiry");
const btnClose = document.querySelector(".btn-close");
const btnCloseThank = document.querySelector(".card-thankyou .btn-close");
const submitButton = document.querySelector(".btn-order");
const card = document.querySelector("main");
const cardThankYou = document.querySelector(".card-thankyou");
const form = document.querySelector("form");
const inputFields = document.querySelectorAll("input");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => e.preventDefault())
);

// const formatCreditCard = function (e) {
//   let input = e.target.value;
//   let value = input.replace(/\D/g, "");
//   value = value.replace(/(.{4})/g, "$1 ").trim();

//   input = value.substring(0, 19); // Limiting to 16 digits inclusive of the spaces

//   e.target.value = input;
// };

const creditCardValidation = function (e) {
  // 1. Get the input value from the event object
  let input = e.target.value;

  // 2. Remove non-numeric characters from the input using a regular expression
  let value = input.replace(/\D/g, "");

  // 3. Insert a space after every four characters
  value = value.replace(/(.{4})/g, "$1 ").trim();

  // 4. Limit the length of the value to 19 characters (16 digits + 3 spaces)
  input = value.substring(0, 19);

  // 5. Update the value of the input field with the formatted value
  e.target.value = input;
};
creditCardNumber.addEventListener("input", creditCardValidation);

const expiryDateValidation = function (e) {
  let input = e.target.value;
  let value = input.replace(/\D/g, "");

  if (value.length === 4) {
    let month = value.substring(0, 2);
    let year = value.substring(2);
    if (
      month >= 1 &&
      month <= 12 &&
      year >= 23 &&
      year <= 29 &&
      year.length === 2
    ) {
      value = `${month.toString().padStart(2, "0")} / ${year}`;
      expiryDateNumber
        .closest(".input__wrapper")
        .querySelector("label .error-message").style.display = "none";
    } else {
      expiryDateNumber
        .closest(".input__wrapper")
        .querySelector("label .error-message").style.display = "block";
    }
  }

  e.target.value = value;
};

expiryDateNumber.addEventListener("input", expiryDateValidation);

const checkRequiredFields = function (form) {
  // let allFieldsFilled = true;

  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach((field) => {
    const errorContainer = field
      .closest(".input__wrapper")
      .querySelector("label .error-message");

    // Check if field is empty
    if (field.value.trim() === "") {
      // Display error message
      errorContainer.style.display = "block";
      // allFieldsFilled = false;
    } else {
      // Clear error message if field is filled
      errorContainer.style.display = "none";
    }

    // return allFieldsFilled;
  });

  // Check if all required fields are filled
  const allFieldsFilled = Array.from(requiredFields).every(
    (field) => field.value.trim() !== ""
  );

  if (allFieldsFilled) {
    // Clear all input fields
    inputFields.forEach((field) => (field.value = ""));
    return true;
  }
};

btnClose.addEventListener("click", () => {
  card.classList.add("hide");

  setTimeout(() => {
    card.classList.remove("hide");
  }, 4000);
});

btnCloseThank.addEventListener("click", () => {
  cardThankYou.classList.add("hide");

  setTimeout(() => {
    card.classList.remove("hide");
  }, 1000);
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  //
  if (checkRequiredFields(form)) {
    card.classList.add("hide");

    setTimeout(() => {
      cardThankYou.classList.remove("hide");
    }, 1000);
  }
});
