# VELORA

### A considered automotive marketplace

[English](README.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md)

![VELORA automotive cover — illustrative Porsche photograph](public/photos/hero.jpg)

**Explore. Compare. Find your next chapter.**

VELORA is a multilingual automotive marketplace portfolio project by [Cenker Sule](https://github.com/cenkersule15). Its editorial interface combines automotive photography, restrained typography and a practical vehicle discovery workflow.

## Features

| Area | Implemented behaviour |
|---|---|
| Languages | Turkish, English and German interface, forms and status messages |
| Catalogue | Eight demo listings, including Mercedes-Benz G 63 AMG and Land Rover Defender 110 |
| Discovery | Make, body style, fuel, transmission, city, budget, year and mileage filters; price/year sorting |
| Text search | Rule-based parsing of make, city, transmission, SUV and EUR budget phrases |
| Comparison | Up to three vehicles side by side, with prices and specifications |
| Favourites | Browser-local saved vehicles |
| Vehicle details | Equipment and an interactive body-panel declaration diagram |
| Seller workflow | Browser-session-owned listing drafts and demo viewing requests, stored server-side |
| Interaction | Responsive layouts, native modal focus management, keyboard dismissal and reduced-motion styles |

Catalogue prices use **EUR**. They are curated demonstration amounts, not live exchange-rate conversions or market valuations. New drafts explicitly store EUR; older drafts without a currency field retain their original TRY label.

## Technology

**TypeScript · React 19 · Vinext · Vite · Cloudflare Workers · D1/SQLite · Drizzle ORM · Zod · Lucide**

Vinext provides a Next.js-compatible App Router. The application runs through Vinext/Vite; it is not started with `next dev`. Database access uses Drizzle and Cloudflare D1, backed by local SQLite in development. This version does not use PostgreSQL or Docker.

## Quick start

Requirements: **Node.js 24** and npm 10 or later.

```bash
npm ci
npm run db:setup
npm run dev
```

Open **http://127.0.0.1:5173/**. If the migration tool asks for confirmation, enter `Y`. Keep the development terminal running.

On macOS with Homebrew Node 24 installed, select it in the current terminal if needed:

```bash
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

The local demo uses a browser-specific signed, HttpOnly session cookie. Start it using the demo-session button. Each browser has separate records. Sessions expire after 24 hours or a server restart. This is a localhost-only portfolio demo, not a production account system. Drafts and demo requests remain in `.wrangler/state`; favourites remain in the browser.

## Validation

```bash
npm run check
npm test
npm run db:setup
npm run test:api
npm run build
npm audit
```

Stop an existing dev server before `npm run test:api`; the integration runner uses port 5173 and cleans up its temporary records. The suite checks page rendering, photo serving, demo login, authentication, rejected spoofed headers, input validation, cross-origin rejection, draft/request persistence and protected deletion.

GitHub Actions runs the checks, local database setup, API integration and production build on Node 24. CI results appear after the repository is pushed. The included dependency audit reported **zero known advisories on 9 November 2026**; this is a dated result, not a permanent security guarantee. See [acceptance notes](docs/ACCEPTANCE.md) and [dependency maintenance](docs/SECURITY_UPDATE.md).

## Project structure

| Path | Purpose |
|---|---|
| `app/page.tsx` | Discovery, vehicle details, comparison and garage interface |
| `app/api/garage/route.ts` | Authenticated draft/request operations and ownership checks |
| `lib/cars.ts` | Sample catalogue, filters and text-to-filter parser |
| `lib/words.ts` | Three-language interface copy |
| `db/` and `drizzle/` | Database schema and SQL migrations |
| `public/photos/` | Locally served illustrative vehicle images |
| `tests/` | Catalogue/localisation and local API tests |

## Scope

This is a working **portfolio demo**. Public listing publication, real seller messaging, payments, uploads, moderation, email delivery and live LLM integration are not implemented. Text search is deterministic parsing, not an LLM. Viewing requests send no seller notifications. Photographs, vehicle specifications and body-condition statements are illustrative sample content, not verified sales offers or inspection reports.

The cover above is a stock automotive photograph, not an application screenshot. See [photo sources](docs/ASSETS.md). No customer data, environment secrets, local databases or generated dependencies belong in this repository.

## License

Original project code is available under the [MIT License](LICENSE). Retained third-party code keeps its accompanying notices; photographs remain subject to their original licences. See [NOTICE.md](NOTICE.md).
