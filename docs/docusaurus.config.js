// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SILstat API Docs',
  tagline: 'SILstat API Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://exida-innovation.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/silstat-api-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'exida-Innovation', // Usually your GitHub org/user name.
  projectName: 'silstat-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exida-Innovation/silstat-api-docs/edit/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SILstat API Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-silstat.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial-basics/getting-started',
            position: 'left',
            label: 'Getting Started',
          },    
          {
            href: 'https://www.exida.com/SILStat',
            label: 'Get SILstat',
            position: 'right',
          },
          {
            href: 'https://github.com/exida-Innovation/silstat-api-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://silstat.exsilentia.com',
            label: 'Go to SILstat',
            position: 'right',
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/tutorial-basics/getting-started',
              },
            ],
          },
        ],
        logo: {
          alt: 'exida Logo',
          src: 'img/logo-exida.svg',
          href: 'https://www.exida.com',
          height: 80,
        },
        copyright: `Copyright © ${new Date().getFullYear()} exida Innovation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [ require.resolve('docusaurus-lunr-search'), {
        languages: ['en'], // language codes
        excludeRoutes : ['pages', 'blogs'],
        highlightResult: true
      }]
    ]
};

export default config;
