import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tkmobileservice.com"),
  title: { default: "TK Mobile Service | iPhone Repair Patong Phuket", template: "%s | TK Mobile Service" },
  description: "Independent iPhone and Apple device repair in Patong, Phuket. Screens, batteries, liquid damage and logic board service with transparent choices.",
  applicationName: "TK Mobile Service",
  authors: [{ name: "Technician Arm" }],
  creator: "TK Mobile Service",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "TK Mobile Service",
    locale: "en_TH",
    alternateLocale: "th_TH"
  },
  twitter: { card: "summary" },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11120f",
  colorScheme: "light dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}
