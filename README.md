# Exintaris & Kafas — website

Bilingual (Greek / English) website for Exintaris & Kafas LTD, customs brokers in Thessaloniki.
Built with [Astro](https://astro.build) as a static site and hosted on Cloudflare Pages.

## Run it on your computer

Requires [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # builds the final site into /dist
```

## Deploy (Cloudflare Pages)

Every push to `main` on GitHub redeploys automatically. Build settings:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` |

### Quote form emails
The form posts to `functions/api/quote.ts` (a Cloudflare Pages Function). To receive the
requests by email, add `RESEND_API_KEY`, `QUOTE_TO` and `QUOTE_FROM` under
**Settings → Variables and secrets** in the Cloudflare project. Details are in the file.

## Where to edit things

| What | File |
|---|---|
| Phone numbers, email, address, hours, team, warehouse address, founding year | `src/data/site.ts` |
| All Greek texts | `src/i18n/el.ts` |
| All English texts | `src/i18n/en.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (top of file) |
| Logo files (SVG, PNG) | `public/brand/` |
| Old-site redirects | `public/_redirects` |

### Placeholders still to replace
- Founding year (1990) and the five team members in `src/data/site.ts`
- Team photos: add them to `public/team/` and reference them in `site.ts`
- Warehouse address in `src/data/site.ts`
- Office PDFs (EORI form, sworn declaration, ICISnet guide) in `faq.ownDocs`
- Privacy policy text (marked as placeholder)
- `site` URL in `astro.config.mjs` once the final domain is connected

### Add a language
1. Add it to `src/i18n/config.ts`
2. Copy `src/i18n/en.ts` to e.g. `src/i18n/de.ts` and translate
3. Register it in `src/i18n/index.ts`

The language selector, page URLs (`/de/...`) and search-engine language tags update automatically.

## Brand
- Harbour navy `#0B2A4A` · Aegean blue `#2E8BC0` · Sky wave `#5EC4F0` · Mist `#EEF5FB`
- Typeface: Inter (self-hosted, includes Greek)
