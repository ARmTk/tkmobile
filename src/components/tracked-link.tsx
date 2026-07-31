"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  children: ReactNode;
};

export function TrackedLink({ event, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        onClick?.(e);
        const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
        gtag?.("event", event);
      }}
    >
      {children}
    </a>
  );
}
