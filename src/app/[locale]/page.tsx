import type { Metadata } from "next";
import { ArrowRight, BatteryCharging, CircleGauge, Droplets, Microscope, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { TrackedLink } from "@/components/tracked-link";
import { openingHours, chatLink, site, type Locale } from "@/config/site";
import { faqs, services } from "@/content/content";
import { localPath } from "@/lib/i18n";

const homeCopy = {
  en: {
    kicker: "Independent Apple device repair · Patong, Phuket",
    titleA: "When your device stops,",
    titleB: "your trip shouldn’t.",
    intro: "iPhone and iPad repair with clear part choices, careful diagnostics and advanced board-level capability — explained before we begin.",
    chat: "WhatsApp for an assessment",
    map: "Find the shop",
    trust: ["10+ years’ repair experience", "Computer Engineering background", "Walk-ins welcome", "English chat support available"],
    servicesTitle: "Start with the symptom.",
    servicesIntro: "Quick repairs, urgent liquid damage and advanced faults are assessed at one independent workshop in Patong.",
    processTitle: "No mystery behind the repair.",
    process: [
      ["01", "Message first", "Send the model, symptom, photos and your area through chat."],
      ["02", "Choose the scope", "We explain inspection fees, parts, limitations and an estimated timeframe."],
      ["03", "Approve before work", "No additional repair begins without your confirmation."],
      ["04", "Test & collect", "We test the agreed repair and explain the job-specific warranty."]
    ],
    liquidTitle: "Dropped it in the sea or pool?",
    liquidBody: "Do not charge it. Switch it off if safe. Cleaning/drying only can reduce moisture, while a full assessment looks for damaged circuits and repair options. Neither service guarantees recovery.",
    partsTitle: "The right part is a decision, not a sales pitch.",
    partsBody: "Choose from clearly labelled genuine, OEM and aftermarket options according to how you use the device, your budget and availability.",
    timing: ["Alternative screen or battery", "Often about 1 hour", "Genuine screen or battery", "Often about 2–3 hours", "Board-level repair", "Often about 1–3 days"],
    timingNote: "Estimates only. Actual time depends on model, condition, queue and parts availability.",
    locationTitle: "A real workshop in Patong.",
    locationBody: "Opposite Super Cheap, near the traffic-light intersection by Government Savings Bank. Walk in, arrange your own Grab delivery, or message us before sending a parcel.",
    parking: "Parking note: park in front when permitted. From 16:00–19:00, use the opposite side.",
    faqTitle: "Useful answers before you visit"
  },
  th: {
    kicker: "ร้านซ่อมอุปกรณ์ Apple อิสระ · ป่าตอง ภูเก็ต",
    titleA: "เครื่องมีปัญหา",
    titleB: "แต่แผนของคุณไม่ต้องหยุด",
    intro: "ซ่อม iPhone และ iPad พร้อมตัวเลือกอะไหล่ที่ชัดเจน ตรวจอาการอย่างเป็นระบบ และรองรับงานระดับบอร์ด อธิบายก่อนเริ่มทุกครั้ง",
    chat: "LINE เพื่อประเมินอาการ",
    map: "ดูที่ตั้งร้าน",
    trust: ["ประสบการณ์งานซ่อมกว่า 10 ปี", "พื้นฐานวิศวกรรมคอมพิวเตอร์", "รับ Walk-in", "รองรับแชตภาษาอังกฤษ"],
    servicesTitle: "เริ่มจากอาการของเครื่อง",
    servicesIntro: "งานด่วน เครื่องตกน้ำ งานซ่อมทั่วไป และอาการซับซ้อน ดูแลในเวิร์กช็อปจริงที่ป่าตอง",
    processTitle: "ทุกขั้นตอนอธิบายได้",
    process: [
      ["01", "ทักแชตก่อน", "ส่งรุ่น อาการ รูป และพื้นที่ที่อยู่ผ่านแชต"],
      ["02", "เลือกขอบเขตงาน", "แจ้งค่าตรวจ ตัวเลือกอะไหล่ ข้อจำกัด และเวลาโดยประมาณ"],
      ["03", "อนุมัติก่อนซ่อม", "ไม่ทำงานเพิ่มโดยไม่ได้รับการยืนยัน"],
      ["04", "ทดสอบและรับเครื่อง", "ทดสอบตามงานที่ตกลงและแจ้งประกันเฉพาะงาน"]
    ],
    liquidTitle: "เครื่องตกทะเลหรือตกสระ?",
    liquidBody: "ห้ามชาร์จ ปิดเครื่องเมื่อทำได้อย่างปลอดภัย เลือกได้ทั้งทำความสะอาด/ทำให้แห้งเพื่อลดความชื้น หรือแบบตรวจหาความเสียหายและแนวทางซ่อม ทั้งสองแบบไม่รับประกันว่าเครื่องจะกลับมาใช้งานได้",
    partsTitle: "เลือกอะไหล่จากการใช้งาน ไม่ใช่คำขาย",
    partsBody: "ตัวเลือกอะไหล่แท้ OEM และ Aftermarket แยกประเภทชัดเจน แนะนำตามการใช้งาน งบประมาณ และของที่มี",
    timing: ["จอหรือแบตเตอรี่ทางเลือก", "โดยทั่วไปประมาณ 1 ชั่วโมง", "จอหรือแบตเตอรี่แท้", "โดยทั่วไปประมาณ 2–3 ชั่วโมง", "งานซ่อมระดับบอร์ด", "โดยทั่วไปประมาณ 1–3 วัน"],
    timingNote: "เป็นเวลาโดยประมาณ เวลาจริงขึ้นอยู่กับรุ่น สภาพเครื่อง คิว และอะไหล่",
    locationTitle: "เวิร์กช็อปจริงในป่าตอง",
    locationBody: "ตรงข้าม Super Cheap ใกล้สี่แยกไฟแดงธนาคารออมสิน เข้าร้านได้ ส่ง Grab ด้วยตนเอง หรือทักก่อนส่งพัสดุ",
    parking: "การจอดรถ: จอดหน้าร้านได้ตามเวลาที่อนุญาต ช่วง 16:00–19:00 น. ให้จอดฝั่งตรงข้าม",
    faqTitle: "คำตอบที่ควรรู้ก่อนเข้าร้าน"
  }
} satisfies Record<Locale, Record<string, string | string[] | string[][]>>;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "iPhone Repair Patong Phuket" : "ซ่อม iPhone ป่าตอง ภูเก็ต",
    description: isEn ? "Independent iPhone repair in Patong, Phuket for screens, batteries, liquid damage and logic board faults. Walk-ins welcome." : "ร้านซ่อม iPhone ป่าตอง ภูเก็ต งานจอ แบตเตอรี่ เครื่องตกน้ำ และเมนบอร์ด รับ Walk-in พร้อมอธิบายตัวเลือกก่อนซ่อม",
    alternates: { canonical: `/${locale}/`, languages: { en: "/en/", th: "/th/", "x-default": "/en/" } },
    openGraph: { url: `/${locale}/`, title: isEn ? "TK Mobile Service — iPhone Repair Patong" : "TK Mobile Service — ซ่อม iPhone ป่าตอง", description: isEn ? "Quality repairs. Transparent choices." : "งานซ่อมคุณภาพ ทางเลือกที่โปร่งใส" }
  };
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = homeCopy[locale];
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsStore"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    url: `${site.url}/${locale}/`,
    telephone: site.phoneE164,
    address: { "@type": "PostalAddress", streetAddress: "67/25 Phrabaramee Road", addressLocality: "Pa Tong", addressRegion: "Phuket", postalCode: "83150", addressCountry: "TH" },
    openingHoursSpecification: openingHours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${h.day}`, opens: h.opens, closes: h.closes })),
    founder: { "@type": "Person", name: locale === "en" ? "Technician Arm" : "ช่างอาร์ม", jobTitle: "Lead repair technician", knowsAbout: ["iPhone repair", "logic board repair", "microsoldering", "electronics diagnostics"] },
    areaServed: ["Patong", "Phuket", "Phang Nga", "Krabi"],
    sameAs: [site.social.facebook, site.social.x, site.social.line],
    paymentAccepted: "Cash, Thai bank transfer, QR payment",
    currenciesAccepted: "THB"
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs[locale].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <JsonLd data={[localBusiness, faqSchema]} />
      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <span className="eyebrow">{c.kicker}</span>
            <h1>{c.titleA}<br /><em>{c.titleB}</em></h1>
            <p className="lead">{c.intro}</p>
            <div className="hero-actions">
              <TrackedLink event={locale === "en" ? "click_whatsapp" : "click_line"} className="button" href={chatLink(locale)} target="_blank" rel="noreferrer">{c.chat}<ArrowRight /></TrackedLink>
              <TrackedLink event="click_directions" className="text-link" href={site.social.maps} target="_blank" rel="noreferrer">{c.map}<ArrowRight /></TrackedLink>
            </div>
          </div>
          <div className="hero-visual" aria-label={locale === "en" ? "Repair capability overview" : "ภาพรวมความสามารถงานซ่อม"}>
            <div className="device-frame"><div className="device-screen"><CircleGauge /><span>DIAGNOSTIC</span><b>01</b></div></div>
            <div className="tool-card tool-card-a"><Microscope /><b>{locale === "en" ? "Board-level" : "ระดับบอร์ด"}</b><small>MICROSOLDERING</small></div>
            <div className="tool-card tool-card-b"><ShieldCheck /><b>{locale === "en" ? "Clear scope" : "ขอบเขตชัดเจน"}</b><small>BEFORE WE BEGIN</small></div>
            <div className="yellow-orbit" />
          </div>
        </div>
        <div className="trust-row shell">{(c.trust as string[]).map((item) => <span key={item}><i />{item}</span>)}</div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading"><span className="eyebrow">01 — {locale === "en" ? "Services" : "บริการ"}</span><h2>{c.servicesTitle}</h2><p>{c.servicesIntro}</p></div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = [Smartphone, BatteryCharging, Wrench][i];
            return <a className="service-card" href={localPath(locale, "services")} key={service.slug}><span className="service-icon"><Icon /></span><small>{service.eyebrow[locale]}</small><h3>{service.title[locale]}</h3><p>{service.description[locale]}</p><span className="card-link">{locale === "en" ? "Explore service" : "ดูรายละเอียด"} <ArrowRight /></span></a>;
          })}
        </div>
      </section>

      <section className="dark-section">
        <div className="section shell">
          <div className="section-heading light"><span className="eyebrow">02 — {locale === "en" ? "Process" : "ขั้นตอน"}</span><h2>{c.processTitle}</h2></div>
          <div className="process-grid">{(c.process as string[][]).map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="split-feature shell">
        <div className="liquid-visual"><Droplets /><span>LIQUID<br />DAMAGE</span><b>2</b><small>{locale === "en" ? "clear service levels" : "ระดับบริการชัดเจน"}</small></div>
        <div className="feature-copy"><span className="eyebrow">03 — {locale === "en" ? "Urgent care" : "งานเร่งด่วน"}</span><h2>{c.liquidTitle}</h2><p>{c.liquidBody}</p><a className="text-link" href={localPath(locale, "liquid-damage")}>{locale === "en" ? "Compare the two options" : "เปรียบเทียบ 2 ตัวเลือก"} <ArrowRight /></a></div>
      </section>

      <section className="parts-section">
        <div className="section shell">
          <div className="parts-grid">
            <div><span className="eyebrow">04 — {locale === "en" ? "Parts & timing" : "อะไหล่และเวลา"}</span><h2>{c.partsTitle}</h2><p>{c.partsBody}</p><div className="parts-pills"><span>GENUINE</span><span>OEM</span><span>AFTERMARKET</span></div></div>
            <div className="timing-list">
              {(c.timing as string[]).reduce<React.ReactNode[]>((acc, item, index, arr) => {
                if (index % 2 === 0) acc.push(<div key={item}><b>{item}</b><span>{arr[index + 1]}</span></div>);
                return acc;
              }, [])}
              <small>{c.timingNote}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="location-preview shell">
        <div><span className="eyebrow">05 — PATONG, PHUKET</span><h2>{c.locationTitle}</h2><p>{c.locationBody}</p><div className="parking-note">{c.parking}</div><a className="button button-dark" href={localPath(locale, "location")}>{locale === "en" ? "Plan your visit" : "ดูข้อมูลการเดินทาง"}<ArrowRight /></a></div>
        <a className="map-panel" href={site.social.maps} target="_blank" rel="noreferrer"><div className="map-grid" /><span className="road road-a" /><span className="road road-b" /><span className="map-pin"><b>TK</b></span><div className="map-label"><b>67/25 Phrabaramee Rd</b><small>PA TONG · PHUKET</small></div></a>
      </section>

      <section className="faq-section section shell"><div className="section-heading"><span className="eyebrow">06 — FAQ</span><h2>{c.faqTitle}</h2></div><div className="faq-list">{faqs[locale].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
      <ContactStrip locale={locale} />
    </>
  );
}
