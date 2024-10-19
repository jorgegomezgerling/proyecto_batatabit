import React from 'react';
import Header from './components/Header';
import '../src/App.css';
import MainExchange from './components/MainExchange';
import CurrencyTable from './components/CurrencyTable';
import ProductDetail from './components/ProductDetail';
import BitcoinImage from './components/BitcoinImage';
import Footer from './components/Footer';
import Payment from './components/Payment';
import SimpleCarousel from './components/SimpleCarousel';

function App() {
  return (
    <div>
      <Header />
      <MainExchange />
      <CurrencyTable /> 
      <ProductDetail />
      <BitcoinImage />
      <Payment />
      <SimpleCarousel/>
      <Footer />
    </div>
  );
}

export default App;
