// src/components/AdminPanel.jsx
import React from 'react';
import AuthService from '../services/AuthService';

const AdminPanel = ({ 
  user, 
  onLogout,
  onCleanInactiveRooms,
  onClearAllRooms,
  isLoading
}) => {
  const handleLogout = async () => {
    try {
      await AuthService.logout();
      if (onLogout) onLogout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h3>Admin Panel</h3>
        <div className="admin-user-info">
          {user.photoURL && <img src={user.photoURL} alt="Profile" />}
          <span>{user.displayName || user.email}</span>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </div>
      
      <div className="admin-actions">
        <button 
          onClick={onCleanInactiveRooms}
          disabled={isLoading}
          className="admin-btn"
        >
          Clean Inactive Rooms
        </button>
        
        <button 
          onClick={onClearAllRooms}
          disabled={isLoading}
          className="admin-btn danger-btn"
        >
          Clear All Rooms
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;