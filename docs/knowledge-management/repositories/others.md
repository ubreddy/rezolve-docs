---
id: others
title: Connecting Other Knowledge Repositories
sidebar_label: Others
description: Guide for integrating additional knowledge repositories not covered by dedicated connectors
---

# Connecting Other Knowledge Repositories

This guide provides instructions for integrating knowledge repositories that don't have dedicated connectors in the system. These methods allow you to connect virtually any content source to your Knowledge Management platform.

## Available Integration Methods

For repositories without dedicated connectors, you can use these integration approaches:

### 1. Universal API Connector

The Universal API Connector allows you to connect to any system with a REST API.

### 2. File Import

Bulk import content from files in various formats.

### 3. Custom Connector Development

Create custom connectors using our SDK for specialized integrations.

### 4. Email-to-Knowledge

Import content sent to dedicated email addresses.

## Universal API Connector

### Prerequisites

- API documentation for the target system
- Authentication credentials for the target API
- Knowledge of JSON/XML data structures

### Configuration Steps

1. In the Knowledge Management admin panel, navigate to "External Repositories"
2. Select "Add Repository" and choose "Universal API Connector"
3. Enter the following details:
   - Connection Name (e.g., "Custom Wiki")
   - Base API URL (e.g., "https://api.customwiki.com/v1")
   - Authentication Method:
     - API Key
     - OAuth 2.0
     - Basic Auth
     - Custom Header
   - Authentication Credentials
4. Configure API endpoints:
   - Content Listing Endpoint (to retrieve content list)
   - Content Detail Endpoint (to retrieve full content)
   - Search Endpoint (optional)
5. Define data mapping:
   - Map API response fields to Knowledge Management fields
   - Configure content extraction rules
   - Set up metadata mapping
6. Test the connection and save the configuration

### Example: Connecting to a Custom Wiki

```json
{
  "baseUrl": "https://api.customwiki.com/v1",
  "authMethod": "apiKey",
  "authConfig": {
    "headerName": "X-API-Key",
    "keyValue": "your-api-key"
  },
  "endpoints": {
    "list": "/articles",
    "detail": "/articles/{id}",
    "search": "/search?q={query}"
  },
  "mapping": {
    "title": "$.title",
    "content": "$.body",
    "author": "$.metadata.author",
    "updated": "$.metadata.lastModified",
    "categories": "$.metadata.categories[*]"
  }
}
```

## File Import

For importing content from files:

### Supported File Formats

- Microsoft Office (DOCX, XLSX, PPTX)
- PDF
- HTML/XML
- Markdown
- CSV (for metadata and structure)
- ZIP (for batch imports)

### Import Process

1. Go to "Content" > "Import" > "File Import"
2. Select import method:
   - Single File Upload
   - Bulk Upload
   - Structured Import (with metadata CSV)
3. Upload your files
4. Configure import settings:
   - Content extraction rules
   - Metadata extraction
   - Category assignment
   - File handling (embed or extract)
5. Preview the extracted content
6. Start the import process

### Structured Import with Metadata

For more control, create a CSV file with metadata:

| File Path | Title | Category | Tags | Author |
|-----------|-------|----------|------|--------|
| docs/guide1.pdf | User Guide | Guides | manual,user | John Doe |
| docs/faq.docx | FAQ | Support | faq,help | Jane Smith |

Upload this CSV along with a ZIP file containing the referenced documents for a fully structured import.

## Custom Connector Development

For specialized integrations, develop a custom connector:

### Prerequisites

- Development environment with Node.js or Python
- Knowledge Management SDK
- API documentation for the target system

### Development Steps

1. Install the Knowledge Management Connector SDK:
   ```bash
   npm install km-connector-sdk
   # or
   pip install km-connector-sdk
   ```

2. Create a new connector project:
   ```bash
   km-sdk init my-custom-connector
   ```

3. Implement the required interfaces:
   - `ContentProvider` - for retrieving content
   - `SearchProvider` - for searching content (optional)
   - `AuthProvider` - for authentication

4. Package your connector:
   ```bash
   km-sdk package my-custom-connector
   ```

5. Upload the packaged connector in the admin panel under "System" > "Extensions" > "Connectors"

### Example Connector Code (Node.js)

```javascript
const { ContentProvider } = require('km-connector-sdk');

class MyCustomConnector extends ContentProvider {
  async getContentList(options) {
    // Implement content listing logic
    return [
      { id: '1', title: 'Article 1' },
      { id: '2', title: 'Article 2' }
    ];
  }
  
  async getContentDetail(id) {
    // Implement content retrieval logic
    return {
      id,
      title: `Article ${id}`,
      content: `Content for article ${id}`,
      metadata: { /* ... */ }
    };
  }
}

module.exports = MyCustomConnector;
```

## Email-to-Knowledge

Import content sent to dedicated email addresses:

### Setup Process

1. Go to "Content" > "Import" > "Email Import"
2. Create a new email import rule:
   - Generate a unique email address (e.g., kb-import-xyz@yourdomain.knowledgebase.com)
   - Configure content extraction settings:
     - Use email subject as title
     - Use email body as content
     - Extract attachments as embedded files
   - Set category and tag assignment rules
   - Configure sender restrictions
3. Share the generated email address with content contributors
4. Emails sent to this address will be automatically imported

### Email Format Guidelines

Instruct contributors to format emails as follows:

- **Subject**: Article title
- **Body**: Article content (HTML or plain text)
- **Attachments**: Supporting documents or images
- **Special Commands**:
  - Add `#category:name` in the body to assign a category
  - Add `#tags:tag1,tag2` to assign tags
  - Add `#private` to mark content as private

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API connection failures | Verify credentials and endpoint URLs |
| Content extraction problems | Adjust data mapping and extraction rules |
| File format compatibility | Convert files to supported formats |
| Import errors | Check logs for specific error messages |

### Logs and Diagnostics

Access detailed logs:
1. Go to "System" > "Logs" > "Integration Logs"
2. Filter for your custom connection
3. Review error messages and timestamps

## Next Steps

- Configure [category management](/docs/knowledge-management/category-management) for imported content
- Set up [content transformation](/docs/knowledge-management/creating-articles) rules
- Explore [analytics](/docs/knowledge-management/analytics-reporting) to monitor content usage
- Implement [knowledge workflow](/docs/knowledge-management/knowledge-workflow) for maintaining imported content
