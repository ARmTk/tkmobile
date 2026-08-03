import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";
import { locales, type Locale } from "@/config/site";
import { localPath } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  const title = en ? "iPhone Repair Guides for Phuket & Patong" : "คู่มือซ่อม iPhone ภูเก็ต ป่าตอง";
  const description = en ? "Practical iPhone repair guides from TK Mobile Service in Patong: liquid damage, cracked screens, battery symptoms and what to do before visiting." : "คู่มือดูแลและเตรียมซ่อม iPhone จาก TK Mobile Service ป่าตอง: เครื่องตกน้ำ จอแตก แบตเตอรี่ และสิ่งที่ควรทำก่อนเข้าร้าน";
  return { title, description, alternates: { canonical: `/${locale}/guides/`, languages: { en: "/en/guides/", th: "/th/guides/", "x-default": "/en/guides/" } } };
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const en = locale === "en";
  return <>
    <section className="guide-index-hero"><div className="shell"><span className="eyebrow">{en ? "TK MOBILE GUIDES" : "คู่มือ TK MOBILE"}</span><h1>{en ? "Clear answers before you repair." : "คำตอบที่ชัดเจน ก่อนตัดสินใจซ่อม"}</h1><p>{en ? "Practical guides for common iPhone problems in Phuket and Patong. Information is general; the exact model and condition must still be checked case by case." : "คู่มือสำหรับอาการ iPhone ที่พบบ่อยในภูเก็ตและป่าตอง ข้อมูลเป็นแนวทางทั่วไป รุ่นและสภาพจริงยังต้องตรวจเป็นรายเครื่อง"}</p></div></section>
    <section className="section shell"><div className="guide-card-grid">{guides.map((guide) => <article className="guide-card" key={guide.slug}><div className="guide-card-image"><Image src={guide.image} alt={guide.imageAlt[locale]} fill sizes="(max-width: 760px) 92vw, 31vw" /><small>{en ? "AI VISUAL CONCEPT" : "ภาพแนวคิด AI"}</small></div><span>{guide.category[locale]}</span><h2>{guide.title[locale]}</h2><p>{guide.excerpt[locale]}</p><a className="text-link" href={localPath(locale, `guides/${guide.slug}`)}>{en ? "Read guide" : "อ่านคู่มือ"}<ArrowRight /></a></article>)}</div></section>
  </>;
}
