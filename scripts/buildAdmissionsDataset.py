"""Build factual admissions data from the reviewed official publications.

Run collectAdmissionResearch.py first. Each recipe identifies exact source columns;
we never infer scores for missing years or convert one school's scoring scale.
"""
import json, re, hashlib, unicodedata, ast, operator
from pathlib import Path
from inspectAdmissionSource import ROOT
from bs4 import BeautifulSoup

SCHOOLS={u['id']:u for u in json.loads((ROOT/'universities.json').read_text(encoding='utf-8'))}
RECORDS=[]
medical=[('7720101','Y khoa'),('7720110','Y học dự phòng'),('7720115','Y học cổ truyền'),('7720201','Dược học'),('7720301','Điều dưỡng'),('7720501','Răng - Hàm - Mặt'),('7720601','Kỹ thuật xét nghiệm y học')]
def source(key):return json.loads((ROOT/(key+'.json')).read_text(encoding='utf-8'))
def expanded_tables(key):
    """Resolve actual HTML rowspans before reading score/combination columns."""
    result=[]
    for table in BeautifulSoup((ROOT/key).read_bytes(),'html.parser').select('table'):
        grid={};rows=[]
        for y,tr in enumerate(table.select('tr')):
            x=0
            for cell in tr.find_all(['td','th'],recursive=False):
                while (y,x) in grid:x+=1
                value=cell.get_text(' ',strip=True)
                for dy in range(int(cell.get('rowspan',1))):
                    for dx in range(int(cell.get('colspan',1))):grid[y+dy,x+dx]=value
                x+=int(cell.get('colspan',1))
            width=max((xx for yy,xx in grid if yy==y),default=-1)+1
            rows.append([grid.get((y,xx),'') for xx in range(width)])
        result.append(rows)
    return result
def number(value):
    value=str(value or '').strip().replace(',','.')
    return float(value) if re.fullmatch(r'\d+(?:\.\d+)?',value) else None
def add(uid,year,key,code,name,score,*,method='Điểm thi tốt nghiệp THPT',scale=30,combo='',campus='',notes='',page=None,official=True):
    score=number(score)
    if score is None:return
    assert 0 < score <= (scale or 1600),(uid,year,code,name,score,scale)
    src=source(key) if (ROOT/(key+'.json')).exists() else {'url':PDF_URLS[key],'title':f'Điểm trúng tuyển {year}'}
    identity=[uid,year,code,name,method,campus,combo,scale]
    rid='official-'+hashlib.sha256(json.dumps(identity,ensure_ascii=False).encode()).hexdigest()[:24]
    if not campus:
        branch=next((p for p in ['Thanh Hóa','Quảng Ninh','Vĩnh Long','Hậu Giang','Sóc Trăng'] if p.lower() in (name+' '+notes).lower()),None)
        campus=branch or SCHOOLS[uid]['province']
    RECORDS.append(dict(id=rid,universityId=uid,universityName=SCHOOLS[uid]['officialName'],
        campus=campus or SCHOOLS[uid]['province'],admissionCode=code,majorCode=code,majorName=name,
        programName=name,year=year,scoreType='cutoff',method=method,subjectCombination=combo or 'Xem văn bản gốc',
        subjectCombinations=re.findall(r'\b[A-Z]{1,2}\d{1,2}\b',combo),cutoffScore=score,
        scoreScale=f'Thang {scale:g}' if scale else 'Chưa đối chiếu thang điểm; xem nguồn',calculationFormula='Theo phương thức và quy tắc quy đổi trong văn bản gốc.',
        subCriteria=notes or 'Xem điều kiện và tiêu chí phụ trong văn bản gốc.',tuitionInfo='Xem thông báo học phí của trường theo khóa nhập học.',
        sourceUrl=src['url'],sourceDocument=f"Điểm trúng tuyển {year} – {SCHOOLS[uid]['shortName']}",
        sourceSha256=hashlib.sha256((ROOT/key if (ROOT/key).exists() else ROOT/(key+'.json')).read_bytes()).hexdigest(),sourcePage=page,
        verifiedDate='2026-11-07',isVerifiedOfficial=official,sourceType='official' if official else 'reference'))

