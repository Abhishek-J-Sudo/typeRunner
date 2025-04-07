import React, { useState, useEffect } from 'react';
import GameLayout from './GameLayout';
import Lobby from './LobbySection';
import GamePlay from './GamePlaySection';
import Results from './ResultsSection';
import CountdownTimer from './CountdownTimer';
import usePlayerService from '../hooks/usePlayerService';

/**
 * Main TypeRunner game component
 * @param {Object} props - Component props
 * @param {string} props.roomId - The room ID
 * @param {Object} props.database - Firebase database instance
 * @param {string} props.playerName - The player's name
 * @param {Function} props.onBack - Function to handle going back to home screen
 */
const TypeRunner = ({ roomId, database, playerName, onBack }) => {
  // Use our player service hook
  const {
    loading,
    error,
    players,
    currentPlayer,
    gameState,
    stageResults, // Renamed from eliminatedPlayers
    isGameStarter,
    ensureJoined,
    updatePlayerStatus,
    becomeGameStarter,
    startGame,
    moveToNextStage,
    leaveRoom,
    cleanup
  } = usePlayerService(database, roomId, playerName);

  // Local state for countdown timer and challenges
  const [startTime, setStartTime] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentChallenge, setCurrentChallenge] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const getStageClass = () => {
    return `stage-${currentStage}`;
  };

  // Clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      const timer = setTimeout(() => setErrorMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Join the room when component mounts
  useEffect(() => {
    let isActive = true;
    
    const joinTheRoom = async () => {
      if (isActive) {
        await ensureJoined();
      }
    };
    
    joinTheRoom();
    
    return () => {
      isActive = false;
    };
  }, [ensureJoined]);

  // Update local state when game state changes
  useEffect(() => {
    if (gameState) {
      if (gameState.status) {
        console.log('[TypeRunner] Game state changed:', gameState.status);
      }
      
      // Update countdown
      if (gameState.countdown !== undefined) {
        setCountdown(gameState.countdown);
      }
      
      // Update stage and challenge
      if (gameState.stage !== undefined) {
        setCurrentStage(gameState.stage);
      }
      
      if (gameState.challenge !== undefined) {
        setCurrentChallenge(gameState.challenge);
      }
      
      // Update start time
      if (gameState.startTime !== undefined) {
        setStartTime(gameState.startTime);
      }
    }
  }, [gameState]);

  /**
   * Handle becoming the game starter
   */
  const handleBecomeGameStarter = async () => {
    await becomeGameStarter();
  };

  /**
   * Handle starting the game
   */
  const handleStartGame = async () => {
    // Check if enough players
    const activePlayers = players.filter(p => p.status !== 'disconnected');
    if (activePlayers.length < 4) {
      setErrorMessage('Need at least 4 players to start the game');
      return;
    }
    
    await startGame();
  };

  /**
   * Handle moving to next stage
   */
  const handleNextStage = async () => {
    // Check if all active players have completed
    const activePlayers = players.filter(p => p.status !== 'disconnected');
    const completedPlayers = activePlayers.filter(p => p.status === 'completed');

    if (completedPlayers.length !== activePlayers.length) {
      setErrorMessage('Cannot move to next stage until all players have completed');
      return;
    }
    
    await moveToNextStage(currentStage);
  };

  /**
   * Handle back button (return to home)
   */
  const handleBack = async () => {
    // Clean up and leave room
    await leaveRoom();
    cleanup();
    onBack();
  };

  /**
   * Render left section of the game layout
   */
  const renderLeftSection = () => (
    <Lobby
      roomId={roomId}
      players={players}
      currentPlayer={currentPlayer}
      isGameStarter={isGameStarter}
      onBecomeGameStarter={handleBecomeGameStarter}
      onStartGame={handleStartGame}
      onStopGame={handleBack}
      gameState={gameState.status}
      onBack={handleBack}
    />
  );

  /**
   * Render middle section of the game layout
   */
  const renderMiddleSection = () => {
    if (gameState.status === 'starting') {
      return (
        <div className="gameplay-container">
          <div className="section-header">
            <h2>Game Starting...</h2>
          </div>
          <div className="countdown-display">
            <p>Get ready! Game will start in {countdown} seconds.</p>
          </div>
        </div>
      );
    } else if (gameState.status === 'playing') {
      // All players participate in all stages
      const activePlayers = players.filter(p => p.status !== 'disconnected');
      
      return (
        <div className={`gameplay-container ${getStageClass()}`}>
          <GamePlay
            currentStage={currentStage}
            currentChallenge={currentChallenge}
            players={activePlayers}
            currentPlayer={currentPlayer}
            isGameStarter={isGameStarter}
            startTime={startTime}
            onNextStage={handleNextStage}
            updatePlayerStatus={(statusData) => updatePlayerStatus(statusData)}
            database={database}
            roomId={roomId}  
          />
        </div>
      );
    } else if (gameState.status === 'finished') {
      // Get final rankings for winners display
      const finalRankings = gameState.playerRankings || 
        players
          .filter(p => p.totalTime > 0 && p.status !== 'disconnected')
          .sort((a, b) => a.totalTime - b.totalTime);
      
      return (
        <div className="gameplay-container">
          <div className="section-header">
            <h2>Game Over!</h2>
          </div>
          
          <div className="winners">
            {finalRankings.slice(0, 2).map((player, index) => (
              <div key={player.id} className="winner">
                <p>
                  {index === 0 ? '🥇 Winner' : '🥈 Runner-up'}: {player.name}
                  {player.totalTime ? ` - Total Time: ${(player.totalTime / 1000).toFixed(2)}s` : ''}
                </p>
              </div>
            ))}
          </div>
          
          <div className="game-statistics">
            <h3>Final Rankings</h3>
            <ol className="final-rankings">
              {finalRankings.map((player) => (
                <li key={player.id}>
                  {player.name}: {(player.totalTime / 1000).toFixed(2)}s
                </li>
              ))}
            </ol>
            
            <div className="game-actions">
              <button onClick={handleBack} className="back-btn">
                Back to Lobby
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      // Default: Lobby information
      return (
        <div className="gameplay-container">
          <div className="section-header">
            <h2>TypeRunner</h2>
          </div>
          
          <div className="room-info">
            <h3>Room #{roomId}</h3>
            <p>Share this code with others to invite them to your game!</p>
          </div>
          
          <div className="game-info">
            <h3>How to Play:</h3>
            <p>TypeRunner is a typing race game with four challenging stages:</p>
            <ul>
              <li>Stage 1: Type a sentence correctly</li>
              <li>Stage 2: Fill in missing vowels/words</li>
              <li>Stage 3: Unscramble and type a sentence</li>
              <li>Stage 4: Type a reversed sentence</li>
            </ul>
            <p>All players participate in all four stages.</p>
            <p>Your times are cumulative across all stages.</p>
            <p>The two players with the lowest total time win!</p>
          </div>
        </div>
      );
    }
  };

  /**
   * Render right section of the game layout
   */
  const renderRightSection = () => {
    return (
      <Results
        gameState={gameState.status}
        players={players.filter(p => p.status !== 'disconnected')}
        stageResults={stageResults}
        startTime={startTime}
        currentStage={currentStage}
      />
    );
  };

  return (
    <div className="type-runner">
      {/* Error message display */}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      
      {/* Loading indicator */}
      {loading && (
        <div className="loading-indicator">
          <p>Loading...</p>
        </div>
      )}
      
      {/* Countdown overlay for game starting */}
      {gameState.status === 'starting' && (
        <CountdownTimer seconds={countdown} onComplete={() => {}} />
      )}
      
      {/* Main game layout */}
      <GameLayout
        leftSection={renderLeftSection()}
        middleSection={renderMiddleSection()}
        rightSection={renderRightSection()}
      />
    </div>
  );
};

export default TypeRunner;