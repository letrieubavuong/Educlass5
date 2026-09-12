import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SubjectGrid } from './components/SubjectGrid';
import { LessonDetail } from './components/LessonDetail';
import { AdminPanel } from './components/AdminPanel';
import { LeaderboardView } from './components/LeaderboardView';
import { AuthModal } from './components/AuthModal';
import { storageService } from './services/storageService';

export function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentView, setCurrentView] = useState('grid'); // 'grid' | 'admin' | 'lesson' | 'leaderboard'
  
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Lock overwrites tick state to trigger rerender when admin changes locks or cloud sync updates
  const [lockTick, setLockTick] = useState(0);

  useEffect(() => {
    // Load persisted user session if any
    const sessionUser = storageService.getCurrentUser();
    if (sessionUser) {
      setCurrentUser(sessionUser);
    }

    // 1. Initial Cloud Sync Fetch on Mount
    storageService.fetchFromCloudSync();

    // 2. Real-time background polling (every 3 seconds)
    const syncInterval = setInterval(() => {
      storageService.fetchFromCloudSync();
    }, 3000);

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

    return () => {
      clearInterval(syncInterval);
      window.removeEventListener('focus', handleFocusOrVisibility);
      document.removeEventListener('visibilitychange', handleFocusOrVisibility);
      window.removeEventListener('cloud-sync-updated', handleCloudSyncUpdated);
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

    </div>
  );
}

export default App;
