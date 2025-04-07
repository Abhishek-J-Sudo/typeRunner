import React, { useState, useEffect } from 'react';
import TypeRunner from './components/TypeRunner';
import './App.css';

// Import Firebase config and functions
import { database } from './FirebaseConfig';
import { ref, get, set, push, remove, onDisconnect } from 'firebase/database';
import playerService from './hooks/PlayerService';

// Import Admin functions
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import AuthService from './services/AuthService';

const App = () => {
  // Application state
  const [view, setView] = useState('home'); // 'home', 'join', 'game'
  const [playerName, setPlayerName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [roomIdInput, setRoomIdInput] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Set up authentication observer
  useEffect(() => {
    const unsubscribe = AuthService.observeAuthState(async (user) => {
      if (user) {
        // User is signed in
        const adminStatus = await AuthService.isUserAdmin(user.uid);
        setAdminUser(user);
        setIsAdmin(adminStatus);
      } else {
        // User is signed out
        setAdminUser(null);
        setIsAdmin(false);
      }
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  // Handle admin login success
  const handleAdminLoginSuccess = (user) => {
    setAdminUser(user);
    setIsAdmin(true);
  };
  
  // Handle admin login error
  const handleAdminLoginError = (errorMessage) => {
    setError(errorMessage);
  };
  
  // Handle admin logout
  const handleAdminLogout = () => {
    setAdminUser(null);
    setIsAdmin(false);
  };

  // Load player name from localStorage if available
  useEffect(() => {
    const savedName = localStorage.getItem('typeRunnerPlayerName');
    if (savedName) {
      setPlayerName(savedName);
    }
  }, []);

  // Save player name to localStorage when it changes
  useEffect(() => {
    if (playerName) {
      localStorage.setItem('typeRunnerPlayerName', playerName);
    }
  }, [playerName]);

  // Clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  /**
   * Fetch available rooms that are in lobby state
   */
  const fetchAvailableRooms = async () => {
    setIsLoading(true);
    
    try {
      const roomsRef = ref(database, 'rooms');
      const snapshot = await get(roomsRef);
      
      if (snapshot.exists()) {
        const roomsData = snapshot.val();
        const activeRooms = Object.entries(roomsData)
          // Filter rooms that are in lobby state and have less than 10 players
          .filter(([_, room]) => {
            if (!room.state || room.state.status !== 'lobby') return false;
            
            const activePlayers = room.players ? 
              Object.values(room.players).filter(p => p.status !== 'disconnected').length : 0;
            
            return activePlayers < 10;
          })
          .map(([id, room]) => {
            const activePlayers = room.players ? 
              Object.values(room.players).filter(p => p.status !== 'disconnected').length : 0;
            
            return {
              id,
              playerCount: activePlayers,
              createdBy: room.createdBy || 'Unknown',
              createdAt: room.createdAt || Date.now()
            };
          });
        
        // Sort by newest first
        activeRooms.sort((a, b) => b.createdAt - a.createdAt);
        setAvailableRooms(activeRooms);
      } else {
        setAvailableRooms([]);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setError('Failed to load available rooms. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Create a new room and join it
   */
  const createRoom = async () => {
    if (!playerName.trim()) {
      setError('Please enter your name to create a room');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Generate a room ID (uppercase alphanumeric)
      const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Create room structure in Firebase (without player)
      const roomRef = ref(database, `rooms/${newRoomId}`);
      await set(roomRef, {
        createdAt: Date.now(),
        createdBy: playerName,
        state: {
          status: 'lobby',
          createdAt: Date.now()
        }
        // No players here - they will be added by PlayerService
      });
      
      // Set room ID and move to game view
      setRoomId(newRoomId);
      setView('game');
    } catch (error) {
      console.error('Error creating room:', error);
      setError('Failed to create room. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Join an existing room
   * @param {string} roomToJoin - Room ID to join
   */
  const joinRoom = async (roomToJoin = null) => {
    if (!playerName.trim()) {
      setError('Please enter your name to join a room');
      return;
    }
    
    // Use provided room ID or the one from input
    const targetRoomId = roomToJoin || roomIdInput.trim();
    
    if (!targetRoomId) {
      setError('Please enter a valid room ID');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Check if room exists
      const roomRef = ref(database, `rooms/${targetRoomId}`);
      const snapshot = await get(roomRef);
      
      if (!snapshot.exists()) {

        localStorage.removeItem('typeRunnerSessionId'); 
        // Room doesn't exist - clear related localStorage
        setError(`Room ${targetRoomId} does not exist`);
        return;
      }
      
      // Check if room is in lobby state
      const roomData = snapshot.val();
      if (roomData.state && roomData.state.status !== 'lobby') {
        setError(`Game in room ${targetRoomId} has already started`);
        return;
      }
      
      // Check if room is full (max 10 players)
      const activePlayers = roomData.players ? 
        Object.values(roomData.players).filter(p => p.status !== 'disconnected').length : 0;
      
      if (activePlayers >= 10) {
        setError(`Room ${targetRoomId} is full (10/10 players)`);
        return;
      }
      
      // Set room ID and move to game view
      setRoomId(targetRoomId);
      setView('game');
    } catch (error) {
      console.error('Error joining room:', error);
      setError('Failed to join room. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle returning to home screen
   */
  const handleBackToHome = () => {
    playerService.cleanup(); // Clean up player service when returning to home
    setRoomId('');
    setView('home');
  };

  /**
   * Clean inactive rooms with no active players
   */
  const cleanInactiveRooms = async () => {
    if (!window.confirm('Are you sure you want to clean inactive rooms?')) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const roomsRef = ref(database, 'rooms');
      const snapshot = await get(roomsRef);
      
      if (snapshot.exists()) {
        const roomsData = snapshot.val();
        let roomsCleaned = 0;
        
        for (const [id, room] of Object.entries(roomsData)) {
          // Check if room has any active players
          let hasActivePlayers = false;
          
          if (room.players) {
            // Count players who are not disconnected
            const activePlayers = Object.values(room.players).filter(p => p.status !== 'disconnected');
            hasActivePlayers = activePlayers.length > 0;
          }
          
          if (!hasActivePlayers) {
            // Remove room with no active players
            await remove(ref(database, `rooms/${id}`));
            roomsCleaned++;
          }
        }
        alert(`${roomsCleaned} inactive rooms have been cleaned successfully.`);
      } else {
        alert('No rooms found in the database.');
      }
    } catch (error) {
      console.error('Error cleaning rooms:', error);
      setError('Failed to clean inactive rooms. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clear all rooms from the database
   */
  const clearAllRooms = async () => {
    if (!window.confirm('WARNING: This will delete ALL rooms. Are you absolutely sure?')) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // First, get all the rooms
      const roomsRef = ref(database, 'rooms');
      const snapshot = await get(roomsRef);
      
      if (snapshot.exists()) {
        const roomsData = snapshot.val();
        
        // For each room, cancel onDisconnect handlers for all players
        for (const [roomId, room] of Object.entries(roomsData)) {
          if (room.players) {
            for (const [playerId, _] of Object.entries(room.players)) {
              const playerRef = ref(database, `rooms/${roomId}/players/${playerId}`);
              // Cancel onDisconnect handler
              await onDisconnect(playerRef).cancel();
            }
          }
        }
      }
      
      // Now remove all rooms
      await remove(roomsRef);
      playerService.cleanup(); // Clean up player service
      
      // Clear localStorage
      localStorage.removeItem('typeRunnerSessionId');
      
      alert('All rooms have been cleared from the database.');
    } catch (error) {
      console.error('Error clearing all rooms:', error);
      setError('Failed to clear all rooms. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Render home screen
  const renderHomeScreen = () => (
    <div className="home-screen">
      <h1>TypeRunner</h1>
      
      <div className="name-input">
        <label htmlFor="player-name">Your Name:</label>
        <input
          id="player-name"
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          maxLength={20}
        />
      </div>
      
      <div className="main-actions">
        <button 
          onClick={createRoom}
          disabled={!playerName.trim() || isLoading}
          className="create-room-btn"
        >
          {isLoading ? 'Creating...' : 'Create New Room'}
        </button>
        
        <button 
          onClick={() => {
            setView('join');
            fetchAvailableRooms();
          }}
          disabled={!playerName.trim() || isLoading}
          className="join-room-btn"
        >
          Join Room
        </button>
      </div>
      
      {/* Conditional rendering for admin components */}
      {isAdmin && adminUser ? (
        <AdminPanel
          user={adminUser}
          onLogout={handleAdminLogout}
          onCleanInactiveRooms={cleanInactiveRooms}
          onClearAllRooms={clearAllRooms}
          isLoading={isLoading}
        />
      ) : (
        <AdminLogin
          onLoginSuccess={handleAdminLoginSuccess}
          onLoginError={handleAdminLoginError}
        />
      )}
    </div>
  );

  // Render join room screen
  const renderJoinScreen = () => (
    <div className="join-room-screen">
      <h2>Join Room</h2>
      
      <div className="join-by-id">
        <div className="room-id-input">
          <label htmlFor="room-id">Room ID:</label>
          <input
            id="room-id"
            type="text"
            placeholder="Enter room ID (e.g., A1B2C3)"
            value={roomIdInput}
            onChange={(e) => setRoomIdInput(e.target.value.toUpperCase())}
            maxLength={6}
          />
        </div>
        
        <button 
          onClick={() => joinRoom()}
          disabled={!roomIdInput.trim() || isLoading}
          className="join-btn"
        >
          {isLoading ? 'Joining...' : 'Join Room'}
        </button>
      </div>
      
      <div className="available-rooms">
        <div className="rooms-header">
          <h3>Available Rooms</h3>
          <button 
            onClick={fetchAvailableRooms}
            disabled={isLoading}
            className="refresh-btn"
          >
            {isLoading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
        
        <div className="rooms-list-container">
          {availableRooms.length > 0 ? (
            <ul className="rooms-list">
              {availableRooms.map((room) => (
                <li key={room.id}>
                  <button 
                    onClick={() => joinRoom(room.id)}
                    disabled={isLoading}
                    className="join-room-btn"
                  >
                    Room #{room.id} - Created by {room.createdBy} - Players: {room.playerCount}/10
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-rooms">
              {isLoading ? 'Loading available rooms...' : 'No active rooms available. Create a new one!'}
            </p>
          )}
        </div>
      </div>
      
      <div className="room-actions">
        <button 
          onClick={() => setView('home')}
          disabled={isLoading}
          className="back-btn"
        >
          Back
        </button>
      </div>
    </div>
  );

  // Render game screen
  const renderGameScreen = () => (
    <TypeRunner
      roomId={roomId}
      database={database}
      playerName={playerName}
      onBack={handleBackToHome}
    />
  );

  // Render content based on current view
  const renderContent = () => {
    switch (view) {
      case 'home':
        return renderHomeScreen();
      case 'join':
        return renderJoinScreen();
      case 'game':
        return renderGameScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="typerunner-app">
      {error && <div className="error-message">{error}</div>}
      {renderContent()}
    </div>
  );
};

export default App;