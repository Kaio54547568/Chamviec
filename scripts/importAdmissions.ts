import 'dotenv/config';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {Client} from 'pg';
import {isDeepStrictEqual} from 'node:util';
import {loadAdmissionSnapshot} from './admissionSnapshot.ts';
import {readCatalog} from '../src/server/catalog.ts';

async function run(){
 const {manifest,groups}=loadAdmissionSnapshot();
 const ref='mguxggsythajedmxsuws';
 if(new URL(process.env.SUPABASE_URL||'').hostname!==`${ref}.supabase.co` || !process.env.DATABASE_URL?.includes(ref))throw new Error('Unexpected database project');
 const client=new Client({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:true,ca:readFileSync('supabase/prod-ca-2021.crt','utf8')},connectionTimeoutMillis:15000});
 await client.connect();
 const kinds=Object.keys(groups);
 const protectedTables=['profiles','user_roles','survey_quotas','survey_attempts','enterprise_batches','enterprise_registrations','eie_registrations','credit_grants'];
 const protectedCounts=async()=>Object.fromEntries(await Promise.all(protectedTables.map(async t=>[t,Number((await client.query(`select count(*) from public.${t}`)).rows[0].count)])));
 try{
  await client.query('begin isolation level repeatable read');
  const before=await protectedCounts();
  const backup=(await client.query('select kind,id,data from public.catalog where kind=any($1::text[]) order by kind,id',[kinds])).rows;
  mkdirSync('.admission-source-cache',{recursive:true});
  writeFileSync(`.admission-source-cache/catalog-backup-${Date.now()}.json`,JSON.stringify({createdAt:new Date().toISOString(),before,rows:backup},null,2));
  const legacy=JSON.parse(readFileSync('docs/admissions/legacy-seed-ids.json','utf8'));
  const removed=await client.query("delete from public.catalog where kind='admissions' and id=any($1::text[])",[legacy]);
  const counts:Record<string,number>={};
  for(const [kind,items] of Object.entries(groups)){
   const data=items.map(r=>({...r,datasetOwner:'chamviec-admissions',datasetVersion:manifest.version}));
   // Only our previous imports may be removed. Unrelated administrator entries survive.
   await client.query("delete from public.catalog where kind=$1 and data->>'datasetOwner'='chamviec-admissions' and not(id=any($2::text[]))",[kind,data.map(r=>r.id)]);
   for(let i=0;i<data.length;i+=100){
    await client.query(`insert into public.catalog(kind,id,data)
     select $1,x->>'id',x from jsonb_array_elements($2::jsonb) x
     on conflict(kind,id) do update set data=excluded.data`,[kind,JSON.stringify(data.slice(i,i+100))]);
   }
   const actual=(await client.query('select data from public.catalog where kind=$1 and id=any($2::text[]) order by id',[kind,data.map(r=>r.id)])).rows.map(r=>r.data);
   if(!isDeepStrictEqual(actual,data.sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0)))throw new Error('Database readback differs');
   counts[kind]=actual.length;
  }
  if(!isDeepStrictEqual(before,await protectedCounts()))throw new Error('Protected table count changed');
  await client.query('commit');
  // Verify paginated PostgREST too; browser/API use this path rather than pg.
  const readback=await readCatalog(kinds);
  for(const [kind,items] of Object.entries(groups)){
   const ids=new Set(items.map(r=>r.id));
   if(readback.filter(r=>r.kind===kind&&ids.has(r.id)).length!==items.length)throw new Error('REST readback incomplete');
  }
  const report={projectRef:ref,importedAt:new Date().toISOString(),version:manifest.version,counts,removedLegacyRecords:removed.rowCount,protectedTablesUnchanged:true,postgrestReadbackVerified:true,manifest};
  writeFileSync('docs/admissions/import-result-20261107.json',JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({imported:counts,removedLegacyRecords:removed.rowCount,postgrestReadbackVerified:true}));
 }catch(error){await client.query('rollback');throw error;}finally{await client.end();}
}
run().catch(error=>{console.error('Admissions import failed:',error instanceof Error?error.message:'Unknown error');process.exitCode=1;});
