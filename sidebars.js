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
          type: 'doc',
          id: 'getting-started/registration-guide',
          label: 'Registration'
        },
        {type: 'doc', id: 'getting-started/manage-users-audience', label: 'Manage Users and Audience'},
        {
          type: 'doc',
          id: 'getting-started/subscriptions',
          label: 'Subscriptions'
        },
        {
          type: 'category',
          label: 'Configurations',
          items: [
            'getting-started/configure-bot',
            'getting-started/configure-bot-channels',
            'getting-started/configure-catalog',
            'getting-started/configure-live-chat',
            'getting-started/integrations'
          ]
        },
        {
          type: 'doc',
          id: 'getting-started/setup-teams-queues',
          label: 'Setup Teams and Queues'
        },
        {
          type: 'doc',
          id: 'getting-started/knowledge-ingest',
          label: 'Ingest Knowledge'
        },
        { type: 'category', label: 'Test', items: [
          'getting-started/try-helpdesk',
          'getting-started/check-live-chat',
          'getting-started/check-search',
          'getting-started/try-insights',
          'getting-started/use-the-bot',
          'getting-started/check-gaps'
        ]},
        {
          type: 'category',
          label: 'Check Metrics',
          items: [
            'getting-started/check-metrics',
            'getting-started/bot-efficiency',
            'getting-started/agent-efficiency',
            'getting-started/live-chat-efficiency'
          ]
        },
        
        
      ]
    }
  ],
  administrationSidebar: [
    {
      type: 'category',
      label: 'Administration',
      items: [
        {
          type: 'doc',
          id: 'administration/introduction',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'administration/subscriptions-mgmt',
          label: 'Subscriptions Management'
        },
        {
          type: 'category',
          label: 'Role-Based Access Control',
          items: [
            'administration/rbac/role-based-access-control',
            'administration/rbac/roles',
            'administration/rbac/roles-permissions',
            
          ]
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'administration/user-management/user-management',
            'administration/user-management/sso-configuration',
            'administration/user-management/external-sync',
            'administration/user-management/user-attributes'
          ]
        },
        {
          type: 'category',
          label: 'Groups Management',
          items: [
            'administration/groups/groups-management',
            'administration/groups/sync-groups',
            
          ]
        },
        {
          type: 'category',
          label: 'Audience Management',
          items: [
            'administration/audience-management/audience-management-overview',
            'administration/audience-management/audience-management-composition',
            'administration/audience-management/audience-management-usage-scenarios'
          ]
        },
        {
          type: 'category',
          label: 'Workspace Management',
          items: [
            'administration/workspace-management/workspace-management-overview',
            'administration/workspace-management/workspace-space-roles',
            'administration/workspace-management/workspace-user-assignment',
            'administration/workspace-management/workspace-usage-scenarios'
          ]
        },
        {
          type: 'category',
          label: 'Teams Management',
          items: [
            'administration/teams-management/teams-management-overview'
          ]
        },
        {
          type: 'category',
          label: 'Features Enablement',
          items: [
            'administration/features'
          ]
        },
        {
          type: 'doc',
          id: 'administration/settings-management',
          label: 'Settings Management'
        },
        {
          type: 'doc',
          id: 'administration/branding-customization',
          label: 'Branding and Customization'
        },
        {
          type: 'doc',
          id: 'administration/security-settings',
          label: 'Security Settings'
        },
        {
          type: 'category',
          label: 'Audit Logs',
          items: [
            'administration/audit/compliance',
            'administration/audit/reports',
            'administration/audit/trails'
          ]
        },
        {
          type: 'doc',
          id: 'administration/faqs',
          label: 'FAQs'        }
      ]
    }
  ],
  knowledgeManagementSidebar: [
    {
      type: 'category',
      label: 'Knowledge Management',
      items: [
        {
          type: 'doc',
          id: 'knowledge-management/overview',
          label: 'Overview'
        },
        {
          type: 'category',
          label: 'Setting up Knowledge Management',
          items: [
            'knowledge-management/setup/subscriptions',
            'knowledge-management/setup/features'
          ]
        },
        {
          type: 'category',
          label: 'Connecting Knowledge Repository',
          items: [
            'knowledge-management/repositories/sharepoint',
            'knowledge-management/repositories/confluence',
            'knowledge-management/repositories/servicenow',
            'knowledge-management/repositories/itglue',
            'knowledge-management/repositories/web',
            'knowledge-management/repositories/others'
          ]
        },
        {
          type: 'doc',
          id: 'knowledge-management/category-management',
          label: 'Category Management'
        },
        {
          type: 'doc',
          id: 'knowledge-management/uploading-documents',
          label: 'Uploading Documents'
        },
        {
          type: 'doc',
          id: 'knowledge-management/creating-articles',
          label: 'Creating Articles'
        },
        {
          type: 'doc',
          id: 'knowledge-management/scripted-answers',
          label: 'Scripted Answers'
        },
        {
          type: 'doc',
          id: 'knowledge-management/organizing-knowledge',
          label: 'Organizing Knowledge'
        },
        {
          type: 'doc',
          id: 'knowledge-management/audience-management',
          label: 'Audience Management'
        },
        {
          type: 'doc',
          id: 'knowledge-management/knowledge-workflow',
          label: 'Knowledge Workflow'
        },
        {
          type: 'doc',
          id: 'knowledge-management/knowledge-gaps',
          label: 'Knowledge Gaps Management'
        },
        {
          type: 'doc',
          id: 'knowledge-management/testing-knowledge',
          label: 'Testing Knowledge'
        },
        {
          type: 'doc',
          id: 'knowledge-management/analytics-reporting',
          label: 'Analytics and Reporting'
        },
        {
          type: 'category',
          label: 'Search and Discovery',
          items: [
            'knowledge-management/search/ticket-based',
            'knowledge-management/search/conversation-based'
          ]
        },
        {
          type: 'doc',
          id: 'knowledge-management/faqs',
          label: 'FAQs'
        },
        {
          type: 'doc',
          id: 'knowledge-management/troubleshooting',
          label: 'Troubleshooting'
        }
      ]
    }
  ],
  botAdministrationSidebar: [
    {
      type: 'category',
      label: 'Bot Administration',
      items: [
        'bot-administration/overview',
        {
          type: 'category',
          label: 'Channels',
          items: [
            'bot-administration/channels/teams',
            'bot-administration/channels/slack',
            'bot-administration/channels/web',
            'bot-administration/channels/widget',
            'bot-administration/channels/sharepoint-widget'
          ]
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            'bot-administration/settings/guest-user',
            'bot-administration/settings/genai-features',
            'bot-administration/settings/bot-profile'
          ]
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'bot-administration/integrations/servicenow',
            'bot-administration/integrations/jira',
            'bot-administration/integrations/zendesk',
            'bot-administration/integrations/manageengine',
            'bot-administration/integrations/connectwise',
            'bot-administration/integrations/bmc-remedy'
          ]
        },
        'bot-administration/creator-studio-intro',
        'bot-administration/faqs'
      ]
    }
  ],
  creatorStudioSidebar: [
    {
      type: 'category',
      label: 'Creator Studio',
      items: [
        'creator-studio/overview',
        {
          type: 'category',
          label: 'Components',
          items: [
            'creator-studio/components/flow',
            'creator-studio/components/card',
            'creator-studio/components/integration-server',
            'creator-studio/components/connectors',
            'creator-studio/components/connections',
            'creator-studio/components/api',
            'creator-studio/components/action',
            'creator-studio/components/slots'
          ]
        },
        'creator-studio/folders',
        {
          type: 'category',
          label: 'Packages',
          items: [
            'creator-studio/packages/overview',
            'creator-studio/packages/creation-usage',
            'creator-studio/packages/import-export'
          ]
        },
        'creator-studio/deployments',
        {
          type: 'category',
          label: 'Flows',
          items: [
            'creator-studio/flows/standard-flows',
            'creator-studio/flows/building-flows',
            'creator-studio/flows/testing-flows'
          ]
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'creator-studio/integrations/knowledge',
            'creator-studio/integrations/ticketing',
            'creator-studio/integrations/livechat'
          ]
        },
        'creator-studio/publishing-versioning',
        'creator-studio/audit-history',
        'creator-studio/faqs'
      ]
    }
  ],
  virtualAgentSidebar: [
    {
      type: 'category',
      label: 'Virtual Agent',
      items: [
        'virtual-agent/overview',
        {
          type: 'category',
          label: 'Channels',
          items: [
            'virtual-agent/channels/teams',
            'virtual-agent/channels/slack',
            'virtual-agent/channels/web',
            'virtual-agent/channels/widget',
            'virtual-agent/channels/sharepoint-widget'
          ]
        },
        'virtual-agent/usage',
        'virtual-agent/guest-usage',
        'virtual-agent/past-conversations',
        'virtual-agent/skills-gaps'
      ]
    }
  ],
  announcementsSidebar: [
    {
      type: 'category',
      label: 'Announcements',
      items: [
        'announcements/overview',
        'announcements/creating',
        'announcements/scheduling',
        'announcements/logs',
        'announcements/faqs'
      ]
    }
  ],
  helpdeskSidebar: [
    {
      type: 'category',
      label: 'Helpdesk',
      items: [
        'helpdesk/overview',
        {
          type: 'category',
          label: 'Setting Up Helpdesk',
          items: [
            'helpdesk/setup/teams',
            'helpdesk/setup/queues',
            'helpdesk/setup/subscriptions-features',
            'helpdesk/setup/ticket-types'
          ]
        },
        {
          type: 'category',
          label: 'Standard Ticket Types',
          items: [
            'helpdesk/ticket-types/incident',
            'helpdesk/ticket-types/service-request',
            'helpdesk/ticket-types/problem',
            'helpdesk/ticket-types/change'
          ]
        },
        {
          type: 'category',
          label: 'Workflows',
          items: [
            'helpdesk/workflows/approvals'
          ]
        },
        {
          type: 'category',
          label: 'Inbox',
          items: [
            'helpdesk/inbox/metadata-linking',
            'helpdesk/inbox/common-filters'
          ]
        },
        {
          type: 'category',
          label: 'Ticket Management',
          items: [
            'helpdesk/ticket-management/creating',
            'helpdesk/ticket-management/priority-sla',
            'helpdesk/ticket-management/assigning',
            'helpdesk/ticket-management/resolving',
            'helpdesk/ticket-management/linking',
            'helpdesk/ticket-management/moving',
            'helpdesk/ticket-management/transition',
            'helpdesk/ticket-management/bulk-operations',
            'helpdesk/ticket-management/import-export',
            'helpdesk/ticket-management/timesheet',
            'helpdesk/ticket-management/filters'
          ]
        },
        {
          type: 'category',
          label: 'Notes',
          items: [
            'helpdesk/notes/public',
            'helpdesk/notes/private',
            'helpdesk/notes/resolution'
          ]
        },
        'helpdesk/canned-notes',
        'helpdesk/feedback-survey',
        'helpdesk/watchers',
        'helpdesk/ticket-history',
        'helpdesk/similar-tickets',
        'helpdesk/quick-actions',
        'helpdesk/personalization',
        'helpdesk/queue-management',
        'helpdesk/team-collaboration',
        'helpdesk/customer-communication',
        {
          type: 'category',
          label: 'Channels',
          items: [
            'helpdesk/channels/bot',
            'helpdesk/channels/email',
            'helpdesk/channels/service-portal',
            'helpdesk/channels/portal',
            'helpdesk/channels/mobile'
          ]
        },
        'helpdesk/reporting-analytics',
        'helpdesk/faqs'
      ]
    }
  ],
  helpdeskDashboardSidebar: [
    {
      type: 'category',
      label: 'Helpdesk Dashboard',
      items: [
        'helpdesk-dashboard/overview',
        {
          type: 'category',
          label: 'Agent Dashboard',
          items: [
            'helpdesk-dashboard/agent/performance',
            'helpdesk-dashboard/agent/queue-performance'
          ]
        },
        'helpdesk-dashboard/subscriptions',
        'helpdesk-dashboard/reports',
        'helpdesk-dashboard/custom-dashboard',
        'helpdesk-dashboard/combined-dashboard',
        {
          type: 'category',
          label: 'Charts',
          items: [
            'helpdesk-dashboard/charts/data-list',
            'helpdesk-dashboard/charts/stats',
            'helpdesk-dashboard/charts/bar',
            'helpdesk-dashboard/charts/pie',
            'helpdesk-dashboard/charts/line',
            'helpdesk-dashboard/charts/area',
            'helpdesk-dashboard/charts/group',
            'helpdesk-dashboard/charts/summary-table',
            'helpdesk-dashboard/charts/filters'
          ]
        },
        'helpdesk-dashboard/exporting',
        'helpdesk-dashboard/faqs'
      ]
    }
  ],
  servicePortalSidebar: [
    {
      type: 'category',
      label: 'Service Portal',
      items: [
        'service-portal/overview',
        {
          type: 'category',
          label: 'Portal Setup',
          items: [
            'service-portal/portal-setup/offers',
          ]
        },
        {
          type: 'category',
          label: 'Portal Configuration',
          items: [
            'service-portal/portal-configuration/main-page',
            'service-portal/portal-configuration/intent-groups',
            'service-portal/portal-configuration/other-configurations',
          ]
        },
        'service-portal/self-service-options',
        'service-portal/knowledge-base-integration',
        'service-portal/external-linking',
        'service-portal/faqs',
        'service-portal/troubleshooting',
      ]
    }
  ],
  enterpriseSearchSidebar: [
    {
      type: 'category',
      label: 'Enterprise Search',
      items: [
        'enterprise-search/overview',
        'enterprise-search/search-configuration',
        'enterprise-search/search-usage',
        'enterprise-search/search-rules',
        {
          type: 'category',
          label: 'Testing Search',
          items: [
            'enterprise-search/testing-search/test-data',
            'enterprise-search/testing-search/test-plan',
            'enterprise-search/testing-search/test-run',
          ]
        },
        'enterprise-search/search-analytics',
        'enterprise-search/faqs',
      ]
    }
  ],
  auraInsightsSidebar: [
    {
      type: 'category',
      label: 'Aura Insights',
      items: [
        'aura-insights/overview',
        'aura-insights/portal-view',
        'aura-insights/teams-view',
        {
          type: 'category',
          label: 'Tickets Management',
          items: [
            'aura-insights/tickets-management/assignment',
            'aura-insights/tickets-management/timesheet',
            'aura-insights/tickets-management/updates',
            'aura-insights/tickets-management/next-actions',
          ]
        },
        'aura-insights/ticket-analytics',
      ]
    }
  ],
  arenaSidebar: [
    {
      type: 'category',
      label: 'Arena',
      items: [
        'arena/release-notes',
        'arena/help',
        'arena/support',
        'arena/api-documentation',
        'arena/health-status',
        'arena/faqs',
      ]
    }
  ],
  rezolveSupportSidebar: [
    {
      type: 'category',
      label: 'Rezolve Support',
      items: [
        'support/overview',
        'support/tracking-support-requests',
        'support/creating-support-requests',
        'support/analytics',
        'support/access-sharing'
      ]
    }
  ],
  botAnalyticsSidebar: [
    {
      type: 'category',
      label: 'Bot Analytics',
      items: [
        'bot-analytics/overview',
        'bot-analytics/performance',
        'bot-analytics/knowledge-performance',
        'bot-analytics/conversations',
        'bot-analytics/user-engagement-metrics',
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'bot-analytics/reporting/custom-reports',
            'bot-analytics/reporting/scheduled-reports',
            'bot-analytics/reporting/exports',
          ]
        },
      ]
    }
  ],
  automationStudioSidebar: [
    {
      type: 'category',
      label: 'Automation Studio',
      items: [
        'automation-studio/overview',
        'automation-studio/creating-agents',
        'automation-studio/tools',
        'automation-studio/workflow-orchestration',
        'automation-studio/testing-agents',
        'automation-studio/testing-workflows',
        'automation-studio/deploying',
        'automation-studio/export-import',
        'automation-studio/available-actions-triggers',
        'automation-studio/monitoring-analytics',
        'automation-studio/best-practices',
        'automation-studio/faqs',
      ]
    }
  ],
  itAutomationSidebar: [
    {
      type: 'category',
      label: 'IT Automation',
      items: [
        'it-automation/overview',
        'it-automation/rule-based-automations',
        'it-automation/desktop-automation',
        'it-automation/api-based-automations',
        'it-automation/agent-based-automations',
        'it-automation/scheduling-automations',
        'it-automation/monitoring-logging',
        'it-automation/best-practices',
      ]
    }
  ],
  desktopAutomationSidebar: [
    {
      type: 'category',
      label: 'Desktop Automation',
      items: [
        'desktop-automation/overview',
        {
          type: 'category',
          label: 'Scripts Management',
          items: [
            'desktop-automation/scripts-management/creation',
            'desktop-automation/scripts-management/import',
            'desktop-automation/scripts-management/export',
            'desktop-automation/scripts-management/execution',
            'desktop-automation/scripts-management/logging',
            'desktop-automation/scripts-management/scheduling',
            'desktop-automation/scripts-management/versioning',
          ]
        },
        'desktop-automation/outputs-logs',
        'desktop-automation/security',
        'desktop-automation/best-practices',
        'desktop-automation/faqs',
      ]
    }
  ],
  integrationSidebar: [
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'Standard Integrations',
          items: [
            'integrations/standard-integrations/ticketing',
            'integrations/standard-integrations/knowledge',
            'integrations/standard-integrations/livechat',
            'integrations/standard-integrations/desktop-automation',
          ]
        },
        'integrations/app-categories',
        'integrations/apps',
        'integrations/app-operations',
        'integrations/operations-mapping',
        'integrations/third-party-integrations',
        {
          type: 'category',
          label: 'Custom API Integration',
          items: [
            'integrations/custom-api-integration/authentication',
            'integrations/custom-api-integration/data-mapping',
            'integrations/custom-api-integration/scheduling',
          ]
        },
        {
          type: 'category',
          label: 'Usage',
          items: [
            'integrations/usage/ticket-type-form-fields',
            'integrations/usage/ticket-type-event-actions',
            'integrations/usage/bot-flows',
            'integrations/usage/automation-tools',
          ]
        },
        'integrations/logs',
        'integrations/troubleshooting',
      ]
    }
  ],
  liveChatSidebar: [
    {
      type: 'category',
      label: 'Live Chat',
      items: [
        'live-chat/getting-started',
        { 
          type: 'category',
          label: 'Integrations with Other Live Chat Systems',
          items: [
            'live-chat/integrations/servicenow',
          ]
        },
        'live-chat/teams-queues',
        'live-chat/agent-interface',
        'live-chat/managing-chat-sessions',
        'live-chat/canned-responses',
        'live-chat/time-management',
        'live-chat/review-chats',
        'live-chat/feedback-surveys',
        'live-chat/chat-transfer-escalation',
        'live-chat/chat-analytics',
        'live-chat/faqs',
      ]
    }
  ],
  serviceCatalogSidebar: [
   {
     type: 'category',
     label: 'Service Catalog',
     items: [
       'service-catalog/overview',
       'service-catalog/using-default-ticket-types',
       'service-catalog/field-banks',
       {
         type: 'category',
         label: 'Field Types',
         items: [
           'service-catalog/field-types/boolean',
           'service-catalog/field-types/date-datetime',
           'service-catalog/field-types/dropdown',
           'service-catalog/field-types/number',
           'service-catalog/field-types/reference-field',
           'service-catalog/field-types/tags',
           'service-catalog/field-types/text',
           'service-catalog/field-types/rich-text',
           'service-catalog/field-types/people-field',
           'service-catalog/field-types/dependency-field',
           'service-catalog/field-types/special-fields',
           'service-catalog/field-types/media',
         ]
       },
       {
         type: 'category',
         label: 'Creating Ticket Types',
         items: [
           'service-catalog/creating-ticket-types/fields',
           'service-catalog/creating-ticket-types/layouts',
           'service-catalog/creating-ticket-types/linking-layouts-to-views',
           'service-catalog/creating-ticket-types/workflows',
           'service-catalog/creating-ticket-types/actors',
           'service-catalog/creating-ticket-types/offers',
           'service-catalog/creating-ticket-types/metrics-slas',
           'service-catalog/creating-ticket-types/events',
           'service-catalog/creating-ticket-types/actions',
           'service-catalog/creating-ticket-types/email-notification-templates',
           'service-catalog/creating-ticket-types/filters',
           'service-catalog/creating-ticket-types/quick-actions',
           'service-catalog/creating-ticket-types/permission-matrix',
           'service-catalog/creating-ticket-types/relations',
           'service-catalog/creating-ticket-types/dependency-field-mapping',
           'service-catalog/creating-ticket-types/special-fields',
         ]
       },
       'service-catalog/hierarchy-builder',
       'service-catalog/intents',
       'service-catalog/offers-rankings',
       'service-catalog/mail-channel-setup',
       'service-catalog/meta-fields-management',
       'service-catalog/common-actors',
       {
         type: 'category',
         label: 'Workflows',
         items: [
           'service-catalog/workflows/states-transitions',
           'service-catalog/workflows/state-categories',
           'service-catalog/workflows/rules',
           'service-catalog/workflows/approvals',
           'service-catalog/workflows/workflow-editor',
         ]
       },
    ]
   }
  ],
  mspSidebar: [
    {
      type: 'category',
      label: 'MSP Guide',
      items: [
        'msp-guide/features-settings',
        'msp-guide/organizations',
        'msp-guide/domain-whitelisting-blacklisting',
        'msp-guide/audience-management',
        'msp-guide/workspace-management',
        'msp-guide/customer-reference-usage',
        'msp-guide/email-channel',
        {
          type: 'category',
          label: 'Restricting Access',
          items: [
            'msp-guide/restricting-access/ticket-access',
            'msp-guide/restricting-access/knowledge-access',
            'msp-guide/restricting-access/bot-flows',
            'msp-guide/restricting-access/offers-access',
            'msp-guide/restricting-access/connections-access',
          ]
        },
        'msp-guide/managing-knowledge',
        'msp-guide/managing-integrations',
        'msp-guide/analytics',
        'msp-guide/faqs',
      ]
    }
  ]
};
