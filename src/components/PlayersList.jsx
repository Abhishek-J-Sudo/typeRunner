import React from 'react';

const PlayersList = ({ players, showGameStarter = false, title = "Players" }) => {
  return (
    <div className="players-list">
      <h3>{title}:</h3>
      <ul>
        {players.map(player => (
          <li key={player.id} className={player.eliminated ? 'eliminated' : ''}>
            {player.name} 
            {showGameStarter && player.isGameStarter ? ' (Game Starter)' : ''}
            {player.eliminated ? ' (Eliminated)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;