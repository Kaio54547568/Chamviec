# -*- coding: utf-8 -*-
import json
import os
import sys

# Add scripts directory to path
sys.path.append(os.path.dirname(__file__))

from data_groups_1_5 import get_groups_1_to_5
from data_groups_6_10 import get_groups_6_to_10
from data_groups_11_15 import get_groups_11_to_15
from data_groups_16_20 import get_groups_16_to_20

def make_c(id, title, eng, syns, grp, cat, cat_lbl, riasec, summary, tasks, deliverables, tools, env, tradeoffs, skills, subjects, pathways, trial, img, alt, has_3d=False, sim_id=None, exp_type="CAREER_PROFILE"):
    if has_3d:
        exp_type = "3D_INTERACTIVE"
    elif sim_id:
        exp_type = "SCENARIO_SIMULATION"
    return {
        "id": id,
        "title": title,
        "englishTitle": eng,
        "synonyms": syns,
        "group": grp,
        "category": cat,
        "categoryLabel": cat_lbl,
        "riasecCodes": riasec,
        "shortSummary": summary,
        "typicalTasks": tasks,
        "deliverables": deliverables,
        "toolsUsed": tools,
        "workEnvironment": env,
        "difficultiesAndTradeoffs": tradeoffs,
        "coreSkills": skills,
        "highSchoolSubjects": subjects,
        "entryPathways": pathways,
        "entryPathway": " | ".join([f"{p['level']}: {p['description']}" for p in pathways]),
        "trialActivity": trial,
        "has3D": has_3d,
        "simulationTaskId": sim_id,
        "experienceType": exp_type,
        "status": "HOAN_THANH",
        "imageUrl": img,
        "imageAlt": alt,
        "dailyRoutine": [
            f"Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
            f"Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
            f"Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
            f"Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
        ],
        "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
        "lastUpdated": "2025-05-01"
    }

c1_5 = get_groups_1_to_5(make_c)
c6_10 = get_groups_6_to_10(make_c)
c11_15 = get_groups_11_to_15(make_c)
c16_20 = get_groups_16_to_20(make_c)

all_careers = c1_5 + c6_10 + c11_15 + c16_20

print(f"Total careers assembled: {len(all_careers)}")

# Validate groups
group_counts = {}
for item in all_careers:
    grp = item["group"]
    group_counts[grp] = group_counts.get(grp, 0) + 1

print("Counts per group:")
for grp, cnt in sorted(group_counts.items()):
    print(f"  {grp}: {cnt} careers")

assert len(all_careers) == 200, f"Expected 200 careers, but got {len(all_careers)}"
assert len(group_counts) == 20, f"Expected 20 groups, but got {len(group_counts)}"

# Check that every group has exactly 10 careers
for grp, cnt in group_counts.items():
    assert cnt == 10, f"Group {grp} has {cnt} careers instead of 10"

# Format TypeScript output
ts_content = "import { Career } from '../types/index.ts';\n\n"
ts_content += "/**\n"
ts_content += " * CƠ SỞ DỮ LIỆU CHUẨN HÓA 200 NGHỀ NGHIỆP - CHẠM VIỆC\n"
ts_content += " * Phân bố chuẩn xác trên 20 nhóm điều hướng (mỗi nhóm 10 nghề).\n"
ts_content += " * Đầy đủ trường dữ liệu: englishTitle, synonyms, deliverables, entryPathways, trialActivity, status, experienceType.\n"
ts_content += " */\n"
ts_content += "export const CAREERS_DATA: Career[] = " + json.dumps(all_careers, ensure_ascii=False, indent=2) + ";\n"

output_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "careers.ts")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully wrote {len(all_careers)} careers into {output_path}")
