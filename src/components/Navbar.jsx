import React, { useState } from 'react';
import { BookOpen, Star, Shield, LogOut, User, Download, Trophy, Bell, Sparkles, Check, ChevronRight } from 'lucide-react';
import { storageService } from '../services/storageService';

export const Navbar = ({ 
  currentUser, onOpenAuth, onLogout, onGoHome, onOpenAdmin, 
  onOpenLeaderboard, canInstallPWA, onInstallPWA, onNavigateToLesson 
}) => {
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  const notifications = storageService.getNotifications();
  const unreadCount = storageService.getUnreadCount(currentUser?.id);

  const handleNotifClick = (notif) => {
    if (currentUser?.id) {
      storageService.markNotificationAsRead(notif.id, currentUser.id);
    }
    setShowNotifMenu(false);
    if (notif.subjectId && notif.lessonId && onNavigateToLesson) {
      onNavigateToLesson(notif.subjectId, notif.lessonId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <button 
          onClick={onGoHome}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl text-slate-800 tracking-tight">EduClass</span>
              <span className="bg-sky-100 text-sky-700 text-xs px-2 py-0.5 rounded-full font-bold">LỚP 5 PWA</span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">Học tập & Luyện thi Thông minh</p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Notification Bell Icon */}
          <div className="relative">
            <button
              onClick={() => setShowNotifMenu(!showNotifMenu)}
              className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Thông báo bài học mới mở khóa"
            >
              <Bell className="w-5 h-5 text-slate-700" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow-md">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Menu */}
            {showNotifMenu && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 overflow-hidden animate-fadeIn">
                <div className="p-3.5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center justify-between">
                  <h4 className="font-extrabold text-xs sm:text-sm flex items-center gap-1.5">
                    <Bell className="w-4 h-4" /> Thông Báo Bài Học Mới ({notifications.length})
                  </h4>
                  {unreadCount > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {unreadCount} chưa đọc
                    </span>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 p-1">
                  {notifications.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-xs font-semibold">
                      Chưa có thông báo mới nào từ Thầy/Cô.
                    </div>
                  ) : (
                    notifications.map((n) => {
                      const isRead = n.readBy && currentUser?.id && n.readBy.includes(currentUser.id);
                      return (
                        <div
                          key={n.id}
                          onClick={() => handleNotifClick(n)}
                          className={`p-3 rounded-xl transition-all cursor-pointer hover:bg-sky-50 flex items-start gap-3 ${
                            isRead ? 'opacity-70 bg-white' : 'bg-sky-50/60 border-l-4 border-sky-500'
                          }`}
                        >
                          <div className="p-2 rounded-xl bg-sky-100 text-sky-700 shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-black text-slate-800 flex items-center justify-between">
                              <span className="truncate">{n.title}</span>
                              <span className="text-[10px] text-slate-400 font-normal shrink-0">
                                {new Date(n.timestamp).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </h5>
                            <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                              {n.message}
                            </p>
                            {n.lessonId && (
                              <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:underline">
                                <span>🚀 Bấm để vào học ngay</span>
                                <ChevronRight className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard & Emulation Button */}
          <button
            onClick={onOpenLeaderboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs sm:text-sm font-extrabold shadow-sm hover:from-amber-500 hover:to-orange-600 transition-all transform hover:-translate-y-0.5"
            title="Bảng Xếp Hạng & Thi Đua Lớp Học"
          >
            <Trophy className="w-4 h-4 text-amber-950 fill-amber-950" />
            <span className="hidden sm:inline">Thi Đua</span>
          </button>

          {/* PWA Install Button */}
          {canInstallPWA && (
            <button
              onClick={onInstallPWA}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-sm animate-pulse-subtle"
              title="Cài đặt Ứng dụng về màn hình chính"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Cài App</span>
            </button>
          )}

          {/* User Profile / Status */}
          {currentUser ? (
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Stars badge for student */}
              {currentUser.role === 'student' && (
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-amber-700 font-bold text-xs sm:text-sm shadow-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>{currentUser.stars || 0} ⭐</span>
                </div>
              )}

              {/* Admin Badge button */}
              {currentUser.role === 'admin' ? (
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 text-purple-800 text-xs sm:text-sm font-bold hover:bg-purple-200 border border-purple-300 transition-colors"
                >
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Quản Lý Lớp</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <User className="w-4 h-4 text-sky-600" />
                  <span className="font-semibold">{currentUser.name}</span>
                  <span className="text-slate-400 text-xs font-normal">({currentUser.className || 'Học sinh'})</span>
                </div>
              )}

              {/* Logout button */}
              <button
                onClick={onLogout}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1 text-xs sm:text-sm font-medium"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Thoát</span>
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:from-sky-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5"
              >
                Đăng Nhập / Đăng Ký
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};
