import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const LOCALES = ['en', 'fr', 'de', 'es', 'it', 'pt', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function useLocale(): Locale {
  const {i18n} = useDocusaurusContext();
  const code = i18n.currentLocale;
  return isLocale(code) ? code : DEFAULT_LOCALE;
}

export type Translations<T> = Record<Locale, T>;

export function useTranslation<T>(t: Translations<T>): T {
  const locale = useLocale();
  return t[locale] ?? t[DEFAULT_LOCALE];
}
