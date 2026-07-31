import Link from "next/link";
import type { Locale } from "@/config/site";

export function Logo({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <Link className="logo" href={`/${locale}/`} aria-label="TK Mobile Service home">
      <span className="logo-mark" aria-hidden="true">
        <b>T</b><b>K</b><i />
      </span>
      {!compact && (
        <span className="logo-type">
          <strong>TK MOBILE</strong>
          <small>SERVICE</small>
        </span>
      )}
    </Link>
  );
}
