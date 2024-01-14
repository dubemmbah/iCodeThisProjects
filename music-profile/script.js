"use strict";

const card = document.querySelector(".card");
const btnPrev = document.querySelector(".btn-prev");

btnPrev.addEventListener("click", () => {
  card.classList.add("hide");

  setTimeout(() => {
    card.classList.remove("hide");
  }, 3000);
});
