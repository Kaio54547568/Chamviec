import React, { useState } from 'react';
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

import { SemiconductorSimulation3D } from './simulations/SemiconductorSimulation3D';
import { CircuitSimulation3D } from './simulations/CircuitSimulation3D';
import { ArchitectureSimulation3D } from './simulations/ArchitectureSimulation3D';
import { AgricultureSimulation3D } from './simulations/AgricultureSimulation3D';
import { AutomotiveTechnicianSimulation } from './simulations/AutomotiveTechnicianSimulation';
import { useLanguage } from '../i18n/LanguageContext';

export const SimulationTasksView: React.FC<SimulationTasksViewProps> = ({
  selectedTaskId,
  setSelectedTaskId,
  profile,
  setProfile
}) => {
  const { t, language } = useLanguage();
  const currentTask = SIMULATION_TASKS.find((t) => t.id === selectedTaskId) || null;

  // Active 3D simulation modal state
  const [active3DModal, setActive3DModal] = useState<'semiconductor' | 'circuit' | 'architecture' | 'agriculture' | 'automotive' | null>(null);
  const [activeTab, setActiveTab] = useState<'3D' | '2D'>('3D');

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
      title: `Phản tư: ${currentTask.title}`,
      keyInsights: reflectionFeelings || 'Đã hoàn thành các giai đoạn thử thách mô phỏng.',
      readinessForChallenges: reflectionHardships || 'Cần tìm hiểu thêm về áp lực thực tế của nghề này.',
      differencesNoticed: '',
      nextMicroAction: reflectionNextStep || 'Thử một nhiệm vụ khác trong tuần tới.'
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <AutomotiveTechnicianSimulation onClose={() => setActive3DModal(null)} />
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-900 text-xs font-bold border border-cyan-200">
          <PlayCircle className="w-3.5 h-3.5 text-cyan-600" />
          <span>{t.simulation.title}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {language === 'vi' ? 'Chạm Thử Nghề: Phòng Thí Nghiệm 3D & Thử Vai Tình Huống' : 'Career Lab: 3D Simulations & Scenario Roleplay'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t.simulation.subtitle}
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('3D')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === '3D'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.simulation.tab3D}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/30 text-cyan-300 font-mono">{language === 'vi' ? '4 Labs 3D WebGL' : '4 3D WebGL Labs'}</span>
          </button>

          <button
            onClick={() => setActiveTab('2D')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === '2D'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.simulation.tab2D}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/30 text-amber-800 font-mono">{language === 'vi' ? '8 Tình huống' : '8 Scenarios'}</span>
          </button>
        </div>
      </div>

      {/* 3D LABS SHOWCASE SECTION */}
      {activeTab === '3D' && !currentTask && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Lab 1: Semiconductor & IC Packaging */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-800 hover:border-amber-400 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    Three.js WebGL Lab 01
                  </span>
                  <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                    {language === 'vi' ? 'Kỹ Thuật Bán Dẫn & Đóng Gói Vi Mạch 3D' : '3D Semiconductor & IC Packaging Lab'}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'vi' ? 'Trải nghiệm quy trình kiểm thử ATE, xoay định vị Pin 1 notch chip bán dẫn, gắn socket kiểm thử, cắm que đo và chạy chẩn đoán lỗi vi mạch.' : 'Experience ATE automated testing, rotate Pin 1 notch alignment, insert into test socket, connect probes, and run circuit diagnostics.'}
                </p>
                <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div>{language === 'vi' ? '• Mô hình: Wafer 300mm, Bare Die, Đế BGA & Test Socket' : '• Model: 300mm Wafer, Bare Die, BGA Substrate & Test Socket'}</div>
                  <div>{language === 'vi' ? '• Năng lực: Tư duy công nghệ cao & đo kiểm vi mạch (R & I)' : '• Competency: High-tech diagnostics & microcircuit testing (R & I)'}</div>
                </div>
              </div>

              <button
                onClick={() => setActive3DModal('semiconductor')}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>{language === 'vi' ? 'Vào Lab Bán Dẫn 3D' : 'Enter 3D Semiconductor Lab'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Lab 2: Architecture */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/40">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                    Three.js WebGL Lab 02
                  </span>
                  <h3 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                    {t.simulation.archTitle}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.simulation.archDesc}
                </p>
                <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div>{language === 'vi' ? '• Tương tác: Lắp ghép modular tường, mái dốc, bóng đổ mặt trời' : '• Interaction: Modular wall snapping, roof framing, solar sun path'}</div>
                  <div>{language === 'vi' ? '• Năng lực rèn luyện: Cảm quan không gian & thẩm mỹ (A & R)' : '• Competency: Spatial awareness & aesthetic design (A & R)'}</div>
                </div>
              </div>

              <button
                onClick={() => setActive3DModal('architecture')}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>{language === 'vi' ? 'Vào phòng Studio Kiến trúc' : 'Enter 3D Architecture Studio'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Lab 3: Agriculture */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                    Three.js WebGL Lab 03
                  </span>
                  <h3 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                    {t.simulation.agriTitle}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.simulation.agriDesc}
                </p>
                <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div>{language === 'vi' ? '• Tương tác: Cảm biến ánh sáng Lux, độ ẩm tưới nhỏ giọt, EC' : '• Interaction: Lux sensor tuning, soil drip moisture, nutrient EC'}</div>
                  <div>{language === 'vi' ? '• Năng lực rèn luyện: Nghiên cứu khoa học cây trồng (I & R)' : '• Competency: Plant science & agricultural research (I & R)'}</div>
                </div>
              </div>

              <button
                onClick={() => setActive3DModal('agriculture')}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>{language === 'vi' ? 'Vào Nhà kính Nông nghiệp 4.0' : 'Enter 4.0 Smart Greenhouse'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Lab 4: Automotive Technician */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-800 hover:border-teal-400 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/40">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider block">
                    Three.js WebGL Lab 04
                  </span>
                  <h3 className="font-bold text-white text-lg group-hover:text-teal-300 transition-colors">
                    {language === 'vi' ? 'Kỹ Thuật Viên Sửa Chữa Ô Tô 3D' : '3D Automotive Repair Technician'}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'vi' ? 'Tương tác trực tiếp khoang máy 3D: kiểm tra ắc quy 12V, thay lọc gió, đo điện cực bugi, bổ sung nước giải nhiệt và nổ máy thử nghiệm.' : 'Interact with live 3D engine bay: inspect 12V battery, replace air filter, check spark plug gap, top up coolant, and crank engine.'}
                </p>
                <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div>{language === 'vi' ? '• Tương tác: Ắc quy, bugi, lọc gió, que dầu, nổ máy RPM' : '• Interaction: Battery, spark plug, air filter, dipstick, RPM crank'}</div>
                  <div>{language === 'vi' ? '• Năng lực rèn luyện: Chẩn đoán & an toàn kỹ thuật (R - Realistic)' : '• Competency: Diagnostics & workshop safety (R - Realistic)'}</div>
                </div>
              </div>

              <button
                onClick={() => setActive3DModal('automotive')}
                className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>{language === 'vi' ? 'Vào Xưởng Chẩn Đoán Ô Tô 3D' : 'Enter 3D Auto Workshop'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Main Task List or Active Task Player */}
      {!currentTask ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SIMULATION_TASKS.map((task) => {
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
                      placeholder="Ví dụ: Em thấy rất hào hứng khi tìm ra nguyên nhân của lỗi/cách giải thích, nhưng hơi bối rối khi gặp tình huống bất ngờ..."
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
                      placeholder="Ví dụ: Em sẵn sàng ngồi suy nghĩ kiên nhẫn để tìm lỗi, nhưng cần rèn luyện thêm kỹ năng giao tiếp với mọi người..."
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
                      placeholder="Ví dụ: Tuần này em sẽ xem video câu chuyện nghề thật và hỏi thêm thầy cô dạy môn Tin/Lý/Văn..."
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
    </div>
  );
};
