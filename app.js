const navBar = document.querySelector(".navigation");
const toggleBtn = document.querySelector(".toggle");
const navLinks = document.querySelector(".navigation-links");
window.onscroll = function () {
  if (window.scrollY > 0) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
  }
};
toggleBtn.addEventListener("click", handleClick);

function handleClick() {
  toggleBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
}
