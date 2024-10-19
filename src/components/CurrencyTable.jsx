import React, { useState, useEffect } from 'react';
import TableDate from './TableDate';

const CurrencyTable = () => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(null);
    const [fechaHora, setFechaHora] = useState('');

    const monedasFiltradas = ['Bitcoin', 'Ethereum', 'XRP', 'Stellar']; // XRP ANTES ERA RIPPLE

    useEffect(() => {
        const obtenerDatos = async () => {
            const apiKEY = '';
            const url = '';

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-CMC_PRO_API_KEY': apiKEY,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener datos.');
                }

                const data = await response.json();
                setCryptos(data.data);

                // Almacena tanto la fecha como la hora
                const fechaHoraObj = new Date(data.status.timestamp);

                const opcionesFecha = {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false 
                };
                
                // Formatea la fecha
                const fechaHoraActualizada = fechaHoraObj.toLocaleString('es-ES', opcionesFecha).replace(',', '');
                
                setFechaHora(fechaHoraActualizada);
                

              //  console.log(fechaHoraActualizada);


            } catch (error) {
                setError(error.message);
            }
        };
        obtenerDatos();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    const criptomonedasFiltradas = cryptos.filter(crypto =>
        monedasFiltradas.includes(crypto.name)
    );

    return (
        <section className="main-table-container">
            <div className="main-currency-table">
                <p className="currency-table--title">Monedas:</p>  
                <div className="currency-table--container">
                    <table>
                    <tbody>
                        {criptomonedasFiltradas.map((crypto, index) => (
                            <tr key={crypto.id}>
                                <td className={index === 0 ? "table__top-left" : index === criptomonedasFiltradas.length - 1 ? "table__bottom-left" : ""}>
                                    {crypto.name}
                                </td>
                                <td className={index === 0 ? "table__top-right" : index === criptomonedasFiltradas.length - 1 ? "table__bottom-right" : ""}>
                                    ${crypto.quote.USD.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                    <TableDate fechaHora={fechaHora}/>
                </div>    
            </div>
        </section>
    );
};

export default CurrencyTable;
