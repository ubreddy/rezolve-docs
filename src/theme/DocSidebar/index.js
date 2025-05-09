import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocSidebarWrapper(props) {
  return (
    <>
    {/* <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backButton}>
          <span className={styles.backIcon}>«</span>
          <span className={styles.backText}>Back to Home</span>
        </Link>
      </div> */}
    <div className={styles.customSidebar}>
      
      <div className={styles.sidebarContent}>
        <DocSidebar {...props} />
      </div>
    </div>
    </>
  );
}
