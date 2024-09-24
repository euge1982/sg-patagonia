//Archivo para la creacion de la pagina de cultura

import React from 'react';  //Importamos React
import CustomCard from '../components/Card';   //Importamos Card de la carpeta components
import '../styles/Culture.css';   //Importamos archivo CSS

//Funcion para la creacion de tarjetas de la pagina de cultura
const Culture = () => {
  //Retorna un div con las tarjetas
  return (
    <div className="culture-container">

      <div className="text-container">
        <h2>Cultura de la Patagonia Argentina</h2>       
        <p>La Patagonia es una región llena de historia y tradiciones ancestrales. Desde la cultura del pueblo Mapuche 
          hasta la gastronomía única de la región y los festivales que celebran su identidad, la Patagonia ofrece una 
          rica herencia cultural para explorar y disfrutar.</p>
      </div>

     <div className="card-container">
        {/* Tarjetas */}
        <CustomCard title="Cultura Mapuche" image="/imagenes/Culture/mapuche.jpg" description="Conoce la historia y la cultura del pueblo Mapuche." />
        <CustomCard title="Gastronomía Tipica" image="/imagenes/Culture/gastronomia.jpg" description="Prueba los platos típicos de la Patagonia." />
        <CustomCard title="Festivales y Eventos" image="/imagenes/Culture/festival.jpg" description="Disfruta de los festivales culturales y locales." />
     </div>
    </div>
  );
};

export default Culture;   //Exportamos la pagina Culture