PDF_URLS={
 '746b168f12017a4e':'https://tuyensinh.ctu.edu.vn/images/upload/TT_TS/2026/TB2532_Thong-bao-ket-qua-va-diem-chuan_2026_web.pdf',
 '386e3ee18c058d31':'https://tuyensinh.hueuni.edu.vn/News/Download/10722',
 '3834a57caec1c9d9':'https://tuyensinh.hlu.edu.vn/Images/Post/files/Tuyensinh/DHCQ/K51/BD%20DTT%20K51.pdf',
 '13cedf3403459da1':'https://tuyensinh.hlu.edu.vn/Images/Post/files/Tuyensinh/DHCQ/QD%20DTT%20K50.pdf',
 'a78b5c8bab2b2bc0':'https://tuyensinh.hlu.edu.vn/Images/Post/files/Tuyensinh/DHCQ/K49/QD%20DTT%20%20K49%20%20TTN.pdf',
 'b7407c807cfdfefc':'https://hpmu.edu.vn/hpmu/uploads/news/2026_08/tb-diem-trung-tuyen-dh-he-cq-2026_1.pdf',
 '078d631e45c7a6bc':'https://hpmu.edu.vn/hpmu/uploads/news/2025_08/tb-diem-trung-tuyen-dh-he-cq-2025.pdf',
 '5ab533fed34f45ff':'https://drive.google.com/file/d/120XeyBDATqTd-UHEyHh2cNudSt_OqgNK/view',
 'd90260bd1e43a029':'https://tmu.edu.vn/upload/files/shares/Q%C4%90%202079%20%C4%90I%E1%BB%82M%20TT%202026_0001.pdf',
 '498ec26d9669022a':'https://neu.edu.vn/wp-content/uploads/2026/08/Thong-bao-Trung-tuyen-DHCQ-2026.pdf',
 'hcmut-24506.html':'https://hcmut.edu.vn/tintuc/cong-bo-diem-trung-tuyen-phuong-thuc-xet-tuyen-tong-hop-nam-2026',
}

# VNU University of Engineering and Technology: the school publishes one common
# converted admission score in 2025/2026. The 2024 table is the THPT method only.
for year,key in [(2024,'ce7161fea392e5db'),(2025,'bcb9f42582e3d1f7'),(2026,'14e4f5b42172ad11')]:
    for row in source(key)['tables'][0][1:]:
        if year==2024:code,name,score=row[:3]; notes=''
        elif year==2025:_,code,name,score=row[:4];notes=''
        else:
            start=next((i for i,c in enumerate(row) if re.fullmatch(r'7\w{6}',c)),None)
            if start is None:continue
            _,name,code,score,*tail=row[start:];notes='; '.join(tail)
        add('uet-vnu',year,key,code,name,score,notes=notes,method='Điểm thi tốt nghiệp THPT' if year==2024 else 'Điểm xét tuyển quy đổi tương đương')

# Two existing member universities of University of Danang, not the other schools.
for year,key in [(2024,'0743c9bd03f6bcc7'),(2025,'7b3927068beb15ea'),(2026,'d77e95b6b995ae29')]:
    uid=None
    for row in source(key)['tables'][0][1:]:
        if len(row)<4:continue
        if row[1] in ['DDK','DDS']:uid={'DDK':'dut-udn','DDS':'ued-udn'}[row[1]];continue
        if re.fullmatch(r'[IVX]+',row[0]):uid=None;continue
        if uid:
            method=row[4] if year==2026 and len(row)>4 else 'Điểm thi tốt nghiệp THPT'
            # 2026 source explicitly identifies the method per row.
            if method and not ('THPT' in method or 'học bạ' in method.lower()):continue
            add(uid,year,key,row[1],row[2],row[3],method=method or 'Điểm thi tốt nghiệp THPT',notes=row[4] if year==2024 else '')

for row in source('974ea7810c902dbd')['tables'][0][1:]:
    if len(row)>=5 and number(row[0]) is not None:add('neu',2025,'974ea7810c902dbd',row[2],row[1],row[4],method='Điểm xét tuyển quy đổi tương đương')
for line in Path('scripts/admissions-hcmut-2026.tsv').read_text(encoding='utf-8').splitlines():
    code,name,score=line.split('\t')
    if code.startswith('2') and code not in ['208','266','268']:name+=' (Dạy và học bằng tiếng Anh)'
    add('hcmut-vnuhcm',2026,'hcmut-24506.html',code,name,score,method='Xét tuyển tổng hợp',scale=100)
