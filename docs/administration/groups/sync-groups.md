---
id: sync-groups
title: Synchronizing Groups from External Systems
sidebar_label: Sync Groups
description: Comprehensive guide to synchronizing groups from external directory services
status: 
whatsPending: 
---

# Azure Active Directory (AAD) Group Synchronization

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Admin app includes a powerful Azure Active Directory (AAD) synchronization feature that allows organizations to maintain consistent group structures between their Microsoft ecosystem and the Rezolve.ai platform. This capability streamlines user management by automatically aligning Rezolve.ai groups with existing AAD groups, ensuring that team structures, access permissions, and organizational hierarchies remain synchronized without requiring duplicate administration efforts.

## Key Benefits

The AAD group synchronization functionality provides several important advantages:

- **Reduced Administrative Overhead:** Eliminate duplicate group management across systems
- **Consistency Across Platforms:** Ensure group memberships match between AAD and Rezolve.ai
- **Automated Maintenance:** Group changes in AAD automatically reflect in Rezolve.ai
- **Simplified Governance:** Maintain a single source of truth for organizational structures
- **Streamlined Onboarding:** New employees automatically inherit correct group memberships

## Synchronization Process

### Prerequisites
Before beginning group synchronization:
- Ensure you have Administrator privileges in Rezolve.ai
- Verify appropriate permissions to access AAD group information
- Complete the initial AAD user import process in Rezolve.ai
- Identify the AAD groups you wish to synchronize

### Step 1: Import Users from AAD
The foundation for group synchronization is proper user import:
1. Navigate to the Admin app in Rezolve.ai
2. Access the **User Management** section
3. Select the **AAD import** option
4. Complete the authentication and user selection process
5. Verify that users have been successfully imported

![AAD User Import](/img/administration/group1.png)

### Step 2: Create Matching Groups
For each AAD group you wish to synchronize:
1. Navigate to the **Groups** section in the Admin app
2. Create a new group in Rezolve.ai
3. Use the **exact same name** as the corresponding AAD group (name matching is critical)
4. Save the group configuration

![Create Matching Group](/img/administration/group2.png)

### Step 3: Initiate Synchronization
Once matching groups are created:
1. Navigate to the group management section
2. Locate the group you wish to synchronize
3. Click the **Sync** button or option
4. Confirm the synchronization action when prompted

![Initiate Sync](/img/administration/group3.png)

## Synchronization Results
When synchronization completes:
- Group members from AAD will be added to the Rezolve.ai group
- Group owners from AAD will be assigned appropriate permissions in Rezolve.ai
- Any discrepancies between systems will be resolved according to AAD as the source of truth
- The system will display a confirmation of the completed synchronization

## Use Cases

### IT Department Synchronization
A common implementation scenario:
- IT department has existing AAD groups for different support teams (Network, Hardware, Software)
- Administrator imports all IT staff from AAD to Rezolve.ai
- Matching groups are created in Rezolve.ai for each IT team
- Synchronization is initiated for each group
- Rezolve.ai now has properly structured IT teams matching the AAD organization
- Ticket routing, knowledge access, and reporting can leverage these synchronized groups

### Dynamic Team Management
For organizations with frequent changes:
- HR regularly updates AAD groups as employees join, leave, or change roles
- Scheduled synchronization keeps Rezolve.ai groups current
- New employees automatically appear in correct Rezolve.ai groups
- Transferred employees inherit appropriate new permissions
- Departed employees are removed from groups automatically
- Organizational changes propagate without manual intervention

## Best Practices
To maximize the effectiveness of AAD group synchronization:
- **Establish Naming Conventions:** Use consistent, clear naming patterns across both systems
- **Regular Synchronization:** Schedule routine sync operations to maintain alignment
- **Validate Results:** Periodically audit group memberships to verify proper synchronization
- **Document Group Purposes:** Maintain clear documentation about each group's function
- **Limit Manual Modifications:** Avoid making changes directly in Rezolve.ai for synchronized groups
- **Communicate Process:** Ensure IT and HR understand how group changes propagate

## Limitations and Considerations
Important factors to be aware of:
- Group synchronization is one-way (AAD to Rezolve.ai, not vice versa)
- Exact name matching is required for proper synchronization
- Custom attributes beyond membership and ownership may require additional configuration
- Deeply nested group structures may require special handling
- Very large groups may take longer to synchronize

## Conclusion
The AAD group synchronization feature in Rezolve.ai provides a powerful way to maintain organizational alignment between Microsoft's identity platform and your support automation environment. By eliminating duplicate administration and ensuring consistent group structures, this functionality reduces management overhead while improving accuracy.

For organizations invested in the Microsoft ecosystem, this integration creates a seamless extension of their existing identity and access management strategy into the Rezolve.ai platform. This synchronization ensures that as organizational structures evolve in AAD, those changes automatically propagate to Rezolve.ai, maintaining consistent experiences and appropriate access controls with minimal administrative effort.
