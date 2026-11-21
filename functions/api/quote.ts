// POST /api/quote — used by worker/index.ts (Cloudflare Workers) and also works as a Pages Function.
// Receives the quote request form and emails it to the office.
//
// To activate email delivery, add these environment variables in
// Cloudflare → Workers & Pages → customs-broker-website → Settings → Variables and Secrets:
//   RESEND_API_KEY   API key from https://resend.com (free tier is enough)
//   QUOTE_TO         Address that receives requests, e.g. info@exintaris-kafas.gr
//   QUOTE_FROM       Verified sender, e.g. "Website <website@exintaris-kafas.gr>"
// Without them the function still validates and accepts the request (useful for testing the design).

interface Env { RESEND_API_KEY?: string; QUOTE_TO?: string; QUOTE_FROM?: string }

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let data: Record<string, string>;
  try { data = await request.json(); } catch { return json({ ok: false, error: 'invalid_json' }, 400); }

  if (data.website) return json({ ok: true }); // honeypot: silently ignore bots

  const required = ['name', 'email', 'phone', 'service', 'goods', 'consent'];
  const missing = required.filter((k) => !String(data[k] ?? '').trim());
  if (missing.length) return json({ ok: false, error: 'missing_fields', fields: missing }, 422);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return json({ ok: false, error: 'invalid_email' }, 422);

  const rows: [string, string][] = [
    ['Name', data.name], ['Company', data.company], ['Email', data.email], ['Phone', data.phone],
    ['Service', data.service], ['Transport', data.mode], ['From', data.origin], ['To', data.destination],
    ['Goods', data.goods], ['Value (€)', data.value], ['Message', data.message], ['Language', data.lang], ['Page', data.page],
  ];
  const html = `<h2>New quote request</h2><table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="color:#51657a;vertical-align:top"><b>${k}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;

  if (!env.RESEND_API_KEY || !env.QUOTE_TO || !env.QUOTE_FROM) {
    console.log('Quote request (email not configured):', JSON.stringify(data));
    return json({ ok: true, delivered: false });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.QUOTE_FROM,
      to: [env.QUOTE_TO],
      reply_to: data.email,
      subject: `Quote request: ${data.service} – ${data.name}`,
      html,
    }),
  });
  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return json({ ok: false, error: 'email_failed' }, 502);
  }
  return json({ ok: true, delivered: true });
};
