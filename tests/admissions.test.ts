import {test} from 'node:test';
import assert from 'node:assert/strict';
import {loadAdmissionSnapshot} from '../scripts/admissionSnapshot.ts';
import {readCatalog,readCatalogPage} from '../src/server/catalog.ts';
import {isThptComparable,ADMISSION_YEARS,admissionCampus} from '../src/utils/admissionData.ts';
import {loadCatalog,catalogState} from '../src/utils/catalog.ts';
import {ADMISSION_RECORDS} from '../src/data/admissions.ts';

test('snapshot hashes, school coverage and all three published seasons validate',()=>{
 const {groups,manifest}=loadAdmissionSnapshot();
 assert.deepEqual(ADMISSION_YEARS,[2026,2025,2024]);
 assert.equal(groups.admissions.length,manifest.records);
 assert.equal(groups.admissions.filter(r=>r.universityId==='rmit-vn').length,0);
 assert.equal(groups.university_programs.filter(r=>r.universityId==='rmit-vn').length,20);
 assert(groups.admissions.some(r=>r.year===2025&&r.isVerifiedOfficial&&r.scoreType==='cutoff'));
});

test('forecast accepts only comparable general THPT cutoffs',()=>{
 const base:any={scoreType:'cutoff',scoreScale:'Thang 30',method:'Điểm thi tốt nghiệp THPT'};
 assert(isThptComparable(base));
 for(const change of [{scoreScale:'Thang 100'},{scoreScale:'Chưa đối chiếu thang điểm; xem nguồn'},{scoreType:'floor'},{applicantGroup:'first_generation'},{method:'Xét tuyển kết hợp THPT và học bạ'}])assert(!isThptComparable({...base,...change}));
 assert.deepEqual(admissionCampus({campusProvince:null,campusRegion:null} as any,{province:'Hà Nội',region:'Miền Bắc'} as any),{province:null,region:null});
});

test('server catalog reads all rows beyond PostgREST limit and propagates page errors',async()=>{
 const rows=Array.from({length:1234},(_,i)=>({kind:'admissions',id:String(i),data:{id:String(i)}}));
 const ranges:number[]=[];
 const db:any={from:()=>({select(){return this;},order(){return this;},in(){return this;},async range(a:number,b:number){ranges.push(a);return {data:rows.slice(a,b+1),error:null,count:rows.length};}})};
 assert.equal((await readCatalog(['admissions'],db)).length,1234);
 assert.deepEqual(ranges,[0,500,1000]);
 assert.equal((await readCatalogPage(2,db)).rows.length,234);
 db.from=()=>({select(){return this;},order(){return this;},range:async()=>({data:null,error:{message:'Unavailable'}})});
 await assert.rejects(readCatalog(undefined,db));
});

test('client rejects a missing catalog page without replacing its current records',async()=>{
 const originalFetch=globalThis.fetch;
 const initial=ADMISSION_RECORDS.slice();
 globalThis.fetch=async(url:any)=>new Response(JSON.stringify(String(url).endsWith('page=0')?{success:true,page:0,pageSize:500,totalRecords:1001,data:[{kind:'admissions',id:'partial',data:{id:'partial'}}]}:{success:false}),{status:200});
 try{await assert.rejects(loadCatalog());assert.deepEqual(ADMISSION_RECORDS,initial);assert.equal(catalogState.source,'unavailable');}
 finally{globalThis.fetch=originalFetch;}
});
