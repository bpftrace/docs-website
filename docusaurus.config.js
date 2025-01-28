// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'bpftrace',
  tagline: 'Dynamic Tracing for the Linux Platform',
  favicon: 'img/bpftrace_Icon-Black-Yellow_BG.svg',

  // Set the production url of your site here
  url: 'https://docs.bpftrace.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // baseUrl: '',
  trailingSlash: false,

  organizationName: 'bpftrace',
  projectName: 'docs-website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
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
      image: 'img/bpftrace_Full_Logo-Black-Yellow_BG.svg',
      navbar: {
        logo: {
          alt: 'bpftrace Logo',
          src: 'img/bpftrace_Full_Logo-Black.svg',
          href: 'https://bpftrace.org',
          target: '_self',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © 2019 Alastair Robertson.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),
};

export default config;
