import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Modelos from './pages/Modelos';
import Compras from './pages/Compras';
import Contacto from './pages/Contacto';




function App() {
  return (
    <div className="App">

      <Header />

      <div className='App_center'> 

        <BrowserRouter>
          <Nav />

          <Routes>

            <Route path="home" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="modelos" element={<Modelos />} />
            <Route path="compras" element={<Compras />} />
            <Route path="contacto" element={<Contacto />} />

          </Routes>

        </BrowserRouter>
      </div>

      <Footer />

    </div>

  );
}

export default App;
