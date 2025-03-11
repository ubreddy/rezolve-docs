// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const sidebars = require('./sidebars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Portal',
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'Documentation Portal',
        logo: {
          alt: 'Documentation Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            sidebarId: 'administrationSidebar',
            position: 'left',
            label: 'Administration',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            sidebarId: 'knowledgeManagementSidebar',
            position: 'left',
            label: 'Knowledge Management',
            docsPluginId: 'default',          },
          {
            href: 'https://bitbucket.org/actionablescience/aitsm-public-docs',
            label: 'Repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'Knowledge Management',
                to: '/docs/knowledge-management/uploading-articles',
              },
              {
                label: 'Helpdesk',
                to: '/docs/helpdesk/ticket-management',
              },
            ],
          },
          {
            title: 'Features',
            items: [
              {
                label: 'Bot Analytics',
                to: '/docs/bot-analytics/analytics-dashboard',
              },
              {
                label: 'Creator Studio',
                to: '/docs/creator-studio',
              },
              {
                label: 'Virtual Agent',
                to: '/docs/virtual-agent',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Service Portal',
                to: '/docs/service-portal',
              },
              {
                label: 'Service Catalog',
                to: '/docs/service-catalog',
              },
              {
                label: 'Repository',
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
