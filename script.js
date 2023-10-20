"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuMobile = document.querySelector(".nav-mobile");

hamburgerIcon.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});
