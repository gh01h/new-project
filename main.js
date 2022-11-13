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

const showProductMenu = document.querySelector("#show-product-menu");

showProductMenu.addEventListener("mouseenter", event => {
    const div = event.target.childNodes[5];
    div.style.animation = "showUp 1.5s 1";
    div.style.display = "flex";
})

showProductMenu.addEventListener("mouseleave", event => {
    const div = event.target.childNodes[5];
    div.style.display = "none";
})