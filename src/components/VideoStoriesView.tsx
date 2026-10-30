import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Play, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Bookmark, 
  X,
  Search,
  Filter,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { VideoStory, StudentProfile, ReflectionRecord } from '../types';
import { VIDEO_STORIES_DATA } from '../data/videoStories';
import { saveStudentProfile } from '../utils/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface VideoStoriesViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onOpenTask: (taskId: string) => void;
}

export const VideoStoriesView: React.FC<VideoStoriesViewProps> = ({
  profile,
  setProfile,
  onOpenTask
}) => {
  const { t, language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null);
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [reflectionSuccess, setReflectionSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLangFilter, setSelectedLangFilter] = useState<string>('ALL');

  // Keyboard escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
        setReflectionSuccess(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const categories = useMemo(() => [
    { id: 'ALL', label: t.stories.categoryAll },
    { id: 'CongNghe', label: t.stories.categoryTech },
    { id: 'YTe', label: t.stories.categoryHealth },
    { id: 'GiaoDuc', label: t.stories.categoryEdu },
    { id: 'TruyenThong', label: t.stories.categoryMedia },
    { id: 'NongNghiep', label: t.stories.categoryAgri },
    { id: 'DichVu', label: t.stories.categoryService },
    { id: 'ThuCong', label: language === 'vi' ? 'Thủ công truyền thống' : 'Traditional Crafts' },
  ], [t, language]);

  const filteredVideos = useMemo(() => {
    return VIDEO_STORIES_DATA.filter((video) => {
      // Category filter
      if (selectedCategory !== 'ALL') {
        if (selectedCategory === 'CongNghe' && video.category !== 'CongNghe' && video.category !== 'KyThuat') return false;
        if (selectedCategory === 'TruyenThong' && video.category !== 'TruyenThong' && video.category !== 'NghiepThu') return false;
        if (selectedCategory === 'DichVu' && video.category !== 'DichVu' && video.category !== 'ThuCong') return false;
        if (selectedCategory === 'ThuCong' && video.category !== 'ThuCong') return false;
        if (selectedCategory !== 'CongNghe' && selectedCategory !== 'TruyenThong' && selectedCategory !== 'DichVu' && selectedCategory !== 'ThuCong' && video.category !== selectedCategory) return false;
      }

      // Language filter
      if (selectedLangFilter !== 'ALL') {
        if (selectedLangFilter === 'VI' && video.language !== 'Tiếng Việt') return false;
        if (selectedLangFilter === 'EN' && video.language !== 'Tiếng Anh') return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = video.title.toLowerCase().includes(q);
        const matchCareer = video.careerTitle.toLowerCase().includes(q);
        const matchChannel = video.channelName.toLowerCase().includes(q);
        const matchSummary = video.summary.toLowerCase().includes(q);
        const matchPerson = (video.personName || video.characterName || '').toLowerCase().includes(q);
        if (!matchTitle && !matchCareer && !matchChannel && !matchSummary && !matchPerson) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedLangFilter, searchQuery]);

  const handleToggleSaveVideo = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = [...profile.savedVideos];
    const index = current.indexOf(videoId);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(videoId);
    }
    const updated = { ...profile, savedVideos: current };
    setProfile(updated);
    saveStudentProfile(updated);
  };

  const handleSaveVideoReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVideo) return;

    const newRef: ReflectionRecord = {
      id: 'ref_video_' + Date.now(),
      videoId: selectedVideo.id,
      date: new Date().toISOString().slice(0, 10),
      title: `${language === 'vi' ? 'Phản tư video' : 'Video Reflection'}: ${selectedVideo.title}`,
      keyInsights: reflectionAnswer,
      readinessForChallenges: selectedVideo.realHardships.join('; '),
      differencesNoticed: `${language === 'vi' ? 'Nhân vật' : 'Professional'}: ${selectedVideo.characterName}`,
      nextMicroAction: language === 'vi' ? 'Tìm hiểu thêm về ngành đào tạo và điểm chuẩn của nghề này.' : 'Explore academic programs and cutoffs for this career.'
    };

    const updatedProfile = {
      ...profile,
      reflections: [newRef, ...profile.reflections]
    };
    setProfile(updatedProfile);
    saveStudentProfile(updatedProfile);
    setReflectionSuccess(true);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.stories.subtitle}</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {language === 'vi' ? `Hiển thị ${filteredVideos.length}/${VIDEO_STORIES_DATA.length} video đã xác minh` : `Showing ${filteredVideos.length}/${VIDEO_STORIES_DATA.length} verified videos`}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <span>{t.stories.title}</span>
          <Sparkles className="w-5 h-5 text-amber-500 hidden sm:inline" />
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {language === 'vi'
            ? 'Kho tư liệu video người thật – việc thật từ các chương trình của Đài Truyền hình Việt Nam (VTV7, VTV24) và các chuyên gia đầu ngành. Mỗi video đều có mốc thời gian đáng xem, phân tích thách thức thực tế và 5 câu hỏi phản tư theo mô hình SCCT.'
            : 'Authentic documentary videos featuring real professionals from official educational channels (VTV7, VTV24) and industry leaders. Each video contains key timestamps, realistic hardships, and 5 guided SCCT reflection prompts.'}
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'vi' ? 'Tìm theo tên nghề, nhân vật, kỹ năng, đài phát thanh/kênh...' : 'Search career, person, skills, channel...'}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedLangFilter}
              onChange={(e) => setSelectedLangFilter(e.target.value)}
              className="py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">{language === 'vi' ? 'Mọi ngôn ngữ' : 'All Languages'}</option>
              <option value="VI">Tiếng Việt</option>
              <option value="EN">English</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">
            {language === 'vi' ? 'Không tìm thấy video phù hợp' : 'No matching videos found'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {language === 'vi' ? 'Hãy thử đổi từ khóa tìm kiếm hoặc chọn danh mục "Tất cả lĩnh vực".' : 'Try searching for different keywords or resetting filters.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setSelectedLangFilter('ALL');
            }}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
          >
            {t.common.reset}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => {
            const isSaved = profile.savedVideos.includes(video.id);

            return (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="bg-white rounded-3xl border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Thumbnail / Header */}
                <div className="relative bg-slate-900 aspect-video flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVideo(video);
                    }}
                    className="absolute w-12 h-12 rounded-full bg-emerald-500/90 group-hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all z-10"
                    title={t.stories.watchAndReflect}
                  >
                    <Play className="w-5 h-5 ml-1 fill-current" />
                  </button>

                  <div className="absolute top-2.5 right-2.5 z-10">
                    <button
                      onClick={(e) => handleToggleSaveVideo(video.id, e)}
                      className={`p-2 rounded-xl backdrop-blur-md transition-colors ${
                        isSaved ? 'bg-amber-500 text-white' : 'bg-slate-900/60 text-white/80 hover:text-white hover:bg-slate-900/90'
                      }`}
                      title={isSaved ? 'Đã lưu' : 'Lưu video'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/95">
                    <span className="truncate font-semibold drop-shadow-xs">{video.channelName}</span>
                    <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      ✓ {t.common.verified}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between text-xs">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                        {video.careerTitle}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {video.publishDate}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {video.title}
                    </h3>

                    <div className="text-slate-500 text-[11px]">
                      <strong>{language === 'vi' ? 'Nhân vật / Chuyên gia:' : 'Featuring:'}</strong> {video.characterName}
                    </div>

                    <p className="text-slate-600 line-clamp-3 leading-relaxed">
                      {video.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {language === 'vi' ? `Kiểm duyệt: ${video.verifiedDate}` : `Verified: ${video.verifiedDate}`}
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white font-semibold text-xs transition-colors flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.stories.watchAndReflect}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DETAIL & REFLECTION MODAL (WITH PROMINENT CLOSE BUTTON) */}
      {selectedVideo && (
        <div 
          onClick={() => {
            setSelectedVideo(null);
            setReflectionSuccess(false);
            setReflectionAnswer('');
          }}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full p-5 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-auto max-h-[92vh] overflow-y-auto relative"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {selectedVideo.careerTitle}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {language === 'vi' ? `Kênh: ${selectedVideo.channelName}` : `Channel: ${selectedVideo.channelName}`}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {selectedVideo.title}
                </h3>
              </div>

              {/* CRITICAL: Explicit Close Button (X) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedVideo(null);
                  setReflectionSuccess(false);
                  setReflectionAnswer('');
                }}
                className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0 shadow-xs focus:ring-2 focus:ring-emerald-500"
                aria-label="Đóng cửa sổ"
                title={t.common.close}
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Video Player */}
            <div className="space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-md border border-slate-900">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Notice & Direct Platform Button */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    {language === 'vi'
                      ? 'Nếu video gặp hạn chế nhúng từ YouTube, bạn luôn có thể xem trực tiếp qua nút bên cạnh:'
                      : 'If iframe playback is restricted by YouTube, you can open it directly on YouTube:'}
                  </span>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shrink-0 shadow-xs transition-colors"
                >
                  <span>{t.stories.openYoutube}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Takeaway & Real Hardships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">
                  {language === 'vi' ? 'Tóm tắt bài học cốt lõi:' : 'Core Lesson Takeaway:'}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {selectedVideo.takeaway || selectedVideo.summary}
                </p>

                <h4 className="font-bold text-rose-900 pt-2 flex items-center gap-1">
                  <span>{t.stories.hardships}</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  {selectedVideo.realHardships.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>{t.stories.keyTimestamps}</span>
                </h4>
                <div className="space-y-1.5">
                  {selectedVideo.keyTimestamps.map((ts, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[11px] shrink-0">
                        {ts.time}
                      </span>
                      <span>{ts.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 SCCT Reflection Questions */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
              <h4 className="font-bold text-amber-950 text-sm flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>{t.stories.reflectionsTitle}</span>
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-amber-900 leading-relaxed font-medium">
                {selectedVideo.reflectionQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </div>

            {/* Reflection Note Input Form */}
            <form onSubmit={handleSaveVideoReflection} className="space-y-3">
              <label className="block text-xs font-bold text-slate-800">
                {language === 'vi'
                  ? `Ghi lại suy nghĩ của em sau khi xem câu chuyện của ${selectedVideo.characterName}:`
                  : `Record your personal reflection after watching ${selectedVideo.characterName}:`}
              </label>
              <textarea
                required
                value={reflectionAnswer}
                onChange={(e) => setReflectionAnswer(e.target.value)}
                placeholder={
                  language === 'vi'
                    ? 'Điều gì khiến em ấn tượng nhất? Khó khăn nào em sẵn sàng chấp nhận? Hành động nhỏ em muốn thử tuần này là gì?'
                    : 'What resonated with you the most? Which trade-off are you willing to accept? What is your next micro-action?'
                }
                className="w-full h-24 p-3 rounded-xl border border-slate-300 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                {reflectionSuccess ? (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {t.stories.reflectionSuccess}
                  </span>
                ) : (
                  <span className="text-xs text-slate-400">
                    {language === 'vi' ? 'Ghi chú sẽ được lưu vào Hồ sơ Báo cáo hướng nghiệp của bạn.' : 'Notes will be securely saved into your career dossier.'}
                  </span>
                )}
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedVideo(null);
                      setReflectionSuccess(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs"
                  >
                    {t.common.close}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                  >
                    {t.stories.saveReflection}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
