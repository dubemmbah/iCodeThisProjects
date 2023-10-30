// const plantersContainer = document.querySelector(".planters");
// const planters = document.querySelectorAll(".planter");
// const planterName = document.querySelectorAll(".planter-name");
// const planterImg = document.querySelectorAll(".planter-img");
// const planterBtn = document.querySelectorAll(".planter-total");

// planterImg.forEach((img) => {
//   img.addEventListener("click", function () {
//     planterName.style.visibility = "none";
//     planterBtn.style.visibility = "none";
//     planters.style.opacity = 0;
//   });
// });

// document.querySelectorAll(".planter-img").forEach((img) => {
//   img.addEventListener("click", (event) => {
//     const planterContainer = event.target.closest(".planter");

//     // Check if the container is collapsed
//     if (planterContainer.classList.contains("collapsed")) {
//       // Expand the clicked planter
//       planterContainer.classList.remove("collapsed");
//     } else {
//       // Collapse all planters except the clicked one
//       document.querySelectorAll(".planter").forEach((planter) => {
//         if (planter !== planterContainer) {
//           planter.classList.add("collapsed");
//         }
//       });
//     }
//   });
// });

const planterImgs = document.querySelectorAll(".planter-img");

planterImgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    const planterContainer = event.target.closest(".planter");
    planterContainer.classList.toggle("collapsed");
  });
});
