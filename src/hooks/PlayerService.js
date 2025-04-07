// PlayerService.js
import { ref, set, update, push, get, onValue, onDisconnect, serverTimestamp } from 'firebase/database';
import { prepareGameChallenges } from '../utils/gameUtils';

/**
 * Service for managing players in TypeRunner
 * Handles player creation, updates, and Firebase listeners
 * Persists across component lifecycles
 */
class PlayerService {
  constructor() {
    this.database = null;
    this.roomId = null;
    this.sessionId = this._getOrCreateSessionId();
    this.currentPlayer = null;
    this.listeners = {};
    this.callbacks = {
      onPlayersChange: null,
      onGameStateChange: null,
      onEliminatedPlayersChange: null,
      onError: null
    };
    this.initialized = false;
  }

  /**
   * Initialize the player service with database and room ID
   * @param {Object} database - Firebase database instance
   * @param {String} roomId - Room ID to join
   */
  init(database, roomId) {
    console.log(`[PlayerService] Initializing with room: ${roomId}`);
    this.database = database;
    this.roomId = roomId;
    this.initialized = true;
    return this;
  }

  /**
   * Get or create session ID from localStorage
   * @returns {String} Session ID
   */
  _getOrCreateSessionId() {
    const existingId = localStorage.getItem('typeRunnerSessionId');
    if (existingId) return existingId;
    
    const newId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('typeRunnerSessionId', newId);
    return newId;
  }

  /**
   * Set event callbacks
   * @param {Object} callbacks - Callback functions
   */
  setCallbacks(callbacks) {
    this.callbacks = { ...this.callbacks, ...callbacks };
  }

  /**
   * Join a room as a player
   * @param {String} playerName - Player's name
   * @returns {Promise<Object>} Player object
   */
  async joinRoom(playerName) {
    if (!this.initialized) {
      console.error('[PlayerService] Not initialized');
      if (this.callbacks.onError) {
        this.callbacks.onError('Service not initialized');
      }
      return null;
    }

    try {
      console.log(`[PlayerService] Joining room ${this.roomId} as ${playerName}`);
      
      // Check if player already exists
      const existingPlayer = await this._findExistingPlayer();
      
      if (existingPlayer) {
        console.log(`[PlayerService] Found existing player: ${existingPlayer.id}`);
        
        // Check if player needs updating
        const needsUpdate = existingPlayer.name !== playerName || 
                            existingPlayer.status === 'disconnected';
        
        if (needsUpdate) {
          // Update existing player
          await this._updatePlayer(existingPlayer.id, {
            name: playerName,
            status: 'waiting',
            reconnected: Date.now()
          });
        }
        
        // Setup disconnect handler
        await this._setupDisconnectHandler(existingPlayer.id);
        
        // Store current player reference
        this.currentPlayer = {
          ...existingPlayer,
          name: playerName,
          status: 'waiting'
        };
      } else {
        // Create new player
        const newPlayer = await this._createPlayer(playerName);
        this.currentPlayer = newPlayer;
      }
      
      // Setup listeners
      this._setupListeners();
      
      return this.currentPlayer;
    } catch (error) {
      console.error('[PlayerService] Error joining room:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(`Failed to join room: ${error.message}`);
      }
      return null;
    }
  }

  /**
   * Find existing player by session ID
   * @returns {Promise<Object|null>} Existing player or null
   */
  async _findExistingPlayer() {
    try {
      console.log(`[PlayerService] Checking for existing player with sessionId: ${this.sessionId}`);
      const playersRef = ref(this.database, `rooms/${this.roomId}/players`);
      const snapshot = await get(playersRef);
      
      if (snapshot.exists()) {
        const players = snapshot.val();
        const existingPlayerEntry = Object.entries(players).find(
          ([_, player]) => player.sessionId === this.sessionId
        );
        
        if (existingPlayerEntry) {
          const [playerId, playerData] = existingPlayerEntry;
          console.log(`[PlayerService] Found existing player: ${playerId}`);
          return { id: playerId, ...playerData };
        }
      }
      
      console.log(`[PlayerService] No existing player found`);
      return null;
    } catch (error) {
      console.error('[PlayerService] Error finding existing player:', error);
      return null;
    }
  }

