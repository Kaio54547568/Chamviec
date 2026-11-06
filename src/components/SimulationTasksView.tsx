import { LabGallery } from './simulations/LabGallery';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  MessageSquare, 
  Award,
  Sparkles,
  BookOpen,
  Info
} from 'lucide-react';
import { CareerTask, StudentProfile, ReflectionRecord } from '../types';
import { SIMULATION_TASKS } from '../data/tasks';
import { saveStudentProfile } from '../utils/storage';

interface SimulationTasksViewProps {
  selectedTaskId: string | null;
  setSelectedTaskId: (id: string | null) => void;
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
}

const SemiconductorSimulation3D = lazy(() => import('./simulations/SemiconductorSimulation3D').then(m => ({ default: m.SemiconductorSimulation3D })));
const CircuitSimulation3D = lazy(() => import('./simulations/CircuitSimulation3D').then(m => ({ default: m.CircuitSimulation3D })));
const ArchitectureSimulation3D = lazy(() => import('./simulations/ArchitectureSimulation3D').then(m => ({ default: m.ArchitectureSimulation3D })));
const AgricultureSimulation3D = lazy(() => import('./simulations/AgricultureSimulation3D').then(m => ({ default: m.AgricultureSimulation3D })));
const AutomotiveTechnicianSimulation = lazy(() => import('./simulations/AutomotiveTechnicianSimulation').then(m => ({ default: m.AutomotiveTechnicianSimulation })));
import { useLanguage } from '../i18n/LanguageContext';
import { localizeTask } from '../utils/i18nData';

