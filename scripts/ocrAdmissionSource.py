"""OCR assistance only: outputs must be checked against the rendered source."""
import sys,json
import pymupdf
from rapidocr_onnxruntime import RapidOCR
from inspectAdmissionSource import ROOT
sys.stdout.reconfigure(encoding='utf-8')
engine=RapidOCR(intra_op_num_threads=4,inter_op_num_threads=4)
for key in sys.argv[1:]:
    raw=(ROOT/key).read_bytes()
    pages=[]
    if raw.startswith(b'%PDF'):
        doc=pymupdf.open(stream=raw,filetype='pdf')
        for n,p in enumerate(doc):
            target=ROOT/(key+f'-p{n+1}.png')
            if not target.exists():p.get_pixmap(matrix=pymupdf.Matrix(2,2)).save(target)
            pages.append(target)
    else:pages=[ROOT/key]
    for n,p in enumerate(pages):
        out=ROOT/(key+f'-p{n+1}-ocr.json')
        if out.exists():continue
        result,_=engine(str(p))
        out.write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
        print(key,n+1,'boxes',len(result or []),flush=True)
