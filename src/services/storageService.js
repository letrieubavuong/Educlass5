import { SUBJECTS } from '../data/curriculumData';

const KEYS = {
  CURRENT_USER: 'edu_lop5_current_user',
  REGISTERED_STUDENTS: 'edu_lop5_students',
  LESSON_LOCK_OVERWRITES: 'edu_lop5_lock_overwrites',
  STUDENT_SCORES: 'edu_lop5_scores',
  CUSTOM_CURRICULUM: 'edu_lop5_custom_curriculum'
};

// Default seed student account with competitive data
const SEED_STUDENTS = [
  {
    id: 'std_01',
    name: 'Nguyễn Văn An',
    username: 'hocsinh1',
    password: '123',
    className: '5A',
    stars: 85,
    xp: 420,
    completedLessons: ['toan-1', 'tv-1', 'eng-1', 'kh-1'],
    avatarBadge: '🦉 Cú Mèo Thông Thái'
  },
  {
    id: 'std_02',
    name: 'Trần Thị Mai',
    username: 'hocsinh2',
    password: '123',
    className: '5A',
    stars: 65,
    xp: 310,
    completedLessons: ['toan-1', 'tv-1', 'eng-1'],
    avatarBadge: '🚀 Tàu Vũ Trụ Tri Thức'
  },
  {
    id: 'std_03',
    name: 'Lê Hoàng Nam',
    username: 'hocsinh3',
    password: '123',
    className: '5B',
    stars: 50,
    xp: 240,
    completedLessons: ['toan-1', 'tinhoc-1'],
    avatarBadge: '🧙‍♂️ Phù Thủy Toán Học'
  },
  {
    id: 'std_04',
    name: 'Phạm Bảo Ngọc',
    username: 'hocsinh4',
    password: '123',
    className: '5A',
    stars: 35,
    xp: 180,
    completedLessons: ['toan-1'],
    avatarBadge: '⭐ Học Sinh Chăm Chỉ'
  }
];

// Helper to calculate academic rank title based on XP
export const getStudentTitle = (xp = 0) => {
  if (xp >= 400) return { title: '👑 Siêu Sao Học Tập Lớp 5', color: 'from-amber-400 to-amber-600 text-amber-900 border-amber-300' };
  if (xp >= 250) return { title: '🟣 Học Sinh Xuất Sắc', color: 'from-purple-500 to-indigo-600 text-white border-purple-300' };
  if (xp >= 100) return { title: '🔵 Học Sinh Tiên Tiến', color: 'from-sky-500 to-blue-600 text-white border-sky-300' };
  return { title: '🟢 Học Sinh Khởi Đầu', color: 'from-emerald-500 to-teal-600 text-white border-emerald-300' };
};

// Helper to safely access localStorage
const getJSON = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    console.error('Storage get error:', e);
    return fallback;
  }
};

const setJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage set error:', e);
  }
};

