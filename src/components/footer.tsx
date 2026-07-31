import { MapPin, Phone } from "lucide-react";
import type { Locale } from "@/config/site";
import { chatLink, site } from "@/config/site";
import { copy, localPath } from "@/lib/i18n";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <footer className="footer">
        <div className="footer-grid shell">
          <div><Logo locale={locale} /><p>{locale === "en" ? "Quality repairs. Transparent choices." : "งานซ่อมคุณภาพ ทางเลือกที่โปร่งใส"}</p></div>
          <div><h2>{locale === "en" ? "Visit" : "หน้าร้าน"}</h2><p>{site.address[locale]}</p><p>{c.open}<br />{c.closed}</p></div>
          <div><h2>{locale === "en" ? "Contact" : "ติดต่อ"}</h2><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a><br /><a href={site.social.line}>LINE {site.lineId}</a><br /><a href={site.social.whatsapp}>WhatsApp</a></div>
          <div><h2>{locale === "en" ? "Repairs" : "งานซ่อม"}</h2>
            <a href={localPath(locale, "iphone-screen-repair")}>{locale === "en" ? "iPhone screen" : "เปลี่ยนจอ iPhone"}</a><br />
            <a href={localPath(locale, "iphone-battery-replacement")}>{locale === "en" ? "iPhone battery" : "เปลี่ยนแบต iPhone"}</a><br />
            <a href={localPath(locale, "logic-board-repair")}>{locale === "en" ? "Logic board" : "ซ่อมเมนบอร์ด"}</a><br />
            <a href={localPath(locale, "liquid-damage")}>{c.nav.liquid}</a><br />
            <a href={localPath(locale, "ipad-repair")}>{locale === "en" ? "iPad repair" : "ซ่อม iPad"}</a><br />
            <a href={localPath(locale, "macbook-repair")}>{locale === "en" ? "MacBook repair" : "ซ่อม MacBook"}</a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} TK Mobile Service</span>
          <span>{locale === "en" ? "Independent repair business. Not Apple Authorized." : "ร้านซ่อมอิสระ ไม่ใช่ศูนย์บริการที่ได้รับอนุญาตจาก Apple"} · <a href={localPath(locale, "privacy")}>{locale === "en" ? "Privacy" : "ความเป็นส่วนตัว"}</a></span>
        </div>
      </footer>
      <div className="mobile-actions" aria-label="Quick contact">
        <TrackedLink event="click_call" href={`tel:${site.phoneE164}`}><Phone /><span>{c.call}</span></TrackedLink>
        <TrackedLink event={locale === "en" ? "click_whatsapp" : "click_line"} className="primary" href={chatLink(locale)} target="_blank" rel="noreferrer"><span className="chat-glyph">↗</span><span>{c.chat}</span></TrackedLink>
        <TrackedLink event="click_directions" href={site.social.maps} target="_blank" rel="noreferrer"><MapPin /><span>{c.directions}</span></TrackedLink>
      </div>
    </>
  );
}
