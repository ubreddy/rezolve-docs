import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function BackButton() {
  return (
    <div className={styles.backButtonContainer}>
      {/* <Link to="/" className={styles.backButton}>
        <span className={styles.backIcon}>«</span>
        <span className={styles.backText}>Back to Home</span>
      </Link> */}
    </div>
  );
}
