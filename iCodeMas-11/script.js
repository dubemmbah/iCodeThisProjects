const btnClose = document.querySelector(".btn-close");
const container = document.querySelector("main");
const ratingsInputEls = document.querySelectorAll(".rating_item input");
const messageArea = document.querySelector("textarea");
const form = document.querySelector("form");
const btnSendFeedback = document.querySelector(".btn-send");
const formCompleteInfo = document.querySelector(".form_complete-info");
const santaHat = document.querySelector(".hat");

const checkFormCompletion = () => {
  if (
    document.querySelector(".rating_item input:checked") &&
    messageArea.value.length >= 5
  ) {
    btnSendFeedback.disabled = false;
  } else {
    btnSendFeedback.disabled = true;
  }
};

const closeFeedbackSection = () => {
  container.style.scale = 0;
  santaHat.style.scale = 0;
  resetForm();

  setTimeout(() => {
    container.style.scale = 1;
    santaHat.style.scale = 1;
  }, 1000);
};

const resetForm = () => {
  form.reset();
  btnSendFeedback.disabled = true;
};

const sendFeedback = () => {
  runAnimation();
};

const runAnimation = () => {
  santaHat.style.scale = 0;
  container.querySelector("h1").style.transform = `translateX(${-150}%)`;
  container.querySelector("p").style.transform = `translateX(${150}%)`;
  container.querySelector(
    ".rating_list"
  ).style.transform = `translateX(${-150}%)`;
  container.querySelector("h3").style.transform = `translateX(${150}%)`;
  messageArea.style.transform = `translateX(${-150}%)`;
  btnSendFeedback.style.transform = `translateX(${300}%)`;

  setTimeout(() => {
    container.style.scale = 0;
    container.style.visibility = "hidden";
    santaHat.style.visibility = "hidden";
  }, 500);

  setTimeout(showFormCompleteInfo, 1000);
};

const showFormCompleteInfo = () => {
  formCompleteInfo.style.visibility = "visible";
  formCompleteInfo.style.scale = 1;
};

ratingsInputEls.forEach((el) => {
  el.addEventListener("input", checkFormCompletion);
});

btnClose.addEventListener("click", closeFeedbackSection);
btnSendFeedback.addEventListener("click", sendFeedback);
messageArea.addEventListener("input", checkFormCompletion);