for line in Path('scripts/admissions-uit-2026.tsv').read_text(encoding='utf-8').splitlines():
    code,name,score=line.split('\t')
    add('uit-vnuhcm',2026,'6c079f2602a5363d',code,name,score,method='Xét tuyển tổng hợp',scale=100)
    RECORDS[-1].update(sourceDataUrl='https://www.uit.edu.vn/media/DIEM_CHUAN_1_a4247f962d.png',sourceSha256=hashlib.sha256((ROOT/'uit2026.png').read_bytes()).hexdigest())

ump26=[
 ('7310401','Tâm lý học',[('B00',24.98),('A00',25.25),('D01',23.48)]),
 ('7720101','Y khoa',[('B00',27.95)]),
 ('7720110','Y học dự phòng',[('B00; A00',20.75),('B08',20)]),
 ('7720115','Y học cổ truyền',[('B00',23.63),('B08',22.45),('D07',22.25)]),
 ('7720201','Dược học',[('B00; A00',24),('D07',22.5)]),
 ('7720202','Công nghệ dược phẩm',[('B00; A00',23),('D07',21.75)]),
 ('7720203','Hóa dược',[('B00; A00',24.8),('D07',23.5)]),
 ('7720301','Điều dưỡng',[('B00; A00',22.25),('D07',21)]),
 ('772030103','Điều dưỡng chuyên ngành gây mê hồi sức',[('B00; A00',23),('D07',21.75)]),
 ('7720302','Hộ sinh',[('B00; A00',20.6),('D07',19.25)]),
 ('7720401','Dinh dưỡng',[('B00; A00',21.7),('D07',20.25)]),
 ('7720501','Răng - Hàm - Mặt',[('B00',27.11)]),
 ('7720502','Kỹ thuật phục hình răng',[('B00; A00',22.75)]),
 ('7720601','Kỹ thuật xét nghiệm y học',[('B00; A00',23.35),('D07',21.85)]),
 ('7720602','Kỹ thuật hình ảnh y học',[('B00; A00',22.6),('D07',21.25)]),
 ('7720603','Kỹ thuật phục hồi chức năng',[('B00; A00',23.1),('D07',21.6)]),
 ('7720701','Y tế công cộng',[('B00; A00',19),('B08',18.85)]),
 ('7760101','Công tác xã hội',[('B00',19.75),('A00',20),('D01',18.25)])]
for i,(code,name,groups) in enumerate(ump26,1):
    page=1 if i<=5 else 2 if i<=14 else 3
    for combo,score in groups:
        add('ump-hcm',2026,'c8693456da003900',code,name,score,combo=combo,page=page,notes='B00 là tổ hợp gốc. Các tổ hợp A00, B08, D01, D07 được công bố theo điểm thấp nhất của thí sinh đăng ký xét tuyển; xem chú thích (3) của trường.')
        RECORDS[-1].update(sourceDataUrl=f'https://ump.edu.vn/uploads/ckeditor/images/Truong/DaoTaoDaiHoc/TuyenSinh/2026/3557_TB_DiemtrungtuyenDHCQ2026_{page}.png',sourceSha256=hashlib.sha256((ROOT/f'c8693456da003900-{page-1}.png').read_bytes()).hexdigest())

for row in source('b922b3914bad72b2')['tables'][0][1:]:
    code,name=row[1:3]
    add('fpt-hn',2026,'3faa516de5ed537e',code,name,21 if code=='7480101' else 18,method='Xét tuyển kết hợp kết quả thi THPT và học bạ',campus='Toàn trường; xem thông báo chỉ tiêu từng cơ sở',combo='Toán và 2 môn bất kỳ; ngoài CNTT/KHMT còn được dùng Ngữ văn và 2 môn bất kỳ')
    RECORDS[-1]['calculationFormula']='(Điểm thi tốt nghiệp THPT + Điểm trung bình lớp 12 × 3) / 2 + điểm khuyến khích + điểm ưu tiên'
