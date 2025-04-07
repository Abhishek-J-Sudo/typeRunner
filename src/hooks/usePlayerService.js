// hooks/usePlayerService.js
import { useState, useEffect, useCallback } from 'react';
import playerService from './PlayerService';

/**
 * Custom hook for using the player service in React components
 * @param {Object} database - Firebase database instance
 * @param {String} roomId - Room ID 
 * @param {String} playerName - Player name
 * @returns {Object} Player service state and methods
 */
const usePlayerService = (database, roomId, playerName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameState, setGameState] = useState({ status: 'lobby' });
  const [stageResults, setStageResults] = useState([]); // Renamed from eliminatedPlayers
  const [initialized, setInitialized] = useState(false);
  
  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Initialize service and set up callbacks
  useEffect(() => {
    if (!database || !roomId || initialized) return;
    
    console.log('[usePlayerService] Initializing player service');
    playerService.init(database, roomId);
    
    // Set up callbacks
    playerService.setCallbacks({
      onPlayersChange: setPlayers,
      onGameStateChange: setGameState,
      onEliminatedPlayersChange: setStageResults, // Renamed callback but kept function name for backward compatibility
      onError: setError
    });
    
    setInitialized(true);
    
    // Cleanup when unmounting
    return () => {
      // Don't reset callbacks or clean up service here
      // We only want to clean up when explicitly told to leave
      console.log('[usePlayerService] Component unmounting, keeping service active');
    };
  }, [database, roomId, initialized]);

  // Join room when player name is available
  const joinRoom = useCallback(async () => {
    if (!playerName || !initialized) return;
    
    try {
      setLoading(true);
      console.log('[usePlayerService] Joining room as', playerName);
      
      const player = await playerService.joinRoom(playerName);
      
      if (player) {
        console.log('[usePlayerService] Player joined successfully', player);
        setCurrentPlayer(player);
      } else {
        setError('Failed to join room');
      }
    } catch (err) {
      console.error('[usePlayerService] Error joining room', err);
      setError(`Error joining room: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [playerName, initialized]);

  // Use this to join the room - it won't rejoin if already joined
  const ensureJoined = useCallback(async () => {
    if (currentPlayer) return currentPlayer;
    return joinRoom();
  }, [currentPlayer, joinRoom]);

  // Update player status
  const updatePlayerStatus = useCallback(async (statusData) => {
    return playerService.updatePlayerStatus(statusData);
  }, []);

  // Become game starter
  const becomeGameStarter = useCallback(async () => {
    setLoading(true);
    try {
      return await playerService.becomeGameStarter();
    } finally {
      setLoading(false);
    }
  }, []);

  // Start game
  const startGame = useCallback(async () => {
    setLoading(true);
    try {
      return await playerService.startGame();
    } finally {
      setLoading(false);
    }
  }, []);

  // Move to next stage
  const moveToNextStage = useCallback(async (currentStage) => {
    setLoading(true);
    try {
      // We've removed eliminatedPlayers parameter since we now keep all players
      return await playerService.moveToNextStage(
        currentStage, 
        players
      );
    } finally {
      setLoading(false);
    }
  }, [players]);

  // Leave room
  const leaveRoom = useCallback(async () => {
    setLoading(true);
    try {
      const result = await playerService.leaveRoom();
      if (result) {
        setCurrentPlayer(null);
      }
      return result;
    } finally {
      setLoading(false);
    }
  }, []);

  // Full cleanup when exiting completely
  const cleanup = useCallback(() => {
    playerService.cleanup();
    setCurrentPlayer(null);
    setPlayers([]);
    setGameState({ status: 'lobby' });
    setStageResults([]);
    setInitialized(false);
  }, []);

  return {
    loading,
    error,
    players,
    currentPlayer,
    gameState,
    stageResults, // Renamed from eliminatedPlayers
    isGameStarter: currentPlayer?.isGameStarter || false,
    ensureJoined,
    updatePlayerStatus,
    becomeGameStarter,
    startGame,
    moveToNextStage,
    leaveRoom,
    cleanup
  };
};

export default usePlayerService;