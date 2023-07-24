import { services } from '../data/services.js';
import { buildServiceTemplate } from '../utils/buildServiceTemplate.js';

const servicesContainer = document.querySelector('#services');

const servicesTemplateList = services.reduce(
  (accumulator, current) => accumulator + buildServiceTemplate(current),
  '',
);

servicesContainer.innerHTML = servicesTemplateList;
