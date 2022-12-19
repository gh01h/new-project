const showdepartmanMenu = document.querySelector("#show-departman-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const lastLink = document.querySelector(".last-link");
const applic = document.querySelector(".applic")

showdepartmanMenu.addEventListener("mouseenter", event => {
    const div = event.target.childNodes[5];
    div.style.animation = "showUp 1.5s 1";
    div.style.display = "flex";
})

showdepartmanMenu.addEventListener("mouseleave", event => {
    const div = event.target.childNodes[5];
    div.style.display = "none";
})

hamburgerIcon.addEventListener("click", function() {
    hamburgerMenu.classList.add('show-hamburger-menu');
})

crossIcon.addEventListener("click", function() {
    hamburgerMenu.classList.remove("show-hamburger-menu");
})

lastLink.addEventListener("mouseenter" , function() {
    applic.style.display = "block";
})

lastLink.addEventListener("mouseleave" , function() {
    applic.style.display = "none";
})