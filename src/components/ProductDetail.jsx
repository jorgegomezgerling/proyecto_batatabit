import React from 'react';

import clock from '../assets/icons/clock.svg';
import eye from '../assets/icons/eye.svg';
import dollar from '../assets/icons/dollar-sign.svg';
import check from '../assets/icons/check-circle.svg';


const ProductDetail = () => {
    return (
        <section className="main-product-detail">
            <span className="product-detail--batata-logo"></span>
            <div className="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>

         <section className="products-cards-container">
             <article className="product-detail--card">
                 <img src={clock} alt="clock"/>
                 <p class="product--card-title">Tiempo real</p>
                 <p className="product--card-body">Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
             </article>
             <article className="product-detail--card">
                <img src={eye} alt="eye"/>
                <p className="product--card-title">No hay tasas escondidas</p>
                <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
            </article>
            <article className="product-detail--card">
                <img src={dollar} alt="dollar"/>
                <p className="product--card-title">Compare monedas</p>
                <p className="product--card-body">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
            </article>
            <article className="product-detail--card">
                <img src={check} alt="check"/>
                <p className="product--card-title">Información confiable</p>
                <p className="product--card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
            </article>
         </section> 
        </section>
    );
};

export default ProductDetail;
