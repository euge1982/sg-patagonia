// Archivo para la creacion del encabezado

import React from 'react';   //Importamos React
import SidebarMenu from './SidebarMenu';   // Importamos el SidebarMenu
import '../styles/Header.css';   //Importamos los estilos de Header

//Funcion para la creacion del encabezado
const Header = () => {
  return (
    <>
      <header className="header">
        <SidebarMenu />   {/* Sidebar para el menu */}
        <h1>PATAGONIA ARGENTINA</h1>   {/* Titulo del encabezado */}
      </header>
    </>
  );
};

export default Header;   //Exportamos el encabezado