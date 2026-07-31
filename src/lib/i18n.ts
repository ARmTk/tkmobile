import type { Locale } from "@/config/site";

export const copy = {
  en: {
    nav: { home: "Home", services: "Services", liquid: "Liquid damage", location: "Visit us", about: "About" },
    chat: "Chat for an assessment",
    call: "Call",
    directions: "Directions",
    open: "Open Sun–Fri · 11:00–20:00",
    closed: "Closed Saturday"
  },
  th: {
    nav: { home: "หน้าแรก", services: "บริการ", liquid: "เครื่องตกน้ำ", location: "หน้าร้าน", about: "เกี่ยวกับเรา" },
    chat: "แชตประเมินอาการ",
    call: "โทร",
    directions: "นำทาง",
    open: "เปิด อา.–ศ. · 11:00–20:00 น.",
    closed: "หยุดวันเสาร์"
  }
} satisfies Record<Locale, unknown>;

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "th" : "en";
}

export function localPath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path.replace(/^\/|\/$/g, "")}` : ""}/`;
}
