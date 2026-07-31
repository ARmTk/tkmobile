"use client";

import { AlertTriangle, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";

export function DevelopmentNotice({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const en = locale === "en";

  useEffect(() => {
    if (open) buttonRef.current?.focus();
  }, [open]);

  return (
    <>
      <div className="development-ribbon" role="status">
        <AlertTriangle aria-hidden="true" />
        <span>
          {en
            ? "Website under development — please confirm service details before visiting."
            : "เว็บไซต์กำลังพัฒนา — กรุณายืนยันรายละเอียดกับร้านก่อนเดินทาง"}
        </span>
      </div>
      {open && (
        <div className="notice-backdrop" role="presentation">
          <section
            className="development-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="development-title"
            aria-describedby="development-description"
          >
            <button
              className="notice-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label={en ? "Close notice" : "ปิดประกาศ"}
            >
              <X />
            </button>
            <span className="notice-icon"><AlertTriangle /></span>
            <p className="notice-kicker">{en ? "IMPORTANT NOTICE" : "ประกาศสำคัญ"}</p>
            <h2 id="development-title">
              {en ? "This website is still being developed." : "เว็บไซต์นี้กำลังอยู่ระหว่างการพัฒนา"}
            </h2>
            <p id="development-description">
              {en
                ? "Some service information, prices, repair times, opening hours and availability may be incomplete or inaccurate. Please confirm the latest details with TK Mobile Service through WhatsApp or LINE before travelling, sending a device or making a decision."
                : "ข้อมูลบริการ ราคา ระยะเวลาซ่อม เวลาเปิดทำการ และความพร้อมของอะไหล่บางส่วนอาจยังไม่ครบถ้วนหรือไม่ถูกต้อง กรุณายืนยันข้อมูลล่าสุดกับ TK Mobile Service ผ่าน LINE หรือ WhatsApp ก่อนเดินทาง ส่งเครื่อง หรือตัดสินใจใช้บริการ"}
            </p>
            <button ref={buttonRef} className="button notice-accept" type="button" onClick={() => setOpen(false)}>
              {en ? "I understand — view the website" : "รับทราบ — เข้าชมเว็บไซต์"}
              <ArrowRight />
            </button>
            <small>
              {en
                ? "This notice appears again whenever you enter or reload the website."
                : "ประกาศนี้จะแสดงใหม่ทุกครั้งที่เข้าเว็บไซต์หรือโหลดหน้าใหม่"}
            </small>
          </section>
        </div>
      )}
    </>
  );
}
