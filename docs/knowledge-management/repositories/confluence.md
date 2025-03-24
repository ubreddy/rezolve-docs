---
id: confluence
title: Connecting Confluence to Knowledge Management
sidebar_label: Confluence
description: Step-by-step guide for integrating Atlassian Confluence as a knowledge repository
status: 
whatsPending: 
---

# Connecting Confluence to Knowledge Management

This guide provides detailed instructions for connecting your Atlassian Confluence instance to the Knowledge Management system, allowing you to leverage your existing documentation and maintain a single source of truth.

## Prerequisites

Before connecting Confluence to the Knowledge Management system, ensure you have:

- **Confluence Cloud or Confluence Server 7.0+**: Earlier versions may have limited functionality
- **Admin access** to the Confluence instance you wish to connect
- **Atlassian API token** for authentication
- **Knowledge Management admin privileges** in your platform account

## Connection Methods

### Method 1: Direct API Integration (Recommended)

The direct integration method uses Atlassian's REST API for both Confluence Cloud and Server installations.

#### Step 1: Create an Atlassian API Token

1. Log in to [Atlassian ID](https://id.atlassian.com/manage/api-tokens)
2. Click "Create API token"
3. Provide a label for your token (e.g., "Knowledge Management Integration")
4. Copy the generated token (you won't be able to see it again)

#### Step 2: Configure Knowledge Management

1. In your Knowledge Management admin panel, navigate to "External Repositories"
2. Select "Add Repository" and choose "Confluence"
3. Enter the following details:
   - Connection Name (e.g., "Engineering Confluence")
   - Confluence URL (e.g., "https://company.atlassian.net/wiki" for Cloud or "https://confluence.company.com" for Server)
   - Username (your Atlassian email)
   - API Token (created in Step 1)
   - Space Keys (comma-separated list of Confluence spaces to include)
4. Click "Test Connection" to verify the setup
5. Save the configuration

### Method 2: Scheduled Sync

For environments with stricter security requirements, you can set up a scheduled sync:

1. In the Knowledge Management admin panel, go to "Scheduled Imports"
2. Select "Confluence" as the source
3. Configure the connection details as in Method 1
4. Set the sync schedule (hourly, daily, weekly)
5. Select the spaces and content types to include
6. Define content mapping rules (optional)
7. Save and activate the sync job

## Content Mapping

### Confluence Properties to Metadata

Map Confluence properties to Knowledge Management metadata:

| Confluence Property | Knowledge Management Field |
|---------------------|----------------------------|
| Title | Article Title |
| Creator | Author |
| Last Modified Date | Last Updated |
| Labels | Tags |
| Space | Category |

### Content Types and Filtering

You can filter which content is imported using:

- **Content Types**: Pages, blog posts, attachments
- **Label Filters**: Import only content with specific labels
- **Date Filters**: Import only content created or modified after a certain date
- **Space Filters**: Include or exclude specific spaces or nested pages

## Advanced Configuration

### Permissions Sync

Enable permissions synchronization to maintain the same access controls:

1. Go to "Repository Settings" > "Permissions"
2. Enable "Sync Permissions from Confluence"
3. Map Confluence groups to Knowledge Management roles
4. Set the permissions sync frequency

### Content Transformation

Configure how Confluence content is transformed during import:

- **Macro Handling**: Configure how Confluence macros are processed
- **Attachment Processing**: Set how attachments are imported and linked
- **Table Conversion**: Configure how tables are rendered
- **Image Handling**: Configure how embedded images are processed

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API rate limiting | Adjust sync schedule to avoid hitting Atlassian's rate limits |
| Authentication failure | Verify API token and user permissions |
| Missing content | Check content filtering rules and permissions |
| Macro rendering issues | Configure specific macro handling in transformation settings |

### Logs and Diagnostics

Access detailed connection logs:
1. Go to "System" > "Logs" > "Integration Logs"
2. Filter for "Confluence" connections
3. Review error messages and timestamps

## Performance Optimization

For large Confluence instances:

- Start with a smaller subset of spaces for initial testing
- Use incremental syncing to only import new or changed content
- Schedule syncs during off-peak hours
- Consider content archiving strategies for older documents

## Next Steps

- Configure [category management](/docs/knowledge-management/category-management) for imported Confluence content
- Set up [audience targeting](/docs/knowledge-management/audience-management) for Confluence content
- Explore [analytics](/docs/knowledge-management/analytics-reporting) to monitor usage of Confluence content

