import React, { useState } from 'react';
import { 
  Lock, Unlock, Shield, Users, Award, CheckCircle2, RotateCcw, ArrowLeft, Search, Check, 
  AlertCircle, Edit3, Plus, Trash2, Save, FileText, HelpCircle, Volume2, Sparkles, BookOpen,
  FileCode, UploadCloud, Copy, FileSpreadsheet, Eye, Image, Upload
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { MathLatex } from './MathLatex';

// Smart Parser for Word / LaTeX / Azota text format
export const parseWordLatexQuestions = (rawText) => {
  if (!rawText || !rawText.trim()) return [];

  // Split text into question blocks based on "Câu 1:", "Bài 1:", "Question 1:", "1.", etc.
  const blocks = rawText
    .split(/(?=(?:Câu|Bài|Question|\d+)[\s:]*\d+[\s:.\)\/])/gi)
    .filter(b => b.trim().length > 0);

  const parsedList = [];

  blocks.forEach((block, idx) => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) return;

    let questionText = lines[0];
    // Strip "Câu 1:", "Bài 1:" header prefixes
    questionText = questionText.replace(/^(?:Câu|Bài|Question|\d+)[\s:]*\d+[\s:.\)\/]\s*/i, '').trim();

    let options = [];
    let answerIndex = 0;
    let explanation = '';
    let isTrue = true;

    // Detect image URL in block if present
    let imageUrl = '';
    const imgMatch = block.match(/!\[.*?\]\((.*?)\)|\[(?:img|hinh|ảnh|image):\s*(.*?)\]|(https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp|svg))/i);
    if (imgMatch) {
      imageUrl = (imgMatch[1] || imgMatch[2] || imgMatch[3] || '').trim();
    }

    lines.slice(1).forEach(line => {
      const optMatch = line.match(/^([A-D])[\s:.\)\/]\s*(.*)/i);
      const ansMatch = line.match(/^(?:Đáp\s*án|Đáp\s*án\s*đúng|Key|Answer)[:\s]*([A-D])/i);
      const expMatch = line.match(/^(?:Giải\s*thích|Hướng\s*dẫn|Lời\s*giải)[:\s]*(.*)/i);

      if (ansMatch) {
        const char = ansMatch[1].toUpperCase();
        answerIndex = char.charCodeAt(0) - 65; // A -> 0, B -> 1, C -> 2, D -> 3
      } else if (expMatch) {
        explanation = expMatch[1].trim();
      } else if (optMatch) {
        const char = optMatch[1].toUpperCase();
        const optText = optMatch[2].trim();
        options.push(optText);
        if (line.startsWith('*')) {
          answerIndex = char.charCodeAt(0) - 65;
        }
      } else if (options.length === 0 && !line.match(/^(?:https?:\/\/|!\[|\[(?:img|hinh|ảnh))/i)) {
        questionText += ' ' + line;
      }
    });

    if (questionText) {
      const qObj = {
        id: 'q_azota_' + Date.now() + '_' + idx,
        type: options.length > 0 ? 'mcq' : 'short_answer',
        question: questionText,
        explanation: explanation || 'Nội dung trích xuất tự động từ file Word/LaTeX chuẩn Azota.'
      };
      if (imageUrl) qObj.imageUrl = imageUrl;

      if (options.length > 0) {
        qObj.options = options;
        qObj.answerIndex = Math.min(Math.max(0, answerIndex), options.length - 1);
      } else {
        qObj.answer = '1';
      }
      parsedList.push(qObj);
    }
  });

  return parsedList;
};

