import { WS_API } from '../constants/ws-api.js';

export const buildServiceTemplate = (service) => {
  return `
    <div class="services-derecho-penal">
    <h3>${service.title}</h3>
    <p>
      ${service.description}
    </p>
    <a
      href="${WS_API}${service.message}"
      class="enlace-servicio"
    >
      Solicitar servicio
    </a>
  </div>
    `;
};
