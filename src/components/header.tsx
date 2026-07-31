"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { chatLink, site } from "@/config/site";
import { copy, localPath, otherLocale } from "@/lib/i18n";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const c = copy[locale];
  const other = otherLocale(locale);
  const alternate = pathname.replace(`/${locale}/`, `/${other}/`);
  const links = locale === "en"
    ? [
        ["Screen", localPath(locale, "iphone-screen-repair")],
        ["Battery", localPath(locale, "iphone-battery-replacement")],
        ["Water damage", localPath(locale, "liquid-damage")],
        ["Board repair", localPath(locale, "logic-board-repair")],
        ["Visit us", localPath(locale, "location")]
      ]
    : [
        ["เปลี่ยนจอ", localPath(locale, "iphone-screen-repair")],
        ["เปลี่ยนแบต", localPath(locale, "iphone-battery-replacement")],
        ["เครื่องตกน้ำ", localPath(locale, "liquid-damage")],
        ["ซ่อมเมนบอร์ด", localPath(locale, "logic-board-repair")],
        ["หน้าร้าน", localPath(locale, "location")]
      ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo locale={locale} />
        <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="language" href={alternate} hrefLang={other}>{other === "th" ? "ไทย" : "EN"}</a>
          <TrackedLink className="button button-small" event={locale === "en" ? "click_whatsapp" : "click_line"} href={chatLink(locale)} target="_blank" rel="noreferrer">
            {c.chat}
          </TrackedLink>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="status-bar">
        <span><i className="status-dot" />{c.open}</span>
        <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
      </div>
    </header>
  );
}
