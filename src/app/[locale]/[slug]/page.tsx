import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Boxes, Check, Clock3, Droplets, GraduationCap, MapPin, MessageCircle, PackageCheck, ShieldCheck, Smartphone, Wrench, X } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { TrackedLink } from "@/components/tracked-link";
import { chatLink, site, type Locale } from "@/config/site";
import { services } from "@/content/content";
import { seoPageBySlug, seoPages, type SeoPage } from "@/content/seo-pages";

const slugs = ["services", "liquid-damage", "location", "about", "privacy", ...seoPages.map((page) => page.slug)];

const meta: Record<string, Record<Locale, [string, string]>> = {
  services: {
    en: ["iPhone, iPad & Apple Device Repair", "iPhone and iPad screens, batteries, liquid damage, charging faults and logic board repair in Patong, Phuket."],
    th: ["บริการซ่อม iPhone และ iPad ภูเก็ต", "ซ่อมจอ แบตเตอรี่ เครื่องตกน้ำ ชาร์จไม่เข้า และเมนบอร์ด iPhone และ iPad ที่ป่าตอง ภูเก็ต"]
  },
  "liquid-damage": {
    en: ["iPhone Liquid Damage Service Phuket", "Two transparent liquid-damage service levels: cleaning and drying only, or full cleaning and diagnostic assessment."],
    th: ["บริการเครื่องตกน้ำ iPhone ภูเก็ต", "บริการเครื่องตกน้ำ 2 ระดับ: ทำความสะอาดและทำให้แห้ง หรือทำความสะอาดพร้อมตรวจวิเคราะห์เต็มรูปแบบ"]
  },
  location: {
    en: ["Visit Our iPhone Repair Shop in Patong", "Find TK Mobile Service at 67/25 Phrabaramee Road, Patong. Opening hours, parking, Grab and parcel information."],
    th: ["ที่ตั้งร้านซ่อม iPhone ป่าตอง", "TK Mobile Service 67/25 ถนนพระบารมี ป่าตอง พร้อมเวลาเปิด การจอดรถ การส่ง Grab และพัสดุ"]
  },
  about: {
    en: ["About TK Mobile Service & Technician Arm", "Meet Technician Arm, a Computer Engineering graduate with more than 10 years of independent device repair experience."],
    th: ["เกี่ยวกับ TK Mobile Service และช่างอาร์ม", "ช่างอาร์ม จบวิศวกรรมคอมพิวเตอร์ ประสบการณ์งานซ่อมอุปกรณ์อิสระมากกว่า 10 ปี"]
  },
  privacy: {
    en: ["Privacy Notice", "How TK Mobile Service handles website analytics and contact links."],
    th: ["ประกาศความเป็นส่วนตัว", "ข้อมูลเกี่ยวกับ Analytics และลิงก์ติดต่อที่ใช้บนเว็บไซต์ TK Mobile Service"]
  }
};

export function generateStaticParams() {
  return slugs.flatMap((slug) => ["en", "th"].map((locale) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug: raw } = await params;
  if (!slugs.includes(raw)) return {};
  const seoPage = seoPageBySlug[raw];
  const [title, description] = seoPage
    ? [seoPage.title[locale], seoPage.description[locale]]
    : meta[raw][locale];
  return {
    title,
    description,
    keywords: seoPage?.keywords[locale],
    alternates: {
      canonical: `/${locale}/${raw}/`,
      languages: { en: `/en/${raw}/`, th: `/th/${raw}/`, "x-default": `/en/${raw}/` }
    },
    openGraph: { title, description, url: `/${locale}/${raw}/`, images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] }
  };
}

type HeroVisual = { src: string; alt: string; label: string };

function PageHero({ eyebrow, title, intro, visual }: { eyebrow: string; title: string; intro: string; visual?: HeroVisual }) {
  const heroVisual = visual ?? { src: "/images/tk-mobile-workshop-concept-v1.png", alt: "Premium mobile repair workshop visual concept", label: "AI VISUAL CONCEPT" };
  return <section className="page-hero"><div className="shell page-hero-inner"><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div><div className="page-hero-workshop" aria-label={heroVisual.alt}><Image src={heroVisual.src} alt={heroVisual.alt} fill sizes="(max-width: 760px) 92vw, 42vw" priority /><span>{heroVisual.label}</span></div></div></section>;
}

