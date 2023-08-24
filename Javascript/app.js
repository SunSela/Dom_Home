// // create back to top

//step 1
// const btntop = document.querySelector(".scroll-top");
// console.log("scroll-top");
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     totop.classList.add("show");
//   } else {
//     totop.classList.remove("show");
//   }
// });

// Step 2

// declare variable
const Uptop = document.querySelector(".scroll-top");

// add even click
Uptop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
