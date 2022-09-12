import React from 'react';
import Game from './comps/Game';
import Header from './comps/Header';
import Footer from './comps/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
