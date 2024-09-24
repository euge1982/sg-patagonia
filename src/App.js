//Archivo para la creacion de la pagina principal

import React from 'react';   //Importamos React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   //Importamos React Router
import Home from './pages/Home.js';   // Importamos la pagina Home
import Nature from './pages/Nature.js';   //Importamos la pagina Nature
import Culture from './pages/Culture.js';   //Importamos la pagina Culture
import Activities from './pages/Activities.js';   //Importamos la pagina Activities
import Header from './components/Header.js';   //Importamos el encabezado
import Footer from './components/Footer.js';   //Importamos el pie de pagina
import './styles/App.css';   //Importamos los estilos de App

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <main>
          {/* Rutas */}
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;   //Exportamos la pagina