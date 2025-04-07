// src/services/AuthService.js
import { 
    getAuth, 
    GoogleAuthProvider,
    signInWithPopup,
    signOut, 
    onAuthStateChanged 
  } from 'firebase/auth';
  import { getDatabase, ref, get } from 'firebase/database';
  import { app } from '../FirebaseConfig';
  
  // Initialize Firebase Auth
  const auth = getAuth(app);
  const db = getDatabase(app);
  const googleProvider = new GoogleAuthProvider();
  
  // Admin service
  const AuthService = {
    // Check if a user is an admin
    isUserAdmin: async (uid) => {
      if (!uid) return false;
      
      try {
        // Check the admin status in Firebase Realtime Database
        const adminRef = ref(db, `admins/${uid}`);
        const snapshot = await get(adminRef);
        
        return snapshot.exists() && snapshot.val() === true;
      } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
      }
    },
    
    // Login with Google
    loginWithGoogle: async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
      } catch (error) {
        console.error('Google sign-in error:', error);
        throw error;
      }
    },
    
    // Logout
    logout: async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Logout error:', error);
        throw error;
      }
    },
    
    // Get current user
    getCurrentUser: () => {
      return auth.currentUser;
    },
    
    // Set up auth state observer
    observeAuthState: (callback) => {
      return onAuthStateChanged(auth, callback);
    }
  };
  
  export default AuthService;