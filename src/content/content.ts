import type { Locale } from "@/config/site";

export type Service = {
  slug: string;
  title: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  description: Record<Locale, string>;
  items: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    slug: "iphone-repair",
    title: { en: "iPhone repair", th: "ซ่อม iPhone" },
    eyebrow: { en: "Our main service", th: "บริการหลักของร้าน" },
    description: {
      en: "From screens and batteries to liquid damage and board-level faults. We explain the options before work begins.",
      th: "ตั้งแต่จอ แบตเตอรี่ เครื่องตกน้ำ ไปจนถึงอาการระดับเมนบอร์ด อธิบายตัวเลือกก่อนเริ่มงานทุกครั้ง"
    },
    items: {
      en: ["Screen replacement", "Battery replacement", "No power & charging", "Camera, Face ID & audio", "Liquid damage", "Logic board repair"],
      th: ["เปลี่ยนหน้าจอ", "เปลี่ยนแบตเตอรี่", "เปิดไม่ติดและชาร์จไม่เข้า", "กล้อง Face ID และระบบเสียง", "เครื่องตกน้ำ", "ซ่อมเมนบอร์ด"]
    }
  },
  {
    slug: "ipad-repair",
    title: { en: "iPad repair", th: "ซ่อม iPad" },
    eyebrow: { en: "Complete assessment", th: "ตรวจครบตามอาการ" },
    description: {
      en: "Screen, battery, charging port, liquid damage and logic board service, with priority for iPad 7th generation and newer.",
      th: "งานจอ แบตเตอรี่ พอร์ตชาร์จ เครื่องตกน้ำ และเมนบอร์ด เน้น iPad รุ่นที่ 7 ขึ้นไป รุ่นเก่ากว่าประเมินเป็นรายกรณี"
    },
    items: {
      en: ["Display & touch", "Battery", "Charging port", "Liquid damage", "Board-level faults"],
      th: ["จอและทัชสกรีน", "แบตเตอรี่", "พอร์ตชาร์จ", "เครื่องตกน้ำ", "งานระดับบอร์ด"]
    }
  },
  {
    slug: "apple-device-repair",
    title: { en: "Other Apple devices", th: "อุปกรณ์ Apple อื่น" },
    eyebrow: { en: "Case-by-case support", th: "ประเมินเป็นรายงาน" },
    description: {
      en: "MacBook, iMac, Apple Watch and AirPods enquiries are assessed by model, symptom and parts availability.",
      th: "MacBook, iMac, Apple Watch และ AirPods ประเมินตามรุ่น อาการ และความพร้อมของอะไหล่"
    },
    items: {
      en: ["MacBook & iMac", "Apple Watch", "AirPods", "Diagnostics", "Microsoldering"],
      th: ["MacBook และ iMac", "Apple Watch", "AirPods", "ตรวจวิเคราะห์", "งานไมโครโซลเดอริง"]
    }
  }
];

export const faqs = {
  en: [
    ["Do I need an appointment?", "No. Walk-ins are welcome Sunday–Friday, 11:00–20:00. Message first if you want to check the queue or parts availability."],
    ["How long does a screen or battery repair take?", "Alternative parts are often around 1 hour; genuine parts are often around 2–3 hours. Actual timing depends on model, condition, queue and stock."],
    ["What should I do after dropping an iPhone in water?", "Switch it off if safe, do not charge it, and contact us promptly. We offer cleaning/drying only or a full cleaning and diagnostic assessment."],
    ["Can I send a phone by Grab?", "Yes. You arrange and pay for the delivery yourself. Message us and wait for confirmation before sending."],
    ["Do you use genuine parts?", "Where available, we can offer genuine new or genuine pulled parts, alongside clearly labelled OEM and aftermarket options. We never describe every option as Apple-supplied."],
    ["Is there a fixed warranty?", "No. Coverage depends on the part, model and work performed. We explain the specific terms in chat before repair. Liquid, impact and later user damage may be excluded."],
    ["Is my data safe during repair?", "We only request access needed for testing. Back up your device where possible and discuss passcode handling with us before service."],
    ["Are you Apple Authorized?", "No. TK Mobile Service is an independent repair business and is not an Apple Store or Apple Authorized Service Provider."]
  ],
  th: [
    ["ต้องจองก่อนหรือไม่", "ไม่ต้องจอง รับ Walk-in วันอาทิตย์–ศุกร์ เวลา 11:00–20:00 น. แนะนำให้ทักแชตก่อนเพื่อตรวจคิวและอะไหล่"],
    ["เปลี่ยนจอหรือแบตเตอรี่ใช้เวลานานเท่าไร", "อะไหล่ทางเลือกโดยทั่วไปประมาณ 1 ชั่วโมง ส่วนอะไหล่แท้ประมาณ 2–3 ชั่วโมง เวลาจริงขึ้นอยู่กับรุ่น สภาพเครื่อง คิว และอะไหล่"],
    ["iPhone ตกน้ำควรทำอย่างไร", "ปิดเครื่องเมื่อทำได้อย่างปลอดภัย ห้ามชาร์จ และติดต่อร้านโดยเร็ว มีทั้งบริการทำความสะอาด/ทำให้แห้ง และแบบตรวจวิเคราะห์เต็มรูปแบบ"],
    ["ส่งเครื่องผ่าน Grab ได้ไหม", "ได้ ลูกค้าเป็นผู้เรียกและชำระเอง กรุณาทักแชตและรอร้านยืนยันก่อนส่ง"],
    ["มีอะไหล่แท้หรือไม่", "มีตัวเลือกอะไหล่แท้ใหม่หรือแท้แกะเมื่อหาได้ พร้อม OEM และ Aftermarket ที่ระบุชัดเจน ร้านไม่เรียกอะไหล่ทุกชนิดว่าเป็นของจาก Apple"],
    ["รับประกันกี่เดือน", "ระยะและเงื่อนไขขึ้นอยู่กับอะไหล่ รุ่น และประเภทงาน ร้านจะแจ้งผ่านแชตก่อนซ่อม งานตกน้ำ กระแทก หรือความเสียหายภายหลังอาจไม่อยู่ในการรับประกัน"],
    ["ข้อมูลในเครื่องปลอดภัยหรือไม่", "ร้านขอเข้าถึงเฉพาะที่จำเป็นต่อการทดสอบ แนะนำสำรองข้อมูลและตกลงวิธีจัดการรหัสผ่านก่อนรับบริการ"],
    ["เป็นศูนย์ Apple หรือไม่", "ไม่ใช่ TK Mobile Service เป็นร้านซ่อมอิสระ ไม่ใช่ Apple Store และไม่ใช่ Apple Authorized Service Provider"]
  ]
} satisfies Record<Locale, [string, string][]>;
