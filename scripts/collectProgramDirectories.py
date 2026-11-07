import json,sys
from concurrent.futures import ThreadPoolExecutor
from inspectAdmissionSource import inspect,ROOT
sys.stdout.reconfigure(encoding='utf-8')
schools={s['code']:s for s in json.loads((ROOT/'t247-schools.json').read_text(encoding='utf-8'))['data']}
existing=json.loads((ROOT/'universities.json').read_text(encoding='utf-8'))
def collect(university):
    if university['id']=='rmit-vn':return None
    school=schools['TMU' if university['id']=='tmu' else university['institutionCode']]
    url=f'https://diemthi.tuyensinh247.com/de-an-tuyen-sinh/{school["alias"]}-{school["code"]}.html'
    result=inspect(url)
    return {'universityId':university['id'],'key':result['key'],'url':url,'tableRows':list(map(len,result['tables']))}
with ThreadPoolExecutor(max_workers=6) as pool:results=[r for r in pool.map(collect,existing) if r]
(ROOT/'program-directory-index.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
for result in results:print(result['universityId'],result['key'],result['tableRows'])
