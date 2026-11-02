import { StudentProfile } from '../types';

const STORAGE_KEY = 'cham_viec_student_profile_v2';

export const DEFAULT_PROFILE: StudentProfile = {
  id: 'guest_' + Math.random().toString(36).substring(2, 9),
  updatedAt: new Date().toISOString(),
  grade: 'lop_11',
  favoriteSubjects: [],
  academicStrengths: [],
  activities: [],
  careersExplored: [],
  priorityValues: [],
  preferredRegions: [],
  preferredProvinces: [],
  budgetRange: '',
  scholarshipInterest: false,
  notes: '',
  riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
  riasecAnswerCount: 0,
  completedTasks: [],
  savedAdmissions: [],
  savedCareers: [],
  savedMajors: [],
  savedUniversities: [],
  savedVideos: [],
  targetCombinations: [],
  reflections: []
};

export function loadStudentProfile(): StudentProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveStudentProfile(DEFAULT_PROFILE);
      return DEFAULT_PROFILE;
    }
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      savedMajors: parsed.savedMajors || [],
      savedUniversities: parsed.savedUniversities || [],
      targetCombinations: parsed.targetCombinations || [],
      riasecAnswerCount: parsed.riasecAnswerCount
    };
  } catch (err) {
    console.error('Failed to load profile from localStorage', err);
    return DEFAULT_PROFILE;
  }
}

export function saveStudentProfile(profile: StudentProfile): void {
  try {
    const toSave = { ...profile, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (err) {
    console.error('Failed to save profile to localStorage', err);
  }
}

export function exportProfileToJson(profile: StudentProfile): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `Ho_so_CHAM_VIEC_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function resetProfile(): StudentProfile {
  localStorage.removeItem(STORAGE_KEY);
  const cleanProfile: StudentProfile = {
    ...DEFAULT_PROFILE,
    id: 'guest_' + Math.random().toString(36).substring(2, 9),
    updatedAt: new Date().toISOString(),
    favoriteSubjects: [],
    academicStrengths: [],
    activities: [],
    careersExplored: [],
    priorityValues: [],
    preferredRegions: [],
    preferredProvinces: [],
    budgetRange: '',
    scholarshipInterest: false,
    notes: '',
    riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
    riasecAnswerCount: 0,
    completedTasks: [],
    savedAdmissions: [],
    savedCareers: [],
    savedMajors: [],
    savedUniversities: [],
    savedVideos: [],
    estimatedScore: undefined,
    targetCombinations: [],
    reflections: []
  };
  saveStudentProfile(cleanProfile);
  return cleanProfile;
}
