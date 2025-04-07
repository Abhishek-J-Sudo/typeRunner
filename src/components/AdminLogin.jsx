// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const AdminLogin = ({ onLoginSuccess, onLoginError }) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    
    try {
      // Attempt login with Google
      const user = await AuthService.loginWithGoogle();
      
      // Check if user is admin
      const isAdmin = await AuthService.isUserAdmin(user.uid);
      
      if (isAdmin) {
        // Call success callback
        if (onLoginSuccess) onLoginSuccess(user);
      } else {
        // User is not an admin
        await AuthService.logout();
        if (onLoginError) onLoginError('You do not have admin privileges');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (onLoginError) onLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="admin-login-container">
      <button 
        onClick={handleGoogleLogin} 
        disabled={loading}
        className="google-login-btn"
      >
        {loading ? 'Signing in...' : 'Admin Sign In with Google'}
      </button>
    </div>
  );
};

export default AdminLogin;