// Cloudflare Worker entry point.
// Static pages are served straight from /dist (see wrangler.jsonc). Only requests that
// don't match a file reach this code: the quote form endpoint, everything else gets the 404 page.
import { onRequestPost } from '../functions/api/quote';

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  QUOTE_TO?: string;
  QUOTE_FROM?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/quote') {
      if (request.method === 'POST') return onRequestPost({ request, env });
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }
    return env.ASSETS.fetch(request);
  },
};
