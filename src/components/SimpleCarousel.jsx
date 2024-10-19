import React, { useState } from "react";

const SimpleCarousel = () => {
    const options = [
        { label: "Pago Mensual", price: "$19", description: "Contá con nosotros", recommended: false},
        { label: "Pago Semanal", price: "$3", description: "La mejor plataforma", recommended: true},
        { label: "Pago Anual", price: "$99", description: "Ahorras $129", recommended: true},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextOption = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    };

    const prevOption = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    };

    return (
        <div className="carousel-container">
        <button onClick={prevOption} className="carousel-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
            <div className="carousel-item">

            {options[currentIndex].recommended && (
        <div className="recommended-badge">Recomendado</div>
            )}

                <h3>{options[currentIndex].label}</h3>
                <div className="price-container">
                    <span className="price-symbol">{options[currentIndex].price[0]}</span>
                    <h2 className="price">{options[currentIndex].price.slice(1)}</h2>
                </div>
                <p className="description">{options[currentIndex].description}</p>
                <button className="choice-button">
                Escoger este
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>

            </div>
                    
            <button onClick={nextOption} className="carousel-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>        
        </div>
    );
};

export default SimpleCarousel;
