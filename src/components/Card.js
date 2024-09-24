//Archivo para la creacion del componente Card

import React from 'react';   //Importamos React
import { Card } from 'primereact/card';   //Importamos Card de PrimeReact
import '../styles/Card.css';   //Importamos los estilos de Card

//Funcion para la creacion de tarjetas
const CustomCard = ({ title, image, description }) => {
  return (
    <Card title={ title } className="custom-card">
      <img src={ image } alt={ title } className="card-image" />
      <p>{ description }</p>
    </Card>
  );
};

export default CustomCard;   //Exportamos la tarjeta