// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const sidebars = require('./sidebars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rezolve Docs',
  tagline: 'Your central hub for all documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rezolve.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'actionablescience', // Usually your GitHub org/user name.
  projectName: 'aitsm-public-docs', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn' to prevent build failures
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagrams
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://bitbucket.org/actionablescience/aitsm-public-docs/src/master/',
          routeBasePath: 'docs',
          breadcrumbs: true,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/custom-docs.css'),
            require.resolve('./src/css/hide-footer.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace this with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        // title: 'Rezolve Docs',
        logo: {
          alt: 'Documentation Logo',
          src: 'img/logo.png',
          href: 'https://www.rezolve.ai',
          target: '_blank',
        },
        items: [
          {
            to: '/', // Link title to home page
            label: 'Home',
            position: 'left',
          },
        ],
      },
      // Set to empty object to hide footer completely
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright ${new Date().getFullYear()} Rezolve.ai, Inc. All rights reserved.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
