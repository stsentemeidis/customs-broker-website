// Languages available on the site.
// To add a new language (e.g. German):
//   1. add an entry below,
//   2. copy src/i18n/en.ts to src/i18n/de.ts and translate it,
//   3. register it in the `dictionaries` map in src/i18n/index.ts.
// The language selector, page routes and <link hreflang> tags update automatically.

export const languages = {
  el: { label: 'Ελληνικά', short: 'EL', htmlLang: 'el', ogLocale: 'el_GR' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'el';

export const langCodes = Object.keys(languages) as Lang[];
