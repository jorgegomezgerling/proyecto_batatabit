import React from 'react';
import Header from './components/Header';
import '../src/App.css';
import MainExchange from './components/MainExchange';
import CurrencyTable from './components/CurrencyTable';
import ProductDetail from './components/ProductDetail';
import BitcoinImage from './components/BitcoinImage';
import TableDate from './components/TableDate';

function App(){
  return (
    <div>
      <Header/>
      <MainExchange/>
      <CurrencyTable/>
      <TableDate/>
      <ProductDetail/>
      <BitcoinImage/>
    </div>
  );
}

export default App;