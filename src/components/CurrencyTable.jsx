import React, { useState, useEffect } from 'react';
import TableDate from './TableDate';

const CurrencyTable = () => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(null);
    const [fechaHora, setFechaHora] = useState('');

    const monedasFiltradas = ['Bitcoin', 'Ethereum', 'Dogecoin', 'BNB', 'Solana'];

    useEffect(() => {
        const obtenerDatos = async () => {
            const apiKEY = '6fc3c21b-d8fa-4e80-80bd-67ec3843e676';
            const url = '/api/v1/cryptocurrency/listings/latest';

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
                const fechaHoraActualizada = `${fechaHoraObj.toLocaleDateString()} ${fechaHoraObj.toLocaleTimeString()}`;
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
                            {criptomonedasFiltradas.map((crypto) => (
                                <tr key={crypto.id}>
                                    <td>{crypto.name}</td>
                                    <td>${crypto.quote.USD.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
                <TableDate fechaHora={fechaHora} />
            </div>
        </section>
    );
};

export default CurrencyTable;
