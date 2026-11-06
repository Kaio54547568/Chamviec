import { authFetch } from '../utils/authSession';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  AlertCircle, 
  HelpCircle, 
  Check, 
  ChevronDown,
  Square,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { StudentProfile } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

export type ChatStatus = 'idle' | 'sending' | 'streaming' | 'completed' | 'interrupted' | 'error';

interface ChamAiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  profile: StudentProfile;
  currentContext: string;
  initialPrompt?: string | null;
  onClearInitialPrompt?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  isError?: boolean;
  errorMessage?: string;
  errorDetail?: string;
  failedPrompt?: string;
  canRetry?: boolean;
  isFallback?: boolean;
}

export const ChamAiChatbot: React.FC<ChamAiChatbotProps> = ({
  isOpen,
  onClose,
  onOpen,
  profile,
  currentContext,
  initialPrompt,
  onClearInitialPrompt,
}) => {
  const { t, language } = useLanguage();

  const initialWelcomeText = language === 'vi'
    ? `Xin chào bạn! Mình là **CHẠM AI – Người bạn đồng hành hướng nghiệp** của ứng dụng **CHẠM VIỆC**.

Mình ở đây để lắng nghe, giúp bạn:
- 🧭 Khám phá sở thích, thế mạnh bản thân và phân tích trắc nghiệm RIASEC.
- 💼 Tìm hiểu công việc thực tế, kỹ năng cần thiết và cơ hội phát triển của các ngành nghề.
- 🎓 Tra cứu điểm chuẩn, đề án tuyển sinh và tổ hợp môn có căn cứ chính thức từ các trường đại học (bao gồm cả đề án mới năm 2025).
- 🏔️ Chia sẻ thông tin chính sách ưu tiên, cử tuyển, học bổng và ký túc xá cho học sinh miền núi, vùng xa và đồng bào DTTS.

*Hôm nay bạn đang có băn khoăn hay câu hỏi nào về chọn ngành, chọn nghề cần được hỗ trợ?*`
    : `Hello! I am **CHẠM AI – Your Vocational Guidance Companion** on **CHẠM VIỆC**.

I am here to assist you with:
- 🧭 Exploring personal strengths and interpreting RIASEC interest profiles.
- 💼 Understanding day-in-the-life realities, essential skills, and career development roadmaps.
- 🎓 Accessing officially verified college admissions cutoffs, subject combinations, and 2025 scheme reforms.
- 🏔️ Policies and scholarships supporting students from ethnic minority and remote mountainous regions.

*What questions or concerns regarding careers and college majors can I assist you with today?*`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_1',
      sender: 'ai',
      text: initialWelcomeText,
      timestamp: language === 'vi' ? 'Vừa xong' : 'Just now',
    },
  ]);

  // Synchronize initial welcome message when user toggles language before starting conversation
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome_1') {
        return [
          {
            id: 'welcome_1',
            sender: 'ai',
            text: initialWelcomeText,
            timestamp: language === 'vi' ? 'Vừa xong' : 'Just now',
          },
        ];
      }
      return prev;
    });
  }, [language, initialWelcomeText]);

  const [inputText, setInputText] = useState('');
  const [chatStatus, setChatStatus] = useState<ChatStatus>('idle');
  const [loadingStatus, setLoadingStatus] = useState(language === 'vi' ? 'Đang kết nối...' : 'Connecting...');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const quickPrompts = language === 'vi' ? [
    {
      label: '🌐 Nghề phiên dịch viên làm gì?',
      text: 'Nghề phiên dịch làm gì? Công việc thực tế, kỹ năng cần có và khó khăn của nghề này ra sao?',
    },
    {
      label: '⚡ Thiết kế vi mạch vs Kiểm thử chip',
      text: 'Thiết kế vi mạch khác kiểm thử chip thế nào? Hãy so sánh chi tiết công việc, kỹ năng và trường đào tạo.',
    },
    {
      label: '🏦 Giao dịch viên vs Chuyên viên tín dụng',
      text: 'So sánh giao dịch viên và chuyên viên tín dụng ngân hàng theo tiêu chí: công việc, môi trường, áp lực KPI và nhóm RIASEC.',
    },
    {
      label: '📚 Giỏi Văn và Anh nên chọn nghề gì?',
      text: 'Em thích Văn và Anh nhưng chưa biết chọn nghề gì phù hợp, hãy tư vấn cho em các hướng ngành phát triển triển vọng.',
    },
    {
      label: '🚀 Thống kê tuyển sinh 2025 mới',
      text: 'Hãy thống kê chi tiết các ngành và phương án tuyển sinh năm 2025 theo chương trình GDPT mới trong hệ thống dữ liệu?',
    },
    {
      label: '🎯 Tôi hợp nghề gì theo hồ sơ?',
      text: 'Theo bạn với hồ sơ sở thích, năng lực và kết quả trắc nghiệm của tôi thì tôi phù hợp với nhóm nghề nào nhất? Hãy phân tích theo cấu trúc: Nghề phù hợp, Vì sao phù hợp, Ngành học, Trường tham khảo và Điều cần cân nhắc.',
    },
    {
      label: '🏔️ Học sinh miền núi / DTTS',
      text: 'Em là học sinh miền núi / dân tộc thiểu số, điều kiện kinh tế gia đình còn khó khăn thì có những chính sách hỗ trợ, học bổng và các trường nào phù hợp?',
    },
  ] : [
    {
      label: '💻 Skills for Software Engineer?',
      text: 'What skills are needed for a software engineer? Outline technical foundations, soft skills, and degree programs.',
    },
    {
      label: '🌐 Translation & Interpretation Careers',
      text: 'What does an international conference interpreter do? What skills and trade-offs are involved?',
    },
    {
      label: '⚡ IC Design vs Semiconductor Testing',
      text: 'Compare IC Design and Chip Testing/Packaging in the semiconductor value chain.',
    },
    {
      label: '🎯 Career Recommendations for My Profile',
      text: 'Based on my RIASEC profile and strengths, which career fields suit me best? Outline: Suggested Careers, Why Suitable, Academic Majors, Universities, and Trade-offs.',
    },
    {
      label: '🚀 2025 Admission Reforms Summary',
      text: 'Provide a breakdown of the new 2025 admission schemes and CS K01 combination under the new Vietnamese curriculum.',
    },
  ];

  // Auto scroll to bottom
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, chatStatus]);

  // Adjust textarea height dynamically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [inputText]);

  // Handle external trigger with pre-filled question
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSendMessage(initialPrompt.trim());
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  // Stop Generation handler (AbortController)
  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setChatStatus('interrupted');
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || chatStatus === 'sending' || chatStatus === 'streaming') return;

    // Add user message immediately
    const userMsg: ChatMessage = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    setChatStatus('sending');
    setLoadingStatus(language === 'vi' ? 'CHẠM AI đang suy nghĩ...' : 'CHẠM AI is thinking...');

    const controller = new AbortController();
    abortControllerRef.current = controller;

    // Prepare assistant message placeholder
    const aiMsgId = 'ai_' + Date.now();
    let accumulatedText = '';

    try {
      // Build top RIASEC summary if completed
      const topRiasecList = Object.entries(profile.riasecScores || {})
        .sort((a, b) => b[1] - a[1])
        .filter(([, val]) => val > 0)
        .slice(0, 3)
        .map(([code, val]) => `Nhóm ${code} (${val} điểm)`);

      // Format recent chat history (exclude errors, max 10 turns)
      const chatHistory = messages
        .filter((m) => !m.isError && m.text.trim())
        .slice(-10)
        .map((m) => ({
          sender: m.sender,
          text: m.text,
        }));

      // Try SSE Streaming endpoint first (/api/cham-ai/stream)
      let streamWorked = false;
      try {
        const streamResponse = await authFetch('/api/cham-ai/stream', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            message: text,
            language,
            profile: {
              grade: profile.grade,
              favoriteSubjects: profile.favoriteSubjects,
              academicStrengths: profile.academicStrengths,
              activities: profile.activities,
              topRiasec: topRiasecList,
              riasecScores: profile.riasecScores,
              priorityValues: profile.priorityValues,
              savedCareers: profile.savedCareers,
              savedMajors: profile.savedMajors,
              preferredRegions: profile.preferredRegions,
              preferredProvinces: profile.preferredProvinces,
              budgetRange: profile.budgetRange,
              scholarshipInterest: profile.scholarshipInterest,
              estimatedScore: profile.estimatedScore,
              targetCombinations: profile.targetCombinations,
            },
            currentContext,
            chatHistory,
          }),
        });

        if (streamResponse.ok && streamResponse.body) {
          const reader = streamResponse.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';
          setChatStatus('streaming');

          // Add blank assistant message placeholder
          setMessages((prev) => [
            ...prev,
            {
              id: aiMsgId,
              sender: 'ai',
              text: '',
              timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
            },
          ]);

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (trimmedLine.startsWith('data: ')) {
                const dataJson = trimmedLine.slice(6).trim();
                if (!dataJson) continue;
                try {
                  const event = JSON.parse(dataJson);
                  if (event.type === 'chunk' && event.text) {
                    accumulatedText += event.text;
                    streamWorked = true;
                    setMessages((prev) =>
                      prev.map((m) => (m.id === aiMsgId ? { ...m, text: accumulatedText } : m))
                    );
                  } else if (event.type === 'error') {
                    throw new Error(event.errorMessage || 'AI đang bận, em vui lòng thử lại sau ít phút.');
                  }
                } catch (e: any) {
                  if (e.message && e.message.includes('AI đang bận')) throw e;
                }
              }
            }
          }

          if (accumulatedText.trim().length > 0) {
            setChatStatus('completed');
            abortControllerRef.current = null;
            return;
          }
        }
      } catch (streamErr: any) {
        if (controller.signal.aborted) {
          setChatStatus('interrupted');
          return;
        }
        console.warn('[CHAM AI] Streaming attempt failed or not supported, falling back to non-streaming:', streamErr);
      }

      // Non-streaming fallback: /api/cham-ai
      if (!streamWorked) {
        const response = await authFetch('/api/cham-ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            message: text,
            language,
            profile: {
              grade: profile.grade,
              favoriteSubjects: profile.favoriteSubjects,
              academicStrengths: profile.academicStrengths,
              activities: profile.activities,
              topRiasec: topRiasecList,
              riasecScores: profile.riasecScores,
              priorityValues: profile.priorityValues,
              savedCareers: profile.savedCareers,
              savedMajors: profile.savedMajors,
              preferredRegions: profile.preferredRegions,
              preferredProvinces: profile.preferredProvinces,
              budgetRange: profile.budgetRange,
              scholarshipInterest: profile.scholarshipInterest,
              estimatedScore: profile.estimatedScore,
              targetCombinations: profile.targetCombinations,
            },
            currentContext,
            chatHistory,
          }),
        });

        const data = await response.json();

        if (!response.ok || data?.success === false) {
          const studentFriendlyMessage = language === 'vi' 
            ? 'AI đang bận, em vui lòng thử lại sau ít phút.' 
            : 'AI is currently busy. Please try again in a few moments.';
          const errorReply: ChatMessage = {
            id: 'err_' + Date.now(),
            sender: 'ai',
            text: '',
            isError: true,
            errorMessage: studentFriendlyMessage,
            failedPrompt: text,
            canRetry: true,
            timestamp: new Date().toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages((prev) => prev.filter((m) => m.id !== aiMsgId).concat(errorReply));
          setChatStatus('error');
          return;
        }

        const replyText = data.reply || (language === 'vi' ? 'AI đang bận, em vui lòng thử lại sau ít phút.' : 'AI is currently busy. Please try again in a few moments.');
        const aiReply: ChatMessage = {
          id: 'ai_' + Date.now(),
          sender: 'ai',
          text: replyText,
          timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => prev.filter((m) => m.id !== aiMsgId).concat(aiReply));
        setChatStatus('completed');
      }
    } catch (err: any) {
      if (controller.signal.aborted) {
        setChatStatus('interrupted');
        return;
      }
      console.error('[CHAM AI Client fetch error]', err);

      const errorReply: ChatMessage = {
        id: 'err_' + Date.now(),
        sender: 'ai',
        text: '',
        isError: true,
        errorMessage: language === 'vi' ? 'AI đang bận, em vui lòng thử lại sau ít phút.' : 'AI is currently busy. Please try again in a few moments.',
        failedPrompt: text,
        canRetry: true,
        timestamp: new Date().toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => prev.filter((m) => m.id !== aiMsgId).concat(errorReply));
      setChatStatus('error');
    } finally {
      abortControllerRef.current = null;
    }
  };

  const handleRetry = (failedPrompt?: string) => {
    if (!failedPrompt) return;
    setMessages((prev) => prev.filter((m) => !(m.isError && m.failedPrompt === failedPrompt)));
    handleSendMessage(failedPrompt);
  };

  const handleEditFailedPrompt = (failedPrompt?: string) => {
    if (!failedPrompt) return;
    setInputText(failedPrompt);
    setMessages((prev) => prev.filter((m) => !(m.isError && m.failedPrompt === failedPrompt)));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleClearConversation = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([
      {
        id: 'welcome_' + Date.now(),
        sender: 'ai',
        text: initialWelcomeText,
        timestamp: language === 'vi' ? 'Vừa xong' : 'Just now',
      },
    ]);
    setShowClearConfirm(false);
    setChatStatus('idle');
  };

  // Keyboard shortcut handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Markdown Parser for structured rendering
  const renderFormattedMessage = (content: string, isStreamingThisMessage?: boolean) => {
    if (!content) {
      if (isStreamingThisMessage) {
        return (
          <span className="inline-flex items-center gap-1.5 text-xs text-teal-700 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
            <span>{language === 'vi' ? 'Đang phản hồi từng chữ...' : 'Streaming response...'}</span>
          </span>
        );
      }
      return null;
    }

    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let tableBuffer: string[] = [];

    const flushTable = () => {
      if (tableBuffer.length === 0) return;
      const rows = tableBuffer
        .filter((l) => !l.includes('---'))
        .map((l) =>
          l
            .split('|')
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
            .map((c) => c.trim())
        );

      if (rows.length > 0) {
        const headerRow = rows[0];
        const bodyRows = rows.slice(1);

        elements.push(
          <div key={'tbl_' + elements.length} className="overflow-x-auto my-3 rounded-xl border border-teal-200/90 shadow-2xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-teal-100/80 text-teal-950 font-bold border-b border-teal-200">
                  {headerRow.map((th, i) => (
                    <th key={i} className="p-2 sm:p-2.5 whitespace-nowrap bg-teal-200/50">
                      {parseInlineStyles(th)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100 bg-white">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-teal-50/40' : 'bg-white'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-2 sm:p-2.5 text-slate-700 align-top">
                        {parseInlineStyles(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableBuffer = [];
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        tableBuffer.push(trimmed);
      } else {
        flushTable();

        // Detect curated database fallback banner
        if (trimmed.includes('[Thông tin từ kho nghề') || trimmed.includes('[Verified CHẠM VIỆC Database')) {
          elements.push(
            <div key={'curated_' + idx} className="my-2 p-2.5 rounded-xl bg-teal-50 border border-teal-300 text-teal-900 text-xs font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                {language === 'vi'
                  ? 'Dữ liệu đối chiếu từ Kho Nghề & Điểm Tuyển Sinh CHẠM VIỆC'
                  : 'Verified Data from CHẠM VIỆC Career & Admissions Repository'}
              </span>
            </div>
          );
        } else if (!trimmed) {
          elements.push(<div key={'sp_' + idx} className="h-2" />);
        } else if (trimmed.startsWith('### ')) {
          elements.push(
            <h4 key={'h_' + idx} className="font-bold text-teal-950 text-sm mt-3 mb-1 flex items-center gap-1.5 border-b border-teal-100 pb-1">
              <span className="w-2 h-2 rounded-full bg-teal-600 inline-block"></span>
              {parseInlineStyles(trimmed.slice(4))}
            </h4>
          );
        } else if (trimmed.startsWith('## ')) {
          elements.push(
            <h3 key={'h2_' + idx} className="font-extrabold text-teal-900 text-sm mt-3 mb-1.5">
              {parseInlineStyles(trimmed.slice(3))}
            </h3>
          );
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
          const bulletText = trimmed.replace(/^[-*•]\s+/, '');
          elements.push(
            <div key={'li_' + idx} className="flex items-start gap-2 pl-1.5 my-1 text-slate-800">
              <span className="text-teal-600 font-bold text-sm leading-none shrink-0 mt-0.5">•</span>
              <div className="flex-1 leading-relaxed">{parseInlineStyles(bulletText)}</div>
            </div>
          );
        } else if (/^\d+\.\s+/.test(trimmed)) {
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
          elements.push(
            <div key={'num_' + idx} className="flex items-start gap-2 pl-1.5 my-1 text-slate-800">
              <span className="font-bold text-teal-700 text-xs shrink-0 mt-0.5">{numMatch ? numMatch[1] + '.' : '•'}</span>
              <div className="flex-1 leading-relaxed">{parseInlineStyles(numMatch ? numMatch[2] : trimmed)}</div>
            </div>
          );
        } else {
          elements.push(
            <p key={'p_' + idx} className="text-slate-800 leading-relaxed my-1">
              {parseInlineStyles(trimmed)}
            </p>
          );
        }
      }
    });

    flushTable();

    return (
      <div className="space-y-0.5">
        {elements}
        {isStreamingThisMessage && (
          <span className="inline-block w-1.5 h-3.5 bg-teal-600 ml-1 animate-pulse align-middle" />
        )}
      </div>
    );
  };

  const parseInlineStyles = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-slate-950">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="italic text-slate-600">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const isBusy = chatStatus === 'sending' || chatStatus === 'streaming';

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label={language === "vi" ? "Mở CHẠM AI Trợ lý hướng nghiệp" : "Open CHẠM AI Career Assistant"}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group border border-teal-400/40 cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center shadow-xs">
            <img src="/logo.png" alt="CHẠM AI" className="w-full h-full object-contain" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-teal-900"></span>
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-black tracking-tight text-white flex items-center gap-1">
              <span>CHẠM AI</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <div className="text-[10px] text-teal-200 font-medium">{language === "vi" ? "Bạn đồng hành hướng nghiệp" : "Career Companion"}</div>
          </div>
        </button>
      )}

      {/* CHAT POPUP / DRAWER */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-50 flex flex-col items-end w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div
            className={`bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? 'w-full sm:w-[720px] h-[95vh] sm:h-[820px] max-h-[95vh]'
                : 'w-full sm:w-[460px] h-[85vh] sm:h-[640px] max-h-[90vh]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-950 text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-white p-1 flex items-center justify-center font-black shadow-xs shrink-0 border border-teal-100">
                  <img src="/logo.png" alt="CHẠM AI" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-extrabold text-sm text-white tracking-tight">
                      CHẠM AI
                    </h3>
                    <span className="text-[9px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {language === "vi" ? "Người bạn đồng hành" : "Career Companion"}
                    </span>
                    {chatStatus === 'streaming' && (
                      <span className="text-[9px] font-mono text-teal-300 bg-teal-800/80 px-2 py-0.2 rounded-full border border-teal-500/40">
                        {language === "vi" ? "Đang truyền dữ liệu..." : "Streaming response..."}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-teal-200 truncate max-w-[240px] sm:max-w-none">
                    {language === "vi" ? "Dữ liệu tuyển sinh chính thức • Hiểu năng lực cá nhân" : "Verified Admissions Data • Self-Insight"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-teal-200">
                {/* Clear chat button */}
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                  title={language === "vi" ? "Xóa cuộc trò chuyện để bắt đầu lại" : "Reset conversation"}
                  aria-label="Xóa cuộc trò chuyện"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Expand / Minimize toggle button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
                  title={isExpanded ? (language === "vi" ? "Thu nhỏ" : "Minimize") : (language === "vi" ? "Mở rộng" : "Expand")}
                  aria-label="Thu nhỏ hoặc mở rộng khung chat"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                  title={language === "vi" ? "Đóng cửa sổ chat" : "Close chat"}
                  aria-label="Đóng cửa sổ chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Clear conversation confirmation banner */}
            {showClearConfirm && (
              <div className="bg-amber-100 border-b border-amber-300 p-3 text-xs text-amber-950 flex items-center justify-between gap-2 shrink-0 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{language === "vi" ? "Xóa toàn bộ tin nhắn trò chuyện hiện tại?" : "Clear all current chat messages?"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-2 py-1 rounded bg-white text-slate-700 text-[11px] font-medium border border-amber-300 hover:bg-slate-100 cursor-pointer"
                  >
                    {language === "vi" ? "Hủy" : "Cancel"}
                  </button>
                  <button
                    onClick={handleClearConversation}
                    className="px-2.5 py-1 rounded bg-amber-600 text-white text-[11px] font-bold hover:bg-amber-700 cursor-pointer"
                  >
                    {language === "vi" ? "Xác nhận" : "Confirm"}
                  </button>
                </div>
              </div>
            )}

            {/* Regulatory Safeguard Notice */}
            <div className="bg-teal-50/80 px-3.5 py-1.5 border-b border-teal-200/60 text-[10px] text-teal-900 flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span className="truncate">
                {language === "vi"
                  ? "Căn cứ từ đề án & điểm chuẩn chính thức đã xác minh. Hỗ trợ học sinh mọi vùng miền."
                  : "Grounded in verified official admission records. Supporting students nationwide."}
              </span>
            </div>

            {/* Chat Messages scroll area */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-slate-50/60">
              {messages.map((m, idx) => {
                const isLatestAi = m.sender === 'ai' && idx === messages.length - 1;
                const isCurrentlyStreaming = isLatestAi && chatStatus === 'streaming';

                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    {/* Normal message */}
                    {!m.isError && (
                      <div
                        className={`max-w-[92%] sm:max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                          m.sender === 'user'
                            ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-br-xs font-medium'
                            : 'bg-white text-slate-800 rounded-bl-xs border border-slate-200/90'
                        }`}
                      >
                        {m.sender === 'ai'
                          ? renderFormattedMessage(m.text, isCurrentlyStreaming)
                          : m.text}
                      </div>
                    )}

                    {/* Error message bubble */}
                    {m.isError && (
                      <div className="max-w-[92%] sm:max-w-[85%] rounded-2xl p-3.5 sm:p-4 text-xs bg-amber-50/90 border border-amber-200 text-slate-800 rounded-bl-xs shadow-2xs space-y-3">
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="font-bold text-slate-900 text-xs sm:text-sm">
                              {m.errorMessage || (language === 'vi' ? 'AI đang bận, em vui lòng thử lại sau ít phút.' : 'AI is currently busy. Please try again in a few moments.')}
                            </p>
                            {m.failedPrompt && (
                              <div className="text-[11px] text-slate-600 bg-white/80 p-2 rounded-xl border border-amber-200/60 mt-1">
                                <span className="font-semibold text-slate-700 block text-[10px] uppercase tracking-wider text-teal-800">
                                  {language === 'vi' ? 'Câu hỏi của em được giữ nguyên:' : 'Your question was preserved:'}
                                </span>
                                <span className="italic line-clamp-3 mt-0.5">"{m.failedPrompt}"</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {m.canRetry && m.failedPrompt && (
                          <div className="pt-1 flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleRetry(m.failedPrompt)}
                              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-[11px] shadow-xs active:scale-95 transition-all cursor-pointer"
                            >
                              <RefreshCw className="w-3.5 h-3.5" />
                              <span>{language === 'vi' ? 'Thử lại ngay' : 'Retry now'}</span>
                            </button>
                            <button
                              onClick={() => handleEditFailedPrompt(m.failedPrompt)}
                              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-medium text-[11px] border border-slate-200 transition-all cursor-pointer"
                            >
                              <span>{language === 'vi' ? 'Chỉnh sửa câu hỏi' : 'Edit question'}</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-400 px-1">
                      <span>{m.timestamp}</span>
                    </div>
                  </div>
                );
              })}

              {/* Sending status when no chunk arrived yet */}
              {chatStatus === 'sending' && (
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-teal-200 text-xs text-teal-800 w-fit shadow-2xs animate-pulse">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="font-medium">{loadingStatus}</span>
                </div>
              )}

              {chatStatus === 'interrupted' && (
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs flex items-center justify-between">
                  <span>{language === "vi" ? "Đã dừng câu trả lời theo yêu cầu của em." : "Generation paused upon request."}</span>
                  <button
                    onClick={() => handleRetry(messages[messages.length - 1]?.text)}
                    className="text-teal-700 font-bold hover:underline"
                  >
                    {language === "vi" ? "Tiếp tục hỏi →" : "Continue asking →"}
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Chips */}
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] text-slate-500 font-bold shrink-0 hidden sm:inline">{language === "vi" ? "Gợi ý câu hỏi:" : "Suggested Questions:"}</span>
              {quickPrompts.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(btn.text)}
                  disabled={isBusy}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 border border-slate-200 text-[11px] font-medium text-slate-700 whitespace-nowrap transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Input Form with Stop / Send toggle */}
            <div className="p-3 bg-white border-t border-slate-200 shrink-0">
              <div className="flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isBusy
                      ? (language === 'vi' ? 'AI đang phản hồi... bấm nút Dừng bên cạnh nếu muốn ngừng lại' : 'AI is replying... click Stop if you wish to pause')
                      : (language === 'vi' ? 'Nhập câu hỏi... (Nhấn Enter để gửi, Shift+Enter xuống dòng)' : 'Type your question... (Enter to send, Shift+Enter for new line)')
                  }
                  disabled={isBusy}
                  className="flex-1 px-3.5 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-[13px] focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none resize-none max-h-28 overflow-y-auto leading-relaxed disabled:bg-slate-50"
                />

                {isBusy ? (
                  <button
                    type="button"
                    onClick={handleStopGeneration}
                    aria-label="Dừng phản hồi"
                    className="px-3.5 h-10 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-xs active:scale-95 transition-all cursor-pointer"
                    title="Dừng phản hồi"
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>{language === "vi" ? "Dừng" : "Stop"}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSendMessage()}
                    disabled={!inputText.trim()}
                    aria-label="Gửi tin nhắn"
                    className="w-10 h-10 rounded-2xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 px-1">
                <span>{language === "vi" ? "Shift + Enter để xuống dòng" : "Shift + Enter for new line"}</span>
                <span>{language === "vi" ? "CHẠM AI • Đồng hành hướng nghiệp" : "CHẠM AI • Career Companion"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
