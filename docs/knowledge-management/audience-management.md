---
id: audience-management
title: Audience Management in Knowledge Base
sidebar_label: Audience Management
description: Guide for targeting knowledge content to specific audiences and user groups
status: 
whatsPending: 
---

Audience Management in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation provides a powerful way to define and organize groups of users based on various criteria. These audience definitions can then be used throughout the platform to control access to knowledge, template offers, and other resources, creating a personalized experience for different user segments.

---

## Accessing Audience Management
To manage audiences:

- Navigate to the Admin App
- Select "User Management" from the navigation
- Go to the "Audiences" section

![Audience Management Example 1](/img/Knowledge%20Management/am1.png)


## Understanding Audiences
An audience in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation is a defined group of users who share common characteristics or attributes. Audiences are used to control visibility and access to different parts of the system, allowing for targeted content and functionality.

## Creating a New Audience
To create a new audience:

- In the Audiences section, click "Create Audience" or "Add New"
- Enter a descriptive name for the audience
- Provide a detailed description explaining the purpose of this audience
- Configure audience criteria
- Save your audience


![Audience Management Example 2](/img/Knowledge%20Management/am2.png)


## Audience Criteria Types
You can define audiences based on various criteria:

### Organization-Wide
Include all users in the organization:
- Select "Whole Organization" as the criteria type
- This creates an audience that includes everyone in your tenant


![Audience Management Example 3](/img/Knowledge%20Management/am3.png)


### Group-Based
Include users from specific groups:
- Select "Group" as the criteria type
- Choose condition operator (IS, IN, NOT IN)
- Select one or more groups from your tenant
- Groups are created and managed in the Admin App > Groups section.

![Audience Management Example 4](/img/Knowledge%20Management/am4.png)


### User-Based
Include specific individual users:
- Select "User" as the criteria type
- Choose condition operator (IS, IN, NOT IN)
- Select individual users from your tenant
- This allows for highly targeted audiences for specific individuals.

![Audience Management Example 5](/img/Knowledge%20Management/am5.png)

### Role-Based
Include users with specific roles:
- Select "Role" as the criteria type
- Choose condition operator (IS, IN, NOT IN)
- Select one or more roles from your tenant
- This creates audiences based on user responsibilities or permissions.

![Audience Management Example 6](/img/Knowledge%20Management/am6.png)

### Attribute-Based
Include users who share specific attributes:
- Select "User Attributes" as the criteria type
- Select an attribute (e.g., Location, Department, Job Title)
- Choose condition operator (IS, IN, NOT IN)
- Specify the attribute value(s)
- This allows for creating dynamic audiences based on user properties.

![Audience Management Example 7](/img/Knowledge%20Management/am7.png)

## Creating Complex Audience Definitions
You can create sophisticated audience definitions by combining multiple criteria:

- Configure your first criterion
- Click "Add Criterion" to add another condition
- Choose how criteria are combined (AND requires all conditions to be true, OR requires any condition to be true)
- Add as many criteria as needed
- Save your audience configuration

![Audience Management Example 8](/img/Knowledge%20Management/am8.png)

## Example: Creating Audiences for Different Scenarios

### IT Support Team in North America
- **Name:** IT Support NA
- **Description:** IT support personnel based in North America
- **Criteria:**
  - Department IS "IT Support" AND
  - Location IN ["USA", "Canada"]

### VIP Customers
- **Name:** VIP Customers
- **Description:** High-priority external customers
- **Criteria:**
  - Role IS "External User" AND
  - Customer Tier IS "Premium"

### Department Managers
- **Name:** All Managers
- **Description:** All users with management responsibilities
- **Criteria:**
  - Job Title CONTAINS "Manager" OR
  - Job Title CONTAINS "Director" OR
  - Role IS "Department Head"

### Remote Employees
- **Name:** Remote Workforce
- **Description:** Employees who work remotely
- **Criteria:**
  - Employment Type IS "Remote" OR
  - Office Location IS "Home Office"

![Audience Management Example 9](/img/Knowledge%20Management/am9.png)

## Applying Audiences
Once created, audiences can be used throughout Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation to control access and visibility:

### Knowledge Management
Restrict or grant access to knowledge articles:
- In Knowledge Management, select an article or document
- Navigate to access controls or permissions
- Apply audience restrictions using Whitelist or Blacklist approach:
  - **Whitelist:** Only the specified audience can access the content
  - **Blacklist:** Everyone except the specified audience can access the content

![Audience Management Example 10](/img/Knowledge%20Management/am10.png)

### Template Offers
Control which offers are visible to different users:
- In Service Catalog, navigate to a template
- Go to the Offers section
- Select an offer
- Apply audience restrictions
- Only members of the specified audience will see this offer in the catalog

![Audience Management Example 11](/img/Knowledge%20Management/am11.png)

### Bot Knowledge
Control which information the bot can provide to different users:
- In Bot Management, configure knowledge source access
- Apply audience restrictions to specific knowledge bases
- The bot will only provide information from these sources to matching users

## Managing Audiences

### Editing Audiences
To modify an existing audience:
- In the Audiences section, find the audience you want to edit
- Click the edit icon
- Make your changes to the name, description, or criteria
- Save your changes

### Deleting Audiences
To remove an audience:
- In the Audiences section, find the audience you want to delete
- Click the delete icon
- Confirm the deletion
- **Note:** This will remove the audience from any places it's being used

### Reviewing Audience Usage
To see where an audience is being used:
- In the Audiences section, find the audience you're interested in
- Look for the usage or references option
- This will show all places where this audience is applied

## Best Practices for Audience Management
- **Use Clear, Descriptive Names:** Name audiences in a way that clearly indicates their membership
- **Document Purpose:** Include detailed descriptions explaining who should be in the audience and why
- **Start Broad, Then Refine:** Begin with broader audiences and create more specific ones as needed
- **Review Regularly:** Periodically review audience definitions to ensure they remain accurate
- **Consider Maintenance:** Design audiences in ways that minimize maintenance as users change roles
- **Use Dynamic Criteria:** When possible, use attribute-based criteria that update automatically
- **Test Access Controls:** Verify audience-based restrictions work as expected

## Benefits of Effective Audience Management
- **Personalized Experience:** Deliver relevant content and offers to different user segments
- **Security and Compliance:** Control access to sensitive information
- **Simplified Administration:** Manage access for groups rather than individuals
- **Dynamic Targeting:** Automatically update access as user properties change
- **Consistent Access Control:** Apply the same audience definitions across different systems

## Conclusion

The Audience Management feature in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation provides a flexible and powerful way to define user segments and control access throughout the platform. By creating well-designed audiences, administrators can ensure that users see only the content and functionality relevant to their roles, locations, or other attributes.

This capability is particularly valuable for organizations with diverse user groups, complex organizational structures, or strict access control requirements. When properly implemented, audience management creates a more personalized, secure, and efficient experience for all users.

By combining various criteria types and applying audiences consistently across knowledge, templates, and other resources, organizations can create a truly tailored experience that reflects their unique organizational structure and access control needs.



## Next Steps

- Explore [Knowledge Gaps Management](/docs/knowledge-management/knowledge-gaps) to identify missing content for specific audiences
- Learn about [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to measure audience engagement
- Set up [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) with audience-specific approval processes

