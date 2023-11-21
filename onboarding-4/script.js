const dotsContainer = document.querySelector(".dots");
const btnLeft = document.querySelector(".btn__slider--left");
const btnRight = document.querySelector(".btn__slider--right");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector("card-container");

// for (let i = 0; i < 3; i++)
//   dotsContainer.insertAdjacentHTML(
//     "beforeend",
//     `<button class='dots__dot'></button>`
//   );
cards.forEach((card, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dots__dot");

  card[i];
});

// function createDot(container, isActive = false) {
//   const dot = document.createElement("button");
//   dot.classList.add("dots__dot");

//   if (isActive) dot.classList.add("active");

//   container.appendChild(dot);
// }

// for (let i = 0; i < 3; i++) createDot(dotsContainer, i === 0);

let currentCard = 0;
const maxCard = cards.length;

const goToCard = function (c, i) {
  cards.forEach((card) => {
    card.style.transform = `translateX(${100 - (i - card)}%)`;
  });
};

const nextSlide = function () {
  if (currentCard > maxCard - 1) {
    currentCard = 0;
  } else {
    currentCard++;
  }

  goToCard(currentCard);
};

const previousSlide = function () {
  if (currentCard === 0) {
    currentCard = maxCard - 1;
  } else {
    currentCard--;
  }

  goToCard(currentCard);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);
