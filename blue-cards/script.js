const sliderImgs = document.querySelectorAll("img");

const imgSlider = document.querySelector(".img-box-slider-inner");
const sliderInterval = 2000;
let currentIndex = 0;

const handleSlider = () => {
  currentIndex++;
  if (currentIndex === sliderImgs.length) {
    currentIndex = 0;
  }
  imgSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

window.addEventListener("DOMContentLoaded", () => {
  setInterval(handleSlider, sliderInterval);
});