for row in source('b922b3914bad72b2')['tables'][1][2:]:
    if len(row)<5 or number(row[0]) is None:continue
    code,name=row[1:3]
    add('fpt-hn',2025,'9eb024c46e6381b3',code,name,18.5,campus='Toàn trường; kiểm tra ngành mở tại từng cơ sở',combo='Toán + 2 môn bất kỳ',notes='Ngưỡng Top50 theo công bố kết quả tuyển sinh FPTU 2025; cộng điểm ưu tiên theo quy định.')
    add('fpt-hn',2025,'9eb024c46e6381b3',code,name,17,method='Điểm thi tốt nghiệp THPT – thí sinh thế hệ 1',campus='Toàn trường; kiểm tra ngành mở tại từng cơ sở',combo='Toán + 2 môn bất kỳ',notes='Chỉ áp dụng cho thí sinh là người đầu tiên trong gia đình (phụ huynh/người bảo trợ và tất cả anh chị em ruột) học đại học, theo định nghĩa trong công bố năm 2025.')
    RECORDS[-1]['applicantGroup']='first_generation'

for (code,name),score in zip(medical+[('7720302','Hộ sinh'),('7720401','Dinh dưỡng'),('7720602','Kỹ thuật hình ảnh y học'),('7720701','Y tế công cộng')],[26,18,22.5,21.85,19.1,25.25,20,18,18,20.75,17]):
    add('hue-med',2026,'386e3ee18c058d31',code,name,score)
for line in Path('scripts/admissions-neu-2026.tsv').read_text(encoding='utf-8').splitlines():
    code,name,score,page=line.split('\t')
    add('neu',2026,'498ec26d9669022a',code,name,score,method='Điểm xét tuyển quy đổi tương đương',page=int(page))

for ti,year in enumerate([2024,2025]):
    key='1889d18e331cd303'
    for row in source(key)['tables'][ti][3:]:
        if len(row)>=6 and number(row[0]) is not None:
            add('tmu',year,key,'',row[1],row[5],combo=row[2])
for line in Path('scripts/admissions-tmu-2026.tsv').read_text(encoding='utf-8').splitlines():
    code,name,score=line.split('\t')
    add('tmu',2026,'d90260bd1e43a029',code,name,score,method='Điểm xét tuyển quy đổi tương đương',combo='Tổ hợp chuẩn (A00 cao hơn 0,5 điểm)',notes='IPOP: Chương trình định hướng chuyên sâu nghề nghiệp quốc tế. Xem điều kiện trong văn bản gốc.',page=1 if int(code[2:])<=10 else 2 if int(code[2:])<=34 else 3)

for year,key in [(2025,'22996787cadeb64e'),(2026,'323c9652594e70a5')]:
    for table in source(key)['tables']:
        for row in table:
            if len(row)!=3 or number(row[0]) is None:continue
            m=re.search(r'(.+?)\s*Mã xét tuyển:\s*(.+)',row[1])
            if m:add('hnue',year,key,re.sub(r'\s+','',m[2]),m[1],row[2],method='Điểm xét tuyển quy đổi tương đương')
key='68f43142bae4cc76'
for table in expanded_tables(key)[:2]:
    for row in table[1:]:
        if len(row)>=7 and re.match(r'^7\d{6}',row[1]):
            add('hnue',2024,key,row[1],row[2],row[4],scale=int(row[5]),combo=row[3],notes=row[6])
# Two rows are detached from their parent tables in the school's HTML.
add('hnue',2026,'323c9652594e70a5','7229030','Văn học',26.43,method='Điểm xét tuyển quy đổi tương đương')
add('hnue',2026,'323c9652594e70a5','7310630','Việt Nam học',23,method='Điểm xét tuyển quy đổi tương đương')

key='5599c5b20608fa20'
for row in source(key)['tables'][1][1:]:
    if len(row)==4:add('vnua',2024,key,row[0],row[1],row[3],combo=row[2])
