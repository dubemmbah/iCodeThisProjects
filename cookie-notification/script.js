"use strict";

const popUpContainer = document.querySelector(".popup");
const btnClose = document.querySelectorAll(".btn-close");

btnClose.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clicked = e.target.parentNode;
    console.log(clicked.parentNode.tagName.toLowerCase() === "div");

    // Check if parentNode is a body & returns if this evaluates to true
    if (clicked.parentNode.classList.contains("body")) {
      return;
    } else if (
      clicked.parentNode &&
      clicked.parentNode.tagName.toLowerCase() === "div"
    ) {
      clicked.parentNode.classList.add("unhide-popup");
    } else {
      clicked.parentNode.classList.add("unhide");
    }

    setTimeout(() => {
      clicked.parentElement.classList.add("restore");
      clicked.parentElement.classList.remove("unhide-popup");
      clicked.parentElement.classList.remove("unhide");
    }, 4000);
  });
});
