"use strict";

// header navbar

const body = document.querySelector("body");

const navBtn = document.querySelector("header .nav-btn");

const headerNav = document.querySelector("header nav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  headerNav.classList.toggle("active");
  if (headerNav.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// add active class link with click

const navLinks = document.querySelectorAll("header nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const li = link.parentElement;
    const allListItems = document.querySelectorAll("nav ul li");
    allListItems.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
  });
});
