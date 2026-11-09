import { useAuth } from './components/AuthContext';
import { authFetch } from './utils/authSession';
import { DEFAULT_PROFILE } from './utils/storage';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { ChamAiChatbot } from './components/ChamAiChatbot';
import { StudentProfile } from './types';
import { loadStudentProfile, saveStudentProfile } from './utils/storage';
import { Sparkles, HeartHandshake, ShieldCheck, HelpCircle } from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';

const HomeView = lazy(() => import('./components/HomeView').then(m => ({ default: m.HomeView })));
const ProfileView = lazy(() => import('./components/ProfileView').then(m => ({ default: m.ProfileView })));
const RecommendationsView = lazy(() => import('./components/RecommendationsView').then(m => ({ default: m.RecommendationsView })));
const SimulationTasksView = lazy(() => import('./components/SimulationTasksView').then(m => ({ default: m.SimulationTasksView })));
const EnterpriseExperienceView = lazy(() => import('./components/EnterpriseExperienceView').then(m => ({ default: m.EnterpriseExperienceView })));
const UniversityAdmissionsView = lazy(() => import('./components/UniversityAdmissionsView').then(m => ({ default: m.UniversityAdmissionsView })));
const VideoStoriesView = lazy(() => import('./components/VideoStoriesView').then(m => ({ default: m.VideoStoriesView })));
const ReportView = lazy(() => import('./components/ReportView').then(m => ({ default: m.ReportView })));
const AdminView = lazy(() => import('./components/DatabaseAdminView').then(m => ({ default: m.DatabaseAdminView })));
const PhuongAssistantModal = lazy(() => import('./components/PhuongAssistantModal').then(m => ({ default: m.PhuongAssistantModal })));

