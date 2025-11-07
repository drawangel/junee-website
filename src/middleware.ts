import { defineMiddleware } from 'astro:middleware';
import { defaultLang, type Language } from './i18n';

const supportedLanguages: Language[] = ['es', 'en', 'pt'];

function getBrowserLanguage(acceptLanguageHeader: string | null): Language {
  if (!acceptLanguageHeader) return defaultLang;

  // Parse Accept-Language header
  const languages = acceptLanguageHeader
    .split(',')
    .map(lang => {
      const [code, quality = '1'] = lang.trim().split(';q=');
      return { code: code.split('-')[0].toLowerCase(), quality: parseFloat(quality) };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first supported language
  for (const { code } of languages) {
    if (supportedLanguages.includes(code as Language)) {
      return code as Language;
    }
  }

  return defaultLang;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // If already on a language-specific path, continue
  if (pathname.match(/^\/(es|en|pt)(\/|$)/)) {
    return next();
  }

  // If on root path, redirect based on browser language
  if (pathname === '/' || pathname === '') {
    const acceptLanguage = context.request.headers.get('accept-language');
    const browserLang = getBrowserLanguage(acceptLanguage);
    return context.redirect(`/${browserLang}`, 302);
  }

  // For any other path without language prefix, redirect to default language
  return context.redirect(`/${defaultLang}${pathname}`, 302);
});
