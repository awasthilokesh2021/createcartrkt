import React from 'react'   
import './App.css';
import Header from './components/Header/Header';
import Productdata from './components/Home/Productcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardpage from './components/Cardpage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Productdata/>} />
        <Route path="/cart" element={<Cardpage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
