---
id: faqs
title: Knowledge Management FAQs
sidebar_label: FAQs
description: Frequently asked questions about the Knowledge Management system
status: 
whatsPending: 
---

# Knowledge Management FAQs

This guide provides answers to frequently asked questions about the Knowledge Management system, helping you troubleshoot common issues and understand key concepts.

## General Questions

### What is the difference between Knowledge Management and a traditional document repository?

Knowledge Management goes beyond simple document storage by:
- Providing intelligent search and discovery capabilities
- Enabling contextual delivery of information
- Supporting multiple content formats and sources
- Offering analytics on content effectiveness
- Facilitating knowledge workflows and governance
- Integrating with support systems and user interfaces

### How does the Knowledge Management system handle different file types?

The system supports a wide range of file types including:
- Text documents (DOC, DOCX, PDF, TXT)
- Spreadsheets (XLS, XLSX, CSV)
- Presentations (PPT, PPTX)
- Images (JPG, PNG, GIF)
- Videos (MP4, MOV, AVI)
- HTML and web content
- Code snippets and technical documentation

Files are processed according to their type, with text extraction, OCR for images, and specialized handling for each format to optimize searchability and presentation.

### What are the system requirements for running Knowledge Management?

**For cloud-hosted solution:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- No specific hardware requirements

**For on-premises deployment:**
- Server: 8+ CPU cores, 32GB+ RAM, 500GB+ storage (scales with content volume)
- Operating System: Linux (Ubuntu 20.04+, RHEL 8+) or Windows Server 2019+
- Database: PostgreSQL 13+ or SQL Server 2019+
- Network: 100Mbps+ connection, outbound internet for updates
- Browser requirements same as cloud version

## Content Management

### How do I bulk import existing knowledge content?

You can bulk import content through several methods:
1. **CSV Import**: Upload a CSV file with metadata and file paths
2. **Folder Import**: Upload a ZIP file with folder structure preserved
3. **API Integration**: Use the REST API for programmatic imports
4. **Repository Connectors**: Connect directly to existing repositories

For detailed steps, see [Uploading Documents](/docs/knowledge-management/uploading-documents).

### What is the maximum file size for uploads?

- Individual file upload limit: 100MB
- Bulk import ZIP file limit: 500MB
- API upload limit: 200MB per file

For larger files, contact your administrator to adjust limits or use the chunked upload API for programmatic uploads.

### How do I manage duplicate content?

The system provides several tools to manage duplicates:
1. **Duplicate Detection**: Automatically identifies similar content during upload
2. **Content Comparison**: Side-by-side comparison of potential duplicates
3. **Merge Tool**: Combines content from multiple sources
4. **Version Control**: Maintains history when replacing duplicates
5. **De-duplication Rules**: Create custom rules for automatic handling

### Can I schedule content to be published or expired?

Yes, you can schedule both publication and expiration:
1. Navigate to the article's settings
2. Select "Schedule Publication" or "Set Expiration"
3. Choose the appropriate date and time
4. Configure notification settings for scheduled events
5. Optionally set up review reminders before expiration

## Search and Discovery

### Why isn't my content appearing in search results?

Content might not appear in search results for several reasons:
1. **Indexing Delay**: New content may take up to 15 minutes to be indexed
2. **Permission Issues**: Check if the content has proper visibility settings
3. **Search Terms**: Try different keywords or phrases
4. **Content Quality**: Low-quality or sparse content may rank lower
5. **Filters**: Check if any active filters are excluding the content

To troubleshoot, try the direct URL to the content to verify access, then check indexing status in the admin panel.

### How can I improve search relevance for specific content?

You can enhance search relevance through:
1. **Metadata Optimization**: Add comprehensive metadata and tags
2. **Content Boosting**: Manually boost important content in admin settings
3. **Synonym Configuration**: Add industry-specific synonyms
4. **Featured Results**: Set up promoted results for common queries
5. **Search Analytics**: Use search logs to identify and address gaps

### How does the AI-powered search work?

Our AI-powered search uses several advanced technologies:
1. **Natural Language Processing**: Understands query intent beyond keywords
2. **Semantic Search**: Matches concepts rather than just exact terms
3. **Machine Learning**: Improves results based on user behavior
4. **Entity Recognition**: Identifies products, issues, and concepts
5. **Context Awareness**: Considers user role, history, and current situation

The system continuously learns from interactions to improve relevance over time.

## Integration and Access

### How do I integrate Knowledge Management with our ticketing system?

Integration with ticketing systems involves:
1. Navigate to **Admin** > **Integrations** > **Ticketing Systems**
2. Select your ticketing platform (ServiceNow, Zendesk, Jira, etc.)
3. Configure authentication (API keys, OAuth)
4. Map fields between systems
5. Set up knowledge suggestion rules
6. Test the integration with sample tickets

For detailed steps, see [Ticket-Based Search](/docs/knowledge-management/search/ticket-based).

### Can users access knowledge content without logging in?

