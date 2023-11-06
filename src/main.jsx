import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
