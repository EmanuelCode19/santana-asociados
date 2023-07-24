import { header } from './components/header.js';


const headerContainer = document.querySelector('#header');

headerContainer.innerHTML = header;

const iconMenu = document.querySelector('.icon-menu');

const navMenu = document.querySelector('.nav');

window.onload = () => {
  iconMenu.addEventListener('click', () => {
    event.stopPropagation();
    navMenu.classList.toggle('active');
  });

  window.onclick = function (e) {
    navMenu.classList.remove('active');
  };
};
