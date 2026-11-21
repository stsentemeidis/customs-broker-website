// @ts-check
import { defineConfig } from 'astro/config';

// Static site deployed on Cloudflare Pages.
// Change `site` once the final domain is connected.
export default defineConfig({
  site: 'https://exintaris-kafas.pages.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
