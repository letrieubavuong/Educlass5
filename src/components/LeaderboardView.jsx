import React, { useState } from 'react';
import { 
  Trophy, Medal, Crown, Star, Flame, Sparkles, ShoppingBag, 
  ArrowLeft, CheckCircle2, ShieldAlert, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { storageService, getStudentTitle } from '../services/storageService';

const STORE_BADGES = [
  { id: 'b1', name: '🚀 Tàu Vũ Trụ Tri Thức', cost: 20, desc: 'Dành cho học sinh khám phá tri thức không giới hạn' },
  { id: 'b2', name: '🧙‍♂️ Phù Thủy Toán Học', cost: 30, desc: 'Biểu tượng của học sinh xuất sắc môn Toán' },
  { id: 'b3', name: '🦉 Cú Mèo Thông Thái', cost: 40, desc: 'Huy hiệu tri thức và tư duy logic đỉnh cao' },
  { id: 'b4', name: '👑 Vương Miện Kim Cương', cost: 50, desc: 'Danh hiệu tối cao cho Trạng Nguyên Lớp 5' }
];

export const LeaderboardView = ({ onBack, currentUser, onUpdateUser }) => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [activeTab, setActiveTab] = useState('rank'); // 'rank' | 'shop'
  const [notification, setNotification] = useState('');

  const leaderboard = storageService.getLeaderboard();

  const filteredLeaderboard = selectedClass === 'all'
    ? leaderboard
    : leaderboard.filter(s => s.className === selectedClass);

  const top1 = filteredLeaderboard[0];
  const top2 = filteredLeaderboard[1];
  const top3 = filteredLeaderboard[2];

  const handleBuyBadge = (badge) => {
    try {
      const updatedUser = storageService.buyAvatarBadge(badge.name, badge.cost);
      onUpdateUser(updatedUser);
      setNotification(`Chúc mừng! Bạn đã đổi thành công huy hiệu "${badge.name}" 🎉`);
      
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}

      setTimeout(() => setNotification(''), 4000);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-sm font-extrabold border border-slate-700 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none">
          <Trophy className="w-80 h-80 text-white" />
        </div>

        <div className="relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg backdrop-blur-xs mb-3 text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Về trang tổng quan
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black mb-2 text-amber-100">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Môi Trường Thi Đua Lớp 5</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">Bảng Xếp Hạng & Đổi Quà Thi Đua 🏆</h1>
              <p className="text-amber-100 text-sm mt-1">Tích lũy ⭐ Sao thưởng và ⚡ XP để chinh phục ngôi vị **Trạng Nguyên Lớp 5**!</p>
            </div>

            {currentUser && currentUser.role === 'student' && (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shrink-0">
                <div className="text-center">
                  <p className="text-[11px] text-amber-200 uppercase font-bold">Sao của bạn</p>
                  <p className="text-xl sm:text-2xl font-black text-amber-300">{currentUser.stars || 0} ⭐</p>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <p className="text-[11px] text-amber-200 uppercase font-bold">Điểm XP</p>
                  <p className="text-xl sm:text-2xl font-black text-white">{currentUser.xp || 0} ⚡</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Ranking vs Star Shop) */}
      <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('rank')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'rank'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>1. Bảng Xếp Hạng Thi Đua</span>
          </button>

          <button
            onClick={() => setActiveTab('shop')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'shop'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>2. Cửa Hàng Đổi Huy Hiệu ⭐</span>
          </button>
        </div>

        {activeTab === 'rank' && (
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-500 font-bold hidden sm:inline">Lớp:</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold bg-white text-slate-700 focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">Tất cả các lớp</option>
              <option value="5A">Lớp 5A</option>
              <option value="5B">Lớp 5B</option>
              <option value="5C">Lớp 5C</option>
              <option value="5D">Lớp 5D</option>
            </select>
          </div>
        )}
      </div>

      {/* TAB 1: RANKING & PODIUM */}
      {activeTab === 'rank' && (
        <div className="space-y-8">
          
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Top 2: Silver */}
            {top2 && (
              <div className="bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-slate-300 rounded-3xl p-6 text-center shadow-lg relative flex flex-col justify-between order-2 md:order-1">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-400 text-white font-black px-4 py-1 rounded-full text-xs shadow-md">
                  🥈 TOP 2 - BẢNG NHÃN
                </div>
                <div className="mt-4">
                  <div className="w-16 h-16 bg-white text-slate-600 rounded-full mx-auto flex items-center justify-center font-black text-xl shadow-md border-2 border-slate-300 mb-3">
                    2
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base">{top2.name}</h3>
                  <p className="text-xs text-slate-500">Lớp {top2.className} • {top2.avatarBadge || '⭐ Học sinh chăm chỉ'}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-300/80 flex items-center justify-center gap-3">
                  <span className="font-black text-slate-800 text-sm">{top2.xp || 0} ⚡ XP</span>
                  <span className="font-extrabold text-amber-600 text-sm">{top2.stars || 0} ⭐</span>
                </div>
              </div>
            )}

            {/* Top 1: Champion Gold */}
            {top1 && (
              <div className="bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200 border-4 border-amber-400 rounded-3xl p-6 text-center shadow-2xl relative flex flex-col justify-between order-1 md:order-2 transform md:-translate-y-4">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-black px-5 py-1.5 rounded-full text-xs shadow-xl flex items-center gap-1">
                  <Crown className="w-4 h-4 text-amber-200 fill-amber-200" />
                  <span>🥇 TOP 1 - TRẠNG NGUYÊN</span>
                </div>
                <div className="mt-4">
                  <div className="w-20 h-20 bg-amber-400 text-amber-950 rounded-full mx-auto flex items-center justify-center font-black text-2xl shadow-xl border-4 border-white mb-3 animate-pulse-subtle">
                    1
                  </div>
                  <h3 className="font-black text-slate-900 text-lg sm:text-xl">{top1.name}</h3>
                  <p className="text-xs text-amber-800 font-bold">Lớp {top1.className} • {top1.avatarBadge || '👑 Trạng Nguyên Lớp 5'}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-300 flex items-center justify-center gap-4">
                  <span className="font-black text-amber-900 text-base">{top1.xp || 0} ⚡ XP</span>
                  <span className="font-black text-amber-600 text-base">{top1.stars || 0} ⭐</span>
                </div>
              </div>
            )}

            {/* Top 3: Bronze */}
            {top3 && (
              <div className="bg-gradient-to-b from-orange-100 to-amber-100 border-2 border-orange-300 rounded-3xl p-6 text-center shadow-lg relative flex flex-col justify-between order-3">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white font-black px-4 py-1 rounded-full text-xs shadow-md">
                  🥉 TOP 3 - THÁM HOA
                </div>
                <div className="mt-4">
                  <div className="w-16 h-16 bg-white text-amber-700 rounded-full mx-auto flex items-center justify-center font-black text-xl shadow-md border-2 border-orange-300 mb-3">
                    3
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base">{top3.name}</h3>
                  <p className="text-xs text-slate-500">Lớp {top3.className} • {top3.avatarBadge || '⭐ Học sinh chăm chỉ'}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-orange-200 flex items-center justify-center gap-3">
                  <span className="font-black text-slate-800 text-sm">{top3.xp || 0} ⚡ XP</span>
                  <span className="font-extrabold text-amber-600 text-sm">{top3.stars || 0} ⭐</span>
                </div>
              </div>
            )}

          </div>

          {/* Full Leaderboard Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <h3 className="font-black text-slate-800 text-base flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Bảng Thi Đua Lớp Học ({filteredLeaderboard.length} Học Sinh)</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-center">Hạng</th>
                    <th className="px-4 py-3">Học Sinh</th>
                    <th className="px-4 py-3">Lớp</th>
                    <th className="px-4 py-3">Huy Hiệu</th>
                    <th className="px-4 py-3">Danh Hiệu Xếp Loại</th>
                    <th className="px-4 py-3 text-right">Điểm XP ⚡</th>
                    <th className="px-4 py-3 text-right">Sao ⭐</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredLeaderboard.map((std, idx) => {
                    const isMe = currentUser?.id === std.id;
                    const rankTitle = getStudentTitle(std.xp || 0);

                    return (
                      <tr 
                        key={std.id}
                        className={`transition-colors ${
                          isMe ? 'bg-amber-50/90 font-bold border-l-4 border-amber-500' : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="px-4 py-3.5 text-center font-black text-slate-800">
                          {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                        </td>
                        <td className="px-4 py-3.5 font-extrabold text-slate-800">
                          {std.name} {isMe && <span className="text-xs bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded ml-1">(Bạn)</span>}
                        </td>
                        <td className="px-4 py-3.5 text-slate-500 font-semibold">{std.className}</td>
                        <td className="px-4 py-3.5 text-slate-700 font-medium">{std.avatarBadge || '🌱 Tân Binh Lớp 5'}</td>
                        <td className="px-4 py-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r ${rankTitle.color}`}>
                            {rankTitle.title}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-right font-black text-slate-900">{std.xp || 0} ⚡</td>
                        <td className="px-4 py-3.5 text-right font-black text-amber-600">{std.stars || 0} ⭐</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: STAR BADGE STORE */}
      {activeTab === 'shop' && (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-3xl p-6 text-purple-900 text-xs sm:text-sm">
            💡 <strong>Hướng dẫn Cửa Hàng:</strong> Tích lũy đủ số ⭐ <strong>Sao thưởng</strong> khi hoàn thành xuất sắc các bài tập vận dụng để đổi lấy các Huy Hiệu & Danh Hiệu độc quyền hiển thị trên Bảng Xếp Hạng!
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORE_BADGES.map((badge) => {
              const isEquipped = currentUser?.avatarBadge === badge.name;
              const canAfford = (currentUser?.stars || 0) >= badge.cost;

              return (
                <div 
                  key={badge.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center group"
                >
                  <div>
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {badge.name.split(' ')[0]}
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-base">{badge.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{badge.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-amber-600 font-black text-base mb-3">{badge.cost} ⭐ Sao</div>
                    
                    {isEquipped ? (
                      <button 
                        disabled
                        className="w-full py-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-default"
                      >
                        <CheckCircle2 className="w-4 h-4" /> Đang Trang Bị
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBuyBadge(badge)}
                        disabled={!canAfford}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                          canAfford
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? 'Đổi & Trang Bị Ngay ✨' : 'Chưa Đủ Sao ⭐'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
