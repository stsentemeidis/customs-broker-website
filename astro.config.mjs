// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site deployed on Cloudflare (Workers static assets, see wrangler.jsonc).
// Change `site` once the final domain is connected.
export default defineConfig({
  site: 'https://customs-broker-website.stavros-tsentemeidis.workers.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(el|en)\/privacy\/$/.test(page) && new URL(page).pathname !== '/',
      i18n: { defaultLocale: 'el', locales: { el: 'el-GR', en: 'en-GB' } },
    }),
  ],
});
