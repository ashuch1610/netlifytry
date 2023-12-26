import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { Link, useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from "./pages/Services";
import Nav from "./Component/Nav";

function App() {
  return(

    <div>
       <Routes>
       <Route exact path="/nav" element={<Nav/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Services" element={<Services/>}/>
    </Routes>

    <div className='hexagonalarea1'>
                <div className='hexagonser hexa1'>
                </div>
                <div className='hexagonser hexa2'>
                </div>
                <div className='hexagonser hexa3'>
                </div>
              </div>
    </div>
   
   



   
  )
 

}

export default App;