function repairHeroVisual(slug: string, locale: Locale): HeroVisual | undefined {
  const en = locale === "en";
  const label = en ? "AI VISUAL CONCEPT" : "ภาพแนวคิด AI";
  const visuals: Record<string, HeroVisual> = {
    "iphone-screen-repair": { src: "/images/repair-screen-concept-v1.png", alt: en ? "Screen replacement repair visual" : "ภาพงานเปลี่ยนหน้าจอ", label },
    "iphone-battery-replacement": { src: "/images/repair-battery-concept-v1.png", alt: en ? "Battery replacement repair visual" : "ภาพงานเปลี่ยนแบตเตอรี่", label },
    "logic-board-repair": { src: "/images/repair-board-concept-v1.png", alt: en ? "Logic board repair visual" : "ภาพงานซ่อมเมนบอร์ด", label },
    "liquid-damage": { src: "/images/repair-liquid-concept-v1.png", alt: en ? "Liquid damage repair visual" : "ภาพงานเครื่องตกน้ำ", label },
    "iphone-repair-patong": { src: "/images/tk-mobile-workshop-concept-v1.png", alt: en ? "Premium mobile repair workshop visual" : "ภาพเวิร์กช็อปซ่อมมือถือ", label },
    "ipad-repair": { src: "/images/repair-screen-concept-v1.png", alt: en ? "Tablet screen repair visual" : "ภาพงานซ่อมหน้าจอแท็บเล็ต", label },
    "macbook-repair": { src: "/images/repair-board-concept-v1.png", alt: en ? "Advanced electronics repair visual" : "ภาพงานซ่อมอิเล็กทรอนิกส์ขั้นสูง", label }
  };
  return visuals[slug];
}

