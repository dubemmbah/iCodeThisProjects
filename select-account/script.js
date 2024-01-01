"use strict";
const accounts = document.querySelectorAll(".account");
const container = document.querySelector(".accounts");

const ACCOUNTS = [
  {
    id: 1,
    img_url:
      "https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-52039.jpg?size=626&ext=jpg&ga=GA1.1.107811200.1701925464&semt=ais",
    acc_name: "Andrew Robinson",
  },
  {
    id: 2,
    img_url:
      "https://img.freepik.com/free-photo/young-african-american-woman-with-headband-posing_23-2148183427.jpg?size=626&ext=jpg&ga=GA1.1.107811200.1701925464&semt=ais",
    acc_name: "Mary Kyles",
  },
];

ACCOUNTS.forEach((acc) => {
  const accContainer = document.createElement("div");
  accContainer.classList.add(`account`);

  const accDetails = document.createElement("div");
  accDetails.classList.add("account-details");

  const accImg = document.createElement("img");
  accImg.src = acc.img_url;
  accImg.alt = acc.acc_name;

  const accName = document.createElement("p");
  accName.textContent = acc.acc_name;

  const btnOptions = document.createElement("button");
  btnOptions.classList.add("btn-option");
  btnOptions.innerHTML = ` <ion-icon class="option" name="ellipsis-horizontal"></ion-icon>`;

  const btnActions = document.createElement("div");
  btnActions.classList.add("actions");
  btnActions.innerHTML = `
    <button class="edit">
        <ion-icon class="icon-action" name="create-outline"></ion-icon>
        <span>Edit</span>
    </button>
    <button class="delete">
        <ion-icon class="icon-action" name="trash-outline"></ion-icon>
        <span>Delete</span>
    </button>`;

  accDetails.appendChild(accImg);
  accDetails.appendChild(accName);
  accDetails.appendChild(btnOptions);
  accDetails.appendChild(btnActions);

  accContainer.appendChild(accDetails);

  container.insertAdjacentElement("afterbegin", accContainer);

  container.querySelectorAll(".account").forEach((acc) => {
    const btnOptions = acc.querySelector(".btn-option");
    const actionsMenu = acc.querySelector(".actions");

    btnOptions.addEventListener("click", () => {
      actionsMenu.classList.toggle("unhide");
    });
  });
});

// accounts.forEach((acc) => {
//   const btnOptions = acc.querySelector(".btn-option");
//   const actionsMenu = acc.querySelector(".actions");

//   btnOptions.addEventListener("click", () => {
//     actionsMenu.classList.toggle("unhide");
//   });
// });
