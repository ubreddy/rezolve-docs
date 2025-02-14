import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI-Powered Service Management',
    description: (
      <>
        Leverage cutting-edge AI technology to automate and enhance your IT service management processes.
      </>
    ),
  },
  {
    title: 'Intelligent Knowledge Base',
    description: (
      <>
        Automatically generate, organize, and maintain your knowledge base with AI-driven insights and recommendations.
      </>
    ),
  },
  {
    title: 'Smart Automation',
    description: (
      <>
        Streamline workflows and reduce manual effort with intelligent automation powered by our AI agents.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
