const iconMenu = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav");

iconMenu.addEventListener("click",() => {
    navMenu.classList.toggle("active");
})

