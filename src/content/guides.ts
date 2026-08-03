import type { Locale } from "@/config/site";

type Localized = Record<Locale, string>;
type GuideSection = { title: Localized; paragraphs: Record<Locale, string[]>; bullets?: Record<Locale, string[]> };

export type Guide = {
  slug: string;
  published: string;
  category: Localized;
  title: Localized;
  description: Localized;
  excerpt: Localized;
  image: string;
  imageAlt: Localized;
  serviceSlug: string;
  serviceLabel: Localized;
  lead: Localized;
  sections: GuideSection[];
  faq: Record<Locale, [string, string][]>;
};

export const guides: Guide[] = [
  {
    slug: "iphone-dropped-in-seawater-phuket",
    published: "2026-08-03",
    category: { en: "LIQUID DAMAGE", th: "เครื่องตกน้ำ" },
    title: { en: "iPhone dropped in seawater in Phuket: what to do now", th: "iPhone ตกน้ำทะเลในภูเก็ต: ควรทำอะไรทันที" },
    description: { en: "What to do when an iPhone falls into seawater or a pool in Phuket: reduce power risk, avoid common mistakes and arrange an assessment.", th: "iPhone ตกน้ำทะเลหรือตกสระในภูเก็ตควรทำอะไร ลดความเสี่ยงจากไฟ หลีกเลี่ยงข้อผิดพลาด และเตรียมข้อมูลก่อนตรวจ" },
    excerpt: { en: "Saltwater can continue corroding circuits even when the phone still works. Start by reducing power-related risk.", th: "น้ำทะเลสามารถกัดกร่อนวงจรต่อเนื่อง แม้เครื่องยังเปิดได้ เริ่มจากลดความเสี่ยงเกี่ยวกับไฟก่อน" },
    image: "/images/repair-liquid-concept-v1.webp",
    imageAlt: { en: "Liquid damage assessment visual concept for an iPhone", th: "ภาพแนวคิดการตรวจ iPhone ที่เสียหายจากของเหลว" },
    serviceSlug: "liquid-damage",
    serviceLabel: { en: "Read the liquid-damage service guide", th: "อ่านแนวทางบริการเครื่องตกน้ำ" },
    lead: { en: "If your iPhone was exposed to seawater, pool water or another liquid, do not keep testing it. Switch it off if safe, do not charge it, and tell the repair shop what happened and when.", th: "หาก iPhone โดนน้ำทะเล น้ำสระ หรือของเหลวอื่น อย่าเปิดทดสอบซ้ำ ปิดเครื่องเมื่อปลอดภัย ห้ามชาร์จ และแจ้งร้านว่าเกิดอะไรขึ้นเมื่อไร" },
    sections: [
      { title: { en: "First steps that reduce risk", th: "สิ่งที่ควรทำทันทีเพื่อลดความเสี่ยง" }, paragraphs: { en: ["Remove it from the liquid, wipe the outside and power it off if the screen still responds safely. Keep the device dry and avoid pressing buttons repeatedly."], th: ["นำเครื่องออกจากของเหลว เช็ดด้านนอก และปิดเครื่องหากยังสั่งงานได้อย่างปลอดภัย เก็บเครื่องให้แห้งและอย่ากดปุ่มทดสอบซ้ำ ๆ"] }, bullets: { en: ["Do not connect a charger or power bank", "Do not use a hair dryer or heat", "Do not rely on rice to remove internal moisture", "Write down the liquid type and time of exposure"], th: ["ห้ามเสียบชาร์จหรือพาวเวอร์แบงก์", "ห้ามใช้ไดร์หรือความร้อน", "อย่าพึ่งข้าวสารเพื่อแก้ความชื้นภายใน", "จดชนิดของเหลวและเวลาที่โดนน้ำ"] } },
      { title: { en: "Why seawater needs prompt attention", th: "ทำไมน้ำทะเลควรรีบตรวจ" }, paragraphs: { en: ["Saltwater can leave conductive residue and corrosion. A phone may appear normal at first, then develop charging, display, battery or board faults later. An assessment cannot promise recovery, but delaying can increase uncertainty."], th: ["น้ำทะเลทิ้งคราบเกลือที่นำไฟฟ้าและทำให้เกิดการกัดกร่อน เครื่องอาจดูปกติในช่วงแรก แต่ภายหลังอาจมีปัญหาชาร์จ จอ แบต หรือเมนบอร์ด การตรวจไม่ใช่คำรับประกันว่าจะกู้ได้ แต่การรอทำให้ความไม่แน่นอนเพิ่มขึ้น"] } },
      { title: { en: "What to send before visiting", th: "ข้อมูลที่ควรส่งก่อนเข้าร้าน" }, paragraphs: { en: ["A short message helps the workshop prepare the right next step. Include the model, whether it is currently on, the liquid type, the time since exposure, and whether important data is the priority."], th: ["ข้อความสั้น ๆ ช่วยให้ร้านเตรียมแนวทางได้ถูกต้อง ส่งรุ่นเครื่อง สถานะว่าเปิดติดหรือไม่ ชนิดของเหลว เวลาที่โดนน้ำ และข้อมูลสำคัญเป็นสิ่งที่ต้องการเน้นหรือไม่"] } }
    ],
    faq: { en: [["Can I charge an iPhone after it gets wet?", "Do not charge it before assessment. Power and moisture can increase the chance of damage."], ["Will my data be safe?", "No one can promise that after liquid exposure. Tell the shop if data is the priority before repair decisions are made."]], th: [["iPhone เปียกน้ำแล้วชาร์จได้ไหม", "ไม่ควรชาร์จก่อนตรวจ เพราะไฟและความชื้นอาจเพิ่มความเสียหาย"], ["ข้อมูลจะปลอดภัยไหม", "ไม่มีใครรับประกันได้หลังเครื่องโดนน้ำ แจ้งร้านหากข้อมูลเป็นสิ่งสำคัญก่อนตัดสินใจซ่อม"]] }
  },
  {
    slug: "iphone-screen-cracked-touch-still-works",
    published: "2026-08-03",
    category: { en: "SCREEN REPAIR", th: "เปลี่ยนจอ" },
    title: { en: "iPhone screen cracked but touch still works: does it need a full display?", th: "จอ iPhone แตกแต่ยังทัชได้: ต้องเปลี่ยนทั้งจอไหม" },
    description: { en: "A practical guide to a cracked iPhone screen that still displays and responds to touch: symptoms to check and information to send before repair in Phuket.", th: "คู่มือ iPhone จอแตกแต่ภาพและทัชยังทำงาน: อาการที่ควรเช็ก และข้อมูลที่ควรส่งก่อนซ่อมในภูเก็ต" },
    excerpt: { en: "Cracks can be surface-only or affect the display beneath. The exact model and symptoms determine the safe repair option.", th: "รอยแตกอาจอยู่แค่ชั้นกระจกหรือกระทบจอด้านใน รุ่นและอาการจริงเป็นตัวกำหนดแนวทางซ่อม" },
    image: "/images/repair-screen-concept-v1.webp",
    imageAlt: { en: "Cracked iPhone screen repair visual concept", th: "ภาพแนวคิดการซ่อมหน้าจอ iPhone แตก" },
    serviceSlug: "iphone-screen-repair",
    serviceLabel: { en: "Compare screen repair options", th: "ดูตัวเลือกเปลี่ยนจอ" },
    lead: { en: "A cracked outer glass does not always mean the entire display has failed. However, black patches, lines, flicker, ghost touch or a lifting display need a closer assessment before choosing a part.", th: "กระจกชั้นนอกแตกไม่ได้แปลว่าจอทั้งชุดเสียเสมอไป แต่หากมีจุดดำ เส้น จอกะพริบ ทัชเอง หรือจอยก ควรตรวจให้ละเอียดก่อนเลือกอะไหล่" },
    sections: [
      { title: { en: "Check these symptoms first", th: "เช็กอาการเหล่านี้ก่อน" }, paragraphs: { en: ["Use the phone only as much as needed to note what still works. Do not press loose glass into place or expose the damaged screen to water."], th: ["ใช้งานเท่าที่จำเป็นเพื่อจดว่าอะไรยังทำงานได้ อย่ากดกระจกที่หลวมให้กลับเข้าที่ และอย่าให้จอที่เสียหายโดนน้ำ"] }, bullets: { en: ["Image is clear or has black patches / lines", "Touch works across the whole display or misses areas", "Brightness flickers or the phone touches by itself", "The display is lifting, hot or separated from the frame"], th: ["ภาพยังปกติหรือมีจุดดำ / เส้น", "ทัชได้ทุกจุดหรือมีบางจุดไม่ตอบสนอง", "จอกะพริบหรือทัชเอง", "จอยก ร้อน หรือแยกออกจากเฟรม"] } },
      { title: { en: "Why the exact model matters", th: "ทำไมต้องรู้รุ่นที่แน่นอน" }, paragraphs: { en: ["iPhone display construction, available part options and related warnings vary by model. The workshop should confirm the model, damage and the desired trade-off between part source, appearance, function and budget before work."], th: ["โครงสร้างจอ iPhone ตัวเลือกอะไหล่ และการแจ้งเตือนที่เกี่ยวข้อง แตกต่างกันตามรุ่น ร้านควรยืนยันรุ่น ความเสียหาย และความต้องการเรื่องแหล่งอะไหล่ ภาพ ฟังก์ชัน และงบก่อนเริ่มงาน"] } },
      { title: { en: "Prepare before repair", th: "เตรียมตัวก่อนซ่อม" }, paragraphs: { en: ["Back up important data if the phone is still stable. Send a photo of the screen, the exact model and any symptoms after the drop. This helps the shop check likely options and current availability before you travel."], th: ["สำรองข้อมูลสำคัญหากเครื่องยังเสถียร ส่งรูปจอ รุ่นที่แน่นอน และอาการหลังตกกระแทกให้ร้าน เพื่อช่วยตรวจตัวเลือกและความพร้อมก่อนเดินทาง"] } }
    ],
    faq: { en: [["Can I keep using a cracked iPhone screen?", "It may work temporarily, but broken glass can worsen, expose the display to moisture and cause cuts. Have it assessed if damage is spreading or touch is unreliable."], ["Will changing the screen erase data?", "A display repair normally does not require erasing data, but a backup is still sensible before any repair."]], th: [["จอ iPhone แตกแล้วยังใช้ต่อได้ไหม", "อาจใช้ได้ชั่วคราว แต่กระจกอาจแตกเพิ่ม รับความชื้น และบาดมือได้ ควรตรวจหากรอยขยายหรือทัชไม่เสถียร"], ["เปลี่ยนจอแล้วข้อมูลหายไหม", "โดยทั่วไปการเปลี่ยนจอไม่ต้องลบข้อมูล แต่ควรสำรองข้อมูลก่อนซ่อมเสมอเมื่อทำได้"]] }
  },
  {
    slug: "iphone-battery-drains-fast-or-swollen",
    published: "2026-08-03",
    category: { en: "BATTERY", th: "แบตเตอรี่" },
    title: { en: "iPhone battery drains fast or looks swollen: when to stop using it", th: "แบต iPhone หมดเร็วหรือบวม: เมื่อไรควรหยุดใช้งาน" },
    description: { en: "Signs an iPhone battery may need assessment in Phuket: fast drain, unexpected shutdown, heat, swelling and battery service messages.", th: "อาการแบต iPhone ที่ควรตรวจในภูเก็ต: หมดเร็ว ดับเอง ร้อน บวม และขึ้นแจ้งเตือนแบตเตอรี่" },
    excerpt: { en: "Fast drain can have several causes. Swelling, lifting screens or unusual heat should be treated more urgently.", th: "แบตหมดเร็วมีได้หลายสาเหตุ แต่แบตบวม จอยก หรือร้อนผิดปกติควรจัดการเร่งด่วนกว่า" },
    image: "/images/repair-battery-concept-v1.webp",
    imageAlt: { en: "iPhone battery assessment visual concept", th: "ภาพแนวคิดการตรวจแบตเตอรี่ iPhone" },
    serviceSlug: "iphone-battery-replacement",
    serviceLabel: { en: "Read the battery replacement guide", th: "อ่านคู่มือเปลี่ยนแบตเตอรี่" },
    lead: { en: "Battery drain does not always mean the battery alone is at fault. But if the screen begins lifting, the phone gets unusually hot or the battery appears swollen, stop charging it and arrange an assessment promptly.", th: "แบตหมดเร็วไม่ได้หมายความว่าแบตเป็นสาเหตุเดียวเสมอไป แต่หากจอเริ่มยก เครื่องร้อนผิดปกติ หรือสงสัยว่าแบตบวม ให้หยุดชาร์จและนัดตรวจโดยเร็ว" },
    sections: [
      { title: { en: "Symptoms worth recording", th: "อาการที่ควรจดไว้" }, paragraphs: { en: ["Record when the battery drains, whether it shuts down unexpectedly, if charging is intermittent and whether the phone becomes hot. Details about recent drops, water exposure or repair history also matter."], th: ["จดช่วงเวลาที่แบตหมดเร็ว มีดับเองหรือไม่ ชาร์จติด ๆ ดับ ๆ หรือเครื่องร้อนหรือไม่ รายละเอียดเรื่องตกกระแทก โดนน้ำ หรือประวัติซ่อมก็มีความสำคัญ"] }, bullets: { en: ["Battery percentage drops unexpectedly", "The phone shuts down or restarts", "The frame or screen is lifting", "Heat appears during normal use or charging"], th: ["เปอร์เซ็นต์แบตลดลงผิดปกติ", "เครื่องดับหรือรีสตาร์ตเอง", "เฟรมหรือจอเริ่มยก", "ร้อนผิดปกติระหว่างใช้งานหรือชาร์จ"] } },
      { title: { en: "If the battery may be swollen", th: "หากสงสัยว่าแบตบวม" }, paragraphs: { en: ["Do not press the display down, puncture the device or continue charging. Keep it away from heat and arrange a check. A swollen battery needs physical inspection; online messages can only help with initial triage."], th: ["อย่ากดจอให้ลง อย่าเจาะเครื่อง และอย่าชาร์จต่อ เก็บให้ห่างจากความร้อนและนัดตรวจ แบตบวมต้องตรวจสภาพจริง ข้อความออนไลน์ช่วยได้เพียงคัดกรองเบื้องต้น"] } },
      { title: { en: "Choose a replacement with the facts", th: "เลือกเปลี่ยนแบตจากข้อมูลจริง" }, paragraphs: { en: ["Confirm the exact model, available battery option, expected iOS status, warranty terms and timing before work. The workshop should explain these per job rather than promise the same result for every model."], th: ["ยืนยันรุ่นที่แน่นอน ตัวเลือกแบตที่มี สถานะ iOS ที่คาด เงื่อนไขประกัน และเวลาก่อนเริ่มงาน ร้านควรอธิบายเป็นรายงาน ไม่ควรรับปากผลเหมือนกันทุกรุ่น"] } }
    ],
    faq: { en: [["Should I keep charging a swollen iPhone battery?", "No. Stop charging and arrange an assessment. Do not press the screen back down."], ["How long does battery replacement take?", "Many cases are around 1–3 hours, but the model, queue, condition and current stock must be confirmed first."]], th: [["แบต iPhone บวมแล้วยังชาร์จได้ไหม", "ไม่ควร หยุดชาร์จและนัดตรวจ อย่ากดจอให้กลับลงไป"], ["เปลี่ยนแบตใช้เวลานานเท่าไร", "หลายกรณีประมาณ 1–3 ชั่วโมง แต่ต้องยืนยันตามรุ่น คิว สภาพ และสต็อกก่อน"]] }
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<string, Guide>;
