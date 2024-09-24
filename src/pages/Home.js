//Archivo para la creacion de la pagina principal

import React from 'react';
import CustomCard from '../components/Card';   ///Importamos Card de la carpeta components
import '../styles/Home.css';   ///Importamos archivo CSS

//Funcion para la creacion de tarjetas
const Home = () => {
  return (
    <div className="home-container">

      <div className="text-container">
        <h2>Bienvenido a la Patagonia Argentina</h2>
        <p>Descubre la belleza natural, la cultura rica y las diversas actividades que ofrece esta maravillosa región. 
          Desde los majestuosos lagos y montañas hasta los imponentes glaciares y frondosos bosques, la Patagonia 
          Argentina te invita a vivir una aventura inolvidable en el fin del mundo.</p>
      </div>

      <div className="card-container">
        {/* Tarjetas */}
        <CustomCard title="Lagos" image="../imagenes/Home/lago.jpg" description="Los lagos más bellos de la Patagonia." />
        <CustomCard title="Montañas" image="/imagenes/Home/montaña.jpg" description="Disfruta de las montañas y los Andes." />
        <CustomCard title="Bosques" image="/imagenes/Home/bosque.jpg" description="Descubre los bosques de la Patagonia." />
        <CustomCard title="Glaciares" image="/imagenes/Home/glaciar.jpg" description="Explora los glaciares más impresionantes." />
      </div>
    </div>
  );
};

export default Home;   //Exportamos la pagina Home