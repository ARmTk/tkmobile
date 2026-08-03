"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { chatLink, site } from "@/config/site";
import { copy, localPath, otherLocale } from "@/lib/i18n";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [design, setDesign] = useState<"clean" | "signature">(() => typeof window !== "undefined" && window.localStorage.getItem("tk-design-version") === "signature" ? "signature" : "clean");
  const pathname = usePathname();
  const c = copy[locale];
  const other = otherLocale(locale);
  const alternate = pathname.replace(`/${locale}/`, `/${other}/`);
  useEffect(() => {
    document.documentElement.dataset.design = design;
    window.localStorage.setItem("tk-design-version", design);
  }, [design]);
  const changeDesign = () => {
    const next = design === "clean" ? "signature" : "clean";
    setDesign(next);
  };
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
          <button className="design-switch" type="button" onClick={changeDesign} aria-label={locale === "en" ? "Switch website design version" : "สลับเวอร์ชันดีไซน์เว็บไซต์"}>
            <Sparkles />
            <span>{design === "clean" ? (locale === "en" ? "Clean White" : "ขาวสะอาด") : (locale === "en" ? "Signature" : "ซิกเนเจอร์")}</span>
          </button>
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
