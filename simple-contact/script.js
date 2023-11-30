"use strict";

const btnContact = document.querySelector(".btn");
const toast = document.querySelector(".toast");

btnContact.addEventListener("click", () => {
  toast.classList.add("animate-toast");

  setTimeout(() => {
    toast.classList.remove("animate-toast");
  }, 4000);
});
