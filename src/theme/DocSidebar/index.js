import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import styles from './styles.module.css';

export default function DocSidebarWrapper(props) {
  return (
    <div className={styles.customSidebar}>
      <DocSidebar {...props} />
    </div>
  );
}
