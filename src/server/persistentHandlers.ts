import {randomUUID} from 'node:crypto';
import {database,authenticatedUser,checked,endpoint} from './database.ts';

export const batchesHandler=endpoint(async(req,res)=>{
 if(req.method!=='GET') return res.status(405).end();
 const rows=checked(await database().from('enterprise_batches').select('*').order('id'));
 return res.json({success:true,data:rows.map((r:any)=>({...r.data,registeredSlots:r.registered_slots}))});
});
export const quotaHandler=endpoint(async(req,res)=>{
 if(req.method!=='GET') return res.status(405).end();
 const u=await authenticatedUser(req);const q=checked(await database().from('survey_quotas').select('*').eq('user_id',u.id).maybeSingle());
 return res.json({success:true,data:{email:u.email,verified:true,totalAttempts:q?.attempts||0,freeAttemptUsed:!!q?.attempts,retakeCredits:q?.credits||0,feePerRetakeVND:50000,paymentGatewayStatus:'NOT_CONFIGURED',noticeMessage:'Lần đầu miễn phí. Từ lần 2 cần 1 tín chỉ (50.000đ). Thanh toán trực tuyến chưa được cấu hình; không thu phí tự động.'}});
});
export const attemptsHandler=endpoint(async(req,res)=>{
 if(req.method!=='POST') return res.status(405).end();
 const u=await authenticatedUser(req), db=database(),b=req.body||{};
 const answers=b.answers;
 const {RIASEC_QUESTIONS}=await import('../data/riasecQuestions.ts');
 if(!answers || !RIASEC_QUESTIONS.every(q=>Number.isInteger(answers[q.id]?.rating)&&answers[q.id].rating>=1&&answers[q.id].rating<=5)) return res.status(400).json({success:false,message:'Vui lòng hoàn thành đủ 24 câu khảo sát.'});
 const scores:Record<string,number>={R:0,I:0,A:0,S:0,E:0,C:0};for(const q of RIASEC_QUESTIONS)scores[q.code]+=answers[q.id].rating;
 if(typeof b.idempotencyKey!=='string'||b.idempotencyKey.length>200) return res.status(400).json({success:false,message:'Khóa nộp bài không hợp lệ.'});
 const result=checked(await db.rpc('submit_survey',{p_user:u.id,p_key:b.idempotencyKey,p_scores:scores}));
 if(!result.allowed) return res.status(402).json({success:false,feeVND:50000,message:'Bạn đã dùng lượt miễn phí. Lần tiếp theo cần 1 tín chỉ trị giá 50.000đ. Vui lòng liên hệ quản trị; thanh toán trực tuyến chưa được cấu hình.'});
 const old=checked(await db.from('profiles').select('data').eq('user_id',u.id).maybeSingle());
 checked(await db.from('profiles').upsert({user_id:u.id,data:{...old?.data,id:u.id,riasecScores:scores,riasecAnswerCount:24},answers}));
 return res.json({success:true,attemptNumber:result.attemptNumber,scores});
});
export const registerHandler=endpoint(async(req,res)=>{
 if(req.method!=='POST') return res.status(405).end();
 const u=await authenticatedUser(req),b=req.body||{};
 if(!['batchId','studentName','schoolName'].every(k=>typeof b[k]==='string'&&b[k].trim()))return res.status(400).json({success:false,message:'Vui lòng điền tên và trường học.'});
 const allowed=['studentName','schoolName','grade','studentPhone','guardianName','guardianPhone','specialRequests','isInternationalStudent'];
 const payload=Object.fromEntries(allowed.filter(k=>b[k]!==undefined).map(k=>[k,b[k]]));payload.studentEmail=u.email;
 const {data,error}=await database().rpc('register_enterprise',{p_user:u.id,p_batch:b.batchId,p_data:payload});
 if(error) return res.status(409).json({success:false,message:'Chương trình đã đóng, hết chỗ hoặc chưa sẵn sàng.'});
 return res.status(201).json({success:true,data});
});
export const enterpriseAdminHandler=endpoint(async(req,res)=>{
 const u=await authenticatedUser(req,true),db=database();
 if(req.method==='GET') {const rows=checked(await db.from('enterprise_registrations').select('*'));return res.json({success:true,total:rows.length,data:rows.map((r:any)=>({...r.data,userId:r.user_id}))});}
 if(req.method==='PATCH') {
 const status=req.body?.status,code=req.params?.code||req.query?.code;
 if(!['DA_TIEP_NHAN','CHO_THANH_TOAN','DA_THANH_TOAN','DA_XAC_NHAN','DA_HUY'].includes(status))return res.status(400).json({success:false,message:'Trạng thái không hợp lệ.'});
 const rows=checked(await db.from('enterprise_registrations').select('*').contains('data',{registrationCode:code}));
 if(!rows[0])return res.status(404).json({success:false});
 checked(await db.from('enterprise_registrations').update({data:{...rows[0].data,status}}).eq('id',rows[0].id));return res.json({success:true});
 }return res.status(405).end();
});
export const grantCreditHandler=endpoint(async(req,res)=>{
 if(req.method!=='POST')return res.status(405).end();
 const u=await authenticatedUser(req,true),b=req.body||{},db=database();
 if(typeof b.userId!=='string'||!Number.isInteger(b.amount)||b.amount<1||b.amount>100)return res.status(400).json({success:false,message:'Nhập UUID tài khoản và số tín chỉ từ 1–100.'});
 checked(await db.rpc('grant_survey_credit',{p_admin:u.id,p_user:b.userId,p_amount:b.amount}));return res.json({success:true});
});
export const eieHandler=endpoint(async(req,res)=>{
 const db=database();
 if(req.method==='GET'){await authenticatedUser(req,true);const {count,error}=await db.from('eie_registrations').select('*',{count:'exact',head:true});if(error)throw error;return res.json({success:true,count});}
 if(req.method!=='POST')return res.status(405).end();
 const u=await authenticatedUser(req),b=req.body||{};
 if(typeof b.fullName!=='string'||!b.fullName.trim()||!['lop_10','lop_11','lop_12'].includes(b.gradeLevel))return res.status(400).json({success:false,message:'Họ tên hoặc khối lớp không hợp lệ.'});
 let row=checked(await db.from('eie_registrations').select('data').eq('user_id',u.id).maybeSingle());
 if(!row){checked(await db.from('eie_registrations').upsert({user_id:u.id,data:{registrationCode:`EIE-${randomUUID()}`,fullName:b.fullName.trim(),contactEmail:u.email,gradeLevel:b.gradeLevel,status:'PENDING_RECEIVED',createdAt:new Date().toISOString()}},{onConflict:'user_id',ignoreDuplicates:true}));row=checked(await db.from('eie_registrations').select('data').eq('user_id',u.id).single());}
 return res.json({success:true,data:row?.data,message:'Đã tiếp nhận đăng ký EIE.'});
});
