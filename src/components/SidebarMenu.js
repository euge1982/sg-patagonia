//Archivo para la creacion del sidebar

import React, { useState } from 'react';   //Importamos React y useState de React
import { Sidebar } from 'primereact/sidebar';   //Importamos Sidebar de PrimeReact
import { Button } from 'primereact/button';   //Importamos Button de PrimeReact
import { Link } from 'react-router-dom';   //Importamos Link de React Router
import '../styles/SidebarMenu.css';   //Importamos los estilos de SidebarMenu

//Funcion para la creacion del sidebar
const SidebarMenu = () => {
  const [visible, setVisible] = useState(false);   //Variable para controlar el estado del sidebar

  return (
    <>
      {/* Boton para mostrar el sidebar */}
      <Button icon="pi pi-bars" className="p-button-rounded p-button-text menu-icon" onClick={() => setVisible(true)} />
      {/* Sidebar para el menu */}
      <Sidebar visible={visible} onHide={() => setVisible(false)} className="custom-sidebar">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nature">Naturaleza</Link></li>
            <li><Link to="/culture">Cultura</Link></li>
            <li><Link to="/activities">Actividades</Link></li>
          </ul>
        </nav>
      </Sidebar>
    </>
  );
};

export default SidebarMenu;   //Exportamos el sidebar
