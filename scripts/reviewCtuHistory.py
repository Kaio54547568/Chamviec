"""Cross-check archive scores against the university's scanned historical appendix.

The column boundaries were checked visually on pages 37–38. Only exact matches
of year, application code, THPT method and numeric cutoff are promoted.
"""
import json,re,hashlib
from pathlib import Path
from inspectAdmissionSource import ROOT
key='0a5f41f1780cc1b0'
evidence=[]
for page in range(37,54):
    boxes=json.loads((ROOT/f'{key}-p{page}-ocr.json').read_text(encoding='utf-8'))
    cy=lambda box:sum(p[1] for p in box[0])/4
    codes=[b for b in boxes if 230<b[0][0][0]<350 and re.fullmatch(r'7\d{6}[A-Z]*',b[1]) and b[2]>=.90]
    for code in codes:
        y=cy(code)
        methods=[b for b in boxes if 910<b[0][0][0]<1035 and abs(cy(b)-y)<10]
        if not any('THPT' in b[1] for b in methods):continue
        for year,lo,hi in [(2024,1195,1280),(2025,1420,1505)]:
            scores=[b for b in boxes if lo<b[0][0][0]<hi and abs(cy(b)-y)<10 and re.fullmatch(r'\d{1,2}(?:[,.]\d{1,2})?',b[1]) and b[2]>=.90]
            if len(scores)!=1:continue
            score=float(scores[0][1].replace(',','.'))
            if not 0<score<=30:continue
            evidence.append({'universityId':'ctu','year':year,'admissionCode':code[1],'cutoffScore':score,'scoreScale':30,
                'sourceUrl':'https://tuyensinh.ctu.edu.vn/images/upload/TT_TS/2026/TTTS_DHCT_2026.pdf',
                'sourceDocument':f'Thông tin tuyển sinh ĐH Cần Thơ 2026 – Phụ lục 5, điểm trúng tuyển {year}',
                'sourcePage':page,'sourceSha256':hashlib.sha256((ROOT/key).read_bytes()).hexdigest()})
Path('docs/admissions').mkdir(parents=True,exist_ok=True)
Path('docs/admissions/official-score-evidence.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Official historical THPT evidence:',len(evidence))
