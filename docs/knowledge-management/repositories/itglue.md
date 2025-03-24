---
id: itglue
title: Connecting ITGlue to Knowledge Management
sidebar_label: ITGlue
description: Step-by-step guide for integrating ITGlue as a knowledge repository
status: 
whatsPending: 
---

# Connecting ITGlue to Knowledge Management

This guide provides detailed instructions for connecting your ITGlue instance to the Knowledge Management system, allowing you to leverage your existing IT documentation and maintain a single source of truth.

## Prerequisites

Before connecting ITGlue to the Knowledge Management system, ensure you have:

- **Active ITGlue account** with administrative access
- **ITGlue API key** with appropriate permissions
- **Knowledge Management admin privileges** in your platform account

## Connection Methods

### Method 1: API Integration

The API integration method uses ITGlue's REST API to securely connect and sync content.

#### Step 1: Generate an ITGlue API Key

1. Log in to your ITGlue account as an administrator
2. Navigate to **Account** > **API Keys**
3. Click **+ New API Key**
4. Provide a descriptive name (e.g., "Knowledge Management Integration")
5. Select the appropriate permissions:
   - `read` for documentation
   - `read` for configurations
   - `read` for organizations
6. Copy the generated API key (you won't be able to see it again)

#### Step 2: Configure Knowledge Management

1. In your Knowledge Management admin panel, navigate to "External Repositories"
2. Select "Add Repository" and choose "ITGlue"
3. Enter the following details:
   - Connection Name (e.g., "IT Documentation")
   - ITGlue URL (e.g., "https://api.itglue.com" or your custom domain)
   - API Key (generated in Step 1)
   - Select content types to import (Flexible Assets, Documents, Passwords, etc.)
4. Click "Test Connection" to verify the setup
5. Save the configuration

### Method 2: Scheduled Sync

For environments with stricter security requirements or large volumes of data:

1. In the Knowledge Management admin panel, go to "Scheduled Imports"
2. Select "ITGlue" as the source
3. Configure the connection details as in Method 1
4. Set the sync schedule (hourly, daily, weekly)
5. Select the organizations and content types to include
6. Define content mapping rules (optional)
7. Save and activate the sync job

## Content Mapping

### ITGlue Assets to Knowledge Management

Map ITGlue content types to Knowledge Management:

| ITGlue Content Type | Knowledge Management Mapping |
|---------------------|------------------------------|
| Flexible Assets | Custom article types |
| Documents | Standard articles with attachments |
| Passwords | Secure notes (with encryption) |
| Configurations | Technical documentation |
| Organizations | Categories or workspaces |

### Content Filtering

You can filter which content is imported using:

- **Organizations**: Select specific organizations to include
- **Asset Types**: Filter by flexible asset types
- **Tags**: Import only content with specific tags
- **Date Filters**: Import only content created or modified after a certain date

## Advanced Configuration

### Permissions Sync

Enable permissions synchronization to maintain the same access controls:

1. Go to "Repository Settings" > "Permissions"
2. Enable "Sync Permissions from ITGlue"
3. Map ITGlue user groups to Knowledge Management roles
4. Set the permissions sync frequency

### Content Transformation

Configure how ITGlue content is transformed during import:

- **Flexible Asset Handling**: Configure how custom fields are mapped
- **Document Processing**: Set how documents and attachments are imported
- **Password Security**: Configure encryption and masking for sensitive information
- **Relationship Handling**: Preserve relationships between assets

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API rate limiting | Adjust sync schedule to avoid hitting ITGlue's rate limits |
| Authentication failure | Verify API key and permissions |
| Missing content | Check content filtering rules and permissions |
| Custom field mapping issues | Review flexible asset field mappings |

### Logs and Diagnostics

Access detailed connection logs:
1. Go to "System" > "Logs" > "Integration Logs"
2. Filter for "ITGlue" connections
3. Review error messages and timestamps

## Performance Optimization

For large ITGlue instances:

- Start with a smaller subset of organizations for initial testing
- Use incremental syncing to only import new or changed content
- Schedule syncs during off-peak hours
- Consider content archiving strategies for older documents

## Security Considerations

ITGlue often contains sensitive information, so consider these security practices:

- Use IP restrictions on your ITGlue API key if possible
- Enable encryption for sensitive data in Knowledge Management
- Implement strict role-based access controls
- Regularly audit access logs and permissions

## Next Steps

- Configure [category management](/docs/knowledge-management/category-management) for imported ITGlue content
- Set up [audience targeting](/docs/knowledge-management/audience-management) to control access to sensitive information
- Explore [analytics](/docs/knowledge-management/analytics-reporting) to monitor usage of ITGlue content

