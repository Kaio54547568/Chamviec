import { enterpriseCatalog } from '../utils/catalog';
import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Cpu,
  HeartHandshake,
  TrendingUp,
  Palette,
  Sprout,
  Wrench,
  Sparkles,
  Award,
  ShieldCheck,
  Briefcase,
  Search,
  Building2,
  MapPin,
  Users,
  Calendar,
} from 'lucide-react';
import { CAREERS_DATA } from '../data/careers';
import { VIDEO_STORIES_DATA } from '../data/videoStories';
import { useLanguage } from '../i18n/LanguageContext';
import { localizeCareer, localizeVideoStory } from '../utils/i18nData';

interface HomeViewProps {
  onStartDiscovery: () => void;
  onExploreTasks: () => void;
  onWatchStories: () => void;
  onViewAdmissions: () => void;
  onViewRecommendations: () => void;
  onViewEnterprise?: () => void;
  onSelectCategory?: (categoryKey: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartDiscovery,
  onExploreTasks,
  onWatchStories,
  onViewAdmissions,
  onViewRecommendations,
  onViewEnterprise,
  onSelectCategory,
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const featuredEnterprises = enterpriseCatalog.slice(0,3).map((batch,index)=>({
    id:batch.id,name:batch.programName,partner:batch.enterpriseName,location:batch.location,
    date:new Date(`${batch.scheduleDate}T12:00:00+07:00`).toLocaleDateString(isEn?'en-US':'vi-VN'),
    slotsLeft:Math.max(0,batch.totalSlots-batch.registeredSlots),totalSlots:batch.totalSlots,
    badge:batch.careerCategory,color:['teal','blue','amber'][index],
  }));

  const careerCategories = [
    {
      id: 'ALL',
      name: isEn ? 'All Fields' : 'Tất cả nhóm ngành',
      icon: <Briefcase className="w-4 h-4" />,
      count: CAREERS_DATA.length,
    },
    {
      id: 'CongNghe',
      name: isEn ? 'IT & AI' : 'Công nghệ thông tin & AI',
      icon: <Cpu className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'CongNghe').length,
    },
    {
      id: 'KyThuat',
      name: isEn ? 'Engineering & Automation' : 'Kỹ thuật, Cơ khí & Tự động hóa',
      icon: <Wrench className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'KyThuat').length,
    },
    {
      id: 'KinhTe',
      name: isEn ? 'Economics, Finance & Mgmt' : 'Kinh tế, Tài chính & Quản trị',
      icon: <TrendingUp className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'KinhTe').length,
    },
    {
      id: 'YTe',
      name: isEn ? 'Healthcare & Medicine' : 'Y tế & Chăm sóc sức khỏe',
      icon: <HeartHandshake className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'YTe').length,
    },
    {
      id: 'GiaoDuc',
      name: isEn ? 'Education & Training' : 'Giáo dục & Đào tạo',
      icon: <BookOpen className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'GiaoDuc').length,
    },
    {
      id: 'Marketing',
      name: isEn ? 'Media, Journalism & Marketing' : 'Truyền thông, Báo chí & Marketing',
      icon: <Palette className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'Marketing').length,
    },
    {
      id: 'ThietKe',
      name: isEn ? 'Design, Arts & Creative' : 'Thiết kế, Nghệ thuật & Sáng tạo',
      icon: <Sparkles className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'ThietKe').length,
    },
    {
      id: 'NongNghiep',
      name: isEn ? 'High-Tech Agriculture & Env.' : 'Nông - Lâm - Ngư nghiệp & Môi trường',
      icon: <Sprout className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'NongNghiep').length,
    },
    {
      id: 'DuLich',
      name: isEn ? 'Tourism, Hospitality & Services' : 'Du lịch, Khách sạn & Dịch vụ',
      icon: <Compass className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'DuLich').length,
    },
    {
      id: 'XaHoi',
      name: isEn ? 'Law, Public Admin & Social Sci.' : 'Luật, Hành chính & Khoa học Xã hội',
      icon: <ShieldCheck className="w-4 h-4" />,
      count: CAREERS_DATA.filter((c) => c.category === 'XaHoi').length,
    },
  ];

  const displayedCareers = (
    selectedCategory === 'ALL'
      ? CAREERS_DATA.slice(0, 8)
      : CAREERS_DATA.filter((c) => c.category === selectedCategory)
  ).map((c) => localizeCareer(c, language));

  const featuredVideos = VIDEO_STORIES_DATA.slice(0, 3).map((v) =>
    localizeVideoStory(v, language)
  );

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white shadow-2xl border border-teal-700/50">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:px-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-700/60 border border-teal-500/40 text-teal-100 text-xs sm:text-sm font-medium backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.home.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-amber-300">CHẠM VIỆC</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 text-teal-50 leading-snug">
                {t.home.titleSub}
              </span>
            </h1>

            <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t.home.description}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={onStartDiscovery}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-5 h-5" />
                <span>{t.home.ctaStart}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTasks}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-xs transition-all cursor-pointer"
              >
                <Wrench className="w-5 h-5 text-teal-300" />
                <span>{t.home.ctaSimulate}</span>
              </button>

              <button
                onClick={onViewAdmissions}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-teal-950/60 hover:bg-teal-950/90 text-teal-200 border border-teal-600/40 font-semibold text-sm sm:text-base transition-all cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <span>{t.home.ctaAdmissions}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-teal-700/60 text-xs sm:text-sm text-teal-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isEn
                    ? '24 Scientific RIASEC Questions'
                    : '24 Câu hỏi RIASEC khoa học'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isEn
                    ? `${CAREERS_DATA.length} Careers & 20 Major Fields`
                    : `${CAREERS_DATA.length} Nghề & 20 Nhóm ngành`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isEn
                    ? '3-Year Cutoff Lookup (2023–2025)'
                    : 'Tra cứu điểm chuẩn 3 năm'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image / Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500/30 bg-slate-900/60 group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt={
                  isEn
                    ? 'Vietnamese high school students exploring future career paths'
                    : 'Học sinh THPT Việt Nam cùng nhau thảo luận định hướng nghề nghiệp tương lai'
                }
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Floating Caption inside Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>
                    {isEn
                      ? 'Experiential Career Philosophy'
                      : 'Triết lý Hướng nghiệp Thực chứng'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  {isEn
                    ? '"Every student has unique potential. Career guidance is not locking you into a mold—it is giving you real experiences to decide with confidence."'
                    : '“Mỗi học sinh đều có tiềm năng riêng. Hướng nghiệp không phải là gán nhãn ép buộc, mà là trao cho em cơ hội trải nghiệm thực tế để tự tin lựa chọn.”'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR CORE MODULES QUICK NAVIGATION CARDS */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {isEn ? 'Complete 4-Step Journey' : 'Hành trình 4 bước toàn diện'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isEn
              ? 'From Self-Understanding to University & College Decisions'
              : 'Từ Thấu Hiểu Bản Thân Đến Quyết Định Chọn Trường'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {isEn
              ? 'Scientifically designed for high school students across both urban centers and rural/highland provinces.'
              : 'Được thiết kế khoa học dành riêng cho học sinh THPT ở cả thành thị, nông thôn và miền núi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Khám phá bản thân */}
          <div
            onClick={onStartDiscovery}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                alt={isEn ? 'Self-Discovery Assessment' : 'Trắc nghiệm khám phá bản thân'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-bold shadow-xs">
                {isEn ? 'Step 1 • Self-Discovery' : 'Bước 1 • Thấu hiểu mình'}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {isEn ? '24-Question Holland RIASEC Test' : 'Trắc Nghiệm 24 Câu Holland'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Assess 6 career interest dimensions (R-I-A-S-E-C) with 4 questions per group, combined with your favorite high school subjects and core values.'
                    : 'Đánh giá 6 nhóm sở thích nghề nghiệp (R-I-A-S-E-C) với 4 câu hỏi/nhóm, kết hợp môn học yêu thích và điều kiện gia đình.'}
                </p>
              </div>
              <div className="flex items-center text-teal-700 font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                <span>{isEn ? 'Start Assessment' : 'Làm bài khảo sát ngay'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Card 2: Gợi ý & Kho nghề */}
          <div
            onClick={onViewRecommendations}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt={isEn ? 'Career & Major Exploration' : 'Khám phá nghề nghiệp và ngành học'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-bold shadow-xs">
                {isEn ? 'Step 2 • Career Matching' : 'Bước 2 • Định hướng nghề'}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {isEn
                    ? `Directory of ${CAREERS_DATA.length} Careers & 20 Fields`
                    : `Kho ${CAREERS_DATA.length} Nghề & 20 Nhóm Ngành`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Analyze fit scores transparently across Technology, Engineering, Economics, Pedagogy, Healthcare, Arts, and Agriculture.'
                    : 'Phân tích mức độ phù hợp minh bạch; khám phá đa dạng từ Công nghệ, Kỹ thuật, Kinh tế đến Sư phạm, Y tế, Nghệ thuật, Nông nghiệp.'}
                </p>
              </div>
              <div className="flex items-center text-blue-700 font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                <span>{isEn ? 'View Matched Careers' : 'Xem danh mục nghề phù hợp'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Card 3: Chạm thử nghề */}
          <div
            onClick={onExploreTasks}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                alt={isEn ? 'Interactive Career Simulations' : 'Mô phỏng nhiệm vụ nghề nghiệp thực tế'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold shadow-xs">
                {isEn ? 'Step 3 • Career Simulation' : 'Bước 3 • Chạm thử việc thật'}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {isEn ? 'Interactive 3D & Case Simulations' : 'Mô Phỏng Nhiệm Vụ Nghề'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Step into the shoes of a Teacher, Engineer, Designer, Nurse, Data Analyst, or Agronomist through realistic 3-stage challenges and 3D WebGL labs.'
                    : 'Thử đóng vai Giáo viên, Kỹ sư, Thiết kế, Điều dưỡng, Phân tích dữ liệu... giải quyết tình huống thực tế qua 3 giai đoạn.'}
                </p>
              </div>
              <div className="flex items-center text-amber-600 font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                <span>{isEn ? 'Try Simulations Now' : 'Trải nghiệm thử thách'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Card 4: Tra cứu Điểm chuẩn Đại học */}
          <div
            onClick={onViewAdmissions}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                alt={isEn ? 'University Admissions & Cutoff Scores' : 'Tra cứu điểm chuẩn đại học học viện'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-700 text-white text-xs font-bold shadow-xs">
                {isEn ? 'Step 4 • University Lookup' : 'Bước 4 • Chọn trường & ngành'}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {isEn
                    ? 'Admissions & Cutoff Scores (2023–2026)'
                    : 'Điểm Chuẩn Đại Học 2022–2024'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Look up 3-year cutoff trends, subject combinations (A00, A01, D01, K01...), tuition fees, and 2026 MOET admission regulations across Northern, Central, and Southern Vietnam.'
                    : 'Tra cứu xu hướng điểm chuẩn 3 năm, tổ hợp xét tuyển (A00, A01, D01, C00...), học phí và học bổng của các trường ĐH cả 3 miền.'}
                </p>
              </div>
              <div className="flex items-center text-purple-700 font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                <span>{isEn ? 'Look Up Cutoff Scores' : 'Tra cứu điểm chuẩn'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIVERSE CAREER DIRECTORY SHOWCASE */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              {isEn
                ? 'Comprehensive Career Ecosystem'
                : 'Hệ sinh thái nghề nghiệp đa dạng'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isEn
                ? 'Explore Careers Across 10 Core Industry Groups'
                : 'Khám Phá Các Nhóm Ngành Nghề Tiêu Biểu'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {isEn
                ? 'Not just IT or Business—CHẠM VIỆC provides balanced, in-depth guidance across Pedagogy, Healthcare, Engineering, Journalism, Arts, Social Sciences, and High-Tech Agriculture.'
                : 'Không chỉ có Công nghệ thông tin hay Kinh tế, CHẠM VIỆC giới thiệu đầy đủ các lĩnh vực Sư phạm, Y dược, Kỹ thuật, Báo chí, Nghệ thuật, Luật và Nông nghiệp công nghệ cao.'}
            </p>
          </div>
          <button
            onClick={onViewRecommendations}
            className="self-start md:self-auto inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>
              {isEn
                ? `View All ${CAREERS_DATA.length} Careers`
                : `Xem toàn bộ ${CAREERS_DATA.length} nghề`}
            </span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {careerCategories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[11px] ${
                    active ? 'bg-teal-900 text-teal-100' : 'bg-white text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedCareers.map((career) => (
            <div
              key={career.id}
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(career.category);
                } else {
                  onViewRecommendations();
                }
              }}
              className="group rounded-2xl border border-slate-200 p-5 hover:border-teal-500 hover:shadow-md transition-all bg-slate-50/50 hover:bg-white flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-teal-100/80 text-teal-800 text-[11px] font-bold truncate">
                    {career.categoryLabel}
                  </span>
                  <div className="flex space-x-1 shrink-0">
                    {career.riasecCodes.map((code) => (
                      <span
                        key={code}
                        className="w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center"
                        title={isEn ? `Holland Group ${code}` : `Nhóm Holland ${code}`}
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                  {career.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {career.shortSummary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 space-y-2">
                <div className="text-[11px] text-slate-500">
                  <strong className="text-slate-700">
                    {isEn ? 'Suggested Subjects:' : 'Môn gợi ý:'}
                  </strong>{' '}
                  {career.highSchoolSubjects.slice(0, 3).join(', ')}
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>{isEn ? 'Explore Training Roadmap' : 'Tìm hiểu lộ trình đào tạo'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEW 2026 FEATURES: 3D AUTOMOTIVE SIMULATION & ADMISSIONS 2026 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card A: 3D Automotive Technician Simulation */}
        <div
          onClick={onExploreTasks}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white p-7 sm:p-9 border border-teal-500/30 shadow-xl group cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-teal-500/15 blur-2xl pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
              <Wrench className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? '3D Interactive Career Lab (Three.js WebGL)'
                  : 'Trạm Chạm Nghề 3D Tương Tác (Three.js WebGL)'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight group-hover:text-amber-300 transition-colors">
              {isEn
                ? '3D Simulation: Automotive Diagnostic & Repair Technician'
                : 'Mô Phỏng 3D: Kỹ Thuật Viên Chẩn Đoán & Sửa Chữa Ô Tô'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isEn
                ? 'Rotate the 3D engine bay 360°, measure 12V battery voltage, inspect spark plugs, air filter, coolant, and lubricating oil, then test-start the engine right in your browser.'
                : 'Xoay 360° khoang máy động cơ, đo kiểm ắc-quy 12V, kiểm tra cụm bugi đánh lửa, lọc gió, nước làm mát, dầu bôi trơn và đề nổ máy thực tế ngay trên trình duyệt.'}
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-700/80 flex items-center justify-between relative z-10">
            <span className="text-xs text-teal-300 font-semibold">
              {isEn
                ? '✓ Includes Kolb Experiential Learning Reflection'
                : '✓ Có hướng dẫn phản tư theo chu trình học tập trải nghiệm Kolb'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs group-hover:translate-x-1 transition-transform">
              <span>{isEn ? 'Enter 3D Workshop' : 'Vào Xưởng 3D Ngay'}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Card B: Admissions 2026 & Aptitude Tests */}
        <div
          onClick={onViewAdmissions}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 text-white p-7 sm:p-9 border border-indigo-500/30 shadow-xl group cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? '2026 Admissions & Aptitude Exam Hub'
                  : 'Cập nhật Quy chế Tuyển sinh 2026 & Thi ĐGNL'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight group-hover:text-amber-300 transition-colors">
              {isEn
                ? '2026 Admissions Center & Official Exam Repository (HSA, TSA, V-ACT, SPT)'
                : 'Tâm Điểm Tuyển Sinh 2026 & Kho Đề HSA, TSA, V-ACT, SPT'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isEn
                ? 'Track the 6 latest MOET 2026 regulation updates (max 15 preferences, 6-semester transcript rules), access official sample papers, and practice curated tests with instant grading.'
                : 'Cập nhật 6 điểm mới Quy chế Bộ GD&ĐT 2026 (giới hạn 15 nguyện vọng, xét học bạ đủ 6 học kỳ), kho đề minh họa chính thức và phòng luyện đề tự chấm điểm.'}
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-700/80 flex items-center justify-between relative z-10">
            <span className="text-xs text-amber-300 font-semibold">
              {isEn
                ? '🎁 Includes 100% Free EIE IELTS & SAT Prep Scholarship'
                : '🎁 Tặng tài khoản luyện IELTS & SAT miễn phí cùng EIE Education'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-extrabold text-xs group-hover:translate-x-1 transition-transform">
              <span>{isEn ? 'Explore 2026 Hub' : 'Tra Cứu & Luyện Đề'}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE EXPERIENCE SHOWCASE */}
      {onViewEnterprise && (
        <section className="bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-teal-700/60 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? 'Connecting Schools & Partner Enterprises'
                    : 'Kết nối nhà trường & Doanh nghiệp đối tác'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {isEn
                  ? 'Register for Real-World Enterprise Career Tours'
                  : 'Đăng Ký Trải Nghiệm Thực Tế Tại Doanh Nghiệp'}
              </h2>
              <p className="text-teal-100/80 text-sm sm:text-base max-w-2xl">
                {isEn
                  ? 'Go beyond online tests—register for Factory Tours, Studio Visits, and Half-Day Job Shadowing to observe professionals in action.'
                  : 'Học sinh không chỉ làm trắc nghiệm trên máy mà còn có cơ hội đăng ký tham gia các đợt tham quan nhà máy (Factory Tour) và quan sát nghề nghiệp thực tế (Job Shadowing).'}
              </p>
            </div>
            <button
              onClick={onViewEnterprise}
              className="self-start md:self-auto inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0"
            >
              <span>
                {isEn ? 'View All Open Batches' : 'Xem tất cả đợt đăng ký'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEnterprises.map((batch) => (
              <div
                key={batch.id}
                onClick={onViewEnterprise}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-teal-500/30 border border-teal-400/30 text-teal-200 text-xs font-semibold">
                      {batch.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-full">
                      {isEn
                        ? `${batch.slotsLeft}/${batch.totalSlots} slots left`
                        : `Còn ${batch.slotsLeft}/${batch.totalSlots} suất`}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {batch.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-teal-100/90">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                      <span className="truncate">{batch.partner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                      <span>{batch.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                      <span>{batch.date}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>
                      {isEn
                        ? '100% Sponsored for High School Students'
                        : 'Miễn phí 100% cho học sinh THPT'}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. REAL STORIES PREVIEW */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {isEn
                ? 'Real People – Real Work – Real Perspectives'
                : 'Người thật – Việc thật – Góc nhìn thật'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isEn
                ? 'Listen to Career Stories Across Vietnam'
                : 'Lắng Nghe Câu Chuyện Nghề Nghiệp Thực Tế'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {isEn
                ? 'Understand both the pride and the real unseen hardships behind every profession before making your choice.'
                : 'Hiểu cả những niềm vui lẫn góc khuất vất vả của từng nghề qua chia sẻ từ người trong cuộc trước khi đưa ra quyết định.'}
            </p>
          </div>
          <button
            onClick={onWatchStories}
            className="self-start md:self-auto inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>
              {isEn
                ? `Watch All ${VIDEO_STORIES_DATA.length} Videos`
                : `Xem tất cả ${VIDEO_STORIES_DATA.length} video`}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              onClick={onWatchStories}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400/95 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-teal-700/90 font-semibold">
                      {video.careerTitle}
                    </span>
                    <span className="text-slate-200 text-[11px]">{video.channelName}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {isEn ? 'Featured Guest:' : 'Khách mời:'} {video.characterName} (
                    {video.organization})
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {video.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span>
                  {isEn
                    ? 'Watch & Answer Reflection Questions'
                    : 'Xem & Trả lời câu hỏi phản tư'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ETHICAL & PEDAGOGICAL GUIDELINES */}
      <section className="rounded-2xl bg-teal-50/80 border border-teal-200 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-teal-950">
              {t.home.ethicsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-teal-900/80 leading-relaxed">
              {t.home.ethicsDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
