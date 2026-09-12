import React, { useState } from 'react';
import { X, UserCheck, UserPlus, ShieldCheck, AlertCircle, KeyRound, Phone } from 'lucide-react';
import { storageService } from '../services/storageService';

export const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
  const [tab, setTab] = useState('login'); // 'login' | 'register' | 'admin'
  const [error, setError] = useState('');
  
  // Student Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [className, setClassName] = useState('5A');
  const [parentPhone, setParentPhone] = useState('');

  // Admin Form state
  const [adminPass, setAdminPass] = useState('');

  if (!isOpen) return null;

  const handleSubmitStudentLogin = (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = storageService.loginStudent(username, password);
      onAuthSuccess(user);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmitStudentRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !username.trim() || !password.trim()) {
      setError('Vui lòng điền đầy đủ các thông tin!');
      return;
    }
    if (!parentPhone.trim()) {
      setError('Vui lòng nhập Số điện thoại Phụ huynh để liên hệ!');
      return;
    }
    try {
      const newUser = storageService.registerStudent({ name, username, password, className, parentPhone });
      onAuthSuccess(newUser);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    setError('');
    try {
      const admin = storageService.loginAdmin(adminPass);
      onAuthSuccess(admin);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 transform transition-all">
        
        {/* Header Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 p-2 flex items-center justify-between">
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl w-full mr-2 text-xs sm:text-sm font-bold">
            <button
              onClick={() => { setTab('login'); setError(''); }}
              className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                tab === 'login' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Đăng Nhập</span>
            </button>

            <button
              onClick={() => { setTab('register'); setError(''); }}
              className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                tab === 'register' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Đăng Ký</span>
            </button>

            <button
              onClick={() => { setTab('admin'); setError(''); }}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                tab === 'admin' ? 'bg-purple-600 text-white shadow-sm' : 'text-purple-700 hover:bg-purple-100'
              }`}
              title="Đăng nhập dành cho Giáo viên / Admin"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* TAB 1: STUDENT LOGIN */}
          {tab === 'login' && (
            <form onSubmit={handleSubmitStudentLogin} className="space-y-4">
              <div className="text-center mb-2">
                <h3 className="text-xl font-extrabold text-slate-800">Đăng Nhập Học Sinh</h3>
                <p className="text-xs text-slate-500">Tiếp tục hành trình tích sao và học tập Lớp 5</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tên đăng nhập</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: hocsinh1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mật khẩu</label>
                <input
                  type="password"
                  required
                  placeholder="Mật khẩu của bạn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                />
              </div>

              <div className="bg-sky-50 p-3 rounded-xl border border-sky-100 text-xs text-sky-800">
                💡 <strong>Tài khoản mẫu:</strong> Tên đăng nhập: <code className="bg-white px-1 py-0.5 rounded font-mono">hocsinh1</code> | Mật khẩu: <code className="bg-white px-1 py-0.5 rounded font-mono">123</code>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md hover:from-sky-600 hover:to-blue-700 transition-all"
              >
                Vào Học Ngay 🚀
              </button>
            </form>
          )}

          {/* TAB 2: STUDENT REGISTER */}
          {tab === 'register' && (
            <form onSubmit={handleSubmitStudentRegister} className="space-y-3.5">
              <div className="text-center mb-2">
                <h3 className="text-xl font-extrabold text-slate-800">Tạo Tài Khoản Học Sinh</h3>
                <p className="text-xs text-slate-500">Đăng ký mới để bắt đầu học tập và theo dõi điểm số</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Họ và tên học sinh</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn Minh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Lớp học</label>
                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-white"
                  >
                    <option value="5A">Lớp 5A</option>
                    <option value="5B">Lớp 5B</option>
                    <option value="5C">Lớp 5C</option>
                    <option value="5D">Lớp 5D</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tên đăng nhập</label>
                  <input
                    type="text"
                    required
                    placeholder="TenHocSinh"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mật khẩu</label>
                <input
                  type="password"
                  required
                  placeholder="Tạo mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Phone size={14} className="text-amber-500" />
                  Số điện thoại Phụ huynh
                </label>
                <input
                  type="tel"
                  placeholder="0912 345 678 (Tùy chọn/Bắt buộc)"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-md hover:from-emerald-600 hover:to-teal-700 transition-all mt-2"
              >
                Hoàn Tất Đăng Ký ✨
              </button>
            </form>
          )}

          {/* TAB 3: ADMIN / TEACHER LOGIN */}
          {tab === 'admin' && (
            <form onSubmit={handleSubmitAdmin} className="space-y-4">
              <div className="text-center mb-2">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl mx-auto flex items-center justify-center mb-2">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Quyền Giáo Viên / Quản Trị</h3>
                <p className="text-xs text-slate-500">Mở/khóa bài học & kiểm soát tiến độ học sinh</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mật khẩu Quản Trị (Admin Pass)</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Mật khẩu admin"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm pl-10"
                  />
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                Vào Trang Quản Lý 🛡️
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
