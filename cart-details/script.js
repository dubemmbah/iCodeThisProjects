const btnIncrement = document.querySelector(".btn-increment");
const btnDecrement = document.querySelector(".btn-decrement");
const qtyInput = document.querySelector(".quantity");

let quantity = 0;

btnIncrement.addEventListener("click", function (e) {
  quantity++;
  qtyInput.value = quantity;
});

btnDecrement.addEventListener("click", function (e) {
  if (quantity !== 0) quantity--;
  qtyInput.value = quantity;
});
