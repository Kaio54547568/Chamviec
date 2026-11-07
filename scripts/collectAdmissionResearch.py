import json, sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from inspectAdmissionSource import inspect
sys.stdout.reconfigure(encoding='utf-8')
def job(url):
    try:
        r=inspect(url)
        return {'url':url,'key':r['key'],'tables':list(map(len,r.get('tables',[]))),'pages':r.get('pages'),
                'assets':[x for x in r.get('links',[]) if any(w in x['url'].lower() for w in ['.pdf','drive.google','download'])],
                'images':[x for x in r.get('images',[]) if not any(w in x['url'].lower() for w in ['logo','banner','icon','data:'])]}
    except Exception as e:return {'url':url,'error':type(e).__name__}
urls=json.loads(Path(sys.argv[1] if len(sys.argv)>1 else 'scripts/admissionResearchUrls.json').read_text(encoding='utf-8'))
with ThreadPoolExecutor(max_workers=8) as pool:results=list(pool.map(job,urls))
Path('.admission-source-cache/research-index.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
for r in results: print(r['key'] if 'key' in r else 'ERROR',r['url'], r.get('tables',r.get('error')),r.get('pages',''))
