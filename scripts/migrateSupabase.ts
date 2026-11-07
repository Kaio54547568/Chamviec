import 'dotenv/config';
import {readFileSync,readdirSync} from 'node:fs';
import {Client} from 'pg';
import {database,checked} from '../src/server/database.ts';
import {CAREERS_DATA} from '../src/data/careers.ts';
import {MAJORS_DATA,MAJOR_CATEGORIES} from '../src/data/majors.ts';
import {UNIVERSITIES_DATA} from '../src/data/admissions.ts';
const snapshot=(kind:string)=>JSON.parse(readFileSync(`public/data/admissions/${kind}-20261107.json`,'utf8'));
const ADMISSION_RECORDS=snapshot('records');
import {SIMULATION_TASKS} from '../src/data/tasks.ts';
import {VIDEO_STORIES_DATA} from '../src/data/videoStories.ts';
import {RIASEC_QUESTIONS,CAREER_VALUES_LIST,RIASEC_INFO} from '../src/data/riasecQuestions.ts';
import * as admissions2026 from '../src/data/admissions2026.ts';
import {ENTERPRISE_BATCHES} from '../src/server/enterpriseAndQuotaService.ts';
import {ENTERPRISE_PARTNERS} from '../src/data/enterprisePartners.ts';

async function migrate(){
 const files=readdirSync('supabase/migrations').filter(f=>f.endsWith('.sql')).sort();
 if(process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('[YOUR-PASSWORD]')){
  const client=new Client({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:true,ca:readFileSync('supabase/prod-ca-2021.crt','utf8')},connectionTimeoutMillis:15000});
  await client.connect();
  try{
   await client.query('create table if not exists public.cham_schema_migrations (name text primary key, applied_at timestamptz default now()); alter table public.cham_schema_migrations enable row level security; revoke all on public.cham_schema_migrations from anon, authenticated;');
   for(const name of files){const prior=await client.query('select name from public.cham_schema_migrations where name=$1',[name]);if(prior.rowCount)continue;
    await client.query(readFileSync(`supabase/migrations/${name}`,'utf8'));await client.query('insert into public.cham_schema_migrations(name) values($1) on conflict do nothing',[name]);console.log('Applied migration:',name);
   }
  }finally{await client.end();}
 }else if(process.env.SUPABASE_ACCESS_TOKEN){
  const ref=new URL(process.env.SUPABASE_URL!).hostname.split('.')[0];
  const sql=files.map(name=>readFileSync(`supabase/migrations/${name}`,'utf8')).join('\n');
  const r=await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`,{method:'POST',headers:{Authorization:`Bearer ${process.env.SUPABASE_ACCESS_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify({query:sql})});
  if(!r.ok)throw new Error(`Management migration failed (${r.status})`);
 }else throw new Error('Set DATABASE_URL with the actual database password, or SUPABASE_ACCESS_TOKEN in .env.');
 const db=database();
 // Preserve editable records: seeding again never overwrites administrator changes.
 const groups:Record<string,any[]>={careers:CAREERS_DATA,majors:MAJORS_DATA,major_categories:MAJOR_CATEGORIES,universities:UNIVERSITIES_DATA,admissions:ADMISSION_RECORDS,tasks:SIMULATION_TASKS,videos:VIDEO_STORIES_DATA,riasec_questions:RIASEC_QUESTIONS,career_values:CAREER_VALUES_LIST,riasec_info:Object.entries(RIASEC_INFO).map(([id,data])=>({id,...data})),admission_tickers:admissions2026.ADMISSION_TICKER_2026,admission_regulations:admissions2026.MOET_REGULATIONS_2026,exam_libraries:admissions2026.OFFICIAL_EXAM_LIBRARIES,exam_sets:admissions2026.PRACTICE_EXAM_SETS,exam_stats:[{id:'2026',...admissions2026.EXAM_TARGET_STATS}]};
 groups.enterprise_partners=ENTERPRISE_PARTNERS;
 groups.university_programs=snapshot('programs');
 groups.admission_coverage=snapshot('coverage');
 for(const [kind,items] of Object.entries(groups)){
  const rows=items.map((data,i)=>({kind,id:String(data.id||i),data}));
  for(let i=0;i<rows.length;i+=100)checked(await db.from('catalog').upsert(rows.slice(i,i+100),{onConflict:'kind,id',ignoreDuplicates:true}));
  const {count,error}=await db.from('catalog').select('*',{count:'exact',head:true}).eq('kind',kind);if(error)throw error;console.log(`${kind}: ${count} records`);
 }
 checked(await db.from('enterprise_batches').upsert(ENTERPRISE_BATCHES.map(b=>({id:b.id,data:{...b,registeredSlots:0,status:'DANG_MO'},registered_slots:0})),{onConflict:'id',ignoreDuplicates:true}));
 console.log('Migrated reference catalogs and 2027 programs. Demo student records and synthetic bookings were not imported.');
}
migrate().catch(()=>{console.error('Migration failed. Check DATABASE_URL / SUPABASE_ACCESS_TOKEN and database permissions; no secrets are logged.');process.exitCode=1;});
