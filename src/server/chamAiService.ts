import { database } from './database.ts';
import { readCatalog } from './catalog.ts';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { GoogleGenAI } from '@google/genai';
import { UNIVERSITIES_DATA, ADMISSION_RECORDS } from '../data/admissions.ts';
import { CAREERS_DATA } from '../data/careers.ts';
import { MAJORS_DATA } from '../data/majors.ts';

let catalogLoadedAt=0;
async function refreshGroundingCatalog(){
 if(Date.now()-catalogLoadedAt<60000)return;
 const data=await readCatalog(['careers','majors','universities','admissions']);
 if(!data.length)return;
 const arrays:Record<string,any[]>={careers:CAREERS_DATA,majors:MAJORS_DATA,universities:UNIVERSITIES_DATA,admissions:ADMISSION_RECORDS};
 for(const [kind,array] of Object.entries(arrays)){const records=data.filter(r=>r.kind===kind).map(r=>r.data);if(records.length)array.splice(0,array.length,...records);}
 catalogLoadedAt=Date.now();
}

export function getGeminiApiKey(): string {
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim()) {
    return process.env.GEMINI_API_KEY.trim();
  }
  if (process.env.GOOGLE_API_KEY && process.env.GOOGLE_API_KEY.trim()) {
    return process.env.GOOGLE_API_KEY.trim();
  }
  if (process.env.GEMINI_KEY && process.env.GEMINI_KEY.trim()) {
    return process.env.GEMINI_KEY.trim();
  }

  const possiblePaths = [
    path.resolve(process.cwd(), '.env'),
    path.resolve(process.cwd(), '.env.local'),
    path.resolve('/app/applet/.env'),
    path.resolve(__dirname, '../../.env'),
    path.resolve(__dirname, '../.env'),
    path.resolve(__dirname, '.env'),
  ];

  for (const p of possiblePaths) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        const match = content.match(/GEMINI_API_KEY=["']?([^"'\r\n]+)["']?/);
        if (match && match[1]) {
          const found = match[1].trim();
          process.env.GEMINI_API_KEY = found;
          return found;
        }
      }
    } catch {
      // ignore
    }
  }

  return '';
}

