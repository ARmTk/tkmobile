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
  const links = [
    [c.nav.home, localPath(locale)],
    [c.nav.services, localPath(locale, "services")],
    [c.nav.liquid, localPath(locale, "liquid-damage")],
    [c.nav.location, localPath(locale, "location")],
    [c.nav.about, localPath(locale, "about")]
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
