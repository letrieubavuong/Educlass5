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

// Helpers to merge multi-device data without data loss
const mergeStudents = (localList, cloudList) => {
  const map = new Map();

  const addOrMerge = (std) => {
    if (!std || !std.id) return;
    const existing = map.get(std.id);
    if (!existing) {
      map.set(std.id, { ...std });
    } else {
      const mergedCompleted = Array.from(new Set([...(existing.completedLessons || []), ...(std.completedLessons || [])]));
      map.set(std.id, {
        ...existing,
        ...std,
        stars: Math.max(existing.stars || 0, std.stars || 0),
        xp: Math.max(existing.xp || 0, std.xp || 0),
        completedLessons: mergedCompleted,
        avatarBadge: std.avatarBadge || existing.avatarBadge || '🌱 Tân Binh Lớp 5'
      });
    }
  };

  (localList || []).forEach(addOrMerge);
  (cloudList || []).forEach(addOrMerge);

  return Array.from(map.values());
};

const mergeScores = (localList, cloudList) => {
  const map = new Map();
  [...(localList || []), ...(cloudList || [])].forEach(s => {
    if (s && s.studentId && s.lessonId && s.timestamp) {
      const key = `${s.studentId}_${s.lessonId}_${s.timestamp}`;
      if (!map.has(key)) {
        map.set(key, s);
      }
    }
  });
  return Array.from(map.values()).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
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
      id: 'std_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      name: studentData.name,
      username: studentData.username,
      password: studentData.password,
      className: studentData.className || '5A',
      parentPhone: studentData.parentPhone || '',
      stars: 0,
      xp: 0,
      completedLessons: [],
      avatarBadge: '🌱 Tân Binh Lớp 5',
      role: 'student'
    };
    students.push(newStudent);
    setJSON(KEYS.REGISTERED_STUDENTS, students);
    setJSON(KEYS.CURRENT_USER, newStudent);
    
    // Sync new student account to cloud immediately!
    storageService.pushToCloudSync();
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
      throw new Error('Mật khẩu Quản trị (Admin) không đúng! Vui lòng thử lại.');
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

  // --- CLOUD MULTI-DEVICE SYNC ENGINE ---
  getCloudSyncUrl: () => {
    const customId = localStorage.getItem('edu_lop5_sync_id');
    const objectId = customId || 'ff808181a067127101a093c800377ec3';
    return `https://api.restful-api.dev/objects/${objectId}`;
  },

  recreateCloudSyncObject: async (payload) => {
    try {
      const res = await fetch('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const created = await res.json();
        if (created?.id) {
          localStorage.setItem('edu_lop5_sync_id', created.id);
        }
      }
    } catch (e) {
      console.warn('Failed to recreate cloud sync object:', e);
    }
  },

  pushToCloudSync: async () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cloud-sync-updated'));
    }

    try {
      const lock_overwrites = getJSON(KEYS.LESSON_LOCK_OVERWRITES, {});
      const registered_students = getJSON(KEYS.REGISTERED_STUDENTS, SEED_STUDENTS);
      const student_scores = getJSON(KEYS.STUDENT_SCORES, []);
      const notifications = getJSON(KEYS.NOTIFICATIONS, []);
      const custom_curriculum = getJSON(KEYS.CUSTOM_CURRICULUM, null);
      const payload = {
        name: 'educlass5_class_sync_v1',
        data: {
          lock_overwrites,
          registered_students,
          student_scores,
          notifications,
          custom_curriculum,
          lastSync: new Date().toISOString()
        }
      };

      const syncUrl = storageService.getCloudSyncUrl();
      const res = await fetch(syncUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok && res.status === 404) {
        await storageService.recreateCloudSyncObject(payload);
      }
    } catch (e) {
      console.warn('Cloud sync push offline:', e);
    }
  },

  fetchFromCloudSync: async () => {
    try {
      const syncUrl = storageService.getCloudSyncUrl();
      const res = await fetch(syncUrl);
      if (!res.ok) return null;
      const result = await res.json();
      const cloudData = result?.data;
      if (!cloudData) return null;

      let hasChanged = false;

      // 1. Sync lock_overwrites
      if (cloudData.lock_overwrites) {
        const localLocks = getJSON(KEYS.LESSON_LOCK_OVERWRITES, {});
        if (JSON.stringify(localLocks) !== JSON.stringify(cloudData.lock_overwrites)) {
          setJSON(KEYS.LESSON_LOCK_OVERWRITES, cloudData.lock_overwrites);
          hasChanged = true;
        }
      }

      // 2. Sync notifications
      if (cloudData.notifications && Array.isArray(cloudData.notifications)) {
        const localNotifs = getJSON(KEYS.NOTIFICATIONS, []);
        const mergedMap = {};
        [...localNotifs, ...cloudData.notifications].forEach(n => {
          if (!mergedMap[n.id]) mergedMap[n.id] = n;
        });
        const mergedList = Object.values(mergedMap).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 30);
        if (JSON.stringify(localNotifs) !== JSON.stringify(mergedList)) {
          setJSON(KEYS.NOTIFICATIONS, mergedList);
          hasChanged = true;
        }
      }

      // 3. Sync custom_curriculum
      if (cloudData.custom_curriculum) {
        const localCustom = getJSON(KEYS.CUSTOM_CURRICULUM, null);
        if (JSON.stringify(localCustom) !== JSON.stringify(cloudData.custom_curriculum)) {
          setJSON(KEYS.CUSTOM_CURRICULUM, cloudData.custom_curriculum);
          hasChanged = true;
        }
      }

      // 4. Sync registered_students
      if (cloudData.registered_students && Array.isArray(cloudData.registered_students)) {
        const localStudents = getJSON(KEYS.REGISTERED_STUDENTS, SEED_STUDENTS);
        const mergedStudents = mergeStudents(localStudents, cloudData.registered_students);
        if (JSON.stringify(localStudents) !== JSON.stringify(mergedStudents)) {
          setJSON(KEYS.REGISTERED_STUDENTS, mergedStudents);
          hasChanged = true;
        }
      }

      // 5. Sync student_scores
      if (cloudData.student_scores && Array.isArray(cloudData.student_scores)) {
        const localScores = getJSON(KEYS.STUDENT_SCORES, []);
        const mergedScores = mergeScores(localScores, cloudData.student_scores);
        if (JSON.stringify(localScores) !== JSON.stringify(mergedScores)) {
          setJSON(KEYS.STUDENT_SCORES, mergedScores);
          hasChanged = true;
        }
      }

      if (hasChanged && typeof window !== 'undefined') {
        window.dispatchEvent(new Event('cloud-sync-updated'));
      }

      return { hasChanged, data: cloudData };
    } catch (e) {
      console.warn('Cloud sync fetch offline:', e);
    }
    return null;
  },

  // --- ADMIN LOCK & UNLOCK LESSONS ---
  getLockOverwrites: () => {
    return getJSON(KEYS.LESSON_LOCK_OVERWRITES, {});
  },

  toggleLessonLock: (lessonId) => {
    const overwrites = storageService.getLockOverwrites();
    delete overwrites._allLocked;
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

    // Push state to Cloud for all student devices
    storageService.pushToCloudSync();

    return isNowLocked;
  },

  unlockAllLessons: () => {
    const overwrites = { _allLocked: false };
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

    // Push state to Cloud for all student devices
    storageService.pushToCloudSync();

    return overwrites;
  },

  lockAllLessons: () => {
    const overwrites = { _allLocked: true };
    const allSubjects = storageService.getAllSubjects();
    for (const sub of allSubjects) {
      for (const les of sub.lessons) {
        overwrites[les.id] = true;
      }
    }
    setJSON(KEYS.LESSON_LOCK_OVERWRITES, overwrites);

    // Push state to Cloud for all student devices
    storageService.pushToCloudSync();

    return overwrites;
  },

  isLessonLocked: (lesson) => {
    const overwrites = storageService.getLockOverwrites();
    if (overwrites._allLocked === true) return true;
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
    
    // Push updated scores & student XP/stars to Cloud
    storageService.pushToCloudSync();
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
      storageService.pushToCloudSync();
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
    storageService.pushToCloudSync();
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
        storageService.pushToCloudSync();
      }
    }
    return custom;
  }
};
