// GamePlaySection.jsx
import React, { useState, useEffect } from 'react';
import TypeChallenge from './TypeChallenge';
import PlayerStatus from './PlayerStatus';
import { validateInput } from '../utils/gameUtils';
import { ref, get } from 'firebase/database';

const GamePlay = ({
  currentStage,
  currentChallenge,
  players,
  currentPlayer,
  isGameStarter,
  startTime,
  onNextStage,
  updatePlayerStatus,
  database,
  roomId 
}) => {
  const [playerInput, setPlayerInput] = useState('');
  const [inputCorrect, setInputCorrect] = useState(null);
  const [finishTime, setFinishTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [challengeAnswer, setChallengeAnswer] = useState('');
  
  // Timer for gameplay
  useEffect(() => {
    let timer;
    if (startTime && !finishTime) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [startTime, finishTime]);

  // Handle input change
  const handleInputChange = (e) => {
    setPlayerInput(e.target.value);
    
    // Update player input in Firebase
    if (currentPlayer) {
      updatePlayerStatus({ input: e.target.value });
    }
  };

  // Reset component state when stage changes
  useEffect(() => {
    setPlayerInput('');
    setInputCorrect(null);
    setFinishTime(null);
    
    // Get challenge answer from Firebase
    const fetchChallengeAnswer = async () => {
      try {
        const roomRef = ref(database, `rooms/${roomId}/challenges/stage${currentStage}`);
        const snapshot = await get(roomRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          setChallengeAnswer(data.answer);
        }
      } catch (error) {
        console.error('Error fetching challenge answer:', error);
      }
    };
    
    fetchChallengeAnswer();
  }, [currentStage, database, roomId]); 

  // Check if the input is correct based on challenge type
  const checkInput = () => {
    // Use our utility function to validate input
    const isCorrect = validateInput(playerInput, { display: currentChallenge, answer: challengeAnswer }, currentStage);
    
    setInputCorrect(isCorrect);

    if (isCorrect) {
      const completionTime = Date.now() - startTime;
      setFinishTime(completionTime);

      console.log(`Player ${currentPlayer.id} completed in ${completionTime}ms, updating status`);

      // Update player status in Firebase
      updatePlayerStatus({ 
        finishTime: completionTime, 
        status: 'completed' 
      });
    }

    return isCorrect;
  };

  // Check if all players have completed
  const allPlayersCompleted = players.every(player => 
    player.status === 'completed' || player.status === 'disconnected'
  );

  // Calculate current stage standings based on finish times
  const getStageStandings = () => {
    return [...players]
      .filter(p => p.finishTime !== null && p.status !== 'disconnected')
      .sort((a, b) => a.finishTime - b.finishTime);
  };

  // Format time display helper
  const formatTime = (time) => {
    if (!time) return '--';
    return `${(time / 1000).toFixed(2)}s`;
  };

  return (
    <div className="gameplay-container">
      <div className="section-header">
        <h2>Stage {currentStage}</h2>
      </div>
      
      <div className="timer-display">
        <div className="timer">{(elapsedTime / 1000).toFixed(1)}s</div>
        {currentPlayer && currentPlayer.totalTime > 0 && (
          <div className="cumulative-time">
            Total time: {formatTime(currentPlayer.totalTime)}
          </div>
        )}
      </div>
      
      <TypeChallenge 
        challenge={currentChallenge} 
        playerInput={playerInput}
        inputCorrect={inputCorrect}
        finishTime={finishTime}
        onInputChange={handleInputChange}
        onSubmit={checkInput}
        currentStage={currentStage}
      />
      
      <div className="players-status">
        <h3>Players Status:</h3>
        <ul className="player-status-list">
          {players.map(player => (
            <PlayerStatus 
              key={player.id}
              player={player}
              isCurrentPlayer={currentPlayer && player.id === currentPlayer.id}
            />
          ))}
        </ul>
      </div>
      
      {isGameStarter && allPlayersCompleted && (
        <div className="next-stage-controls">
          <button onClick={onNextStage}>
            {currentStage < 4 ? 'Next Stage' : 'Finish Game'}
          </button>
        </div>
      )}
      
      {finishTime && (
        <div className="stage-standings">
          <h3>Current Stage Standings:</h3>
          <ol className="standings-list">
            {getStageStandings().map((player, index) => (
              <li key={player.id} className={currentPlayer && player.id === currentPlayer.id ? 'current-player' : ''}>
                {player.name}: {formatTime(player.finishTime)}
                {index === 0 && ' 🥇'}
                {index === 1 && ' 🥈'}
                {index === 2 && ' 🥉'}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default GamePlay;