// Get Gemini client dynamically with fresh environment check
export function getGeminiClient(): { ai: GoogleGenAI | null; keySource: string | null } {
  const cleanKey = getGeminiApiKey();
  if (!cleanKey) {
    return { ai: null, keySource: null };
  }

  const ai = new GoogleGenAI({
    apiKey: cleanKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  return { ai, keySource: 'env' };
}

// Normalize Vietnamese text for flexible keyword matching
function normalizeSearchText(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}

// Build compact, targeted grounding summary dynamically (< 2,500 chars instead of 125,000 chars)
export function buildDynamicGroundingContext(query: string = '', profile?: any): string {
  const qNorm = normalizeSearchText(query);
  const profileTokens = [
    ...(profile?.favoriteSubjects || []),
    ...(profile?.savedCareers || []),
    ...(profile?.savedMajors || []),
    ...(profile?.targetCombinations || []),
    ...(profile?.topRiasec || []),
  ].map(normalizeSearchText);

  const allTokens = [qNorm, ...profileTokens].join(' ');

  // 1. Select matching universities (max 3)
  let matchedUnis = UNIVERSITIES_DATA.filter((u) => {
    const code = normalizeSearchText(u.institutionCode || u.code || '');
    const short = normalizeSearchText(u.shortName || '');
    const name = normalizeSearchText(u.officialName || u.name || '');
    return (
      (code && allTokens.includes(code)) ||
      (short && allTokens.includes(short)) ||
      (name && allTokens.includes(name))
    );
  }).slice(0, 3);

  if (matchedUnis.length === 0) {
    matchedUnis = UNIVERSITIES_DATA.slice(0, 3);
  }

  const uniSummary = matchedUnis
    .map(
      (u) =>
        `- [${u.institutionCode || u.code}] ${u.officialName || u.name} (${u.shortName || ''}), Tỉnh/Thành: ${u.province || u.city}, Miền: ${u.region}, Web: ${u.officialWebsite || u.website}`
    )
    .join('\n');

  // 2. Select matching admission records (max 4)
  let matchedAdmissions = ADMISSION_RECORDS.filter((a) => {
    const uni = normalizeSearchText(a.universityName || '');
    const major = normalizeSearchText(a.majorName || '');
    const combo = normalizeSearchText(a.subjectCombination || '');
    return (
      (uni && allTokens.includes(uni)) ||
      (major && allTokens.includes(major)) ||
      (combo && allTokens.includes(combo))
    );
  }).sort((a,b)=>b.year-a.year || Number(b.isVerifiedOfficial)-Number(a.isVerifiedOfficial)).slice(0, 4);

  if (matchedAdmissions.length === 0) {
    matchedAdmissions = [...ADMISSION_RECORDS].sort((a,b)=>b.year-a.year).slice(0, 4);
  }

  const admSummary = matchedAdmissions
    .map(
      (a) =>
        `- Trường: ${a.universityName} | Ngành: ${a.majorName} (${a.majorCode}) | Loại: ${a.scoreType || 'chưa phân loại'} | Điểm: ${a.cutoffScore} | Thang: ${a.scoreScale} | Phương thức: ${a.method} | Nguồn (${a.sourceType}): ${a.sourceUrl} | Tổ hợp: ${a.subjectCombination} | Năm: ${a.year}`
    )
    .join('\n');

  // 3. Select matching careers (max 3)
  let matchedCareers = CAREERS_DATA.filter((c) => {
    const title = normalizeSearchText(c.title);
    const category = normalizeSearchText(c.categoryLabel);
    const riasec = c.riasecCodes.map((r: string) => r.toLowerCase());
    return (
      allTokens.includes(title) ||
      allTokens.includes(category) ||
      riasec.some((r: string) => allTokens.includes(r))
    );
  }).slice(0, 3);

  if (matchedCareers.length === 0) {
    matchedCareers = CAREERS_DATA.slice(0, 3);
  }

  const careerSummary = matchedCareers
    .map(
      (c) =>
        `- Nghề: ${c.title} (Nhóm: ${c.categoryLabel}, RIASEC: ${c.riasecCodes.join(', ')}) | Tóm tắt: ${c.shortSummary} | Môn THPT: ${c.highSchoolSubjects.join(', ')}`
    )
    .join('\n');

  return `
DỮ LIỆU ĐỐI CHIẾU XÁC MINH CỦA HỆ THỐNG:
TRƯỜNG ĐẠI HỌC:
${uniSummary}

ĐIỂM CHUẨN & ĐỀ ÁN XÁC MINH:
${admSummary}

NGHỀ NGHIỆP THAM KHẢO:
${careerSummary}
`;
}

export interface ProcessChamAiParams {
  message: string;
  language?: 'vi' | 'en';
  profile?: any;
  currentContext?: string;
  chatHistory?: Array<{ sender: 'ai' | 'user'; text: string }>;
  customAiClient?: any;
}

export interface ChamAiResponseResult {
  success: boolean;
  reply?: string;
  error?: string;
  errorMessage?: string;
  errorDetail?: string;
  canRetry: boolean;
  isOfflineMode: boolean;
}

export async function processChamAiChat(params: ProcessChamAiParams): Promise<ChamAiResponseResult> {
  const { message, language = 'vi', profile, currentContext, chatHistory, customAiClient } = params;
  await refreshGroundingCatalog().catch(()=>{});

  if (!message || !message.trim()) {
    return {
      success: false,
      error: 'EMPTY_MESSAGE',
      errorMessage: 'Tin nhắn không được để trống.',
      canRetry: false,
      isOfflineMode: false,
    };
  }

  const { ai: envAi } = getGeminiClient();
  const ai = customAiClient || envAi;

  if (!ai) {
    console.warn('[CHAM AI] GEMINI_API_KEY not set on server. Delivering curated database guidance.');
    const fallbackReply = searchCuratedDatabase(message, profile);
    return {
      success: true,
      reply: fallbackReply,
      canRetry: false,
      isOfflineMode: true,
    };
  }

  // System instruction matching the requirements for CHẠM AI
  const systemInstruction = `Bạn là "CHẠM AI – Người bạn đồng hành hướng nghiệp" trong ứng dụng "CHẠM VIỆC – Chạm nghề, chọn ngành, mở tương lai" dành cho học sinh THPT (lớp 10–12) tại Việt Nam.

VAI TRÒ & SỨ MỆNH:
1. Bạn là người bạn đồng hành lắng nghe, truyền cảm hứng và cung cấp thông tin hướng nghiệp khoa học, trung thực và sát thực tế.
2. Hỗ trợ mọi học sinh THPT Việt Nam, đặc biệt quan tâm tới học sinh miền núi, vùng sâu, vùng xa, học sinh đồng bào dân tộc thiểu số và những em có hoàn cảnh khó khăn.
3. KHÔNG thiên vị ngành STEM hay khối Kinh tế; tôn trọng và đánh giá công bằng các khối ngành Khoa học Xã hội, Ngôn ngữ, Sư phạm, Nghệ thuật, Nông lâm nghiệp, Du lịch, Công tác xã hội và Dạy nghề kỹ thuật.
4. Tôn trọng sự đa dạng về sở thích, năng lực và hoàn cảnh của học sinh. Không áp đặt một con đường duy nhất.

NGUYÊN TẮC CỐT LÕI (BẮT BUỘC TUÂN THỦ):
1. VỀ ĐIỂM CHUẨN VÀ TUYỂN SINH:
   - Chỉ cung cấp số liệu có trong cơ sở dữ liệu bên dưới. sourceType=official là nguồn chính thức; sourceType=reference phải nói rõ nguồn tham khảo cần đối chiếu, không khẳng định đã xác minh chính thức.
   - Nêu rõ năm, phương thức xét tuyển, tổ hợp môn và nguồn đề án/văn bản xác minh.
   - Không suy loại điểm từ năm. scoreType=cutoff là điểm trúng tuyển, scoreType=floor là điểm sàn nhận hồ sơ. Năm 2025 và 2026 đã có công bố chính thức ở nhiều trường. Nêu đúng phương thức, tổ hợp, thang điểm, nguồn và tình trạng có dữ liệu của từng bản ghi; không coi điểm sàn là điểm trúng tuyển.
   - Nếu trong cơ sở dữ liệu KHÔNG có trường/ngành học sinh hỏi: Phải nói rõ "CHẠM AI hiện chưa có dữ liệu điểm chuẩn xác minh cho trường/ngành này. Bạn nên kiểm tra trực tiếp tại website tuyển sinh chính thức của trường nhé." Tuyệt đối không tự suy đoán hay bịa điểm.

2. KHI HỌC SINH HỎI ĐỊNH HƯỚNG / KHÁM PHÁ NGHỀ:
   - Nếu học sinh đã cung cấp hồ sơ (kết quả RIASEC, môn học yêu thích, năng lực, vị trí địa lý, hoàn cảnh): Phải đọc và lồng ghép tự nhiên thông tin đó (ví dụ: "Dựa trên kết quả khám phá bản thân, em có xu hướng nhóm Xã hội và Nghệ thuật...").
   - Nếu học sinh CHƯA thực hiện khảo sát: KHÔNG được tự bịa kết quả khảo sát. Khuyến khích học sinh làm bài trắc nghiệm 24 câu trong mục "Khám phá bản thân".
   - Khi học sinh hỏi thế mạnh cụ thể (ví dụ: giỏi Văn, Sử, Anh, không thích Toán):
     Đưa ra các hướng ngành có lý giải rõ ràng: Báo chí - Truyền thông, Ngôn ngữ, Luật, Sư phạm (Văn/Sử/Anh), Du lịch - Khách sạn, Quan hệ quốc tế, Tâm lý học, Công tác xã hội... Phân tích cơ hội việc làm và lưu ý thực tế.
   - Cấu trúc tư vấn rõ ràng, súc tích:
     ### 1. Nghề nghiệp & Ngành học gợi ý
     ### 2. Vì sao phù hợp với bạn
     ### 3. Trường đào tạo có thể tham khảo
     ### 4. Điều cần lưu ý và rèn luyện

3. HỖ TRỢ HỌC SINH MIỀN NÚI & HOÀN CẢNH KHÓ KHĂN:
   - Cung cấp thông tin về chính sách cử tuyển, ưu tiên khu vực (KV1, KV2-NT), chính sách miễn giảm học phí theo Nghị định 81/CP, ký túc xá và học bổng hỗ trợ.
   - Giới thiệu các trường ĐH/CĐ khu vực có uy tín (như ĐH Tây Bắc, ĐH Thái Nguyên, ĐH Tây Nguyên, ĐH Đà Lạt, ĐH Cần Thơ, các trường Cao đẳng Nghề chất lượng cao).

4. KHI HỌC SINH YÊU CẦU SO SÁNH:
   - Dùng BẢNG MARKDOWN phân tích tiêu chí rõ ràng: Chương trình học | Kỹ năng cần | Môi trường làm việc | Cơ hội việc làm | Điểm xét tuyển tham khảo.

5. PHONG CÁCH:
   - Thân thiện, chân thành, khuyến khích học sinh tự tin, định dạng Markdown đẹp, dùng gạch đầu dòng và in đậm điểm mấu chốt.

--- CƠ SỞ DỮ LIỆU ĐÃ XÁC MINH CỦA HỆ THỐNG ---
${buildDynamicGroundingContext(message, profile)}

${language === 'en'
  ? `CRITICAL LANGUAGE INSTRUCTION: The user is browsing the application in ENGLISH. You MUST formulate your entire response in clear, encouraging, natural, and helpful ENGLISH for high school students. Retain official proper names (such as "CHẠM VIỆC", Vietnamese university names, and combination codes like K01, A00, HSA, TSA). Do NOT reply in Vietnamese.`
  : `YÊU CẦU NGÔN NGỮ: Trả lời bằng tiếng Việt thân thiện, rõ ràng, dễ hiểu cho học sinh THPT.`}
`;

  // Build profile context safely without exposing private data
  let profileContext = 'Học sinh chưa tạo hồ sơ.';
  if (profile) {
    const parts: string[] = [];
    if (profile.grade) parts.push(`- Khối lớp: ${profile.grade}`);
    if (profile.favoriteSubjects && profile.favoriteSubjects.length > 0) {
      parts.push(`- Môn học yêu thích: ${profile.favoriteSubjects.join(', ')}`);
    }
    if (profile.academicStrengths && profile.academicStrengths.length > 0) {
      parts.push(`- Năng lực học tập: ${profile.academicStrengths.join(', ')}`);
    }
    if (profile.topRiasec && profile.topRiasec.length > 0) {
      parts.push(`- Kết quả trắc nghiệm RIASEC: ${profile.topRiasec.join(', ')}`);
    } else if (profile.riasecScores) {
      const topCodes = Object.entries(profile.riasecScores)
        .sort((a: any, b: any) => (b[1] as number) - (a[1] as number))
        .filter((entry: any) => (entry[1] as number) > 0)
        .slice(0, 3)
        .map(([code, score]) => `Nhóm ${code} (${score} điểm)`);
      if (topCodes.length > 0) {
        parts.push(`- Kết quả trắc nghiệm RIASEC: ${topCodes.join(', ')}`);
      }
    }
    if (profile.priorityValues && profile.priorityValues.length > 0) {
      parts.push(`- Giá trị nghề nghiệp ưu tiên: ${profile.priorityValues.join(', ')}`);
    }
    if (profile.savedCareers && profile.savedCareers.length > 0) {
      parts.push(`- Nghề đang quan tâm: ${profile.savedCareers.join(', ')}`);
    }
    if (profile.savedMajors && profile.savedMajors.length > 0) {
      parts.push(`- Ngành đang quan tâm: ${profile.savedMajors.join(', ')}`);
    }
    if (profile.preferredProvinces && profile.preferredProvinces.length > 0) {
      parts.push(`- Tỉnh/Thành muốn học tập: ${profile.preferredProvinces.join(', ')}`);
    } else if (profile.preferredRegions && profile.preferredRegions.length > 0) {
      parts.push(`- Khu vực mong muốn: ${profile.preferredRegions.join(', ')}`);
    }
    if (profile.budgetRange) {
      parts.push(`- Mức học phí mong muốn: ${profile.budgetRange}`);
    }
    if (profile.scholarshipInterest) {
      parts.push(`- Quan tâm chính sách học bổng/hỗ trợ học phí: Có`);
    }
    if (profile.estimatedScore) {
      parts.push(`- Điểm thi tốt nghiệp THPT dự kiến: ${profile.estimatedScore} điểm`);
    }
    if (profile.targetCombinations && profile.targetCombinations.length > 0) {
      parts.push(`- Tổ hợp xét tuyển dự kiến: ${profile.targetCombinations.join(', ')}`);
    }

    if (parts.length > 0) {
      profileContext = `HỒ SƠ HỌC SINH ĐÃ XÁC LẬP:\n${parts.join('\n')}`;
    }
  }

  // Construct conversation contents with history
  const contents: any[] = [];

  if (Array.isArray(chatHistory) && chatHistory.length > 0) {
    // Include up to last 6 messages
    const recent = chatHistory.slice(-6);
    for (const msg of recent) {
      if (msg.text && msg.text.trim()) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text.trim() }],
        });
      }
    }
  }

  const promptText = `[NGỮ CẢNH HỒ SƠ HỌC SINH]
${profileContext}

[NGỮ CẢNH VỊ TRÍ ỨNG DỤNG ĐANG XEM]
${currentContext || 'Trang chủ'}

[CÂU HỎI HIỆN TẠI CỦA HỌC SINH]
"${message}"

Hãy trả lời học sinh với vai trò "CHẠM AI – Người bạn đồng hành hướng nghiệp" súc tích, chân thành, có cấu trúc rõ ràng và căn cứ dữ liệu chính xác.`;

  contents.push({
    role: 'user',
    parts: [{ text: promptText }],
  });

  try {
    // Supported Gemini models strictly following gemini-api skill:
    // 1. Primary standard text model: gemini-3.8-flash (or process.env.GEMINI_MODEL if specified)
    // 2. Primary fallback model: gemini-flash-latest
    // 3. Lightweight fallback model: gemini-3.1-flash-lite
    // (Never use deprecated 1.5/2.0 or paid models)
    const configuredModel = process.env.GEMINI_MODEL?.trim();
    const modelsToTry: string[] = [
      configuredModel,
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
      'gemini-flash-latest',
    ].filter(Boolean) as string[];

    // Helper to detect 503 UNAVAILABLE or overload transients
    const is503OrOverloaded = (err: any): boolean => {
      if (!err) return false;
      const status = err?.status || err?.statusCode || err?.code;
      if (status === 503 || status === 429 || status === 502 || status === 504) {
        return true;
      }
      const msg = String(err?.message || err).toLowerCase();
      return (
        msg.includes('503') ||
        msg.includes('unavailable') ||
        msg.includes('overloaded') ||
        msg.includes('high demand') ||
        msg.includes('temporarily unavailable') ||
        msg.includes('service unavailable') ||
        msg.includes('resource_exhausted') ||
        msg.includes('rate limit') ||
        msg.includes('econnreset')
      );
    };

    const isNotFoundError = (err: any): boolean => {
      const msg = String(err?.message || err).toLowerCase();
      const status = err?.status || err?.statusCode || err?.code;
      return (
        status === 404 ||
        msg.includes('404') ||
        msg.includes('not_found') ||
        msg.includes('not found') ||
        msg.includes('not supported')
      );
    };

    let response: any = null;
    let lastError: any = null;
    let successfulModel: string | null = null;

    // Outer loop: Try supported models sequentially if previous fails
    for (const modelName of modelsToTry) {
      console.log(`[CHAM AI] Attempting Gemini model: ${modelName}`);

      // Inner loop: Retry up to 2 times on 503 / overload with exponential backoff and jitter
      const MAX_RETRIES = 2;
      let attempt = 0;
      let modelSucceeded = false;

      while (attempt <= MAX_RETRIES) {
        try {
          const callPromise = ai.models.generateContent({
            model: modelName,
            contents: contents,
            config: {
              systemInstruction,
              thinkingConfig: {
                thinkingBudget: 0,
              },
            },
          });

          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('TIMEOUT_15S')), 15000)
          );

          response = await Promise.race([callPromise, timeoutPromise]);
          if (response && response.text) {
            successfulModel = modelName;
            modelSucceeded = true;
            break;
          }
        } catch (callErr: any) {
          lastError = callErr;
          console.warn(
            `[CHAM AI] Error calling model ${modelName} (attempt ${attempt + 1}/${MAX_RETRIES + 1}):`,
            callErr?.message || callErr
          );

          // If model is not found / unsupported on this key, do not retry this model; jump to next model immediately
          if (isNotFoundError(callErr)) {
            console.warn(`[CHAM AI] Model ${modelName} not available on this API key, switching to next fallback model...`);
            break;
          }

          // If error is 503 UNAVAILABLE or overload, retry up to 3 times with exponential backoff + jitter
          if (is503OrOverloaded(callErr) && attempt < MAX_RETRIES) {
            // Exponential backoff: attempt 0 -> ~1000ms, attempt 1 -> ~2000ms, attempt 2 -> ~4000ms
            const baseDelay = 1000 * Math.pow(2, attempt);
            // Random jitter between 200ms and 600ms to prevent thundering herd
            const jitter = Math.floor(Math.random() * 400) + 200;
            const delayMs = baseDelay + jitter;

            console.log(
              `[CHAM AI] 503 UNAVAILABLE / Overload detected. Retrying model ${modelName} in ${delayMs}ms (retry ${attempt + 1}/${MAX_RETRIES})...`
            );
            await new Promise((resolve) => setTimeout(resolve, delayMs));
            attempt++;
            continue;
          }

          // Non-retryable error (e.g. auth 401/403) or max retries reached for this model
          break;
        }
      }

      if (modelSucceeded && response && response.text) {
        console.log(`[CHAM AI] Successfully generated response using model: ${successfulModel}`);
        break;
      }
    }

    if (!response || !response.text) {
      if (lastError) {
        throw lastError;
      }
      throw new Error('NO_RESPONSE_FROM_AI');
    }

    const replyText = response.text.trim();

    if (!replyText) {
      return {
        success: false,
        error: 'EMPTY_AI_RESPONSE',
        errorMessage: 'AI đang bận, em vui lòng thử lại sau ít phút.',
        canRetry: true,
        isOfflineMode: false,
      };
    }

    return {
      success: true,
      reply: replyText,
      canRetry: false,
      isOfflineMode: false,
    };
  } catch (err: any) {
    console.error('[CHAM AI Backend Error]', err);

    let errorCode = 'API_ERROR';
    // Friendly, student-appropriate message per prompt requirement
    let errorMessage = 'AI đang bận, em vui lòng thử lại sau ít phút.';
    const detail = err?.message || String(err);

    const is503 = 
      err?.status === 503 || 
      detail.includes('503') || 
      detail.includes('UNAVAILABLE') || 
      detail.includes('overload') ||
      detail.includes('high demand') ||
      detail.includes('temporarily unavailable');

    if (is503) {
      errorCode = 'AI_OVERLOADED_503';
      errorMessage = 'AI đang bận, em vui lòng thử lại sau ít phút.';
    } else if (err?.status === 429 || detail.includes('quota') || detail.includes('RESOURCE_EXHAUSTED')) {
      errorCode = 'RATE_LIMIT';
      errorMessage = 'AI đang bận, em vui lòng thử lại sau ít phút.';
    } else if (err?.status === 403 || err?.status === 401 || detail.includes('API_KEY_INVALID') || detail.includes('API key not valid')) {
      errorCode = 'AUTH_ERROR';
      errorMessage = 'Chưa thể kết nối tới trợ lý AI do cấu hình máy chủ. Vui lòng thử lại sau.';
    } else if (detail.includes('TIMEOUT')) {
      errorCode = 'TIMEOUT';
      errorMessage = 'AI đang bận, em vui lòng thử lại sau ít phút.';
    } else if (detail.includes('fetch failed') || detail.includes('ENOTFOUND')) {
      errorCode = 'NETWORK_ERROR';
      errorMessage = 'Lỗi kết nối mạng máy chủ tới AI, em vui lòng thử lại sau ít phút.';
    }

    return {
      success: false,
      error: errorCode,
      errorMessage,
      // Never expose raw technical JSON or internal stack details
      canRetry: true,
      isOfflineMode: false,
    };
  }
}

