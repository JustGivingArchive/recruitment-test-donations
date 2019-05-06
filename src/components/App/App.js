import React from "react";
import ReactDOM from "react-dom";
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import './App.css'

export const App = () => {
  return (
    <div className="app-container">
      <Header />
        <Main />
      <Footer/>
    </div>
    
  )
};
