const hamburger = document.querySelector(".hamburger");
const profile = document.querySelector(".fas fa-user-circle");
const navLinks = document.querySelector(".nav-links");
const signOut = document.querySelector(".sign-out");
const links = document.querySelectorAll(".nav-links li");

const sign = document.querySelectorAll(".sign-out li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
});

profile.addEventListener("click", () => {
  signOut.classList.toggle("open");
  
});

function myFunction(x) {
    x.classList.toggle("change");
  }