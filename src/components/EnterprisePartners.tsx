import { useState } from "react";
import { Briefcase, MapPin, Search, ShieldCheck } from "lucide-react";
import { ENTERPRISE_PARTNERS } from "../data/enterprisePartners";
import { useLanguage } from "../i18n/LanguageContext";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();

const sectorLabels: Record<string, string> = {
  "Năng lượng & công nghệ xanh": "Energy & green technology",
  "Giáo dục": "Education",
  "Công nghệ thông tin": "Information technology",
  "Dịch vụ & phát triển nhân lực": "Services & workforce development",
  "Phát triển phần mềm": "Software development",
  "Chế biến thực phẩm": "Food processing",
  "Nông nghiệp": "Agriculture",
  "Công nghệ & kinh doanh": "Technology & business",
  "Công nghệ & thương mại": "Technology & commerce",
  "Thực phẩm & đồ uống": "Food & beverages",
  "Thương mại & dịch vụ": "Commerce & services",
  "Công nghiệp & cơ khí": "Industry & mechanical engineering",
  "Xây dựng": "Construction",
};

export function EnterprisePartners() {
  const { language } = useLanguage();
  const vi = language === "vi";
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [limit, setLimit] = useState(6);
  const locations = [
    ...new Set(ENTERPRISE_PARTNERS.map((partner) => partner.location)),
  ].sort();
  const matches = ENTERPRISE_PARTNERS.filter(
    (partner) =>
      (location === "all" || partner.location === location) &&
      normalize(
        `${partner.name} ${partner.displayName} ${partner.sector} ${sectorLabels[partner.sector] || ""} ${partner.location}`,
      ).includes(normalize(query.trim())),
  );
  return (
    <section
      className="enterprise-partners"
      aria-label={
        vi ? "Đơn vị đã đồng ý hỗ trợ" : "Participating organizations"
      }
    >
      <div className="enterprise-partners-intro">
        <span className="section-eyebrow">
          {vi
            ? "KẾT NỐI VỚI MÔI TRƯỜNG LÀM VIỆC"
            : "CONNECT WITH REAL WORKPLACES"}
        </span>
        <h2>
          {vi
            ? `${ENTERPRISE_PARTNERS.length} đơn vị đã đồng ý hỗ trợ`
            : `${ENTERPRISE_PARTNERS.length} organizations have agreed to support the project`}
        </h2>
        <p>
          {vi
            ? "Các đơn vị đã có giấy xác nhận đồng ý phối hợp về mặt chủ trương. Thời gian, số lượng học sinh, hình thức trải nghiệm và yêu cầu an toàn sẽ được thống nhất trước khi tổ chức."
            : "These organizations have confirmed their agreement in principle. Visit dates, group sizes, formats and safety requirements will be agreed before each activity."}
        </p>
      </div>
      <div className="enterprise-partner-filters">
        <label>
          <span>
            {vi ? "Tìm đơn vị hoặc lĩnh vực" : "Find an organization or field"}
          </span>
          <div>
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLimit(6);
              }}
              placeholder={
                vi ? "Tên doanh nghiệp, lĩnh vực…" : "Organization, field…"
              }
            />
          </div>
        </label>
        <label>
          <span>{vi ? "Địa phương" : "Location"}</span>
          <select
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              setLimit(6);
            }}
          >
            <option value="all">
              {vi ? "Tất cả địa phương" : "All locations"}
            </option>
            {locations.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="enterprise-result-count" role="status">
        {vi
          ? `Hiển thị ${Math.min(limit, matches.length)} / ${matches.length} đơn vị`
          : `Showing ${Math.min(limit, matches.length)} of ${matches.length} organizations`}
      </p>
      <div className="enterprise-partner-grid">
        {matches.slice(0, limit).map((partner) => (
          <article key={partner.id} className="enterprise-partner-card">
            <div className="enterprise-partner-card-top">
              <span className="enterprise-partner-icon">
                <Briefcase size={22} />
              </span>
              <span>
                <ShieldCheck size={14} />
                {vi ? "Đã có giấy xác nhận" : "Confirmation received"}
              </span>
            </div>
            <h3>{partner.displayName}</h3>
            <p className="enterprise-partner-legal-name">{partner.name}</p>
            <p className="enterprise-partner-location">
              <MapPin size={14} />
              {partner.location}
            </p>
            <span className="enterprise-partner-sector">
              {vi
                ? partner.sector
                : sectorLabels[partner.sector] || partner.sector}
            </span>
            <details>
              <summary>
                {vi
                  ? "Thông tin & phạm vi hỗ trợ"
                  : "Details & scope of support"}
              </summary>
              <dl>
                <dt>
                  {vi
                    ? "Địa chỉ theo giấy xác nhận"
                    : "Address on confirmation"}
                </dt>
                <dd>{partner.address}</dd>
                <dt>{vi ? "Ngày xác nhận" : "Confirmation date"}</dt>
                <dd>
                  {new Intl.DateTimeFormat(vi ? "vi-VN" : "en-GB", {
                    dateStyle: "long",
                    timeZone: "UTC",
                  }).format(new Date(`${partner.confirmationDate}T00:00:00Z`))}
                </dd>
                <dt>{vi ? "Phạm vi đồng ý" : "Scope of agreement"}</dt>
                <dd>
                  {vi
                    ? "Tạo điều kiện tham quan, tìm hiểu môi trường làm việc, lắng nghe chia sẻ nghề nghiệp và trải nghiệm phù hợp với điều kiện của đơn vị."
                    : "Facilitating workplace visits, career conversations and practical experiences appropriate to the organization’s conditions."}
                </dd>
              </dl>
              <p className="enterprise-partner-pending">
                {vi
                  ? "Lịch, số chỗ và chi phí trải nghiệm chưa công bố."
                  : "Visit dates, places and costs have not been announced."}
              </p>
            </details>
          </article>
        ))}
      </div>
      {!matches.length && (
        <p className="disclosure-panel">
          {vi
            ? "Chưa tìm thấy đơn vị phù hợp. Thử tên hoặc địa phương khác."
            : "No matching organizations. Try a different name or location."}
        </p>
      )}
      {limit < matches.length && (
        <button
          className="show-more-results"
          onClick={() => setLimit((value) => value + 6)}
        >
          {vi ? "Xem thêm đơn vị" : "Show more organizations"}
        </button>
      )}
    </section>
  );
}
