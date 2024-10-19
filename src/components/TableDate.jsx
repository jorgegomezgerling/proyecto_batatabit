import React from 'react';

const TableDate = ({ fechaHora }) => {
    return (
        <div className="currency-table--date">
            <p><b>Actualizado: </b>{fechaHora}</p>
        </div>
    );
};

export default TableDate;
