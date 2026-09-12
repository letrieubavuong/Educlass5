import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue } from 'firebase/database';

// Firebase Project Configuration chính chủ từ dự án feesmanager-3e889 của Thầy/Cô
const firebaseConfig = {
  apiKey: "AIzaSyA_k2cOZLD7Mq7C_ojZEiyHmW2DPnJ4bFc",
  authDomain: "feesmanager-3e889.firebaseapp.com",
  databaseURL: "https://feesmanager-3e889-default-rtdb.firebaseio.com",
  projectId: "feesmanager-3e889",
  storageBucket: "feesmanager-3e889.firebasestorage.app",
  messagingSenderId: "290240929923",
  appId: "1:290240929923:web:f9b021db40cfc798873bb6",
  measurementId: "G-R3VGH0JT1V"
};

let app = null;
let db = null;
let isFirebaseReady = false;

try {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  isFirebaseReady = true;
  console.log('⚡ Firebase Realtime Sync Engine initialized successfully!');
} catch (e) {
  console.warn('Firebase init warning:', e);
}

export const firebaseService = {
  isReady: () => isFirebaseReady,

  // Save / Update full sync state to Firebase Realtime DB
  pushSyncState: async (payload) => {
    if (!isFirebaseReady || !db) return false;
    try {
      const syncRef = ref(db, 'educlass5_sync');
      await set(syncRef, {
        ...payload,
        lastSync: new Date().toISOString()
      });
      return true;
    } catch (e) {
      console.warn('Firebase push sync error:', e);
      return false;
    }
  },

  // One-time fetch from Firebase
  fetchSyncState: async () => {
    if (!isFirebaseReady || !db) return null;
    try {
      const syncRef = ref(db, 'educlass5_sync');
      const snapshot = await get(syncRef);
      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (e) {
      console.warn('Firebase fetch sync error:', e);
    }
    return null;
  },

  // Real-time Instant WebSocket Listener (< 50ms latency across devices!)
  listenToRealtimeSync: (onDataReceived) => {
    if (!isFirebaseReady || !db) return () => {};
    try {
      const syncRef = ref(db, 'educlass5_sync');
      const unsubscribe = onValue(syncRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          onDataReceived(data);
        }
      }, (err) => {
        console.warn('Firebase realtime listener warning:', err);
      });
      return unsubscribe;
    } catch (e) {
      console.warn('Firebase realtime setup error:', e);
      return () => {};
    }
  }
};