export default function App() {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [profileReady, setProfileReady] = useState(true);
  const [profileError, setProfileError] = useState('');
  const [profile, setProfile] = useState<StudentProfile>(() => loadStudentProfile());

  const [currentTab, setCurrentTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const tab = urlParams.get('tab');
      if (tab) return tab;
    }
    return 'home';
  });
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedMajorFilter, setSelectedMajorFilter] = useState<string | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isChamAiOpen, setIsChamAiOpen] = useState(false);
  const [chamAiInitialPrompt, setChamAiInitialPrompt] = useState<string | null>(null);

  // Synchronize tab state with URL query without losing lang parameter
  const handleNavigateTab = (tab: string) => {
    setCurrentTab(tab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tab);
      window.history.pushState({}, '', url.toString());
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab') || 'home';
        setCurrentTab(tab);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Always save profile changes locally so guests have full persistence
  useEffect(() => {
    saveStudentProfile(profile);
  }, [profile]);

  useEffect(() => {
    let cancelled = false;
    setProfileError('');
    if (!user) {
      setProfileReady(true);
      return;
    }
    setProfileReady(false);
    authFetch('/api/account?action=profile')
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.message);
        if (cancelled) return;
        if (d.data) {
          const merged = { ...DEFAULT_PROFILE, ...d.data.data, id: user.id };
          setProfile(merged);
          saveStudentProfile(merged);
          if (d.data.answers) {
            localStorage.setItem('cham_viec_riasec_answers', JSON.stringify(d.data.answers));
          }
        }
        setProfileReady(true);
      })
      .catch(() => {
        if (!cancelled) setProfileReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  useEffect(() => {
    if (!user || !profileReady || profile.id !== user.id) return;
    const timer = setTimeout(() => {
      authFetch('/api/account?action=profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile,
          answers: JSON.parse(localStorage.getItem('cham_viec_riasec_answers') || '{}'),
        }),
      }).catch(() => {});
    }, 700);
    return () => clearTimeout(timer);
  }, [profile, user?.id, profileReady]);

  const handleOpenTask = (taskId: string) => {
    setSelectedTaskId(taskId);
    handleNavigateTab('tasks');
  };

  const handleSelectMajor = (majorId: string) => {
    setSelectedMajorFilter(majorId);
    handleNavigateTab('admissions');
  };

  const handleAskChamAi = (question: string) => {
    setChamAiInitialPrompt(question);
    setIsChamAiOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigateTab}
        profile={profile}
        onOpenAssistant={() => setIsChamAiOpen(true)}
      />

      {profileError && <p role="alert" className="p-3 text-rose-700">{profileError}</p>}
      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Suspense fallback={<p role="status" className="py-10 text-center">{language === 'vi' ? 'Đang tải…' : 'Loading…'}</p>}>
        {currentTab === 'home' && (
          <HomeView
            onStartDiscovery={() => handleNavigateTab('profile')}
            onExploreTasks={() => handleNavigateTab('tasks')}
            onWatchStories={() => handleNavigateTab('videos')}
            onViewAdmissions={() => handleNavigateTab('admissions')}
            onViewRecommendations={() => handleNavigateTab('recommendations')}
            onViewEnterprise={() => handleNavigateTab('enterprise')}
          />
        )}

        {currentTab === 'profile' && user && !profileReady && <p>Đang tải hồ sơ…</p>}
        {currentTab === 'profile' && (!user || profileReady) && (
          <ProfileView key={user?.id || 'guest'}
            profile={profile}
            setProfile={setProfile}
            onGoToRecommendations={() => handleNavigateTab('recommendations')}
          />
        )}

        {currentTab === 'recommendations' && (
          <RecommendationsView
            profile={profile}
            setProfile={setProfile}
            onOpenTask={handleOpenTask}
            onSelectMajor={handleSelectMajor}
          />
        )}

        {currentTab === 'tasks' && (
          <SimulationTasksView
            selectedTaskId={selectedTaskId}
            setSelectedTaskId={setSelectedTaskId}
            profile={profile}
            setProfile={setProfile}
          />
        )}

        {currentTab === 'enterprise' && (
          <EnterpriseExperienceView />
        )}

        {currentTab === 'admissions' && (
          <UniversityAdmissionsView
            profile={profile}
            setProfile={setProfile}
            selectedMajorFilter={selectedMajorFilter}
            onAskAiAboutSchool={handleAskChamAi}
          />
        )}

        {currentTab === 'videos' && (
          <VideoStoriesView
            profile={profile}
            setProfile={setProfile}
            onOpenTask={handleOpenTask}
          />
        )}

        {currentTab === 'report' && (
          <ReportView profile={profile} />
        )}

        {currentTab === 'admin' && (
          <AdminView />
        )}
        </Suspense>
      </main>

      {/* CHẠM AI — Trợ lý hướng nghiệp (Floating Widget & Popup Drawer) */}
      <ChamAiChatbot key={user?.id || 'guest'}
        isOpen={isChamAiOpen}
        onClose={() => setIsChamAiOpen(false)}
        onOpen={() => setIsChamAiOpen(true)}
        profile={profile}
        currentContext={currentTab}
        initialPrompt={chamAiInitialPrompt}
        onClearInitialPrompt={() => setChamAiInitialPrompt(null)}
      />

      {/* Assistant Modal (Cô Phượng) */}
      <Suspense fallback={null}>
      {isAssistantOpen && <PhuongAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        profile={profile}
        currentTab={currentTab}
      />}
      </Suspense>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 font-bold text-slate-800 text-sm">
                <img 
                  src="/logo.png" 
                  alt="CHẠM VIỆC Logo" 
                  className="w-7 h-7 rounded-lg object-contain bg-white p-0.5 border border-slate-200 shadow-2xs" 
                />
                <span>{t.footer.subtitle}</span>
              </div>
              <p className="mt-1 text-slate-500">
                {language === 'vi' ? 'Thông điệp: ' : 'Motto: '}
                <strong>{t.footer.message}</strong>
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => handleNavigateTab('profile')}
                className="hover:text-teal-700 underline font-medium"
              >
                {t.footer.selfExplore}
              </button>
              <button
                onClick={() => handleNavigateTab('admissions')}
                className="hover:text-teal-700 underline font-medium"
              >
                {t.footer.cutoffs}
              </button>
              {user?.role === 'admin' && <button
                onClick={() => handleNavigateTab('admin')}
                className="hover:text-teal-700 underline font-medium"
              >
                {t.footer.audit}
              </button>}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
            <div>
              {t.footer.disclaimer}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.footer.privacyNote}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