  /**
   * Create a new player
   * @param {String} playerName - Player's name
   * @returns {Promise<Object>} New player object
   */
  async _createPlayer(playerName) {
    try {
      // Check if room exists and has players
      const roomRef = ref(this.database, `rooms/${this.roomId}`);
      const roomSnapshot = await get(roomRef);
      
      // Determine if player should be game starter
      let isGameStarter = false;
      if (!roomSnapshot.exists()) {
        console.error(`[PlayerService] Room ${this.roomId} does not exist`);
        throw new Error(`Room ${this.roomId} does not exist`);
      }
      
      const roomData = roomSnapshot.val();
      if (!roomData.players || Object.keys(roomData.players).length === 0) {
        isGameStarter = true;
        console.log(`[PlayerService] No players in room, making new player the game starter`);
      }
      
      // Create player
      const playersRef = ref(this.database, `rooms/${this.roomId}/players`);
      const newPlayerRef = push(playersRef);
      const playerId = newPlayerRef.key;
      
      const playerData = {
        id: playerId,
        name: playerName,
        isGameStarter: isGameStarter,
        status: 'waiting',
        joined: Date.now(),
        input: '',
        finishTime: null,
        totalTime: 0,  // New field to track cumulative time across stages
        stageCompletions: {},  // New field to track completion times for each stage
        sessionId: this.sessionId
      };
      
      console.log(`[PlayerService] Creating new player:`, playerData);
      
      // Write player data
      await set(newPlayerRef, playerData);
      
      // Setup disconnect handler
      await this._setupDisconnectHandler(playerId);
      
      return playerData;
    } catch (error) {
      console.error('[PlayerService] Error creating player:', error);
      throw error;
    }
  }

  /**
   * Update player data
   * @param {String} playerId - Player ID
   * @param {Object} data - Data to update
   * @returns {Promise<Boolean>} Success status
   */
  async _updatePlayer(playerId, data) {
    try {
      const playerRef = ref(this.database, `rooms/${this.roomId}/players/${playerId}`);
      await update(playerRef, data);
      return true;
    } catch (error) {
      console.error('[PlayerService] Error updating player:', error);
      return false;
    }
  }

  /**
   * Set up Firebase disconnect handler
   * @param {String} playerId - Player ID
   * @returns {Promise<void>}
   */
  async _setupDisconnectHandler(playerId) {
    try {
      console.log(`[PlayerService] Setting up disconnect handler for ${playerId}`);
      const playerRef = ref(this.database, `rooms/${this.roomId}/players/${playerId}`);
      
      await onDisconnect(playerRef).update({
        status: 'disconnected',
        disconnectedAt: serverTimestamp()
      });
      
      console.log(`[PlayerService] Disconnect handler set up successfully`);
    } catch (error) {
      console.error('[PlayerService] Error setting up disconnect handler:', error);
    }
  }

  /**
   * Set up Firebase listeners
   */
  _setupListeners() {
    console.log(`[PlayerService] Setting up Firebase listeners`);
    
    // Cleanup existing listeners first
    this._cleanupListeners();
    
    // Players listener
    const playersRef = ref(this.database, `rooms/${this.roomId}/players`);
    this.listeners.players = onValue(playersRef, (snapshot) => {
      if (snapshot.exists()) {
        const playersData = snapshot.val();
        const playersArray = Object.entries(playersData).map(([id, data]) => ({
          ...data,
          id
        }));
        
        // Update current player reference if needed
        if (this.currentPlayer) {
          const updatedCurrentPlayer = playersArray.find(p => p.id === this.currentPlayer.id);
          if (updatedCurrentPlayer) {
            this.currentPlayer = updatedCurrentPlayer;
          }
        }
        
        // Call callback
        if (this.callbacks.onPlayersChange) {
          this.callbacks.onPlayersChange(playersArray);
        }
      } else {
        // No players in the room
        if (this.callbacks.onPlayersChange) {
          this.callbacks.onPlayersChange([]);
        }
      }
    });
    
    // Game state listener
    const stateRef = ref(this.database, `rooms/${this.roomId}/state`);
    this.listeners.gameState = onValue(stateRef, (snapshot) => {
      if (snapshot.exists() && this.callbacks.onGameStateChange) {
        this.callbacks.onGameStateChange(snapshot.val());
      }
    });
    
    // Historical results listener (former eliminated players)
    const statsRef = ref(this.database, `rooms/${this.roomId}/stageResults`);
    this.listeners.stageResults = onValue(statsRef, (snapshot) => {
      if (snapshot.exists() && this.callbacks.onEliminatedPlayersChange) {
        this.callbacks.onEliminatedPlayersChange(Object.values(snapshot.val()));
      } else if (this.callbacks.onEliminatedPlayersChange) {
        this.callbacks.onEliminatedPlayersChange([]);
      }
    });
  }

  /**
   * Clean up Firebase listeners
   */
  _cleanupListeners() {
    console.log(`[PlayerService] Cleaning up listeners`);
    Object.values(this.listeners).forEach(listener => {
      if (listener) {
        listener();
      }
    });
    this.listeners = {};
  }

