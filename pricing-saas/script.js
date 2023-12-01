"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleDiv = document.querySelector(".toggle-div");
const annualBill = document.querySelector(".bill-annual");
const monthlyBill = document.querySelector(".bill-monthly");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  toggleDiv.classList.toggle("active");
  annualBill.classList.toggle("active");
  monthlyBill.classList.toggle("active");
});
