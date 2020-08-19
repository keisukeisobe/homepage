import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Startblock from './Components/Startblock/Startblock';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <Startblock />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
