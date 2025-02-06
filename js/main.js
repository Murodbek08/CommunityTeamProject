let navMenu = document.getElementById("hamburger");
let navLink = document.getElementById("nav-menu");
navMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

//back to top

let mybutton = document.getElementById("bacTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const bacTop = document.getElementById("bacTop");
bacTop.onclick = function () {
  const scrollStep = -window.scrollY / (10 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