  /**
   * Update player status
   * @param {Object} statusData - Status data to update
   * @returns {Promise<Boolean>} Success status
   */
  async updatePlayerStatus(statusData) {
    if (!this.currentPlayer) {
      console.error('[PlayerService] No current player');
      return false;
    }
    
    try {
      // Log the update for debugging
      console.log(`[PlayerService] Updating player ${this.currentPlayer.id} with data:`, statusData);
      
      // If there's a finishTime in the update data, update stageCompletions and totalTime
      if (statusData.finishTime !== undefined) {
        const stateRef = ref(this.database, `rooms/${this.roomId}/state`);
        const stateSnapshot = await get(stateRef);
        
        if (stateSnapshot.exists()) {
          const stateData = stateSnapshot.val();
          const currentStage = stateData.stage;
          
          // Get the player's current data
          const playerRef = ref(this.database, `rooms/${this.roomId}/players/${this.currentPlayer.id}`);
          const playerSnapshot = await get(playerRef);
          
          if (playerSnapshot.exists()) {
            const playerData = playerSnapshot.val();
            
            // Initialize objects if they don't exist
            const stageCompletions = playerData.stageCompletions || {};
            let totalTime = playerData.totalTime || 0;
            
            // Record completion time for this stage
            stageCompletions[`stage${currentStage}`] = statusData.finishTime;
            
            // Update total time
            totalTime += statusData.finishTime;
            
            // Add these to the status update
            statusData.stageCompletions = stageCompletions;
            statusData.totalTime = totalTime;
          }
        }
      }
      
      // Update player data
      const playerRef = ref(this.database, `rooms/${this.roomId}/players/${this.currentPlayer.id}`);
      await update(playerRef, statusData);
      
      return true;
    } catch (error) {
      console.error('[PlayerService] Error updating player status:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(`Failed to update status: ${error.message}`);
      }
      return false;
    }
  }

