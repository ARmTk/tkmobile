# TK Mobile Service website

Production website for **TK Mobile Service – Fix iPhone Patong Phuket** at
[tkmobileservice.com](https://tkmobileservice.com).

## Architecture

- Next.js App Router with strict TypeScript
- Static export for fast, crawlable HTML and a small production surface
- English and Thai routes under `/en/` and `/th/`
- Central typed business configuration in `src/config/site.ts`
- Structured service and FAQ content in `src/content/content.ts`
- Nginx production container behind the existing Traefik proxy
- Vitest unit tests and Playwright desktop/mobile critical-path tests

The site does not accept uploads or store repair enquiries. Customers continue
to LINE or WhatsApp to send device details and photos.

## Local development

Requirements: Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

## Environment variables

Copy `.env.example` to `.env.local` when needed. Do not commit environment
files.

- `NEXT_PUBLIC_GA_ID`: optional real Google Analytics 4 measurement ID
- `NEXT_PUBLIC_GTM_ID`: reserved for a future GTM setup
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Search Console token

Analytics does not load when no GA ID is configured.

## Production deployment

The compose file expects the external Docker network `tk-proxy`, which is owned
by the existing reverse-proxy stack.

```bash
docker compose build
docker compose up -d
docker inspect phuket-mobile-repair --format '{{.State.Health.Status}}'
```

The container is named `phuket-mobile-repair`, uses an `unless-stopped` restart
policy, has a `/healthz` health check and bounded JSON logs.

## Safe rollback

Before a deployment, keep a timestamped archive of the current project folder
and record the current image ID. To roll back:

1. Restore the previous project archive to its own directory.
2. Run `docker compose up -d` from that restored directory.
3. Confirm the target container is healthy and test the HTTPS URL.

Do not prune Docker resources; the VPS hosts unrelated systems.

## Content maintenance

Change phone, address, hours and social links only in
`src/config/site.ts`. Service and FAQ copy lives in
`src/content/content.ts`. New languages can follow the existing locale type,
route and content records. A headless CMS adapter can later replace these
typed files without rewriting the page components.

Real workshop photography was not included in the repository. The visual system
therefore uses typography and abstract interface shapes, never stock or
AI-generated photos presented as real work. Add approved, privacy-checked shop
media under `public/images/` when supplied.
