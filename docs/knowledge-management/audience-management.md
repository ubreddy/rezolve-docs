---
id: audience-management
title: Audience Management in Knowledge Base
sidebar_label: Audience Management
description: Guide for targeting knowledge content to specific audiences and user groups
---

# Audience Management in Knowledge Base

This guide explains how to effectively target your knowledge content to specific audiences, ensuring users see the most relevant information based on their role, department, permissions, and other attributes.

## Understanding Audience Management

Audience management allows you to:

- Show different content to different user groups
- Personalize the knowledge experience
- Control access to sensitive information
- Deliver role-specific knowledge
- Reduce information overload

## Audience Types and Segmentation

### Built-in Audience Segments

The Knowledge Management system includes several pre-configured audience types:

- **Role-based**: Admin, Manager, End User, etc.
- **Department**: IT, HR, Finance, Marketing, etc.
- **Experience level**: Beginner, Intermediate, Advanced
- **Location**: Office locations, regions, countries
- **Language**: Content language preferences

### Custom Audience Attributes

Create custom audience attributes based on your organization's needs:

1. Navigate to **Admin** > **Audience Management** > **Attributes**
2. Click **Add Attribute**
3. Configure the attribute:
   - Name and description
   - Data type (text, number, boolean, select)
   - Default value
   - Source (manual, imported, or synchronized)
4. Save the attribute

### Audience Groups

Create logical groupings of users with similar needs:

1. Go to **Admin** > **Audience Management** > **Groups**
2. Click **Create Group**
3. Define group criteria using one or more attributes:
   - Simple conditions (Department = "Marketing")
   - Complex conditions with AND/OR operators
   - Dynamic rules based on user behavior
4. Name and describe the audience group
5. Save the group configuration

## Setting Up User Profiles

### User Attribute Sources

Configure where user attributes come from:

- **Authentication provider**: Import from SSO or identity provider
- **HR systems**: Sync with employee databases
- **CRM**: Pull customer data for external knowledge bases
- **Manual assignment**: Set attributes directly in the system
- **User self-selection**: Allow users to set certain attributes

### User Profile Management

1. Navigate to **Admin** > **Users**
2. Select a user to edit their profile
3. Assign audience attributes:
   - Role and department
   - Skill level
   - Product access
   - Custom attributes
4. Save the profile

### Bulk User Management

For managing attributes across many users:

1. Go to **Admin** > **Users** > **Bulk Operations**
2. Upload a CSV file with user IDs and attributes
3. Map CSV columns to system attributes
4. Preview changes before applying
5. Process the update

## Content Targeting

### Article-Level Targeting

Target individual knowledge articles:

1. Edit an article
2. Go to the **Audience** tab
3. Set visibility rules:
   - Visible to all users (default)
   - Visible to specific audience groups
   - Hidden from specific audience groups
   - Complex visibility rules with multiple conditions
4. Save the audience settings

### Section-Level Targeting

Target specific sections within an article:

1. In the article editor, select a section
2. Click the **Audience** button in the toolbar
3. Set audience rules for that section
4. Sections will be visible or hidden based on the user's profile

### Folder and Category Targeting

Apply audience rules to entire folders or categories:

1. Navigate to folder or category settings
2. Select **Audience Rules**
3. Configure visibility settings
4. Choose whether child items inherit these rules

### Search Result Targeting

Personalize search results based on audience:

1. Go to **Admin** > **Search** > **Relevance**
2. Configure audience-based boosting rules
3. Set up audience-specific promoted results
4. Enable or disable audience filtering for search

## Dynamic Content Adaptation

### Content Variations

Create different versions of content for different audiences:

1. Edit an article
2. Select **Add Variation**
3. Choose the audience attribute to vary by
4. Create different content versions for each value
5. Preview how content appears to different audiences

### Smart Content Blocks

Insert dynamic content blocks that adapt to the viewer:

1. In the article editor, add a **Smart Block**
2. Configure display conditions based on audience attributes
3. Create alternative content for each condition
4. Add a default version for users who don't match any condition

### Personalized Examples and Screenshots

Show relevant examples based on user context:

1. Add an **Example Block** to your article
2. Upload different screenshots or examples for different audiences
3. Set audience rules for each example
4. Users will see only the examples relevant to their context

## Testing and Previewing

### Audience Simulator

Test how content appears to different audiences:

1. While editing or viewing content, click **Audience Preview**
2. Select an audience profile to simulate
3. View the content as that audience would see it
4. Switch between different audiences to compare experiences

### Audience Coverage Analysis

Analyze audience coverage across your knowledge base:

1. Go to **Analytics** > **Audience Coverage**
2. View a breakdown of content by audience
3. Identify gaps in content for specific audiences
4. Generate reports on audience coverage

## Measuring Effectiveness

### Audience-Specific Analytics

Track how different audiences interact with content:

1. Navigate to **Analytics** > **Content Performance**
2. Filter by audience attributes
3. Compare metrics across different audiences:
   - View counts and time spent
   - Search success rates
   - Feedback and ratings
   - Self-service resolution rates

### Audience Journey Mapping

Analyze how different audiences navigate your knowledge base:

1. Go to **Analytics** > **User Journeys**
2. Select an audience segment
3. View common navigation paths
4. Identify content discovery patterns
5. Optimize navigation based on audience behavior

## Best Practices

### Content Strategy

- **Start with core audiences**: Focus on the most important user groups first
- **Reuse where possible**: Create variations only when necessary
- **Consider maintenance**: More variations mean more content to maintain
- **Document audience definitions**: Ensure everyone understands who the audiences are

### Technical Implementation

- **Use inheritance**: Apply audience rules at higher levels where appropriate
- **Minimize rule complexity**: Simple rules are easier to maintain
- **Test thoroughly**: Verify that rules work as expected for all audiences
- **Monitor performance**: Check that audience filtering doesn't impact system speed

### Governance

- **Establish clear ownership**: Define who manages audience rules
- **Regular audits**: Review audience rules periodically
- **Change management**: Document changes to audience definitions
- **User feedback**: Collect input on audience targeting effectiveness

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Users seeing wrong content | Verify user profile attributes and rule logic |
| Too much content hidden | Review rule complexity and potential conflicts |
| Performance issues | Optimize rule evaluation and caching |
| Maintenance challenges | Consolidate similar audience rules |

## Next Steps

- Explore [Knowledge Gaps Management](/docs/knowledge-management/knowledge-gaps) to identify missing content for specific audiences
- Learn about [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to measure audience engagement
- Set up [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) with audience-specific approval processes
