// ROHIT'S JS
// const likeIcon = document.querySelector(".likeIcon");
// const likesNum = document.querySelector(".likesNum");
// const lcs = document.querySelectorAll(".lcs");
// const mainabs = document.querySelector(".mainabs");
// const containerabs = document.querySelectorAll(".containerabs");
// const addComment = document.querySelector(".addComment");
// const close = document.querySelector(".close");
// const content = document.querySelectorAll(".content");

// content.forEach((elm, i) => {
//   setTimeout(() => {
//     elm.classList.remove("scale-y-0");
//   }, 400 * i);
// });

// likeIcon.addEventListener("click", () => {
//   const noOfLikes = Number(likesNum.textContent);
//   const likes = document.querySelector(".likes");
//   const li = document.createElement("li");
//   li.className = "flex items-center gap-2 cursor-pointer py-2";
//   li.innerHTML = `<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" class="w-7 h-7 rounded-full object-cover">
//         <span class="text-xs text-white">You</span>`;

//   if (likeIcon.classList.contains("text-white/60")) {
//     likeIcon.classList.remove("text-white/60");
//     likeIcon.classList.add("text-red-400");
//     likesNum.textContent = noOfLikes + 1;
//     likes.insertBefore(li, likes.firstChild);
//   } else {
//     likeIcon.classList.add("text-white/60");
//     likeIcon.classList.remove("text-red-400");
//     likesNum.textContent = noOfLikes - 1;
//     likes.removeChild(likes.firstChild);
//   }
// });

// lcs.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     mainabs.classList.add("top-0");
//     mainabs.classList.remove("top-[85%]");
//     containerabs.forEach((container) => {
//       container.classList.add("hidden");
//     });
//     containerabs[i].classList.add("block");
//     containerabs[i].classList.remove("hidden");
//     close.classList.add("opacity-100");
//   });
// });

// addComment.addEventListener("click", () => {
//   const commentsNum = document.querySelector(".commentsNum");
//   const numOfComm = Number(commentsNum.textContent);
//   const commentInput = document.querySelector(".commentInput");
//   const comment = commentInput.value;
//   if (comment.length < 1) {
//     alert("Please write a comment first 🤗");
//     return;
//   }
//   const li = document.createElement("li");
//   const comments = document.querySelector(".comments");
//   li.className = "border-b border-white/10 py-3";
//   li.innerHTML = `
//     <div class="flex items-center gap-2">
//                                 <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" class="w-8 h-8 rounded-full object-cover">
//                                 <div class="flex flex-col">
//                                     <h4 class="text-white text-xs">You</h4>
//                                     <span class="text-white/70 text-[10px]">Now</span>
//                                 </div>
//                             </div>
//                             <p class="text-xs text-white pt-2 break-all">${comment}</p>`;

//   comments.appendChild(li);
//   commentsNum.textContent = numOfComm + 1;
//   commentInput.value = "";
// });

// close.addEventListener("click", () => {
//   mainabs.classList.remove("top-0");
//   mainabs.classList.add("top-[85%]");
//   close.classList.remove("opacity-100");
//   setTimeout(() => {
//     containerabs.forEach((cont) => {
//       cont.classList.add("hidden");
//     });
//   }, 400);
// });
