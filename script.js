const btn = document.querySelector(".btn");
const header = document.querySelector(".header");
const mediaCards = document.querySelectorAll(".media-card");
const overviewCards = document.querySelectorAll(".overview-card");
const h1s = document.querySelectorAll("h1");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  btn.classList.toggle("btn-active-color");

  document.body.classList.toggle("light-body");
  header.classList.toggle("light-header");

  mediaCards.forEach((item) => item.classList.toggle("light-card"));
  mediaCards.forEach((item) => item.classList.toggle("lightHover"));

  overviewCards.forEach((item) => item.classList.toggle("light-card"));
  overviewCards.forEach((item) => item.classList.toggle("lightHover"));

  h1s.forEach((item) => item.classList.toggle("light-mode-text"));
});
