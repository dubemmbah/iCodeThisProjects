const dropdownSwitch = document.querySelector(".dropdown-switch");
const dropdownOptionBtns = document.querySelectorAll(
  ".dropdown_options-list button"
);

const toggleDropdownOptions = () => {
  dropdownSwitch.classList.toggle("active");
};

const selectOption = (btn) => {
  dropdownSwitch.querySelector("span").textContent = btn.textContent;

  if (document.querySelector(".dropdown_options-list button.selected")) {
    document
      .querySelector(".dropdown_options-list button.selected")
      .classList.remove("selected");
  }
  btn.classList.add("selected");
};

dropdownSwitch.addEventListener("click", toggleDropdownOptions);

dropdownOptionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectOption(btn);
  });
});
