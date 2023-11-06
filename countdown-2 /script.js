const daysEl = document.querySelector(".days p");
const hoursEl = document.querySelector(".hours p");
const minutesEl = document.querySelector(".minutes p");
const secondsEl = document.querySelector(".seconds p");

const tripDate = "25 december 2023";

function countDown() {
  const trip = new Date(tripDate);
  const currentDate = new Date();

  const totalSeconds = (trip - currentDate) / 1000;

  const secondsLeft = Math.floor(totalSeconds % 60);
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const daysLeft = Math.floor(totalSeconds / 3600 / 24);

  daysEl.innerHTML = daysLeft;
  hoursEl.innerHTML = modifyDate(hoursLeft);
  minutesEl.innerHTML = modifyDate(minutesLeft);
  secondsEl.innerHTML = modifyDate(secondsLeft);
}

setInterval(countDown, 1000);

function modifyDate(time) {
  return time < 10 ? `0${time}` : time;
}
