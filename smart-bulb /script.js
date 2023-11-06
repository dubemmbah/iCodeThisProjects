const smartBulb = document.querySelector(".form-card");
const btnOff = document.querySelector(".switch_off-container button");
const btnOn = document.querySelector(".switch_on-container button");

let lightOn = false;

btnOn.addEventListener("click", function () {
  if (lightOn === false) {
    smartBulb.classList.add("switch-on");
    lightOn = true;
  }
});

btnOff.addEventListener("click", function () {
  if (lightOn === true) {
    smartBulb.classList.remove("switch-on");
    lightOn = false;
  }
});
