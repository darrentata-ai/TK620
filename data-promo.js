// ============================================================
// TK620 新豐原旗艦店 專屬檔期 — 72小時激安限購（10/24–10/26）
// 本檔僅供 TK620 使用；TK226 維持原本 10/19–11/5 一般檔期資料。
// 本次只針對海報上明確列出的品項加碼折扣，其餘品項維持原本
// 10/19–11/5 檔期的定價／促銷價不變。
// 欄位說明同一般版本：
//   name   商品名稱（不含型號/顏色）
//   spec   規格（容量 / CPU / RAM，不顯示核心數）
//   price  定價（PDF 會員價）
//   sale   促銷後價格（沒有促銷則省略）
//   note   折扣說明，例如「現折920」
//   gifts  第二頁顯示的贈品/加碼內容（陣列，可省略）
// ============================================================
const PAGE_META = {
  title: "72小時激安限購",
  eyebrow: "72小時激安限購 · 2026/10/24–10/26",
  heading: "iPhone / Mac / iPad / Apple Watch 限時加碼現折",
  desc: "限定 AppleShop 72小時加碼優惠，點選價格卡看完整折扣詳情。Mac／iPad／Apple Watch 可併用大專院校教育價，詳洽門市專員；客製機不適用以上優惠活動，實際庫存、顏色及價格均以門市公告為準。",
  meta: [["舊換新回收", "最高加碼 20% 折抵"], ["分期", "加購延長保固享 12 期零利率"]],
  accent: "amber",
};

