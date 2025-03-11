// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/introduction',
          label: 'Introduction'
        },
        {
          type: 'category',
          label: 'Quick Start',
          items: [
            'getting-started/quick-start/installation',
            'getting-started/quick-start/configuration',
            'getting-started/quick-start/first-steps'
          ]
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'getting-started/core-concepts/components',
            'getting-started/core-concepts/workflows'
          ]
        },
        {
          type: 'category',
          label: 'Setup Guide',
          items: [
            'getting-started/setup/environment',
            'getting-started/setup/authentication',
            'getting-started/setup/customization'
          ]
        },
        {
          type: 'category',
          label: 'Best Practices',
          items: [
            'getting-started/best-practices/coding-standards',
            'getting-started/best-practices/performance',
            'getting-started/best-practices/security'
          ]
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'getting-started/tutorials/basic',
            'getting-started/tutorials/intermediate',
            'getting-started/tutorials/advanced'
          ]
        }
      ]
    }
  ],
  administrationSidebar: [
    {
      type: 'category',
      label: 'Administration',
      items: [
        {
          type: 'category',
          label: 'Audit',
          items: [
            'administration/audit/compliance',
            'administration/audit/reports',
            'administration/audit/trails'
          ]
        },
        {
          type: 'category',
          label: 'Maintenance',
          items: [
            'administration/maintenance/backups',
            'administration/maintenance/cleanup',
            'administration/maintenance/updates'
          ]
        },
        {
          type: 'category',
          label: 'Monitoring',
          items: [
            'administration/monitoring/alerts',
            'administration/monitoring/logs',
            'administration/monitoring/metrics'
          ]
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            'administration/settings/customization',
            'administration/settings/general',
            'administration/settings/security'
          ]
        },
        {
          type: 'category',
          label: 'Users',
          items: [
            'administration/users/groups',
            'administration/users/permissions',
            'administration/users/roles'
          ]
        }
      ]
    }
  ],
  knowledgeManagementSidebar: [
    {
      type: 'category',
      label: 'Knowledge Management',
      items: [
        {
          type: 'category',
          label: 'Content',
          items: [
            'knowledge-management/content/writing-guide',
            'knowledge-management/content/formatting',
            'knowledge-management/content/media-handling'
          ]
        },
        {
          type: 'category',
          label: 'Organization',
          items: [
            'knowledge-management/organization/categories',
            'knowledge-management/organization/tags',
            'knowledge-management/organization/metadata'
          ]
        },
        {
          type: 'category',
          label: 'Maintenance',
          items: [
            'knowledge-management/maintenance/updates',
            'knowledge-management/maintenance/review-process',
            'knowledge-management/maintenance/archiving'
          ]
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            'knowledge-management/integration/external-sources',
            'knowledge-management/integration/api-usage',
            'knowledge-management/integration/automation'
          ]
        },
        {
          type: 'category',
          label: 'Analytics',
          items: [
            'knowledge-management/analytics/usage-metrics',
            'knowledge-management/analytics/content-performance',
            'knowledge-management/analytics/user-feedback'
          ]
        }
      ]
    }
  ]
};
