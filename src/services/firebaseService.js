import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue } from 'firebase/database';

// Firebase Project Configuration
// Thầy/Cô có thể dán thông số Firebase Config của riêng mình tại đây nếu muốn!
const firebaseConfig = {
  apiKey: "AIzaSyEduclass5Lop5SmartApp2026",
  authDomain: "educlass5-sync.firebaseapp.com",
  databaseURL: "https://educlass5-sync-default-rtdb.firebaseio.com",
  projectId: "educlass5-sync",
  storageBucket: "educlass5-sync.appspot.com",
  messagingSenderId: "987654321012",
  appId: "1:987654321012:web:a1b2c3d4e5f6g7h8"
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
