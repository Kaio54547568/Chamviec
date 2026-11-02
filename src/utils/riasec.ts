import type { StudentProfile, RiasecCode } from '../types';
import { RIASEC_QUESTIONS } from '../data/riasecQuestions';

export const RIASEC_CODES: RiasecCode[] = ['R', 'I', 'A', 'S', 'E', 'C'];
export const RIASEC_MAX_SCORES = Object.fromEntries(
  RIASEC_CODES.map(code => [code, RIASEC_QUESTIONS.filter(q => q.code === code).length * 5])
) as Record<RiasecCode, number>;

export function hasCompletedRiasec(profile: StudentProfile): boolean {
  // Keep complete results from profiles created before answer counts were stored.
  return (profile.riasecAnswerCount === undefined || profile.riasecAnswerCount === RIASEC_QUESTIONS.length)
    && RIASEC_CODES.every(code => {
      const score = profile.riasecScores?.[code];
      return Number.isFinite(score) && score >= RIASEC_MAX_SCORES[code] / 5 && score <= RIASEC_MAX_SCORES[code];
    });
}
