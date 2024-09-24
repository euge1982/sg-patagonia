//Archivo para la creacion de la pagina de naturaleza

import React from 'react';
import CustomCard from '../components/Card';   //Importamos Card de la carpeta components
import '../styles/Nature.css';   //Importamos archivo CSS

//Funcion para la creacion de tarjetas
const Nature = () => {
  return (
    <div className="nature-container">

    <div className="text-container">
      <h2>Actividades de la Patagonia Argentina</h2>       
      <p>La Patagonia es el hogar de vastas áreas de naturaleza virgen. Sus parques nacionales, la flora y fauna diversa, 
          y paisajes imponentes te invitan a vivir experiencias al aire libre, ya sea explorando sus bosques, 
          montañas o avistando su fascinante vida silvestre.</p>
    </div>

    <div className="card-container">
      {/* Tarjetas */}
      <CustomCard title="Parques Nacionales" image="/imagenes/Nature/parque.jpg" description="Explora los parques nacionales de la Patagonia." />
      <CustomCard title="Fauna Patagónica" image="/imagenes/Nature/fauna.jpg" description="Conoce la diversidad de fauna que habita la región." />
      <CustomCard title="Flora Patagónica" image="/imagenes/Nature/flora.jpg" description="Descubre la flora única de la Patagonia Argentina." />
    </div>
  </div>
  );
};

export default Nature;   //Exportamos la pagina Nature