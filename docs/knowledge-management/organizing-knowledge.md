---
id: organizing-knowledge
title: Organizing Knowledge Around Workspaces and Folders
sidebar_label: Organizing Knowledge
description: Guide for effectively organizing your knowledge base using workspaces, folders, and other organizational tools
---

# Organizing Knowledge Around Workspaces and Folders

This guide provides strategies and best practices for organizing your knowledge content using workspaces, folders, and other organizational structures to ensure information is easily discoverable and maintainable.

## Knowledge Organization Fundamentals

### Key Organization Structures

The Knowledge Management system offers several ways to organize content:

- **Workspaces**: High-level containers for department or team-specific knowledge
- **Folders**: Hierarchical organization within workspaces
- **Categories**: Cross-cutting classification that can span workspaces
- **Tags**: Flexible, keyword-based organization
- **Collections**: Curated sets of related content

## Setting Up Workspaces

### When to Use Workspaces

Workspaces are ideal for separating knowledge by:

- Business units or departments
- Product lines
- Customer segments
- Geographic regions
- Project teams

### Creating a Workspace

1. Navigate to **Admin** > **Workspaces** > **Create New**
2. Configure workspace settings:
   - Name and description
   - Icon or color theme
   - Default language
   - Access permissions
   - Integration settings
3. Define workspace administrators
4. Set up initial folder structure
5. Configure workspace-specific settings:
   - Custom metadata fields
   - Approval workflows
   - Content templates

### Workspace Best Practices

- Limit the number of top-level workspaces to avoid fragmentation
- Create clear naming conventions for workspaces
- Document the purpose and scope of each workspace
- Regularly review workspace usage and consolidate if necessary

## Folder Structures

### Designing an Effective Folder Hierarchy

Create a logical folder structure that:

- Reflects how users look for information
- Balances breadth and depth (aim for 3-4 levels maximum)
- Uses consistent naming conventions
- Accommodates future growth

### Common Folder Organization Patterns

#### Product-Based Structure

```
Product A/
  ├── User Guides/
  ├── Technical Documentation/
  ├── Troubleshooting/
  └── Release Notes/
Product B/
  ├── User Guides/
  ...
```

#### Audience-Based Structure

```
End Users/
  ├── Getting Started/
  ├── Common Tasks/
  └── Troubleshooting/
Administrators/
  ├── Installation/
  ├── Configuration/
  └── Maintenance/
Developers/
  ├── API Reference/
  ├── Code Examples/
  └── Best Practices/
```

#### Process-Based Structure

```
Onboarding/
  ├── Account Setup/
  ├── Initial Training/
  └── First 30 Days/
Daily Operations/
  ├── Standard Procedures/
  ├── Checklists/
  └── Common Issues/
Compliance/
  ├── Policies/
  ├── Regulations/
  └── Audit Preparation/
```

### Folder Permissions

Configure access controls at the folder level:

1. Navigate to the folder settings
2. Select **Permissions**
3. Choose a permission model:
   - Inherit from parent
   - Custom permissions
   - Public to all workspace members
4. Assign specific permissions to user groups:
   - View only
   - Comment
   - Edit
   - Manage

## Cross-Cutting Organization

### Using Categories

Categories provide a classification system that can span across workspaces and folders:

1. Go to **Admin** > **Categories** > **Manage**
2. Create a category hierarchy
3. Define category rules and governance
4. Apply categories to content manually or automatically

### Tagging Strategy

Develop a consistent tagging approach:

- Create a controlled tag vocabulary
- Define tag governance rules
- Use tag suggestions to encourage consistency
- Implement tag hierarchies for related concepts
- Regularly audit and clean up tags

### Collections

Create curated collections for specific purposes:

- Onboarding collections for new employees
- Project-specific collections
- Training paths
- Featured content
- Seasonal or time-sensitive information

## Advanced Organization Techniques

### Metadata-Based Organization

Use custom metadata to enhance organization:

1. Define custom metadata fields in **Admin** > **Metadata**
2. Apply metadata to content
3. Create filtered views based on metadata
4. Enable faceted search using metadata fields

### Dynamic Content Organization

Implement dynamic organization based on:

- User behavior and preferences
- Content popularity and ratings
- Recency and relevance
- User role and permissions

### Relationship-Based Organization

Connect related content:

- Create explicit relationships between articles
- Set up prerequisite or follow-up content links
- Build knowledge graphs to visualize connections
- Use "See Also" sections for related content

## Governance and Maintenance

### Organization Governance

Establish clear governance for your organization system:

- Document organization principles and guidelines
- Define roles and responsibilities
- Create approval processes for structural changes
- Schedule regular organization reviews

### Maintenance Activities

Regular maintenance tasks to keep organization effective:

- Audit unused folders and consolidate content
- Review and update category hierarchies
- Clean up unused or redundant tags
- Verify permission settings
- Check for misplaced or miscategorized content

## Migration and Reorganization

### Planning a Reorganization

When reorganizing existing content:

1. Analyze current usage patterns and pain points
2. Design the target organization structure
3. Create a migration plan with minimal disruption
4. Communicate changes to users
5. Implement redirects for bookmarked content
6. Provide a transition period with both structures

### Bulk Organization Tools

Use bulk tools for efficient reorganization:

1. Go to **Admin** > **Bulk Operations**
2. Select **Reorganize Content**
3. Use filters to select content to reorganize
4. Apply bulk changes to:
   - Move content between folders
   - Recategorize content
   - Update tags and metadata
   - Change permissions

## Best Practices

- **Balance structure and flexibility**: Too rigid or too loose organization both cause problems
- **Consider the user perspective**: Organize based on how users look for information, not how it's created
- **Keep it simple**: Simpler structures are easier to maintain and navigate
- **Be consistent**: Use consistent naming and organization patterns
- **Plan for growth**: Design structures that can accommodate new content areas
- **Document your system**: Create clear guidelines for how content should be organized

## Next Steps

- Explore [Audience Management](/docs/knowledge-management/audience-management) to target content to specific users
- Learn about [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) for content lifecycle management
- Set up [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to monitor content organization effectiveness
