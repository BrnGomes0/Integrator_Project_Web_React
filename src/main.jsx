import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen.jsx';
import RegistredScreen from './Screens/RegistredScreen/RegistredScreen.jsx'
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx'
import PageError from './Screens/Error404Screen/PageError.jsx';
import AboutScreen from './Screens/AboutScreen/AboutScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/registred" element={<RegistredScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="*" element={<PageError/>}/>
          <Route path="/about" element={<AboutScreen/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)