"use strict";

const notifications = document.querySelector(".notifications");
const dropdown = document.querySelector(".dropdown--wrapper");

notifications.addEventListener("click", () => {
  dropdown.classList.remove("none");
  dropdown.classList.toggle("dropdown--wrapper--fade-in");
  dropdown.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown = dropdown.contains(e.target);
  const isClicked = notifications.contains(e.target);

  if (!isClickInsideDropdown && !isClicked) {
    // Checks to ensure that the click event did not occur on either the dropdown or the notifications icon & hides the dropdown
    dropdown.classList.add("hide");
    dropdown.classList.remove("dropdown--wrapper--fade-in");
  }
});
