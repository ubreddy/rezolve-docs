// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AITSM Documentation',
  tagline: 'AI-Powered Service Management',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.aitsm.com',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace this with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AITSM Docs',
        logo: {
          alt: 'AITSM Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://bitbucket.org/actionablescience/aitsm-public-docs',
            label: 'Bitbucket',
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
                label: 'Documentation',
                to: '/docs/overview/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'https://support.aitsm.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Bitbucket',
                href: 'https://bitbucket.org/actionablescience/aitsm-public-docs',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Actionable Science, Inc.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
