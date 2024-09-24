//Archivo para la creacion de la pagina de actividades

import React from 'react';   //Importamos React
import CustomCard from '../components/Card';   //Importamos Card de la carpeta components
import '../styles/Activities.css';   //Importamos archivo CSS

//Funcion para la creacion de tarjetas de la pagina de actividades
const Activities = () => {
  //Retorna un div con las tarjetas
  return (
    <div className="activities-container">
      
      <div className="text-container">
        <h2>Actividades de la Patagonia Argentina</h2>       
        <p>La Patagonia Argentina ofrece una amplia variedad de actividades para disfrutar de su impresionante naturaleza.
           Desde aventurarse por los senderos que atraviesan bosques y montañas, hasta el avistamiento de aves en su
           hábitat natural, y la emoción de deslizarse por las mejores pistas de esquí. Aquí encontrarás experiencias 
           inolvidables para cada tipo de viajero, conectando con la majestuosidad de esta región única</p>
      </div>

      <div className="card-container">
        {/* Tarjetas */}
        <CustomCard title="Senderismo" image="/imagenes/Activities/senderismo.jpg" description="Explora las mejores rutas de senderismo." />
        <CustomCard title="Esquí" image="/imagenes/Activities/esqui.jpg" description="Disfruta del esquí en las montañas nevadas." />
        <CustomCard title="Aves" image="/imagenes/Activities/aves.jpg" description="Conoce las aves autóctonas." />
      </div>
    </div>
  );
};

export default Activities;   //Exportamos la pagina Activities