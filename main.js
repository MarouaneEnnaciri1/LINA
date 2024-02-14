let swt = document.getElementById("switch");
let header = document.getElementById("header");
let title = document.getElementById("titre");
let ul = document.getElementById("li");

swt.addEventListener("click", function () {
  if (swt.classList.contains("fa-sun")) {
    swt.classList.replace("fa-sun", "fa-moon");
  } else {
    swt.classList.replace("fa-moon", "fa-sun");
  }

  document.body.classList.toggle("black-color-dark");
  // header.classList.toggle("black-color-dark");
  body.classList.toggle("nuit-mode-body");
});
