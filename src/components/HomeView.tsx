import React, { useState } from 'react';
import { 
  Sparkles, 
  PlayCircle, 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Shuffle, 
  ShieldAlert,
  Compass,
  Calendar,
  MapPin,
  Clock,
  Gift,
  Wrench,
  Search,
  ExternalLink
} from 'lucide-react';
import { StudentProfile } from '../types';
import { SIMULATION_TASKS } from '../data/tasks';
import { VIDEO_STORIES_DATA } from '../data/videoStories';
import { CAREERS_DATA } from '../data/careers';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  profile: StudentProfile;
  onOpenTask: (taskId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentTab,
  profile,
  onOpenTask
}) => {
  const [selectedCareerCategory, setSelectedCareerCategory] = useState<string>('ALL');

  // Featured enterprise programs for the homepage showcase
  const featuredEnterprises = [
    {
      id: 'batch-fpt-01',
      programName: 'Một ngày làm Kỹ sư AI & Phát triển Phần mềm',
      enterpriseName: 'FPT Software & FPT Telecom',
      category: 'Công nghệ thông tin',
      location: 'Hà Nội',
      date: '19/04/2025',
      slotsLeft: 17,
      imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Khuôn viên công nghệ xanh F-Ville Hòa Lạc của FPT Software'
    },
    {
      id: 'batch-vinfast-01',
      programName: 'Tổ hợp Nhà máy Sản xuất Ô tô Điện Thông minh',
      enterpriseName: 'VinFast Auto',
      category: 'Kỹ thuật - Chế tạo',
      location: 'Hải Phòng',
      date: '10/05/2025',
      slotsLeft: 18,
      imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Dây chuyền lắp ráp xe điện tự động hóa với cánh tay robot'
    },
    {
      id: 'batch-dalat-01',
      programName: 'Hệ thống Nông nghiệp Thông minh & Canh tác IoT',
      enterpriseName: 'Dalat Hasfarm',
      category: 'Nông nghiệp công nghệ cao',
      location: 'Lâm Đồng',
      date: '24/05/2025',
      slotsLeft: 14,
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Nhà kính công nghệ cao kiểm soát nhiệt độ và vi khí hậu'
    }
  ];

  const careerCategories = [
    { id: 'ALL', label: `Tất cả ${CAREERS_DATA.length} ngành nghề` },
    { id: 'CongNghe', label: 'Công nghệ thông tin' },
    { id: 'YTe', label: 'Y tế & Sức khỏe' },
    { id: 'KyThuat', label: 'Kỹ thuật & Cơ khí' },
    { id: 'KinhTe', label: 'Kinh tế & Dịch vụ' },
    { id: 'GiaoDuc', label: 'Giáo dục & Xã hội' }
  ];

  const filteredCareers = selectedCareerCategory === 'ALL'
    ? CAREERS_DATA.slice(0, 6)
    : CAREERS_DATA.filter(c => {
        if (selectedCareerCategory === 'CongNghe') return c.category === 'CongNghe';
        if (selectedCareerCategory === 'YTe') return c.category === 'YTe';
        if (selectedCareerCategory === 'KyThuat') return c.category === 'KyThuat';
        if (selectedCareerCategory === 'KinhTe') return (c.category as string) === 'KinhDoanh' || c.category === 'DichVu';
        if (selectedCareerCategory === 'GiaoDuc') return c.category === 'GiaoDuc' || (c.category as string) === 'XaHoi';
        return true;
      }).slice(0, 6);

  return (
    <div className="space-y-14 pb-16">
      {/* 1. HERO SECTION: Brand Teal/Blue with Real High School Students Photo */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950 via-teal-900 to-slate-950 text-white border border-teal-800/40 shadow-2xl">
        {/* Ambient Light Accents */}
        <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand Message & Dual CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-200 text-xs font-semibold">
                <img 
                  src="/public/assets/aistudio/LOGO_MASTER_1536_767bc7e6.png" 
                  alt="Logo CHẠM VIỆC" 
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    // Fallback to /logo.png
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
                <span>CHẠM VIỆC · Nền tảng Hướng nghiệp & Tuyển sinh THPT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-black tracking-tight leading-[1.15] text-white">
                Em chưa cần biết ngay mình sẽ làm nghề gì.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-orange-300">
                  Hãy bắt đầu bằng một trải nghiệm thực tế.
                </span>
              </h1>

              {/* Sub-text */}
              <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal max-w-2xl">
                Khám phá sở thích nghề nghiệp theo cơ sở khoa học <strong>Holland & SCCT</strong>, thử sức với xưởng mô phỏng 3D tương tác, lắng nghe người trong nghề chia sẻ khó khăn thực tế và tra cứu dữ liệu điểm chuẩn đại học 3 năm chính thức.
              </p>

              {/* Dual Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentTab('profile')}
                  className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>1. Khám phá bản thân (RIASEC)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentTab('tasks')}
                  className="px-6 py-3.5 rounded-2xl bg-teal-800/90 hover:bg-teal-700 text-white font-bold text-sm border border-teal-500/60 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 h-4 text-teal-300" />
                  <span>2. Thử nghiệm nghề 3D</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-teal-200/90">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% Miễn phí cho học sinh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Dữ liệu chính thức Bộ GD&ĐT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Đồng hành bởi EIE Education</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Student Photo Showcase */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/30 to-teal-400/30 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-80" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                    alt="Nhóm học sinh THPT cùng nhau khám phá hướng nghiệp và học tập nhóm"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Caption on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-teal-300">Không gian trải nghiệm thực tế</span>
                      <span className="text-[11px] text-amber-300 font-bold">13+ Nghề trọng điểm</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                      Mô phỏng xưởng ô tô, lập trình phần mềm, thiết kế, nông nghiệp & y tế
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Quick Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-8 mt-6 border-t border-teal-800/60">
            <button
              onClick={() => setCurrentTab('profile')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all group text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">1. Khám phá bản thân</div>
                  <div className="text-[11px] text-teal-200">Trắc nghiệm RIASEC</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentTab('tasks')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all group text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                  <PlayCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">2. Thử một nghề</div>
                  <div className="text-[11px] text-amber-200">Xưởng 3D & mô phỏng</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentTab('admissions')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all group text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">3. Tìm ngành & trường</div>
                  <div className="text-[11px] text-indigo-200">Điểm chuẩn 3 năm</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentTab('enterprise')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all group text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">4. Tour doanh nghiệp</div>
                  <div className="text-[11px] text-emerald-200">Trải nghiệm thực tế</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. CAREER DIRECTORY SHOWCASE: Real workplace photography for each career */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>Dữ liệu thực chứng · {CAREERS_DATA.length} Ngành nghề tiêu biểu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Khám phá môi trường làm việc thực tế
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Hình ảnh thực tế về không gian làm việc, thiết bị và công việc hằng ngày của từng nghề.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('recommendations')}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 transition-colors"
          >
            <span>Xem phân tích chi tiết & bản đồ ngành</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {careerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCareerCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCareerCategory === cat.id
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Career Grid with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-3xl border border-slate-200/80 hover:border-teal-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={career.imageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'}
                    alt={career.imageAlt || career.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                      {career.categoryLabel}
                    </span>
                  </div>

                  {/* RIASEC Code */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                      RIASEC: {career.riasecCodes.join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {career.shortSummary}
                  </p>
                  
                  <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100 flex items-center justify-between">
                    <span>Môn gợi ý: {career.highSchoolSubjects.slice(0, 3).join(', ')}</span>
                    <span className="text-emerald-700 font-semibold">Triển vọng tốt</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setCurrentTab('recommendations')}
                  className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-800 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Tìm hiểu lộ trình đào tạo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 3D AUTOMOTIVE LAB & 2026 ADMISSIONS BANNER (REAL PHOTOGRAPHY SPLIT) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: 3D Automotive Simulation */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-teal-500/40 shadow-xl flex flex-col justify-between">
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
              alt="Xưởng dịch vụ kỹ thuật sửa chữa ô tô và khoang động cơ hiện đại"
              className="w-full h-full object-cover opacity-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-400 text-slate-950 text-xs font-black uppercase">
                THREE.JS 3D
              </span>
              <span className="text-xs text-teal-200 font-medium">Mô phỏng chân thực</span>
            </div>
          </div>

          <div className="p-6 sm:p-7 pt-2 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Xưởng Mô Phỏng 3D: Kỹ Thuật Viên Sửa Chữa Ô Tô
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Mở nắp capo, xoay góc nhìn 360°, soi chi tiết bu-gi, kiểm tra điện áp ắc quy, thay lọc gió và nổ máy thử nghiệm 850 RPM ngay trong trình duyệt.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-teal-200">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                ✓ Kiểm tra đo điện ắc quy
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                ✓ Khởi động máy rung âm thanh
              </div>
            </div>

            <button
              onClick={() => onOpenTask('task-o-to')}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Vào Xưởng Ô Tô 3D Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Admissions 2026 & EIE Education Gift */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-indigo-500/40 shadow-xl flex flex-col justify-between">
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
              alt="Giảng đường đại học và sinh viên tham gia kỳ thi tuyển sinh"
              className="w-full h-full object-cover opacity-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase">
                MỚI 2026
              </span>
              <span className="text-xs text-amber-200 font-medium">Đồng hành cùng EIE Education</span>
            </div>
          </div>

          <div className="p-6 sm:p-7 pt-2 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Tuyển Sinh 2026 & Kho 100 Đề ĐGNL / ĐGTD Miễn Phí
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Quy chế thi tốt nghiệp THPT và tuyển sinh đại học mới nhất của Bộ GD&ĐT. Tặng trọn gói kho đề tham khảo ĐHQG, ĐHBK và tài khoản luyện Tiếng Anh EIE.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-indigo-200">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                ✓ 100 Đề ĐGNL có bấm giờ
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                ✓ Cẩm nang tổ hợp môn mới
              </div>
            </div>

            <button
              onClick={() => setCurrentTab('admissions')}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Gift className="w-4 h-4" />
              <span>Nhận Tài Khoản Luyện Đề EIE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE TOURS SHOWCASE: Real photography of actual corporate workplaces */}
      <section className="bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl p-6 sm:p-10 border border-teal-700/50 space-y-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Chương trình Trải nghiệm Thực địa tại Doanh nghiệp</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Chạm vào doanh nghiệp hàng đầu
            </h2>
            <p className="text-xs sm:text-sm text-teal-200 mt-1 max-w-xl">
              Tạo cơ hội cho học sinh THPT đến tận nơi tham quan cơ sở vật chất, quan sát môi trường làm việc thực và giao lưu cùng chuyên gia.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('enterprise')}
            className="self-start sm:self-end px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-teal-50 font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span>Xem lịch trình & đăng ký suất</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEnterprises.map((prog) => (
            <div
              key={prog.id}
              onClick={() => setCurrentTab('enterprise')}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 overflow-hidden hover:border-amber-400 hover:bg-white/15 cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={prog.imageUrl}
                    alt={prog.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-teal-200 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
                      {prog.enterpriseName}
                    </span>
                    <span className="font-bold text-amber-300 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
                      Còn {prog.slotsLeft} chỗ
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {prog.programName}
                  </h4>
                  <div className="flex items-center gap-4 text-[11px] text-teal-200">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {prog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {prog.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="text-[11px] text-amber-300 font-bold flex items-center justify-between">
                  <span>Tài trợ 100% chi phí</span>
                  <span className="group-hover:translate-x-1 transition-transform">Đăng ký ngay →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REAL STORIES PREVIEW: Real YouTube Thumbnails with speaker and play icon */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Người thật – Chuyện nghề thật (YouTube đã xác thực)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Lắng nghe người trong nghề chia sẻ thực tế
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Không tô hồng màu mè; lắng nghe những khó khăn, đánh đổi và kỹ năng thực tế cần chuẩn bị.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('videos')}
            className="self-start sm:self-end px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Khám phá toàn bộ video</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_STORIES_DATA.slice(0, 3).map((v) => (
            <div
              key={v.id}
              onClick={() => setCurrentTab('videos')}
              className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400 hover:shadow-lg cursor-pointer transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* YouTube Video Thumbnail with Play Button */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-amber-400/90 group-hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <PlayCircle className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white">
                    <span className="font-semibold bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {v.channelName}
                    </span>
                    <span className="bg-slate-900/80 px-2 py-0.5 rounded font-mono">
                      {v.duration || '12-15 phút'}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md">
                      {v.careerTitle}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Khách mời: {v.characterName}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-800 transition-colors line-clamp-2">
                    {v.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {v.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-semibold">
                <span>Xem & Trả lời 5 câu hỏi phản tư</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ETHICAL GUIDELINES & DISCLAIMERS */}
      <section className="bg-slate-950 text-slate-300 rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
        <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Cam kết minh bạch & Trách nhiệm xã hội</span>
        </div>
        <h3 className="text-lg font-bold text-white">
          Nguyên tắc xây dựng vì học sinh Việt Nam
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-400">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-1">Không hứa hẹn viển vông</h4>
            <p>CHẠM VIỆC không hứa bảo đảm 100% đỗ đại học hay cam kết mức thu nhập cụ thể. Điểm chuẩn 3 năm chỉ dùng để tham khảo xu hướng; học sinh luôn cần đối chiếu thông báo tuyển sinh năm hiện tại.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-1">Bình đẳng cơ hội</h4>
            <p>Không dùng giới tính, dân tộc hay hoàn cảnh kinh tế để hạn chế nghề được khám phá. Dữ liệu ngân sách dùng để gợi ý học bổng, chính sách miễn giảm học phí và các phương án đào tạo khả thi.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-1">Bảo vệ quyền riêng tư</h4>
            <p>Không yêu cầu CCCD, số điện thoại hay thông tin gia đình nhạy cảm. Toàn bộ hồ sơ nháp lưu trên thiết bị của em, em hoàn toàn chủ động xuất dữ liệu hoặc xóa trắng bất kỳ lúc nào.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

