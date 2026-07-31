"use client";

import { ArrowRight, BatteryCharging, CircleGauge, Database, Droplets, PlugZap, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { chatLink, type Locale } from "@/config/site";
import { TrackedLink } from "./tracked-link";

const repairOptions = {
  screen: {
    icon: Smartphone,
    en: { tab: "Screen", eyebrow: "IPHONE SCREEN REPAIR PHUKET", title: "Cracked, black or unresponsive screen", body: "Screen options are explained by model, display grade, availability and the testing needed after installation.", time: "Often around 1–3 hours", cta: "Check screen availability" },
    th: { tab: "หน้าจอ", eyebrow: "เปลี่ยนจอไอโฟนภูเก็ต", title: "จอแตก จอดำ ทัชไม่ได้ หรือมีเส้น", body: "อธิบายตัวเลือกจอตามรุ่น เกรดอะไหล่ ของที่มี และการทดสอบหลังติดตั้ง", time: "โดยทั่วไปประมาณ 1–3 ชั่วโมง", cta: "เช็กจอและคิวซ่อม" }
  },
  battery: {
    icon: BatteryCharging,
    en: { tab: "Battery", eyebrow: "IPHONE BATTERY REPLACEMENT PHUKET", title: "Fast drain, shutdowns or service warning", body: "Battery proposals depend on the exact model, part choice, diagnostic result and current stock.", time: "Often around 1–3 hours", cta: "Check battery availability" },
    th: { tab: "แบตเตอรี่", eyebrow: "เปลี่ยนแบตไอโฟนภูเก็ต", title: "แบตหมดเร็ว ดับเอง หรือขึ้น Service", body: "ประเมินตามรุ่น ตัวเลือกอะไหล่ ผลการตรวจ และสต็อกปัจจุบัน", time: "โดยทั่วไปประมาณ 1–3 ชั่วโมง", cta: "เช็กแบตและคิวซ่อม" }
  },
  charging: {
    icon: PlugZap,
    en: { tab: "Charging", eyebrow: "IPHONE CHARGING PORT REPAIR PHUKET", title: "Not charging or connection intermittent", body: "The cause may be debris, a cable, the charging port, battery or board. Diagnosis comes before replacement.", time: "Timing after inspection", cta: "Describe the charging fault" },
    th: { tab: "ชาร์จไม่เข้า", eyebrow: "ซ่อมไอโฟนชาร์จไม่เข้าภูเก็ต", title: "ชาร์จไม่เข้า สายหลวม หรือติด ๆ ดับ ๆ", body: "สาเหตุอาจมาจากสิ่งสกปรก สาย พอร์ต แบตเตอรี่ หรือเมนบอร์ด จึงต้องตรวจก่อนเปลี่ยน", time: "แจ้งเวลาหลังตรวจอาการ", cta: "ส่งอาการชาร์จไม่เข้า" }
  },
  liquid: {
    icon: Droplets,
    en: { tab: "Water", eyebrow: "WATER-DAMAGED IPHONE REPAIR PHUKET", title: "Dropped in the sea, pool or rain", body: "Power it off if safe and do not charge it. Liquid damage needs prompt cleaning and a risk-based diagnostic plan.", time: "Urgent assessment", cta: "Get urgent liquid advice" },
    th: { tab: "ตกน้ำ", eyebrow: "ไอโฟนตกน้ำภูเก็ต", title: "ตกทะเล ตกสระ หรือโดนฝน", body: "ปิดเครื่องเมื่อปลอดภัยและห้ามชาร์จ งานตกน้ำควรทำความสะอาดและวางแผนตรวจตามความเสี่ยงโดยเร็ว", time: "ควรประเมินเร่งด่วน", cta: "ขอคำแนะนำด่วน" }
  },
  board: {
    icon: CircleGauge,
    en: { tab: "Board", eyebrow: "IPHONE LOGIC BOARD REPAIR PHUKET", title: "No power, boot loop or complex hardware fault", body: "Board-level diagnostics and microsoldering are assessed case by case, with approval before repair.", time: "Often around 1–3 days", cta: "Request board diagnostics" },
    th: { tab: "เมนบอร์ด", eyebrow: "ซ่อมเมนบอร์ดไอโฟนภูเก็ต", title: "เปิดไม่ติด บูตวน หรืออาการซับซ้อน", body: "ตรวจระดับบอร์ดและงานไมโครโซลเดอริงเป็นรายกรณี พร้อมขออนุมัติก่อนซ่อม", time: "โดยทั่วไปประมาณ 1–3 วัน", cta: "ขอตรวจเมนบอร์ด" }
  },
  data: {
    icon: Database,
    en: { tab: "Data", eyebrow: "IPHONE DATA RECOVERY PHUKET", title: "The phone matters. The data matters more.", body: "Data-recovery possibilities depend on the storage, board condition, encryption and previous repair attempts.", time: "Case-by-case assessment", cta: "Discuss data recovery" },
    th: { tab: "กู้ข้อมูล", eyebrow: "กู้ข้อมูลไอโฟนภูเก็ต", title: "เครื่องสำคัญ แต่ข้อมูลอาจสำคัญกว่า", body: "โอกาสกู้ข้อมูลขึ้นอยู่กับหน่วยความจำ สภาพบอร์ด การเข้ารหัส และประวัติการซ่อม", time: "ประเมินเป็นรายกรณี", cta: "สอบถามการกู้ข้อมูล" }
  }
} as const;

type RepairKey = keyof typeof repairOptions;

export function RepairPlanner({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<RepairKey>("screen");
  const item = repairOptions[active][locale];
  const Icon = repairOptions[active].icon;
  const en = locale === "en";
  const link = useMemo(() => chatLink(locale), [locale]);

  return (
    <div className="repair-planner" aria-label={en ? "Choose a repair type" : "เลือกประเภทงานซ่อม"}>
      <div className="repair-tabs" role="tablist" aria-label={en ? "Repair issue" : "อาการเสีย"}>
        {(Object.keys(repairOptions) as RepairKey[]).map((key) => {
          const TabIcon = repairOptions[key].icon;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              className={active === key ? "active" : ""}
              onClick={() => setActive(key)}
            >
              <TabIcon /><span>{repairOptions[key][locale].tab}</span>
            </button>
          );
        })}
      </div>
      <div className="repair-result" role="tabpanel">
        <span className="repair-result-icon"><Icon /></span>
        <div>
          <small>{item.eyebrow}</small>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <div className="repair-result-meta">
            <span><CircleGauge />{item.time}</span>
            <span>{en ? "Quote approved before work" : "อนุมัติราคาก่อนเริ่มงาน"}</span>
          </div>
          <TrackedLink event={en ? "click_whatsapp" : "click_line"} className="button" href={link} target="_blank" rel="noreferrer">
            {item.cta}<ArrowRight />
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
