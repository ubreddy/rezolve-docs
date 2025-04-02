---
id: filters
title: Filters
sidebar_label: Filters
description: Documentation for Filters
status: 
whatsPending: 
---

Filters help users quickly find and organize tickets based on specific criteria. They can be created at both template and tenant levels.

### Filter Types

### Template-Level Filters
- Created in the Filters tab of template settings
- Apply only to tickets created with that specific template
- Useful for template-specific categorization
- Appear in the Agent UI for that template's tickets

![template_filter](/img/Service%20Catalog/Filters.png)

### Tenant-Level Filters
- Created in the Filter section of Service Catalog
- Apply across all templates in the tenant
- Provide consistent filtering options throughout the system
- Can reference any template field values

![tenant_filter](/img/Service%20Catalog/tenant_filter.png)

### Filter Creation
To create a filter:
- Provide a descriptive name (e.g., "IT Department Onboarding")
- Select the field to filter on (e.g., Department)
- Choose the condition (Equals, Not Equals, Is Empty, Is Not Empty)
- Specify the value to filter for (e.g., "IT")

### Filter Conditions
Available conditions include:
- **Equals**: Exact match to the specified value
- **Not Equals**: Excludes the specified value
- **In**: Matches any value in a provided list
- **Not In**: Excludes all values in a provided list
- **Is Empty**: Field has no value
- **Is Not Empty**: Field has any value

### Complex Filtering
Filters can be based on various field types:
- **Actors**: Filter by assigned agents, requestors, etc.
- **Dates**: Filter by creation date, update date, etc.
- **Status**: Filter by current workflow status
- **Metadata**: Filter by ticket type, priority, domain, etc.
- **Text Fields**: Filter by content in subject, summary, etc.
