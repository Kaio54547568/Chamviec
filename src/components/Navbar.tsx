import React from 'react';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  PlayCircle, 
  FileText, 
  Sliders, 
  ShieldCheck,
  Briefcase,
  Globe
} from 'lucide-react';
import { StudentProfile } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  profile: StudentProfile;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  profile,
  onOpenAssistant
}) => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Compass },
    { id: 'profile', label: t.nav.profile, icon: Sparkles },
    { id: 'tasks', label: t.nav.tasks, icon: PlayCircle },
    { id: 'enterprise', label: t.nav.enterprise, icon: Briefcase },
    { id: 'admissions', label: t.nav.admissions, icon: GraduationCap },
    { id: 'videos', label: t.nav.videos, icon: BookOpen },
    { id: 'report', label: t.nav.report, icon: FileText },
    { id: 'admin', label: language === 'vi' ? 'Quản trị' : 'Admin', icon: Sliders },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-teal-100 shadow-xs">
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-2 2xl:gap-4 min-h-16 py-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white p-1 border border-teal-100/90 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/logo.png" 
                alt="CHẠM VIỆC Logo" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors whitespace-nowrap leading-none">
                  CHẠM VIỆC
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200 whitespace-nowrap leading-none shrink-0">
                  {t.brand.gradeBadge}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block whitespace-nowrap leading-tight mt-1">
                {t.brand.slogan}
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex items-center justify-evenly flex-1 gap-0.5 2xl:gap-1 px-1 2xl:px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-1 2xl:gap-1.5 px-2 2xl:px-3 py-2 rounded-lg text-[11px] 2xl:text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions: Language switcher & CHẠM AI Assistant */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Bilingual Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors whitespace-nowrap shrink-0"
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{language === 'vi' ? 'VI' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenAssistant}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-semibold text-xs shadow-sm hover:shadow transition-all group whitespace-nowrap shrink-0"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-3 h-3 text-amber-300" />
              </div>
              <span className="hidden sm:inline">{t.nav.chatButton}</span>
              <span className="sm:hidden">AI</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            </button>
          </div>
        </div>

        {/* Tablet/Mobile Nav Bar */}
        <div className="xl:hidden flex flex-wrap items-center justify-center gap-1.5 py-2 border-t border-slate-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-teal-600 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
