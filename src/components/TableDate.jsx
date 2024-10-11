import React from 'react';

// Sin solucionar el tema de hora y dia, debería funcionar pasandole fechaHora, que de hecho imprime bien por consola. pero no. 
const fechaHora = '';

const TableDate = ({ fechaHora }) => {
   console.log('Ahora: ' + fechaHora);
    return (
        <div className="currency-table--date">
            <p><b>{fechaHora}</b></p>
        </div>
    );
};

export default TableDate;
