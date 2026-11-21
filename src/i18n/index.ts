import { languages, defaultLang, langCodes, type Lang } from './config';
import en from './en';
import el from './el';
import type { Dictionary } from './en';
import { site } from '../data/site';

const dictionaries: Record<Lang, Dictionary> = { el, en };

export { languages, defaultLang, langCodes, type Lang };

export function t(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Build an internal URL for a language, e.g. url('en', 'services/imports') -> /en/services/imports/ */
export function url(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Remove the language prefix from a pathname: /en/services/ -> services */
export function stripLang(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (langCodes as string[]).includes(parts[0])) parts.shift();
  return parts.join('/');
}

const years = new Date().getFullYear() - site.foundedYear;

/** Replace {year}, {years} and link tokens such as {contact} inside translated strings. */
export function fill(text: string, lang: Lang): string {
  return text
    .replaceAll('{years}', String(years))
    .replaceAll('{year}', String(site.foundedYear))
    .replaceAll('{contact}', url(lang, 'contact'))
    .replaceAll('{privacy}', url(lang, 'privacy'))
    .replaceAll('{warehousing}', url(lang, 'services/customs-warehousing'))
    .replaceAll('{transit}', url(lang, 'services/transit'));
}

export function langPaths() {
  return langCodes.map((lang) => ({ params: { lang } }));
}
