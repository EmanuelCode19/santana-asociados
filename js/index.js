import { services } from './data/services.js';
import { buildServiceTemplate } from './utils/buildServiceTemplate.js';

const iconMenu = document.querySelector('.icon-menu');
const navMenu = document.querySelector('.nav');

const servicesContainer = document.querySelector('#services');

iconMenu.addEventListener('click', () => {
  event.stopPropagation();
  navMenu.classList.toggle('active');
});

window.onclick = function (e) {
  navMenu.classList.remove('active');
};



const servicesTemplateList = services.reduce(
  (accumulator, current) => accumulator + buildServiceTemplate(current),
  '',
);

console.log({ servicesTemplateList });

servicesContainer.innerHTML = servicesTemplateList;
