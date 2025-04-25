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

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Options for the search plugin
        hashed: true, // Generate search-index.json file for better performance
        language: ['en'], // Search only English content
        indexDocs: true, // Index docs content
        indexBlog: false, // Don't index blog content (if you don't have a blog)
        indexPages: false, // Don't index other pages
        docsRouteBasePath: 'docs', // Base path for docs
        highlightSearchTermsOnTargetPage: true, // Highlight search terms on the target page
        searchResultLimits: 8, // Limit search results
        searchBarPosition: 'right', // Position of search bar in the navbar
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'product-updates',
        path: './product-updates',
        routeBasePath: 'product-updates',
        showReadingTime: false,
        // Suppress warnings
        onInlineAuthors: 'ignore',
        onUntruncatedBlogPosts: 'ignore',
        // Completely disable edit functionality and git history tracking
        editUrl: undefined,
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
        // Disable git history tracking
        // disableGitFeatures: true,
        // Organize posts by year in reverse chronological order
        blogSidebarTitle: 'Product Updates',
        blogSidebarCount: 'ALL',
        sortPosts: 'descending',
        blogTitle: 'Product Updates',
        blogDescription: 'Keep up with the latest updates and improvements to our product',
        postsPerPage: 10,
        // Enable archive by year
        archiveBasePath: 'archive',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://bitbucket.org/actionablescience/aitsm-public-docs/src/master/'
          editUrl: undefined,
          routeBasePath: 'docs',
          breadcrumbs: true,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        blog: false, // Disable the default blog plugin from the preset
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
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://status.rezolve.ai',
            label: 'Status',
            position: 'right',
          },
          {
            to: '/product-updates', // Link title to home page
            label: 'Product Updates',
            position: 'right',
          },
          // {
          //   type: 'doc',
          //   docId: 'reference/index',
          //   position: 'left',
          //   label: 'Reference',
          // },
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
