import React, { useState, useEffect } from 'react';

const Results = ({ 
  gameState, 
  players, 
  stageResults,  // Changed from eliminatedPlayers
  startTime,
  currentStage 
}) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [stageCompleted, setStageCompleted] = useState(false);

  // Format time helper
  const formatTime = (time) => {
    return time ? `${(time / 1000).toFixed(2)}s` : '--';
  };

  // Timer for stage-specific game time
  useEffect(() => {
    let timer;
    if (startTime && (gameState === 'playing') && !stageCompleted) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [startTime, gameState, stageCompleted]);

  // Track stage completion
  useEffect(() => {
    if (gameState === 'playing') {
      // Check if all non-disconnected players have completed the stage
      const activePlayers = players.filter(p => p.status !== 'disconnected');
      const allCompleted = activePlayers.length > 0 && 
                          activePlayers.every(p => p.status === 'completed');
      
      setStageCompleted(allCompleted);
    } else {
      // Reset completion flag when not playing
      setStageCompleted(false);
    }
  }, [players, gameState]);

  // Reset timer when stage changes
  useEffect(() => {
    if (gameState === 'playing') {
      setElapsedTime(0);
      setStageCompleted(false);
    }
  }, [currentStage, gameState]);

  // Get players sorted by total time (for rankings)
  const getPlayersByTotalTime = () => {
    return [...players]
      .filter(p => p.totalTime > 0 && p.status !== 'disconnected')
      .sort((a, b) => a.totalTime - b.totalTime);
  };

  // Get players sorted by finish time (for current stage)
  const getPlayersByFinishTime = () => {
    return [...players]
      .filter(p => p.finishTime !== null && p.status !== 'disconnected')
      .sort((a, b) => a.finishTime - b.finishTime);
  };

  // Get previous stage results
  const getPreviousStageResults = () => {
    if (!stageResults || stageResults.length === 0) return [];
    
    // Sort by stage, then by completion time within each stage
    return [...stageResults]
      .sort((a, b) => b.stage - a.stage) // Most recent stages first
      .slice(0, 3); // Only show the last 3 stages
  };

  return (
    <div className="results-container">
      <div className="section-header">
        <h2>Results</h2>
      </div>
      
      {(gameState === 'playing' || gameState === 'finished') && (
        <>
          <div className="timer-display">
            <h3>Stage {currentStage} {gameState === 'finished' ? '(Final)' : ''}</h3>
            <p>
              {stageCompleted 
                ? `Stage Completed in ${formatTime(elapsedTime)}` 
                : `Time: ${formatTime(elapsedTime)}`}
            </p>
          </div>
          
          {gameState === 'playing' && (
            <div className="player-times">
              <h3>Current Stage:</h3>
              {getPlayersByFinishTime().length > 0 ? (
                <ul>
                  {getPlayersByFinishTime().map((player, index) => (
                    <li key={player.id}>
                      <span>
                        {index === 0 ? '🥇 ' : ''}
                        {index === 1 ? '🥈 ' : ''}
                        {index === 2 ? '🥉 ' : ''}
                        {player.name}
                      </span>
                      <span>{formatTime(player.finishTime)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No players have finished yet</p>
              )}
            </div>
          )}
          
          {/* Overall standings */}
          <div className="player-times">
            <h3>Overall Standings:</h3>
            {getPlayersByTotalTime().length > 0 ? (
              <ul>
                {getPlayersByTotalTime().map((player, index) => (
                  <li key={player.id}>
                    <span>
                      {index === 0 ? '🥇 ' : ''}
                      {index === 1 ? '🥈 ' : ''}
                      {player.name}
                    </span>
                    <span>{formatTime(player.totalTime)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No overall results yet</p>
            )}
          </div>
        </>
      )}
      
      {/* Previous stage results */}
      {getPreviousStageResults().length > 0 && (
        <div className="previous-stages">
          <h3>Previous Stages:</h3>
          {getPreviousStageResults().map(stageResult => (
            <div key={stageResult.stage} className="stage-result">
              <h4>Stage {stageResult.stage}</h4>
              <ul>
                {stageResult.results
                  .filter(player => player.finishTime)
                  .sort((a, b) => a.finishTime - b.finishTime)
                  .slice(0, 3) // Top 3 players
                  .map((player, index) => (
                    <li key={player.id}>
                      {index === 0 ? '🥇 ' : ''}
                      {index === 1 ? '🥈 ' : ''}
                      {index === 2 ? '🥉 ' : ''}
                      {player.name}: {formatTime(player.finishTime)}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {gameState === 'lobby' && (
        <div className="game-rules">
          <h3>Game Rules:</h3>
          <ul>
            <li>4-10 Players</li>
            <li>4 Stages</li>
            <li>All players participate in all stages</li>
            <li>Times are cumulative across all stages</li>
            <li>Fastest two players win</li>
          </ul>
          <div className="stage-descriptions">
            <h4>Stage Descriptions:</h4>
            <p><strong>Stage 1:</strong> Type a sentence exactly as shown</p>
            <p><strong>Stage 2:</strong> Fill in missing vowels in a sentence</p>
            <p><strong>Stage 3:</strong> Translate emoji symbols to words</p>
            <p><strong>Stage 4:</strong> Type a sentence in reverse order</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;