export const storageService = {
  // --- AUTHENTICATION ---
  getCurrentUser: () => {
    return getJSON(KEYS.CURRENT_USER, null);
  },

  setCurrentUser: (user) => {
    setJSON(KEYS.CURRENT_USER, user);
  },

  logout: () => {
    localStorage.removeItem(KEYS.CURRENT_USER);
  },

  getStudents: () => {
    const students = getJSON(KEYS.REGISTERED_STUDENTS, null);
    if (!students) {
      setJSON(KEYS.REGISTERED_STUDENTS, SEED_STUDENTS);
      return SEED_STUDENTS;
    }
    return students;
  },

  registerStudent: (studentData) => {
    const students = storageService.getStudents();
    if (students.some(s => s.username.toLowerCase() === studentData.username.toLowerCase())) {
      throw new Error('Tên đăng nhập này đã tồn tại!');
    }
    const newStudent = {
      id: 'std_' + Date.now(),
      name: studentData.name,
      username: studentData.username,
      password: studentData.password,
      className: studentData.className || '5A',
      stars: 0,
      xp: 0,
      completedLessons: [],
      avatarBadge: '🌱 Tân Binh Lớp 5',
      role: 'student'
    };
    students.push(newStudent);
    setJSON(KEYS.REGISTERED_STUDENTS, students);
    setJSON(KEYS.CURRENT_USER, newStudent);
    return newStudent;
  },

  loginStudent: (username, password) => {
    const students = storageService.getStudents();
    const found = students.find(
      s => s.username.toLowerCase() === username.toLowerCase() && s.password === password
    );
    if (!found) {
      throw new Error('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
    const userWithRole = { ...found, role: 'student' };
    setJSON(KEYS.CURRENT_USER, userWithRole);
    return userWithRole;
  },

  loginAdmin: (password) => {
    if (password !== 'admin123') {
      throw new Error('Mật khẩu Quản trị (Admin) không đúng! (Mặc định: admin123)');
    }
    const adminUser = {
      id: 'admin_001',
      name: 'Thầy/Cô Quản Trị',
      username: 'admin',
      role: 'admin'
    };
    setJSON(KEYS.CURRENT_USER, adminUser);
    return adminUser;
  },

  // --- ADMIN LOCK & UNLOCK LESSONS ---
  getLockOverwrites: () => {
    return getJSON(KEYS.LESSON_LOCK_OVERWRITES, {});
  },

  toggleLessonLock: (lessonId) => {
    const overwrites = storageService.getLockOverwrites();
    const allSubjects = storageService.getAllSubjects();
    let defaultLocked = false;
    let foundLesson = null;
    let foundSubject = null;

    for (const sub of allSubjects) {
      const match = sub.lessons.find(l => l.id === lessonId);
      if (match) {
        defaultLocked = match.isLocked;
        foundLesson = match;
        foundSubject = sub;
        break;
      }
    }

    const currentStatus = overwrites[lessonId] !== undefined ? overwrites[lessonId] : defaultLocked;
    const isNowLocked = !currentStatus;
    overwrites[lessonId] = isNowLocked;
    setJSON(KEYS.LESSON_LOCK_OVERWRITES, overwrites);

    // Trigger notification when unlocked!
    if (!isNowLocked && foundLesson && foundSubject) {
      storageService.addNotification({
        title: '📢 Bài Học Mới Được Mở Khóa!',
        message: `Thầy/Cô vừa mở khóa "${foundLesson.title}" (${foundSubject.name}). Em hãy vào học ngay nhé!`,
        subjectId: foundSubject.id,
        lessonId: foundLesson.id,
        lessonTitle: foundLesson.title,
        type: 'unlock'
      });
    }

    return isNowLocked;
  },

  unlockAllLessons: () => {
    const overwrites = {};
    const allSubjects = storageService.getAllSubjects();
    for (const sub of allSubjects) {
      for (const les of sub.lessons) {
        overwrites[les.id] = false;
      }
    }
    setJSON(KEYS.LESSON_LOCK_OVERWRITES, overwrites);

    storageService.addNotification({
      title: '🎉 Tất Cả Bài Học Đã Được Mở Khóa!',
      message: 'Thầy/Cô đã mở khóa toàn bộ bài học trên hệ thống. Em có thể tự do lựa chọn môn học yêu thích!',
      type: 'unlock_all'
    });

    return overwrites;
  },

  isLessonLocked: (lesson) => {
    const overwrites = storageService.getLockOverwrites();
    if (overwrites[lesson.id] !== undefined) {
      return overwrites[lesson.id];
    }
    return lesson.isLocked;
  },

  // --- NOTIFICATION SYSTEM ---
  addNotification: (notifData) => {
    const notifs = getJSON(KEYS.NOTIFICATIONS, []);
    const newNotif = {
      id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      title: notifData.title,
      message: notifData.message,
      subjectId: notifData.subjectId || '',
      lessonId: notifData.lessonId || '',
      lessonTitle: notifData.lessonTitle || '',
      type: notifData.type || 'unlock',
      timestamp: new Date().toISOString(),
      readBy: []
    };
    notifs.unshift(newNotif);
    setJSON(KEYS.NOTIFICATIONS, notifs.slice(0, 30));
    return newNotif;
  },

  getNotifications: () => {
    return getJSON(KEYS.NOTIFICATIONS, []);
  },

  markNotificationAsRead: (notifId, studentId) => {
    if (!studentId) return;
    const notifs = getJSON(KEYS.NOTIFICATIONS, []);
    const notif = notifs.find(n => n.id === notifId);
    if (notif && (!notif.readBy || !notif.readBy.includes(studentId))) {
      if (!notif.readBy) notif.readBy = [];
      notif.readBy.push(studentId);
      setJSON(KEYS.NOTIFICATIONS, notifs);
    }
  },

  getUnreadCount: (studentId) => {
    if (!studentId) return 0;
    const notifs = getJSON(KEYS.NOTIFICATIONS, []);
    return notifs.filter(n => !n.readBy || !n.readBy.includes(studentId)).length;
  },

  // --- STUDENT PROGRESS & SCORES ---
  saveExerciseResult: (lessonId, rawScore, totalQuestions, starsEarned) => {
    const currentUser = storageService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'student') return;

    const validTotal = Math.max(1, totalQuestions || 1);
    const score = Math.min(validTotal, Math.max(0, rawScore));
    const percentage = Math.min(100, Math.round((score / validTotal) * 100));

    const scores = getJSON(KEYS.STUDENT_SCORES, []);
    scores.push({
      studentId: currentUser.id,
      studentName: currentUser.name,
      lessonId,
      score,
      totalQuestions: validTotal,
      percentage,
      starsEarned,
      timestamp: new Date().toISOString()
    });
    setJSON(KEYS.STUDENT_SCORES, scores);

    const students = storageService.getStudents();
    const studentIdx = students.findIndex(s => s.id === currentUser.id);
    if (studentIdx !== -1) {
      const std = students[studentIdx];
      std.stars = (std.stars || 0) + starsEarned;
      std.xp = (std.xp || 0) + (score * 20);
      if (!std.completedLessons.includes(lessonId)) {
        std.completedLessons.push(lessonId);
      }
      students[studentIdx] = std;
      setJSON(KEYS.REGISTERED_STUDENTS, students);
      
      const updatedSession = { ...currentUser, stars: std.stars, xp: std.xp, completedLessons: std.completedLessons };
      setJSON(KEYS.CURRENT_USER, updatedSession);
    }
  },

  getStudentScores: () => {
    return getJSON(KEYS.STUDENT_SCORES, []);
  },

  getLessonProgress: (lessonId) => {
    const currentUser = storageService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'student') return null;

    const scores = getJSON(KEYS.STUDENT_SCORES, []);
    const attempts = scores.filter(s => s.studentId === currentUser.id && s.lessonId === lessonId);
    if (attempts.length === 0) return null;

    const latest = attempts[attempts.length - 1];
    const validTotal = Math.max(1, latest.totalQuestions || 1);
    const cappedScore = Math.min(validTotal, Math.max(0, latest.score));
    const percentage = Math.min(100, Math.round((cappedScore / validTotal) * 100));

    const bestPercentage = Math.min(100, Math.max(...attempts.map(a => {
      const tot = Math.max(1, a.totalQuestions || 1);
      const sc = Math.min(tot, Math.max(0, a.score));
      return Math.round((sc / tot) * 100);
    })));

    return {
      score: cappedScore,
      totalQuestions: validTotal,
      percentage,
      bestPercentage,
      attemptsCount: attempts.length,
      timestamp: latest.timestamp
    };
  },

  // --- GAMIFICATION & LEADERBOARD ---
  getLeaderboard: () => {
    const students = storageService.getStudents();
    // Sort descending by XP, then Stars
    return [...students].sort((a, b) => (b.xp || 0) - (a.xp || 0) || (b.stars || 0) - (a.stars || 0));
  },

  buyAvatarBadge: (badgeName, cost) => {
    const currentUser = storageService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'student') return;
    if ((currentUser.stars || 0) < cost) {
      throw new Error(`Bạn cần tối thiểu ${cost} ⭐ Sao để đổi huy hiệu này!`);
    }

    const students = storageService.getStudents();
    const idx = students.findIndex(s => s.id === currentUser.id);
    if (idx !== -1) {
      students[idx].stars -= cost;
      students[idx].avatarBadge = badgeName;
      setJSON(KEYS.REGISTERED_STUDENTS, students);

      const updated = { ...currentUser, stars: students[idx].stars, avatarBadge: badgeName };
      setJSON(KEYS.CURRENT_USER, updated);
      return updated;
    }
  },

  // --- CURRICULUM EDITING & QUESTION MANAGEMENT ---
  getCustomCurriculum: () => {
    return getJSON(KEYS.CUSTOM_CURRICULUM, null);
  },

  getAllSubjects: () => {
    const custom = storageService.getCustomCurriculum();
    if (!custom) return SUBJECTS;

    // Merge custom subjects with base SUBJECTS
    return SUBJECTS.map(baseSub => {
      const customSub = custom.find(cs => cs.id === baseSub.id);
      if (!customSub) return baseSub;
      return {
        ...baseSub,
        lessons: customSub.lessons || baseSub.lessons
      };
    });
  },

  saveLesson: (subjectId, lessonData) => {
    let custom = storageService.getCustomCurriculum();
    if (!custom) {
      custom = JSON.parse(JSON.stringify(SUBJECTS));
    }

    const subIdx = custom.findIndex(s => s.id === subjectId);
    if (subIdx === -1) return;

    const lesIdx = custom[subIdx].lessons.findIndex(l => l.id === lessonData.id);
    if (lesIdx !== -1) {
      custom[subIdx].lessons[lesIdx] = { ...custom[subIdx].lessons[lesIdx], ...lessonData };
    } else {
      custom[subIdx].lessons.push(lessonData);
    }

    setJSON(KEYS.CUSTOM_CURRICULUM, custom);
    return custom;
  },

  deleteQuestion: (subjectId, lessonId, questionId) => {
    let custom = storageService.getCustomCurriculum();
    if (!custom) {
      custom = JSON.parse(JSON.stringify(SUBJECTS));
    }

    const subIdx = custom.findIndex(s => s.id === subjectId);
    if (subIdx !== -1) {
      const lesIdx = custom[subIdx].lessons.findIndex(l => l.id === lessonId);
      if (lesIdx !== -1) {
        custom[subIdx].lessons[lesIdx].exercises = (custom[subIdx].lessons[lesIdx].exercises || []).filter(q => q.id !== questionId);
        setJSON(KEYS.CUSTOM_CURRICULUM, custom);
      }
    }
    return custom;
  }
};
