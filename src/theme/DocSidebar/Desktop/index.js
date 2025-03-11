import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import DocSidebarDesktop from '@theme-original/DocSidebar/Desktop';
import Link from '@docusaurus/Link';
import SidebarSearchBar from '../SearchBar';
import styles from './styles.module.css';

export default function DocSidebarDesktopWrapper(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSidebar, setFilteredSidebar] = useState(null);
  const location = useLocation();

  // Reset search when navigation occurs
  useEffect(() => {
    setSearchQuery('');
    setFilteredSidebar(null);
  }, [location.pathname]);

  // Simple function to filter sidebar items based on search query
  const filterSidebarItems = (items, query) => {
    if (!items || !Array.isArray(items)) {
      return [];
    }

    const lowerCaseQuery = query.toLowerCase();
    
    return items.reduce((filtered, item) => {
      if (!item) return filtered;
      
      const label = item.label || '';
      const matchesQuery = label.toLowerCase().includes(lowerCaseQuery);
      
      if (item.type === 'category') {
        const filteredItems = filterSidebarItems(item.items, query);
        
        if (matchesQuery || filteredItems.length > 0) {
          filtered.push({
            ...item,
            items: filteredItems
          });
        }
      } else if (matchesQuery) {
        filtered.push(item);
      }
      
      return filtered;
    }, []);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredSidebar(null);
    } else {
      // Create a deep copy of the sidebar to avoid mutating props
      const sidebarCopy = JSON.parse(JSON.stringify(props.sidebar));
      const filtered = filterSidebarItems(sidebarCopy, query);
      setFilteredSidebar(filtered);
    }
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarHeader}>
        <div className={styles.searchContainer}>
          <SidebarSearchBar onChange={handleSearchChange} />
        </div>
      </div>
      <div className={styles.sidebarContent}>
        <DocSidebarDesktop 
          {...props} 
          sidebar={filteredSidebar || props.sidebar}
        />
      </div>
    </div>
  );
}
