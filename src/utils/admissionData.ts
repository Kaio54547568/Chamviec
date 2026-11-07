import type { AdmissionRecord, University } from '../types';
import { ADMISSION_RECORDS } from '../data/admissions';
import { MAJORS_DATA } from '../data/majors';

// This dataset covers the three requested admissions seasons. Keep an empty year
// selectable so missing data is explicit rather than silently selecting another year.
export const ADMISSION_YEARS = [2026, 2025, 2024] as const;
export function latestAdmissionYear() {
  return ADMISSION_YEARS.find(year => ADMISSION_RECORDS.some(r => r.year === year)) ?? 2026;
}
export function isThptComparable(record: AdmissionRecord) {
  return record.scoreType === 'cutoff' && record.scoreScale === 'Thang 30'
    && !record.applicantGroup
    && (/THPT|Điểm xét tuyển quy đổi tương đương/.test(record.method))
    && !/học bạ|kết hợp|tích hợp/i.test(record.method);
}

export function admissionCampus(record: AdmissionRecord, university: University) {
  return {
    province: 'campusProvince' in record ? record.campusProvince : university.province,
    region: 'campusRegion' in record ? record.campusRegion : university.region,
  };
}

export function admissionCategory(record: AdmissionRecord) {
  const major = MAJORS_DATA.find(m => m.code === record.majorCode || m.name === record.majorName
    || record.majorName.toLowerCase().includes(m.name.toLowerCase()));
  if (major) return major.category;
  const code = record.majorCode.slice(0, 3);
  if (code === '714') return 'su-pham';
  if (code === '772') return 'suc-khoe';
  if (code === '734' || code === '751' && record.majorName.includes('Logistics')) return 'kinh-te';
  if (record.majorCode.startsWith('72202')) return 'ngon-ngu';
  if (code === '781') return 'kinh-te';
  if (record.majorName.includes('Kiến trúc')) return 'cong-nghe';
  if (['722', '731', '732', '738', '776'].includes(code)) return 'xa-hoi';
  if (['762', '764', '785'].includes(code)) return 'nong-nghiep';
  if (['742', '744', '746', '748', '751', '752', '754', '758'].includes(code)) return 'cong-nghe';
  return undefined;
}
