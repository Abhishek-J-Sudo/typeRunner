import React from 'react';

const PlayerStatus = ({ player, isCurrentPlayer }) => {
  // Format finish time if available
  const formatTime = (time) => {
    return time ? `${(time / 1000).toFixed(2)}s` : '';
  };
  
  // Determine player status text and class
  const getStatusDisplay = () => {
    if (player.status === 'completed') {
      return {
        text: `Completed in ${formatTime(player.finishTime)}`,
        className: 'status-completed'
      };
    } else if (player.status === 'disconnected') {
      return {
        text: 'Disconnected',
        className: 'status-disconnected'
      };
    } else {
      return {
        text: 'Typing...',
        className: 'status-typing'
      };
    }
  };
  
  const statusDisplay = getStatusDisplay();

  return (
    <li className={`player-status ${isCurrentPlayer ? 'current-player' : ''}`}>
      <div className="player-info">
        <div className="player-name">
          {player.name} {player.isGameStarter ? '(Game Starter)' : ''}
        </div>
        
        {player.totalTime > 0 && (
          <div className="player-total-time">
            Total: {formatTime(player.totalTime)}
          </div>
        )}
      </div>
      
      <div className={`player-status-text ${statusDisplay.className}`}>
        {statusDisplay.text}
      </div>
      
      {/* {player.input && player.status !== 'completed' && (
        <div className="player-input-preview">
          {player.input}
        </div>
      )} */}
    </li>
  );
};

export default PlayerStatus;