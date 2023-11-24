const btnProfile = document.querySelector(".user-profile");
const card = document.querySelector(".card");

btnProfile.addEventListener("click", () => {
  card.classList.toggle("active");
});
