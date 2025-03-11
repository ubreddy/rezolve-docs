import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItemWrapper(props) {
  // Just pass through the original component without adding back buttons
  return <DocSidebarItem {...props} />;
}
