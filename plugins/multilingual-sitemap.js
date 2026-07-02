// @ts-check
/**
 * Custom Docusaurus plugin that overwrites build/sitemap.xml with a full
 * multilingual sitemap: one <url> per (page × locale), each entry pointing
 * to its translated peers via <xhtml:link rel="alternate" hreflang="..."/>.
 *
 * Docusaurus 2.4.1's built-in @docusaurus/plugin-sitemap only emits the
 * default-locale URLs and has no hreflang awareness — this plugin closes
 * that gap. It runs in postBuild, so it overwrites whatever the classic
 * preset wrote a moment earlier.
 */

const fs = require('fs');
const path = require('path');

// Fallback only. The real value is derived at build time from the Docusaurus
// config (`siteConfig.url`) so the sitemap host can never silently drift away
// from the deployed domain — a mismatch there makes Google Search Console
// reject the sitemap with "Sitemap could not be read".
const DEFAULT_SITE_URL = 'https://developers.tictactrip.eu';

const LOCALES = ['en', 'fr', 'de', 'es', 'it', 'pt', 'ru'];

const HREFLANG = {
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE',
  es: 'es-ES',
  it: 'it-IT',
  pt: 'pt-PT',
  ru: 'ru-RU',
};

/**
 * @typedef {{path: string, priority: number, changefreq?: string}} SitemapPage
 */

/** @type {SitemapPage[]} */
const PAGES = [
  {path: '/', priority: 1.0, changefreq: 'daily'},

  // Feature pages
  {path: '/features/multimodal-coverage', priority: 0.9, changefreq: 'weekly'},
  {path: '/features/eco-responsible', priority: 0.9, changefreq: 'weekly'},
  {path: '/features/real-time-availability', priority: 0.9, changefreq: 'weekly'},
  {path: '/features/smart-combinations', priority: 0.9, changefreq: 'weekly'},
  {path: '/features/end-to-end-booking', priority: 0.9, changefreq: 'weekly'},
  {path: '/features/developer-first', priority: 0.9, changefreq: 'weekly'},

  // Solution pages
  {path: '/solutions/online-travel-agencies', priority: 0.9, changefreq: 'weekly'},
  {path: '/solutions/corporate-travel-tmc', priority: 0.9, changefreq: 'weekly'},
  {path: '/solutions/fintech-super-apps', priority: 0.9, changefreq: 'weekly'},
  {path: '/solutions/mobility-maas', priority: 0.9, changefreq: 'weekly'},
  {path: '/solutions/green-tech-sustainability', priority: 0.9, changefreq: 'weekly'},
  {path: '/solutions/custom-internal-tools', priority: 0.9, changefreq: 'weekly'},

  // API reference (Redocusaurus)
  {path: '/api/', priority: 0.8, changefreq: 'weekly'},

  // Docs pages (markdown — falls back to English for non-en locales until
  // we provide translated copies under i18n/<locale>/docusaurus-plugin-content-docs/)
  {path: '/docs/intro', priority: 0.8, changefreq: 'weekly'},
  {path: '/docs/search', priority: 0.7, changefreq: 'weekly'},
  {path: '/docs/book', priority: 0.7, changefreq: 'weekly'},
  {path: '/docs/cache-export', priority: 0.6, changefreq: 'monthly'},
  {path: '/docs/glossary', priority: 0.6, changefreq: 'monthly'},
];

function urlFor(siteUrl, locale, urlPath) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${siteUrl}${prefix}${urlPath}`;
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * @param {SitemapPage} page
 * @param {string} locale
 * @param {string} lastmod
 */
function buildEntry(siteUrl, page, locale, lastmod) {
  const loc = escapeXml(urlFor(siteUrl, locale, page.path));
  const alternates = LOCALES.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${escapeXml(urlFor(siteUrl, l, page.path))}"/>`,
  ).join('\n');
  const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(urlFor(siteUrl, 'en', page.path))}"/>`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
${alternates}
${xdefault}
  </url>`;
}

module.exports = function pluginMultilingualSitemap() {
  return {
    name: 'multilingual-sitemap',
    async postBuild({siteConfig, outDir}) {
      const lastmod = new Date().toISOString().slice(0, 10);

      // Derive the host from the Docusaurus config so it always matches the
      // deployed domain (and the Search Console property). Strip any trailing
      // slash — page paths already start with "/".
      const siteUrl = ((siteConfig && siteConfig.url) || DEFAULT_SITE_URL).replace(/\/+$/, '');

      const urls = [];
      for (const page of PAGES) {
        for (const locale of LOCALES) {
          urls.push(buildEntry(siteUrl, page, locale, lastmod));
        }
      }

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

      const target = path.join(outDir, 'sitemap.xml');
      fs.writeFileSync(target, xml, 'utf8');
      // eslint-disable-next-line no-console
      console.log(
        `[multilingual-sitemap] wrote ${urls.length} URLs (${PAGES.length} pages × ${LOCALES.length} locales) to ${target}`,
      );
    },
  };
};
