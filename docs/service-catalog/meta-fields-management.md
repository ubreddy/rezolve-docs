---
id: meta-fields-management
title: Meta Fields Management
sidebar_label: Meta Fields Management
description: Documentation for Meta Fields Management
status: 
whatsPending: 
---

Meta Fields Management allows administrators to customize which fields are displayed in the ticket list view within the Agent UI. This feature enhances visibility of important ticket information without requiring agents to open individual tickets.

## Key Features

### Custom Column Creation
- Add custom columns to the ticket list view
- Map fields from different templates to a single meta field
- Configure the display order of columns in the table layout

### Field Mapping
- Map corresponding template fields to meta fields
- Support for mapping multiple template fields to a single meta field
- Ability to map dependent fields, special fields, or static fields

### Default Fields
The following fields are shown by default in the list view:
- Ticket ID
- Submitted By
- Updated By
- Last Viewed By
- Updated At
- Created At
- Offer Type
- Ticket Type

## Implementation Process
1. Access the Meta Fields section in Service Catalog
2. Create new meta fields with descriptive names
3. Map corresponding template fields to each meta field
4. Use the Table Layout option to arrange the display order of columns

## Dashboard Integration
Meta fields significantly enhance dashboarding capabilities:
- Stacked Bar Charts: Compare ticket volumes by category, location, or agent performance
- Grouped Bar Charts: Track ticket trends across multiple variables
- Line & Series Charts: Analyze response rates and daily ticket trends over time

## Use Cases
- Displaying priority levels across different ticket types
- Showing status information from various templates
- Exposing important dates or deadlines in the list view
- Highlighting customer impact levels or business criticality

## Best Practices
- Create meta fields that provide actionable information at a glance
- Use consistent naming conventions for meta fields
- Limit the number of columns to prevent information overload
- Focus on fields that help agents prioritize their work
- Regularly review and optimize the table layout based on agent feedback
