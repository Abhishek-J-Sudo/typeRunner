import { useState, useCallback, useEffect, useRef } from 'react';
import { 
  ref, 
  set, 
  update, 
  remove, 
  push, 
  get, 
  onDisconnect,
  serverTimestamp
} from 'firebase/database';

/**
 * Custom hook for managing Firebase room operations in TypeRunner
 * @param {Object} database - Firebase database instance
 * @param {String} roomId - Unique room identifier
 * @returns {Object} Room operations and state
 */
const useFirebaseRoom = (database, roomId) => {
  // Store local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sessionId] = useState(() => {
    const existingId = localStorage.getItem('typeRunnerSessionId');
    if (existingId) return existingId;
    
    const newId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('typeRunnerSessionId', newId);
    return newId;
  });
  const [disconnectHandlerSet, setDisconnectHandlerSet] = useState(false);
  const disconnectHandlersRef = useRef(null);

  // Helper to show errors with timeout
  const showError = useCallback((message) => {
    setError(message);
    setTimeout(() => setError(null), 5000);
  }, []);

  /**
   * Check if a player already exists in the room with the same session ID
   * @returns {Promise<Object|null>} Existing player data or null
   */
  const findExistingPlayer = useCallback(async () => {
    try {
      console.log(`[useFirebaseRoom] Checking for existing player with sessionId: ${sessionId}`);
      const playersRef = ref(database, `rooms/${roomId}/players`);
      const snapshot = await get(playersRef);
      
      if (snapshot.exists()) {
        const players = snapshot.val();
        const existingPlayerEntry = Object.entries(players).find(
          ([_, player]) => player.sessionId === sessionId
        );
        
        if (existingPlayerEntry) {
          const [playerId, playerData] = existingPlayerEntry;
          console.log(`[useFirebaseRoom] Found existing player: ${playerId}`);
          return { id: playerId, ...playerData };
        }
      }
      
      console.log(`[useFirebaseRoom] No existing player found with sessionId: ${sessionId}`);
      return null;
    } catch (error) {
      console.error('[useFirebaseRoom] Error finding existing player:', error);
      return null;
    }
  }, [database, roomId, sessionId]);

  /**
   * Set up disconnect handler for a player
   * @param {String} playerId - Player's ID
   */
  const setupDisconnectHandler = useCallback(async (playerId) => {
    if (!database || !roomId || !playerId) return;
    
    // Use ref to track setup status per player
    if (!disconnectHandlersRef.current) {
      disconnectHandlersRef.current = new Set();
    }
    
    // Don't set up twice for the same player
    if (disconnectHandlersRef.current.has(playerId)) {
      console.log(`[useFirebaseRoom] Disconnect handler already set for player ${playerId}`);
      return;
    }
    
    try {
      console.log(`[useFirebaseRoom] Setting up disconnect handler for player ${playerId}`);
      const playerRef = ref(database, `rooms/${roomId}/players/${playerId}`);
      
      // Setup disconnect handler
      await onDisconnect(playerRef).update({
        status: 'disconnected',
        disconnectedAt: serverTimestamp()
      });
      
      disconnectHandlersRef.current.add(playerId);
      setDisconnectHandlerSet(true);
      console.log(`[useFirebaseRoom] Disconnect handler set successfully for ${playerId}`);
    } catch (error) {
      console.error('[useFirebaseRoom] Error setting up disconnect handler:', error);
    }
  }, [database, roomId]);

  /**
   * Join a room as a player
   * @param {String} playerName - Player's name
   * @returns {Promise<Object>} Player object with ID and data
   */
  const joinRoom = useCallback(async (playerName) => {
    console.log(`[useFirebaseRoom] Attempting to join room ${roomId} as ${playerName}`);
    setIsLoading(true);
    
    try {
      // Check if room exists
      const roomRef = ref(database, `rooms/${roomId}`);
      const roomSnapshot = await get(roomRef);
      
      if (!roomSnapshot.exists()) {
        console.error(`[useFirebaseRoom] Room ${roomId} does not exist`);
        throw new Error(`Room ${roomId} does not exist`);
      }
      
      const roomData = roomSnapshot.val();
      
      // Check if player already exists in the room (this should run BEFORE creating a new player)
      const existingPlayer = await findExistingPlayer();
      
      // If player exists, update and return them
      if (existingPlayer) {
        console.log(`[useFirebaseRoom] Found existing player: ${existingPlayer.id}`);
        
        // Check if we actually need to update anything
        const needsUpdate = existingPlayer.name !== playerName || 
                            existingPlayer.status === 'disconnected';
        
        if (needsUpdate) {
          console.log(`[useFirebaseRoom] Updating existing player: ${existingPlayer.id}`);
          const playerRef = ref(database, `rooms/${roomId}/players/${existingPlayer.id}`);
          
          // Update player data
          const updateData = {
            status: 'waiting',
            name: playerName,
            reconnected: Date.now()
          };
          
          await update(playerRef, updateData);
        } else {
          console.log(`[useFirebaseRoom] No need to update player: ${existingPlayer.id}`);
        }
        
        // Setup disconnect handler
        await setupDisconnectHandler(existingPlayer.id);
        
        // Return updated player
        return {
          ...existingPlayer,
          name: playerName,
          status: 'waiting',
          reconnected: Date.now()
        };
      }
      
      // Determine if this player should be the game starter
      // Check if room has players - if no players exist, first to join becomes game starter
      let isRoomCreator = false;
      if (!roomData.players || Object.keys(roomData.players).length === 0) {
        isRoomCreator = true;
        console.log(`[useFirebaseRoom] No players in room, first player becomes game starter`);
      } else if (roomData.creatorSessionId === sessionId) {
        isRoomCreator = true;
        console.log(`[useFirebaseRoom] Found creator by sessionId match`);
      }
      console.log(`[useFirebaseRoom] Is room creator: ${isRoomCreator}`);
      
      // No existing player, create a new one
      console.log(`[useFirebaseRoom] Creating new player for ${playerName}`);
      const playersRef = ref(database, `rooms/${roomId}/players`);
      const newPlayerRef = push(playersRef);
      const playerId = newPlayerRef.key;
      
      const playerData = {
        id: playerId,
        name: playerName,
        isGameStarter: isRoomCreator, // Room creator is game starter by default
        status: 'waiting',
        joined: Date.now(),
        input: '',
        finishTime: null,
        totalTime: 0, // New: track cumulative time across stages
        stageCompletions: {}, // New: track completion time for each stage
        sessionId: sessionId
      };
      
      console.log(`[useFirebaseRoom] Writing new player data:`, playerData);
      
      // Write player data to Firebase
      await set(newPlayerRef, playerData);
      
      // Setup disconnect handler
      await setupDisconnectHandler(playerId);
      
      return playerData;
    } catch (error) {
      console.error('[useFirebaseRoom] Error joining room:', error);
      showError(`Failed to join room: ${error.message}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [database, roomId, sessionId, findExistingPlayer, showError, setupDisconnectHandler]);

  /**
   * Set a player as the game starter
   * @param {String} playerId - ID of player to make game starter
   * @returns {Promise<Boolean>} Success status
   */
  const becomeGameStarter = useCallback(async (playerId) => {
    setIsLoading(true);
    
    try {
      // Get all players
      const playersRef = ref(database, `rooms/${roomId}/players`);
      const snapshot = await get(playersRef);
      
      if (snapshot.exists()) {
        const players = snapshot.val();
        
        // Update all players' game starter status
        const updates = {};
        Object.keys(players).forEach((pid) => {
          updates[`/rooms/${roomId}/players/${pid}/isGameStarter`] = (pid === playerId);
        });
        
        // Apply all updates at once
        await update(ref(database), updates);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error becoming game starter:', error);
      showError(`Failed to become game starter: ${error.message}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [database, roomId, showError]);

  /**
   * Start the game with countdown
   * @returns {Promise<Boolean>} Success status
   */
  const startGame = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Set challenges for each stage
      const challenges = [
        "The quick brown fox jumps over the lazy dog.",
        "Th_ q__ck br_wn f_x j_mps _v_r th_ l_zy d_g.",
        "dog lazy the over jumps fox brown quick The",
        "The quick brown fox jumps over the lazy dog."
      ];
      
      // Start countdown
      await update(ref(database, `rooms/${roomId}/state`), {
        status: 'starting',
        countdown: 3,
        startingAt: Date.now()
      });
      
      // Countdown interval
      let count = 3;
      const countdownInterval = setInterval(async () => {
        count--;
        await update(ref(database, `rooms/${roomId}/state`), {
          countdown: count
        });
        
        if (count <= 0) {
          clearInterval(countdownInterval);
          // Start first stage
          await update(ref(database, `rooms/${roomId}/state`), {
            status: 'playing',
            stage: 1,
            challenge: challenges[0],
            startTime: Date.now()
          });
        }
      }, 1000);
      
      return true;
    } catch (error) {
      console.error('Error starting game:', error);
      showError(`Failed to start game: ${error.message}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [database, roomId, showError]);

  /**
   * Update player status during gameplay
   * @param {String} playerId - ID of player to update
   * @param {Object} statusData - Status data to update
   * @returns {Promise<Boolean>} Success status
   */
  const updatePlayerStatus = useCallback(async (playerId, statusData) => {
    try {
      // If the update contains a finishTime, update the stageCompletions and totalTime
      if (statusData.finishTime !== undefined) {
        // Get current stage
        const stateRef = ref(database, `rooms/${roomId}/state`);
        const stateSnapshot = await get(stateRef);
        
        if (stateSnapshot.exists()) {
          const stateData = stateSnapshot.val();
          const currentStage = stateData.stage;
          
          // Get current player data
          const playerRef = ref(database, `rooms/${roomId}/players/${playerId}`);
          const playerSnapshot = await get(playerRef);
          
          if (playerSnapshot.exists()) {
            const playerData = playerSnapshot.val();
            
            // Initialize or update player's stage completions
            const stageCompletions = playerData.stageCompletions || {};
            stageCompletions[`stage${currentStage}`] = statusData.finishTime;
            
            // Calculate total time by summing all stage completions
            const totalTime = Object.values(stageCompletions).reduce((sum, time) => sum + time, 0);
            
            // Add these to the status update
            statusData.stageCompletions = stageCompletions;
            statusData.totalTime = totalTime;
          }
        }
      }
      
      // Update player data
      await update(ref(database, `rooms/${roomId}/players/${playerId}`), statusData);
      return true;
    } catch (error) {
      console.error('Error updating player status:', error);
      showError(`Failed to update status: ${error.message}`);
      return false;
    }
  }, [database, roomId, showError]);

  /**
   * Move to the next game stage and track player stats
   * @param {Number} currentStage - Current stage number
   * @param {Array} players - Array of all players
   * @returns {Promise<Boolean>} Success status
   */
  const moveToNextStage = useCallback(async (currentStage, players) => {
    setIsLoading(true);
    
    try {
      const challenges = [
        "The quick brown fox jumps over the lazy dog.",
        "Th_ q__ck br_wn f_x j_mps _v_r th_ l_zy d_g.",
        "dog lazy the over jumps fox brown quick The",
        "The quick brown fox jumps over the lazy dog."
      ];
      
      // Get active players
      const activePlayers = players.filter(p => p.status !== 'disconnected');
      
      // Save the current stage results for the leaderboard history
      const stageResultRef = push(ref(database, `rooms/${roomId}/stageResults`));
      await set(stageResultRef, {
        stage: currentStage,
        completedAt: Date.now(),
        results: activePlayers.map(player => ({
          id: player.id,
          name: player.name,
          finishTime: player.finishTime || null,
          totalTime: player.totalTime || 0
        }))
      });
      
      // Check if game is over (final stage)
      if (currentStage >= 4) {
        // Game is over - Calculate final rankings based on total time
        const playerRankings = [...activePlayers]
          .filter(p => p.totalTime > 0) // Only include players who completed at least one stage
          .sort((a, b) => a.totalTime - b.totalTime);
        
        // Calculate game statistics
        const allTotalTimes = activePlayers
          .filter(p => p.totalTime > 0)
          .map(p => p.totalTime);
        
        const avgTime = allTotalTimes.length ? 
          allTotalTimes.reduce((a, b) => a + b, 0) / allTotalTimes.length : 0;
        
        const fastestPlayer = playerRankings[0] || { name: 'N/A' };
        const slowestPlayer = playerRankings.length > 0 ? 
          playerRankings[playerRankings.length - 1] : { name: 'N/A' };
        
        // End game with statistics
        await update(ref(database, `rooms/${roomId}/statistics`), {
          averageCompletionTime: avgTime,
          fastestPlayer: fastestPlayer.name,
          slowestPlayer: slowestPlayer.name
        });
        
        // Get top 2 players (if available)
        const winners = playerRankings.slice(0, Math.min(2, playerRankings.length))
          .map(player => player.id);
        
        await update(ref(database, `rooms/${roomId}/state`), {
          status: 'finished',
          winners: winners,
          playerRankings: playerRankings.map(p => ({ id: p.id, name: p.name, totalTime: p.totalTime })),
          endTime: Date.now()
        });
      } else {
        // Move to next stage - Reset player statuses for the next stage
        for (const player of activePlayers) {
          if (player.status !== 'disconnected') {
            await updatePlayerStatus(player.id, {
              status: 'waiting',
              input: '',
              finishTime: null
            });
          }
        }
        
        // Start countdown for next stage (same as game start)
        await update(ref(database, `rooms/${roomId}/state`), {
          status: 'starting',
          stage: currentStage + 1,
          countdown: 3,
          startingAt: Date.now(),
          challenge: challenges[currentStage] // Challenges are 0-indexed
        });
        
        // Countdown interval
        let count = 3;
        const countdownInterval = setInterval(async () => {
          count--;
          await update(ref(database, `rooms/${roomId}/state`), {
            countdown: count
          });
          
          if (count <= 0) {
            clearInterval(countdownInterval);
            // Start the stage after countdown
            await update(ref(database, `rooms/${roomId}/state`), {
              status: 'playing',
              startTime: Date.now()
            });
          }
        }, 1000);
      }
      
      return true;
    } catch (error) {
      console.error('Error moving to next stage:', error);
      showError(`Failed to move to next stage: ${error.message}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [database, roomId, updatePlayerStatus, showError]);

  /**
   * Handle player leaving the room
   * @param {String} playerId - ID of player leaving
   * @returns {Promise<Boolean>} Success status
   */
  const leaveRoom = useCallback(async (playerId) => {
    try {
      // Check game state
      const gameStateRef = ref(database, `rooms/${roomId}/state`);
      const snapshot = await get(gameStateRef);
      
      if (!snapshot.exists() || snapshot.val().status === 'lobby') {
        // In lobby, just remove the player
        await remove(ref(database, `rooms/${roomId}/players/${playerId}`));
      } else {
        // In game, mark as disconnected
        await update(ref(database, `rooms/${roomId}/players/${playerId}`), {
          status: 'disconnected',
          disconnectedAt: Date.now()
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error leaving room:', error);
      showError(`Failed to leave room: ${error.message}`);
      return false;
    }
  }, [database, roomId, showError]);

  // Ensure the disconnect handler is set up when the component mounts
    useEffect(() => {
      // If we have a room ID and database, check for existing player and set up disconnect handler
      if (roomId && database) {
        findExistingPlayer().then(player => {
          if (player) {
            setupDisconnectHandler(player.id);
          }
        });
      }
      
      // Clean up on component unmount
      return () => {
        setDisconnectHandlerSet(false);
        if (disconnectHandlersRef.current) {
          disconnectHandlersRef.current.clear();
        }
      };
    }, [roomId, database, findExistingPlayer, setupDisconnectHandler]);

  return {
    isLoading,
    error,
    sessionId,
    joinRoom,
    becomeGameStarter,
    startGame,
    updatePlayerStatus,
    moveToNextStage,
    leaveRoom
  };
};

export default useFirebaseRoom;