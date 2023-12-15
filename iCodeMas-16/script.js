"use strict";
const container = document.querySelector("main");

const CARDS = [
  {
    id: 1,
    img_src:
      "https://img.freepik.com/free-photo/nice-christmas-background-white-background-with-copy-space_24972-1722.jpg?size=626&ext=jpg&ga=GA1.1.1093977844.1702188675&semt=ais",
    img_alt: "Background image",
    item_name: "Christmas collection",
    item_heading: "Shop collection now",
    btn_icon: "arrow-down-outline",
    btn_text: "",
  },
  {
    id: 2,
    img_src:
      "https://img.freepik.com/premium-photo/christmas-tree-snow-with-gifts-it-style-spectacular-backdrops_1423-15149.jpg?size=626&ext=jpg&ga=GA1.1.1093977844.1702188675&semt=ais",
    img_alt: "Background image",
    item_name: "Gift cards",
    item_heading: "Share the spirit with our gift cards",
    btn_text: "Get gift",
    btn_icon: "arrow-forward-outline",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  CARDS.forEach((card, i) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card", `card-${i + 1}`);

    // Upper Area
    const upperArea = document.createElement("div");
    upperArea.classList.add("upper_area");

    //   Image
    const cardImg = document.createElement("img");
    cardImg.src = card.img_src;
    cardImg.alt = card.img_alt;

    upperArea.appendChild(cardImg);

    //   Lower area
    const lowerArea = document.createElement("div");
    lowerArea.classList.add("lower_area");

    //   Item Details
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item_details");

    //   Item name
    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.textContent = card.item_name;

    //   Item heading
    const itemHeading = document.createElement("h3");
    itemHeading.classList.add("heading");
    itemHeading.textContent = card.item_heading;

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemHeading);

    //   Button
    const btn = document.createElement("button");
    btn.classList.add("btn", `btn-${i + 1}`);
    // btn.innerText = card.btn_text ?? "";
    btn.innerHTML = `${card.btn_text ? card.btn_text : ""}<ion-icon
        class="icon-right"
        name=${card.btn_icon}
      ></ion-icon>`;

    lowerArea.appendChild(itemDetails);
    lowerArea.appendChild(btn);

    cardEl.appendChild(upperArea);
    cardEl.appendChild(lowerArea);

    container.appendChild(cardEl);
  });
});
