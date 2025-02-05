let navMenu = document.getElementById("hamburger");
let navLink = document.getElementById("nav-menu");
navMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