// Search curated database for fallback and instant retrieval
export function searchCuratedDatabase(query: string, profile?: any): string {
  const qClean = (query || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').trim();

  // 1. Translation / Phiên dịch
  if (qClean.includes('phien dich') || qClean.includes('bien dich') || qClean.includes('thong dich') || qClean.includes('translator') || qClean.includes('interpreter')) {
    const career = CAREERS_DATA.find(c => c.id === 'c-phien-dich') || CAREERS_DATA.find(c => c.title.toLowerCase().includes('phiên dịch'));
    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

### 🌐 Nghề Phiên dịch viên (Conference & Business Interpreter)

**1. Công việc thực tế:**
- Chuyển ngữ trực tiếp giữa các ngôn ngữ trong các hội nghị quốc tế, phiên đàm phán hợp đồng, toà án hoặc sự kiện ngoại giao.
- Có 2 hình thức chính: Phiên dịch nối tiếp (consecutive) và phiên dịch song song/cabin (simultaneous) đòi hỏi phản xạ trong 1–2 giây.
- Nghiên cứu sâu thuật ngữ chuyên ngành (y tế, năng lượng, luật, tài chính, công nghệ) trước mỗi sự kiện.

**2. Kỹ năng & Năng lực cốt lõi:**
- Phản xạ ngôn ngữ 2 chiều siêu tốc, vốn từ vựng học thuật & thuật ngữ chuyên sâu.
- Trí nhớ ngắn hạn tốt, kỹ năng ghi chú tốc ký (interpreter note-taking).
- Khả năng kiểm soát cảm xúc, bảo mật thông tin kinh doanh tuyệt đối.

**3. Khó khăn & Đánh đổi thực tế:**
- Áp lực tâm lý rất cao trong cabin, không có cơ hội "nói lại" hay dùng từ điển tra cứu.
- Lịch trình công tác liên tục, giờ làm việc theo múi giờ quốc tế.
- Sự phát triển của AI dịch thuật đòi hỏi chuyên gia phải tiến lên phân khúc dịch thuật đàm phán cấp cao.

**4. Môn học THPT & Ngành đào tạo:**
- Môn học thế mạnh: Ngoại ngữ (Anh/Trung/Nhật/Hàn/Pháp/Đức), Ngữ văn, Lịch sử, Địa lý.
- Ngành học: Ngôn ngữ Anh/Trung/Nhật, Biên phiên dịch quốc tế, Quan hệ quốc tế.
- Các trường uy tín: Trường ĐH Ngoại ngữ (ĐHQGHN - ULIS), Trường ĐH Hà Nội (HANU), Trường ĐH KHXH&NV (ĐHQG-HCM), Học viện Ngoại giao.`;
  }

  // 2. Semiconductor vs Chip Testing / Thiết kế vi mạch vs Kiểm thử chip
  if ((qClean.includes('thiet ke vi mach') || qClean.includes('ic design')) && (qClean.includes('kiem thu') || qClean.includes('chip') || qClean.includes('dong goi') || qClean.includes('ate'))) {
    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

### ⚡ So sánh: Kỹ sư Thiết kế Vi mạch (IC Design) vs Kỹ sư Đo kiểm & Đóng gói Chip (Testing & Packaging)

| Tiêu chí | Kỹ sư Thiết kế Vi mạch (IC Design) | Kỹ sư Đo kiểm & Đóng gói (Testing & Packaging) |
|---|---|---|
| **Công đoạn chuỗi giá trị** | Giai đoạn 1 & 2: Thiết kế logic (Front-end) & Thiết kế vật lý (Back-end) | Giai đoạn 3 & 4: Đóng gói (Packaging/OSAT) & Đo kiểm tự động (ATE Testing) |
| **Công việc chính** | Viết mã HDL (Verilog/VHDL), mô phỏng RTL, tổng hợp logic, định tuyến layout bán dẫn | Lập trình chương trình đo tự động cho máy ATE, gắn chip vào test socket, đo điện áp/xung clock, kiểm tra lỗi vật lý |
| **Công cụ làm việc** | Synopsys, Cadence, Siemens EDA, Linux, Python/Perl/Tcl | Teradyne, Advantest, máy hiện sóng Oscilloscope, máy phân tích logic |
| **Môi trường làm việc** | Phòng R&D văn phòng phần mềm máy tính hiệu năng cao | Phòng cleanroom bán dẫn, phòng lab đo kiểm chất lượng, nhà máy đóng gói OSAT |
| **Môn học THPT** | Toán học, Vật lý (Điện tử), Tin học (Thuật toán) | Vật lý (Dòng điện, Bán dẫn), Tin học, Tiếng Anh kỹ thuật |
| **Mã ngành đào tạo** | 7520401 (Thiết kế vi mạch, Kỹ thuật Điện tử - Viễn thông) | 7520207 (Kỹ thuật Cơ điện tử, Công nghệ Kỹ thuật Điện - Điện tử) |
| **Trường tiêu biểu** | ĐH Bách khoa Hà Nội, ĐH Công nghệ ĐHQGHN, ĐH Bách khoa ĐHQG-HCM, ĐH CNTT UIT | ĐH Bách khoa HN, ĐH Sư phạm Kỹ thuật TP.HCM, ĐH Bách khoa Đà Nẵng |`;
  }

  // 3. Teller vs Credit Officer / Giao dịch viên vs Chuyên viên tín dụng
  if ((qClean.includes('giao dich vien') || qClean.includes('teller')) && (qClean.includes('tin dung') || qClean.includes('cho vay') || qClean.includes('credit'))) {
    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

### 🏦 So sánh: Giao dịch viên Ngân hàng (Teller) vs Chuyên viên Quản lý & Thẩm định Tín dụng (Credit Analyst)

| Tiêu chí | Giao dịch viên Ngân hàng (Teller) | Chuyên viên Quản lý & Thẩm định Tín dụng |
|---|---|---|
| **Vị trí & Không gian** | Làm việc tại quầy giao dịch (Front Office), tiếp đón trực tiếp khách hàng đến ngân hàng | Làm việc tại văn phòng và đi khảo sát thực địa (Fieldwork) tài sản bảo đảm của khách hàng |
| **Nhiệm vụ chính** | Mở tài khoản, nhận tiền gửi, chuyển tiền, phát hành thẻ, thu đổi ngoại tệ, tư vấn dịch vụ số | Tìm kiếm khách hàng vay, phân tích báo cáo tài chính, định giá tài sản thế chấp, lập hồ sơ giải ngân |
| **Chỉ tiêu & Áp lực** | Độ chính xác tuyệt đối từng con số tiền mặt, thời gian phục vụ tại quầy, nụ cười & sự hài lòng | Doanh số cho vay (KPI tăng trưởng tín dụng), tỷ lệ nợ xấu (NPL), chịu trách nhiệm pháp lý hồ sơ vay |
| **Kỹ năng cốt lõi** | Giao tiếp nhã nhặn, cẩn trọng tỉ mỉ, thao tác hệ thống Core Banking nhanh, xử lý khiếu nại | Tư duy thẩm định rủi ro, phân tích dòng tiền, kỹ năng đàm phán thương mại, hiểu biết luật kinh tế |
| **Nhóm RIASEC** | **S - C** (Xã hội - Quy chuẩn, Tỉ mỉ) | **E - C** (Kinh doanh - Quy chuẩn, Phân tích) |
| **Môn THPT thế mạnh** | Toán học, Ngữ văn, Tiếng Anh | Toán học, Tiếng Anh, Kinh tế - Pháp luật |
| **Ngành học phù hợp** | Tài chính - Ngân hàng (7340201), Kế toán, Kinh tế đối ngoại | Tài chính - Ngân hàng, Thẩm định giá, Luật kinh tế |`;
  }

  // 4. Literature & English / Thích Văn và Anh
  if ((qClean.includes('van') && qClean.includes('anh')) || (qClean.includes('ngu van') && qClean.includes('tieng anh'))) {
    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

### 📚 Định hướng nghề nghiệp cho học sinh thế mạnh Ngữ văn và Tiếng Anh (Tổ hợp D01, D14, D15)

Khi em có thế mạnh ngôn từ, tư duy biểu đạt cảm xúc và khả năng ngoại ngữ tốt nhưng không muốn theo hướng kỹ thuật/toán chuyên sâu, em có rất nhiều cánh cửa nghề nghiệp rộng mở:

#### 1. Nhóm Truyền thông, Tiếp thị số & Sáng tạo nội dung (Creative & Communication)
- **Nghề tiêu biểu:** Chuyên viên Truyền thông & Báo chí, Copywriter / Content Strategist, Chuyên viên Quan hệ Công chúng (PR).
- **Điểm mạnh tận dụng:** Viết bài thuyết phục, kể câu chuyện thương hiệu, dịch và chuyển thể nội dung chiến dịch quốc tế.
- **Ngành đào tạo:** Truyền thông đa phương tiện, Báo chí, Quan hệ công chúng, Marketing số.

#### 2. Nhóm Dịch thuật & Ngôn ngữ ứng dụng (Languages & Translation)
- **Nghề tiêu biểu:** Biên phiên dịch viên chuyên nghiệp, Biên tập viên xuất bản sách, Chuyên gia bản địa hóa sản phẩm số (Localization Specialist).
- **Điểm mạnh tận dụng:** Độ nhạy cảm từ ngữ, thấu hiểu ngữ cảnh văn hóa Đông - Tây.
- **Ngành đào tạo:** Ngôn ngữ Anh (chuyên ngành Biên phiên dịch, Tiếng Anh thương mại), Quốc tế học.

#### 3. Nhóm Quan hệ Ngoại giao & Luật Quốc tế (Diplomacy & Legal)
- **Nghề tiêu biểu:** Chuyên viên Đối ngoại, Trợ lý Pháp chế / Chuyên viên Luật thương mại quốc tế, Chuyên viên Tổ chức Phi chính phủ (NGO).
- **Điểm mạnh tận dụng:** Khả năng lập luận văn bản chặt chẽ, đàm phán đối thoại đa văn hóa.
- **Ngành đào tạo:** Luật quốc tế, Quan hệ quốc tế, Ngoại giao kinh tế.

#### 4. Nhóm Sư phạm & Giáo dục (Education & EdTech)
- **Nghề tiêu biểu:** Giáo viên tiếng Anh / Ngữ văn THPT, Giảng viên IELTS/TOEFL, Chuyên viên thiết kế chương trình học (Instructional Designer).
- **Ngành đào tạo:** Sư phạm Tiếng Anh, Sư phạm Ngữ văn, Quản lý Giáo dục.

💡 *Hành động nhỏ gợi ý:* Em hãy thử nhiệm vụ "Đàm phán Dự án Năng lượng Xanh Quốc tế" (Phiên dịch viên) trong mục "Chạm Nghề" của CHẠM VIỆC để thử tài phản xạ dịch thuật nhé!`;
  }

  // 5. English Software Engineering Query
  if (qClean.includes('software engineer') || qClean.includes('what skills') || qClean.includes('developer')) {
    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

### 💻 Essential Skills & Roadmap for a Software Engineer (Kỹ sư Phần mềm)

**1. Core Technical Skills:**
- **Programming Languages:** Proficiency in at least one modern language (TypeScript/JavaScript, Python, Java, C++, or Go).
- **Data Structures & Algorithms (DSA):** Foundational mastery of arrays, trees, hash maps, sorting, and algorithmic complexity (Big-O).
- **Version Control & DevOps:** Git commands, GitHub pull requests, CI/CD pipelines, and cloud containers (Docker).
- **Database Architecture:** Relational databases (PostgreSQL, MySQL) and NoSQL stores.

**2. Key Soft Skills:**
- **Analytical Problem Solving:** Breaking ambiguous user needs into modular, testable software components.
- **Collaborative Communication:** Active listening during Agile sprint standups and clear technical documentation.
- **Continuous Learning:** The technology stack evolves rapidly; adaptability is the ultimate competitive advantage.

**3. Recommended College Majors in Vietnam:**
- Computer Science (Khoa học máy tính - Code: 7480101)
- Software Engineering (Kỹ thuật phần mềm - Code: 7480103)
- Information Technology (Công nghệ thông tin - Code: 7480201)

**4. Top Vietnamese Universities:**
- VNU University of Engineering and Technology (UET)
- Hanoi University of Science and Technology (HUST / BKA)
- VNU-HCM University of Information Technology (UIT)
- Da Nang University of Science and Technology (DUT)`;
  }

  // General fallback: Find careers matching query terms
  const matchedCareers = CAREERS_DATA.filter(c => 
    c.title.toLowerCase().includes(qClean) ||
    c.shortSummary.toLowerCase().includes(qClean) ||
    c.categoryLabel.toLowerCase().includes(qClean) ||
    c.highSchoolSubjects.some(s => s.toLowerCase().includes(qClean))
  ).slice(0, 3);

  if (matchedCareers.length > 0) {
    const listStr = matchedCareers.map(c => `
- **${c.title}** (${c.categoryLabel} | RIASEC: ${c.riasecCodes.join(', ')})
  * Tóm tắt: ${c.shortSummary}
  * Kỹ năng cốt lõi: ${c.coreSkills.slice(0, 3).join(', ')}
  * Thách thức thực tế: ${c.difficultiesAndTradeoffs[0]}
  * Lộ trình đào tạo: ${c.entryPathway}
`).join('\n');

    return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

Dưới đây là thông tin đối chiếu từ kho ${CAREERS_DATA.length} nghề nghiệp đã kiểm chứng liên quan đến câu hỏi của em:
${listStr}

💡 Em có thể mở mục **"Khám phá nghề nghiệp"** hoặc **"Chạm Thử Nghề 3D"** trên thanh điều hướng để trải nghiệm thực tế hơn!`;
  }

  return `[Thông tin từ kho nghề - Dữ liệu hướng nghiệp CHẠM VIỆC]

Chào em! CHẠM VIỆC hiện đang lưu trữ cơ sở dữ liệu ${CAREERS_DATA.length} nghề nghiệp phân theo 20 nhóm ngành chuẩn và số liệu tuyển sinh 2024–2026 có phân biệt nguồn chính thức và nguồn tham khảo.

Em có thể tìm hiểu thêm bằng cách:
1. Nhấp vào các gợi ý câu hỏi bên dưới.
2. Tra cứu điểm chuẩn và phương án tuyển sinh 2025 trong mục "Tuyển Sinh".
3. Thử thách mô phỏng 3D tại mục "Chạm Thử Nghề".`;
}

// STREAMING CHATBOT FUNCTION WITH SERVER-SENT EVENTS
export interface StreamChamAiOptions {
  message: string;
  language?: 'vi' | 'en';
  profile?: any;
  currentContext?: string;
  chatHistory?: Array<{ sender: 'ai' | 'user'; text: string }>;
  onStart?: (info: { requestId: string; model: string }) => void;
  onChunk: (chunkText: string) => void;
  onError: (errorData: { error: string; errorMessage: string; canRetry: boolean; isFallback?: boolean; fallbackText?: string }) => void;
  onDone: (summary: { requestId: string; model: string; totalChars: number; latencyMs: number }) => void;
  signal?: AbortSignal;
}

export async function streamChamAiChat(options: StreamChamAiOptions): Promise<void> {
  const { message, language = 'vi', profile, currentContext, chatHistory, onStart, onChunk, onError, onDone, signal } = options;

  await refreshGroundingCatalog().catch(()=>{});
  const requestId = 'req_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6);
  const startTime = Date.now();

  if (!message || !message.trim()) {
    onError({
      error: 'EMPTY_MESSAGE',
      errorMessage: language === 'en' ? 'Message cannot be empty.' : 'Tin nhắn không được để trống.',
      canRetry: false,
    });
    return;
  }

  const { ai } = getGeminiClient();

  // If no API key configured, gracefully fallback to curated database answer!
  if (!ai) {
    console.warn(`[CHAM AI Stream] No GEMINI_API_KEY found, providing instant curated database fallback for requestId: ${requestId}`);
    const fallbackText = searchCuratedDatabase(message, profile);
    onStart?.({ requestId, model: 'curated-database-grounding' });
    
    // Simulate natural fast streaming for UX
    const words = fallbackText.split(' ');
    for (const w of words) {
      if (signal?.aborted) break;
      onChunk(w + ' ');
      await new Promise(r => setTimeout(r, 15));
    }
    
    onDone({
      requestId,
      model: 'curated-database-grounding',
      totalChars: fallbackText.length,
      latencyMs: Date.now() - startTime,
    });
    return;
  }

  const systemInstruction = `Bạn là "CHẠM AI – Người bạn đồng hành hướng nghiệp" trong ứng dụng "CHẠM VIỆC – Chạm nghề, chọn ngành, mở tương lai" dành cho học sinh THPT (lớp 10–12) tại Việt Nam.

VAI TRÒ & SỨ MỆNH:
1. Bạn là người bạn đồng hành lắng nghe, truyền cảm hứng và cung cấp thông tin hướng nghiệp khoa học, trung thực và sát thực tế.
2. Hỗ trợ mọi học sinh THPT Việt Nam, đặc biệt quan tâm tới học sinh miền núi, vùng sâu, vùng xa, học sinh đồng bào dân tộc thiểu số và những em có hoàn cảnh khó khăn.
3. KHÔNG thiên vị ngành STEM hay khối Kinh tế; tôn trọng và đánh giá công bằng các khối ngành Khoa học Xã hội, Ngôn ngữ, Sư phạm, Nghệ thuật, Nông lâm nghiệp, Du lịch, Công tác xã hội và Dạy nghề kỹ thuật.
4. Tôn trọng sự đa dạng về sở thích, năng lực và hoàn cảnh của học sinh.

NGUYÊN TẮC CỐT LÕI (BẮT BUỘC TUÂN THỦ):
1. VỀ ĐIỂM CHUẨN VÀ TUYỂN SINH:
   - CHỈ cung cấp số liệu điểm chuẩn, tổ hợp, phương thức dựa trên DỮ LIỆU ĐÃ XÁC MINH trong cơ sở dữ liệu.
   - Nêu rõ năm, phương thức xét tuyển, tổ hợp môn và nguồn đề án/văn bản xác minh.
   - Không suy loại điểm từ năm. scoreType=cutoff là điểm trúng tuyển, scoreType=floor là điểm sàn nhận hồ sơ. Năm 2025 và 2026 đã có công bố chính thức ở nhiều trường. Nêu đúng phương thức, tổ hợp, thang điểm, nguồn và tình trạng có dữ liệu của từng bản ghi; không coi điểm sàn là điểm trúng tuyển.
   - Nếu trong cơ sở dữ liệu KHÔNG có trường/ngành học sinh hỏi: Phải nói rõ "CHẠM AI hiện chưa có dữ liệu điểm chuẩn xác minh cho trường/ngành này. Bạn nên kiểm tra trực tiếp tại website tuyển sinh chính thức của trường nhé."
2. KHI HỌC SINH HỎI ĐỊNH HƯỚNG / KHÁM PHÁ NGHỀ:
   - Đọc hồ sơ học sinh (nếu có) và tích hợp tự nhiên.
   - Cấu trúc tư vấn rõ ràng:
     ### 1. Nghề nghiệp & Ngành học gợi ý
     ### 2. Vì sao phù hợp với bạn
     ### 3. Trường đào tạo có thể tham khảo
     ### 4. Điều cần lưu ý và rèn luyện
3. KHI HỌC SINH YÊU CẦU SO SÁNH:
   - Dùng BẢNG MARKDOWN phân tích tiêu chí rõ ràng: Chương trình học | Kỹ năng cần | Môi trường làm việc | Cơ hội việc làm | Điểm xét tuyển tham khảo.

--- CƠ SỞ DỮ LIỆU ĐÃ XÁC MINH CỦA HỆ THỐNG ---
${buildDynamicGroundingContext(message, profile)}

${language === 'en'
  ? `CRITICAL LANGUAGE INSTRUCTION: The user is browsing the application in ENGLISH. You MUST formulate your entire response in clear, encouraging, natural, and helpful ENGLISH for high school students. Retain official proper names (such as "CHẠM VIỆC", Vietnamese university names, and combination codes like K01, A00, HSA, TSA). Do NOT reply in Vietnamese.`
  : `YÊU CẦU NGÔN NGỮ: Trả lời bằng tiếng Việt thân thiện, rõ ràng, dễ hiểu cho học sinh THPT.`}
`;

  // Profile Context
  let profileContext = 'Học sinh chưa tạo hồ sơ.';
  if (profile) {
    const parts: string[] = [];
    if (profile.grade) parts.push(`- Khối lớp: ${profile.grade}`);
    if (profile.favoriteSubjects && profile.favoriteSubjects.length > 0) parts.push(`- Môn học yêu thích: ${profile.favoriteSubjects.join(', ')}`);
    if (profile.academicStrengths && profile.academicStrengths.length > 0) parts.push(`- Năng lực học tập: ${profile.academicStrengths.join(', ')}`);
    if (profile.topRiasec && profile.topRiasec.length > 0) parts.push(`- Kết quả trắc nghiệm RIASEC: ${profile.topRiasec.join(', ')}`);
    if (profile.priorityValues && profile.priorityValues.length > 0) parts.push(`- Giá trị ưu tiên: ${profile.priorityValues.join(', ')}`);
    if (profile.estimatedScore) parts.push(`- Điểm thi dự kiến: ${profile.estimatedScore} điểm`);
    if (profile.targetCombinations && profile.targetCombinations.length > 0) parts.push(`- Tổ hợp dự kiến: ${profile.targetCombinations.join(', ')}`);
    if (parts.length > 0) profileContext = parts.join('\n');
  }

  // Contents with max 10 recent messages (context trimming per instructions)
  const contents: any[] = [];
  if (Array.isArray(chatHistory) && chatHistory.length > 0) {
    const recent = chatHistory.slice(-10);
    for (const msg of recent) {
      if (msg.text && msg.text.trim()) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text.trim() }],
        });
      }
    }
  }

  const promptText = `[NGỮ CẢNH HỒ SƠ HỌC SINH]
${profileContext}

[NGỮ CẢNH VỊ TRÍ ỨNG DỤNG ĐANG XEM]
${currentContext || 'Trang chủ'}

[CÂU HỎI HIỆN TẠI CỦA HỌC SINH]
"${message}"

Hãy trả lời học sinh với vai trò "CHẠM AI – Người bạn đồng hành hướng nghiệp" súc tích, chân thành, có cấu trúc rõ ràng và căn cứ dữ liệu chính xác.`;

  contents.push({
    role: 'user',
    parts: [{ text: promptText }],
  });

  const configuredModel = process.env.GEMINI_MODEL?.trim();
  const modelsToTry: string[] = [
    configuredModel,
    'gemini-3.1-flash-lite',
    'gemini-3.8-flash',
    'gemini-flash-latest',
  ].filter(Boolean) as string[];

  let streamSucceeded = false;
  let totalChars = 0;
  let activeModelUsed = '';
  let lastError: any = null;

  for (const modelName of modelsToTry) {
    if (signal?.aborted) break;

    const MAX_RETRIES = 2;
    let attempt = 0;

    while (attempt <= MAX_RETRIES) {
      if (signal?.aborted) break;

      try {
        console.log(`[CHAM AI Stream] [${requestId}] Connecting stream to model: ${modelName} (attempt ${attempt + 1})`);
        activeModelUsed = modelName;

        const responseStream = await ai.models.generateContentStream({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingBudget: 0,
            },
          },
        });

        onStart?.({ requestId, model: modelName });

        for await (const chunk of responseStream) {
          if (signal?.aborted) {
            console.log(`[CHAM AI Stream] [${requestId}] Client aborted stream.`);
            return;
          }
          const chunkText = chunk.text;
          if (chunkText) {
            totalChars += chunkText.length;
            onChunk(chunkText);
          }
        }

        streamSucceeded = true;
        break;
      } catch (err: any) {
        lastError = err;
        console.warn(`[CHAM AI Stream] [${requestId}] Error with model ${modelName} (attempt ${attempt + 1}):`, err?.message || err);

        const errMsg = String(err?.message || err).toLowerCase();
        const is503OrOverloaded = 
          err?.status === 503 || 
          err?.status === 429 ||
          errMsg.includes('503') || 
          errMsg.includes('unavailable') || 
          errMsg.includes('overload') || 
          errMsg.includes('rate limit');

        if (is503OrOverloaded && attempt < MAX_RETRIES) {
          const delay = (1000 * Math.pow(2, attempt)) + Math.floor(Math.random() * 300);
          await new Promise(r => setTimeout(r, delay));
          attempt++;
          continue;
        }

        // Move to next model
        break;
      }
    }

    if (streamSucceeded) {
      const latencyMs = Date.now() - startTime;
      console.log(`[CHAM AI Stream] [${requestId}] Stream completed successfully. Model: ${activeModelUsed}, Chars: ${totalChars}, Latency: ${latencyMs}ms`);
      onDone({
        requestId,
        model: activeModelUsed,
        totalChars,
        latencyMs,
      });
      return;
    }
  }

  // If streaming failed across all models, check if we streamed any text
  if (totalChars > 0) {
    // Some text was streamed before breaking
    onDone({
      requestId,
      model: activeModelUsed,
      totalChars,
      latencyMs: Date.now() - startTime,
    });
    return;
  }

  // If nothing was streamed, provide smart curated fallback response with tag [Thông tin từ kho nghề]
  console.warn(`[CHAM AI Stream] [${requestId}] All models unavailable. Serving curated database fallback.`);
  const fallbackText = searchCuratedDatabase(message, profile);
  
  onStart?.({ requestId, model: 'curated-database-fallback' });
  const words = fallbackText.split(' ');
  for (const w of words) {
    if (signal?.aborted) break;
    onChunk(w + ' ');
    await new Promise(r => setTimeout(r, 15));
  }

  onDone({
    requestId,
    model: 'curated-database-fallback',
    totalChars: fallbackText.length,
    latencyMs: Date.now() - startTime,
  });
}

