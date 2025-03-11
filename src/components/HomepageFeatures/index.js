import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Pleasant, uniform color scheme
const colors = {
  primary: '#3578e5', // Docusaurus blue
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
    description: 'Learn the basics and get up to speed quickly',
    path: '/docs/getting-started/introduction',
    count: 13,
    color: colors.primary
  },
  {
    title: 'Administration',
    icon: '⚙️',
    description: 'Manage system settings and user permissions',
    path: '/docs/administration/introduction',
    count: 29,
    color: colors.primary
  },
  {
    title: 'Bot Administration',
    icon: '👨‍💻',
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
    description: 'Configure and manage AI-powered agents',
    path: '/docs/virtual-agent/overview',
    count: 10,
    color: colors.primary
  },
  {
    title: 'Announcements',
    icon: '📢',
    description: 'Stay updated with the latest features and changes',
    path: '/docs/announcements/overview',
    count: 5,
    color: colors.primary
  },
  {
    title: 'Helpdesk',
    icon: '🎯',
    description: 'Handle support tickets and customer inquiries',
    path: '/docs/helpdesk/overview',
    count: 43,
    color: colors.primary
  },
  {
    title: 'Helpdesk Dashboard',
    icon: '📱',
    description: 'Monitor and manage support operations',
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
    icon: '🤖',
    description: 'Design and implement automated workflows',
    path: '/docs/automation-studio/overview',
    count: 12,
    color: colors.primary
  },
  {
    title: 'IT Automation',
    icon: '⚡',
    description: 'Automate routine IT tasks and workflows',
    path: '/docs/it-automation/overview',
    count: 8,
    color: colors.primary
  },
  {
    title: 'Desktop Automation',
    icon: '⚡',
    description: 'Automate routine desktop tasks',
    path: '/docs/desktop-automation/overview',
    count: 12,
    color: colors.primary
  },
  {
  title: 'Integrations',
  icon: '🔌',
  description: 'Connect with other tools and services',
  path: '/docs/integrations/overview',
  count: 19,
  color: colors.primary
  },
  {
    title: 'Live Chat',
    icon: '💬',
    description: 'Real-time customer support features',
    path: '/docs/live-chat/getting-started',
    count: 12,
    color: colors.primary
  },
  {
    title: 'Service Catalog',
    icon: '📑',
    description: 'Manage and organize available services',
    path: '/docs/service-catalog/overview',
    count: 42,
    color: colors.primary
  },
  {
    title: 'MSP Guide',
    icon: '📖',
    description: 'Manage your MSP effectively',
    path: '/docs/msp-guide/features-settings',
    count: 16,
    color: colors.primary
  },
  
  {
    title: 'Service Portal',
    icon: '🌐',
    description: 'Self-service portal configuration',
    path: '/docs/service-portal/overview',
    count: 10,
    color: colors.primary
  },
  {
    title: 'Aura Insights',
    icon: '🔍',
    description: 'Insights into bot performance and ticket management',
    path: '/docs/aura-insights/overview',
    count: 8,
    color: colors.primary
  },
  {
    title: 'Enterprise Search',
    icon: '🔍',
    description: 'Search and manage your data effectively',
    path: '/docs/enterprise-search/overview',
    count: 9,
    color: colors.primary
  },
  
  
  {
    title: 'Arena',
    icon: '🏟️',
    description: 'Test and train your virtual agents',
    path: '/docs/arena/release-notes',
    count: 6,
    color: colors.primary
  },
  {
    title: 'Rezolve Support',
    icon: '',
    description: 'Get help and support from Rezolve',
    path: '/docs/support/overview',
    count: 5,
    color: colors.primary
  },
  
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
            <span className={styles.docCount} style={{backgroundColor: `${color}22`, color: color}}>
              {count} docs
            </span>
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
          <h2>Documentation Topics</h2>
          <p>Browse our comprehensive documentation library</p>
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
