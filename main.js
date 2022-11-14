const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxleft = (slidesCount - 1) * 100 * -1;

let current = 0;

setInterval(function() {
    if(current > maxleft) {
        current -= 100;
        slides.style.left = current + "%"
    } else {
        current = 0;
        slides.style.left = 0
    }
}, 3500);

const showdepartmanMenu = document.querySelector("#show-departman-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");

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
