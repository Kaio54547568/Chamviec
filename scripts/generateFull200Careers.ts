import fs from 'fs';
import path from 'path';

// Definition of 20 groups with 10 careers each
interface CareerItemInput {
  id: string;
  title: string;
  englishTitle: string;
  synonyms: string[];
  group: string;
  category: string;
  categoryLabel: string;
  riasecCodes: ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[];
  shortSummary: string;
  typicalTasks: string[];
  deliverables: string[];
  toolsUsed: string[];
  workEnvironment: string;
  difficultiesAndTradeoffs: string[];
  coreSkills: string[];
  highSchoolSubjects: string[];
  entryPathways: { level: 'Đại học' | 'Cao đẳng' | 'Trung cấp' | 'Đào tạo nghề' | 'Thực hành tự do'; description: string }[];
  entryPathway: string;
  trialActivity: string;
  has3D?: boolean;
  simulationTaskId?: string;
  experienceType: '3D_INTERACTIVE' | 'SCENARIO_SIMULATION' | 'CAREER_PROFILE';
  status: 'HOAN_THANH';
  imageUrl: string;
  imageAlt: string;
  linkedMajorIds?: string[];
  dailyRoutine?: string[];
  dataSource: string;
  lastUpdated: string;
}

// 20 Navigation groups
export const GROUPS_CONFIG = [
  { id: 'ngon-ngu', label: 'Ngôn ngữ và giao tiếp quốc tế', cat: 'NgoaiNgu' },
  { id: 'ban-dan', label: 'Bán dẫn, vi mạch và phần cứng', cat: 'KyThuat' },
  { id: 'phan-mem-ai', label: 'Phần mềm, AI và dữ liệu', cat: 'CongNghe' },
  { id: 'o-to-robot', label: 'Ô tô, cơ điện tử và robot', cat: 'CoKhi' },
  { id: 'kien-truc-noi-that', label: 'Kiến trúc, quy hoạch và nội thất', cat: 'KienTruc' },
  { id: 'xay-dung', label: 'Xây dựng và hạ tầng', cat: 'XayDung' },
  { id: 'nong-nghiep', label: 'Nông nghiệp công nghệ cao và thủy sản', cat: 'NongNghiep' },
  { id: 'y-te', label: 'Y tế, chăm sóc sức khỏe và phục hồi', cat: 'YTe' },
  { id: 'duoc-sinh-hoc', label: 'Dược phẩm và công nghệ sinh học', cat: 'DuocHoc' },
  { id: 'tai-chinh-ngan-hang', label: 'Tài chính, ngân hàng và fintech', cat: 'KinhTe' },
  { id: 'logistics', label: 'Logistics, chuỗi cung ứng và ngoại thương', cat: 'Logistics' },
  { id: 'du-lich-am-thuc', label: 'Du lịch, khách sạn và ẩm thực', cat: 'DuLich' },
  { id: 'truyen-thong-marketing', label: 'Truyền thông, tiếp thị và sáng tạo nội dung', cat: 'Marketing' },
  { id: 'thiet-ke-my-thuat', label: 'Thiết kế đồ họa, thời trang và mỹ thuật', cat: 'ThietKe' },
  { id: 'giao-duc', label: 'Giáo dục, đào tạo và phát triển con người', cat: 'GiaoDuc' },
  { id: 'luat-chinh-sach', label: 'Luật, quan hệ công chúng và chính sách', cat: 'Luat' },
  { id: 'nang-luong-moi-truong', label: 'Năng lượng tái tạo và môi trường', cat: 'MoiTruong' },
  { id: 'an-toan-thong-tin', label: 'An toàn thông tin và mạng máy tính', cat: 'AnNinhMang' },
  { id: 'thuong-mai-dien-tu', label: 'Thương mại điện tử và bán lẻ hiện đại', cat: 'ThuongMai' },
  { id: 'tam-ly-xa-hoi', label: 'Dịch vụ xã hội, tâm lý và cộng đồng', cat: 'XaHoi' }
];

console.log('Building all 200 careers...');
