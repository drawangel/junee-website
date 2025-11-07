export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}

import { es } from './translations/es';
import { en } from './translations/en';
import { pt } from './translations/pt';

export const translations = {
  es,
  en,
  pt,
} as const;
