import React from 'react';
import { Download, X, Smartphone, Sparkles } from 'lucide-react';

export const PWAInstallBanner = ({ onInstall, onDismiss }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 animate-slideUp">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-md">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cài Đặt App Học Tập</span>
            </div>
            <h4 className="font-extrabold text-sm text-slate-100 mt-0.5">EduClass Lớp 5 PWA</h4>
            <p className="text-xs text-slate-400">Học không cần mạng, mở nhanh từ màn hình chính.</p>
          </div>
        </div>

        <button
          onClick={onDismiss}
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={onInstall}
          className="w-full py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Tải & Cài Đặt Ngay</span>
        </button>
      </div>
    </div>
  );
};
