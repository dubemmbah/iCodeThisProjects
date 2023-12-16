"use strict";

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const pages = document.querySelectorAll(".page");
const pagesContainer = document.querySelector("nav");

let currentPage = 1;

btnNext.addEventListener("click", () => {
  if (currentPage < pages.length) {
    currentPage++;
  } else {
    return;
  }

  updateActivePage();
  updateButtonStates();
});

btnPrev.addEventListener("click", () => {
  if (currentPage <= 1) {
    return;
  } else {
    currentPage--;
  }

  updateActivePage();
  updateButtonStates();
});

// pagesContainer.addEventListener("click", (e) => {
//   const clickedPage = e.target.closest(".page");

//   if (clickedPage) {
//     // Remove active class from all pages
//     pages.forEach((page) => {
//       page.classList.remove("active");
//     });

//     // Add active class to clicked page
//     clickedPage.classList.add("active");
//   }
// });

function updateActivePage() {
  // Remove active class from all pages
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  //   Add active class to the current page
  const currentActivePage = document.querySelector(`.page-${currentPage}`);
  if (currentActivePage) {
    currentActivePage.classList.add("active");
  }
}

function updateButtonStates() {
  btnPrev.disabled = currentPage === 1;

  btnNext.disabled = currentPage === pages.length;
}

// Adding event listeners to each page button
pages.forEach((page) => {
  page.addEventListener("click", () => {
    const pageNumber = parseInt(page.classList[1].split("-")[1]);

    // Update the page number
    currentPage = pageNumber;

    updateActivePage();
    updateButtonStates();
  });
});

updateActivePage();
updateButtonStates();
