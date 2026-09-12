import React, { useState } from 'react';
import { 
  Trophy, Medal, Crown, Star, Flame, Sparkles, ShoppingBag, 
  ArrowLeft, CheckCircle2, ShieldAlert, Award, Clock, Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { storageService, getStudentTitle } from '../services/storageService';

const STORE_BADGES = [
  // Tier 1: Khởi Đầu (20 - 100 ⭐)
  { id: 'b1', category: '🌱 Khởi Đầu', name: '🌱 Tân Binh Lớp 5', cost: 20, desc: 'Huy hiệu khởi đầu hành trình tích sao thi đua' },
  { id: 'b2', category: '🌱 Khởi Đầu', name: '✏️ Mầm Non Chăm Chỉ', cost: 40, desc: 'Tích cực hoàn thành bài học đầu tiên Lớp 5' },
  { id: 'b3', category: '🌱 Khởi Đầu', name: '🌟 Ngôi Sao Hy Vọng', cost: 60, desc: 'Khởi đầu chuỗi tích sao ấn tượng' },
  { id: 'b4', category: '🌱 Khởi Đầu', name: '🎒 Ba Lô Tri Thức', cost: 80, desc: 'Trang bị đầy đủ hành trang rèn luyện' },
  { id: 'b5', category: '🌱 Khởi Đầu', name: '🚀 Chấn Hưng Học Tập', cost: 100, desc: 'Sẵn sàng chinh phục chương trình Lớp 5' },

  // Tier 2: Phản Xạ & Tốc Độ (120 - 280 ⭐)
  { id: 'b6', category: '⚡ Tốc Độ', name: '⚡ Phản Xạ Siêu Tốc', cost: 120, desc: 'Hoàn thành bài tập với thời gian kỷ lục' },
  { id: 'b7', category: '⚡ Tốc Độ', name: '🔥 Chiếc Cúp Chăm Chỉ', cost: 150, desc: 'Học tập đều đặn và kiên trì mỗi ngày' },
  { id: 'b8', category: '⚡ Tốc Độ', name: '⏰ Chắt Chắt Thời Gian', cost: 180, desc: 'Quản lý thời gian học cực kỳ tối ưu' },
  { id: 'b9', category: '⚡ Tốc Độ', name: '🦉 Cú Mèo Đêm Khuya', cost: 220, desc: 'Chăm chỉ tự học và rèn luyện nâng cao' },
  { id: 'b10', category: '⚡ Tốc Độ', name: '🎯 Mục Tiêu Chuẩn Xác', cost: 280, desc: 'Làm bài đạt điểm 10 tuyệt đối lần đầu' },

  // Tier 3: Thần Đồng Toán Học (320 - 800 ⭐)
  { id: 'b11', category: '📐 Toán Học', name: '📐 Chuyên Gia Hình Học', cost: 320, desc: 'Làm chủ diện tích & thể tích các hình Lớp 5' },
  { id: 'b12', category: '📐 Toán Học', name: '🔢 Phù Thủy Số Thập Phân', cost: 400, desc: 'Tính toán siêu đẳng số thập phân & phân số' },
  { id: 'b13', category: '📐 Toán Học', name: '⚖️ Bậc Thầy Đại Số', cost: 500, desc: 'Giải toán đố & tìm X siêu tốc chuẩn xác' },
  { id: 'b14', category: '📐 Toán Học', name: '🧠 Siêu Trí Tuệ Toán Học', cost: 650, desc: 'Chinh phục các bài toán nâng cao Lớp 5' },
  { id: 'b15', category: '📐 Toán Học', name: '👑 Vua Toán Học Lớp 5', cost: 800, desc: 'Huy hiệu tôn vinh Đỉnh cao Toán Lớp 5' },

  // Tier 4: Trạng Nguyên Tiếng Việt (350 - 900 ⭐)
  { id: 'b16', category: '📖 Tiếng Việt', name: '✍️ Bút Vàng Văn Học', cost: 350, desc: 'Viết văn tả cảnh & cảm nghĩ phong phú' },
  { id: 'b17', category: '📖 Tiếng Việt', name: '📖 Bậc Thầy Từ Vựng', cost: 450, desc: 'Am hiểu từ đồng nghĩa, trái nghĩa, từ ghép' },
  { id: 'b18', category: '📖 Tiếng Việt', name: '📜 Ngữ Pháp Siêu Cấp', cost: 550, desc: 'Phân tích câu ghép & phép liên kết thành thạo' },
  { id: 'b19', category: '📖 Tiếng Việt', name: '🎭 Nhà Thơ Nhí Lớp 5', cost: 700, desc: 'Cảm thụ văn học sâu sắc & giàu cảm xúc' },
  { id: 'b20', category: '📖 Tiếng Việt', name: '👑 Trạng Nguyên Tiếng Việt', cost: 900, desc: 'Đỉnh cao thông thạo môn Tiếng Việt Lớp 5' },

  // Tier 5: Kỳ Phùng Tiếng Anh (400 - 1100 ⭐)
  { id: 'b21', category: '🇬🇧 Tiếng Anh', name: '🔤 Vocabulary Explorer', cost: 400, desc: 'Bậc thầy từ vựng Tiếng Anh Lớp 5' },
  { id: 'b22', category: '🇬🇧 Tiếng Anh', name: '🎧 Super Listener', cost: 500, desc: 'Kỹ năng nghe hiểu Tiếng Anh xuất sắc' },
  { id: 'b23', category: '🇬🇧 Tiếng Anh', name: '💬 Fluent Speaker', cost: 650, desc: 'Phát âm chuẩn & giao tiếp tự tin' },
  { id: 'b24', category: '🇬🇧 Tiếng Anh', name: '📚 Master Reader', cost: 850, desc: 'Đọc hiểu bài đọc Tiếng Anh chuẩn xác' },
  { id: 'b25', category: '🇬🇧 Tiếng Anh', name: '🌐 English Global Ambassador', cost: 1100, desc: 'Đại sứ Tiếng Anh Lớp 5 toàn cầu' },

  // Tier 6: Nhà Khoa Học Nhí (450 - 1300 ⭐)
  { id: 'b26', category: '🔬 Khoa Học', name: '🔬 Nhà Sinh Học Nhí', cost: 450, desc: 'Hiểu biết sâu sắc về sinh vật & môi trường' },
  { id: 'b27', category: '🔬 Khoa Học', name: '⚡ Kỹ Sư Năng Lượng', cost: 600, desc: 'Am hiểu mạch điện & tiết kiệm năng lượng' },
  { id: 'b28', category: '🔬 Khoa Học', name: '🌿 Bảo Vệ Trái Đất', cost: 750, desc: 'Đại sứ bảo vệ môi trường & sinh thái' },
  { id: 'b29', category: '🔬 Khoa Học', name: '🌌 Khám Phá Vũ Trụ', cost: 950, desc: 'Am hiểu sự sống & hiện tượng tự nhiên' },
  { id: 'b30', category: '🔬 Khoa Học', name: '👑 Vua Khoa Học Lớp 5', cost: 1300, desc: 'Làm chủ toàn bộ kiến thức Khoa Học 5' },

  // Tier 7: Sử Địa Hào Hùng (500 - 1500 ⭐)
  { id: 'b31', category: '🗺️ Sử Địa', name: '🗺️ Nhà Địa Lý Nhí', cost: 500, desc: 'Thông thuộc địa hình, sông núi Việt Nam' },
  { id: 'b32', category: '🗺️ Sử Địa', name: '🏛️ Sử Gia Hào Hùng', cost: 650, desc: 'Nắm vững các mốc lịch sử dựng nước & giữ nước' },
  { id: 'b33', category: '🗺️ Sử Địa', name: '🌏 Khám Phá Năng Động', cost: 850, desc: 'Hiểu biết sâu sắc các châu lục trên thế giới' },
  { id: 'b34', category: '🗺️ Sử Địa', name: '🎖️ Hào Khí Đông A', cost: 1100, desc: 'Tinh thần học tập & tự hào dân tộc' },
  { id: 'b35', category: '🗺️ Sử Địa', name: '👑 Vua Sử Địa Lớp 5', cost: 1500, desc: 'Bậc thầy Lịch sử & Địa lý Lớp 5' },

  // Tier 8: Phù Thủy Công Nghệ (600 - 2000 ⭐)
  { id: 'b36', category: '💻 Tin Học', name: '💻 Lập Trình Viên Nhí', cost: 600, desc: 'Tư duy thuật toán & logic máy tính' },
  { id: 'b37', category: '💻 Tin Học', name: '🌐 An Toàn Internet', cost: 800, desc: 'Hiểu biết quy tắc an toàn không gian mạng' },
  { id: 'b38', category: '💻 Tin Học', name: '🎨 Phù Thủy Đồ Họa', cost: 1100, desc: 'Sáng tạo bài trình chiếu & đa phương tiện' },
  { id: 'b39', category: '💻 Tin Học', name: '🤖 Kỹ Sư AI Tương Lai', cost: 1500, desc: 'Tiếp cận công nghệ tri thức hiện đại' },
  { id: 'b40', category: '💻 Tin Học', name: '⚡ Vua Công Nghệ Lớp 5', cost: 2000, desc: 'Làm chủ Tin học & Công nghệ Lớp 5' },

  // Tier 9: Huyền Thoại Thi Đua (2500 - 6000 ⭐)
  { id: 'b41', category: '🏆 Huyền Thoại', name: '🥉 Đồng Thau Tri Thức', cost: 2500, desc: 'Chứng nhận học sinh giỏi cấp trường' },
  { id: 'b42', category: '🏆 Huyền Thoại', name: '🥈 Bạc Kim Tri Thức', cost: 3200, desc: 'Chinh phục 80% kho tàng bài học Lớp 5' },
  { id: 'b43', category: '🏆 Huyền Thoại', name: '🥇 Hoàng Kim Tri Thức', cost: 4000, desc: 'Chinh phục 100% kho tàng bài học Lớp 5' },
  { id: 'b44', category: '🏆 Huyền Thoại', name: '🔮 Thần Đồng Toàn Năng', cost: 5000, desc: 'Đạt điểm tối đa ở tất cả các môn học' },
  { id: 'b45', category: '🏆 Huyền Thoại', name: '🛡️ Thiệp Vàng Trạng Nguyên', cost: 6000, desc: 'Vinh danh Bảng Vàng danh dự toàn trường' },

  // Tier 10: Tối Cao & Bất Tử (7500 - 15000 ⭐)
  { id: 'b46', category: '💎 Tối Cao', name: '🌟 Ngôi Sao Khung Trời', cost: 7500, desc: 'Tỏa sáng rực rỡ đỉnh bảng xếp hạng' },
  { id: 'b47', category: '💎 Tối Cao', name: '🐉 Rồng Thần Tri Thức', cost: 9000, desc: 'Sức mạnh tri thức vô song Lớp 5' },
  { id: 'b48', category: '💎 Tối Cao', name: '🌌 Đại Sứ Tri Thức', cost: 11000, desc: 'Tượng đài học tập xuất chúng toàn khối' },
  { id: 'b49', category: '💎 Tối Cao', name: '💎 Vương Miện Kim Cương', cost: 13000, desc: 'Danh hiệu cao quý bậc nhất Lớp 5' },
  { id: 'b50', category: '💎 Tối Cao', name: '☀️ Thái Dương Trạng Nguyên', cost: 15000, desc: 'Huyền thoại bất tử của Tiểu học Lớp 5' }
];

const CATEGORIES = [
  'Tất cả (50)',
  '🌱 Khởi Đầu',
  '⚡ Tốc Độ',
  '📐 Toán Học',
  '📖 Tiếng Việt',
  '🇬🇧 Tiếng Anh',
  '🔬 Khoa Học',
  '🗺️ Sử Địa',
  '💻 Tin Học',
  '🏆 Huyền Thoại',
  '💎 Tối Cao'
];

const formatTotalTime = (totalSecs) => {
  if (!totalSecs || totalSecs <= 0) return 'Mới bắt đầu';
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
};

export const LeaderboardView = ({ onBack, currentUser, onUpdateUser }) => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [activeTab, setActiveTab] = useState('rank'); // 'rank' | 'shop'
  const [selectedCat, setSelectedCat] = useState('Tất cả (50)');
  const [notification, setNotification] = useState('');

  const leaderboard = storageService.getLeaderboard();

  const filteredLeaderboard = selectedClass === 'all'
    ? leaderboard
    : leaderboard.filter(s => s.className === selectedClass);

  const top1 = filteredLeaderboard[0];
  const top2 = filteredLeaderboard[1];
  const top3 = filteredLeaderboard[2];

  const filteredBadges = selectedCat === 'Tất cả (50)'
    ? STORE_BADGES
    : STORE_BADGES.filter(b => b.category === selectedCat);

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
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p className="text-[11px] text-amber-200 uppercase font-bold">Huy hiệu hiện tại</p>
                  <p className="text-xs sm:text-sm font-bold text-white max-w-[140px] truncate">
                    {currentUser.avatarBadge || '🌱 Tân Binh Lớp 5'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs & Class Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('rank')}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              activeTab === 'rank'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-4 h-4" /> Bảng Xếp Hạng Học Sinh
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              activeTab === 'shop'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" /> Cửa Hàng Huy Hiệu (50 Loại 🏅)
          </button>
        </div>

        {/* Class Filter (Rank tab only) */}
        {activeTab === 'rank' && (
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Lớp:</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
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
                    <th className="px-4 py-3">Huy Hiệu Đổi Quà</th>
                    <th className="px-4 py-3">Danh Hiệu Xếp Loại</th>
                    <th className="px-4 py-3 text-center">Tốc độ làm bài ⏱️</th>
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
                        <td className="px-4 py-3.5 text-center">
                          <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-sky-50 text-sky-800 border border-sky-200 inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-sky-500" />
                            <span>{formatTotalTime(std.totalTimeSeconds)}</span>
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
          <div className="bg-purple-50 border border-purple-200 rounded-3xl p-6 text-purple-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              💡 <strong>Kho 50 Huy Hiệu Đổi Quà Thi Đua:</strong> Tích lũy đủ ⭐ <strong>Sao thưởng</strong> khi làm bài tập vận dụng để đổi lấy các Huy Hiệu & Danh Hiệu độc quyền hiển thị trên Bảng Xếp Hạng!
            </div>
            <div className="bg-purple-200/80 px-4 py-2 rounded-2xl text-purple-950 font-black text-xs shrink-0">
              Đang hiển thị: {filteredBadges.length} / 50 Huy hiệu
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-2xl font-extrabold text-xs whitespace-nowrap transition-all border ${
                  selectedCat === cat
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBadges.map((badge) => {
              const isEquipped = currentUser?.avatarBadge === badge.name;
              const canAfford = (currentUser?.stars || 0) >= badge.cost;

              return (
                <div 
                  key={badge.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center group relative overflow-hidden"
                >
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {badge.category}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
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
