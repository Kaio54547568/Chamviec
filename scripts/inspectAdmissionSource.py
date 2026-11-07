"""Read public university publications; cache originals outside the application bundle."""
import sys, json, hashlib, pathlib
import truststore
truststore.inject_into_ssl()
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

ROOT = pathlib.Path(__file__).resolve().parents[1] / '.admission-source-cache'
ROOT.mkdir(exist_ok=True)
def inspect(url):
    key=hashlib.sha256(url.encode()).hexdigest()[:16]
    file=ROOT/key
    if not file.exists():
        r=requests.get(url,timeout=45,headers={'User-Agent':'Mozilla/5.0 (compatible; ChamViec-admissions-review)'}); r.raise_for_status(); file.write_bytes(r.content)
    raw=file.read_bytes()
    if raw.startswith(b'%PDF'):
        import fitz
        doc=fitz.open(stream=raw,filetype='pdf')
        text='\n'.join(p.get_text(sort=True) for p in doc)
        (ROOT/(key+'.txt')).write_text(text,encoding='utf-8')
        return {'url':url,'key':key,'pages':len(doc),'text':text}
    s=BeautifulSoup(raw,'html.parser')
    tables=[[[c.get_text(' ',strip=True) for c in tr.find_all(['th','td'],recursive=False)] for tr in t.select('tr')] for t in s.select('table')]
    links=[{'url':urljoin(url,a['href']),'text':a.get_text(' ',strip=True)} for a in s.select('a[href]')]
    images=[{'url':urljoin(url,i['src']),'alt':i.get('alt','')} for i in s.select('img[src]')]
    for x in s.select('script,style,nav,footer,header'): x.decompose()
    result={'url':url,'key':key,'title':s.title.get_text() if s.title else '', 'tables':tables,'links':links,'images':images,'text':s.get_text('\n',strip=True)}
    (ROOT/(key+'.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
    return result
if __name__=='__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    r=inspect(sys.argv[1]); print(json.dumps(r,ensure_ascii=False,indent=2))