export const SimulationTasksView: React.FC<SimulationTasksViewProps> = ({
  selectedTaskId,
  setSelectedTaskId,
  profile,
  setProfile
}) => {
  const { t, language } = useLanguage();
  const localizedTasks = React.useMemo(() => SIMULATION_TASKS.map(task => localizeTask(task, language)), [language]);
  const currentTask = localizedTasks.find((task) => task.id === selectedTaskId) || null;

  // Active 3D simulation modal state
  const [active3DModal, setActive3DModal] = useState<'semiconductor' | 'circuit' | 'architecture' | 'agriculture' | 'automotive' | null>(null);
  const [activeTab, setActiveTab] = useState<'3D' | '2D'>(selectedTaskId ? '2D' : '3D');

  useEffect(()=>{if(selectedTaskId)setActiveTab('2D');},[selectedTaskId]);

  // Task active states
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [stageChoices, setStageChoices] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [scoreTotal, setScoreTotal] = useState(0);

  // Reflection form inputs
  const [reflectionFeelings, setReflectionFeelings] = useState('');
  const [reflectionHardships, setReflectionHardships] = useState('');
  const [reflectionNextStep, setReflectionNextStep] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const startTask = (task: CareerTask) => {
    setSelectedTaskId(task.id);
    setCurrentStageIdx(0);
    setStageChoices({});
    setIsCompleted(false);
    setScoreTotal(0);
    setReflectionFeelings('');
    setReflectionHardships('');
    setReflectionNextStep('');
    setReflectionSaved(false);
  };

  const handleSelectOption = (optionId: string, scoreDelta: number) => {
    const updatedChoices = { ...stageChoices, [currentStageIdx]: optionId };
    setStageChoices(updatedChoices);
    setScoreTotal((prev) => prev + scoreDelta);

    if (currentTask && currentStageIdx < currentTask.stages.length - 1) {
      // Advance to next stage after short pause or user action
    } else {
      setIsCompleted(true);
      // Mark completed in profile
      if (currentTask && !profile.completedTasks.includes(currentTask.id)) {
        const updated = {
          ...profile,
          completedTasks: [...profile.completedTasks, currentTask.id]
        };
        setProfile(updated);
        saveStudentProfile(updated);
      }
    }
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTask) return;

    const newReflection: ReflectionRecord = {
      id: 'ref_' + Date.now(),
      taskId: currentTask.id,
      date: new Date().toISOString().slice(0, 10),
      title: language === 'vi' ? `Phản tư: ${currentTask.title}` : `Reflection: ${currentTask.title}`,
      keyInsights: reflectionFeelings || (language === 'vi' ? 'Đã hoàn thành các giai đoạn thử thách mô phỏng.' : 'Completed the career simulation stages.'),
      readinessForChallenges: reflectionHardships || (language === 'vi' ? 'Cần tìm hiểu thêm về áp lực thực tế của nghề này.' : 'Need to explore more about the real-world demands of this career.'),
      differencesNoticed: '',
      nextMicroAction: reflectionNextStep || (language === 'vi' ? 'Thử một nhiệm vụ khác trong tuần tới.' : 'Try another career simulation task next week.')
    };

    const updatedProfile = {
      ...profile,
      reflections: [newReflection, ...profile.reflections]
    };
    setProfile(updatedProfile);
    saveStudentProfile(updatedProfile);
    setReflectionSaved(true);
  };

  return (
    <Suspense fallback={<p role="status">{language === 'vi' ? 'Đang tải mô phỏng…' : 'Loading simulation…'}</p>}>
    <div className="space-y-8 pb-16">
      {/* 3D Modals */}
      {active3DModal === 'semiconductor' && (
        <SemiconductorSimulation3D onClose={() => setActive3DModal(null)} />
      )}
      {active3DModal === 'circuit' && (
        <CircuitSimulation3D onClose={() => setActive3DModal(null)} />
      )}
      {active3DModal === 'architecture' && (
        <ArchitectureSimulation3D onClose={() => setActive3DModal(null)} />
      )}
      {active3DModal === 'agriculture' && (
        <AgricultureSimulation3D onClose={() => setActive3DModal(null)} />
      )}
      {active3DModal === 'automotive' && (
        <div className="lab-backdrop fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <AutomotiveTechnicianSimulation onClose={() => setActive3DModal(null)} />
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {language === 'vi' ? 'Chạm thử nghề' : 'Try a career'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {language === 'vi' ? 'Chọn một công việc, tự tay thử và khám phá điều bạn thích.' : 'Choose a workspace, try the work and discover what interests you.'}
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('3D')}
            aria-pressed={activeTab === '3D'}
            className={`min-h-11 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === '3D'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.simulation.tab3D}</span>
          </button>

          <button
            onClick={() => setActiveTab('2D')}
            aria-pressed={activeTab === '2D'}
            className={`min-h-11 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === '2D'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'vi' ? 'Tình huống nghề nghiệp' : 'Career scenarios'}</span>
          </button>
        </div>
      </div>

      {activeTab === '3D' && !currentTask && <LabGallery onOpen={setActive3DModal} />}

      {/* Main Task List or Active Task Player */}
      {activeTab === '2D' && <>
      {!currentTask ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {localizedTasks.map((task) => {
            const isDone = profile.completedTasks.includes(task.id);
            return (
              <div
                key={task.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      {task.careerTitle}
                    </span>
                    <span className="text-slate-400 font-medium">~{task.durationMinutes} {t.common.minutes}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {task.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {task.scenario}
                  </p>

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 space-y-1">
                    <div className="font-semibold text-slate-700">{language === 'vi' ? 'Các giai đoạn thử thách:' : 'Challenge Stages:'}</div>
                    {task.instructions.slice(0, 2).map((ins, i) => (
                      <div key={i} className="line-clamp-1 text-slate-500">• {ins}</div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs">
                    {isDone ? (
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> {language === 'vi' ? 'Đã làm' : 'Completed'}
                      </span>
                    ) : (
                      <span className="text-slate-400">{language === 'vi' ? 'Chưa thử nghiệm' : 'Not Attempted'}</span>
                    )}
                  </span>

                  <button
                    onClick={() => startTask(task)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>{isDone ? (language === 'vi' ? 'Làm lại nhiệm vụ' : 'Retake Task') : (language === 'vi' ? 'Bắt đầu thử vai' : 'Start Roleplay')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ACTIVE TASK INTERFACE */
        <div className="space-y-6">
          {/* Back button & Task Title Banner */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedTaskId(null)}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
            >
              <span>{language === 'vi' ? '← Trở về danh sách nhiệm vụ' : '← Back to Tasks List'}</span>
            </button>
            <div className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
              {language === 'vi' ? 'Thử vai:' : 'Roleplay:'} {currentTask.careerTitle}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Task Scenario Brief */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'vi' ? 'Bối cảnh nhiệm vụ thực tế' : 'Mission Context'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">{currentTask.title}</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {currentTask.scenario}
              </p>
            </div>

            {/* Stages Navigator */}
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
              {currentTask.stages.map((stg, i) => {
                const isCurrent = currentStageIdx === i;
                const isSelected = stageChoices[i] !== undefined;
                return (
                  <button
                    key={stg.stageNumber}
                    onClick={() => setCurrentStageIdx(i)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : isSelected
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    <span>{language === 'vi' ? 'Giai đoạn' : 'Stage'} {stg.stageNumber}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>

            {/* Stage Content */}
            {!isCompleted ? (
              <div className="p-6 sm:p-8 space-y-6">
                {(() => {
                  const stage = currentTask.stages[currentStageIdx];
                  const chosenOptionId = stageChoices[currentStageIdx];
                  const chosenOption = stage.options.find((o) => o.id === chosenOptionId);

                  return (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                          {language === 'vi' ? `Bước ${stage.stageNumber} trên ${currentTask.stages.length}` : `Step ${stage.stageNumber} of ${currentTask.stages.length}`}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {stage.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          {stage.description}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-slate-700">
                          {language === 'vi' ? 'Em sẽ đưa ra quyết định hoặc lựa chọn nào?' : 'Which decision or course of action would you take?'}
                        </div>
                        {stage.options.map((opt) => {
                          const isPicked = chosenOptionId === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectOption(opt.id, opt.scoreDelta)}
                              className={`w-full text-left p-4 rounded-2xl border transition-all space-y-2 ${
                                isPicked
                                  ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-300'
                                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-xs sm:text-sm text-slate-900">
                                  {opt.label}
                                </span>
                                {isPicked && (
                                  <span className="text-xs font-bold text-amber-700 shrink-0">{language === 'vi' ? '✓ Đã chọn' : '✓ Selected'}</span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500">
                                <strong>{language === 'vi' ? 'Lý giải chuyên môn:' : 'Professional Reasoning:'}</strong> {opt.reasoning}
                              </p>
                            </button>
                          );
                        })}
                      </div>

                      {/* Live Feedback for chosen option */}
                      {chosenOption && (
                        <div
                          className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-1 ${
                            chosenOption.feedbackTone === 'positive'
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                              : chosenOption.feedbackTone === 'warning'
                              ? 'bg-rose-50 border-rose-300 text-rose-900'
                              : 'bg-slate-100 border-slate-300 text-slate-900'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            {chosenOption.feedbackTone === 'positive' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                            )}
                            <span>{language === 'vi' ? 'Kết quả mô phỏng sau lựa chọn của em:' : 'Simulation Outcome After Your Choice:'}</span>
                          </div>
                          <p className="leading-relaxed pl-5">
                            {chosenOption.outcomeDescription}
                          </p>
                        </div>
                      )}

                      {/* Stage Next Step Navigation */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          disabled={currentStageIdx === 0}
                          onClick={() => setCurrentStageIdx((p) => p - 1)}
                          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold disabled:opacity-40"
                        >
                          {language === 'vi' ? 'Giai đoạn trước' : 'Previous Stage'}
                        </button>

                        {currentStageIdx < currentTask.stages.length - 1 ? (
                          <button
                            disabled={!chosenOptionId}
                            onClick={() => setCurrentStageIdx((p) => p + 1)}
                            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs disabled:opacity-40 flex items-center gap-1.5"
                          >
                            <span>{language === 'vi' ? 'Sang giai đoạn tiếp theo' : 'Next Stage'}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            disabled={!chosenOptionId}
                            onClick={() => setIsCompleted(true)}
                            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs disabled:opacity-40 flex items-center gap-1.5"
                          >
                            <span>{language === 'vi' ? 'Hoàn thành & Sang bước phản tư' : 'Complete & Start Reflection'}</span>
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* COMPLETED & REFLECTION FORM */
              <div className="p-6 sm:p-8 space-y-8">
                {/* Result Rubric Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'vi' ? 'Đánh giá theo Rubric minh bạch' : 'Transparent Rubric Assessment'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'vi' ? `Em đã hoàn thành thử vai: ${currentTask.title}` : `You completed the roleplay challenge: ${currentTask.title}`}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {currentTask.rubric.map((rub, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white border border-emerald-100 text-xs space-y-1">
                        <div className="font-bold text-emerald-800">{rub.criterion}</div>
                        <div className="text-slate-600 leading-normal">{rub.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-slate-600 italic">
                    {language === 'vi' ? '*Nhắc nhở: Không suy ra năng khiếu nghề từ một mini-game. Việc giải quyết chưa tối ưu chỉ là cơ hội để em nhận biết những gì mình cần học thêm, không phản ánh năng lực cố định của em.' : '*Reminder: A simulation exercise does not dictate vocational aptitude. Non-optimal choices simply highlight learning opportunities, not fixed capabilities.'}
                  </div>
                </div>

                {/* Kolb Reflection Form */}
                <form onSubmit={handleSaveReflection} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-amber-600" />
                      <span>{language === 'vi' ? 'Bước phản tư sau trải nghiệm (Chu trình Kolb)' : 'Post-Experience Reflection (Kolb Cycle)'}</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      {language === 'vi' ? 'Ghi lại cảm nhận chân thật giúp em hiểu rõ hơn bản thân sau thử thách này.' : 'Recording honest impressions helps deepen your self-awareness after this challenge.'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800">
                      {language === 'vi' ? '1. Khi giải quyết tình huống vừa rồi, em cảm thấy hứng thú ở khâu nào nhất? Cảm xúc của em ra sao?' : '1. While tackling this challenge, which phase interested you the most? How did you feel?'}
                    </label>
                    <textarea
                      required
                      value={reflectionFeelings}
                      onChange={(e) => setReflectionFeelings(e.target.value)}
                      placeholder={language === 'vi' ? 'Ví dụ: Em thấy rất hào hứng khi tìm ra nguyên nhân của lỗi/cách giải thích, nhưng hơi bối rối khi gặp tình huống bất ngờ...' : 'E.g., I felt engaged during diagnostic tracing, but slightly uncertain when unexpected hurdles emerged...'}
                      className="w-full h-20 p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800">
                      {language === 'vi' ? '2. Khó khăn nào của nghề này em cảm thấy mình sẵn sàng đối mặt và rèn luyện?' : '2. Which trade-off or difficulty of this profession are you willing to embrace and cultivate?'}
                    </label>
                    <textarea
                      required
                      value={reflectionHardships}
                      onChange={(e) => setReflectionHardships(e.target.value)}
                      placeholder={language === 'vi' ? 'Ví dụ: Em sẵn sàng ngồi suy nghĩ kiên nhẫn để tìm lỗi, nhưng cần rèn luyện thêm kỹ năng giao tiếp với mọi người...' : 'E.g., I am willing to build analytical patience and actively develop interpersonal communication skills...'}
                      className="w-full h-20 p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800">
                      {language === 'vi' ? '3. Em có muốn thử tiếp một nhiệm vụ khác hay tìm hiểu sâu hơn về nghề này không? Hành động nhỏ tiếp theo là gì?' : '3. Would you like to explore deeper or try another career task? What is your next micro-action?'}
                    </label>
                    <input
                      type="text"
                      required
                      value={reflectionNextStep}
                      onChange={(e) => setReflectionNextStep(e.target.value)}
                      placeholder={language === 'vi' ? 'Ví dụ: Tuần này em sẽ xem video câu chuyện nghề thật và hỏi thêm thầy cô dạy môn Tin/Lý/Văn...' : 'E.g., This week I will watch workplace documentary videos and discuss with teachers...'}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {reflectionSaved ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        {language === 'vi' ? 'Đã lưu phản tư vào hồ sơ học sinh!' : 'Saved reflection to your student dossier!'}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">
                        {language === 'vi' ? 'Bản phản tư sẽ được đưa vào Báo cáo hướng nghiệp.' : 'Reflections will be integrated into your career dossier.'}
                      </span>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => startTask(currentTask)}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{language === 'vi' ? 'Thử lại từ đầu' : 'Restart Challenge'}</span>
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs"
                      >
                        {language === 'vi' ? 'Lưu bản phản tư' : 'Save Reflection'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      </>}
    </div>
    </Suspense>
  );
};
