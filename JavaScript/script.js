// Use JavaScript to toggle the display/hide of the hamburger menu
const navMenu = document.getElementById("nav_menu");
const menu = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav-active");
  menu.classList.toggle("nav-active");
});
