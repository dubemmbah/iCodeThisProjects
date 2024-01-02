"use strict";

const testimonialText = document.querySelector(".testimonial-text");
const testimonialImg = document.querySelector(".image-box img");
const testimonialName = document.querySelector(".testifier-name");
const testimonialJob = document.querySelector(".testifier-job");

// const TESTIMONIALS = [
//   {
//     id: 1,
//     testifier: "John V. Bellamy",
//     testifier_job: "Founder & CEO, The Company",
//     testifier_img:
//       "https://img.freepik.com/free-photo/portrait-young-beautiful-surprised-man_155003-10880.jpg?size=626&ext=jpg&ga=GA1.1.107811200.1701925464&semt=ais",
//     testimony:
//       "Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all, hassle free!",
//   },
//   {
//     id: 2,
//     testifier: "Jane K. Thompson",
//     testifier_job: "Marketing Director, XYZ Corp",
//     testifier_img: "https://example.com/jane_image.jpg",
//     testimony:
//       "Exceptional product! It exceeded our expectations and has had a significant impact on our business.",
//   },
//   {
//     id: 3,
//     testifier: "Alexandra P. Williams",
//     testifier_job: "Lead Developer, Tech Innovations",
//     testifier_img: "https://example.com/alexandra_image.jpg",
//     testimony:
//       "I highly recommend this. It's user-friendly, and the support is excellent.",
//   },
//   {
//     id: 4,
//     testifier: "Michael S. Rodriguez",
//     testifier_job: "Financial Analyst, Global Investments",
//     testifier_img: "https://example.com/michael_image.jpg",
//     testimony:
//       "A game-changer! This product has streamlined our processes and improved efficiency.",
//   },
//   {
//     id: 5,
//     testifier: "Emily M. Foster",
//     testifier_job: "Creative Director, Artistry Studios",
//     testifier_img: "https://example.com/emily_image.jpg",
//     testimony:
//       "Sleek design, powerful features. It has transformed the way we work.",
//   },
//   {
//     id: 6,
//     testifier: "Daniel R. Harper",
//     testifier_job: "Co-Founder, Innovation Hub",
//     testifier_img: "https://example.com/daniel_image.jpg",
//     testimony:
//       "Our team loves it! The product has increased our productivity and collaboration.",
//   },
// ];

const testimonialsContainer = document.querySelector(".testimonials");
const testimonials = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentIndex = 0;

const goToSlide = function (currentIndex) {
  testimonials.forEach((t, i) => {
    t.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
  });
};

function showNextSlide() {
  if (currentIndex >= testimonials.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  goToSlide(currentIndex);
  //   updateSlideContent(currentIndex);
}

function showPrevSlide() {
  if (currentIndex === 0) {
    currentIndex = testimonials.length - 1;
  } else {
    currentIndex--;
  }
  goToSlide(currentIndex);
}

// // Initial setup
goToSlide(0);

// // Event listeners for next and previous buttons
nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);
