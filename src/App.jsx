import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SubjectGrid } from './components/SubjectGrid';
import { LessonDetail } from './components/LessonDetail';
import { AdminPanel } from './components/AdminPanel';
import { LeaderboardView } from './components/LeaderboardView';
import { AuthModal } from './components/AuthModal';
import { storageService } from './services/storageService';
import { firebaseService } from './services/firebaseService';

export function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentView, setCurrentView] = useState('grid'); // 'grid' | 'admin' | 'lesson' | 'leaderboard'
  
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Lock overwrites tick state to trigger rerender when admin changes locks or cloud sync updates
  const [lockTick, setLockTick] = useState(0);
  const [toastAlert, setToastAlert] = useState(null);

  useEffect(() => {
    // Load persisted user session if any
    const sessionUser = storageService.getCurrentUser();
    if (sessionUser) {
      setCurrentUser(sessionUser);
    } else {
      // Auto open Auth Modal after short delay if user is not logged in
      const timer = setTimeout(() => {
        setIsAuthOpen(true);
      }, 600);
    }

    // 0. Listen to Firebase Realtime Database WebSockets (<50ms latency push across all devices!)
    const unsubscribeFirebase = firebaseService.listenToRealtimeSync((data) => {
      if (data) {
        storageService.applyCloudData(data);
      }
    });

    // 1. Initial Cloud Sync Fetch on Mount
    storageService.fetchFromCloudSync();

    // 2. Adaptive real-time background polling (every 4 seconds)
    const syncInterval = setInterval(() => {
      storageService.fetchFromCloudSync();
    }, 4000);

    // 3. Listen for window focus / tab visibility change to sync immediately
    const handleFocusOrVisibility = () => {
      if (!document.hidden) {
        storageService.fetchFromCloudSync();
      }
    };
    window.addEventListener('focus', handleFocusOrVisibility);
    document.addEventListener('visibilitychange', handleFocusOrVisibility);

    // 4. Custom event listener for cloud sync updates
    const handleCloudSyncUpdated = () => {
      setLockTick(prev => prev + 1);
    };
    window.addEventListener('cloud-sync-updated', handleCloudSyncUpdated);

    // 5. Cross-tab instant localStorage sync listener (0ms delay across tabs on same machine)
    const handleStorageEvent = (e) => {
      if (e.key === 'edu_lop5_lock_overwrites' || e.key === 'edu_lop5_students' || e.key === 'edu_lop5_custom_curriculum') {
        setLockTick(prev => prev + 1);
      }
    };
    window.addEventListener('storage', handleStorageEvent);

    // 6. Listen for new real-time notifications to show instant toast alert
    const handleNewRealtimeNotification = (e) => {
      if (e.detail) {
        setToastAlert(e.detail);
        setTimeout(() => setToastAlert(null), 6000);
      }
    };
    window.addEventListener('new-realtime-notification', handleNewRealtimeNotification);

    return () => {
      unsubscribeFirebase();
      clearInterval(syncInterval);
      window.removeEventListener('focus', handleFocusOrVisibility);
      document.removeEventListener('visibilitychange', handleFocusOrVisibility);
      window.removeEventListener('cloud-sync-updated', handleCloudSyncUpdated);
      window.removeEventListener('storage', handleStorageEvent);
      window.removeEventListener('new-realtime-notification', handleNewRealtimeNotification);
    };
  }, []);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    if (user.role === 'admin') {
      setCurrentView('admin');
    }
  };

  const handleLogout = () => {
    storageService.logout();
    setCurrentUser(null);
    setCurrentView('grid');
  };

  const handleSelectLesson = (subject, lesson) => {
    setSelectedSubject(subject);
    setSelectedLesson(lesson);
    setCurrentView('lesson');
  };

  const handleNavigateToLesson = (subjectId, lessonId) => {
    const allSubjects = storageService.getAllSubjects();
    const sub = allSubjects.find(s => s.id === subjectId);
    if (!sub) return;
    const les = sub.lessons.find(l => l.id === lessonId);
    if (!les) return;

    const isLocked = storageService.isLessonLocked(les);
    const isAdmin = currentUser?.role === 'admin';

    if (isLocked && !isAdmin) {
      alert(`🔒 Bài học "${les.title}" hiện đang bị Giáo viên tạm khóa để kiểm soát tiến độ. Vui lòng quay lại sau!`);
      return;
    }

    setSelectedSubject(sub);
    setSelectedLesson(les);
    setCurrentView('lesson');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* Navigation Header */}
      <Navbar
        key={`nav-${lockTick}`}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onGoHome={() => setCurrentView('grid')}
        onOpenAdmin={() => setCurrentView('admin')}
        onOpenLeaderboard={() => setCurrentView('leaderboard')}
        onNavigateToLesson={handleNavigateToLesson}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-12">
        {currentView === 'grid' && (
          <SubjectGrid
            key={`grid-${lockTick}`}
            currentUser={currentUser}
            onSelectLesson={handleSelectLesson}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {currentView === 'admin' && (
          <AdminPanel
            key={`admin-${lockTick}`}
            onBack={() => setCurrentView('grid')}
            onUpdateOverwrites={() => setLockTick(prev => prev + 1)}
          />
        )}

        {currentView === 'leaderboard' && (
          <LeaderboardView
            key={`leaderboard-${lockTick}`}
            onBack={() => setCurrentView('grid')}
            currentUser={currentUser}
            onUpdateUser={(updated) => setCurrentUser(updated)}
          />
        )}

        {currentView === 'lesson' && selectedSubject && selectedLesson && (
          <LessonDetail
            subject={selectedSubject}
            lesson={selectedLesson}
            onBack={() => setCurrentView('grid')}
            currentUser={currentUser}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>EduClass Lớp 5</strong> &copy; {new Date().getFullYear()} - Nền Tảng Học Tập & Luyện Thi Thông Minh
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Toán</span> • <span>Tiếng Việt</span> • <span>Tiếng Anh</span> • <span>Khoa học</span> • <span>Tin học</span> • <span>Lịch sử & Địa lý</span>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Realtime Global Toast Notification Alert */}
      {toastAlert && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900/95 text-white p-4 rounded-2xl shadow-2xl border border-sky-500 max-w-sm animate-bounce">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-extrabold text-xs sm:text-sm text-sky-300">{toastAlert.title}</h4>
            <button onClick={() => setToastAlert(null)} className="text-slate-400 hover:text-white text-xs font-bold px-1">✕</button>
          </div>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed">{toastAlert.message}</p>
        </div>
      )}

    </div>
  );
}

export default App;