vnua_names=['Thú y','Chăn nuôi thú y - Thủy sản','Nông nghiệp và cảnh quan','Công nghệ kỹ thuật Ô tô và Cơ điện tử','Kỹ thuật cơ khí','Kỹ thuật điện, Điện tử và Tự động hóa','Logistics và Quản lý chuỗi cung ứng','Kế toán, Quản trị kinh doanh và Thương mại','Công nghệ sinh học và Công nghệ dược liệu','Công nghệ thực phẩm và Chế biến','Kinh tế và Quản lý','Xã hội học','Luật','Công nghệ thông tin và Kỹ thuật số','Quản lý đất đai, Bất động sản và Môi trường','Khoa học môi trường','Ngôn ngữ Anh']
for year,key,names,scores,hb in [
    (2025,'cc7289654750b8a7',vnua_names+['Sư phạm công nghệ','Du lịch'],[20.5,17,17,21,21.5,22,21,17,20.5,21,17,22,23.3,19.6,18.3,21,21.2,24.1,23.3],[23.5,20,20,24,24.5,25,24,20,23.5,24,20,25,26.3,22.6,21.3,24,24.2,27.1,26.3]),
    (2026,'d51931675fe4353a',vnua_names+['Ngôn ngữ Trung Quốc','Sư phạm công nghệ','Du lịch','Quản lý và phát triển du lịch','Quy hoạch vùng và Đô thị','Di sản học'],[20.3,16,16,20.3,21.5,22,21,17,19,20.3,16.5,16,20,17,16,16,17,22.6,24.41,21.3,17,16,18],[23.3,19,19,23.3,24.5,25,24,20,22,23.3,19.5,19,23,20,19,19,20,25.6,27.41,24.3,20,19,21])]:
    for i,(name,score,hscore) in enumerate(zip(names,scores,hb),1):
        note='Xem điều kiện ngành Luật / Sư phạm, điểm môn và học lực trong thông báo gốc.'
        add('vnua',year,key,f'HVN{i:02}',name,score,notes=note)
        add('vnua',year,key,f'HVN{i:02}',name,hscore,method='Xét học bạ THPT',notes=note)

key='0585cf154cfc1610'
for row in source(key)['tables'][0][1:]:
    if len(row)>=4 and number(row[0]) is not None:add('qnu',2025,key,row[2],row[1],row[3])

for year,key in [(2024,'f334917df57fa7cb'),(2025,'2cfe9fcdcfdb8e96'),(2026,'5eac0952c4d5139b')]:
    for ti,table in enumerate(source(key)['tables']):
        if ti==0:continue
        campus='TP. Hồ Chí Minh' if ti==1 or (year==2024 and ti==2) else 'Phân hiệu Vĩnh Long'
        for row in table:
            if len(row)<5 or number(row[0]) is None:continue
            code,name=row[1:3]
            if year==2024:
                combo=row[7] if len(row)>=12 else row[6]
                score=row[8] if len(row)>=12 else row[7]
                method='Điểm thi tốt nghiệp THPT';scale=30
            elif year==2025:combo='';score=row[4];method='Điểm xét tuyển quy đổi tương đương (PT2,3,4,5)';scale=30
            else:combo=row[4];score=row[5];method='Xét tuyển tích hợp';scale=100
            add('ueh',year,key,code,name,score,combo=combo,campus=campus,method=method,scale=scale)

key='746b168f12017a4e'
for table in json.loads((ROOT/(key+'-tables.json')).read_text(encoding='utf-8')):
    for row in table:
        if len(row)==4 and number(row[0]) is not None:
            add('ctu',2026,key,row[1],row[2].replace('\n',' '),row[3],method='Điểm xét tuyển quy đổi tương đương')

# Transcribed and visually checked against both official score chart images.
for line in Path('scripts/admissions-hust-2026.tsv').read_text(encoding='utf-8').splitlines():
    code,name,score,combo=line.split('\t')
    add('hust',2026,'e59da4099febe954',code,name,score,combo=combo+' (tổ hợp gốc; xem độ lệch tổ hợp trong nguồn)')
hust_names={r['admissionCode']:r['majorName'] for r in RECORDS if r['universityId']=='hust'}
hust_names.update({'EM4':'Kế toán','TROY-BA':'Quản trị kinh doanh - hợp tác với ĐH Troy (Hoa Kỳ)',
    'TE-E2':'Kỹ thuật Ô tô (CT tiên tiến)','TE-EP':'Cơ khí hàng không (CT Việt - Pháp PFIEV)'})
for line in Path('scripts/admissions-hust-history.tsv').read_text(encoding='utf-8').splitlines():
    year,code,score=line.split('\t');year=int(year)
    add('hust',year,{2024:'48e8b946524594bb',2025:'fe9b8b407667c0e8'}[year],code,hust_names[code],score)

