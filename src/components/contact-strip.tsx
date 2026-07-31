import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/config/site";
import { chatLink, site } from "@/config/site";
import { copy } from "@/lib/i18n";
import { TrackedLink } from "./tracked-link";

export function ContactStrip({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <section className="contact-strip">
      <div className="shell contact-strip-inner">
        <div>
          <span className="eyebrow">{locale === "en" ? "Tell us the model + symptom" : "ส่งรุ่น + อาการให้ร้าน"}</span>
          <h2>{locale === "en" ? "Start with a clear assessment." : "เริ่มจากการประเมินที่ชัดเจน"}</h2>
          <p>{locale === "en" ? "Send photos in chat. We’ll explain the likely options, inspection scope and warranty before work." : "ส่งรูปผ่านแชต ร้านจะอธิบายตัวเลือก ขอบเขตการตรวจ และการรับประกันก่อนเริ่มงาน"}</p>
        </div>
        <div className="contact-buttons">
          <TrackedLink event={locale === "en" ? "click_whatsapp" : "click_line"} className="button" href={chatLink(locale)} target="_blank" rel="noreferrer"><MessageCircle />{c.chat}</TrackedLink>
          <TrackedLink event="click_call" className="button button-secondary" href={`tel:${site.phoneE164}`}><Phone />{c.call}</TrackedLink>
          <TrackedLink event="click_directions" className="button button-ghost" href={site.social.maps} target="_blank" rel="noreferrer"><MapPin />{c.directions}</TrackedLink>
        </div>
      </div>
    </section>
  );
}
