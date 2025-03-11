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
    count: 42,
    color: colors.primary
  },
  {
    title: 'Knowledge Management',
    icon: '📚',
    description: 'Manage and organize your knowledge base effectively',
    path: '/docs/knowledge-management/content/writing-guide',
    count: 57,
    color: colors.primary
  },
  {
    title: 'Helpdesk',
    icon: '🎯',
    description: 'Handle support tickets and customer inquiries',
    path: '/docs/helpdesk',
    count: 45,
    color: colors.primary
  },
  {
    title: 'Bot Analytics',
    icon: '📊',
    description: 'Track and analyze bot performance metrics',
    path: '/docs/bot-analytics',
    count: 16,
    color: colors.primary
  },
  {
    title: 'Announcements',
    icon: '📢',
    description: 'Stay updated with the latest features and changes',
    path: '/docs/announcements',
    count: 16,
    color: colors.primary
  },
  {
    title: 'Administration',
    icon: '⚙️',
    description: 'Manage system settings and user permissions',
    path: '/docs/administration',
    count: 41,
    color: colors.primary
  },
  {
    title: 'Helpdesk Dashboard',
    icon: '📱',
    description: 'Monitor and manage support operations',
    path: '/docs/helpdesk-dashboard',
    count: 36,
    color: colors.primary
  },
  {
    title: 'Integrations',
    icon: '🔌',
    description: 'Connect with other tools and services',
    path: '/docs/integrations',
    count: 51,
    color: colors.primary
  },
  {
    title: 'IT Automation',
    icon: '⚡',
    description: 'Automate routine IT tasks and workflows',
    path: '/docs/it-automation',
    count: 40,
    color: colors.primary
  },
  {
    title: 'Live Chat',
    icon: '💬',
    description: 'Real-time customer support features',
    path: '/docs/live-chat',
    count: 32,
    color: colors.primary
  },
  {
    title: 'Creator Studio',
    icon: '🎨',
    description: 'Build and customize chatbot experiences',
    path: '/docs/creator-studio',
    count: 44,
    color: colors.primary
  },
  {
    title: 'Automation Studio',
    icon: '🤖',
    description: 'Design and implement automated workflows',
    path: '/docs/automation-studio',
    count: 51,
    color: colors.primary
  },
  {
    title: 'Virtual Agent',
    icon: '🎭',
    description: 'Configure and manage AI-powered agents',
    path: '/docs/virtual-agent',
    count: 58,
    color: colors.primary
  },
  {
    title: 'Arena',
    icon: '🏟️',
    description: 'Test and train your virtual agents',
    path: '/docs/arena',
    count: 34,
    color: colors.primary
  },
  {
    title: 'Service Portal',
    icon: '🌐',
    description: 'Self-service portal configuration',
    path: '/docs/service-portal',
    count: 42,
    color: colors.primary
  },
  {
    title: 'Service Catalog',
    icon: '📑',
    description: 'Manage and organize available services',
    path: '/docs/service-catalog',
    count: 39,
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
