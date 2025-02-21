// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/introduction'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/registration',
        'getting-started/teams-and-queues',
        'getting-started/knowledge-base',
        'getting-started/using-bot',
        'getting-started/ticket-types',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/system-of-records',
        'core-concepts/automation-workflows',
        'core-concepts/integrations',
        'core-concepts/knowledge',
        'core-concepts/bot',
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      items: [
        'ai-features/bot-agents',
        'ai-features/email-agents',
        'ai-features/ticket-automation',
        'ai-features/knowledge-agents',
        'ai-features/custom-agents',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/bot-channels',
        'integrations/knowledge-base',
        'integrations/ticketing-systems',
        'integrations/ServiceNow-LiveChat-Integration'
      ],
    },
    {
      type: 'category',
      label: 'Service Portal',
      items: [
        'portal/intent-groups',
        'portal/audience',
        'portal/offers-intent-groups',
        'portal/integration',
      ],
    },
    {
      type: 'category',
      label: 'Security & Access',
      items: [
        'security/teams',
        'security/queues',
        'security/workspaces',
        'security/space-roles',
        'security/permission-map',
        'security/widget-implementation'
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/it',
        'use-cases/hr',
        'use-cases/msp',
        'use-cases/others',
      ],
    },
  ],
};

module.exports = sidebars;
