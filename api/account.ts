import {database,authenticatedUser,checked,endpoint} from '../src/server/database.ts';
export default endpoint(async(req,res)=>{
 const action=req.query?.action || 'me';
 const body=typeof req.body==='string'?JSON.parse(req.body):req.body||{};
 const db=database();
 if(['login','signup','refresh'].includes(action)) {
  if(req.method!=='POST') return res.status(405).end();
  const client=database();
  let result:any;
  if(action==='refresh') result=await client.auth.refreshSession({refresh_token:body.refreshToken});
  else {
   if(typeof body.email!=='string'||typeof body.password!=='string'||body.password.length<8) return res.status(400).json({success:false,message:'Email hoặc mật khẩu không hợp lệ (tối thiểu 8 ký tự).'});
   result= action==='login' ? await client.auth.signInWithPassword({email:body.email.trim(),password:body.password}) : await client.auth.signUp({email:body.email.trim(),password:body.password});
  }
  if(result.error) return res.status(400).json({success:false,message:action==='login'?'Email hoặc mật khẩu không đúng.':'Không thể xử lý. Hãy kiểm tra email xác nhận hoặc thử lại sau.'});
  return res.json({success:true,session:result.data.session,message:!result.data.session?'Hãy mở email xác nhận tài khoản, sau đó quay lại đăng nhập.':undefined});
 }
 if(action==='catalog' && req.method==='GET') {
  const rows=checked(await db.from('catalog').select('*'));
  const batches=checked(await db.from('enterprise_batches').select('*'));
  return res.json({success:true,data:[...rows,...batches.map((b:any)=>({kind:'enterprise_batches',id:b.id,data:{...b.data,registeredSlots:b.registered_slots}}))]});
 }
 if(action==='admin') {
  await authenticatedUser(req,true);
  if(req.method==='GET'){
   const [users,grants]=await Promise.all([db.auth.admin.listUsers({perPage:1000}),db.from('credit_grants').select('*').order('created_at',{ascending:false}).limit(100)]);
   if(users.error||grants.error)throw new Error('Database error');
   return res.json({success:true,users:users.data.users.map(u=>({id:u.id,email:u.email})),grants:grants.data});
  }
 }
 if(action==='catalog' && req.method==='PUT') {
  await authenticatedUser(req,true);
  if(typeof body.kind!=='string'||typeof body.id!=='string'||!body.data||body.data.id!==body.id)return res.status(400).json({success:false,message:'Dữ liệu danh mục không hợp lệ.'});
  if(body.kind==='enterprise_batches'){
   const d=body.data;if(!/^2027-\d{2}-\d{2}$/.test(d.scheduleDate)||!/^2027-\d{2}-\d{2}$/.test(d.deadlineDate)||d.deadlineDate>d.scheduleDate||!Number.isInteger(d.totalSlots)||d.totalSlots<1||!['DANG_MO','SAP_MO','HET_CHO','DA_HOAN_THANH'].includes(d.status))return res.status(400).json({success:false,message:'Lịch năm 2027 hoặc số chỗ không hợp lệ.'});
   checked(await db.from('enterprise_batches').update({data:d}).eq('id',body.id));
  }else checked(await db.from('catalog').upsert({kind:body.kind,id:body.id,data:body.data}));return res.json({success:true});
 }
 const user=await authenticatedUser(req);
 if(action==='me' && req.method==='GET') return res.json({success:true,user:{id:user.id,email:user.email,role:user.role}});
 if(action==='profile') {
  if(req.method==='GET') return res.json({success:true,data:checked(await db.from('profiles').select('data,answers').eq('user_id',user.id).maybeSingle())});
  if(req.method==='PUT') {
   if(!body.profile || typeof body.profile!=='object') return res.status(400).json({success:false});
   // Only accepted server-side attempts can authorize recommendation results.
   const latest=checked(await db.from('survey_attempts').select('scores').eq('user_id',user.id).order('attempt_number',{ascending:false}).limit(1));
   const profile={...body.profile,id:user.id,riasecScores:latest[0]?.scores || {R:0,I:0,A:0,S:0,E:0,C:0},riasecAnswerCount:latest.length?24:0};
   checked(await db.from('profiles').upsert({user_id:user.id,data:profile,answers:body.answers||{},updated_at:new Date().toISOString()}));
   return res.json({success:true});
  }
 }
 return res.status(405).end();
});