const PRODUCTS = [
  {
    category: "iPhone",
    items: [
      { name: "iPhone 18 Pro", spec: "256GB", price: 44900, gifts: ["新機上市", "消費滿萬元贈 200 元配件金"] },
      { name: "iPhone 18 Pro", spec: "512GB", price: 51900, gifts: ["新機上市", "消費滿萬元贈 200 元配件金"] },
      { name: "iPhone 18 Pro Max", spec: "256GB", price: 49900, gifts: ["新機上市", "消費滿萬元贈 200 元配件金"] },
      { name: "iPhone 18 Pro Max", spec: "512GB", price: 56900, gifts: ["新機上市", "消費滿萬元贈 200 元配件金"] },
      { name: "iPhone 17e", spec: "256GB", price: 25900, sale: 24864, note: "現折 1,036" },
      { name: "iPhone 17e", spec: "512GB", price: 32900, sale: 31584, note: "現折 1,316" },
      { name: "iPhone 17", spec: "256GB", price: 32900, sale: 31584, note: "72小時限定現折 1,316", gifts: ["加贈市價 990 元保護貼"] },
      { name: "iPhone 17", spec: "512GB", price: 39900, sale: 38304, note: "72小時限定現折 1,596", gifts: ["加贈市價 990 元保護貼"] },
      { name: "iPhone 17 Pro", spec: "256GB", price: 39900, sale: 38304, note: "72小時限定現折 1,596", gifts: ["現有庫存售完為止"] },
      { name: "iPhone 17 Pro Max", spec: "256GB", price: 44900, sale: 43553, note: "現折 1,347", gifts: ["現有庫存售完為止"] },
      { name: "iPhone 17 Pro Max", spec: "512GB", price: 51900, sale: 50343, note: "現折 1,557", gifts: ["現有庫存售完為止"] },
    ],
  },
  {
    category: "Mac",
    items: [
      { name: "MacBook Air 13″", spec: "M5・16GB・512GB", price: 42900, sale: 41184, note: "72小時限定現折 1,716", gifts: ["消費滿萬元贈 400 元配件金"] },
      { name: "MacBook Air 15″", spec: "M5・16GB・512GB", price: 49900, sale: 47904, note: "72小時限定現折 1,996", gifts: ["消費滿萬元贈 500 元配件金"] },
      { name: "MacBook Neo 13″", spec: "A18 Pro・8GB・256GB", price: 22900, sale: 22155, note: "現折 745", gifts: ["加贈市價 1,280 元保護貼"] },
      { name: "MacBook Neo 13″", spec: "A18 Pro・8GB・512GB", price: 25900, sale: 25005, note: "現折 895", gifts: ["加贈市價 1,280 元保護貼"] },
      { name: "iMac 24″", spec: "M4・8CPU・8GPU・16GB・256GB", price: 49900, sale: 46906, note: "現折 2,994" },
      { name: "Mac mini", spec: "M6・12CPU・12GPU・16GB・256GB", price: 29900, gifts: ["消費滿萬元贈 500 元配件金"] },
      { name: "Mac mini", spec: "M6・12CPU・12GPU・16GB・512GB", price: 36900, gifts: ["消費滿萬元贈 500 元配件金"] },
      { name: "Mac mini", spec: "M6・12CPU・12GPU・24GB・512GB", price: 43900, gifts: ["消費滿萬元贈 500 元配件金"] },
      { name: "Mac mini", spec: "M5 Pro・15CPU・16GPU・24GB・512GB", price: 59900, gifts: ["消費滿萬元贈 500 元配件金"] },
      { name: "MacBook Pro 14″", spec: "M5・16GB・1TB", price: 64900, sale: 59708, note: "72小時限定現折 5,192" },
      { name: "MacBook Pro 14″", spec: "M5・24GB・1TB", price: 71900, sale: 66148, note: "72小時限定現折 5,752" },
      { name: "MacBook Pro 14″", spec: "M5・32GB・1TB", price: 78900, sale: 72588, note: "72小時限定現折 6,312" },
      { name: "MacBook Pro 14″", spec: "M5 Pro・24GB・1TB", price: 84900, sale: 78108, note: "72小時限定現折 6,792" },
      { name: "MacBook Pro 16″", spec: "M5 Pro・24GB・1TB", price: 99900, sale: 91908, note: "72小時限定現折 7,992" },
      { name: "MacBook Pro 16″", spec: "M5 Pro・48GB・1TB", price: 120900, sale: 111228, note: "72小時限定現折 9,672" },
    ],
  },
  {
    category: "iPad",
    items: [
      { name: "iPad", spec: "128GB・Wi-Fi", price: 14900, sale: 13708, note: "72小時限定現折 1,192" },
      { name: "iPad", spec: "256GB・Wi-Fi", price: 18400, sale: 16928, note: "72小時限定現折 1,472" },
      { name: "iPad", spec: "512GB・Wi-Fi", price: 25400, sale: 23368, note: "72小時限定現折 2,032" },
      { name: "iPad Air 11″", spec: "M4・128GB・Wi-Fi", price: 24900, sale: 22908, note: "72小時限定現折 1,992", gifts: ["加贈市價 980 元保護殼"] },
      { name: "iPad Air 11″", spec: "M4・256GB・Wi-Fi", price: 28400, sale: 26128, note: "72小時限定現折 2,272", gifts: ["加贈市價 980 元保護殼"] },
      { name: "iPad Air 11″", spec: "M4・512GB・Wi-Fi", price: 35400, sale: 32568, note: "72小時限定現折 2,832", gifts: ["加贈市價 980 元保護殼"] },
      { name: "iPad Air 13″", spec: "M4・128GB・Wi-Fi", price: 31900, sale: 29348, note: "72小時限定現折 2,552", gifts: ["加贈市價 1,190 元充電器"] },
      { name: "iPad Air 13″", spec: "M4・256GB・Wi-Fi", price: 35400, sale: 32568, note: "72小時限定現折 2,832", gifts: ["加贈市價 1,190 元充電器"] },
      { name: "iPad Air 13″", spec: "M4・512GB・Wi-Fi", price: 42400, sale: 39008, note: "72小時限定現折 3,392", gifts: ["加贈市價 1,190 元充電器"] },
      { name: "iPad Pro 11″", spec: "M5・256GB・Wi-Fi", price: 39900, sale: 36309, note: "72小時限定現折 3,591", gifts: ["加贈市價 800 元保護貼"] },
      { name: "iPad Pro 11″", spec: "M5・512GB・Wi-Fi", price: 46900, sale: 42679, note: "72小時限定現折 4,221", gifts: ["加贈市價 800 元保護貼"] },
      { name: "iPad Pro 13″", spec: "M5・256GB・Wi-Fi", price: 50900, sale: 46319, note: "72小時限定現折 4,581" },
      { name: "iPad Pro 13″", spec: "M5・512GB・Wi-Fi", price: 57900, sale: 52689, note: "72小時限定現折 5,211" },
    ],
  },
  {
    category: "Apple Watch",
    items: [
      { name: "Apple Watch SE 3", spec: "40mm・GPS", price: 7900, gifts: ["贈 300 元配件金"] },
      { name: "Apple Watch SE 3", spec: "44mm・GPS", price: 8900, gifts: ["贈 300 元配件金"] },
      { name: "Apple Watch S12", spec: "42mm・GPS", price: 13900, sale: 13483, note: "72小時限定現折 417", gifts: ["消費滿萬元贈 300 元配件金"] },
      { name: "Apple Watch S12", spec: "46mm・GPS", price: 15400, sale: 14938, note: "72小時限定現折 462", gifts: ["消費滿萬元贈 300 元配件金"] },
      { name: "Apple Watch Ultra 4", spec: "49mm・鈦金屬", price: 27900, sale: 27063, note: "72小時限定現折 837", gifts: ["消費滿萬元贈 300 元配件金"] },
    ],
  },
  {
    category: "AirPods",
    items: [
      { name: "AirPods 5", spec: "標準款", price: 4490, sale: 4290, note: "現折 200" },
      { name: "AirPods 5", spec: "無線充電盒", price: 5190, sale: 4990, note: "現折 200" },
      { name: "AirPods Pro 3", spec: "主動式降噪", price: 7490, sale: 6590, note: "72小時限定現折 900" },
    ],
  },
];
