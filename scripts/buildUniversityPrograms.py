"""Build the current published application-program directory and coverage audit."""
import json,hashlib,re,unicodedata,sys
from pathlib import Path
from bs4 import BeautifulSoup
from inspectAdmissionSource import ROOT
from buildAdmissionsDataset import expanded_tables
sys.stdout.reconfigure(encoding='utf-8')

snapshot=Path('public/data/admissions')
snapshot.mkdir(parents=True,exist_ok=True)
records=json.loads((snapshot/'records-20261107.json').read_text(encoding='utf-8'))
schools={s['id']:s for s in json.loads((ROOT/'universities.json').read_text(encoding='utf-8'))}
programs={}
def add(uid,code,name,campus,url,official,*,kind='program',parentName='',sha=''):
    name=unicodedata.normalize('NFC',name).strip()
    rid='program-'+hashlib.sha256(json.dumps([uid,2026,code,name,campus],ensure_ascii=False).encode()).hexdigest()[:24]
    programs[rid]={'id':rid,'universityId':uid,'year':2026,'admissionCode':code,'name':name,'campus':campus,
        'kind':kind,'parentName':parentName,'sourceUrl':url,'sourceType':'official' if official else 'reference',
        'isVerifiedOfficial':official,'verifiedDate':'2026-11-07','sourceSha256':sha}

for r in records:
    if r['year']==2026:
        add(r['universityId'],r['admissionCode'],r['programName'],r['campus'],r['sourceUrl'],r['isVerifiedOfficial'],
            kind='group' if 'nhóm ngành' in r['programName'].lower() else 'program',sha=r['sourceSha256'])

primary_codes={(p['universityId'],p['admissionCode']) for p in programs.values()}
for entry in json.loads((ROOT/'program-directory-index.json').read_text(encoding='utf-8')):
    uid,key=entry['universityId'],entry['key']
    s=BeautifulSoup((ROOT/key).read_bytes(),'html.parser')
    # Some live directory URLs have already switched to the 2027 prospectus.
    # Do not silently import those future offerings into the 2026 snapshot.
    if '2026' not in s.select_one('h1').get_text():
        print('Skipped different prospectus year:',uid,s.select_one('h1').get_text());continue
    tables=s.select('table');grids=expanded_tables(key)
    for ti,table in enumerate(tables):
        heading=table.find_previous('h2')
        if not heading or 'Danh sách ngành đào tạo' not in heading.get_text():continue
        for row in grids[ti]:
            if len(row)<3 or not re.fullmatch(r'\d+',row[0]):continue
            code,name=row[1:3]
            if not code or not name or (uid,code) in primary_codes:continue
            campus=schools[uid]['province']
            if uid=='fpt-hn':campus='Theo cơ sở tuyển sinh của từng chương trình'
            if 'thanh hóa' in name.lower():campus='Phân hiệu Thanh Hóa'
            # Prefer the primary publication if a reference uses a different code
            # for the same named program (for example UIT's microchip program).
            normalized=lambda text: re.sub(r'\W+','',unicodedata.normalize('NFC',text).lower())
            if any(p['universityId']==uid and p['campus']==campus and normalized(p['name'])==normalized(name) for p in programs.values()):continue
            add(uid,code,name,campus,entry['url'],False,sha=hashlib.sha256((ROOT/key).read_bytes()).hexdigest())

# FPT publishes specializations within its admissions major groups as well.
fpt_key='1e364962f60d0d86'
fpt_tables=expanded_tables(fpt_key)
fpt_majors={'Công nghệ thông tin':'7480201','Khoa học máy tính':'7480101','Quản trị kinh doanh':'7340101','Công nghệ truyền thông':'7320106','Luật':'7380101','Ngôn ngữ Anh':'7220201','Ngôn ngữ Hàn Quốc':'7220210','Ngôn ngữ Trung Quốc':'7220204'}
for row in fpt_tables[0][1:]:
    if len(row)<2:continue
    parent=re.sub(r'^Ngành\s+','',row[0]).strip()
    code=fpt_majors.get(parent)
    if code and row[1] and row[1]!=parent:
        add('fpt-hn',code,row[1],'Kiểm tra cơ sở mở chuyên ngành trong thông báo FPT',
            'https://diemthi.tuyensinh247.com/de-an-tuyen-sinh/dai-hoc-fpt-FPT.html',False,kind='specialization',parentName=parent,sha=hashlib.sha256((ROOT/fpt_key).read_bytes()).hexdigest())

# RMIT uses program-specific academic/English requirements; never fabricate a
# common THPT cutoff or use zero as a placeholder for these programs.
rmit=json.loads((ROOT/'827a2471c5b6b504.json').read_text(encoding='utf-8'))
seen=set()
for link in rmit['links']:
    name=unicodedata.normalize('NFC',link['text'])
    if not re.match(r'^(Cử nhân|Kỹ sư|Kĩ sư)',name) or '/chuong-trinh-cu-nhan/' not in link['url'] or link['url'] in seen:continue
    seen.add(link['url'])
    add('rmit-vn','',name,'Theo chương trình tại RMIT Việt Nam',link['url'],True,sha=hashlib.sha256((ROOT/'827a2471c5b6b504').read_bytes()).hexdigest())

coverage=[]
for uid,university in schools.items():
    ps=[p for p in programs.values() if p['universityId']==uid]
    assert ps,(uid,'No program directory')
    years=[]
    for year in [2024,2025,2026]:
        rows=[r for r in records if r['universityId']==uid and r['year']==year]
        assert rows or uid=='rmit-vn',(uid,year,'Missing score coverage')
        years.append({'year':year,'records':len(rows),'officialRecords':sum(r['isVerifiedOfficial'] for r in rows),
            'referenceRecords':sum(not r['isVerifiedOfficial'] for r in rows),
            'unknownScaleRecords':sum(r['scoreScale'].startswith('Chưa') for r in rows),
            'status':'criteria_based' if uid=='rmit-vn' else 'published',
            'sources':sorted({r['sourceUrl'] for r in rows})})
    coverage.append({'id':uid,'universityId':uid,'programs':len(ps),'catalogueYear':2026,'checkedAt':'2026-11-07','years':years,
        'note':'Xem điều kiện học thuật và tiếng Anh từng chương trình; không áp dụng một bảng điểm chuẩn THPT chung.' if uid=='rmit-vn' else 'Số ngành/chương trình theo danh mục công bố; nhóm ngành và chuyên ngành được phân biệt. Nguồn tổng hợp chưa được coi là xác minh chính thức.'})

(snapshot/'programs-20261107.json').write_text(json.dumps(list(programs.values()),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(snapshot/'coverage-20261107.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
manifest={'version':'20261107','years':[2024,2025,2026],'checkedAt':'2026-11-07','universities':23,
    'records':len(records),'programs':len(programs),'officialRecords':sum(r['isVerifiedOfficial'] for r in records),
    'referenceRecords':sum(not r['isVerifiedOfficial'] for r in records),
    'unknownScaleRecords':sum(r['scoreScale'].startswith('Chưa') for r in records),
    'files':{kind:{'path':f'{kind}-20261107.json','sha256':hashlib.sha256((snapshot/f'{kind}-20261107.json').read_bytes()).hexdigest()} for kind in ['records','programs','coverage']}}
(snapshot/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Programs',len(programs),'Universities',len(coverage))
print({c['id']:c['programs'] for c in coverage})
