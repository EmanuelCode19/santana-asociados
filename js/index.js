const iconMenu = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav");

iconMenu.addEventListener('click', ()=>{
    event.stopPropagation();
    navMenu.classList.toggle('active')
   })

window.onclick = function (e) {
    navMenu.classList.remove('active')
   }