function TabServiceDetails({ locale, slug }: { locale: Locale; slug: string }) {
  const en = locale === "en";
  const details: Record<string, { kicker: string; title: string; intro: string; cards: [string, string, string][]; send: string[] }> = {
    "iphone-screen-repair": en ? {
      kicker: "SCREEN REPAIR DETAILS", title: "A screen replacement is more than fitting glass.", intro: "The shop first confirms the iPhone model and checks whether the problem is cracked glass only, display damage, touch failure, lines, black screen or damage that may affect other functions.",
      cards: [["COMMON SIGNS", "Cracked, black, lined or unresponsive", "Send a photo of the display and tell us whether touch, brightness and Face ID still work."], ["PART OPTIONS", "Explained by model and stock", "Available genuine, pulled, OEM and aftermarket options are described honestly before any work is approved."], ["AFTER FITTING", "Testing before handover", "Touch, display, brightness and functions included in the agreed scope are checked before collection."]],
      send: ["Exact iPhone model", "Photo or short video of the screen", "Whether touch, display and Face ID work", "Your area and preferred visit time"]
    } : {
      kicker: "รายละเอียดเปลี่ยนจอ", title: "การเปลี่ยนจอไม่ใช่เพียงการเปลี่ยนกระจก.", intro: "ร้านจะยืนยันรุ่น iPhone และตรวจว่าเป็นกระจกแตก จอภาพเสีย ทัชไม่ได้ มีเส้น จอดำ หรือมีผลกับฟังก์ชันอื่นร่วมด้วยหรือไม่ก่อนเสนอราคา.",
      cards: [["อาการที่พบ", "จอแตก จอดำ มีเส้น หรือทัชไม่ได้", "ส่งรูปหน้าจอและแจ้งว่าทัช ความสว่าง และ Face ID ยังทำงานหรือไม่."], ["ตัวเลือกอะไหล่", "อธิบายตามรุ่นและสต็อก", "อธิบายตัวเลือกแท้ แท้แกะ OEM และอะไหล่ทางเลือกตามจริงก่อนอนุมัติงาน."], ["หลังติดตั้ง", "ทดสอบก่อนรับเครื่อง", "ทดสอบทัช ภาพ ความสว่าง และฟังก์ชันตามขอบเขตที่ตกลงก่อนส่งมอบ."]],
      send: ["รุ่น iPhone ที่แน่นอน", "รูปหรือวิดีโอหน้าจอ", "สถานะทัช หน้าจอ และ Face ID", "พื้นที่ที่อยู่และเวลาที่ต้องการเข้าร้าน"]
    },
    "iphone-battery-replacement": en ? {
      kicker: "BATTERY SERVICE DETAILS", title: "Check the cause before replacing the battery.", intro: "Fast drain, heat, shutdowns and a battery warning can involve the battery or another fault. The proposal is based on the exact model, symptoms, part availability and inspection result.",
      cards: [["COMMON SIGNS", "Drain, heat, shutdown or swelling", "Tell us how long the battery lasts, whether it gets hot, and whether the phone turns off unexpectedly."], ["BEFORE APPROVAL", "Part and iOS expectations", "The available part choice, relevant iOS status and job-specific warranty are explained before replacement."], ["AFTER SERVICE", "Function and charging check", "The device is tested within the agreed scope and practical battery care is explained at handover."]],
      send: ["Exact iPhone model", "Battery Health screenshot if available", "Drain, heat or shutdown symptoms", "Any liquid or impact history"]
    } : {
      kicker: "รายละเอียดเปลี่ยนแบต", title: "ตรวจสาเหตุก่อนเปลี่ยนแบตเตอรี่.", intro: "แบตหมดเร็ว ร้อน ดับเอง หรือมีข้อความแจ้งเตือน อาจมาจากแบตหรือสาเหตุอื่น ร้านประเมินจากรุ่น อาการ สต็อกอะไหล่ และผลตรวจ.",
      cards: [["อาการที่พบ", "หมดเร็ว ร้อน ดับเอง หรือแบตบวม", "แจ้งระยะเวลาการใช้งาน อาการร้อน และเครื่องดับเองหรือไม่."], ["ก่อนอนุมัติ", "ตัวเลือกอะไหล่และสถานะ iOS", "ร้านแจ้งตัวเลือกแบต สถานะ iOS ที่เกี่ยวข้อง และประกันตามงานก่อนเปลี่ยน."], ["หลังบริการ", "ทดสอบเครื่องและการชาร์จ", "ทดสอบตามขอบเขตที่ตกลงและแนะนำการดูแลแบตตอนส่งมอบ."]],
      send: ["รุ่น iPhone ที่แน่นอน", "ภาพ Battery Health ถ้ามี", "อาการหมดเร็ว ร้อน หรือดับเอง", "ประวัติตกน้ำหรือกระแทก"]
    },
    "logic-board-repair": en ? {
      kicker: "BOARD REPAIR DETAILS", title: "For faults that need diagnosis, not guessing.", intro: "No power, boot loop, abnormal charging, liquid exposure and failed previous repairs can need board-level diagnosis. The shop confirms a diagnostic scope before microsoldering or component work begins.",
      cards: [["WHEN TO ASK", "No power, boot loop or complex fault", "Describe the last event, any liquid or impact, and whether another shop has opened or repaired the device."], ["DIAGNOSIS", "Systematic board-level assessment", "Power behaviour, relevant circuits and the repair-for-use or repair-for-data priority are discussed before work continues."], ["DECISION POINT", "Clear findings and stopping point", "The shop pauses when the risk, diagnostic result or repair value no longer supports continuing."]],
      send: ["Exact model", "Last event before failure", "Liquid, impact and repair history", "Whether data recovery is the priority"]
    } : {
      kicker: "รายละเอียดซ่อมเมนบอร์ด", title: "สำหรับอาการที่ต้องตรวจ ไม่ใช่เดาเปลี่ยนอะไหล่.", intro: "เปิดไม่ติด บูตวน ชาร์จผิดปกติ ตกน้ำ หรือเคยซ่อมไม่สำเร็จ อาจต้องตรวจระดับบอร์ด ร้านจะยืนยันขอบเขตการตรวจก่อนทำ Microsoldering หรืองานชิ้นส่วน.",
      cards: [["เมื่อควรปรึกษา", "เปิดไม่ติด บูตวน หรืออาการซับซ้อน", "แจ้งเหตุการณ์ก่อนเสีย ตกน้ำ กระแทก และเคยให้ร้านอื่นแกะหรือซ่อมหรือไม่."], ["การตรวจ", "ตรวจระดับบอร์ดอย่างเป็นระบบ", "ดูพฤติกรรมไฟ วงจรที่เกี่ยวข้อง และยืนยันก่อนว่าต้องการซ่อมเพื่อใช้งานหรือให้ความสำคัญกับข้อมูล."], ["จุดตัดสินใจ", "แจ้งผลและจุดหยุดชัดเจน", "ร้านหยุดเมื่อความเสี่ยง ผลตรวจ หรือความคุ้มค่าไม่สนับสนุนให้ทำต่อ."]],
      send: ["รุ่นที่แน่นอน", "เหตุการณ์ล่าสุดก่อนเครื่องเสีย", "ประวัติตกน้ำ กระแทก และการซ่อม", "ต้องการเน้นกู้ข้อมูลหรือไม่"]
    }
  };
  const detail = details[slug];
  if (!detail) return null;
  return <section className="tab-service-details section shell"><div className="section-heading wide"><span className="eyebrow">{detail.kicker}</span><h2>{detail.title}</h2><p>{detail.intro}</p></div><div className="tab-detail-grid">{detail.cards.map(([label, title, body]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tab-send-list"><div><span className="eyebrow">{en ? "SEND THIS FIRST" : "ส่งข้อมูลนี้ก่อน"}</span><h3>{en ? "One clear message helps the shop assess your case." : "ข้อความที่ข้อมูลครบ ช่วยให้ร้านประเมินได้เร็วขึ้น"}</h3></div><ul>{detail.send.map((item) => <li key={item}><Check />{item}</li>)}</ul></div></section>;
}

function ServicesPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const schema = services.map((service) => ({
    "@context": "https://schema.org", "@type": "Service", name: service.title[locale], description: service.description[locale],
    provider: { "@id": `${site.url}/#business` }, areaServed: ["Patong", "Phuket"]
  }));
  return <>
    <JsonLd data={schema} />
    <PageHero eyebrow={en ? "WHAT WE REPAIR" : "บริการของเรา"} title={en ? "One workshop. From quick fixes to board-level faults." : "เวิร์กช็อปเดียว ตั้งแต่งานทั่วไปถึงระดับเมนบอร์ด"} intro={en ? "We prioritise iPhone, then iPad, with selected support for other Apple devices. Every job starts with the model, symptom and a clear scope." : "บริการหลักคือ iPhone ตามด้วย iPad และอุปกรณ์ Apple อื่นที่ร้านรับ ทุกงานเริ่มจากรุ่น อาการ และขอบเขตที่ชัดเจน"} />
    <section className="section shell">
      <div className="service-detail-list">{services.map((service, index) => <article key={service.slug} id={service.slug}>
        <div className="detail-number">0{index + 1}</div>
        <div><span className="eyebrow">{service.eyebrow[locale]}</span><h2>{service.title[locale]}</h2><p>{service.description[locale]}</p></div>
        <ul>{service.items[locale].map((item) => <li key={item}><Check />{item}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="service-bands">
      <div className="shell three-cards">
        <article><Clock3 /><h2>{en ? "Quick repair" : "งานซ่อมทั่วไป"}</h2><p>{en ? "Screens and batteries with available alternative parts are often completed in about 1 hour." : "งานจอและแบตเตอรี่ที่มีอะไหล่ทางเลือกพร้อม โดยทั่วไปประมาณ 1 ชั่วโมง"}</p></article>
        <article><Droplets /><h2>{en ? "Urgent care" : "งานเร่งด่วน"}</h2><p>{en ? "For liquid exposure or a device that will not power on. Do not charge it before assessment." : "สำหรับเครื่องตกน้ำหรือเปิดไม่ติด ห้ามชาร์จก่อนตรวจอาการ"}</p></article>
        <article><Wrench /><h2>{en ? "Advanced repair" : "งานซ่อมขั้นสูง"}</h2><p>{en ? "Logic board, charging, camera, Face ID and complex faults are assessed case by case." : "เมนบอร์ด ชาร์จ กล้อง Face ID และอาการซับซ้อน ประเมินเป็นรายเครื่อง"}</p></article>
      </div>
    </section>
    <section className="section shell">
      <div className="parts-table-heading"><span className="eyebrow">{en ? "PART CHOICES" : "ตัวเลือกอะไหล่"}</span><h2>{en ? "Names that mean what they say." : "เรียกประเภทอะไหล่ให้ตรงความจริง"}</h2></div>
      <div className="parts-table">
        {[
          [en ? "Genuine new" : "อะไหล่แท้ใหม่", en ? "Verified genuine parts sourced through general parts suppliers; availability varies by model." : "ตรวจสอบว่าเป็นของแท้ จัดซื้อผ่านผู้จำหน่ายอะไหล่ทั่วไป ความพร้อมขึ้นอยู่กับรุ่น"],
          [en ? "Genuine pulled" : "อะไหล่แท้แกะ", en ? "An original part removed from another device, with its prior-use condition explained." : "อะไหล่เดิมแท้ที่ถอดจากเครื่องอื่น โดยแจ้งสภาพและข้อจำกัด"],
          ["OEM", en ? "A third-party part made to a defined specification. It is not represented as Apple-supplied." : "อะไหล่ผู้ผลิตภายนอกตามสเปกที่กำหนด ไม่อ้างว่าเป็นอะไหล่จาก Apple"],
          [en ? "Aftermarket" : "อะไหล่ทางเลือก", en ? "Options such as Incell, OLED and Soft OLED, each explained by quality and use case." : "เช่น Incell, OLED และ Soft OLED อธิบายคุณภาพและความเหมาะสมตามการใช้งาน"]
        ].map(([name, desc]) => <div key={name}><b>{name}</b><p>{desc}</p></div>)}
      </div>
      <div className="disclaimer"><ShieldCheck /><p>{en ? "Warranty is job-specific. Battery proposals generally range from 6–12 months, displays 3–12 months, and board work around 3 months for the repaired point and symptom. Exact terms are confirmed in chat before service." : "การรับประกันขึ้นอยู่กับงาน โดยข้อเสนอแบตเตอรี่ทั่วไปอยู่ที่ 6–12 เดือน จอ 3–12 เดือน และงานบอร์ดประมาณ 3 เดือนเฉพาะจุดและอาการที่ซ่อม เงื่อนไขจริงยืนยันผ่านแชตก่อนรับบริการ"}</p></div>
    </section>
    <ContactStrip locale={locale} />
  </>;
}

function LiquidPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return <>
    <PageHero eyebrow={en ? "LIQUID DAMAGE" : "เครื่องตกน้ำ"} title={en ? "Two service levels. No false promises." : "2 ระดับบริการ โดยไม่ให้ความหวังเกินจริง"} intro={en ? "Liquid damage is unpredictable. We explain what each option includes, what it does not include, and when testing should stop for safety." : "ความเสียหายจากน้ำคาดเดาไม่ได้ ร้านอธิบายสิ่งที่รวม ไม่รวม และจุดที่ต้องหยุดทดสอบเพื่อความปลอดภัย"} visual={repairHeroVisual("liquid-damage", locale)} />
    <section className="section shell">
      <div className="emergency-note"><Droplets /><div><b>{en ? "Right now" : "ควรทำทันที"}</b><p>{en ? "Switch the device off if safe. Do not charge, heat or repeatedly power it on. Message us with the model, liquid type and time of exposure." : "ปิดเครื่องเมื่อทำได้อย่างปลอดภัย ห้ามชาร์จ เป่าร้อน หรือเปิดซ้ำ แจ้งรุ่น ชนิดของของเหลว และเวลาที่เกิดเหตุผ่านแชต"}</p></div></div>
      <div className="comparison-grid">
        <article><span className="option-label">OPTION 01</span><h2>{en ? "Emergency cleaning & drying" : "ทำความสะอาดและทำให้แห้ง"}</h2><p>{en ? "A limited service focused on opening, cleaning and reducing moisture." : "บริการขอบเขตจำกัด เน้นเปิดเครื่อง ทำความสะอาด และลดความชื้น"}</p><ul>
          <li><Check />{en ? "Opening, cleaning and drying" : "เปิดเครื่อง ทำความสะอาด และทำให้แห้ง"}</li>
          <li><Check />{en ? "Basic power-on test only when considered safe" : "ทดลองเปิดเบื้องต้นเฉพาะเมื่อช่างเห็นว่าปลอดภัย"}</li>
          <li className="no"><X />{en ? "No deep diagnosis" : "ไม่รวมการวินิจฉัยเชิงลึก"}</li>
          <li className="no"><X />{en ? "No repair or part replacement" : "ไม่รวมงานซ่อมหรือเปลี่ยนอะไหล่"}</li>
          <li className="no"><X />{en ? "No guarantee the device will work" : "ไม่รับประกันว่าเครื่องจะกลับมาใช้ได้"}</li>
        </ul></article>
        <article className="featured"><span className="option-label">OPTION 02</span><h2>{en ? "Full cleaning & diagnosis" : "ทำความสะอาดและตรวจเต็มรูปแบบ"}</h2><p>{en ? "Cleaning followed by an assessment of damaged circuits and related components." : "ทำความสะอาดพร้อมตรวจจุดเสียหาย วงจร และส่วนที่เกี่ยวข้อง"}</p><ul>
          <li><Check />{en ? "Cleaning and moisture treatment" : "ทำความสะอาดและจัดการความชื้น"}</li>
          <li><Check />{en ? "Logic board and component assessment" : "ประเมินเมนบอร์ดและส่วนประกอบ"}</li>
          <li><Check />{en ? "Findings, options and scope explained" : "แจ้งผล ตัวเลือก และขอบเขตงาน"}</li>
          <li><Check />{en ? "Repair starts only after approval" : "เริ่มซ่อมหลังได้รับอนุมัติ"}</li>
          <li className="no"><X />{en ? "Recovery is not guaranteed" : "ไม่รับประกันการกู้กลับทุกกรณี"}</li>
        </ul></article>
      </div>
      <div className="stop-rule"><ShieldCheck /><div><h2>{en ? "A safe stopping point matters." : "การรู้ว่าเมื่อไรควรหยุดสำคัญ"}</h2><p>{en ? "If testing reveals a short circuit, abnormal current draw or further risk, we stop. Continuing to power the device could create more damage." : "หากพบการลัดวงจร กินกระแสผิดปกติ หรือมีความเสี่ยงเพิ่ม ร้านจะหยุดทดสอบ เพราะการฝืนเปิดเครื่องอาจทำให้เสียหายมากขึ้น"}</p></div></div>
    </section>
    <ContactStrip locale={locale} />
  </>;
}

function LocationPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const locationSchema = { "@context": "https://schema.org", "@type": "ContactPage", name: meta.location[locale][0], url: `${site.url}/${locale}/location/`, mainEntity: { "@id": `${site.url}/#business` } };
  return <>
    <JsonLd data={locationSchema} />
    <PageHero eyebrow="PATONG · PHUKET" title={en ? "Easy to find. Clear before you send." : "เดินทางง่าย ส่งเครื่องอย่างชัดเจน"} intro={en ? "Walk in during opening hours, arrange your own Grab delivery within Phuket, or confirm by chat before sending a parcel." : "Walk-in ในเวลาเปิดร้าน เรียก Grab ส่งเองภายในภูเก็ต หรือยืนยันผ่านแชตก่อนส่งพัสดุ"} visual={{ src: "/images/tk-mobile-storefront-hero-v2.webp", alt: en ? "TK Mobile Service storefront in Patong" : "ภาพหน้าร้าน TK Mobile Service ป่าตอง", label: en ? "STOREFRONT VISUAL" : "ภาพหน้าร้าน" }} />
    <section className="section shell location-grid">
      <div>
        <span className="eyebrow">{en ? "SHOP ADDRESS" : "ที่อยู่ร้าน"}</span><h2>{site.address[locale]}</h2>
        <p>{en ? "Opposite Super Cheap, near the traffic-light intersection by Government Savings Bank." : "ตรงข้าม Super Cheap ใกล้สี่แยกไฟแดงธนาคารออมสิน"}</p>
        <div className="info-stack">
          <div><Clock3 /><p><b>{en ? "Opening hours" : "เวลาเปิดร้าน"}</b><br />{en ? "Sunday–Friday, 11:00–20:00. Closed Saturday." : "อาทิตย์–ศุกร์ 11:00–20:00 น. หยุดวันเสาร์"}</p></div>
          <div><MapPin /><p><b>{en ? "Parking" : "การจอดรถ"}</b><br />{en ? "Park in front when permitted. From 16:00–19:00, park on the opposite side." : "จอดหน้าร้านได้ตามช่วงเวลาที่อนุญาต ช่วง 16:00–19:00 น. ให้จอดฝั่งตรงข้าม"}</p></div>
          <div><Smartphone /><p><b>{en ? "At the shop" : "สิ่งอำนวยความสะดวก"}</b><br />{en ? "Waiting area and Wi-Fi. The current entrance is not wheelchair accessible." : "มีพื้นที่นั่งรอและ Wi-Fi ปัจจุบันทางเข้าร้านไม่รองรับวีลแชร์"}</p></div>
        </div>
        <TrackedLink event="click_directions" className="button" href={site.social.maps} target="_blank" rel="noreferrer">{en ? "Open Google Maps" : "เปิด Google Maps"}<ArrowRight /></TrackedLink>
      </div>
      <a className="map-panel large" href={site.social.maps} target="_blank" rel="noreferrer"><div className="map-grid" /><span className="road road-a" /><span className="road road-b" /><span className="map-pin"><b>TK</b></span><div className="map-label"><b>TK Mobile Service</b><small>67/25 PHRABARAMEE ROAD</small></div></a>
    </section>
    <section className="service-bands"><div className="shell three-cards">
      <article><MapPin /><h2>{en ? "Walk in" : "เข้าร้าน"}</h2><p>{en ? "No appointment required. Messaging first helps confirm queue and parts." : "ไม่ต้องนัดหมาย แนะนำทักก่อนเพื่อตรวจคิวและอะไหล่"}</p></article>
      <article><MessageCircle /><h2>Grab</h2><p>{en ? "Arrange and pay for your own Grab. Wait for our chat confirmation before dispatch." : "ลูกค้าเรียกและชำระ Grab เอง รอร้านยืนยันผ่านแชตก่อนส่ง"}</p></article>
      <article><PackageCheck /><h2>{en ? "Parcel" : "พัสดุ"}</h2><p>{en ? "Confirm packing, address, tracking, inspection fee and approval flow in chat first." : "ยืนยันการแพ็ก ที่อยู่ เลขติดตาม ค่าตรวจ และขั้นตอนอนุมัติผ่านแชตก่อน"}</p></article>
    </div></section>
    <section className="section shell send-checklist"><div><span className="eyebrow">{en ? "BEFORE SENDING" : "ก่อนส่งเครื่อง"}</span><h2>{en ? "One message prevents confusion." : "ข้อความเดียวช่วยให้ข้อมูลครบ"}</h2></div><ul>{(en ? ["Device model and symptom", "Liquid or impact history", "Previous repair or opening", "Part option you are considering", "Name and contact channel", "Delivery method and tracking", "Backup and passcode plan"] : ["รุ่นอุปกรณ์และอาการ", "ประวัติตกน้ำหรือตกกระแทก", "เคยซ่อมหรือแกะเครื่องหรือไม่", "ตัวเลือกอะไหล่ที่สนใจ", "ชื่อและช่องทางติดต่อ", "วิธีส่งและเลขติดตาม", "การสำรองข้อมูลและรหัสผ่าน"]).map((x) => <li key={x}><Check />{x}</li>)}</ul></section>
    <ContactStrip locale={locale} />
  </>;
}

function AboutPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const person = { "@context": "https://schema.org", "@type": "Person", name: en ? "Technician Arm" : "ช่างอาร์ม", jobTitle: "Lead repair technician", alumniOf: { "@type": "EducationalOccupationalCredential", credentialCategory: "Computer Engineering" }, worksFor: { "@id": `${site.url}/#business` }, knowsAbout: ["electronics diagnostics", "logic board repair", "microsoldering", "iPhone repair"] };
  return <>
    <JsonLd data={person} />
    <PageHero eyebrow={en ? "ABOUT THE WORKSHOP" : "เกี่ยวกับเวิร์กช็อป"} title={en ? "Engineering thinking, applied to everyday repairs." : "ใช้แนวคิดแบบวิศวกรรมกับงานซ่อมทุกวัน"} intro={en ? "TK Mobile Service is an independent repair workshop in Patong led by Technician Arm — a Computer Engineering graduate with more than 10 years of repair experience." : "TK Mobile Service คือร้านซ่อมอิสระในป่าตอง ดูแลโดยช่างอาร์ม ผู้จบวิศวกรรมคอมพิวเตอร์และมีประสบการณ์งานซ่อมมากกว่า 10 ปี"} />
    <section className="section shell about-grid">
      <div className="arm-card"><div className="arm-monogram">ARM<span>TK</span></div><small>{en ? "LEAD REPAIR TECHNICIAN" : "ช่างซ่อมหลัก"}</small></div>
      <div><span className="eyebrow">{en ? "TECHNICIAN ARM" : "ช่างอาร์ม"}</span><h2>{en ? "Diagnose first. Explain clearly. Repair only what is approved." : "ตรวจก่อน อธิบายชัด ซ่อมตามที่อนุมัติ"}</h2><p>{en ? "The workshop handles common component replacement and difficult board-level work. Specialist tools and a systematic testing process help separate a likely cause from a guess." : "ร้านดูแลทั้งงานเปลี่ยนอะไหล่ทั่วไปและงานยากระดับบอร์ด ใช้เครื่องมือเฉพาะทางและกระบวนการทดสอบอย่างเป็นระบบเพื่อแยกสาเหตุจากการคาดเดา"}</p><div className="credential-grid">
        <div><GraduationCap /><b>{en ? "Computer Engineering" : "วิศวกรรมคอมพิวเตอร์"}</b><span>{en ? "Technical foundation" : "พื้นฐานทางเทคนิค"}</span></div>
        <div><Clock3 /><b>{en ? "10+ years" : "มากกว่า 10 ปี"}</b><span>{en ? "Repair experience" : "ประสบการณ์งานซ่อม"}</span></div>
        <div><Boxes /><b>{en ? "Clear options" : "ตัวเลือกชัดเจน"}</b><span>{en ? "Genuine, OEM & aftermarket" : "แท้ OEM และ Aftermarket"}</span></div>
        <div><ShieldCheck /><b>{en ? "Approval first" : "อนุมัติก่อน"}</b><span>{en ? "No surprise added work" : "ไม่ทำงานเพิ่มโดยพลการ"}</span></div>
      </div></div>
    </section>
    <section className="independent-note"><div className="shell"><ShieldCheck /><div><h2>{en ? "Independent by definition." : "เป็นร้านซ่อมอิสระอย่างชัดเจน"}</h2><p>{en ? "TK Mobile Service is not an Apple Store, Apple Authorized Service Provider or Apple-certified technician. Any genuine part option is described by its actual source and availability." : "TK Mobile Service ไม่ใช่ Apple Store, Apple Authorized Service Provider หรือช่างที่รับรองโดย Apple ตัวเลือกอะไหล่แท้จะอธิบายตามแหล่งที่มาและความพร้อมจริง"}</p></div></div></section>
    <ContactStrip locale={locale} />
  </>;
}

function PrivacyPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return <>
    <PageHero eyebrow="PRIVACY" title={en ? "A small website footprint." : "เก็บข้อมูลบนเว็บไซต์เท่าที่จำเป็น"} intro={en ? "This website does not accept repair photos, device passcodes or repair case records." : "เว็บไซต์นี้ไม่รับอัปโหลดรูป รหัสผ่านเครื่อง หรือเก็บประวัติงานซ่อม"} />
    <section className="section shell prose">
      <h2>{en ? "Contact" : "การติดต่อ"}</h2><p>{en ? "Chat, phone and maps buttons take you to third-party services such as LINE, WhatsApp, Google Maps or your phone app. Their own privacy terms apply." : "ปุ่มแชต โทร และแผนที่จะนำไปยังบริการภายนอก เช่น LINE, WhatsApp, Google Maps หรือแอปโทรศัพท์ ซึ่งมีนโยบายของแต่ละบริการ"}</p>
      <h2>{en ? "Analytics" : "Analytics"}</h2><p>{en ? "Google Analytics is loaded only when a valid site ID is configured. It may collect usage data such as pages viewed, device category and approximate location. No tracking ID is hard-coded." : "Google Analytics จะทำงานเมื่อผู้ดูแลตั้งค่า Site ID จริงเท่านั้น อาจเก็บข้อมูลการใช้งาน เช่น หน้าที่ดู ประเภทอุปกรณ์ และตำแหน่งโดยประมาณ ไม่มี Tracking ID สมมติในโค้ด"}</p>
      <h2>{en ? "Repair information" : "ข้อมูลงานซ่อม"}</h2><p>{en ? "Send photos and repair details through the chat channel you choose. Do not send passwords until the technician explains whether access is necessary for testing." : "ส่งรูปและรายละเอียดงานผ่านช่องทางแชตที่เลือก ไม่ควรส่งรหัสผ่านจนกว่าช่างจะอธิบายว่าจำเป็นต่อการทดสอบหรือไม่"}</p>
      <h2>{en ? "Questions" : "สอบถาม"}</h2><p>{en ? `Call ${site.phoneDisplay} or contact LINE ${site.lineId}.` : `โทร ${site.phoneDisplay} หรือติดต่อ LINE ${site.lineId}`}</p>
      <small>{en ? "Last updated: 31 July 2026" : "ปรับปรุงล่าสุด: 31 กรกฎาคม 2569"}</small>
    </section>
  </>;
}

function SeoLandingPage({ locale, page }: { locale: Locale; page: SeoPage }) {
  const en = locale === "en";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title[locale],
      description: page.description[locale],
      url: `${site.url}/${locale}/${page.slug}/`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: ["Patong", "Phuket"],
      serviceType: page.keywords[locale][0]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq[locale].map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ];
  return <>
    <JsonLd data={schema} />
    <PageHero eyebrow={page.eyebrow[locale]} title={page.h1[locale]} intro={page.intro[locale]} visual={repairHeroVisual(page.slug, locale)} />
    <TabServiceDetails locale={locale} slug={page.slug} />
    <section className="section shell seo-service-intro">
      <div>
        <span className="eyebrow">{en ? "WHAT TO EXPECT" : "สิ่งที่ควรรู้"}</span>
        <h2>{en ? "A clear path from symptom to decision." : "จากอาการสู่การตัดสินใจอย่างชัดเจน"}</h2>
        <p>{en ? "Send the exact model, symptom, photos, repair history and your area. The workshop confirms whether it can help, the likely inspection path and what must be verified before work." : "ส่งรุ่น อาการ รูป ประวัติซ่อม และพื้นที่ที่อยู่ ร้านจะยืนยันว่างานอยู่ในขอบเขตหรือไม่ แนวทางตรวจ และข้อมูลที่ต้องยืนยันก่อนเริ่มงาน"}</p>
        <TrackedLink event={en ? "click_whatsapp" : "click_line"} className="button" href={chatLink(locale)} target="_blank" rel="noreferrer">{en ? "Send model + symptom" : "ส่งรุ่น + อาการ"}<ArrowRight /></TrackedLink>
      </div>
      <aside className="keyword-cluster" aria-label={en ? "Related repair searches" : "คำค้นหาที่เกี่ยวข้อง"}>
        <span className="eyebrow">{en ? "RELATED SERVICES" : "บริการที่เกี่ยวข้อง"}</span>
        <div>{page.keywords[locale].map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
        <small>{en ? "Keywords are used to describe the page topic, not to guarantee rankings." : "ใช้คีย์เวิร์ดเพื่ออธิบายหัวข้อของหน้า ไม่ใช่การรับประกันอันดับ"}</small>
      </aside>
    </section>
    <section className="section shell">
      <div className="seo-benefit-grid">{page.benefits.map((benefit, index) => <article key={benefit.title[locale]}><span className="detail-number">0{index + 1}</span><h2>{benefit.title[locale]}</h2><p>{benefit.body[locale]}</p></article>)}</div>
    </section>
    <section className="service-bands">
      <div className="section shell">
        <div className="section-heading light"><span className="eyebrow">{en ? "PROCESS" : "ขั้นตอน"}</span><h2>{en ? "Know the next step before travelling." : "รู้ขั้นตอนก่อนเดินทาง"}</h2></div>
        <div className="process-grid">{page.steps[locale].map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3></article>)}</div>
      </div>
    </section>
    <section className="faq-section section shell">
      <div className="section-heading"><span className="eyebrow">FAQ</span><h2>{en ? "Questions about this repair" : "คำถามเกี่ยวกับงานนี้"}</h2></div>
      <div className="faq-list">{page.faq[locale].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </section>
    <ContactStrip locale={locale} />
  </>;
}

export default async function InfoPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug: raw } = await params;
  if (!slugs.includes(raw)) notFound();
  const seoPage = seoPageBySlug[raw];
  if (seoPage) return <SeoLandingPage locale={locale} page={seoPage} />;
  const slug = raw;
  if (slug === "services") return <ServicesPage locale={locale} />;
  if (slug === "liquid-damage") return <LiquidPage locale={locale} />;
  if (slug === "location") return <LocationPage locale={locale} />;
  if (slug === "about") return <AboutPage locale={locale} />;
  return <PrivacyPage locale={locale} />;
}
