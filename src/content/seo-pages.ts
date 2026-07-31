import type { Locale } from "@/config/site";

type Localized = Record<Locale, string>;

export type SeoPage = {
  slug: string;
  title: Localized;
  description: Localized;
  eyebrow: Localized;
  h1: Localized;
  intro: Localized;
  keywords: Record<Locale, string[]>;
  benefits: Array<{ title: Localized; body: Localized }>;
  steps: Record<Locale, string[]>;
  faq: Record<Locale, [string, string][]>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "iphone-screen-repair",
    title: { en: "iPhone Screen Repair Phuket & Patong", th: "เปลี่ยนจอไอโฟนภูเก็ต ป่าตอง" },
    description: { en: "iPhone screen repair in Phuket and Patong for cracked glass, black displays, lines and touch faults. Compare part choices, timing and warranty.", th: "เปลี่ยนจอไอโฟนภูเก็ตและป่าตอง สำหรับจอแตก จอดำ มีเส้น และทัชไม่ได้ เปรียบเทียบอะไหล่ เวลา และประกันก่อนซ่อม" },
    eyebrow: { en: "IPHONE SCREEN REPAIR PHUKET", th: "เปลี่ยนจอไอโฟนภูเก็ต" },
    h1: { en: "iPhone screen repair in Phuket, explained before replacement.", th: "เปลี่ยนจอไอโฟนภูเก็ต อธิบายตัวเลือกก่อนเปลี่ยน" },
    intro: { en: "For cracked glass, black screens, vertical lines, flicker or touch failure. TK Mobile Service checks the exact model and related damage before confirming a screen option.", th: "สำหรับจอแตก จอดำ มีเส้น จอกะพริบ หรือทัชไม่ได้ TK Mobile Service ตรวจรุ่นและความเสียหายที่เกี่ยวข้องก่อนยืนยันตัวเลือกจอ" },
    keywords: { en: ["iphone screen repair phuket", "cracked iphone screen patong", "broken iphone screen phuket", "iphone screen replacement cost phuket"], th: ["เปลี่ยนจอไอโฟนภูเก็ต", "ซ่อมจอไอโฟนป่าตอง", "ไอโฟนจอแตกภูเก็ต"] },
    benefits: [
      { title: { en: "Model-specific options", th: "ตัวเลือกตามรุ่น" }, body: { en: "Display types, availability and compatibility vary by exact iPhone model.", th: "ประเภทจอ ความพร้อม และความเข้ากันได้แตกต่างกันตามรุ่น iPhone" } },
      { title: { en: "Testing after installation", th: "ทดสอบหลังติดตั้ง" }, body: { en: "Touch, display, brightness and related functions are tested within the approved scope.", th: "ทดสอบทัช ภาพ ความสว่าง และฟังก์ชันที่เกี่ยวข้องตามขอบเขตงาน" } },
      { title: { en: "Job-specific warranty", th: "ประกันตามงาน" }, body: { en: "Coverage depends on the display option and is confirmed before repair.", th: "ระยะและเงื่อนไขขึ้นอยู่กับตัวเลือกจอ โดยยืนยันก่อนซ่อม" } }
    ],
    steps: { en: ["Send the model and a photo of the screen", "Confirm display options and current stock", "Approve the quote and testing scope", "Test and collect or arrange return"], th: ["ส่งรุ่นและรูปหน้าจอ", "ยืนยันตัวเลือกจอและสต็อก", "อนุมัติราคาและขอบเขตทดสอบ", "ทดสอบและรับเครื่องหรือจัดส่งคืน"] },
    faq: { en: [["How long does iPhone screen repair take in Phuket?", "Alternative display repairs are often around 1 hour and genuine options may take around 2–3 hours, but the exact model, queue, condition and stock must be confirmed."], ["Will my data be erased?", "A screen replacement normally does not require erasing data, but you should back up important data when possible."]], th: [["เปลี่ยนจอไอโฟนภูเก็ตใช้เวลานานเท่าไร", "จอทางเลือกโดยทั่วไปประมาณ 1 ชั่วโมง ส่วนตัวเลือกแท้อาจประมาณ 2–3 ชั่วโมง แต่ต้องยืนยันตามรุ่น คิว สภาพ และสต็อก"], ["ข้อมูลจะหายหรือไม่", "โดยทั่วไปการเปลี่ยนจอไม่ต้องลบข้อมูล แต่ควรสำรองข้อมูลสำคัญเมื่อทำได้"]] }
  },
  {
    slug: "iphone-battery-replacement",
    title: { en: "iPhone Battery Replacement Phuket", th: "เปลี่ยนแบตไอโฟนภูเก็ต" },
    description: { en: "iPhone battery replacement in Phuket and Patong for fast drain, shutdowns, swelling and battery service warnings. Confirm parts and timing first.", th: "เปลี่ยนแบตไอโฟนภูเก็ตและป่าตอง สำหรับแบตหมดเร็ว ดับเอง บวม หรือขึ้นแจ้งเตือน ยืนยันอะไหล่และเวลาก่อนซ่อม" },
    eyebrow: { en: "IPHONE BATTERY REPLACEMENT PHUKET", th: "เปลี่ยนแบตไอโฟนภูเก็ต" },
    h1: { en: "iPhone battery replacement in Phuket with clear part choices.", th: "เปลี่ยนแบตไอโฟนภูเก็ต พร้อมตัวเลือกอะไหล่ชัดเจน" },
    intro: { en: "Fast drain, unexpected shutdowns, heat and battery warnings can point to the battery or another fault. Diagnosis helps avoid replacing the wrong part.", th: "แบตหมดเร็ว ดับเอง ร้อน หรือขึ้นแจ้งเตือน อาจมาจากแบตหรือสาเหตุอื่น การตรวจก่อนช่วยลดการเปลี่ยนผิดจุด" },
    keywords: { en: ["iphone battery replacement phuket", "iphone battery change phuket", "iphone battery replacement charge"], th: ["เปลี่ยนแบตไอโฟนภูเก็ต", "เปลี่ยนแบตไอโฟนป่าตอง", "แบตไอโฟนหมดเร็ว"] },
    benefits: [
      { title: { en: "Symptoms checked first", th: "ตรวจก่อนเปลี่ยน" }, body: { en: "Battery health, current draw and the reported behaviour help shape the proposal.", th: "ดูสุขภาพแบต การกินกระแส และอาการที่แจ้งก่อนเสนอแนวทาง" } },
      { title: { en: "Part choices explained", th: "อธิบายตัวเลือกอะไหล่" }, body: { en: "Available battery options and iOS-related limitations are explained honestly.", th: "อธิบายตัวเลือกแบตและข้อจำกัดที่เกี่ยวกับ iOS ตามจริง" } },
      { title: { en: "Care after replacement", th: "คำแนะนำหลังเปลี่ยน" }, body: { en: "Testing and practical battery-care guidance are included in the handover.", th: "ทดสอบและแนะนำการดูแลแบตเมื่อส่งมอบเครื่อง" } }
    ],
    steps: { en: ["Send the exact iPhone model", "Describe drain, heat and shutdown behaviour", "Confirm battery choice and warranty", "Approve replacement and final testing"], th: ["ส่งรุ่น iPhone ที่แน่นอน", "แจ้งอาการหมดเร็ว ร้อน หรือดับ", "ยืนยันตัวเลือกแบตและประกัน", "อนุมัติเปลี่ยนและทดสอบ"] },
    faq: { en: [["How long does battery replacement take?", "Many battery jobs are completed within 1–3 hours, subject to model, queue, condition and stock."], ["Will Battery Health work normally?", "That depends on the model, part and repair method. We explain the expected iOS status before work."]], th: [["เปลี่ยนแบตใช้เวลานานเท่าไร", "งานแบตจำนวนมากใช้เวลาประมาณ 1–3 ชั่วโมง ขึ้นอยู่กับรุ่น คิว สภาพ และสต็อก"], ["สุขภาพแบตจะแสดงปกติหรือไม่", "ขึ้นอยู่กับรุ่น อะไหล่ และวิธีซ่อม ร้านจะแจ้งสถานะที่คาดใน iOS ก่อนเริ่มงาน"]] }
  },
  {
    slug: "logic-board-repair",
    title: { en: "iPhone Logic Board Repair Phuket", th: "ซ่อมเมนบอร์ดไอโฟนภูเก็ต" },
    description: { en: "iPhone logic board repair and microsoldering diagnostics in Phuket for no power, boot loop, charging, liquid damage and data-priority cases.", th: "ซ่อมเมนบอร์ดไอโฟนภูเก็ตและตรวจไมโครโซลเดอริง สำหรับเปิดไม่ติด บูตวน ชาร์จ ตกน้ำ และงานที่เน้นข้อมูล" },
    eyebrow: { en: "IPHONE LOGIC BOARD REPAIR PHUKET", th: "ซ่อมเมนบอร์ดไอโฟนภูเก็ต" },
    h1: { en: "Board-level diagnostics for difficult iPhone faults.", th: "ตรวจระดับบอร์ดสำหรับอาการ iPhone ที่ซับซ้อน" },
    intro: { en: "No power, boot loops, abnormal current, liquid exposure and failed previous repairs may need systematic board-level diagnosis rather than another guessed part.", th: "เปิดไม่ติด บูตวน กินกระแสผิดปกติ ตกน้ำ หรือเคยซ่อมไม่สำเร็จ อาจต้องตรวจระดับบอร์ดอย่างเป็นระบบแทนการเดาเปลี่ยนอะไหล่" },
    keywords: { en: ["iphone logic board repair phuket", "iphone won't turn on phuket", "iphone data recovery phuket", "microsoldering phuket"], th: ["ซ่อมเมนบอร์ดไอโฟนภูเก็ต", "ไอโฟนเปิดไม่ติดภูเก็ต", "กู้ข้อมูลไอโฟนภูเก็ต"] },
    benefits: [
      { title: { en: "Systematic diagnosis", th: "ตรวจอย่างเป็นระบบ" }, body: { en: "Power rails, current behaviour and relevant circuits are assessed within the approved scope.", th: "ตรวจไฟ การกินกระแส และวงจรที่เกี่ยวข้องตามขอบเขตที่อนุมัติ" } },
      { title: { en: "Data priorities discussed", th: "คุยเรื่องข้อมูลก่อน" }, body: { en: "Repair-for-use and repair-for-data can require different decisions and risk tolerance.", th: "ซ่อมเพื่อใช้งานและซ่อมเพื่อข้อมูลอาจต้องตัดสินใจและรับความเสี่ยงต่างกัน" } },
      { title: { en: "Clear stopping point", th: "มีจุดหยุดที่ชัดเจน" }, body: { en: "Work pauses when the risk, economics or diagnostic findings no longer support continuing.", th: "หยุดงานเมื่อความเสี่ยง ความคุ้มค่า หรือผลตรวจไม่สนับสนุนให้ทำต่อ" } }
    ],
    steps: { en: ["Describe the last event and prior repair", "Agree on diagnostic scope and fee", "Receive findings and repair options", "Approve repair or stop after diagnosis"], th: ["แจ้งเหตุการณ์ล่าสุดและประวัติซ่อม", "ตกลงขอบเขตและค่าตรวจ", "รับผลตรวจและตัวเลือก", "อนุมัติซ่อมหรือหยุดหลังตรวจ"] },
    faq: { en: [["Is logic board repair guaranteed?", "No. Board faults can involve hidden, progressive or multiple damage. The diagnostic and job-specific limitations are explained before repair."], ["How long does board repair take?", "Many cases require around 1–3 days, but difficult faults, parts and queue can take longer."]], th: [["ซ่อมเมนบอร์ดรับประกันว่าจะหายหรือไม่", "ไม่รับประกันทุกกรณี เพราะอาจมีความเสียหายซ่อนอยู่ ลุกลาม หรือเสียหลายจุด ร้านจะแจ้งข้อจำกัดตามงาน"], ["ซ่อมเมนบอร์ดใช้เวลากี่วัน", "หลายกรณีใช้ประมาณ 1–3 วัน แต่อาการยาก อะไหล่ และคิวอาจทำให้นานขึ้น"]] }
  },
  {
    slug: "iphone-repair-patong",
    title: { en: "iPhone Repair Patong Phuket", th: "ซ่อมไอโฟนป่าตอง ภูเก็ต" },
    description: { en: "Walk-in iPhone repair in Patong, Phuket for tourists and residents. Screens, batteries, water damage and board diagnostics near Patong Beach.", th: "ร้านซ่อมไอโฟนป่าตอง ภูเก็ต สำหรับนักท่องเที่ยวและคนในพื้นที่ งานจอ แบต ตกน้ำ และเมนบอร์ด ใกล้หาดป่าตอง" },
    eyebrow: { en: "IPHONE REPAIR PATONG", th: "ซ่อมไอโฟนป่าตอง" },
    h1: { en: "Walk-in iPhone repair in Patong for tourists and residents.", th: "ซ่อมไอโฟนป่าตองแบบ Walk-in สำหรับนักท่องเที่ยวและคนในพื้นที่" },
    intro: { en: "TK Mobile Service is a real independent workshop on Phrabaramee Road. Message before travelling to confirm the queue, parts and likely time.", th: "TK Mobile Service เป็นเวิร์กช็อปอิสระบนถนนพระบารมี ทักก่อนเดินทางเพื่อยืนยันคิว อะไหล่ และเวลาโดยประมาณ" },
    keywords: { en: ["iphone repair patong", "phone repair patong", "phone repair patong beach", "walk in iphone repair patong", "iphone repair near my hotel phuket"], th: ["ซ่อมไอโฟนป่าตอง", "ร้านซ่อมโทรศัพท์ป่าตอง", "ซ่อมไอโฟนด่วน ป่าตอง"] },
    benefits: [
      { title: { en: "Near Patong Beach", th: "ใกล้หาดป่าตอง" }, body: { en: "The workshop is on Phrabaramee Road, opposite Super Cheap near the GSB intersection.", th: "ร้านอยู่ถนนพระบารมี ตรงข้าม Super Cheap ใกล้แยกธนาคารออมสิน" } },
      { title: { en: "English support", th: "รองรับภาษาอังกฤษ" }, body: { en: "Tourists can describe the device, problem and hotel area through WhatsApp.", th: "นักท่องเที่ยวส่งรุ่น อาการ และพื้นที่โรงแรมผ่าน WhatsApp ได้" } },
      { title: { en: "Walk-in or Grab", th: "Walk-in หรือ Grab" }, body: { en: "Walk in during confirmed hours or arrange your own Grab after the shop confirms receipt.", th: "เข้าร้านในเวลาที่ยืนยัน หรือเรียก Grab เองหลังร้านยืนยันรับเครื่อง" } }
    ],
    steps: { en: ["Message with model, fault and location", "Confirm current opening, queue and stock", "Walk in or arrange Grab", "Approve the quoted repair scope"], th: ["ส่งรุ่น อาการ และตำแหน่ง", "ยืนยันเวลาเปิด คิว และสต็อก", "เข้าร้านหรือเรียก Grab", "อนุมัติราคาและขอบเขตงาน"] },
    faq: { en: [["Can I walk in without an appointment?", "Yes, walk-ins are welcome during confirmed opening hours. Messaging first helps check the queue and parts."], ["Can I send my phone from a hotel by Grab?", "Yes, when the shop confirms it can receive the device. You arrange and pay for delivery yourself."]], th: [["ไม่ได้นัดสามารถเข้าร้านได้ไหม", "รับ Walk-in ในเวลาเปิดที่ยืนยันแล้ว แนะนำให้ทักเพื่อตรวจคิวและอะไหล่ก่อน"], ["ส่งโทรศัพท์จากโรงแรมผ่าน Grab ได้ไหม", "ได้เมื่อร้านยืนยันว่าสามารถรับเครื่อง ลูกค้าเป็นผู้เรียกและชำระค่าจัดส่งเอง"]] }
  },
  {
    slug: "ipad-repair",
    title: { en: "iPad Repair Phuket & Patong", th: "ซ่อมไอแพดภูเก็ต ป่าตอง" },
    description: { en: "iPad repair in Phuket and Patong for display, touch, battery, charging, liquid damage and board faults. Case-by-case assessment.", th: "ซ่อมไอแพดภูเก็ตและป่าตอง งานจอ ทัช แบต ชาร์จ ตกน้ำ และเมนบอร์ด ประเมินเป็นรายเครื่อง" },
    eyebrow: { en: "IPAD REPAIR PHUKET", th: "ซ่อมไอแพดภูเก็ต" },
    h1: { en: "iPad repair in Phuket, assessed by model and fault.", th: "ซ่อมไอแพดภูเก็ต ประเมินตามรุ่นและอาการ" },
    intro: { en: "Display, touch, battery, charging, liquid and board-level cases are assessed by model, condition, repair history and parts availability.", th: "งานจอ ทัช แบต ชาร์จ ตกน้ำ และระดับบอร์ด ประเมินตามรุ่น สภาพ ประวัติซ่อม และอะไหล่" },
    keywords: { en: ["ipad repair phuket", "ipad screen repair phuket", "ipad repair patong"], th: ["ซ่อมไอแพดภูเก็ต", "เปลี่ยนจอไอแพดภูเก็ต", "ซ่อมไอแพดป่าตอง"] },
    benefits: [
      { title: { en: "Model-first assessment", th: "ตรวจตามรุ่น" }, body: { en: "iPad construction and parts vary significantly across generations.", th: "โครงสร้างและอะไหล่ iPad แตกต่างกันมากในแต่ละรุ่น" } },
      { title: { en: "Screen and touch", th: "จอและทัช" }, body: { en: "Glass, display and touch faults are separated before a proposal.", th: "แยกอาการกระจก ภาพ และทัชก่อนเสนอแนวทาง" } },
      { title: { en: "Advanced faults", th: "อาการซับซ้อน" }, body: { en: "Charging, liquid and board-level faults are considered case by case.", th: "งานชาร์จ ตกน้ำ และระดับบอร์ดประเมินเป็นรายเครื่อง" } }
    ],
    steps: { en: ["Send the model number from Settings or rear case", "Describe the fault and repair history", "Confirm inspection and part availability", "Approve the repair plan"], th: ["ส่งเลขรุ่นจาก Settings หรือฝาหลัง", "แจ้งอาการและประวัติซ่อม", "ยืนยันการตรวจและอะไหล่", "อนุมัติแผนซ่อม"] },
    faq: { en: [["Do you repair every iPad model?", "We prioritise iPad 7th generation and newer. Older models are assessed case by case based on repair value and parts."], ["Can you replace only the glass?", "That depends on the exact model and whether the display and touch system remain healthy."]], th: [["รับซ่อม iPad ทุกรุ่นไหม", "ร้านเน้น iPad รุ่นที่ 7 ขึ้นไป รุ่นเก่าประเมินตามความคุ้มค่าและอะไหล่"], ["เปลี่ยนเฉพาะกระจกได้ไหม", "ขึ้นอยู่กับรุ่นและสภาพระบบภาพกับทัช ต้องตรวจเป็นรายเครื่อง"]] }
  },
  {
    slug: "macbook-repair",
    title: { en: "MacBook Repair Phuket", th: "ซ่อมแมคบุ๊คภูเก็ต" },
    description: { en: "MacBook repair enquiries in Phuket for no power, charging, liquid damage and board diagnostics. Availability and scope confirmed case by case.", th: "สอบถามซ่อม MacBook ภูเก็ต อาการเปิดไม่ติด ชาร์จ ตกน้ำ และเมนบอร์ด ยืนยันขอบเขตและความพร้อมเป็นรายเครื่อง" },
    eyebrow: { en: "MACBOOK REPAIR PHUKET", th: "ซ่อมแมคบุ๊คภูเก็ต" },
    h1: { en: "MacBook diagnostics in Phuket for selected repair cases.", th: "ตรวจ MacBook ภูเก็ต สำหรับงานที่ร้านรองรับ" },
    intro: { en: "MacBook enquiries are reviewed by exact model, symptom, liquid or impact history, previous repair and parts availability before the workshop accepts the case.", th: "งาน MacBook พิจารณาจากรุ่น อาการ ประวัติตกน้ำหรือตกกระแทก การซ่อมเดิม และอะไหล่ ก่อนร้านยืนยันรับงาน" },
    keywords: { en: ["macbook repair phuket", "apple repair phuket", "computer repair phuket"], th: ["ซ่อมแมคบุ๊คภูเก็ต", "ซ่อม MacBook ป่าตอง", "ซ่อมคอมพิวเตอร์ภูเก็ต"] },
    benefits: [
      { title: { en: "Selected cases", th: "รับเป็นบางกรณี" }, body: { en: "The workshop confirms whether the model and fault fit current capability.", th: "ร้านยืนยันก่อนว่ารุ่นและอาการตรงกับงานที่รองรับหรือไม่" } },
      { title: { en: "History matters", th: "ประวัติเครื่องสำคัญ" }, body: { en: "Liquid, impact and previous opening can change the diagnostic plan.", th: "ตกน้ำ กระแทก และเคยแกะซ่อม มีผลต่อแผนตรวจ" } },
      { title: { en: "No false acceptance", th: "ไม่รับงานแบบคาดเดา" }, body: { en: "If the case is outside scope, the shop says so before you travel or send it.", th: "หากอยู่นอกขอบเขต ร้านจะแจ้งก่อนเดินทางหรือส่งเครื่อง" } }
    ],
    steps: { en: ["Send model and serial family", "Describe the fault and history", "Wait for case acceptance", "Confirm diagnostic scope before sending"], th: ["ส่งรุ่นและกลุ่ม Serial", "แจ้งอาการและประวัติ", "รอร้านยืนยันรับเคส", "ตกลงขอบเขตตรวจก่อนส่ง"] },
    faq: { en: [["Do you accept every MacBook repair?", "No. MacBook work is assessed case by case according to model, fault, tools, risk and parts."], ["Should I send it by Grab immediately?", "No. Message first and wait until the workshop confirms that it can receive and assess the case."]], th: [["รับซ่อม MacBook ทุกอาการไหม", "ไม่ทุกกรณี ร้านประเมินตามรุ่น อาการ เครื่องมือ ความเสี่ยง และอะไหล่"], ["ควรเรียก Grab ส่งทันทีไหม", "ไม่ควร กรุณาทักและรอร้านยืนยันรับเคสก่อนส่ง"]] }
  }
];

export const seoPageBySlug = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;
