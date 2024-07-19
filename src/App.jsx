import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import BootstrapCDN from './Component/BootstrapCDN';
import BodyComponent from './Component/BodyComponent';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <BootstrapCDN />
      <Navbar />
      <BodyComponent />
      <Footer />
    </>
  );
}

export default App;