export const AdminPanel = ({ onBack, onUpdateOverwrites }) => {
  const [activeTab, setActiveTab] = useState('editor'); // 'editor' | 'word_import' | 'lessons' | 'students'
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState('');

  // Get subjects (including custom overrides)
  const allSubjects = storageService.getAllSubjects();

  // State for Lesson & Question Editor
  const [selectedSubId, setSelectedSubId] = useState(allSubjects[0]?.id || 'toan');
  const selectedSubject = allSubjects.find(s => s.id === selectedSubId) || allSubjects[0];
  
  const [selectedLessonId, setSelectedLessonId] = useState(selectedSubject?.lessons[0]?.id || '');
  const activeLesson = selectedSubject?.lessons.find(l => l.id === selectedLessonId) || selectedSubject?.lessons[0];

  // Editable lesson state
  const [editTitle, setEditTitle] = useState(activeLesson?.title || '');
  const [editTheme, setEditTheme] = useState(activeLesson?.theme || '');
  const [editDescription, setEditDescription] = useState(activeLesson?.description || '');
  const [editDuration, setEditDuration] = useState(activeLesson?.duration || '35 phút');
  const [editSummary, setEditSummary] = useState(activeLesson?.theory?.summary || '');
  const [editAudioText, setEditAudioText] = useState(activeLesson?.theory?.audioText || '');
  const [exercisesList, setExercisesList] = useState(activeLesson?.exercises || []);

  // New single question form state
  const [qType, setQType] = useState('mcq');
  const [qQuestion, setQQuestion] = useState('');
  const [qImageUrl, setQImageUrl] = useState('');
  const [qOptionA, setQOptionA] = useState('');
  const [qOptionB, setQOptionB] = useState('');
  const [qOptionC, setQOptionC] = useState('');
  const [qOptionD, setQOptionD] = useState('');
  const [qAnswerIndex, setQAnswerIndex] = useState(0);
  const [qIsTrue, setQIsTrue] = useState(true);
  const [qFillAnswer, setQFillAnswer] = useState('');
  const [qExplanation, setQExplanation] = useState('');

  // Interactive Question Types (Matching & Drag-Drop) Admin States
  const [qMatchingPairs, setQMatchingPairs] = useState([
    { left: '', right: '' },
    { left: '', right: '' },
    { left: '', right: '' }
  ]);
  const [qDragSubtype, setQDragSubtype] = useState('fill_blanks');
  const [qDragTemplate, setQDragTemplate] = useState('');
  const [qDragOptionsText, setQDragOptionsText] = useState('');
  const [qDragCorrectAnswersText, setQDragCorrectAnswersText] = useState('');
  const [qDragInitialItemsText, setQDragInitialItemsText] = useState('');
  const [qDragCorrectOrderText, setQDragCorrectOrderText] = useState('');

  // Handle Image File Upload to Data URL (Base64)
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Vui lòng chọn file ảnh dung lượng dưới 5MB!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      setQImageUrl(evt.target?.result || '');
    };
    reader.readAsDataURL(file);
  };

  // Smart Word/LaTeX/Azota import state
  const [importRawText, setImportRawText] = useState('');
  const parsedImportQuestions = parseWordLatexQuestions(importRawText);

  // Sync lesson form when selected lesson changes
  const handleSelectLessonToEdit = (lesson) => {
    setSelectedLessonId(lesson.id);
    setEditTitle(lesson.title || '');
    setEditTheme(lesson.theme || '');
    setEditDescription(lesson.description || '');
    setEditDuration(lesson.duration || '35 phút');
    setEditSummary(lesson.theory?.summary || '');
    setEditAudioText(lesson.theory?.audioText || '');
    setExercisesList(lesson.exercises ? JSON.parse(JSON.stringify(lesson.exercises)) : []);
  };

  // Sync when subject tab changes
  const handleSubjectChange = (subId) => {
    setSelectedSubId(subId);
    const sub = allSubjects.find(s => s.id === subId);
    if (sub && sub.lessons.length > 0) {
      handleSelectLessonToEdit(sub.lessons[0]);
    }
  };

  const overwrites = storageService.getLockOverwrites();
  const students = storageService.getStudents();
  const scores = storageService.getStudentScores();

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3500);
  };

  const handleToggleLock = async (lessonId) => {
    const isNowLocked = await storageService.toggleLessonLock(lessonId);
    onUpdateOverwrites();
    showNotification(`Đã ${isNowLocked ? 'KHÓA 🔒' : 'MỞ 🔓'} bài học!`);
  };

  const handleUnlockAll = async () => {
    await storageService.unlockAllLessons();
    onUpdateOverwrites();
    showNotification('Đã MỞ TẤT CẢ 🔓 bài học cho học sinh!');
  };

  const handleLockAll = async () => {
    if (window.confirm('Bạn có chắc chắn muốn KHÓA TẤT CẢ các bài học trên hệ thống không?')) {
      await storageService.lockAllLessons();
      onUpdateOverwrites();
      showNotification('Đã KHÓA TẤT CẢ 🔒 bài học trên hệ thống!');
    }
  };

  // Add new single question
  const handleAddQuestion = () => {
    if (!qQuestion.trim()) {
      alert('Vui lòng nhập nội dung câu hỏi!');
      return;
    }

    const newQ = {
      id: 'q_custom_' + Date.now(),
      type: qType,
      question: qQuestion,
      explanation: qExplanation || 'Đáp án chính xác theo chương trình học.'
    };
    if (qImageUrl.trim()) {
      newQ.imageUrl = qImageUrl.trim();
    }

    if (qType === 'mcq') {
      if (!qOptionA || !qOptionB) {
        alert('Vui lòng nhập tối thiểu Đáp án A và Đáp án B!');
        return;
      }
      const opts = [qOptionA, qOptionB];
      if (qOptionC) opts.push(qOptionC);
      if (qOptionD) opts.push(qOptionD);
      newQ.options = opts;
      newQ.answerIndex = parseInt(qAnswerIndex, 10) || 0;
    } else if (qType === 'true_false') {
      newQ.isTrue = qIsTrue;
    } else if (qType === 'fill_blank' || qType === 'short_answer') {
      if (!qFillAnswer.trim()) {
        alert('Vui lòng nhập đáp án chuẩn!');
        return;
      }
      newQ.answer = qFillAnswer.trim();
    } else if (qType === 'matching') {
      const validPairs = qMatchingPairs.filter(p => p.left.trim() && p.right.trim());
      if (validPairs.length < 2) {
        alert('Vui lòng nhập tối thiểu 2 cặp nối Cột A <-> Cột B!');
        return;
      }
      newQ.pairs = validPairs.map(p => ({ left: p.left.trim(), right: p.right.trim() }));
      newQ.skillLabel = '🧩 NỐI CÂU / NỐI VẾ';
    } else if (qType === 'drag_drop') {
      newQ.subtype = qDragSubtype;
      newQ.skillLabel = '🎯 KÉO THẢ TƯƠNG TÁC';
      if (qDragSubtype === 'fill_blanks') {
        if (!qDragTemplate.trim() || !qDragOptionsText.trim() || !qDragCorrectAnswersText.trim()) {
          alert('Vui lòng nhập đầy đủ Đoạn văn mẫu, Danh sách từ gợi ý và Đáp án điền!');
          return;
        }
        newQ.template = qDragTemplate.trim();
        newQ.options = qDragOptionsText.split(',').map(s => s.trim()).filter(Boolean);
        newQ.correctAnswers = qDragCorrectAnswersText.split(',').map(s => s.trim()).filter(Boolean);
      } else if (qDragSubtype === 'reorder') {
        if (!qDragCorrectOrderText.trim()) {
          alert('Vui lòng nhập mảng thứ tự các từ/vế chính xác!');
          return;
        }
        const orderArr = qDragCorrectOrderText.split(',').map(s => s.trim()).filter(Boolean);
        newQ.correctOrder = orderArr;
        newQ.initialItems = qDragInitialItemsText.trim() 
          ? qDragInitialItemsText.split(',').map(s => s.trim()).filter(Boolean)
          : [...orderArr].sort(() => Math.random() - 0.5);
      }
    }

    setExercisesList([...exercisesList, newQ]);

    setQQuestion('');
    setQImageUrl('');
    setQOptionA('');
    setQOptionB('');
    setQOptionC('');
    setQOptionD('');
    setQFillAnswer('');
    setQExplanation('');
    setQMatchingPairs([{ left: '', right: '' }, { left: '', right: '' }, { left: '', right: '' }]);
    setQDragTemplate('');
    setQDragOptionsText('');
    setQDragCorrectAnswersText('');
    setQDragInitialItemsText('');
    setQDragCorrectOrderText('');
    showNotification('Đã thêm 1 câu hỏi mới vào danh sách câu hỏi!');
  };

  // Batch import questions from parsed Word / LaTeX text
  const handleExecuteBatchImport = () => {
    if (parsedImportQuestions.length === 0) {
      alert('Chưa phát hiện câu hỏi hợp lệ trong văn bản! Vui lòng kiểm tra định dạng.');
      return;
    }

    const mergedExercises = [...exercisesList, ...parsedImportQuestions];
    setExercisesList(mergedExercises);

    // Save lesson automatically
    const updatedLesson = {
      id: selectedLessonId || `custom-les-${Date.now()}`,
      theme: editTheme || 'Chủ đề bổ sung',
      title: editTitle,
      description: editDescription,
      duration: editDuration,
      isLocked: false,
      theory: {
        summary: editSummary || 'Nội dung lý thuyết trọng tâm bài học.',
        sections: activeLesson?.theory?.sections || [
          {
            title: `1. Lý thuyết trọng tâm: ${editTitle}`,
            text: `${editDescription}\nHọc sinh cần đọc kỹ bài và áp dụng vào các bài tập vận dụng.`,
            highlights: ['Đọc kỹ lý thuyết trước khi làm bài tập']
          }
        ],
        audioText: editAudioText || editDescription
      },
      exercises: mergedExercises
    };

    storageService.saveLesson(selectedSubId, updatedLesson);
    onUpdateOverwrites();

    showNotification(`🚀 Đã NHẬP THÀNH CÔNG ${parsedImportQuestions.length} câu hỏi từ Word/LaTeX vào bài "${editTitle}"!`);
    setImportRawText('');
    setActiveTab('editor');
  };

  // Fill sample Azota template text for quick test
  const handlePasteSampleAzotaText = () => {
    const sample = `Câu 1: Tính giá trị của biểu thức toán học: $\\frac{1}{2} + \\frac{1}{3} = ?$
A. $\\frac{2}{5}$
B. $\\frac{5}{6}$
C. $\\frac{1}{6}$
D. $\\frac{2}{6}$
Đáp án: B
Giải thích: Quy đồng mẫu số chung là 6: 3/6 + 2/6 = 5/6.

Câu 2: Hình thang có hai đáy lần lượt là $a = 8cm$, $b = 6cm$ và chiều cao $h = 4cm$. Diện tích hình thang là bao nhiêu $cm^2$?
A. 28 $cm^2$
B. 56 $cm^2$
C. 14 $cm^2$
D. 32 $cm^2$
Đáp án: A
Giải thích: Công thức diện tích hình thang $S = \\frac{(a+b)h}{2} = \\frac{(8+6) \\times 4}{2} = 28 cm^2$.

Câu 3: Đốt cháy một tờ giấy tạo thành tro và khí là sự biến đổi hóa học. Đúng hay Sai?
A. Đúng
B. Sai
Đáp án: A
Giải thích: Hiện tượng tạo ra chất mới là sự biến đổi hóa học.`;

    setImportRawText(sample);
  };

  // Delete single question from editing list
  const handleDeleteQuestion = (qId) => {
    setExercisesList(exercisesList.filter(q => q.id !== qId));
    showNotification('Đã xóa câu hỏi khỏi danh sách!');
  };

  // Save Lesson and Exercises to Storage
  const handleSaveLesson = () => {
    if (!editTitle.trim()) {
      alert('Vui lòng nhập Tiêu đề bài học!');
      return;
    }

    const updatedLesson = {
      id: selectedLessonId || `custom-les-${Date.now()}`,
      theme: editTheme || 'Chủ đề bổ sung',
      title: editTitle,
      description: editDescription,
      duration: editDuration,
      isLocked: false,
      theory: {
        summary: editSummary || 'Nội dung lý thuyết trọng tâm bài học.',
        sections: activeLesson?.theory?.sections || [
          {
            title: `1. Lý thuyết trọng tâm: ${editTitle}`,
            text: `${editDescription}\nHọc sinh cần đọc kỹ bài và áp dụng vào các bài tập vận dụng.`,
            highlights: ['Đọc kỹ lý thuyết trước khi làm bài tập']
          }
        ],
        audioText: editAudioText || editDescription
      },
      exercises: exercisesList
    };

    storageService.saveLesson(selectedSubId, updatedLesson);
    onUpdateOverwrites();
    showNotification(`💾 Đã LƯU THÀNH CÔNG bài học "${editTitle}" với ${exercisesList.length} câu hỏi!`);
  };

  // Create brand new lesson
  const handleCreateNewLesson = () => {
    const newId = `${selectedSubId}-new-${Date.now()}`;
    const newLessonObj = {
      id: newId,
      theme: 'Chủ đề bổ sung mới',
      title: 'Bài mới: Nhập tiêu đề bài học tại đây',
      description: 'Nhập mô tả ngắn cho bài học...',
      duration: '35 phút',
      isLocked: false,
      theory: {
        summary: 'Tóm tắt lý thuyết...',
        audioText: 'Giọng đọc tự động...'
      },
      exercises: []
    };

    handleSelectLessonToEdit(newLessonObj);
    showNotification('Đã khởi tạo form bài học mới. Hãy chỉnh sửa và bấm Lưu!');
  };

  // Stats calculation
  let totalLessonsCount = 0;
  let unlockedLessonsCount = 0;

  allSubjects.forEach(sub => {
    sub.lessons.forEach(les => {
      totalLessonsCount++;
      const isLocked = storageService.isLessonLocked(les);
      if (!isLocked) unlockedLessonsCount++;
    });
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn font-sans">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-sm font-extrabold border border-slate-700 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Shield className="w-80 h-80 text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-xs mb-3 text-purple-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Về trang chủ
            </button>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/30 rounded-2xl border border-purple-400/30 backdrop-blur-md">
                <Shield className="w-8 h-8 text-purple-200" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Bảng Quản Lý Giáo Viên & Admin</h1>
                <p className="text-purple-200 text-sm mt-0.5">Biên tập bài học, trích xuất câu hỏi từ file Word/LaTeX chuẩn Azota, khóa/mở bài và xem điểm số</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleUnlockAll}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-purple-950 font-extrabold rounded-xl text-xs sm:text-sm shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2 shrink-0"
          >
            <Unlock className="w-4 h-4" />
            <span>Mở Khóa Tất Cả Bài Học 🔓</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-purple-700/50">
          <div className="bg-purple-950/40 rounded-2xl p-4 border border-purple-700/40 backdrop-blur-xs flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl">
              <Unlock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-purple-300 font-medium">Bài học đang mở</p>
              <p className="text-xl sm:text-2xl font-black text-white">{unlockedLessonsCount} / {totalLessonsCount}</p>
            </div>
          </div>

          <div className="bg-purple-950/40 rounded-2xl p-4 border border-purple-700/40 backdrop-blur-xs flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-purple-300 font-medium">Học sinh đăng ký</p>
              <p className="text-xl sm:text-2xl font-black text-white">{students.length} em</p>
            </div>
          </div>

          <div className="bg-purple-950/40 rounded-2xl p-4 border border-purple-700/40 backdrop-blur-xs flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-purple-300 font-medium">Lượt bài kiểm tra xong</p>
              <p className="text-xl sm:text-2xl font-black text-white">{scores.length} lượt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Navigation Tabs Header */}
        <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'editor'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Edit3 className="w-4 h-4 text-amber-300" />
              <span>Biên Tập Bài Học & Thêm Câu Hỏi ✏️</span>
            </button>

            <button
              onClick={() => setActiveTab('word_import')}
              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'word_import'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileCode className="w-4 h-4 text-sky-300" />
              <span>Nhập Đề Tự Động Từ Word / LaTeX ⚡</span>
            </button>

            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'lessons'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Khóa / Mở Bài Học 🔒</span>
            </button>

            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'students'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Báo Cáo Điểm Học Sinh 📊</span>
            </button>
          </div>

          {activeTab === 'students' && (
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Tìm tên học sinh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          )}
        </div>

        {/* TAB 2: SMART WORD & LATEX / AZOTA IMPORT TOOL */}
        {activeTab === 'word_import' && (
          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-3xl p-6 shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-extrabold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Bộ Trích Xuất Thông Minh Chuẩn Azota & LaTeX</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Nhập Hàng Loạt Câu Hỏi Từ File Word / LaTeX
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Sao chép toàn bộ văn bản đề thi từ Microsoft Word hoặc LaTeX dán vào ô bên dưới. Hệ thống AI tự động phân tích câu hỏi, các đáp án A/B/C/D, đáp án đúng và công thức toán KaTeX!
                  </p>
                </div>

                <button
                  onClick={handlePasteSampleAzotaText}
                  className="px-4 py-2 bg-white hover:bg-sky-100 text-sky-800 border border-sky-300 rounded-xl text-xs font-extrabold shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Copy className="w-4 h-4" />
                  <span>Dán Mẫu Đề Thử Nghiệm</span>
                </button>
              </div>
            </div>

            {/* Target Lesson Banner */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-purple-700 font-bold">Môn & Bài học mục tiêu để nhập câu hỏi:</span>
                <h4 className="font-extrabold text-sm text-purple-950">
                  Môn {selectedSubject.name} ➔ [{activeLesson?.theme || 'Chủ đề'}] {activeLesson?.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveTab('editor')}
                className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
              >
                Đổi Bài Học Mục Tiêu ✏️
              </button>
            </div>

            {/* Textarea for Word / LaTeX Input */}
            <div className="space-y-2">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
                Dán Nội Dung Đề Thi Từ Word / Text / LaTeX
              </label>
              <textarea
                rows={10}
                value={importRawText}
                onChange={(e) => setImportRawText(e.target.value)}
                className="w-full p-4 rounded-2xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-sky-500 bg-slate-900 text-sky-300 leading-relaxed shadow-inner"
                placeholder="Dán nội dung từ Word vào đây (VD: Câu 1: ... A. ... B. ... C. ... D. ... Đáp án: A)..."
              />
            </div>

            {/* Real-time Parsed Preview Section */}
            {importRawText.trim() && (
              <div className="border border-slate-200 rounded-3xl p-6 bg-slate-50 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-600" />
                    <span>Kết Quả Phân Tích Thực Tế: Phát Hiện {parsedImportQuestions.length} Câu Hỏi Hợp Lệ</span>
                  </h4>

                  <button
                    onClick={handleExecuteBatchImport}
                    disabled={parsedImportQuestions.length === 0}
                    className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 text-white text-xs font-black rounded-xl shadow-md transition-transform transform active:scale-95 flex items-center gap-2"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>🚀 NHẬP HÀNG LOẠT {parsedImportQuestions.length} CÂU HỎI VÀO BÀI HỌC</span>
                  </button>
                </div>

                {parsedImportQuestions.length === 0 ? (
                  <div className="text-center py-6 text-rose-600 text-xs font-bold">
                    ⚠️ Chưa nhận diện được câu hỏi. Hãy kiểm tra định dạng văn bản (Ví dụ: "Câu 1: ... A. ... B. ... C. ... D. ... Đáp án: A").
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-1">
                    {parsedImportQuestions.map((pq, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
                            Câu {pIdx + 1}
                          </span>
                          {pq.options && (
                            <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                              Đáp án đúng: {String.fromCharCode(65 + pq.answerIndex)}
                            </span>
                          )}
                        </div>

                        <div className="font-extrabold text-xs text-slate-800">
                          <MathLatex text={pq.question} />
                        </div>

                        {pq.options && (
                          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] text-slate-600">
                            {pq.options.map((opt, oIdx) => (
                              <div key={oIdx} className={`px-2 py-1 rounded-lg border ${oIdx === pq.answerIndex ? 'bg-emerald-50 border-emerald-300 font-black text-emerald-900' : 'bg-slate-50 border-slate-200'}`}>
                                {String.fromCharCode(65 + oIdx)}. <MathLatex text={opt} />
                              </div>
                            ))}
                          </div>
                        )}

                        {pq.explanation && (
                          <p className="text-[10px] text-slate-400 italic pt-1">
                            💡 {pq.explanation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* TAB 1: LESSON & QUESTION EDITOR (EDITOR) */}
        {activeTab === 'editor' && (
          <div className="p-6 space-y-8">
            
            {/* Step 1: Select Subject */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                1. Chọn Môn Học Cần Chỉnh Sửa / Thêm Bài
              </label>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {allSubjects.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubjectChange(sub.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
                      selectedSubId === sub.id
                        ? `bg-gradient-to-r ${sub.color} text-white shadow-md`
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{sub.name} ({sub.lessons.length} bài)</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Lesson or Add New */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  2. Chọn Bài Học Cần Sửa (Môn {selectedSubject.name})
                </label>
                <button
                  onClick={handleCreateNewLesson}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs shadow-xs flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Tạo Bài Học Mới Chi Tiết</span>
                </button>
              </div>

              <select
                value={selectedLessonId}
                onChange={(e) => {
                  const les = selectedSubject.lessons.find(l => l.id === e.target.value);
                  if (les) handleSelectLessonToEdit(les);
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-extrabold text-sm text-slate-800 bg-white focus:ring-2 focus:ring-purple-500 shadow-xs"
              >
                {selectedSubject.lessons.map(les => (
                  <option key={les.id} value={les.id}>
                    [{les.theme || 'Chủ đề'}] {les.title} ({les.exercises?.length || 0} câu hỏi)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Lesson Theory Content Editor */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-white space-y-5 shadow-xs">
              <h3 className="text-base font-black text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>3. Nội Dung Lý Thuyết & Thông Tin Bài Học</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Tiêu đề bài học</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-bold text-sm"
                    placeholder="Nhập tiêu đề bài học..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Tên Chủ đề (Folder theme)</label>
                  <input
                    type="text"
                    value={editTheme}
                    onChange={(e) => setEditTheme(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-bold text-sm"
                    placeholder="Ví dụ: Chủ đề 1. Ôn tập..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Thời lượng học</label>
                  <input
                    type="text"
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-semibold"
                    placeholder="35 phút"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-600 mb-1">Mô tả ngắn hiển thị ở danh mục</label>
                  <input
                    type="text"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm"
                    placeholder="Mô tả nội dung bài học..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Tóm tắt lý thuyết (Tab 1)</label>
                <textarea
                  rows={3}
                  value={editSummary}
                  onChange={(e) => setEditSummary(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                  placeholder="Nhập nội dung tóm tắt lý thuyết trọng tâm..."
                />
              </div>

              {selectedSubId === 'tienganh' && (
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-sky-600" />
                    <span>Văn bản Giọng đọc phát âm chuẩn tiếng Anh (Audio Speech 🔊)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={editAudioText}
                    onChange={(e) => setEditAudioText(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-sky-50/50"
                    placeholder="Nhập đoạn văn tiếng Anh phát âm mẫu..."
                  />
                </div>
              )}
            </div>

            {/* Step 4: Questions Management & New Question Creator */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-white space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <span>4. Danh Sách Câu Hỏi Bài Tập ({exercisesList.length} câu)</span>
                </h3>

                <button
                  onClick={() => setActiveTab('word_import')}
                  className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <FileCode className="w-4 h-4" />
                  <span>⚡ Nhập Đề Từ File Word / LaTeX</span>
                </button>
              </div>

              {/* Current Question List */}
              {exercisesList.length === 0 ? (
                <div className="text-center py-8 bg-amber-50/60 rounded-2xl border border-dashed border-amber-200">
                  <p className="text-amber-800 text-xs font-bold">Bài học này chưa có câu hỏi nào. Hãy thêm câu hỏi bên dưới hoặc nhập tự động từ File Word!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {exercisesList.map((q, qIdx) => (
                    <div key={q.id || qIdx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-black bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                            Câu {qIdx + 1} ({
                              q.type === 'mcq' ? 'Trắc nghiệm' : 
                              q.type === 'true_false' ? 'Đúng/Sai' : 
                              q.type === 'fill_blank' ? 'Điền từ' : 
                              q.type === 'matching' ? '🧩 Nối câu' : 
                              q.type === 'drag_drop' ? '🎯 Kéo thả' : 
                              'Đáp án ngắn'
                            })
                          </span>
                        </div>
                        <h4 className="font-extrabold text-sm text-slate-800 mb-1">
                          <MathLatex text={q.question} />
                        </h4>
                        {q.imageUrl && (
                          <div className="my-2 flex items-center gap-2">
                            <img src={q.imageUrl} alt="Hình minh họa" className="h-12 w-auto object-contain rounded-lg border bg-white p-0.5" />
                            <span className="text-[11px] text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded-md">🖼️ Đã có hình minh họa</span>
                          </div>
                        )}
                        {q.options && q.type === 'mcq' && (
                          <div className="text-xs text-slate-500 flex flex-wrap gap-2">
                            {q.options.map((opt, oIdx) => (
                              <span key={oIdx} className={oIdx === q.answerIndex ? 'font-black text-emerald-600 underline' : ''}>
                                {String.fromCharCode(65 + oIdx)}. <MathLatex text={opt} />
                              </span>
                            ))}
                          </div>
                        )}
                        {q.pairs && (
                          <div className="text-xs text-slate-600 bg-purple-50 p-2 rounded-xl border border-purple-100 flex flex-wrap gap-2 my-1">
                            {q.pairs.map((p, pIdx) => (
                              <span key={pIdx} className="bg-white px-2 py-0.5 rounded-md border font-semibold">
                                {p.left} ➔ {p.right}
                              </span>
                            ))}
                          </div>
                        )}
                        {q.type === 'drag_drop' && (
                          <div className="text-xs text-slate-600 bg-sky-50 p-2 rounded-xl border border-sky-100 my-1 space-y-1">
                            {q.template && <p className="font-medium">Văn mẫu: "{q.template}"</p>}
                            {q.correctAnswers && <p className="font-bold text-emerald-700">Đáp án chuẩn: {q.correctAnswers.join(', ')}</p>}
                            {q.correctOrder && <p className="font-bold text-emerald-700">Thứ tự đúng: {q.correctOrder.join(' ')}</p>}
                          </div>
                        )}
                        {q.answer && <p className="text-xs font-bold text-emerald-600">Đáp án chuẩn: {q.answer}</p>}
                        {q.isTrue !== undefined && <p className="text-xs font-bold text-emerald-600">Đáp án: {q.isTrue ? 'ĐÚNG' : 'SAI'}</p>}
                      </div>

                      <button
                        onClick={() => handleDeleteQuestion(q.id)}
                        className="p-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors shrink-0"
                        title="Xóa câu hỏi"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Form to Add New Single Question */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-purple-200 space-y-4">
                <h4 className="font-extrabold text-sm text-purple-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-purple-600" />
                  <span>+ Thêm 1 Câu Hỏi Thủ Công Cho Bài Học Này</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Loại dạng câu hỏi</label>
                    <select
                      value={qType}
                      onChange={(e) => setQType(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    >
                      <option value="mcq">📝 Trắc nghiệm (Multiple Choice)</option>
                      <option value="true_false">🟢/🔴 Đúng hay Sai (True / False)</option>
                      <option value="fill_blank">✏️ Điền vào chỗ trống (Fill in blank)</option>
                      <option value="short_answer">🔢 Đáp án ngắn / Số (Short Answer)</option>
                      <option value="matching">🧩 Nối câu / Nối vế (Matching Pairs)</option>
                      <option value="drag_drop">🎯 Kéo thả tương tác (Drag & Drop)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Nội dung đề bài câu hỏi</label>
                    <input
                      type="text"
                      value={qQuestion}
                      onChange={(e) => setQQuestion(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-medium"
                      placeholder="Ví dụ: Quan sát sơ đồ bên và cho biết..."
                    />
                  </div>
                </div>

                {/* Question Image Input Field */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                  <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Image className="w-4 h-4 text-sky-600" />
                    <span>Đính Kèm Hình Ảnh / Sơ Đồ Cho Câu Hỏi (Tùy chọn)</span>
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      type="text"
                      value={qImageUrl}
                      onChange={(e) => setQImageUrl(e.target.value)}
                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                      placeholder="Dán đường dẫn URL ảnh (https://...) hoặc chọn file từ máy..."
                    />
                    <label className="cursor-pointer px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 transition-colors">
                      <Upload className="w-4 h-4" /> Tải Ảnh Từ Máy
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageFileUpload}
                      />
                    </label>
                  </div>
                  {qImageUrl && (
                    <div className="flex items-center gap-3 bg-sky-50 p-2 rounded-xl border border-sky-200">
                      <img src={qImageUrl} alt="Preview" className="w-12 h-12 object-contain rounded-lg border bg-white" />
                      <span className="text-xs text-sky-900 font-bold flex-1 truncate">Đã đính kèm ảnh thành công!</span>
                      <button type="button" onClick={() => setQImageUrl('')} className="text-xs text-rose-600 hover:underline font-bold">Xóa ảnh</button>
                    </div>
                  )}
                </div>

                {/* Form fields for MCQ */}
                {qType === 'mcq' && (
                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Đáp án A</label>
                        <input
                          type="text"
                          value={qOptionA}
                          onChange={(e) => setQOptionA(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          placeholder="Nhập phương án A..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Đáp án B</label>
                        <input
                          type="text"
                          value={qOptionB}
                          onChange={(e) => setQOptionB(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          placeholder="Nhập phương án B..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Đáp án C (tùy chọn)</label>
                        <input
                          type="text"
                          value={qOptionC}
                          onChange={(e) => setQOptionC(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          placeholder="Nhập phương án C..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Đáp án D (tùy chọn)</label>
                        <input
                          type="text"
                          value={qOptionD}
                          onChange={(e) => setQOptionD(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          placeholder="Nhập phương án D..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Chọn đáp án đúng nhất</label>
                      <select
                        value={qAnswerIndex}
                        onChange={(e) => setQAnswerIndex(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold bg-emerald-50 text-emerald-900"
                      >
                        <option value={0}>Đáp án A</option>
                        <option value={1}>Đáp án B</option>
                        <option value={2}>Đáp án C</option>
                        <option value={3}>Đáp án D</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Form fields for True/False */}
                {qType === 'true_false' && (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Đáp án chuẩn</label>
                    <select
                      value={qIsTrue ? 'true' : 'false'}
                      onChange={(e) => setQIsTrue(e.target.value === 'true')}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold bg-emerald-50 text-emerald-900"
                    >
                      <option value="true">🟢 ĐÚNG (True)</option>
                      <option value="false">🔴 SAI (False)</option>
                    </select>
                  </div>
                )}

                {/* Form fields for Matching */}
                {qType === 'matching' && (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-purple-900">Nhập danh sách các Cặp nối tương ứng (Cột A - Cột B):</p>
                    {qMatchingPairs.map((pair, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-500 w-12">Cặp #{pIdx + 1}:</span>
                        <input
                          type="text"
                          value={pair.left}
                          onChange={(e) => {
                            const copy = [...qMatchingPairs];
                            copy[pIdx].left = e.target.value;
                            setQMatchingPairs(copy);
                          }}
                          placeholder="Mục Cột A..."
                          className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium"
                        />
                        <span className="text-xs font-bold text-slate-400">➔</span>
                        <input
                          type="text"
                          value={pair.right}
                          onChange={(e) => {
                            const copy = [...qMatchingPairs];
                            copy[pIdx].right = e.target.value;
                            setQMatchingPairs(copy);
                          }}
                          placeholder="Mục Cột B tương ứng..."
                          className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium"
                        />
                        {qMatchingPairs.length > 2 && (
                          <button
                            type="button"
                            onClick={() => {
                              setQMatchingPairs(qMatchingPairs.filter((_, i) => i !== pIdx));
                            }}
                            className="p-1 text-rose-500 hover:text-rose-700 text-xs font-black"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setQMatchingPairs([...qMatchingPairs, { left: '', right: '' }])}
                      className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg text-xs font-bold"
                    >
                      + Thêm Cặp Nối
                    </button>
                  </div>
                )}

                {/* Form fields for Drag & Drop */}
                {qType === 'drag_drop' && (
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Loại Kéo thả</label>
                      <select
                        value={qDragSubtype}
                        onChange={(e) => setQDragSubtype(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold bg-white"
                      >
                        <option value="fill_blanks">✏️ Điền từ vào ô trống (Fill Blanks)</option>
                        <option value="reorder">🧩 Sắp xếp thứ tự các từ/vế (Reorder)</option>
                      </select>
                    </div>

                    {qDragSubtype === 'fill_blanks' ? (
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Đoạn văn có vị trí thả [0], [1], [2]...</label>
                          <input
                            type="text"
                            value={qDragTemplate}
                            onChange={(e) => setQDragTemplate(e.target.value)}
                            placeholder="Ví dụ: Thành phố [0] là thủ đô của [1]."
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Danh sách thẻ từ gợi ý (phân cách bằng dấu phẩy)</label>
                          <input
                            type="text"
                            value={qDragOptionsText}
                            onChange={(e) => setQDragOptionsText(e.target.value)}
                            placeholder="Ví dụ: Hà Nội, Việt Nam, Đà Nẵng, Lào"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Đáp án đúng cho [0], [1]... (phân cách bằng dấu phẩy)</label>
                          <input
                            type="text"
                            value={qDragCorrectAnswersText}
                            onChange={(e) => setQDragCorrectAnswersText(e.target.value)}
                            placeholder="Ví dụ: Hà Nội, Việt Nam"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-emerald-800"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Thứ tự chuẩn (phân cách bằng dấu phẩy)</label>
                          <input
                            type="text"
                            value={qDragCorrectOrderText}
                            onChange={(e) => setQDragCorrectOrderText(e.target.value)}
                            placeholder="Ví dụ: Where, did, you, go, yesterday?"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-emerald-800"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Thứ tự xáo trộn ban đầu (tùy chọn, phân cách bằng dấu phẩy)</label>
                          <input
                            type="text"
                            value={qDragInitialItemsText}
                            onChange={(e) => setQDragInitialItemsText(e.target.value)}
                            placeholder="Ví dụ: go, Where, yesterday?, you, did"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Form fields for Fill in blank / Short Answer */}
                {(qType === 'fill_blank' || qType === 'short_answer') && (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Từ / Đáp án chuẩn học sinh cần điền</label>
                    <input
                      type="text"
                      value={qFillAnswer}
                      onChange={(e) => setQFillAnswer(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-emerald-50"
                      placeholder="Ví dụ: Hóa học hoặc 2/3 hoặc 100"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Lời giải thích cho đáp án</label>
                  <input
                    type="text"
                    value={qExplanation}
                    onChange={(e) => setQExplanation(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                    placeholder="Giải thích lý do chọn đáp án đúng..."
                  />
                </div>

                <button
                  onClick={handleAddQuestion}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Thêm Câu Hỏi Này Vào Danh Sách</span>
                </button>
              </div>
            </div>

            {/* Final Master Save Button */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleSaveLesson}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black rounded-2xl shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Save className="w-5 h-5" />
                <span>💾 LƯU BÀI HỌC VÀ TẤT CẢ CÂU HỎI</span>
              </button>
            </div>

          </div>
        )}

        {/* TAB 3: LOCK / UNLOCK LESSONS PER SUBJECT */}
        {activeTab === 'lessons' && (
          <div className="p-6 space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-800 text-xs sm:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Hướng dẫn dành cho Giáo viên:</strong> Khi bạn nhấn công tắc <strong>MỞ 🔓</strong> hoặc <strong>KHÓA 🔒</strong>, trạng thái bài học của tất cả học sinh sẽ ngay lập tức thay đổi. Bài bị khóa sẽ ngắt quyền học phần Lý thuyết và Bài tập của các em.
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <button
                  onClick={handleUnlockAll}
                  className="flex-1 md:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Mở Tất Cả Bài 🔓</span>
                </button>
                <button
                  onClick={handleLockAll}
                  className="flex-1 md:flex-none px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-4 h-4" />
                  <span>Khóa Tất Cả Bài 🔒</span>
                </button>
              </div>
            </div>

            {allSubjects.map((subject) => (
              <div key={subject.id} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
                  <div className={`px-3 py-1.5 rounded-xl font-black text-sm text-white bg-gradient-to-r ${subject.color}`}>
                    {subject.name}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">({subject.lessons.length} bài học)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subject.lessons.map((lesson) => {
                    const isLocked = storageService.isLessonLocked(lesson);
                    return (
                      <div
                        key={lesson.id}
                        className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                          isLocked
                            ? 'bg-rose-50/70 border-rose-200 text-slate-700'
                            : 'bg-white border-emerald-200 text-slate-800 shadow-xs'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              isLocked ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {isLocked ? '🔒 Đã Khóa' : '🔓 Đang Mở'}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">{lesson.duration}</span>
                          </div>
                          <h4 className="font-bold text-sm line-clamp-2 mb-1">{lesson.title}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2 mb-3">{lesson.description}</p>
                        </div>

                        <button
                          onClick={() => handleToggleLock(lesson.id)}
                          className={`w-full py-2 px-3 rounded-lg text-xs font-extrabold flex items-center justify-center gap-2 transition-colors ${
                            isLocked
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                              : 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                          }`}
                        >
                          {isLocked ? (
                            <>
                              <Unlock className="w-3.5 h-3.5" /> Bấm Để Mở Bài
                            </>
                          ) : (
                            <>
                              <Lock className="w-3.5 h-3.5" /> Bấm Để Khóa Bài
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: STUDENT PERFORMANCE REPORT */}
        {activeTab === 'students' && (
          <div className="p-6">
            
            {/* Student Account Summary Grid */}
            <div className="mb-8">
              <h3 className="text-base font-extrabold text-slate-800 mb-3">Danh Sách Học Sinh Đã Đăng Ký</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {students.map(std => (
                  <div key={std.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{std.name}</h4>
                      <p className="text-xs text-slate-500">Lớp: <span className="font-semibold text-slate-700">{std.className}</span> | Username: <code className="bg-white px-1 rounded">{std.username}</code></p>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-600 font-extrabold text-sm">{std.stars || 0} ⭐</div>
                      <div className="text-xs text-slate-500">{std.completedLessons?.length || 0} bài xong</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score History Table */}
            <div>
              <h3 className="text-base font-extrabold text-slate-800 mb-3">Nhật Ký Kết Quả Làm Bài</h3>
              {scores.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <p className="text-slate-500 text-sm">Chưa có bài kiểm tra nào được hoàn thành.</p>
                </div>
              ) : (
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-600">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Học sinh</th>
                        <th className="px-4 py-3">Mã bài học</th>
                        <th className="px-4 py-3">Điểm số</th>
                        <th className="px-4 py-3">Tỷ lệ đúng</th>
                        <th className="px-4 py-3">Tốc độ làm bài ⏱️</th>
                        <th className="px-4 py-3">Sao thưởng</th>
                        <th className="px-4 py-3">Ngày làm bài</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {scores
                        .filter(s => s.studentName.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((sc, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="px-4 py-3 font-semibold text-slate-800">{sc.studentName}</td>
                            <td className="px-4 py-3 font-mono text-xs text-slate-500">{sc.lessonId}</td>
                            <td className="px-4 py-3 font-bold text-slate-800">{sc.score} / {sc.totalQuestions} câu</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded-full font-extrabold text-xs ${
                                sc.percentage >= 80 ? 'bg-emerald-100 text-emerald-800' : sc.percentage >= 50 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                                {sc.percentage}%
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-sky-50 text-sky-800 border border-sky-200 inline-flex items-center gap-1">
                                ⏱️ {sc.timeSpentFormatted || '00:45'}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-bold text-amber-600">+{sc.starsEarned} ⭐</td>
                            <td className="px-4 py-3 text-slate-400 text-xs">{new Date(sc.timestamp).toLocaleString('vi-VN')}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