# FTU's official portal exposes its published 2025 comparison grid. Do not use
# its 2026 benchmark API: at review time it only contained direct-admission ranks.
key='3b97720f5afd82fb'
ftu=json.loads((ROOT/'ftu-2025-benchmark-scores.json').read_text(encoding='utf-8'))['data']
programs={p['id']:p for p in ftu['programs']}
groups={g['id']:g for g in ftu['applicantGroups']}
methods={m['id']:m for m in ftu['methods']}
for cell in ftu['cells']:
    if cell['benchmarkScore'] is None:continue
    p=programs[cell['admissionYearProgramId']];g=groups[cell['applicantGroupId']]
    cg=next(x for x in g['subjectCombinationGroups'] if x['id']==cell['subjectCombinationGroupId'])
    combo='; '.join(ftu['subjectCombinationCodes'][x] for x in cg['subjectCombinationIds'])
    method=methods[g['admissionMethodId']]['name']+' – '+g['code']+' – '+g['name']
    add('ftu',2025,key,p['code'],p['name'],cell['benchmarkScore'],method=method,scale=cell['scoreScale'],combo=combo,campus=p['campusName'],notes=cell['notes'] or '')
    RECORDS[-1].update(majorCode=p['majorCode'],majorName=p['majorName'],admissionCode=p['admissionCode'],programName=p['name'],sourceDataUrl='https://apituyensinh.1102.us/api/public/admission-years/2025/benchmark-scores',sourceSha256=hashlib.sha256((ROOT/'ftu-2025-benchmark-scores.json').read_bytes()).hexdigest())

# FTU 2026: score appendix, pages 4–6. Original A00 baseline; 40-point
# language/computing programs are kept on their published scale.
ftu_scores={'NTHKT01':29.7,'NTHKT02':28.75,'NTHKT03':28.7,'NTHKT04':28,'NTHKD05':29.5,'NTHKD06':28.75,'NTHKD07':27.9,'NTHKD08':25,'NTHQT09':26.75,'NTHQT10':26.6,'NTHTM11':27.2,'NTHTC14':28.7,'NTHTC15':27,'NTHKE16':27.1,'NTHLS17':25,'NTHQK12':25,'NTHCN18':34.66,'NTHNN19':33.88,'NTHNN20':36,'NTHNN21':32.15,'NTHNN22':32.25,'NTSKT01':27.9,'NTSKT02':28.5,'NTSQT03':26.8,'NTSMT04':27.65,'NTSTC05':27.45,'NTSKE06':26.85,'NTHKK23':23}
ftu26=json.loads((ROOT/'ftu-2026-programs.json').read_text(encoding='utf-8'))['data']
assert ftu26['totalPages']==1
for p in json.loads((ROOT/'ftu-2026-benchmark-scores.json').read_text(encoding='utf-8'))['data']['programs']:
    code=p['admissionCode'];score=ftu_scores[code];scale=40 if code in ['NTHCN18','NTHNN19','NTHNN20','NTHNN21','NTHNN22'] else 30
    add('ftu',2026,'5ab533fed34f45ff',p['code'],p['name'],score,scale=scale,combo='A00 (tổ hợp gốc; xem độ lệch tổ hợp trong thông báo)',campus=p['campusName'],page=6 if p['campusName']!='Trụ sở chính Hà Nội' else 4 if code in list(ftu_scores)[:10] else 5)
    RECORDS[-1].update(majorCode=p['majorCode'],majorName=p['majorName'],admissionCode=code,programName=p['name'])

key='6ba982652897432b'
for row in source(key)['tables'][0][2:]:
    if len(row)>=5 and number(row[0]) is not None:
        add('hmu',2026,key,row[1],row[2],row[4],campus='Phân hiệu Thanh Hóa' if row[1].endswith('TH') else 'Hà Nội')

key='c9dc641c3905be1f'
for ti,table in enumerate(source(key)['tables']):
    for row in table[2:]:
        if len(row)>=4 and number(row[0]) is not None:
            add('hpmu',2024,key,'',row[1],row[3],combo=row[2],method='Điểm thi tốt nghiệp THPT' if ti==0 else 'Xét học bạ / kết hợp chứng chỉ ngoại ngữ',notes='; '.join(row[4:]))

