import React from "react";
import {
  ArrowRight,
  Compass,
  PlayCircle,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useAuth } from "./AuthContext";
interface HomeViewProps {
  onStartDiscovery: () => void;
  onExploreTasks: () => void;
  onWatchStories: () => void;
  onViewAdmissions: () => void;
  onViewRecommendations: () => void;
  onViewEnterprise?: () => void;
  onSelectCategory?: (key: string) => void;
}
export const HomeView: React.FC<HomeViewProps> = ({
  onStartDiscovery,
  onExploreTasks,
  onWatchStories,
  onViewAdmissions,
  onViewRecommendations,
  onViewEnterprise,
}) => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const vi = language === "vi";
  const journey = [
    {
      number: "01",
      icon: Compass,
      title: vi ? "Bắt đầu từ chính bạn" : "Start with yourself",
      text: vi
        ? "24 câu hỏi ngắn để khám phá điều bạn thích, cùng những môn học bạn yêu thích."
        : "24 short questions to explore your interests and favorite subjects.",
      action: vi ? "Khám phá bản thân" : "Discover your interests",
      onClick: onStartDiscovery,
    },
    {
      number: "02",
      icon: PlayCircle,
      title: vi ? "Thử trước khi chọn" : "Try before you choose",
      text: vi
        ? "Bước vào phòng thực hành 3D. Tự tay khám phá công việc thay vì chỉ đọc về nó."
        : "Step inside a 3D studio and explore what the work actually feels like.",
      action: vi ? "Chọn phòng thực hành" : "Choose a studio",
      onClick: onExploreTasks,
    },
    {
      number: "03",
      icon: GraduationCap,
      title: vi ? "Tìm hướng đi phù hợp" : "Find your next step",
      text: vi
        ? "Đối chiếu ngành học, trường đào tạo và thông tin tuyển sinh để lên kế hoạch."
        : "Compare majors, universities and admission information to plan your next step.",
      action: vi ? "Tìm ngành và trường" : "Find majors and schools",
      onClick: onViewAdmissions,
    },
  ];
  return (
    <div className="home-calm">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="section-eyebrow">
            {vi ? "DÀNH CHO HỌC SINH THPT" : "FOR HIGH SCHOOL STUDENTS"}
          </span>
          <h1>
            {vi ? (
              <>
                Tương lai bắt đầu
                <br />
                từ việc <em>hiểu mình.</em>
              </>
            ) : (
              <>
                Your future starts
                <br />
                with <em>knowing yourself.</em>
              </>
            )}
          </h1>
          <p>
            {vi
              ? "Không cần biết ngay mình sẽ làm nghề gì. Bắt đầu từ điều bạn tò mò, thử một công việc và từng bước tìm hướng đi của riêng mình."
              : "You do not need to have it all figured out. Follow your curiosity, try a career and find your own way forward."}
          </p>
          <div className="home-hero-actions">
            <button onClick={onStartDiscovery} className="action-primary">
              {vi
                ? user
                  ? "Tiếp tục khám phá"
                  : "Bắt đầu khám phá"
                : "Discover your interests"}
              <ArrowRight size={18} />
            </button>
            <button onClick={onExploreTasks} className="action-secondary">
              <PlayCircle size={18} />
              {vi ? "Thử một nghề 3D" : "Try a 3D studio"}
            </button>
          </div>
          <small>
            {vi
              ? "Khảo sát đầu tiên miễn phí · Có thể xem nội dung mà chưa cần tài khoản"
              : "First assessment is free · Browse without an account"}
          </small>
        </div>
        <div className="home-hero-visual">
          <img
            src="/assets/labs/architecture.webp"
            alt={
              vi
                ? "Không gian ngôi nhà trong phòng thực hành thiết kế 3D"
                : "An architectural model in the 3D design studio"
            }
          />
          <div className="hero-studio-label">
            <span>CHẠM STUDIO</span>
            <strong>
              {vi
                ? "Một không gian. Nhiều khả năng."
                : "One space. Many possibilities."}
            </strong>
            <button
              onClick={onExploreTasks}
              aria-label={vi ? "Khám phá phòng thực hành" : "Explore studios"}
            >
              <ArrowUpRight size={22} />
            </button>
          </div>
        </div>
      </section>
      <section className="home-journey">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              {vi ? "TỪ TÒ MÒ ĐẾN LỰA CHỌN" : "FROM CURIOSITY TO CHOICE"}
            </span>
            <h2>
              {vi
                ? "Đi từng bước, thấy rõ hơn."
                : "Small steps. A clearer direction."}
            </h2>
          </div>
          <button className="text-action" onClick={onViewRecommendations}>
            {vi ? "Xem kho nghề nghiệp" : "Browse careers"}
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="journey-grid">
          {journey.map((step) => (
            <article className="journey-card" key={step.number}>
              <div className="journey-card-top">
                <step.icon size={22} />
                <span>{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <button onClick={step.onClick}>
                {step.action}
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="home-feature">
        <div className="home-feature-image">
          <img
            src="/assets/labs/automotive.webp"
            alt={
              vi
                ? "Khám phá khoang động cơ trong mô phỏng ô tô"
                : "Explore an engine bay in the automotive simulation"
            }
            loading="lazy"
          />
        </div>
        <div>
          <span className="section-eyebrow">
            {vi ? "HỌC BẰNG TRẢI NGHIỆM" : "LEARN BY DOING"}
          </span>
          <h2>
            {vi
              ? `Chạm vào nghề.\nKhám phá điều bạn thích.`
              : `Try the work.\nFind what sparks your interest.`}
          </h2>
          <p>
            {vi
              ? "Từ thiết kế một ngôi nhà đến chẩn đoán động cơ. 5 phòng thực hành để bạn quan sát, thử nghiệm và tự tìm câu trả lời."
              : "From designing a home to diagnosing an engine. Five interactive studios to observe, experiment and find your own answers."}
          </p>
          <button className="action-primary" onClick={onExploreTasks}>
            {vi ? "Khám phá 5 phòng thực hành" : "Explore five studios"}
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
      <section className="home-more">
        <h2>
          {vi ? "Thêm một góc nhìn thực tế." : "A little more perspective."}
        </h2>
        <div className="home-more-grid">
          <button onClick={onWatchStories}>
            <BookOpen size={23} />
            <span>
              <strong>
                {vi ? "Nghe người trong nghề" : "Hear from professionals"}
              </strong>
              <small>
                {vi
                  ? "Công việc, cơ hội và cả những đánh đổi."
                  : "The work, the opportunities and the trade-offs."}
              </small>
            </span>
            <ArrowUpRight size={20} />
          </button>
          <button onClick={onViewEnterprise || onExploreTasks}>
            <Briefcase size={23} />
            <span>
              <strong>
                {vi ? "Đến gần môi trường làm việc" : "Visit a real workplace"}
              </strong>
              <small>
                {vi
                  ? "Tìm các chương trình trải nghiệm doanh nghiệp."
                  : "Find enterprise experience programs."}
              </small>
            </span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
