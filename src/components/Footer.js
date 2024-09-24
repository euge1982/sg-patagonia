//Archivo para la creacion del pie de pagina

import React from 'react';   //Importamos React
import { Panel } from 'primereact/panel';   //Importamos Panel de PrimeReact
import '../styles/Footer.css';   //Importamos los estilos de Footer

//Funcion para la creacion del pie de pagina
const Footer = () => {
  return (
    <Panel className="footer-panel" footer="&copy; 2024 Patagonia Argentina. By Eugenia Mora.">
      <div className="footer-content">
        <p>Contacto: info@patagonia.com</p>
        <p>Síguenos en redes sociales:</p>
        <div className="footer-icons">    {/* Iconos de redes sociales */}
          <i className="pi pi-facebook"></i>
          <i className="pi pi-instagram"></i>
          <i className="pi pi-twitter"></i>
        </div>
      </div>
    </Panel>
  );
};

export default Footer;   //Exportamos el pie de pagina