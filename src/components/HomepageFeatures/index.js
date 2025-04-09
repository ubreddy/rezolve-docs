import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Pleasant, uniform color scheme
const colors = {
  primary: '#34A853', // Rezolve green
  secondary: '#1877F2',
  tertiary: '#4F46E5',
  success: '#34A853',
  info: '#06B6D4',
  warning: '#F59E0B',
  danger: '#E91E63'
};

const FeatureList = [
  {
    title: 'Getting Started',
    icon: '🚀',
    description: 'Get Started with Rezolve platform',
    path: '/docs/getting-started/introduction',
    count: 21,
    color: colors.primary
  },
  {
    title: 'Administration',
    icon: '⚙️',
    description: 'Manage your tenant and global settings',
    path: '/docs/administration/introduction',
    count: 29,
    color: colors.primary
  },
  {
    title: 'Bot Administration',
    icon: '🤖',
    description: 'Manage bot settings and configurations',
    path: '/docs/bot-administration/overview',
    count: 17,
    color: colors.primary
  },
  {
    title: 'Creator Studio',
    icon: '🎨',
    description: 'Build and customize chatbot experiences',
    path: '/docs/creator-studio/overview',
    count: 23,
    color: colors.primary
  },
  {
    title: 'Knowledge Management',
    icon: '📚',
    description: 'Manage and organize your knowledge base effectively',
    path: '/docs/knowledge-management/overview',
    count: 23,
    color: colors.primary
  },
  {
    title: 'Virtual Agent',
    icon: '🎭',
    description: 'Manage virtual agent settings and configurations',
    path: '/docs/virtual-agent/overview',
    count: 10,
    color: colors.primary
  },
  {
    title: 'Announcements',
    icon: '📢',
    description: 'Manage announcements and notifications to your organization\'s users',
    path: '/docs/announcements/overview',
    count: 5,
    color: colors.primary
  },
  {
    title: 'Helpdesk',
    icon: '🎯',
    description: 'Manage incidents requests and business processes',
    path: '/docs/helpdesk/overview',
    count: 43,
    color: colors.primary
  },
  {
    title: 'Helpdesk Dashboard',
    icon: '📱',
    description: 'Monitor and manage helpdesk operations',
    path: '/docs/helpdesk-dashboard/overview',
    count: 18,
    color: colors.primary
  },
  {
    title: 'Bot Analytics',
    icon: '📊',
    description: 'Track and analyze bot performance metrics',
    path: '/docs/bot-analytics/overview',
    count: 8,
    color: colors.primary
  },
  
  {
    title: 'Automation Studio',
    icon: '⚙️',
    description: 'Coming Soon',
    path: '/docs/automation-studio/overview',
    // count: 12,
    color: colors.primary
  },
  {
    title: 'IT Automation',
    icon: '⚡',
    description: 'Coming Soon',
    path: '/docs/it-automation/overview',
    // count: 8,
    color: colors.primary
  },
  {
    title: 'Desktop Automation',
    icon: '⚡',
   description: 'Coming Soon',
    path: '/docs/desktop-automation/overview',
    // count: 12,
    color: colors.primary
  },
  {
  title: 'Integrations',
  icon: '🔌',
  description: 'Coming Soon',
  path: '/docs/integrations/overview',
  // count: 19,
  color: colors.primary
  },
  {
    title: 'Live Chat',
    icon: '💬',
    description: 'Configure and use Live Chat',
    path: '/docs/live-chat/getting-started',
    count: 12,
    color: colors.primary
  },
  {
    title: 'Service Catalog',
    icon: '📑',
    description: 'Manage your helpdesk services and business processes',
    path: '/docs/service-catalog/overview',
    count: 42,
    color: colors.primary
  },
  {
    title: 'MSP Guide',
    icon: '📖',
    description: 'Managed Service Provider (MSP) guide',
    path: '/docs/msp-guide/features-settings',
    count: 16,
    color: colors.primary
  },
  
  {
    title: 'Service Portal',
    icon: '🌐',
    description: 'Configure and use Self-service portal',
    path: '/docs/service-portal/overview',
    count: 10,
    color: colors.primary
  },
  {
    title: 'Aura Insights',
    icon: '🔍',
    description: 'Coming Soon',
    path: '/docs/aura-insights/overview',
    // count: 8,
    color: colors.primary
  },
  {
    title: 'Enterprise Search',
    icon: '🔍',
    description: 'Coming Soon',
    path: '/docs/enterprise-search/overview',
    // count: 9,
    color: colors.primary
  },
  
  
  {
    title: 'Rezolve Arena',
    icon: '🏟️',
    description: 'Rezolve Arena for help, releases and support',
    path: '/docs/arena/release-notes',
    count: 6,
    color: colors.primary
  },
  {
    title: 'Rezolve Support',
    icon: '✅',
    description: 'Get help and support from Rezolve',
    path: '/docs/support/overview',
    count: 5,
    color: colors.primary
  }
  
];

function Feature({title, description, icon, path, count, color}) {
  return (
    <div className={styles.featureItem}>
      <Link to={path} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className={styles.featureContent}>
            <div className={styles.featureHeader}>
              <div className={styles.featureIcon} style={{backgroundColor: color}}>
                <span role="img" aria-label={title}>{icon}</span>
              </div>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            {count && <span className={styles.docCount} style={{backgroundColor: `${color}22`, color: color}}>
              {count} docs
            </span>}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Platform Documentation</h2>
          <p>Find answers to your questions and learn how to use Rezolve platform</p>
        </div>
        <div className={styles.cardGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
