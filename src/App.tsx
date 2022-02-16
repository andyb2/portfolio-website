import React from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
