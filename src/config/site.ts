import { z } from "zod";

const SiteSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  url: z.url(),
  phoneDisplay: z.string(),
  phoneE164: z.string(),
  lineId: z.string(),
  address: z.object({ en: z.string(), th: z.string() }),
  social: z.object({
    line: z.url(),
    whatsapp: z.url(),
    facebook: z.url(),
    messenger: z.url(),
    x: z.url(),
    maps: z.url()
  })
});

export const site = SiteSchema.parse({
  name: "TK Mobile Service – Fix iPhone Patong Phuket",
  shortName: "TK Mobile Service",
  url: "https://tkmobileservice.com",
  phoneDisplay: "095-861-4141",
  phoneE164: "+66958614141",
  lineId: "@tkmobileservice",
  address: {
    en: "67/25 Phrabaramee Road, Pa Tong, Kathu District, Phuket 83150, Thailand",
    th: "67/25 ถนนพระบารมี ตำบลป่าตอง อำเภอกะทู้ จังหวัดภูเก็ต 83150"
  },
  social: {
    line: "https://line.me/R/ti/p/@tkmobileservice",
    whatsapp: "https://wa.me/66958614141",
    facebook: "https://www.facebook.com/tkmobileservice.thai",
    messenger: "https://m.me/tkmobileservice.thai",
    x: "https://x.com/tkmobileservice",
    maps: "https://www.google.com/maps/search/?api=1&query=TK+Mobile+Service+Patong+Phuket"
  }
} satisfies z.input<typeof SiteSchema>);

export const openingHours = [
  { day: "Sunday", opens: "11:00", closes: "20:00" },
  { day: "Monday", opens: "11:00", closes: "20:00" },
  { day: "Tuesday", opens: "11:00", closes: "20:00" },
  { day: "Wednesday", opens: "11:00", closes: "20:00" },
  { day: "Thursday", opens: "11:00", closes: "20:00" },
  { day: "Friday", opens: "11:00", closes: "20:00" }
] as const;

export type Locale = "en" | "th";
export const locales: Locale[] = ["en", "th"];

export function chatLink(locale: Locale) {
  const text =
    locale === "en"
      ? "Hi, I need help with my [device model]. The problem is [symptom]. I am currently in [area]."
      : "ต้องการสอบถามงานซ่อม รุ่นเครื่อง [รุ่น] อาการ [อาการ] ตอนนี้อยู่ที่ [พื้นที่]";
  const base = locale === "en" ? site.social.whatsapp : site.social.line;
  return locale === "en"
    ? `${base}?text=${encodeURIComponent(text)}`
    : base;
}
