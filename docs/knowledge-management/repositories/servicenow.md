---
id: servicenow
title: Connecting ServiceNow to Knowledge Management
sidebar_label: ServiceNow
description: Step-by-step guide for integrating ServiceNow Knowledge Base as a repository
---

# Connecting ServiceNow to Knowledge Management

This guide provides detailed instructions for connecting your ServiceNow Knowledge Base to the Knowledge Management system, allowing you to leverage your existing IT service management documentation and maintain a single source of truth.

## Prerequisites

Before connecting ServiceNow to the Knowledge Management system, ensure you have:

- **ServiceNow instance** (Rome release or later recommended)
- **Admin access** or sufficient permissions to create integration users
- **REST API access** enabled on your ServiceNow instance
- **Knowledge Management admin privileges** in your platform account

## Connection Methods

### Method 1: OAuth 2.0 Integration (Recommended)

The OAuth 2.0 integration method provides secure, token-based authentication with your ServiceNow instance.

#### Step 1: Create a ServiceNow Application Registry

1. In ServiceNow, navigate to **System OAuth** > **Application Registry**
2. Click **New** and select **Create an OAuth API endpoint for external clients**
3. Fill in the following details:
   - Name: Knowledge Management Integration
   - Client ID: Generate or specify a client ID
   - Client Secret: Generate a secure client secret
   - Redirect URL: Enter your Knowledge Management callback URL
4. For the OAuth API Endpoint, set the following:
   - Access Token Lifespan: 1800 (30 minutes)
   - Refresh Token Lifespan: 8640000 (100 days)
   - Scope: knowledge, read
5. Save the application

#### Step 2: Configure Knowledge Management

1. In your Knowledge Management admin panel, navigate to "External Repositories"
2. Select "Add Repository" and choose "ServiceNow"
3. Enter the following details:
   - Connection Name (e.g., "IT Knowledge Base")
   - ServiceNow Instance URL (e.g., "https://company.service-now.com")
   - Client ID and Client Secret from the Application Registry
   - Select OAuth 2.0 as the authentication method
4. Click "Authorize" to initiate the OAuth flow
5. After successful authorization, click "Test Connection" to verify the setup
6. Save the configuration

### Method 2: Basic Authentication

For testing or environments where OAuth is not configured:

1. In ServiceNow, create a dedicated integration user with knowledge_admin role
2. In the Knowledge Management admin panel, select "Basic Auth" as the authentication method
3. Enter the username and password for the integration user
4. Note: This method is less secure and not recommended for production environments

## Content Mapping

### ServiceNow Knowledge Articles to Knowledge Management

Map ServiceNow fields to Knowledge Management metadata:

| ServiceNow Field | Knowledge Management Field |
|------------------|----------------------------|
| Short Description | Article Title |
| Author | Author |
| Updated | Last Updated |
| Knowledge Base | Category |
| Text | Content |
| Attachments | Attachments |

### Content Filtering

You can filter which content is imported using:

- **Knowledge Bases**: Select specific knowledge bases to include
- **Article Types**: Filter by article type (how-to, reference, etc.)
- **Workflow State**: Import only published articles or include drafts
- **Categories**: Filter by ServiceNow categories

## Advanced Configuration

### Permissions Sync

Enable permissions synchronization to maintain the same access controls:

1. Go to "Repository Settings" > "Permissions"
2. Enable "Sync Permissions from ServiceNow"
3. Map ServiceNow roles to Knowledge Management roles
4. Set the permissions sync frequency

### Content Transformation

Configure how ServiceNow content is transformed during import:

- **HTML Cleaning**: Remove ServiceNow-specific markup
- **Image Processing**: Configure how embedded images are handled
- **Attachment Handling**: Set how file attachments are processed
- **Link Rewriting**: Update internal links to work within Knowledge Management

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Authentication errors | Verify credentials and API access |
| Missing articles | Check knowledge base permissions and filtering rules |
| Formatting issues | Adjust HTML transformation settings |
| Slow synchronization | Optimize filtering to reduce the volume of articles |

### Logs and Diagnostics

Access detailed connection logs:
1. Go to "System" > "Logs" > "Integration Logs"
2. Filter for "ServiceNow" connections
3. Review error messages and timestamps

## Performance Optimization

For large ServiceNow knowledge bases:

- Start with a smaller subset of articles for initial testing
- Use incremental syncing to only import new or changed articles
- Schedule syncs during off-peak hours
- Consider content archiving strategies for older articles

## Next Steps

- Implement [category management](/docs/knowledge-management/category-management) for imported ServiceNow articles
- Set up [audience targeting](/docs/knowledge-management/audience-management) based on ServiceNow roles
- Configure [analytics](/docs/knowledge-management/analytics-reporting) to track usage of ServiceNow content
- Explore [knowledge workflow](/docs/knowledge-management/knowledge-workflow) for maintaining content across systems
