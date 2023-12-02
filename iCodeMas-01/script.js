"use strict";

const daysEl = document.querySelector(".days h3");
const hoursEl = document.querySelector(".hours h3");
const minutesEl = document.querySelector(".minutes h3");
const secondsEl = document.querySelector(".seconds h3");

setInterval(() => {
  const christmas = new Date("25 december 2023");
  const currentDate = new Date();

  const totalSeconds = (christmas - currentDate) / 1000;

  if (totalSeconds <= 0) return;

  const secondsLeft = Math.floor(totalSeconds % 60);
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const hoursLeft = Math.floor(totalSeconds / 3600) % 60;
  const daysLeft = Math.floor(totalSeconds / 3600 / 24);

  daysEl.innerHTML = daysLeft;
  hoursEl.innerHTML = modifyDate(hoursLeft);
  minutesEl.innerHTML = modifyDate(minutesLeft);
  secondsEl.innerHTML = modifyDate(secondsLeft);
}, 1000);

const modifyDate = function (date) {
  return date < 10 ? `0${date}` : date;
};
