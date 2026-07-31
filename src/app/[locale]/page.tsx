import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Clock3, Droplets, GraduationCap, MapPin, MessageCircle, PackageCheck, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { RepairPlanner } from "@/components/repair-planner";
import { TrackedLink } from "@/components/tracked-link";
import { chatLink, openingHours, site, type Locale } from "@/config/site";
import { faqs } from "@/content/content";
import { localPath } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "IPHONE REPAIR · PATONG, PHUKET",
    title: "iPhone repair in Phuket.",
    accent: "Clear before we start.",
    intro: "Independent iPhone and Apple device repair in Patong for tourists and residents. Screens, batteries, charging faults, liquid damage, data recovery and logic board diagnostics — with the scope explained before work.",
    chat: "Get an assessment on WhatsApp",
    map: "Open directions",
    proof: ["10+ years’ repair experience", "Computer Engineering background", "English chat support", "Walk-ins welcome"],
    chooseKicker: "01 — CHOOSE THE FAULT",
    chooseTitle: "Start with what happened to the phone.",
    chooseIntro: "Select the closest symptom to see the likely service path. Times are estimates and must be confirmed with the workshop.",
    travelKicker: "02 — TOURIST REPAIR GUIDE",
    travelTitle: "Phuket is large. Plan before you travel.",
    travelIntro: "TK Mobile Service is in Patong. Message the model, symptom and where you are staying so the shop can confirm the queue, parts and whether Grab delivery is suitable.",
    areas: [
      ["Patong Beach", "About 5–15 minutes", "Best for walk-in or GrabBike"],
      ["Kata / Karon", "About 20–35 minutes", "Message before travelling"],
      ["Kamala", "About 15–25 minutes", "Check traffic and repair queue"],
      ["Bang Tao / Laguna", "About 30–50 minutes", "Consider Grab delivery"],
      ["Phuket Town", "About 25–40 minutes", "Confirm parts before leaving"],
      ["Rawai / Chalong", "About 35–55 minutes", "Plan around traffic"]
    ],
    steps: [
      ["1", "Message the workshop", "Send your device model, symptom, photos and hotel or area."],
      ["2", "Confirm the plan", "Check the queue, likely repair time, part options and inspection scope."],
      ["3", "Walk in or send by Grab", "Arrange and pay for Grab yourself after the shop confirms it can receive the device."],
      ["4", "Approve before repair", "The shop explains the findings and gets approval before additional work."]
    ],
    waterKicker: "03 — URGENT LIQUID DAMAGE",
    waterTitle: "Dropped your iPhone in the sea or pool?",
    waterIntro: "Saltwater and pool water can continue damaging circuits even when the phone appears to work. The safest next step is to reduce power-related risk and arrange prompt assessment.",
    waterDo: ["Power off if it is safe", "Do not charge the phone", "Do not repeatedly test it", "Tell us the liquid type and time"],
    waterDont: ["Do not use heat", "Do not rely on rice", "Do not promise yourself the data is safe", "Do not delay if the data matters"],
    partsKicker: "04 — PARTS & TRANSPARENCY",
    partsTitle: "Choose the repair that fits the device and budget.",
    partsIntro: "Genuine new, genuine pulled, OEM and aftermarket options are described by their actual source, condition, availability and job-specific warranty. TK Mobile Service is independent and is not Apple Authorized.",
    trustKicker: "05 — WHY TK MOBILE",
    trustTitle: "Specialist thinking without vague promises.",
    trustCards: [
      ["Engineering background", "Technician Arm has a Computer Engineering background and more than 10 years of device-repair experience."],
      ["Board-level capability", "Difficult no-power, charging, liquid and data cases can be assessed beyond simple parts replacement."],
      ["Clear approval", "Inspection findings, likely limitations and warranty terms are explained before the agreed work begins."],
      ["Tourist-friendly contact", "English WhatsApp support, directions and customer-arranged Grab delivery help reduce wasted travel."]
    ],
    locationKicker: "06 — PATONG WORKSHOP",
    locationTitle: "A real repair shop in Patong.",
    locationIntro: "67/25 Phrabaramee Road, opposite Super Cheap near the traffic-light intersection by Government Savings Bank.",
    faqTitle: "Questions tourists ask before visiting"
  },
  th: {
    kicker: "ซ่อมไอโฟน · ป่าตอง ภูเก็ต",
    title: "ซ่อมไอโฟนภูเก็ต",
    accent: "ชัดเจนก่อนเริ่มงาน",
    intro: "ร้านซ่อม iPhone และอุปกรณ์ Apple อิสระในป่าตอง สำหรับนักท่องเที่ยวและคนในพื้นที่ งานจอ แบตเตอรี่ ชาร์จไม่เข้า เครื่องตกน้ำ กู้ข้อมูล และเมนบอร์ด พร้อมอธิบายขอบเขตก่อนซ่อม",
    chat: "ประเมินอาการผ่าน LINE",
    map: "เปิดเส้นทาง",
    proof: ["ประสบการณ์งานซ่อมกว่า 10 ปี", "พื้นฐานวิศวกรรมคอมพิวเตอร์", "รองรับแชตภาษาอังกฤษ", "รับ Walk-in"],
    chooseKicker: "01 — เลือกอาการเสีย",
    chooseTitle: "เริ่มจากสิ่งที่เกิดขึ้นกับเครื่อง",
    chooseIntro: "เลือกอาการที่ใกล้เคียงเพื่อดูแนวทางบริการ เวลาเป็นเพียงค่าประมาณและต้องยืนยันกับร้านอีกครั้ง",
    travelKicker: "02 — คู่มือสำหรับนักท่องเที่ยว",
    travelTitle: "ภูเก็ตเดินทางไกล วางแผนก่อนออกจากที่พัก",
    travelIntro: "TK Mobile Service อยู่ป่าตอง ส่งรุ่น อาการ และพื้นที่ที่พักให้ร้านตรวจคิว อะไหล่ และความเหมาะสมในการส่งเครื่องผ่าน Grab ก่อนเดินทาง",
    areas: [
      ["หาดป่าตอง", "ประมาณ 5–15 นาที", "เหมาะกับ Walk-in หรือ GrabBike"],
      ["กะตะ / กะรน", "ประมาณ 20–35 นาที", "ทักร้านก่อนเดินทาง"],
      ["กมลา", "ประมาณ 15–25 นาที", "ตรวจการจราจรและคิวซ่อม"],
      ["บางเทา / ลากูน่า", "ประมาณ 30–50 นาที", "อาจพิจารณาส่งผ่าน Grab"],
      ["ตัวเมืองภูเก็ต", "ประมาณ 25–40 นาที", "ยืนยันอะไหล่ก่อนออกมา"],
      ["ราไวย์ / ฉลอง", "ประมาณ 35–55 นาที", "วางแผนตามการจราจร"]
    ],
    steps: [
      ["1", "ทักร้านก่อน", "ส่งรุ่น อาการ รูป และชื่อโรงแรมหรือพื้นที่ที่พัก"],
      ["2", "ยืนยันแผน", "ตรวจคิว เวลาโดยประมาณ ตัวเลือกอะไหล่ และขอบเขตการตรวจ"],
      ["3", "เข้าร้านหรือส่ง Grab", "ลูกค้าเรียกและชำระ Grab เอง หลังร้านยืนยันว่าสามารถรับเครื่องได้"],
      ["4", "อนุมัติก่อนซ่อม", "ร้านแจ้งผลตรวจ ข้อจำกัด และขออนุมัติก่อนทำงานเพิ่มเติม"]
    ],
    waterKicker: "03 — งานตกน้ำเร่งด่วน",
    waterTitle: "ไอโฟนตกทะเลหรือตกสระในภูเก็ต?",
    waterIntro: "น้ำทะเลและน้ำสระสามารถทำลายวงจรต่อเนื่อง แม้เครื่องยังเปิดได้ ควรลดความเสี่ยงจากไฟและนำมาตรวจโดยเร็ว",
    waterDo: ["ปิดเครื่องเมื่อปลอดภัย", "ห้ามชาร์จเครื่อง", "ไม่เปิดทดสอบซ้ำ", "แจ้งชนิดน้ำและเวลาที่เกิดเหตุ"],
    waterDont: ["ห้ามใช้ความร้อน", "อย่าพึ่งข้าวสาร", "อย่าคิดว่าข้อมูลปลอดภัยแล้ว", "หากข้อมูลสำคัญไม่ควรรอ"],
    partsKicker: "04 — อะไหล่และความโปร่งใส",
    partsTitle: "เลือกงานซ่อมให้เหมาะกับเครื่องและงบประมาณ",
    partsIntro: "อะไหล่แท้ใหม่ แท้แกะ OEM และ Aftermarket จะอธิบายตามแหล่งที่มา สภาพ ความพร้อม และประกันเฉพาะงาน TK Mobile Service เป็นร้านอิสระ ไม่ใช่ศูนย์ Apple Authorized",
    trustKicker: "05 — ทำไมต้อง TK MOBILE",
    trustTitle: "คิดแบบผู้เชี่ยวชาญ โดยไม่ให้คำสัญญาเกินจริง",
    trustCards: [
      ["พื้นฐานวิศวกรรม", "ช่างอาร์มมีพื้นฐานวิศวกรรมคอมพิวเตอร์และประสบการณ์ซ่อมอุปกรณ์มากกว่า 10 ปี"],
      ["รองรับงานระดับบอร์ด", "อาการเปิดไม่ติด ชาร์จไม่เข้า ตกน้ำ และกู้ข้อมูล สามารถตรวจได้ลึกกว่าการเปลี่ยนอะไหล่ทั่วไป"],
      ["อนุมัติก่อนทำงาน", "แจ้งผลตรวจ ข้อจำกัด และเงื่อนไขประกันก่อนเริ่มงานตามที่ตกลง"],
      ["เหมาะกับนักท่องเที่ยว", "รองรับ WhatsApp ภาษาอังกฤษ มีเส้นทาง และส่งเครื่องผ่าน Grab ที่ลูกค้าจัดส่งเอง"]
    ],
    locationKicker: "06 — เวิร์กช็อปป่าตอง",
    locationTitle: "ร้านซ่อมจริงในป่าตอง",
    locationIntro: "67/25 ถนนพระบารมี ตรงข้าม Super Cheap ใกล้สี่แยกไฟแดงธนาคารออมสิน",
    faqTitle: "คำถามที่นักท่องเที่ยวถามก่อนเข้าร้าน"
  }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  const title = en ? "iPhone Repair Phuket & Patong | TK Mobile Service" : "ซ่อมไอโฟนภูเก็ต ป่าตอง | TK Mobile Service";
  const description = en
    ? "Independent iPhone repair in Patong, Phuket: screen, battery, charging, water damage, data recovery and logic board diagnostics. English support and walk-ins."
    : "ร้านซ่อมไอโฟนภูเก็ต ป่าตอง งานจอ แบตเตอรี่ ชาร์จไม่เข้า ตกน้ำ กู้ข้อมูล และเมนบอร์ด รองรับนักท่องเที่ยว Walk-in และส่งผ่าน Grab";
  return {
    title,
    description,
    keywords: en
      ? ["iphone repair phuket", "iphone repair patong", "phone repair phuket", "iphone screen repair phuket", "iphone battery replacement phuket", "water damaged iphone phuket", "iphone logic board repair phuket"]
      : ["ซ่อมไอโฟนภูเก็ต", "ซ่อมไอโฟนป่าตอง", "ร้านซ่อมไอโฟนภูเก็ต", "เปลี่ยนจอไอโฟนภูเก็ต", "เปลี่ยนแบตไอโฟนภูเก็ต", "ไอโฟนตกน้ำภูเก็ต", "ซ่อมเมนบอร์ดไอโฟนภูเก็ต"],
    alternates: { canonical: `/${locale}/`, languages: { en: "/en/", th: "/th/", "x-default": "/en/" } },
    openGraph: { url: `/${locale}/`, title, description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "TK Mobile Service iPhone Repair Patong Phuket" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] }
  };
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = copy[locale];
  const en = locale === "en";
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsStore"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/${locale}/`,
    telephone: site.phoneE164,
    address: { "@type": "PostalAddress", streetAddress: "67/25 Phrabaramee Road", addressLocality: "Pa Tong", addressRegion: "Phuket", postalCode: "83150", addressCountry: "TH" },
    openingHoursSpecification: openingHours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${h.day}`, opens: h.opens, closes: h.closes })),
    areaServed: ["Patong", "Phuket", "Kata", "Karon", "Kamala", "Bang Tao", "Rawai", "Chalong", "Phuket Town"],
    founder: { "@type": "Person", name: en ? "Technician Arm" : "ช่างอาร์ม", knowsAbout: ["iPhone repair", "logic board repair", "microsoldering", "electronics diagnostics"] },
    sameAs: [site.social.facebook, site.social.x, site.social.line],
    paymentAccepted: "Cash, Thai bank transfer, QR payment",
    currenciesAccepted: "THB"
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs[locale].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

  return (
    <>
      <JsonLd data={[businessSchema, faqSchema]} />

      <section className="new-hero">
        <div className="shell new-hero-grid">
          <div className="new-hero-copy">
            <span className="eyebrow">{c.kicker}</span>
            <h1>{c.title}<br /><em>{c.accent}</em></h1>
            <p className="lead">{c.intro}</p>
            <div className="hero-actions">
              <TrackedLink event={en ? "click_whatsapp" : "click_line"} className="button" href={chatLink(locale)} target="_blank" rel="noreferrer">{c.chat}<ArrowRight /></TrackedLink>
              <TrackedLink event="click_directions" className="button button-secondary" href={site.social.maps} target="_blank" rel="noreferrer"><MapPin />{c.map}</TrackedLink>
            </div>
            <p className="hero-disclaimer">{en ? "Independent repair shop · Not Apple Authorized · Estimates must be confirmed" : "ร้านซ่อมอิสระ · ไม่ใช่ศูนย์ Apple Authorized · กรุณายืนยันข้อมูลก่อนใช้บริการ"}</p>
          </div>
          <div className="storefront-hero-media">
            <Image
              src="/images/tk-mobile-storefront-original-v1.jpg"
              alt={en ? "TK Mobile Service storefront on Phrabaramee Road in Patong, Phuket" : "หน้าร้าน TK Mobile Service ถนนพระบารมี ป่าตอง ภูเก็ต"}
              fill
              priority
              sizes="(max-width: 760px) 92vw, 42vw"
            />
            <div className="storefront-shade" />
            <div className="storefront-proof">
              <span><i />{en ? "REAL WORKSHOP" : "หน้าร้านจริง"}</span>
              <strong>{en ? "Patong · Phuket" : "ป่าตอง · ภูเก็ต"}</strong>
              <small>{en ? "67/25 Phrabaramee Road" : "67/25 ถนนพระบารมี"}</small>
            </div>
            <div className="storefront-crop-note">{en ? "Actual storefront photo" : "ภาพถ่ายสถานที่จริง"}</div>
          </div>
        </div>
        <div className="proof-strip shell">{c.proof.map((item) => <span key={item}><Check />{item}</span>)}</div>
      </section>

      <section className="section shell">
        <div className="section-heading wide">
          <span className="eyebrow">{c.chooseKicker}</span>
          <h2>{c.chooseTitle}</h2>
          <p>{c.chooseIntro}</p>
        </div>
        <RepairPlanner locale={locale} />
      </section>

      <section className="travel-section">
        <div className="section shell">
          <div className="travel-heading">
            <div><span className="eyebrow">{c.travelKicker}</span><h2>{c.travelTitle}</h2><p>{c.travelIntro}</p></div>
            <TrackedLink event={en ? "click_whatsapp" : "click_line"} className="button button-dark" href={chatLink(locale)} target="_blank" rel="noreferrer"><MessageCircle />{en ? "Send model + area" : "ส่งรุ่น + พื้นที่"}</TrackedLink>
          </div>
          <div className="area-grid">{c.areas.map(([area, time, note]) => <article key={area}><MapPin /><h3>{area}</h3><b>{time}</b><p>{note}</p></article>)}</div>
          <div className="journey-grid">{c.steps.map(([n, title, body]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
          <p className="estimate-note">{en ? "Travel times are broad planning estimates only. Traffic, weather and your exact pickup point can change them." : "เวลาเดินทางเป็นค่าประมาณกว้าง ๆ เพื่อช่วยวางแผน การจราจร สภาพอากาศ และจุดรับจริงอาจทำให้เวลาเปลี่ยนได้"}</p>
        </div>
      </section>

      <section className="water-emergency">
        <div className="shell water-grid">
          <div className="water-copy"><span className="eyebrow">{c.waterKicker}</span><h2>{c.waterTitle}</h2><p>{c.waterIntro}</p><a className="button" href={localPath(locale, "liquid-damage")}>{en ? "Read the liquid-damage guide" : "อ่านคู่มือเครื่องตกน้ำ"}<ArrowRight /></a></div>
          <div className="water-actions">
            <div><Droplets /><h3>{en ? "Do now" : "ควรทำ"}</h3>{c.waterDo.map((x) => <p key={x}><Check />{x}</p>)}</div>
            <div className="avoid"><ShieldCheck /><h3>{en ? "Avoid" : "ควรหลีกเลี่ยง"}</h3>{c.waterDont.map((x) => <p key={x}><span>×</span>{x}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="section shell parts-story">
        <div><span className="eyebrow">{c.partsKicker}</span><h2>{c.partsTitle}</h2><p>{c.partsIntro}</p><a className="text-link" href={localPath(locale, "services")}>{en ? "Compare services and parts" : "เปรียบเทียบบริการและอะไหล่"}<ArrowRight /></a></div>
        <div className="part-stack">
          {[["01","GENUINE NEW"],["02","GENUINE PULLED"],["03","OEM"],["04","AFTERMARKET"]].map(([n, name]) => <div key={name}><span>{n}</span><b>{name}</b><small>{en ? "Availability and warranty confirmed per job" : "ยืนยันความพร้อมและประกันตามงาน"}</small></div>)}
        </div>
      </section>

      <section className="trust-section">
        <div className="section shell">
          <div className="section-heading light"><span className="eyebrow">{c.trustKicker}</span><h2>{c.trustTitle}</h2></div>
          <div className="trust-card-grid">
            {c.trustCards.map(([title, body], index) => {
              const Icon = [GraduationCap, Wrench, ShieldCheck, Smartphone][index];
              return <article key={title}><Icon /><h3>{title}</h3><p>{body}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section shell location-story">
        <div><span className="eyebrow">{c.locationKicker}</span><h2>{c.locationTitle}</h2><p>{c.locationIntro}</p><div className="location-actions"><a className="button button-dark" href={localPath(locale, "location")}>{en ? "Plan your visit" : "วางแผนเข้าร้าน"}<ArrowRight /></a><a className="text-link" href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></div></div>
        <div className="location-console">
          <div><Clock3 /><span>{en ? "OPEN" : "เปิด"}</span><b>{en ? "SUN–FRI" : "อา.–ศ."}</b><small>11:00–20:00</small></div>
          <div><MapPin /><span>PATONG</span><b>67/25</b><small>PHRABARAMEE ROAD</small></div>
          <div><PackageCheck /><span>GRAB</span><b>{en ? "CONFIRM FIRST" : "ทักก่อนส่ง"}</b><small>{en ? "CUSTOMER-ARRANGED" : "ลูกค้าเรียกเอง"}</small></div>
        </div>
      </section>

      <section className="faq-section section shell">
        <div className="section-heading"><span className="eyebrow">07 — FAQ</span><h2>{c.faqTitle}</h2></div>
        <div className="faq-list">{faqs[locale].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>
      <ContactStrip locale={locale} />
    </>
  );
}
