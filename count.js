// @ts-check

const sidebarConfig = require("./sidebars.js");

/**
 * Recursively counts only doc items (ignoring categories).
 * @param {any[]} items - Sidebar items array
 * @returns {number} - Total count of markdown files (docs)
 */
function countDocs(items) {
  let count = 0;
  for (const item of items) {
    if (typeof item === "string") {
      count++; // Direct markdown file reference
    } else if (typeof item === "object" && item.items) {
      count += countDocs(item.items); // Recursively count docs in categories
    } else if (typeof item === 'object' && item.type === 'doc') count++
  }
  return count;
}

/**
 * Parses the sidebar and prints total doc counts per topic.
 * @param {any} sidebarConfig - Sidebar configuration
 */
function parseSidebar(sidebarConfig) {
  const counts = {};
  for (const [sidebarName, sidebarItems] of Object.entries(sidebarConfig)) {
    counts[sidebarName] = countDocs(sidebarItems); // Only count docs
  }
  return counts;
}

// Run and print results
const result = parseSidebar(sidebarConfig);
const total = Object.values(result).reduce((a, b) => a + b, 0);
console.log("Total markdown file (doc) count per topic:", result);
console.log("Total markdown file (doc) count: ", total);
