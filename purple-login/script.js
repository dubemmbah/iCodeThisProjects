const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const btnLogin = document.querySelector(".btn-login");
const loginPage = document.querySelector(".card-container::before");

const validatePassword = function (password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
};

validatePassword(passwordInput.value);

btnLogin.addEventListener("click", function () {
  loginPage.style.zIndex = 10;
});
