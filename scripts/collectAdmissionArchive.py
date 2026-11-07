"""Collect published archive references, kept separate from official publications.

The public site uses this same read-only endpoint for its year selector. These
references must never be labelled as an official university verification.
"""
import json, sys, time
from concurrent.futures import ThreadPoolExecutor
from inspectAdmissionSource import ROOT
import requests
sys.stdout.reconfigure(encoding='utf-8')
schools=json.loads((ROOT/'t247-schools.json').read_text(encoding='utf-8'))['data']
existing=json.loads((ROOT/'universities.json').read_text(encoding='utf-8'))
lookup={x['code']:x for x in schools}
items=[]
for university in existing:
    code={'tmu':'TMU','rmit-vn':'RMU'}.get(university['id'],university['institutionCode'])
    school=lookup[code]
    for year in [2024,2025,2026]:items.append((university['id'],year,school))
def collect(item):
    uid,year,school=item
    filename=ROOT/f'archive-{uid}-{year}.json'
    dataUrl=f'https://diemthi.tuyensinh247.com/api/common/cutoff-score?school_id={school["id"]}&year={year}'
    if filename.exists():return json.loads(filename.read_text(encoding='utf-8'))
    for attempt in range(3):
        try:
            response=requests.get(dataUrl,timeout=35);response.raise_for_status();result=response.json()
            assert result['success'] and isinstance(result['data'],list)
            # Do not retain publisher staff IDs or unrelated account metadata.
            fields=['code','display_code','name','block','mark','mark_type','year','introtext','status_mark','formula','is_converted_score','sub_mark_type','admission_name']
            rows=[{k:r.get(k) for k in fields} for r in result['data']]
            value={'universityId':uid,'year':year,'publisher':'Tuyensinh247','sourceType':'reference',
                'url':f'https://diemthi.tuyensinh247.com/diem-chuan/{school["alias"]}-{school["code"]}.html',
                'dataUrl':dataUrl,'rows':rows,'checkedAt':'2026-11-07'}
            filename.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
            return value
        except Exception:
            if attempt==2:raise
            time.sleep(1)
with ThreadPoolExecutor(max_workers=6) as pool:values=list(pool.map(collect,items))
for value in values:print(value['universityId'],value['year'],len(value['rows']),sorted({r['admission_name'] for r in value['rows']}))
