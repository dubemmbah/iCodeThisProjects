const closeIcons = document.querySelectorAll(".icon-close");
// const items = document.querySelectorAll(".item");
const feed = document.querySelector(".feed");

closeIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.parentElement.remove();

    // const info = document.createElement("p");
    // info.classList.add("info");

    if (feed.children.length === 0) {
      feed.innerHTML = `<p class='info'>Your wishlist is empty</p>`;
    }
  });
});

// e.target.parentElement.remove();
