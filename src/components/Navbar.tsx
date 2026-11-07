import React, { useEffect, useRef } from "react";
import {
  Compass,
  Sparkles,
  PlayCircle,
  GraduationCap,
  MoreHorizontal,
  Globe,
  Briefcase,
  BookOpen,
  FileText,
  Sliders,
} from "lucide-react";
import { StudentProfile } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { useAuth } from "./AuthContext";
interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  profile: StudentProfile;
  onOpenAssistant: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const { language, setLanguage } = useLanguage();
  const { user } = useAuth();
  const menu = useRef<HTMLDetailsElement>(null);
  const vi = language === "vi";
  const primary = [
    { id: "home", label: vi ? "Trang chủ" : "Home", icon: Compass },
    { id: "profile", label: vi ? "Hiểu bản thân" : "Discover", icon: Sparkles },
    { id: "tasks", label: vi ? "Thử nghề 3D" : "3D Studios", icon: PlayCircle },
    {
      id: "admissions",
      label: vi ? "Điểm chuẩn & Trường" : "Scores & Universities",
      icon: GraduationCap,
    },
    {
      id: "enterprise",
      label: vi ? "Trải nghiệm doanh nghiệp" : "Enterprise visits",
      mobileLabel: vi ? "Doanh nghiệp" : "Visits",
      icon: Briefcase,
    },
  ];
  const secondary = [
    {
      id: "recommendations",
      label: vi ? "Khám phá nghề nghiệp" : "Career directory",
      icon: Compass,
    },
    {
      id: "videos",
      label: vi ? "Chuyện nghề thật" : "Career stories",
      icon: BookOpen,
    },
    {
      id: "report",
      label: vi ? "Báo cáo của bạn" : "Your report",
      icon: FileText,
    },
    ...(user?.role === "admin"
      ? [
          {
            id: "admin",
            label: vi ? "Quản trị" : "Administration",
            icon: Sliders,
          },
        ]
      : []),
  ];
  function navigate(tab: string) {
    if (menu.current) menu.current.open = false;
    setCurrentTab(tab);
  }
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (menu.current && !menu.current.contains(e.target as Node))
        menu.current.open = false;
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <button
          className="site-brand"
          onClick={() => navigate("home")}
          aria-label={vi ? "CHẠM VIỆC — Trang chủ" : "CHAM VIEC — Home"}
        >
          <img src="/logo.png" alt="" width={40} height={40} />
          <span>
            <strong>CHẠM VIỆC</strong>
            <small>
              {vi
                ? "Hiểu mình. Thử nghề. Chọn tương lai."
                : "Discover yourself. Explore your future."}
            </small>
          </span>
        </button>
        <button
          className="language-switch"
          onClick={() => setLanguage(vi ? "en" : "vi")}
          aria-label={vi ? "Switch to English" : "Chuyển sang tiếng Việt"}
        >
          <Globe size={16} />
          {vi ? "VI" : "EN"}
        </button>
        <nav
          className="primary-nav"
          aria-label={vi ? "Điều hướng chính" : "Main navigation"}
        >
          {primary.map((item) => (
            <button
              key={item.id}
              className={item.id === "home" ? "nav-home" : undefined}
              onClick={() => navigate(item.id)}
              aria-label={item.label}
              aria-current={currentTab === item.id ? "page" : undefined}
            >
              <item.icon size={17} />
              {"mobileLabel" in item ? (
                <>
                  <span className="nav-desktop-label">{item.label}</span>
                  <span className="nav-mobile-label">{item.mobileLabel}</span>
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </button>
          ))}
          <details
            ref={menu}
            className="more-nav"
            onKeyDown={(e) => {
              if (e.key === "Escape" && menu.current) {
                menu.current.open = false;
                menu.current.querySelector("summary")?.focus();
              }
            }}
          >
            <summary
              aria-label={vi ? "Mở các mục khác" : "More navigation"}
              className={
                secondary.some((x) => x.id === currentTab) ? "is-active" : ""
              }
            >
              <MoreHorizontal size={18} />
              <span>{vi ? "Thêm" : "More"}</span>
            </summary>
            <div className="more-nav-panel">
              {secondary.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  aria-current={currentTab === item.id ? "page" : undefined}
                >
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
};
