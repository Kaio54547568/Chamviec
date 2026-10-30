import { getUserQuota } from '../src/server/enterpriseAndQuotaService.ts';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const email = (req.query?.email as string) || 'student@chamviec.vn';
  const info = getUserQuota(email);
  return res.status(200).json({ success: true, data: info });
}
