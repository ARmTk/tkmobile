import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { TrackedLink } from "@/components/tracked-link";
import { chatLink, locales, site, type Locale } from "@/config/site";
import { guideBySlug, guides } from "@/content/guides";
import { localPath, otherLocale } from "@/lib/i18n";

export function generateStaticParams() { return locales.flatMap((locale) => guides.map((guide) => ({ locale, slug: guide.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) return {};
  return { title: guide.title[locale], description: guide.description[locale], alternates: { canonical: `/${locale}/guides/${slug}/`, languages: { en: `/en/guides/${slug}/`, th: `/th/guides/${slug}/`, "x-default": `/en/guides/${slug}/` } }, openGraph: { title: guide.title[locale], description: guide.description[locale], images: [{ url: guide.image, alt: guide.imageAlt[locale] }] } };
}

export default async function GuidePage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();
  const en = locale === "en";
  const alternateLocale = otherLocale(locale);
  const url = `${site.url}/${locale}/guides/${slug}/`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: guide.title[locale], description: guide.description[locale], datePublished: guide.published, dateModified: guide.published, inLanguage: locale, mainEntityOfPage: url, image: `${site.url}${guide.image}`, author: { "@type": "Organization", name: site.shortName }, publisher: { "@id": `${site.url}/#business` } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faq[locale].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
  ];
  return <>
    <JsonLd data={schema} />
    <article className="guide-article">
      <header className="guide-hero"><div className="shell guide-hero-grid"><div><a className="guide-back" href={localPath(locale, "guides")}>{en ? "Guides" : "คู่มือ"}</a><span className="eyebrow">{guide.category[locale]} · PATONG, PHUKET</span><h1>{guide.title[locale]}</h1><p>{guide.lead[locale]}</p><div className="guide-hero-actions"><TrackedLink event={en ? "click_whatsapp" : "click_line"} className="button" href={chatLink(locale)} target="_blank" rel="noreferrer"><MessageCircle />{en ? "Ask about this symptom" : "สอบถามอาการนี้"}</TrackedLink><a className="button button-secondary" href={`/${alternateLocale}/guides/${slug}/`} hrefLang={alternateLocale}>{alternateLocale === "th" ? "ไทย" : "EN"}</a></div></div><div className="guide-hero-image"><Image src={guide.image} alt={guide.imageAlt[locale]} fill priority sizes="(max-width: 760px) 92vw, 42vw" /><span>{en ? "AI VISUAL CONCEPT" : "ภาพแนวคิด AI"}</span></div></div></header>
      <div className="guide-content shell"><div className="guide-reading">{guide.sections.map((section) => <section key={section.title[locale]}><h2>{section.title[locale]}</h2>{section.paragraphs[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets[locale].map((item) => <li key={item}><Check />{item}</li>)}</ul>}</section>)}<section className="guide-service-callout"><span className="eyebrow">{en ? "NEXT STEP" : "ขั้นตอนถัดไป"}</span><h2>{en ? "Get the model and symptoms checked before you travel." : "ให้ร้านตรวจรุ่นและอาการก่อนเดินทาง"}</h2><p>{en ? "The exact repair path, parts, queue, time and warranty depend on the model and condition. Confirm them in chat before sending or bringing in the device." : "แนวทางซ่อม อะไหล่ คิว เวลา และประกัน ขึ้นอยู่กับรุ่นและสภาพ ยืนยันผ่านแชตก่อนส่งหรือเข้าร้าน"}</p><a className="button button-dark" href={localPath(locale, guide.serviceSlug)}>{guide.serviceLabel[locale]}<ArrowRight /></a></section></div><aside className="guide-sidebar"><div><span>{en ? "PATONG WORKSHOP" : "เวิร์กช็อปป่าตอง"}</span><b>{site.phoneDisplay}</b><p>{en ? "Sun–Fri · 11:00–20:00" : "อา.–ศ. · 11:00–20:00 น."}</p><a className="text-link" href={site.social.maps} target="_blank" rel="noreferrer">{en ? "Open directions" : "เปิดเส้นทาง"}<ArrowRight /></a></div></aside></div>
      <section className="guide-faq-section"><div className="shell"><span className="eyebrow">FAQ</span><h2>{en ? "Common questions" : "คำถามที่พบบ่อย"}</h2><div className="guide-faq">{guide.faq[locale].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    </article>
  </>;
}
