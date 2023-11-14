const mainItems = document.querySelectorAll(".main-item");

mainItems.forEach((mainItem) => {
  mainItem.addEventListener("click", function () {
    mainItem.classList.toggle("main-item--open");
  });
});
