document.addEventListener("DOMContentLoaded", function () {
  const btnClose = document.querySelector(".btn-close");
  const top = document.querySelector(".top");

  btnClose.addEventListener("click", () => {
    if (top.parentNode) {
      // top.classList.add("top-remove-transition");
      top.remove();
    }

    // setTimeout(() => {
    //   top.remove();
    // }, 500);
  });
});
