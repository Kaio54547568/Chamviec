import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {UNIVERSITIES_DATA} from '../src/data/admissions.ts';

export function loadAdmissionSnapshot() {
 const root='public/data/admissions/';
 const manifest=JSON.parse(readFileSync(root+'manifest.json','utf8'));
 const groups:Record<string,any[]>={};
 const kinds:Record<string,string>={records:'admissions',programs:'university_programs',coverage:'admission_coverage'};
 const schools=new Set(UNIVERSITIES_DATA.map(u=>u.id));
 const require=(ok:unknown,message:string)=>{if(!ok)throw new Error(message);};
 require(schools.size===23 && manifest.version==='20261107','Unexpected snapshot scope');
 for(const [key,kind] of Object.entries(kinds)){
  const file=manifest.files[key];
  require(file.path===`${key}-${manifest.version}.json`,'Unexpected snapshot path');
  const bytes=readFileSync(root+file.path);
  require(createHash('sha256').update(bytes).digest('hex')===file.sha256,`Snapshot digest mismatch: ${key}`);
  const rows:any[]=JSON.parse(bytes.toString('utf8'));
  require(Array.isArray(rows)&&rows.length>0,`Empty snapshot: ${key}`);
  require(new Set(rows.map(r=>r.id)).size===rows.length,`Duplicate ids: ${key}`);
  for(const r of rows){
   require(typeof r.id==='string'&&schools.has(r.universityId),`Unknown university: ${key}`);
   if(key==='coverage')continue;
   require([2024,2025,2026].includes(r.year)&&typeof r.sourceUrl==='string'&&r.sourceUrl.startsWith('https://'),'Invalid year/source');
   require(['official','reference'].includes(r.sourceType)&&r.isVerifiedOfficial===(r.sourceType==='official'),'Invalid source classification');
   if(key==='records'){
    require(Number.isFinite(r.cutoffScore)&&r.cutoffScore>0&&r.scoreType==='cutoff','Invalid cutoff');
    const scale=/^Thang (\d+)$/.exec(r.scoreScale);
    require(!scale||r.cutoffScore<=Number(scale[1]),'Cutoff exceeds scale');
   }
  }
  groups[kind]=rows;
 }
 require(groups.admissions.length===manifest.records && groups.university_programs.length===manifest.programs,'Manifest counts differ');
 require(groups.admission_coverage.length===23,'Missing coverage');
 for(const school of schools){
  const coverage=groups.admission_coverage.find(r=>r.universityId===school);
  require(coverage&&coverage.programs===groups.university_programs.filter(r=>r.universityId===school).length,'Programme coverage mismatch');
  for(const year of [2024,2025,2026]){
   const season=coverage.years.find((r:any)=>r.year===year);
   const count=groups.admissions.filter(r=>r.universityId===school&&r.year===year).length;
   require(season&&season.records===count&&(count>0||season.status==='criteria_based'),'Missing admissions season');
  }
 }
 return {manifest,groups};
}
