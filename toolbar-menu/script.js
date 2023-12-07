const button = document.querySelector(".apps__button");
const dropdown = document.querySelector(".dropdown__wrapper");

button.addEventListener("click", () => {
  dropdown.classList.remove("none");
  dropdown.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown = dropdown.contains(e.target);
  const isButtonClicked = button.contains(e.target);

  if (!isClickInsideDropdown && !isButtonClicked) {
    dropdown.classList.add("hide");
    dropdown.classList.add("dropdown__wrapper--fade-in");
  }
});
