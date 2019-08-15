import "../sass/main.scss";

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});