medical=[('7720101','Y khoa'),('7720110','Y học dự phòng'),('7720115','Y học cổ truyền'),('7720201','Dược học'),('7720301','Điều dưỡng'),('7720501','Răng - Hàm - Mặt'),('7720601','Kỹ thuật xét nghiệm y học')]
for year,key,scores,criteria in [
    (2025,'078d631e45c7a6bc',[25.33,19.35,24.03,20,22.22,24.63,23.23],['Toán 7.50; Hóa 9.00','Toán 6.75; Hóa 5.60','','Toán 6.75; Hóa 6.25','Toán 6.25; Hóa 6.25','Toán 8.00; Hóa 7.50','Toán 7.25; Hóa 6.00']),
    (2026,'b7407c807cfdfefc',[25.10,18,22.20,20,19.95,24.75,20.85],['Toán 8.50','','Toán 6.75','','Toán 6.50','Toán 8.50','Toán 7.25'])]:
    for (code,name),score,note in zip(medical,scores,criteria):add('hpmu',year,key,code,name,score,method='Điểm xét tuyển quy đổi tương đương',notes=note,page=1)

law=[('7380101','Luật'),('7380107','Luật Kinh tế'),('7380109','Luật Thương mại quốc tế'),('7220201','Ngôn ngữ Anh'),('7380101','Luật (đào tạo tại Phân hiệu Đắk Lắk)')]
for year,key,scores in [(2025,'13cedf3403459da1',[24.15,25.55,24.15,23.20,19.75]),(2026,'3834a57caec1c9d9',[24.12,25.95,24.22,23.09,20])]:
    for (code,name),score in zip(law,scores):add('hlu',year,key,code,name,score,combo='D01 (tổ hợp gốc; tổ hợp khác xem quy đổi)',campus='Phân hiệu Đắk Lắk' if 'Phân hiệu' in name else 'Hà Nội',page=3 if year==2025 else 1)
for i,groups in enumerate([
    [('A00; A01',26.15),('C00',28.15),('D01; D02; D03; D04; D05; D06',26.25)],
    [('A00; A01; D01; D02; D03; D04; D05; D06',26.9),('C00',28.85)],
    [('A01; D01',26)], [('A01',24.65),('D01',25.25)],
    [('A00; A01; C00; D01; D02; D03; D04; D05; D06',22.85)]
]):
    for combo,score in groups:add('hlu',2024,'a78b5c8bab2b2bc0',law[i][0],law[i][1],score,combo=combo,campus='Phân hiệu Đắk Lắk' if i==4 else 'Hà Nội',page=3)

# Archive references fill university/year gaps only. A university's reviewed
# primary publication always takes precedence over the secondary compilation.
def formula_scale(formula):
    formula=(formula or '').upper()
    if not formula:return None
    formula=re.sub(r'\bMON_[123]\b','10',formula)
    formula=re.sub(r'\bUT\b','0',formula)
    if not re.fullmatch(r'[0-9.+*/()\s-]+',formula):return None
    try:
        def calculate(node):
            if isinstance(node,ast.Constant) and isinstance(node.value,(int,float)):return node.value
            if isinstance(node,ast.BinOp) and type(node.op) in [ast.Add,ast.Sub,ast.Mult,ast.Div]:
                return {ast.Add:operator.add,ast.Sub:operator.sub,ast.Mult:operator.mul,ast.Div:operator.truediv}[type(node.op)](calculate(node.left),calculate(node.right))
            raise ValueError('Not a score formula')
        value=calculate(ast.parse(formula,mode='eval').body)
        return value if value in [10,30,40,100,150,450,1200,1600] else None
    except (ValueError,SyntaxError,ZeroDivisionError):return None

