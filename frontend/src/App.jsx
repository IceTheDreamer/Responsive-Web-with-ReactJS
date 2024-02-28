import { useState } from 'react'
import React from 'react';
import './App.css'
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Customers from './components/Customers';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import InfoOne from './components/Products/InfoOne';
import InfoTwo from './components/Products/InfoTwo';
import InfoOneMore from './components/Products/InfoOneMore';
import InfoTwoMore from './components/Products/InfoTwoMore';

function App() {
  return (
    <div className='App'>
      <Header />
      <Aboutus />
      <Products />
      <InfoOne />
      <InfoOneMore />
      <InfoTwo />
      <InfoTwoMore />
      <Customers />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App;
