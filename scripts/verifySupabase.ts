import 'dotenv/config';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {database,checked} from '../src/server/database.ts';
import {attemptsHandler,quotaHandler,registerHandler,enterpriseAdminHandler,grantCreditHandler,eieHandler} from '../src/server/persistentHandlers.ts';
import account from '../api/account.ts';
import {RIASEC_QUESTIONS} from '../src/data/riasecQuestions.ts';
const db=database();
const response=()=>({statusCode:200,body:null as any,setHeader(){},status(n:number){this.statusCode=n;return this;},json(data:any){this.body=data;return this;},end(){return this;}});
let userId:string|undefined;
try{
 const email=`cham-verify-${randomUUID()}@example.invalid`,password=randomUUID()+'Aa1!';
 const created=await db.auth.admin.createUser({email,password,email_confirm:true});if(created.error)throw new Error('Test user creation failed');userId=created.data.user.id;
 const login=response();await account({method:'POST',query:{action:'login'},body:{email,password}},login);assert.ok(login.body.session);
 const headers={authorization:`Bearer ${login.body.session.access_token}`};
 const answers=Object.fromEntries(RIASEC_QUESTIONS.map(q=>[q.id,{rating:3,hasTried:false}]));
 const submit=async(key:string)=>{const r=response();await attemptsHandler({method:'POST',headers,body:{answers,idempotencyKey:key}},r);return r;};
 const parallel=await Promise.all([submit('first'),submit('second')]);
 assert.deepEqual(parallel.map(r=>r.statusCode).sort(),[200,402]);
 const successfulKey=parallel[0].statusCode===200?'first':'second';
 const retry=await submit(successfulKey);assert.equal(retry.statusCode,200);assert.equal(retry.body.attemptNumber,1);
 const quota=response();await quotaHandler({method:'GET',headers},quota);assert.equal(quota.body.data.totalAttempts,1);assert.equal(quota.body.data.feePerRetakeVND,50000);
 const admin=response();await enterpriseAdminHandler({method:'GET',headers},admin);assert.equal(admin.statusCode,403);
 const grant=response();await grantCreditHandler({method:'POST',headers,body:{userId,amount:1}},grant);assert.equal(grant.statusCode,403);
 checked(await db.from('user_roles').upsert({user_id:userId,role:'admin'}));
 const approved=response();await grantCreditHandler({method:'POST',headers,body:{userId,amount:1}},approved);assert.equal(approved.statusCode,200);
 const paid=await submit('paid-retake');assert.equal(paid.statusCode,200);assert.equal(paid.body.attemptNumber,2);
 const exhausted=await submit('third');assert.equal(exhausted.statusCode,402);
 const profile=response();await account({method:'GET',query:{action:'profile'},headers},profile);assert.equal(profile.body.data.data.riasecAnswerCount,24);
 const registrations=await Promise.all([1,2].map(async()=>{const r=response();await registerHandler({method:'POST',headers,body:{batchId:'batch-fpt-01',studentName:'Verification',schoolName:'Test'}},r);return r;}));
 assert.ok(registrations.every(r=>r.statusCode===201));assert.equal(registrations[0].body.data.registrationCode,registrations[1].body.data.registrationCode);
 const eie=response();await eieHandler({method:'POST',headers,body:{fullName:'Verification',gradeLevel:'lop_11'}},eie);assert.equal(eie.statusCode,200);
 console.log('PASS: login, profile persistence, one free attempt under concurrency, paid retake blocked, authorized credit consumed once, idempotent retry, admin access denied for normal user, atomic registration, EIE persistence.');
}finally{
 if(userId){
  const regs=checked(await db.from('enterprise_registrations').select('batch_id').eq('user_id',userId));
  const {Client}=await import('pg');const {readFileSync}=await import('node:fs');
  const pg=new Client({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:true,ca:readFileSync('supabase/prod-ca-2021.crt','utf8')}});
  await pg.connect();try{await pg.query('begin');for(const row of regs)await pg.query('update public.enterprise_batches set registered_slots=greatest(0,registered_slots-1) where id=$1',[row.batch_id]);await pg.query('delete from public.enterprise_registrations where user_id=$1',[userId]);await pg.query('commit');}finally{await pg.end();}
  checked(await db.from('credit_grants').delete().eq('user_id',userId));
  const removed=await db.auth.admin.deleteUser(userId);assert.equal(removed.error,null);
  console.log('Removed the temporary verification account and its data.');
 }
}
