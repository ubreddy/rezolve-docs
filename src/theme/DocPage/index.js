import React from 'react';
import DocPage from '@theme-original/DocPage';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocPageWrapper(props) {
  return (
    <div className={styles.docPageWrapper}>
      {/* <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backButton}>
          <span className={styles.backIcon}>«</span>
          <span className={styles.backText}>Back to Home</span>
        </Link>
      </div> */}
      <DocPage {...props} />
    </div>
  );
}