  /**
   * Become the game starter
   * @returns {Promise<Boolean>} Success status
   */
  async becomeGameStarter() {
    if (!this.currentPlayer) {
      console.error('[PlayerService] No current player');
      return false;
    }
    
    try {
      // Get all players
      const playersRef = ref(this.database, `rooms/${this.roomId}/players`);
      const snapshot = await get(playersRef);
      
      if (snapshot.exists()) {
        const players = snapshot.val();
        
        // Update all players' game starter status
        const updates = {};
        Object.keys(players).forEach((pid) => {
          updates[`/rooms/${this.roomId}/players/${pid}/isGameStarter`] = (pid === this.currentPlayer.id);
        });
        
        // Apply all updates at once
        await update(ref(this.database), updates);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('[PlayerService] Error becoming game starter:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(`Failed to become game starter: ${error.message}`);
      }
      return false;
    }
  }

  /**
   * Start the game with countdown
   * @returns {Promise<Boolean>} Success status
   */
  async startGame() {
    if (!this.currentPlayer || !this.currentPlayer.isGameStarter) {
      console.error('[PlayerService] Only game starter can start game');
      return false;
    }
    
    try {
      // Get challenges for all stages
      const challenges = await prepareGameChallenges();
      
      // Save challenges to Firebase for all players to access
      await update(ref(this.database, `rooms/${this.roomId}/challenges`), challenges);
      
      // Start countdown
      await update(ref(this.database, `rooms/${this.roomId}/state`), {
        status: 'starting',
        countdown: 3,
        startingAt: Date.now()
      });
      
      // Countdown interval
      let count = 3;
      const countdownInterval = setInterval(async () => {
        count--;
        await update(ref(this.database, `rooms/${this.roomId}/state`), {
          countdown: count
        });
        
        if (count <= 0) {
          clearInterval(countdownInterval);
          // Start first stage
          await update(ref(this.database, `rooms/${this.roomId}/state`), {
            status: 'playing',
            stage: 1,
            challenge: challenges.stage1.display,
            startTime: Date.now()
          });
        }
      }, 1000);
      
      return true;
    } catch (error) {
      console.error('[PlayerService] Error starting game:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(`Failed to start game: ${error.message}`);
      }
      return false;
    }
  }

  /**
   * Move to the next game stage
   * @param {Number} currentStage - Current stage
   * @param {Array} players - All players
   * @returns {Promise<Boolean>} Success status
   */
  async moveToNextStage(currentStage, players) {
    if (!this.currentPlayer || !this.currentPlayer.isGameStarter) {
      console.error('[PlayerService] Only game starter can move to next stage');
      return false;
    }
    
    try {
      // Get active players (not disconnected)
      const activePlayers = players.filter(p => p.status !== 'disconnected');
      
      // Save the current stage results for the leaderboard
      const stageResultRef = push(ref(this.database, `rooms/${this.roomId}/stageResults`));
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
        // Game is over - Calculate final rankings
        const playerRankings = [...activePlayers]
          .filter(p => p.totalTime > 0) // Only include players who completed at least one stage
          .sort((a, b) => a.totalTime - b.totalTime);
        
        // Calculate game statistics
        const allFinishTimes = activePlayers
          .filter(p => p.totalTime > 0)
          .map(p => p.totalTime);
        
        const avgTime = allFinishTimes.length ? 
          allFinishTimes.reduce((a, b) => a + b, 0) / allFinishTimes.length : 0;
        
        const fastestPlayer = playerRankings[0] || { name: 'N/A' };
        const slowestPlayer = playerRankings.length > 0 ? 
          playerRankings[playerRankings.length - 1] : { name: 'N/A' };
        
        // End game
        await update(ref(this.database, `rooms/${this.roomId}/statistics`), {
          averageCompletionTime: avgTime,
          fastestPlayer: fastestPlayer.name,
          slowestPlayer: slowestPlayer.name
        });
        
        // Get top 2 players (if available)
        const winners = playerRankings.slice(0, Math.min(2, playerRankings.length))
          .map(player => player.id);
        
        await update(ref(this.database, `rooms/${this.roomId}/state`), {
          status: 'finished',
          winners: winners,
          playerRankings: playerRankings.map(p => ({ id: p.id, name: p.name, totalTime: p.totalTime })),
          endTime: Date.now()
        });
      } else {
        // Reset players for next stage
        for (const player of activePlayers) {
          if (player.status !== 'disconnected') {
            await this._updatePlayer(player.id, {
              status: 'waiting',
              input: '',
              finishTime: null
            });
          }
        }
        
        // Get next stage challenge
        const nextStage = currentStage + 1;
        const challengesRef = ref(this.database, `rooms/${this.roomId}/challenges`);
        const challengesSnapshot = await get(challengesRef);
        
        if (!challengesSnapshot.exists()) {
          throw new Error("Challenges not found!");
        }
        
        const challenges = challengesSnapshot.val();
        const nextChallenge = challenges[`stage${nextStage}`].display;
        
        // Start countdown for next stage (same as game start)
        await update(ref(this.database, `rooms/${this.roomId}/state`), {
          status: 'starting',
          stage: nextStage,
          countdown: 3,
          startingAt: Date.now(),
          challenge: nextChallenge
        });
        
        // Countdown interval
        let count = 3;
        const countdownInterval = setInterval(async () => {
          count--;
          await update(ref(this.database, `rooms/${this.roomId}/state`), {
            countdown: count
          });
          
          if (count <= 0) {
            clearInterval(countdownInterval);
            // Start the stage after countdown
            await update(ref(this.database, `rooms/${this.roomId}/state`), {
              status: 'playing',
              startTime: Date.now()
            });
          }
        }, 1000);
      }
      
      return true;
    } catch (error) {
      console.error('[PlayerService] Error moving to next stage:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(`Failed to move to next stage: ${error.message}`);
      }
      return false;
    }
  }

  /**
   * Leave the room
   * @returns {Promise<Boolean>} Success status
   */
  async leaveRoom() {
    if (!this.currentPlayer) {
      console.log('[PlayerService] No current player to leave room');
      return true;
    }
    
    try {
      // Check game state
      const gameStateRef = ref(this.database, `rooms/${this.roomId}/state`);
      const snapshot = await get(gameStateRef);
      
      const playerRef = ref(this.database, `rooms/${this.roomId}/players/${this.currentPlayer.id}`);
      
      // Cancel the onDisconnect handler first
      await onDisconnect(playerRef).cancel();
      
      if (!snapshot.exists() || snapshot.val().status === 'lobby') {
        // In lobby, just remove the player
        await set(playerRef, null);
      } else {
        // In game, mark as disconnected
        await update(playerRef, {
          status: 'disconnected',
          disconnectedAt: Date.now()
        });
      }
      
      // Clean up
      this._cleanupListeners();
      this.currentPlayer = null;
      
      return true;
    } catch (error) {
      console.error('[PlayerService] Error leaving room:', error);
      return false;
    }
  }

  /**
   * Get current player
   * @returns {Object|null} Current player
   */
  getCurrentPlayer() {
    return this.currentPlayer;
  }

  /**
   * Clean up service
   */
  cleanup() {
    this.leaveRoom().then(() => {
      this._cleanupListeners();
      this.currentPlayer = null;
      this.initialized = false;
    });
  }
}

// Create singleton instance
const playerService = new PlayerService();
export default playerService;