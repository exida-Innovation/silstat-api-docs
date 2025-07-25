// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
/* @type { import type * as Plugin from "@docusaurus/types/src/plugin" } */
/* @type { import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs" } */

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

  themes: ['docusaurus-theme-openapi-docs'],

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
           docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
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
          alt: 'SILstat Logo',
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
            type: "dropdown",
            label: 'API Reference',
            position: 'left',
            items: [
              {
                label: 'Current',
                to: '/docs/api-versioned',
              },
              {
                label: '2024-09-24-preview',
                to: '/docs/api-versioned-2024-09-24-preview',
              }
            ],
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
          }
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
        additionalLanguages: ['powershell', 'bash', 'csharp'],
      },
      languageTabs: [
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        }
      ]
    }),
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'), {
        languages: ['en'], // language codes
        excludeRoutes: ['pages', 'blogs'],
        highlightResult: true
      }
    ],
    [
      require.resolve('docusaurus-plugin-openapi-docs'),
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          api_versioned: {
            specPath: '../openapi/current/silstat-api.json',
            outputDir: 'docs/api_versioned',
            version: "current", // Current version
            label: "current", // Current version label
            baseUrl: "/api-versioned/silstat-api-json", // Leading slash is important
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: "tag",
            },
            versions: {
              // Older versions can be added here
              "2024-09-24-preview": {
                specPath: '../openapi/2024-09-24-preview/silstat-api.json',
                outputDir: 'docs/api_versioned/2024-09-24-preview', // No trailing slash
                label: '2024-09-24-preview',
                baseUrl: '/api-versioned/2024-09-24-preview/silstat-api-json', // Leading slash is important
              },
            }
          },
        },
      },
    ],
  ],
};

export default config;
