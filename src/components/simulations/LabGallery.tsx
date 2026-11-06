import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import type { LabKind } from "./labStudio";
import "./labs.css";

const labs: {
  id: LabKind;
  title: [string, string];
  field: [string, string];
  description: [string, string];
  accent: string;
  duration: string;
}[] = [
  {
    id: "semiconductor",
    title: ["Bên trong một vi mạch", "Inside a microchip"],
    field: ["Kỹ thuật bán dẫn", "Semiconductor engineering"],
    description: [
      "Từ phiến silicon đến chip hoàn chỉnh. Căn chỉnh chân tiếp xúc, đặt chip vào socket và kiểm tra bằng đầu dò.",
      "Follow silicon from wafer to packaged chip. Align contact pins, seat the chip and run probe diagnostics.",
    ],
    accent: "#7dd8d2",
    duration: "10–15",
  },
  {
    id: "automotive",
    title: ["Dưới nắp ca-pô", "Under the hood"],
    field: ["Kỹ thuật ô tô", "Automotive engineering"],
    description: [
      "Đọc dấu hiệu, tìm nguyên nhân. Khám phá khoang máy, kiểm tra linh kiện và khởi động động cơ sau sửa chữa.",
      "Read the symptoms and find the cause. Inspect engine components and test the engine after servicing.",
    ],
    accent: "#99c5e5",
    duration: "10–15",
  },
  {
    id: "architecture",
    title: ["Không gian để sống", "Spaces for living"],
    field: ["Kiến trúc & thiết kế", "Architecture & design"],
    description: [
      "Bố trí một ngôi nhà có ánh sáng và nhịp sống riêng. Thử mặt bằng, nội thất và hướng nắng.",
      "Give a home its own light and rhythm. Explore floor plans, furniture layouts and sunlight.",
    ],
    accent: "#e1bd92",
    duration: "8–12",
  },
  {
    id: "agriculture",
    title: ["Một hệ sinh thái nhỏ", "A small ecosystem"],
    field: ["Nông nghiệp thông minh", "Smart agriculture"],
    description: [
      "Lắng nghe cây qua dữ liệu. Cân bằng ánh sáng, độ ẩm và dinh dưỡng trong nhà kính.",
      "Listen to plants through data. Balance light, moisture and nutrients inside a greenhouse.",
    ],
    accent: "#b7d69f",
    duration: "5–10",
  },
  {
    id: "circuit",
    title: ["Thắp sáng ý tưởng", "Light up an idea"],
    field: ["Điện & điện tử", "Electrical engineering"],
    description: [
      "Theo dấu dòng điện trên bàn thực hành. Đóng mạch, điều chỉnh điện áp và quan sát bóng đèn.",
      "Trace current across a workbench. Close the circuit, vary the voltage and observe the bulb.",
    ],
    accent: "#f1c88e",
    duration: "5–8",
  },
];

export function LabGallery({ onOpen }: { onOpen: (kind: LabKind) => void }) {
  const { language } = useLanguage();
  const i = language === "vi" ? 0 : 1;
  return (
    <section
      className="lab-gallery"
      aria-label={i === 0 ? "Các phòng thực hành 3D" : "3D workspaces"}
    >
      <div className="lab-gallery-heading">
        <div>
          <div className="lab-gallery-kicker">CHẠM STUDIO / 01—05</div>
          <h2>
            {i === 0 ? (
              <>
                Một góc nhìn mới.
                <br />
                Một nghề để thử.
              </>
            ) : (
              <>
                A fresh perspective.
                <br />A career to try.
              </>
            )}
          </h2>
        </div>
        <p>
          {i === 0
            ? "Bước vào không gian làm việc, chạm vào công cụ và khám phá điều khiến bạn tò mò. Chọn một phòng thực hành để bắt đầu."
            : "Step into a workspace, explore the tools and follow your curiosity. Choose a studio to begin."}
        </p>
      </div>
      <div className="lab-gallery-grid">
        {labs.map((lab, index) => (
          <article
            key={lab.id}
            className="lab-card"
            style={{ "--card-accent": lab.accent } as CSSProperties}
          >
            <div className="lab-card-preview">
              <img
                src={`/assets/labs/${lab.id}.webp`}
                alt={lab.title[i]}
                loading="lazy"
              />
              <span className="lab-card-index">STUDIO / 0{index + 1}</span>
            </div>
            <div className="lab-card-body">
              <div className="lab-card-eyebrow">{lab.field[i]}</div>
              <h3>{lab.title[i]}</h3>
              <p>{lab.description[i]}</p>
              <div className="lab-card-bottom">
                <span>
                  {lab.duration}{" "}
                  {i === 0 ? "phút khám phá" : "minutes to explore"}
                </span>
                <button
                  onClick={() => onOpen(lab.id)}
                  aria-label={`${i === 0 ? "Khám phá" : "Explore"} ${lab.title[i]}`}
                >
                  {i === 0 ? "Vào phòng" : "Enter studio"}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
