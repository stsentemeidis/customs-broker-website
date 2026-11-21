# Exintaris & Kafas — website

Bilingual (Greek / English) website for Exintaris & Kafas LTD, customs brokers in Thessaloniki.
Built with [Astro](https://astro.build) as a static site and hosted on Cloudflare Workers.

## Run it on your computer

Requires [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # builds the final site into /dist
```

## Deploy (Cloudflare Workers)

The site runs as a Cloudflare **Worker** with static assets:
https://customs-broker-website.stavros-tsentemeidis.workers.dev

Every push to `main` on GitHub redeploys automatically. Settings in
**Workers & Pages → customs-broker-website → Settings → Build**:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

- `wrangler.jsonc` tells Cloudflare to serve the built pages from `dist/` and to run
  `worker/index.ts` for the quote form (`/api/quote`). The `name` in it must match the
  Worker name in the dashboard.
- `.nvmrc` pins Node.js 22 for the build.
- When the real domain is connected, update `site` in `astro.config.mjs` and the
  `Sitemap:` line in `public/robots.txt`.

### Quote form emails
The form logic lives in `functions/api/quote.ts`. To receive requests by email, add
`RESEND_API_KEY`, `QUOTE_TO` and `QUOTE_FROM` under **Settings → Variables and Secrets**
of the Worker (use type "Secret" for the API key). Until then, requests are accepted and
only written to the Worker logs (**Observability** tab).

## Where to edit things

| What | File |
|---|---|
| Phone numbers, email, address, hours, team, warehouse address, founding year | `src/data/site.ts` |
| All Greek texts | `src/i18n/el.ts` |
| All English texts | `src/i18n/en.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (top of file) |
| Logo files (SVG, PNG) | `public/brand/` |
| Downloadable forms (PDF) | `public/docs/` |
| Old-site redirects | `public/_redirects` |

### Placeholders still to replace
- Founding year (1990) and the five team members in `src/data/site.ts`
- Team photos: add them to `public/team/` and reference them in `site.ts`
- Warehouse address in `src/data/site.ts`
- Privacy policy text (marked as placeholder)

### Open questions for the team
Things to confirm with the office before the site goes live. Answers go into `src/data/site.ts`
or the translation files.

**Company details**
- [ ] Exact legal name and form: the Greek pages of the old site say "Εξηντάρης Καφάς Ο.Ε.", the brand uses "LTD"
- [ ] GEMI number, VAT number (ΑΦΜ) and tax office (ΔΟΥ) for the footer
- [ ] Facebook page address (or other social media), if any
- [ ] Which mobile number(s) use WhatsApp / Viber

**Claims to confirm**
- [ ] "We reply usually within one working day" (contact page)
- [ ] "5 specialists", "licensed customs brokers", founding year 1990
- [ ] Customs warehouse: do they run their own? Address? "Close to the port"?
- [ ] Clearance points: port of Thessaloniki, Makedonia airport, Evzoni, Promachonas, inland customs offices. Which ones do they actually use? Any others (e.g. Kipoi, Niki, Kakavia)?
- [ ] Do they arrange transport? The old site says "customs and transport services"

**Extra services: which of these do they offer?**
- [ ] Vehicle imports (cars, motorbikes, trucks; ΔΑΟ / ΔΕΦΚ / registration tax)
- [ ] Relocation / personal effects (μετοικεσία)
- [ ] Excise goods (ΕΦΚ): alcohol, tobacco, fuel
- [ ] Tariff classification and Binding Tariff Information (BTI)
- [ ] Customs consulting: AEO applications, CBAM reports, customs audits
- [ ] E-commerce and small parcels (IOSS, €3 duty)
- [ ] Temporary admission and ATA carnets (exhibitions, samples, equipment)
- [ ] Inward processing (ενεργητική τελειοποίηση)

**Content to collect**
- [ ] Team names, roles and photos
- [ ] Office, team, port and warehouse photos
- [ ] Partner logos (shipping lines, forwarders, warehouses)
- [ ] Google Business Profile: create or claim it and ask clients for reviews

### Add a language
1. Add it to `src/i18n/config.ts`
2. Copy `src/i18n/en.ts` to e.g. `src/i18n/de.ts` and translate
3. Register it in `src/i18n/index.ts`

The language selector, page URLs (`/de/...`) and search-engine language tags update automatically.

## Brand
- Harbour navy `#0B2A4A` · Aegean blue `#2E8BC0` · Sky wave `#5EC4F0` · Mist `#EEF5FB`
- Typeface: Inter (self-hosted, includes Greek)
