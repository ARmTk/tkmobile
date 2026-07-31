import Link from "next/link";

export default function RootPage() {
  return (
    <main className="redirect-page">
      <p>Opening TK Mobile Service…</p>
      <script dangerouslySetInnerHTML={{ __html: `location.replace('/en/')` }} />
      <noscript><Link href="/en/">Continue in English</Link> · <Link href="/th/">ภาษาไทย</Link></noscript>
    </main>
  );
}
