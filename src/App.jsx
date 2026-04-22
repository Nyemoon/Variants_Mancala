import React, { useState } from 'react';
import MancalaGame from './MancalaGame';
import OwareGame from './Oware'; 
import './App.css';

const App = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="app-shell">
      {!activeGame ? (
        <div className="menu-container">
          <h1 className="menu-title">Variações Mancala</h1>
          <div className="menu-content">
          <p className="menu-subtitle">Escolha sua variação ancestral</p>
          
          <div className="menu-options">
            <button className="menu-button" onClick={() => setActiveGame('mancala')}>
              <span>Kalah</span>
              <small>Variante Ocidental</small>
            </button>
            
            <button className="menu-button" onClick={() => setActiveGame('oware')}>
              <span>Oware</span>
              <small>Variante Africana Tradicional</small>
            </button>
          </div>
          </div>
        </div>
      ) : (
        <div className="game-wrapper">
          <button className="back-button" onClick={() => setActiveGame(null)}>
            ← Voltar ao Menu
          </button>
          
          {activeGame === 'mancala' && <MancalaGame />}
          {activeGame === 'oware' && <OwareGame />}
        </div>
      )}
    </div>
  );
};

export default App;