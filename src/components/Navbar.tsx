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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-white p-1 border border-teal-100/90 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/logo.png" 
                alt="CHẠM VIỆC Logo" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  CHẠM VIỆC
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                  Lớp 10–12
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                {t.brand.slogan}
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions: Language switcher, Local storage indicator & CHẠM AI Assistant */}
          <div className="flex items-center gap-2">
            {/* Bilingual Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors"
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>{language === 'vi' ? 'VI' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenAssistant}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-semibold text-xs shadow-sm hover:shadow transition-all group"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-amber-300" />
              </div>
              <span className="hidden sm:inline">{t.nav.chatButton}</span>
              <span className="sm:hidden">AI</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Bar */}
        <div className="xl:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-teal-600 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