Access options include:
1. **Public Knowledge Base**: Configure specific categories as publicly accessible
2. **Guest Access**: Enable limited access with email verification
3. **Shared Links**: Generate time-limited access links to specific content
4. **Embedded Knowledge**: Embed content in public websites with configurable access

Access controls are granular and can be set at the workspace, category, or individual content level.

### How do I set up Single Sign-On (SSO)?

To configure SSO:
1. Go to **Admin** > **Authentication** > **SSO Configuration**
2. Select your identity provider (Okta, Azure AD, Google, etc.)
3. Configure the connection details:
   - Upload metadata XML or enter endpoint URLs
   - Configure attribute mapping
   - Set up group synchronization (optional)
4. Test the SSO connection
5. Enable for all users or specific groups

## Analytics and Reporting

### What metrics should I track to measure knowledge effectiveness?

Key metrics to track include:
1. **Usage Metrics**:
   - View counts and unique visitors
   - Search volume and success rate
   - Content coverage by topic
   
2. **Effectiveness Metrics**:
   - Self-service resolution rate
   - Feedback scores and ratings
   - Time spent on content
   
3. **Business Impact Metrics**:
   - Ticket deflection rate
   - Support cost reduction
   - Agent handling time
   - Customer satisfaction correlation

For a comprehensive framework, see [Analytics and Reporting](/docs/knowledge-management/analytics-reporting).

### How can I identify knowledge gaps?

Identify knowledge gaps through:
1. **Zero-Result Searches**: Queries that return no results
2. **Low-Click Searches**: Queries where users don't click results
3. **Ticket Analysis**: Common support issues without knowledge
4. **Feedback Analysis**: User comments indicating missing information
5. **AI Gap Detection**: Automated identification of missing topics

The Knowledge Gaps dashboard provides a consolidated view of these indicators.

### Can I get reports on individual author contributions?

Yes, author analytics include:
1. **Contribution Volume**: Number of articles created/edited
2. **Content Performance**: How well their content performs
3. **Quality Metrics**: Accuracy and readability scores
4. **Impact Metrics**: Support deflection and resolution rates
5. **Improvement Trends**: Progress over time

These reports are available to administrators and can be scheduled for regular distribution.

## Troubleshooting

### Why can't users see content they should have access to?

Access issues may be caused by:
1. **Permission Configuration**: Check workspace and content permissions
2. **Group Membership**: Verify user is in the correct groups
3. **Inheritance Issues**: Check if parent folder permissions are properly inherited
4. **Cache Problems**: Try clearing browser cache or private browsing
5. **SSO Attribute Mapping**: Ensure identity provider is sending correct attributes

For urgent access issues, administrators can use the "Access Override" feature to grant temporary access.

### What should I do if content isn't being indexed correctly?

If content indexing issues occur:
1. **Check Format**: Ensure the file format is supported
2. **Verify Extraction**: Preview the extracted text in the admin panel
3. **Manual Reindex**: Trigger a manual reindex of specific content
4. **Check Limits**: Verify the content isn't exceeding size limits
5. **Review Filters**: Check if any indexing filters are excluding the content

For persistent issues, the system logs in **Admin** > **System** > **Indexing Logs** provide detailed diagnostics.

### How do I recover deleted content?

Content recovery options include:
1. **Recycle Bin**: Recently deleted content is in **Admin** > **Content** > **Recycle Bin**
2. **Version History**: Restore previous versions from the article history
3. **Backups**: Administrators can restore from system backups
4. **Export Records**: If enabled, content export records may contain copies
5. **Source Systems**: If integrated, check the original source repository

Deleted content is typically retained in the recycle bin for 30 days before permanent deletion.

## Advanced Features

### How does the system handle multilingual content?

Multilingual support includes:
1. **Content Translation**: Machine or human translation workflows
2. **Language Detection**: Automatic identification of content language
3. **Language-Specific Search**: Search within specific languages
4. **User Language Preferences**: Content displayed in preferred language
5. **Cross-Language Search**: Find content across languages

Configure language settings in **Admin** > **Content** > **Language Settings**.

### Can I customize the user interface for different audiences?

UI customization options include:
1. **Branded Portals**: Create audience-specific interfaces
2. **Custom Themes**: Adjust colors, fonts, and layouts
3. **Widget Configuration**: Customize search, navigation, and features
4. **Role-Based Views**: Different interfaces for different user roles
5. **Embedded Experiences**: Tailored interfaces for external sites

Customizations are managed in **Admin** > **Appearance** > **Customization**.

### How do I implement content governance at scale?

Enterprise governance features include:
1. **Approval Workflows**: Multi-stage review processes
2. **Content Standards**: Automated quality checks
3. **Compliance Tools**: Policy enforcement and auditing
4. **Delegation**: Distributed administration model
5. **Governance Dashboards**: Oversight of content health

For implementation guidance, see [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow).

## Next Steps

- Explore [Organizing Knowledge](/docs/knowledge-management/organizing-knowledge) for best practices on knowledge structure
- Learn about [Audience Management](/docs/knowledge-management/audience-management) to target content to specific users
- Set up [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to measure knowledge effectiveness

