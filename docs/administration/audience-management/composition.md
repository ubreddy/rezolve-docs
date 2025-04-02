---
id: audience-management-composition
title: Audience Composition
sidebar_label: Audience Composition
description: Detailed guide to creating and managing audience segments with different composition methods
status: 
whatsPending: 
---

# Audience Composition

Audience composition in Rezolve.ai refers to the specific criteria and conditions that determine which users are included in an audience. This flexible framework allows for precise targeting based on various user characteristics, creating dynamic segments that automatically update as user properties change.

## Composition Criteria Types

Audiences can be composed using several types of criteria:

- **Organization-Wide**: Including all users within the tenant, serving as the broadest possible audience
- **Group-Based**: Targeting members of specific groups, leveraging existing organizational structures
- **Role-Based**: Including users with particular roles or permissions, focusing on functional responsibilities
- **Attribute-Based**: Defining audiences based on user profile attributes like location, department, or job title
- **User-Specific**: Explicitly including or excluding particular individuals regardless of other criteria


![Audience Composition](/img/administration/Audience_Composition.png)



## Available Operators

For each criterion type, various operators are available to create precise conditions:

- **Equality Operators**: IS, IS NOT for exact matches or exclusions
- **Collection Operators**: IN, NOT IN for checking membership in value sets
- **Text Operators**: CONTAINS, STARTS WITH, ENDS WITH for partial text matching
- **Numeric Operators**: GREATER THAN, LESS THAN, BETWEEN for numeric comparisons
- **Date Operators**: BEFORE, AFTER, BETWEEN for temporal conditions
- **Existence Operators**: IS EMPTY, IS NOT EMPTY for checking whether values exist


![Audience Operator](/img/administration/Audience_Operator.png)

## Combining Conditions

These conditions can be combined using logical operators (AND, OR) to create sophisticated targeting rules. For example, an audience might include users who are:

- In the IT department AND
- Located in North America AND
- Have the Support Agent role OR Manager role

The audience builder provides a visual interface for constructing these complex conditions without requiring technical query knowledge. Conditions are represented as building blocks that can be added, removed, and grouped to express even the most complex targeting requirements.

## Preview and Verification

When creating audiences, administrators can preview the resulting membership to verify that the criteria produce the expected results. This preview capability shows which users would be included based on current data, helping refine audience definitions before they're put into use.

## Governance Controls

Audience composition also includes important controls for maintaining governance:

- **Naming Conventions**: Establishing clear, descriptive names that indicate audience purpose
- **Description Fields**: Documenting the intended use and composition logic
- **Creator Attribution**: Tracking who created and modified audience definitions
- **Version History**: Maintaining records of how audience criteria have evolved
- **Usage Tracking**: Identifying where each audience is being utilized

## Common Audience Types

Organizations typically develop different types of audiences to serve various purposes:

- **Structural Audiences**: Based on formal organizational characteristics like department or location
- **Functional Audiences**: Based on roles, responsibilities, or capabilities
- **Contextual Audiences**: Based on situational factors or temporary conditions
- **Behavioral Audiences**: Based on observed usage patterns or preferences

By thoughtfully designing audience compositions that align with business needs, organizations can create targeting frameworks that deliver highly relevant content and experiences without requiring constant manual adjustment. This approach balances personalization with administrative efficiency, creating dynamic targeting that remains accurate as the organization evolves.
