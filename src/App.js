import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Startblock from './Components/Startblock/Startblock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <div className="start-block">
          <Startblock />
        </div>
      </main>
    </div>
  );
}

export default App;