official_pairs={(r['universityId'],r['year']) for r in RECORDS}
for path in sorted(ROOT.glob('archive-*.json')):
    archive=json.loads(path.read_text(encoding='utf-8'));uid=archive['universityId'];year=archive['year']
    if (uid,year) in official_pairs or uid=='rmit-vn':continue
    rows=archive['rows']
    # Include the primary exam pathway, rather than mixing application floors,
    # early eligibility, priority rankings or international certificates.
    chosen=[r for r in rows if r.get('admission_name')=='Điểm thi THPT']
    if uid=='hcmut-vnuhcm':
        chosen=[r for r in rows if r.get('admission_name') in ['Điểm thi THPT','Điểm xét tuyển kết hợp']]
    elif not chosen:
        chosen=[r for r in rows if r.get('admission_name')=='Điểm xét tuyển kết hợp']
    seen=set()
    for row in chosen:
        score=number(row['mark'])
        if row['year']!=year or score is None or score<=0 or row.get('status_mark')!=1:continue
        method=row['admission_name'];scale=formula_scale(row.get('formula'))
        if uid=='hcmut-vnuhcm':method='Xét tuyển tổng hợp';scale=100
        if scale and score>scale:scale=None
        code=row.get('display_code') or row.get('code') or ''
        name=row['name'];combo=row.get('block') or '';note=BeautifulSoup(row.get('introtext') or '', 'html.parser').get_text(' ',strip=True)
        explicit=re.search(r'thang\s*(?:điểm\s*)?(1600|1200|450|150|100|40|30|10)\b',note,re.IGNORECASE)
        if explicit:scale=int(explicit[1])
        if row.get('sub_mark_type'):method+=' – '+str(row['sub_mark_type'])
        identity=(code,name,method,combo,score,scale,note)
        if identity in seen:continue
        seen.add(identity)
        before=len(RECORDS)
        add(uid,year,path.stem,code,name,score,method=method,scale=scale,combo=combo,notes=note,official=False,campus='Toàn trường; kiểm tra cơ sở tuyển sinh' if uid=='fpt-hn' else '')
        if len(RECORDS)>before:
            # Different eligibility notes can define different application groups.
            rid='reference-'+hashlib.sha256(json.dumps([uid,year,code,name,method,combo,scale,note],ensure_ascii=False).encode()).hexdigest()[:24]
            RECORDS[-1].update(id=rid,sourceUrl=archive['dataUrl'],sourceDataUrl=archive['dataUrl'],sourceDocument=f'Tuyensinh247 – Điểm trúng tuyển {year} – {SCHOOLS[uid]["shortName"]}')

evidence_path=Path('docs/admissions/official-score-evidence.json')
if evidence_path.exists():
    evidence=json.loads(evidence_path.read_text(encoding='utf-8'))
    lookup={(e['universityId'],e['year'],e['admissionCode'],e['cutoffScore']):e for e in evidence}
    for record in RECORDS:
        proof=lookup.get((record['universityId'],record['year'],record['admissionCode'],record['cutoffScore']))
        if proof and record['method']=='Điểm thi THPT':
            for field in ['sourceUrl','sourceDocument','sourcePage','sourceSha256']:record[field]=proof[field]
            record.update(isVerifiedOfficial=True,sourceType='official',scoreScale=f'Thang {proof["scoreScale"]}',method='Điểm thi tốt nghiệp THPT')

deduplicated={};ambiguous=set()
for record in RECORDS:
    prior=deduplicated.get(record['id'])
    if prior and prior['cutoffScore']!=record['cutoffScore']:ambiguous.add(record['id'])
    else:deduplicated[record['id']]=record
RECORDS=[r for rid,r in deduplicated.items() if rid not in ambiguous]
province_regions={u['province']:u['region'] for u in SCHOOLS.values()}
province_regions.update({'Thanh Hóa':'Miền Trung','Quảng Ninh':'Miền Bắc','Vĩnh Long':'Miền Nam','Hậu Giang':'Miền Nam','Sóc Trăng':'Miền Nam'})
for record in RECORDS:
    campus=record['campus']
    province=next((p for p in province_regions if p.lower() in campus.lower()),None)
    record['campusProvince']=province
    record['campusRegion']=province_regions.get(province)
(ROOT/'ambiguous-references.json').write_text(json.dumps([r for rid,r in deduplicated.items() if rid in ambiguous],ensure_ascii=False,indent=2),encoding='utf-8')

OUT=Path('public/data/admissions/records-20261107.json')
if __name__=='__main__':
    assert len({r['id'] for r in RECORDS})==len(RECORDS),'Duplicate admission identity'
    OUT.parent.mkdir(parents=True,exist_ok=True)
    OUT.write_text(json.dumps(RECORDS,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    from collections import Counter
    print('Total',len(RECORDS));print(Counter((r['universityId'],r['year']) for r in RECORDS))
