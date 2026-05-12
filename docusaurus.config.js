// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tictactrip Documentation',
  tagline: 'Book trains, buses and their combinations',
  url: 'https://api.tictactrip.eu/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tictactrip', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es', 'it', 'pt', 'ru'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
      fr: {label: 'Français', direction: 'ltr', htmlLang: 'fr-FR'},
      de: {label: 'Deutsch', direction: 'ltr', htmlLang: 'de-DE'},
      es: {label: 'Español', direction: 'ltr', htmlLang: 'es-ES'},
      it: {label: 'Italiano', direction: 'ltr', htmlLang: 'it-IT'},
      pt: {label: 'Português', direction: 'ltr', htmlLang: 'pt-PT'},
      ru: {label: 'Русский', direction: 'ltr', htmlLang: 'ru-RU'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-RQEHKSPQ6Z',
          anonymizeIP: true,
        },
        // Disable the built-in single-locale sitemap; we ship a custom
        // multilingual sitemap with hreflang via plugins/multilingual-sitemap.js
        sitemap: false,
      }),
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'https://api.tictactrip.eu/documentation',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    // Custom multilingual sitemap — overwrites the default sitemap.xml
    // with one URL per (page × locale) plus hreflang alternates.
    require.resolve('./plugins/multilingual-sitemap.js'),
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: 'Tictactrip logo',
            src: 'img/logoTextBlack.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            {to: '/api', label: 'Api', position: 'left'},
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/tictactrip/documentation',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} Tictactrip, Inc.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
      }),
};

module.exports = config;
