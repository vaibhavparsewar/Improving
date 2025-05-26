const btn11 = document.querySelector(".btn1");
const btn22 = document.querySelector(".btn2");
const btn33 = document.querySelector(".btn3");

const titleEl = document.querySelector(".title");
const bodyEL = document.querySelector("body");

//!Add event listners
btn11.addEventListener("click", function () {
  bodyEL.style.backgroundColor = "yellow";
});

btn22.addEventListener("click", function () {
  titleEl.style.fontSize = "90px";
});

btn33.addEventListener("click", function () {
  bodyEL.style.backgroundColor = "";
  titleEl.style.fontSize = "30px";
});
