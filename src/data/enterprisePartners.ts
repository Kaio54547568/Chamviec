import type { EnterprisePartner } from "../types";

// Transcribed from the supplied confirmations. Dates/slots/prices for visits are not agreed yet.
// Sector labels are editorial categories based on the supplied filenames, not promised activities.
export const ENTERPRISE_PARTNERS: EnterprisePartner[] = [
  {
    id: "partner-aves",
    name: "Công ty Cổ phần Công nghệ và Năng lượng xanh AVES",
    displayName: "AVES",
    sector: "Năng lượng & công nghệ xanh",
    location: "Hà Nội",
    address:
      "Phòng 2404–2405, Vinaconex Diamond Tower, 459C phố Bạch Mai, phường Bạch Mai, Hà Nội",
    confirmationDate: "2026-10-26",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "AVES -Công ty năng lượng và công nghệ xanh.pdf",
    sourceSha256:
      "5cb4821e71d41ecaaa8903cea759918b1d89ed2e2f925b3ec4d48742e7c971ae",
  },
  {
    id: "partner-eie-education",
    name: "Công ty TNHH EIE Education",
    displayName: "EIE Education",
    sector: "Giáo dục",
    location: "Hà Nội",
    address: "70, ngõ 1194 Đường Láng, phường Láng, Hà Nội",
    confirmationDate: "2026-10-10",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "CÔNG TY TNHH EIE EDUCATION - giáo dục.pdf",
    sourceSha256:
      "27256912a735b91225b4f74fbeb2ad8f8578640843652941079933a26404ccf9",
  },
  {
    id: "partner-interits",
    name: "Công ty Cổ phần Giải pháp CNTT Quốc tế",
    displayName: "Giải pháp CNTT Quốc tế (INTERITS)",
    sector: "Công nghệ thông tin",
    location: "Hà Nội",
    address: "Tầng 3, tòa N03-T1 Ngoại Giao Đoàn, phường Xuân Đỉnh, Hà Nội",
    confirmationDate: "2026-10-10",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "CTY giải pháp CNTT Quốc tế.pdf",
    sourceSha256:
      "9639528459244365b75ce7febbbb91fd6707673300548e1ecf4a5db71b50aed5",
  },
  {
    id: "partner-thang-nguyen",
    name: "Công ty TNHH Đầu tư và Phát triển Thắng Nguyên",
    displayName: "Thắng Nguyên",
    sector: "Dịch vụ & phát triển nhân lực",
    location: "Phú Thọ",
    address: "Thôn 25 Hoàng Xá, xã Tu Vũ, tỉnh Phú Thọ",
    confirmationDate: "2026-10-11",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Cty xuất khẩu lao động Thắng- KCN Hoàng Xá.jpg",
    sourceSha256:
      "af29b59b1bbe73c799de08ac341ef6829738e6bd52970e92a7e0be26da8798b5",
  },
  {
    id: "partner-chatbot-vietnam",
    name: "Công ty Cổ phần Công nghệ Chatbot Việt Nam",
    displayName: "Chatbot Việt Nam",
    sector: "Phát triển phần mềm",
    location: "Hà Nội",
    address:
      "Biệt thự BT1, ô AIV, khu đô thị mới Hạ Đình, phường Thanh Liệt, Hà Nội",
    confirmationDate: "2026-10-26",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Công ty Chatbot- Phát triển phần mềm.pdf",
    sourceSha256:
      "d1452d9a82c2adc18592c983dd8a28a291317eca3bfa2fa20f05d3c00a2d4668",
  },
  {
    id: "partner-lita-foods",
    name: "Công ty Cổ phần LITA Foods",
    displayName: "LITA Foods",
    sector: "Chế biến thực phẩm",
    location: "Phú Thọ",
    address: "Tổ dân phố Phố Vàng, xã Thanh Sơn, tỉnh Phú Thọ",
    confirmationDate: "2026-10-08",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Công ty Lifa Foods- Hoa Thịt Chua.jpg",
    sourceSha256:
      "156d60d13760fed1c1c32cbb89683450b49c26fd40ef32d040e5d4351190b453",
  },
  {
    id: "partner-misa-services",
    name: "Công ty TNHH Dịch vụ MISA",
    displayName: "Dịch vụ MISA",
    sector: "Giáo dục",
    location: "Phú Thọ",
    address: "Thôn Đồng Chung, xã Thượng Long, tỉnh Phú Thọ",
    confirmationDate: "2026-10-19",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Công ty Misa- Giáo dục.pdf",
    sourceSha256:
      "f33f34118809645d180eda1df7ef374d2e21b472368c23fb867a0c8e2e33b9c4",
  },
  {
    id: "partner-anh-vu-thinh-phat",
    name: "Công ty TNHH Anh Vũ Thịnh Phát",
    displayName: "Anh Vũ Thịnh Phát",
    sector: "Nông nghiệp",
    location: "Phú Thọ",
    address: "Thôn Pheo, xã Hương Cần, tỉnh Phú Thọ",
    confirmationDate: "2026-10-11",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Công ty Tiến Vũ Thịnh Phát- Nông nghiệp.jpg",
    sourceSha256:
      "fa3ed39a10f392264b9880b576092753fa76ec7e87ac0952b0d28673cb5144cc",
  },
  {
    id: "partner-bot-ban-hang",
    name: "Công ty Cổ phần Công nghệ Bot Bán Hàng",
    displayName: "Bot Bán Hàng",
    sector: "Công nghệ & kinh doanh",
    location: "TP. Hồ Chí Minh",
    address: "Số 3, đường 3/2, phường Vườn Lài, TP. Hồ Chí Minh",
    confirmationDate: "2026-10-26",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Cổ phần công nghệ Bot bán hàng-  Sale công nghệ.pdf",
    sourceSha256:
      "edffd166e64e26f43e7ad63931f59cecfbbe5f301af63d8f4c790d93d61160eb",
  },
  {
    id: "partner-ufo-foodmap",
    name: "Công ty TNHH Công nghệ và Thương mại UFO",
    displayName: "UFO / FoodMap",
    sector: "Công nghệ & thương mại",
    location: "TP. Hồ Chí Minh",
    address:
      "Tầng 1, tòa nhà số 109–111 đường 08, khu dân cư Trung Sơn, xã Bình Hưng, TP. Hồ Chí Minh",
    confirmationDate: "2026-10-08",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Foodmaps- HCM.pdf",
    sourceSha256:
      "a6a6380863013b5a4d99217dfb56e612c6ca9a596dcae72c1d9be165a2ae9149",
  },
  {
    id: "partner-doan-manh-trung",
    name: "Hộ kinh doanh Đoàn Mạnh Trung",
    displayName: "Hộ kinh doanh Đoàn Mạnh Trung (DMT)",
    sector: "Thực phẩm & đồ uống",
    location: "Phú Thọ",
    address: "Khu Trung Ngãi, Yên Lập, Phú Thọ",
    confirmationDate: "2026-11-02",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "HKD DMT - Kinh doanh thực phẩm và đồ uống.jpg",
    sourceSha256:
      "84365a4c120c7670d11686bcb296115a51d0065efd72ff961eda742477a06d6d",
  },
  {
    id: "partner-thien-nong",
    name: "HTX Thương mại – Dịch vụ Thiên Nông",
    displayName: "HTX Thiên Nông",
    sector: "Nông nghiệp",
    location: "Đồng Nai",
    address: "Xã Phú Nghĩa, Đồng Nai",
    confirmationDate: "2026-11-02",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "HTX Thiên Nông- Đồng Nai.jpg",
    sourceSha256:
      "80c1a00cfac50035370306cf50e111872c3dc369150a2a618537d1ccf4434f5e",
  },
  {
    id: "partner-kojachi-vietnam",
    name: "Công ty TNHH Thương mại và Dịch vụ Kojachi Việt Nam",
    displayName: "Kojachi Việt Nam",
    sector: "Thương mại & dịch vụ",
    location: "Hà Nội",
    address:
      "Số 34C/62 Phùng Khoang, phường Trung Văn, quận Nam Từ Liêm, Hà Nội",
    confirmationDate: "2026-11-02",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Kojachi Vietnam-Thương mại và dịch vụ.jpg",
    sourceSha256:
      "85cd123ee141597cb471baa789c625317ff7b628e07b3d475704811e825d258e",
  },
  {
    id: "partner-mt-shounan",
    name: "Công ty TNHH Thương mại và Dịch vụ MT Shounan",
    displayName: "MT Shounan",
    sector: "Công nghiệp & cơ khí",
    location: "Hà Nội",
    address:
      "Tầng 6, tòa nhà Việt Á, số 9 phố Duy Tân, phường Cầu Giấy, Hà Nội",
    confirmationDate: "2026-10-17",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Shounan Group- Công nghiệp cơ khí.pdf",
    sourceSha256:
      "7e99c79e54ebe3e6cb0d647f4893df0b7e040260582504a0da569f7fd0ca62b8",
  },
  {
    id: "partner-nam-duong-phu-tho",
    name: "Công ty Cổ phần Xây dựng Nam Dương Phú Thọ",
    displayName: "Xây dựng Nam Dương Phú Thọ",
    sector: "Xây dựng",
    location: "Phú Thọ",
    address: "Thôn Đồng Thịnh, xã Yên Lập, tỉnh Phú Thọ",
    confirmationDate: "2026-10-15",
    confirmationStatus: "AGREED_IN_PRINCIPLE",
    sourceDocument: "Tập đoàn Nam Hải, công ty Nam Dương- Xây dựng.pdf",
    sourceSha256:
      "43cb9452a0ba1855545033fb842a94cc4f4f89fe234769f127a5fcc90b6c85a1",
  },
];
