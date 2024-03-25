// Use JavaScript to toggle the display/hide of the hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  document.getElementById("nav_menu").classList.toggle("nav-active");
});
