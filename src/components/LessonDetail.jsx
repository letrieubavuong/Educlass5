import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, BookOpen, CheckCircle2, XCircle, Volume2, VolumeX, 
  HelpCircle, Star, Sparkles, Trophy, RotateCcw, Send, ChevronRight, Check,
  Mic, MicOff, Headphones, FileText, PenTool, Maximize2, X, Image, Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { storageService } from '../services/storageService';
import { MathLatex } from './MathLatex';

export const LessonDetail = ({ subject, lesson, onBack, currentUser, onOpenAuth }) => {
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' | 'practice'
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [zoomImageUrl, setZoomImageUrl] = useState(null);

  // Practice Quiz State & Realtime Timer
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMcq, setSelectedMcq] = useState(null);
  const [selectedTf, setSelectedTf] = useState(null);
  const [userInputText, setUserInputText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeElapsedSeconds, setTimeElapsedSeconds] = useState(0);

  // Live Timer for Quiz
  useEffect(() => {
    let timer = null;
    if (activeTab === 'practice' && !isFinished) {
      timer = setInterval(() => {
        setTimeElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeTab, isFinished]);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Speaking AI Voice Recognition State
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speakingAccuracy, setSpeakingAccuracy] = useState(null);

  const isEnglish = subject.id === 'tienganh';
  const questions = lesson.exercises || [];
  const currentQ = questions[currentIndex];

  // Native Web Speech Synthesizer
  const speakEnglishText = (textToSpeak) => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm tiếng Anh.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Slightly slower speed for primary school learners
    window.speechSynthesis.speak(utterance);
  };

  // Speech Synthesizer for Theory
  const handleSpeakTheory = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng đọc giọng nói.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = lesson.theory.audioText || lesson.theory.summary || 'Nội dung bài học';
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = isEnglish ? 'en-US' : 'vi-VN';
    utterance.rate = 0.85;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Web Speech Recognition for Speaking Skill (English only)
  const handleStartVoiceRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt không hỗ trợ Web Speech Recognition API. Vui lòng nhập bằng phím hoặc thử trên Chrome/Edge.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListeningVoice(true);
        setTranscript('Đang lắng nghe giọng đọc của bạn...');
      };

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript;
        setTranscript(spoken);
        setIsListeningVoice(false);
        setUserInputText(spoken);

        if (currentQ?.targetSentence) {
          const targetNorm = currentQ.targetSentence.toLowerCase().replace(/[^a-z0-9]/g, '');
          const spokenNorm = spoken.toLowerCase().replace(/[^a-z0-9]/g, '');

          let accuracy = 0;
          if (spokenNorm === targetNorm) {
            accuracy = 100;
          } else if (spokenNorm.includes(targetNorm) || targetNorm.includes(spokenNorm)) {
            accuracy = 85;
          } else {
            accuracy = 60;
          }
          setSpeakingAccuracy(accuracy);
        }
      };

      recognition.onerror = (err) => {
        console.error('Speech recognition error:', err);
        setIsListeningVoice(false);
        setTranscript('Không thể nhận diện giọng nói. Vui lòng thử lại!');
      };

      recognition.onend = () => {
        setIsListeningVoice(false);
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setIsListeningVoice(false);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Submit Answer Logic for current question
  const handleSubmitAnswer = () => {
    if (!currentQ || isSubmitted) return;

    let correct = false;

    if (currentQ.type === 'mcq' || currentQ.type === 'listening') {
      if (selectedMcq === null) return;
      correct = selectedMcq === currentQ.answerIndex;
    } else if (currentQ.type === 'true_false') {
      if (selectedTf === null) return;
      correct = selectedTf === currentQ.isTrue;
    } else if (currentQ.type === 'speaking') {
      if (!userInputText.trim()) return;
      const userNorm = userInputText.toLowerCase().replace(/[^a-z0-9]/g, '');
      const targetNorm = currentQ.targetSentence.toLowerCase().replace(/[^a-z0-9]/g, '');
      correct = userNorm.includes(targetNorm) || targetNorm.includes(userNorm) || (speakingAccuracy && speakingAccuracy >= 70);
    } else if (currentQ.type === 'fill_blank' || currentQ.type === 'short_answer') {
      if (!userInputText.trim()) return;
      const normalizedUser = userInputText.trim().toLowerCase();
      const normalizedTarget = currentQ.answer.trim().toLowerCase();
      correct = normalizedUser === normalizedTarget;
    }

    setIsSubmitted(true);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedMcq(null);
      setSelectedTf(null);
      setUserInputText('');
      setIsSubmitted(false);
      setIsCorrect(false);
      setTranscript('');
      setSpeakingAccuracy(null);
    } else {
      setIsFinished(true);
      const finalScore = Math.min(questions.length, score);
      const starsEarned = finalScore * 5;
      const formattedTime = formatTimer(timeElapsedSeconds);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error(e);
      }

      storageService.saveExerciseResult(
        lesson.id, 
        finalScore, 
        questions.length, 
        starsEarned, 
        timeElapsedSeconds, 
        formattedTime
      );
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedMcq(null);
    setSelectedTf(null);
    setUserInputText('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setIsFinished(false);
    setTimeElapsedSeconds(0);
    setTranscript('');
    setSpeakingAccuracy(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 animate-fadeIn font-sans">
      
      {/* Unauthenticated Guest Mode Warning Banner */}
      {!currentUser && (
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl text-amber-900 text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <span>Bạn đang xem bài học ở chế độ Khách. Hãy <strong>Đăng nhập</strong> hoặc <strong>Đăng ký</strong> để được hệ thống tự động lưu lại điểm số và số ⭐ Sao nhé!</span>
          </div>
          <button
            onClick={onOpenAuth}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-xs shadow-xs shrink-0 w-full sm:w-auto text-center transition-all"
          >
            🔑 Đăng Nhập / Đăng Ký Ngay
          </button>
        </div>
      )}

      {/* Top Bar Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Quay lại danh sách bài"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r ${subject.color}`}>
                {subject.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">{lesson.duration}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight mt-0.5">
              {lesson.title}
            </h2>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-lg font-extrabold text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
              activeTab === 'theory'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Lý Thuyết</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 rounded-lg font-extrabold text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
              activeTab === 'practice'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEnglish ? '2. Luyện Tập 4 Kỹ Năng' : '2. Bài Tập Vận Dụng'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: LÝ THUYẾT (THEORY) */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          
          {/* Summary & Speech Banner */}
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-3xl p-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-black text-sky-700 uppercase tracking-wider">Tóm Tắt Bài Học</div>
                <div className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                  <MathLatex text={lesson.theory?.summary} />
                </div>
              </div>

              {isEnglish && (
                <button
                  onClick={handleSpeakTheory}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 shrink-0 transition-all ${
                    isSpeaking
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-sky-600 hover:bg-sky-700 text-white'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isSpeaking ? 'Dừng Đọc' : 'Nghe Phát Âm Mẫu 🔊'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Theory Sections Cards */}
          <div className="space-y-6">
            {lesson.theory?.sections?.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                <h3 className="text-lg font-black text-slate-800 text-sky-700 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span>{sec.title}</span>
                </h3>

                <div className="text-slate-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                  <MathLatex text={sec.text} />
                </div>

                {sec.formula && (
                  <div className="bg-slate-900 text-amber-300 p-4 rounded-2xl text-center text-lg sm:text-xl tracking-wider border border-slate-700 shadow-inner my-2 overflow-x-auto">
                    <MathLatex text={sec.formula} displayMode={true} />
                  </div>
                )}

                {sec.highlights && sec.highlights.length > 0 && (
                  <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 space-y-1.5">
                    <strong className="text-amber-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" /> Ghi nhớ trọng tâm:
                    </strong>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {sec.highlights.map((h, i) => (
                        <li key={i} className="font-semibold">
                          <MathLatex text={h} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action button to proceed to practice */}
          <div className="text-center pt-4">
            <button
              onClick={() => setActiveTab('practice')}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-base rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>
                {isEnglish 
                  ? 'Chuyển Sang Luyện Tập 4 Kỹ Năng (Nghe, Nói, Đọc, Viết)' 
                  : 'Đã Hiểu Bài - Chuyển Sang Bài Tập Vận Dụng'}
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: BÀI TẬP VẬN DỤNG / LUYỆN TẬP 4 KỸ NĂNG */}
      {activeTab === 'practice' && (
        <div>
          {isFinished ? (
            /* SCORE SUMMARY SCREEN */
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-6 shadow-xl animate-fadeIn">
              <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full mx-auto flex items-center justify-center shadow-inner">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
                  {isEnglish ? 'Hoàn Thành Bài Luyện Tập 4 Kỹ Năng! 🎉' : 'Hoàn Thành Bài Tập Vận Dụng! 🎉'}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {isEnglish 
                    ? 'Bạn đã xuất sắc làm chủ các kỹ năng Nghe, Nói, Đọc & Viết Tiếng Anh' 
                    : 'Bạn đã xuất sắc hoàn thành phần vận dụng kiến thức'}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-lg mx-auto grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Số câu đúng</p>
                  <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">{score} / {questions.length}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Thời gian</p>
                  <p className="text-xl sm:text-2xl font-black text-sky-600 mt-1 flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>{formatTimer(timeElapsedSeconds)}</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Thưởng Sao</p>
                  <p className="text-xl sm:text-2xl font-black text-amber-500 mt-1">+{score * 5} ⭐</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Làm lại bài
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm"
                >
                  Về danh sách bài
                </button>
              </div>
            </div>
          ) : (
            /* QUESTION WIZARD SCREEN */
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Stepper Progress Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-sky-100 text-sky-700">
                    Câu {currentIndex + 1} / {questions.length}
                  </span>
                  <span className="text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{formatTimer(timeElapsedSeconds)}</span>
                  </span>
                  <span className="text-xs font-extrabold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {currentQ?.skillLabel || (
                      currentQ?.type === 'mcq' ? 'TRẮC NGHIỆM' :
                      currentQ?.type === 'true_false' ? 'ĐÚNG / SAI' :
                      currentQ?.type === 'fill_blank' ? 'ĐIỀN TỪ VÀO CHỖ TRỐNG' :
                      'ĐIỀN ĐÁP ÁN SỐ / NGẮN'
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentIndex
                          ? 'bg-amber-500 ring-2 ring-amber-200'
                          : i < currentIndex
                          ? 'bg-emerald-500'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* SKILL 1: READING PASSAGE CARD (English Only) */}
              {isEnglish && currentQ?.passage && (
                <div className="bg-purple-50/90 border border-purple-200 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-800 text-xs font-bold uppercase">
                    <FileText className="w-4 h-4" /> Đoạn Văn Đọc Hiểu (Reading Text):
                  </div>
                  <p className="text-slate-800 text-sm sm:text-base italic leading-relaxed">
                    "{currentQ.passage}"
                  </p>
                </div>
              )}

              {/* SKILL 2: LISTENING AUDIO PROMPT CARD (English Only) */}
              {isEnglish && currentQ?.type === 'listening' && (
                <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center space-y-3">
                  <p className="text-xs font-bold text-sky-800 uppercase flex items-center justify-center gap-1.5">
                    <Headphones className="w-4 h-4" /> Bấm nút bên dưới để nghe phát âm tiếng Anh:
                  </p>
                  <button
                    onClick={() => speakEnglishText(currentQ.audioPrompt)}
                    className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-md inline-flex items-center gap-2 animate-bounce"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>Phát Âm Tiếng Anh 🔊</span>
                  </button>
                </div>
              )}

              {/* SKILL 3: SPEAKING VOICE AI CARD (English Only) */}
              {isEnglish && currentQ?.type === 'speaking' && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-2xl text-center space-y-4">
                  <div>
                    <p className="text-xs font-bold text-purple-700 uppercase mb-1">Mẫu câu nói cần luyện đọc:</p>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-wide">
                      "{currentQ.targetSentence}"
                    </h3>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => speakEnglishText(currentQ.targetSentence)}
                      className="px-4 py-2 rounded-xl bg-purple-100 text-purple-800 font-bold text-xs hover:bg-purple-200 flex items-center gap-1.5"
                    >
                      <Volume2 className="w-4 h-4" /> Nghe mẫu 🔊
                    </button>

                    <button
                      onClick={handleStartVoiceRecording}
                      disabled={isListeningVoice}
                      className={`px-6 py-3 rounded-2xl text-white font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all ${
                        isListeningVoice
                          ? 'bg-rose-500 animate-pulse'
                          : 'bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700'
                      }`}
                    >
                      {isListeningVoice ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      <span>{isListeningVoice ? 'Đang Lắng Nghe...' : 'Bấm Nói Ngay 🎙️'}</span>
                    </button>
                  </div>

                  {transcript && (
                    <div className="bg-white p-3 rounded-xl border border-purple-200 text-xs text-slate-700">
                      <strong>Giọng đọc của bạn ghi nhận được:</strong> <span className="font-semibold text-purple-800">"{transcript}"</span>
                    </div>
                  )}

                  {speakingAccuracy !== null && (
                    <div className={`text-xs font-black px-3 py-1 rounded-full inline-block ${
                      speakingAccuracy >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      Chấm điểm AI: {speakingAccuracy}% Phát âm chuẩn xác!
                    </div>
                  )}
                </div>
              )}

              {/* Question Title */}
              <div className="text-base sm:text-lg font-extrabold text-slate-800 leading-relaxed">
                <MathLatex text={currentQ?.question || currentQ?.translationPrompt} />
              </div>

              {/* Question Image (If available) */}
              {currentQ?.imageUrl && (
                <div className="my-3 flex justify-center">
                  <div 
                    className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-xs cursor-pointer max-w-full sm:max-w-md hover:border-sky-400 transition-all"
                    onClick={() => setZoomImageUrl(currentQ.imageUrl)}
                  >
                    <img 
                      src={currentQ.imageUrl} 
                      alt="Hình ảnh bài tập" 
                      className="max-h-64 sm:max-h-80 w-auto object-contain mx-auto rounded-xl"
                    />
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" /> <span>Phóng to 🔍</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MCQ & LISTENING OPTIONS */}
              {(currentQ?.type === 'mcq' || currentQ?.type === 'listening') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, i) => {
                    let btnClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                    if (selectedMcq === i) {
                      btnClass = 'bg-sky-500 border-sky-600 text-white font-bold shadow-sm';
                    }
                    if (isSubmitted) {
                      if (i === currentQ.answerIndex) {
                        btnClass = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-md';
                      } else if (selectedMcq === i && i !== currentQ.answerIndex) {
                        btnClass = 'bg-rose-500 border-rose-600 text-white font-bold';
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={isSubmitted}
                        onClick={() => setSelectedMcq(i)}
                        className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center gap-3 ${btnClass}`}
                      >
                        <span className="w-7 h-7 rounded-xl bg-black/10 flex items-center justify-center text-xs font-black shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span><MathLatex text={opt} /></span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TRUE / FALSE OPTIONS */}
              {currentQ?.type === 'true_false' && (
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'ĐÚNG (True)', val: true },
                    { label: 'SAI (False)', val: false }
                  ].map((item) => {
                    let btnClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                    if (selectedTf === item.val) {
                      btnClass = item.val 
                        ? 'bg-emerald-600 border-emerald-700 text-white shadow-md' 
                        : 'bg-rose-600 border-rose-700 text-white shadow-md';
                    }

                    if (isSubmitted) {
                      if (item.val === currentQ.isTrue) {
                        btnClass = 'bg-emerald-600 border-emerald-700 text-white font-bold';
                      } else if (selectedTf === item.val) {
                        btnClass = 'bg-rose-600 border-rose-700 text-white font-bold';
                      }
                    }

                    return (
                      <button
                        key={item.label}
                        disabled={isSubmitted}
                        onClick={() => setSelectedTf(item.val)}
                        className={`p-5 rounded-2xl border text-center font-extrabold text-sm sm:text-base transition-all ${btnClass}`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* WRITING & SHORT ANSWER / SPEAKING INPUT */}
              {(currentQ?.type === 'short_answer' || currentQ?.type === 'fill_blank' || currentQ?.type === 'speaking') && (
                <div className="space-y-3">
                  <input
                    type="text"
                    disabled={isSubmitted}
                    placeholder={currentQ.type === 'speaking' ? "Kết quả nói sẽ tự động điền vào đây..." : "Nhập câu trả lời viết/điền đáp án của bạn..."}
                    value={userInputText}
                    onChange={(e) => setUserInputText(e.target.value)}
                    className="w-full p-4 text-sm sm:text-base rounded-2xl border border-slate-300 focus:ring-2 focus:ring-sky-500 font-semibold bg-slate-50 focus:bg-white"
                  />
                  <p className="text-xs text-slate-400 italic">Nhập kết quả chính xác không chứa khoảng trắng thừa.</p>
                </div>
              )}

              {/* FEEDBACK & EXPLANATION BOX */}
              {isSubmitted && (
                <div className={`p-4 rounded-2xl border ${
                  isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Chính xác! (+5 ⭐)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Chưa chính xác! Đáp án đúng: {
                          currentQ.type === 'mcq' || currentQ.type === 'listening' ? currentQ.options[currentQ.answerIndex] :
                          currentQ.type === 'true_false' ? (currentQ.isTrue ? 'ĐÚNG' : 'SAI') :
                          currentQ.type === 'speaking' ? currentQ.targetSentence :
                          currentQ.answer
                        }</span>
                      </>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">
                    💡 <strong>Giải thích:</strong> <MathLatex text={currentQ.explanation} />
                  </div>
                </div>
              )}

              {/* BOTTOM CONTROL BUTTONS */}
              <div className="flex justify-end pt-4 border-t border-slate-100">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={
                      ((currentQ.type === 'mcq' || currentQ.type === 'listening') && selectedMcq === null) ||
                      (currentQ.type === 'true_false' && selectedTf === null) ||
                      ((currentQ.type === 'fill_blank' || currentQ.type === 'short_answer' || currentQ.type === 'speaking') && !userInputText.trim())
                    }
                    className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Kiểm tra đáp án
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{currentIndex + 1 < questions.length ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          )}
        </div>
      )}

      {/* Image Zoom Lightbox Modal */}
      {zoomImageUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setZoomImageUrl(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setZoomImageUrl(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={zoomImageUrl} 
              alt="Hình ảnh phóng to" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white p-2"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
};
