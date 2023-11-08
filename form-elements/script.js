const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("selected"); // loops through the stars array, and if for instance, the star at index 4 is clicked, it adds the selected class to all the stars preceding the clicked star (inclusive of the one that was clicked)
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove("selected"); // Purpose is to ensure the removal of the selected class on stars that have been previosly selected if i user decides to change his rating decision. E.g if i clicked on 4 and changed my mind to 2, then the loop ensures that all of the stars after the index 1 have the selected class removed from them
    }
  });
});
