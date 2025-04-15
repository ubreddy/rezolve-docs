---
id: groups-management
title: Groups Management
sidebar_label: Groups Management
description: Comprehensive guide to creating and managing user groups within the platform, including Sync Groups documentation for Azure Active Directory integration.
status: 
whatsPending: 
---

The Sync Groups feature in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation provides a powerful integration with Azure Active Directory (AAD) that enables automatic synchronization of group memberships between your organization's AAD environment and the Rezolve.ai platform. This capability ensures that user group assignments stay consistent across systems, reduces administrative overhead, and maintains appropriate access controls with minimal manual intervention.

![Groups One](/img/administration/groups_one.png)

## Configuration Prerequisites

Before using the Sync Groups functionality, several prerequisites must be met:

### Azure Active Directory Configuration
The following AAD configuration must be completed:
- **Registered Application**: An application must be registered in Azure AD
- **Appropriate API Permissions**: The application needs proper permissions to read group memberships
- **Authentication Credentials**: Client ID and Client Secret must be generated

### Server Configuration in Rezolve.ai
These key credentials must be added to Rezolve.ai's server configuration:
- **Client ID**: The identifier of the registered AAD application
- **Client Secret**: The secure token for authentication
- **AAD Tenant ID**: The unique identifier for your Azure AD tenant


![Groups Two](/img/administration/groups_two.png)

Once these elements are properly configured, the Sync Groups functionality becomes available in the Admin app.

## Creating and Managing Sync Groups

### Accessing Sync Groups
To work with Sync Groups:
1. Navigate to the Admin app in Rezolve.ai
2. Access the Groups section
3. Look for the Sync Group option, which appears when AAD configuration is complete

![Groups Three](/img/administration/groups_three.png)

## Synchronization Direction

The Sync Groups feature supports bi-directional synchronization:
- **AAD to Rezolve.ai**: Import group memberships from Azure AD into Rezolve.ai
- **Rezolve.ai to AAD**: Push group memberships from Rezolve.ai to Azure AD

This flexibility allows administrators to determine which system serves as the source of truth for different groups.

## Practical Applications

### Role-Based Access Control
Synchronized groups provide consistent role-based access:
- Maintain security group alignments across systems
- Ensure access permissions remain in sync
- Simplify onboarding by assigning users to AAD groups only

### Organizational Structure Reflection
Keep organizational structures consistent:
- Department groups stay synchronized
- Team structures reflect current organization
- Project groups update automatically

### Efficient User Management
Reduce administrative overhead:
- Eliminate duplicate group maintenance
- Centralize group management in AAD
- Reduce human error in permission assignments

## Best Practices
1. **Start with Critical Groups**: Begin by synchronizing the most important security or access groups
2. **Validate Frequently**: Regularly verify that synchronization is working correctly
3. **Document Group Mappings**: Maintain clear documentation of which AAD groups map to Rezolve.ai groups
4. **Monitor Sync Logs**: Regularly check synchronization logs for any errors or issues
5. **Plan Carefully**: Consider the implications of bi-directional sync and choose direction appropriately

## Conclusion

The Sync Groups feature in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Admin app provides a seamless connection between Azure Active Directory and the Rezolve.ai platform, ensuring consistent group memberships across systems. By properly configuring the AAD connection with Client ID, Client Secret, and Tenant ID, organizations can automate the maintenance of user groups, reducing administrative burden while improving security consistency.

This integration is particularly valuable for organizations that heavily leverage Azure Active Directory for identity management, as it creates a unified approach to group membership that simplifies administration and ensures that access controls in Rezolve.ai accurately reflect the current organizational structure.
