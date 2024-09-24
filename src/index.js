//Archivo para la creacion de la pagina

import React from 'react';   //Importamos React
import ReactDOM from 'react-dom/client';   //Importamos ReactDOM
import 'primereact/resources/themes/saga-blue/theme.css';   //Tema PrimeReact
import 'primereact/resources/primereact.min.css';   //Estilos de PrimeReact
import 'primeicons/primeicons.css';   //Iconos PrimeReact
import './index.css';   //Estilos globales
import App from './App';   //Importamos la pagina

//Renderizamos la pagina
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);