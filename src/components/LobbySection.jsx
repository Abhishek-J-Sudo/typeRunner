import React from 'react';

const Lobby = ({ 
  roomId, 
  players, 
  currentPlayer, 
  isGameStarter, 
  onBecomeGameStarter, 
  onStartGame,
  onStopGame,
  gameState,
  onBack
}) => {
  return (
    <div className="lobby-container">
      <div className="section-header">
        <h2>Players</h2>
      </div>
      
      <div className="room-info">
        <p>Room: <span className="room-id">{roomId}</span></p>
      </div>
      
      {/* Game controls for joined players */}
      {currentPlayer && (
        <div className="game-controls">
          {/* Lobby state controls */}
          {gameState === 'lobby' && (
            <div className="waiting-area">
              <p>Waiting for players... ({players.length}/10)</p>
              {!isGameStarter && (
                <button onClick={onBecomeGameStarter}>Become Game Starter</button>
              )}
              {isGameStarter && players.length >= 4 && (
                <button onClick={onStartGame} className="start-game-btn">Start Game</button>
              )}
              {players.length < 4 && isGameStarter && (
                <p>Need at least 4 players to start</p>
              )}
            </div>
          )}
          
          {/* Game starter controls for in-progress game */}
          {(gameState === 'playing' || gameState === 'starting') && isGameStarter && (
            <div className="game-starter-controls">
              <button onClick={onStopGame} className="stop-game-btn">Stop Game</button>
            </div>
          )}
          
          {/* Back button always available */}
          <button onClick={onBack} className="back-btn">
            Exit Room
          </button>
        </div>
      )}
      
      {/* Always show players list */}
      <div className="players-list">
        <h3>{gameState === 'lobby' ? 'Players in Room:' : 'Active Players:'}</h3>
        <ul>
          {players
            .filter(player => gameState === 'lobby' || !player.eliminated)
            .map(player => (
              <li 
                key={player.id} 
                className={`${player.isGameStarter ? 'game-starter' : ''} ${player.status === 'disconnected' ? 'disconnected' : ''}`}
              >
                {player.name} 
                {player.isGameStarter ? ' (Game Starter)' : ''}
                {currentPlayer && player.id === currentPlayer.id ? ' (You)' : ''}
                {player.status === 'disconnected' ? ' (Disconnected)' : ''}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Lobby;