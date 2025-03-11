import React, { useState, useRef } from 'react';
import styles from './styles.module.css';

export default function SidebarSearchBar({ onChange }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setValue('');
    onChange('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchInputWrapper}>
        <div className={styles.searchIcon}>
          <svg width="16" height="16" viewBox="0 0 20 20">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          className={styles.searchInput}
          placeholder="Search documentation..."
          value={value}
          onChange={handleChange}
          aria-label="Search documentation"
        />
        {value && (
          <button 
            className={styles.clearButton} 
            onClick={handleClear}
            aria-label="Clear search"
            type="button"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
