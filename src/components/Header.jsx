import React from 'react';
import logo from '../assets/imgs/logo.svg';

const Header = () => {
    return (
        <header>
        <img src={logo} alt="Logo de Batabit"/>
        <div className="header--title-container">
            <h1>La próxima revolución en el intercambio de criptomonedas</h1>
            <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
            <a href="/" className="header--button">Conoce Nuestros Planes <span></span></a>
        </div>  
      </header>
    );
};

export default Header;