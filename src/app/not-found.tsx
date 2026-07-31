import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404</span>
      <h1>This page is out for repair.</h1>
      <p>The link may have moved. Return to the TK Mobile Service home page.</p>
      <Link className="button" href="/en/">Back home</Link>
      <Link className="text-link" href="/th/">กลับหน้าแรกภาษาไทย</Link>
    </main>
  );
}
