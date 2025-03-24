---
id: web
title: Connecting Web Content to Knowledge Management
sidebar_label: Web
description: Guide for importing and syncing web-based content into the Knowledge Management system
status: 
whatsPending: 
---

# Connecting Web Content to Knowledge Management

This guide provides detailed instructions for importing and syncing web-based content into the Knowledge Management system, allowing you to leverage public and private web resources as part of your knowledge base.

## Web Content Integration Options

The Knowledge Management system offers several methods to integrate web-based content:

### 1. Web Crawler

The web crawler automatically discovers and imports content from specified websites, following links to create a comprehensive knowledge base.

### 2. URL Import

Import specific web pages or articles by providing their URLs directly.

### 3. RSS/Atom Feed Integration

Automatically import and sync content from blogs, news sites, and other sources that provide RSS or Atom feeds.

### 4. Browser Extension

Use the Knowledge Management browser extension to save web pages directly to your knowledge base while browsing.

## Setting Up Web Crawler Integration

### Prerequisites

- List of seed URLs to start crawling
- Domain whitelist to limit crawling scope
- Admin access to Knowledge Management system

### Configuration Steps

1. In the Knowledge Management admin panel, navigate to "External Repositories"
2. Select "Add Repository" and choose "Web Crawler"
3. Enter the following details:
   - Connection Name (e.g., "Company Documentation")
   - Seed URLs (starting points for crawling)
   - Domain Whitelist (e.g., "company.com, docs.company.com")
   - Crawl Depth (how many links deep to follow)
   - Crawl Frequency (how often to check for updates)
   - Content Selectors (CSS selectors to identify main content)
4. Configure advanced settings:
   - URL Patterns to Include/Exclude
   - Content Type Filters
   - Authentication (if needed for protected content)
5. Click "Test Crawl" to verify the setup with a sample crawl
6. Save the configuration

## URL Import Configuration

For importing specific web pages:

1. Go to "Content" > "Import" > "Web URL"
2. Enter the URL to import
3. Configure content extraction settings:
   - Title Selector (CSS selector for page title)
   - Content Selector (CSS selector for main content)
   - Remove Elements (CSS selectors for ads, navigation, etc.)
4. Preview the extracted content
5. Assign categories, tags, and metadata
6. Click "Import" to add the content to your knowledge base

## RSS/Atom Feed Integration

For automatically importing content from feeds:

1. Navigate to "External Repositories" > "Add Repository" > "RSS/Atom Feed"
2. Enter the feed URL
3. Configure import settings:
   - Update Frequency
   - Content Handling (full content or summaries)
   - Category Mapping
   - Author Attribution
4. Set up content filtering rules (optional)
5. Enable or disable automatic publishing
6. Save the configuration

## Browser Extension Setup

1. Download the Knowledge Management browser extension from:
   - [Chrome Web Store](https://chrome.google.com/webstore) (for Chrome/Edge)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/) (for Firefox)
   - [Safari Extensions](https://apps.apple.com/us/story/id1377753262) (for Safari)
2. Install and configure the extension:
   - Connect to your Knowledge Management instance
   - Log in with your credentials
   - Configure default categories and tags
3. Use the extension to save web pages:
   - Click the extension icon while viewing a page
   - Edit the title, select categories, and add tags
   - Choose to save the full page or selected content
   - Click "Save to Knowledge Base"

## Content Transformation

Configure how web content is transformed during import:

- **HTML Cleaning**: Remove ads, navigation, and other unwanted elements
- **Media Handling**: Download and host images locally or keep external references
- **Link Rewriting**: Update links to work within your knowledge base
- **Content Formatting**: Apply consistent formatting to imported content

## Authentication for Protected Content

For accessing protected web content:

1. Go to "Repositories" > "Web" > "Authentication Profiles"
2. Create a new authentication profile:
   - Basic Auth: Username and password
   - Form Auth: Login form URL, username/password fields, and submit button
   - Cookie Auth: Cookie values for authenticated sessions
   - OAuth: Client ID, secret, and authorization endpoints
3. Assign the authentication profile to your web repository

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Content not extracted properly | Adjust CSS selectors for content extraction |
| Missing images or resources | Configure media handling to download resources |
| Rate limiting or blocking | Adjust crawl frequency and add delays between requests |
| Authentication failures | Verify credentials and authentication method |

### Logs and Diagnostics

Access detailed logs:
1. Go to "System" > "Logs" > "Integration Logs"
2. Filter for "Web" connections
3. Review error messages and timestamps

## Best Practices

- Respect robots.txt directives and website terms of service
- Set reasonable crawl frequencies to avoid overloading websites
- Use specific content selectors to extract only relevant content
- Implement proper attribution for imported content
- Regularly review and clean up imported content

## Next Steps

- Configure [category management](/docs/knowledge-management/category-management) for web content
- Set up [content transformation](/docs/knowledge-management/creating-articles) rules
- Explore [analytics](/docs/knowledge-management/analytics-reporting) to monitor usage of web content

