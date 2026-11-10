import { authenticatedUser } from '../src/server/database.ts';
import { streamChamAiChat } from '../src/server/chamAiService.ts';

// Vercel Serverless Function handler for SSE streaming
export default async function handler(req: any, res: any) {
  // Setup CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'METHOD_NOT_ALLOWED',
      errorMessage: 'Chỉ chấp nhận phương thức POST',
      canRetry: false
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { message, language, profile, currentContext, chatHistory } = body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'EMPTY_MESSAGE',
        errorMessage: 'Tin nhắn không được để trống.',
        canRetry: false,
      });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders?.();

    const abortController = new AbortController();
    req.on('close', () => {
      abortController.abort();
    });

    await streamChamAiChat({
      message,
      language: language === 'en' ? 'en' : 'vi',
      profile,
      currentContext,
      chatHistory,
      signal: abortController.signal,
      onStart: (info) => {
        res.write(`data: ${JSON.stringify({ type: 'start', ...info })}\n\n`);
      },
      onChunk: (chunkText) => {
        res.write(`data: ${JSON.stringify({ type: 'chunk', text: chunkText })}\n\n`);
      },
      onError: (errData) => {
        res.write(`data: ${JSON.stringify({ type: 'error', ...errData })}\n\n`);
        res.end();
      },
      onDone: (summary) => {
        res.write(`data: ${JSON.stringify({ type: 'done', ...summary })}\n\n`);
        res.end();
      },
    });
  } catch (error: any) {
    if(error?.status === 401) return res.status(401).json({success:false,message:'Vui lòng đăng nhập.'});
    console.error('Unhandled Vercel streaming error:', error);
    res.write(
      `data: ${JSON.stringify({
        type: 'error',
        error: 'AI_OVERLOADED_503',
        errorMessage: 'AI đang bận, em vui lòng thử lại sau ít phút.',
        canRetry: true,
      })}\n\n`
    );
    res.end();
  }
}
