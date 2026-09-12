import React, { useState } from 'react';
import { 
  Calculator, BookOpen, Languages, FlaskConical, Monitor, Landmark, 
  Lock, Unlock, ChevronRight, CheckCircle, Sparkles, Clock, Star, Folder, Grid, ListFilter
} from 'lucide-react';
import { SUBJECTS } from '../data/curriculumData';
import { storageService } from '../services/storageService';
import { MathLatex } from './MathLatex';

// Map icon string to Lucide component
const ICON_MAP = {
  Calculator,
  BookOpen,
  Languages,
  FlaskConical,
  Monitor,
  Landmark
};

export const SubjectGrid = ({ currentUser, onSelectLesson, onOpenAuth }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState('all');

  const SUBJECTS = storageService.getAllSubjects();

  const selectedSubject = selectedSubjectId !== 'all' 
    ? SUBJECTS.find(s => s.id === selectedSubjectId) 
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn font-sans">
      
      {/* Welcome Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white p-6 sm:p-10 shadow-xl overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute left-1/3 -top-10 w-48 h-48 bg-sky-300/20 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold mb-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Chương Trình Giáo Dục Lớp 5 Chuẩn GDPT 2018</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {currentUser 
              ? `Chào mừng ${currentUser.name}! 👋` 
              : 'Hệ Thống Học Tập & Luyện Thi Lớp 5'}
          </h1>

          <p className="text-sm sm:text-base text-sky-100 mt-2 font-medium leading-relaxed">
            <MathLatex text="Khám phá 6 môn học cốt lõi với phần **Lý thuyết sinh động** và **Bài tập vận dụng tương tác** (trắc nghiệm, đúng/sai, điền từ, điền đáp án số)." />
          </p>

          {!currentUser && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAuth}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold rounded-xl text-sm shadow-lg transition-transform transform active:scale-95 flex items-center gap-1.5"
              >
                <span>🔑 Đăng Nhập Học Sinh</span>
              </button>
              <button
                onClick={onOpenAuth}
                className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-extrabold rounded-xl text-sm border border-white/30 transition-transform transform active:scale-95 flex items-center gap-1.5"
              >
                <span>✨ Đăng Ký Tài Khoản Mới</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Eye-Catching Unauthenticated Warning Banner */}
      {!currentUser && (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-3xl p-5 shadow-lg border-2 border-amber-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl shrink-0 mt-0.5">
              <Sparkles className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black text-white uppercase tracking-wider mb-1">
                ⚠️ Cảnh báo tiến độ học tập
              </div>
              <h3 className="font-black text-base sm:text-lg tracking-tight">
                Em chưa đăng nhập tài khoản Học sinh!
              </h3>
              <p className="text-xs sm:text-sm text-amber-50 mt-1 leading-relaxed font-medium">
                Hãy <strong>Đăng ký tài khoản mới</strong> hoặc <strong>Đăng nhập</strong> để được hệ thống tự động tích lũy <strong>Điểm XP, Số ⭐ Sao, Huy hiệu</strong> và lưu tiến độ làm bài nhé!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto px-5 py-2.5 bg-white text-slate-900 hover:bg-amber-100 font-black rounded-xl text-xs sm:text-sm shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>🔑 ĐĂNG NHẬP / ĐĂNG KÝ NGAY</span>
            </button>
          </div>
        </div>
      )}

      {/* Subject Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedSubjectId('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            selectedSubjectId === 'all'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>Tất cả (6 môn)</span>
        </button>

        {SUBJECTS.map((sub) => {
          const IconComp = ICON_MAP[sub.icon] || BookOpen;
          const isSelected = selectedSubjectId === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setSelectedSubjectId(sub.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? `bg-gradient-to-r ${sub.color} text-white shadow-md`
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{sub.name} ({sub.lessons.length} bài)</span>
            </button>
          );
        })}
      </div>

      {/* MODE 1: ALL SUBJECTS CARDS GRID VIEW */}
      {selectedSubjectId === 'all' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => {
            const IconComp = ICON_MAP[subject.icon] || BookOpen;
            
            return (
              <div
                key={subject.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Header Band */}
                  <div className={`p-5 bg-gradient-to-r ${subject.color} text-white relative`}>
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        <IconComp className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold bg-black/20 backdrop-blur-xs px-3 py-1 rounded-full">
                        {subject.lessons.length} bài học
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold mt-3 tracking-tight">{subject.name}</h3>
                    <p className="text-xs text-white/80 line-clamp-1 mt-0.5">{subject.subTitle}</p>
                  </div>

                  {/* Lessons List inside card */}
                  <div className="p-4 space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                    {subject.lessons.map((lesson) => {
                      const isLocked = storageService.isLessonLocked(lesson);
                      const isCompleted = currentUser?.completedLessons?.includes(lesson.id);
                      const progress = storageService.getLessonProgress(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            if (isLocked) {
                              alert(`🔒 Bài học "${lesson.title}" hiện đang bị Giáo viên tạm khóa để kiểm soát tiến độ. Vui lòng quay lại sau!`);
                              return;
                            }
                            if (!currentUser) {
                              alert(`💡 Yêu cầu Đăng nhập: Em cần Đăng ký hoặc Đăng nhập tài khoản để vào học và tích sao nhé!`);
                              onOpenAuth();
                              return;
                            }
                            onSelectLesson(subject, lesson);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 group/item ${
                            isLocked
                              ? 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-85'
                              : 'bg-slate-50/50 hover:bg-white border-slate-200 hover:border-sky-300 hover:shadow-md text-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-start gap-2.5 min-w-0 pr-2">
                              <div className="mt-0.5 shrink-0">
                                {isLocked ? (
                                  <div className="p-1 rounded-lg bg-slate-200 text-slate-500">
                                    <Lock className="w-3.5 h-3.5" />
                                  </div>
                                ) : isCompleted ? (
                                  <div className="p-1 rounded-lg bg-emerald-100 text-emerald-600">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                  </div>
                                ) : (
                                  <div className="p-1 rounded-lg bg-sky-100 text-sky-600 group-hover/item:bg-sky-500 group-hover/item:text-white transition-colors">
                                    <BookOpen className="w-3.5 h-3.5" />
                                  </div>
                                )}
                              </div>

                              <div className="min-w-0">
                                <h4 className="text-xs font-bold line-clamp-1 group-hover/item:text-sky-600 transition-colors">
                                  {lesson.title}
                                </h4>
                                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                  {lesson.description}
                                </p>
                              </div>
                            </div>

                            <div className="shrink-0 flex items-center gap-1">
                              {isLocked ? (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">
                                  Khóa
                                </span>
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:translate-x-0.5 transition-transform" />
                              )}
                            </div>
                          </div>

                          {/* Progress Bar for Completed / Attempted Exercises */}
                          {progress && (
                            <div className="w-full pt-1.5 border-t border-slate-100/80 space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-bold">
                                <span className={progress.percentage >= 80 ? 'text-emerald-700 font-extrabold' : progress.percentage >= 50 ? 'text-amber-700 font-extrabold' : 'text-rose-600 font-black'}>
                                  {progress.percentage >= 80 ? '🌟 Giỏi' : progress.percentage >= 50 ? '👍 Khá' : '⚠️ Ôn lại'} ({progress.percentage}%)
                                </span>
                                <span className="text-slate-500">{progress.score}/{progress.totalQuestions} câu</span>
                              </div>
                              <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    progress.percentage >= 80 ? 'bg-emerald-500' : progress.percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500 animate-pulse'
                                  }`}
                                  style={{ width: `${progress.percentage}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer */}
                <button
                  onClick={() => setSelectedSubjectId(subject.id)}
                  className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 hover:bg-sky-50 transition-colors"
                >
                  <span>Xem đầy đủ danh sách {subject.lessons.length} bài học</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* MODE 2: FULL-WIDTH EXPANDED DETAILED SUBJECT SYLLABUS VIEW */}
      {selectedSubject && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Subject Header Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${selectedSubject.color} text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4`}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 backdrop-blur-md text-xs font-extrabold px-3 py-1 rounded-full">
                  Môn Học Lớp 5
                </span>
                <span className="bg-black/20 text-xs font-bold px-3 py-1 rounded-full">
                  {selectedSubject.lessons.length} bài học chuẩn
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">{selectedSubject.name}</h2>
              <p className="text-sm text-white/90 mt-1">{selectedSubject.subTitle}</p>
            </div>

            <button
              onClick={() => setSelectedSubjectId('all')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-extrabold transition-colors shrink-0 self-start md:self-auto"
            >
              ← Xem tất cả các môn
            </button>
          </div>

          {/* Group Lessons by Theme if themes exist */}
          <div className="space-y-6">
            {(() => {
              // Group lessons by theme
              const themesMap = {};
              selectedSubject.lessons.forEach(les => {
                const themeName = les.theme || 'Danh sách Bài học';
                if (!themesMap[themeName]) themesMap[themeName] = [];
                themesMap[themeName].push(les);
              });

              return Object.entries(themesMap).map(([themeTitle, themeLessons], themeIdx) => (
                <div key={themeIdx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                      <Folder className="w-5 h-5 text-emerald-600" />
                      <span>{themeTitle}</span>
                    </h3>
                    <span className="text-xs font-bold text-slate-400">({themeLessons.length} bài)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {themeLessons.map((lesson) => {
                      const isLocked = storageService.isLessonLocked(lesson);
                      const isCompleted = currentUser?.completedLessons?.includes(lesson.id);
                      const progress = storageService.getLessonProgress(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-2xl border transition-all flex flex-col justify-between group ${
                            isLocked
                              ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-85'
                              : 'bg-white hover:bg-sky-50/40 border-slate-200 hover:border-sky-300 hover:shadow-md text-slate-800'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                                isLocked 
                                  ? 'bg-slate-200 text-slate-600' 
                                  : progress && progress.percentage < 50
                                  ? 'bg-rose-100 text-rose-800'
                                  : isCompleted 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : 'bg-sky-100 text-sky-800'
                              }`}>
                                {isLocked 
                                  ? '🔒 Đã Khóa' 
                                  : progress && progress.percentage < 50
                                  ? '⚠️ Điểm Thấp - Cần Ôn Lại'
                                  : isCompleted 
                                  ? '✅ Đã Hoàn Thành' 
                                  : '📖 Đang Mở'}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">{lesson.duration}</span>
                            </div>

                            <h4 className="font-extrabold text-sm sm:text-base text-slate-800 group-hover:text-sky-600 transition-colors mb-1">
                              {lesson.title}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                              {lesson.description}
                            </p>

                            {/* Progress Bar & Review Prompt */}
                            {progress && (
                              <div className="mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 space-y-1">
                                <div className="flex items-center justify-between text-[11px] font-extrabold">
                                  <span className={progress.percentage >= 80 ? 'text-emerald-700' : progress.percentage >= 50 ? 'text-amber-700' : 'text-rose-600'}>
                                    {progress.percentage >= 80 ? '🏆 Đạt loại Giỏi' : progress.percentage >= 50 ? '👍 Đạt loại Khá' : '🔄 Cần ôn tập lại'} ({progress.percentage}%)
                                  </span>
                                  <span className="text-slate-500 font-bold">{progress.score}/{progress.totalQuestions} câu</span>
                                </div>

                                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
                                  <div 
                                    className={`h-full rounded-full transition-all duration-500 ${
                                      progress.percentage >= 80 
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                                        : progress.percentage >= 50 
                                        ? 'bg-gradient-to-r from-amber-400 to-amber-500' 
                                        : 'bg-gradient-to-r from-rose-500 to-pink-600 animate-pulse'
                                    }`}
                                    style={{ width: `${progress.percentage}%` }}
                                  />
                                </div>

                                {progress.percentage < 50 && (
                                  <p className="text-[10px] font-bold text-rose-600 pt-0.5">
                                    💡 Kết quả chưa đạt 50%, em hãy vào làm ôn tập lại nhé!
                                  </p>
                                )}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              if (isLocked) {
                                alert(`🔒 Bài học "${lesson.title}" hiện đang bị Giáo viên tạm khóa để kiểm soát tiến độ. Vui lòng quay lại sau!`);
                                return;
                              }
                              if (!currentUser) {
                                alert(`💡 Yêu cầu Đăng nhập: Em cần Đăng ký hoặc Đăng nhập tài khoản để vào học và tích sao nhé!`);
                                onOpenAuth();
                                return;
                              }
                              onSelectLesson(selectedSubject, lesson);
                            }}
                            disabled={isLocked}
                            className={`w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                              isLocked
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : progress && progress.percentage < 50
                                ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-md animate-bounce'
                                : progress
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-sm'
                                : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sm'
                            }`}
                          >
                            <span>
                              {isLocked
                                ? 'Tạm Khóa'
                                : progress
                                ? progress.percentage < 50
                                  ? '🔄 Ôn Tập & Làm Lại Ngay'
                                  : '✨ Làm Ôn Tập Lại'
                                : 'Học Bài Ngay'}
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ));
            })()}
          </div>

        </div>
      )}

    </div>
  );
};
