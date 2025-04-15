---
id: publishing-versioning
title: Publishing and Versioning
sidebar_label: Publishing and Versioning
description: Documentation for Publishing and Versioning
status: 
whatsPending: 
---

# Publishing and Versioning

## Overview

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Creator Studio (also referred to as Bot Studio) includes a robust folder management system that enables developers to organize, version, and control bot flows and components. This organizational feature is essential for maintaining clarity in complex bot development projects, supporting version control, and ensuring smooth transitions between development and production environments.

The folder structure provides a systematic way to manage different iterations of bot flows, maintain development and production versions separately, and organize components by function, department, or development stage. This capability is particularly valuable for teams working collaboratively on bot development or organizations managing multiple bot versions.

![Publish One](/img/Creator%20Studio/publish_one.png)

## Folder Functionality

### Creating Folders
The folder creation process is straightforward:
- In Creator Studio, locate the folder selection dropdown
- Click the "Add new folder" button
- Enter a descriptive name for the folder
- Save to create the new folder



Folder names should be descriptive of their purpose or contents, such as "Development," "Testing," "HR Flows," or "Version 2.3."

### Folder Types
The system supports two primary folder types:

#### Custom Folders
Custom folders can be freely created, named, and managed by developers. These folders typically serve purposes such as:
- Development workspaces for new features
- Version archives for historical reference
- Departmental organization (HR, IT, Finance flows)
- Feature-based grouping (Authentication, Ticketing, Knowledge)
- Team-specific workspaces

#### Production Folder
The system includes one special Production folder that serves as the deployment source:
- The Production folder contains the currently active or ready-to-deploy flows
- Content published from this folder becomes available to end users
- This folder typically contains only stable, tested versions
- It serves as the "source of truth" for what's currently in use

![Publish Two](/img/Creator%20Studio/publish_two.png)



### Deleting Folders
Folders that are no longer needed can be removed from the system:
- In the folder selection dropdown, locate the folder to delete
- Click the dustbin icon associated with that folder
- Confirm the deletion when prompted



Important considerations for folder deletion:
- Deleting a folder removes all flows and components contained within it
- This action cannot be undone once confirmed
- The Production folder cannot be deleted
- It's recommended to back up or move important flows before deleting folders

## Managing Bot Flows and Components

### Flow Organization
Folders provide a logical organization system for bot flows:
- Multiple Flows Per Folder: Each folder can contain numerous flows
- Duplicate Flows Across Folders: The same flow can exist in different versions across multiple folders
- Component Organization: Associated components (Cards, Actions, Slots, APIs) can be organized within the same folder as their flows

![Publish Three](/img/Creator%20Studio/publish_three.png)



### Version Management
One of the key benefits of folder organization is version control:
- Keep different iterations of flows in separate folders
- Maintain older versions for reference or rollback capability
- Track development progression through folder organization
- Compare different implementations side by side

For example, an organization might maintain:
- "Production" - containing current live flows
- "Development" - containing works in progress
- "Version 2.1" - archiving a specific historical version
- "Testing" - housing flows undergoing QA

## Publishing Flows
The folder system plays a crucial role in the deployment process:

### Publishing from Any Folder
Creator Studio provides the flexibility to publish flows from any folder to production:
- Navigate to the folder containing the flow to be published
- Select the specific flow
- Click the "Publish" button or option
- Confirm the publication action
- The flow becomes active in the production environment

This capability allows developers to maintain multiple versions of flows while selectively choosing which ones to make active, without disrupting the organizational structure of their development workspace.


![Publish Four](/img/Creator%20Studio/publish_four.png)



### Publication Workflow Example
A typical workflow might look like:
- Develop initial flow in "Development" folder
- Test and refine the flow
- Copy the flow to "Staging" folder for final verification
- Once approved, publish the flow to production
- Archive a copy in "Version History" folder for future reference

This structured approach ensures that only tested, approved flows reach end users while maintaining a clear development history.

## Practical Applications

### Team Collaboration
Folder management facilitates team collaboration:
- Different team members can work in separate folders
- Reduce conflicts when multiple developers work simultaneously
- Maintain clarity about which versions are being modified
- Create dedicated spaces for experimental features

### Development Lifecycle Management
Folders support the full development lifecycle:
- Planning: Create folders for upcoming features
- Development: Work in development-specific folders
- Testing: Move completed flows to test folders
- Deployment: Publish approved flows to production
- Maintenance: Archive previous versions in historical folders

### Departmental Organization
For organizations with multiple departments using the same bot:
- Create separate folders for each department's flows
- Maintain department-specific components and logic
- Allow for independent updating of different functional areas
- Simplify navigation for department-specific developers

![Publish Five](/img/Creator%20Studio/publish_five.png)

## Best Practices for Folder Management

### Naming Conventions
Establish clear naming patterns for folders:
- Use descriptive, consistent names
- Include version numbers where appropriate
- Consider prefixes for special purposes (DEV_, TEST_, ARCHIVE_)
- Document naming conventions for team reference

### Organization Strategies
Consider these approaches to folder organization:
- Chronological: Organize by development phase or version
  - Development, Testing, Staging, Production
  - v1.0, v1.1, v2.0, Current
- Functional: Organize by bot capability
  - Authentication, Ticketing, Knowledge, HR, IT
- Team-Based: Organize by development team
  - Team_A, Team_B, Integration_Team
- Hybrid: Combine approaches as needed
  - HR_Dev, HR_Prod, IT_Dev, IT_Prod

### Documentation
Maintain documentation about your folder structure:
- Create a README or documentation file explaining the folder organization
- Document which folders contain active development vs. archives
- Note special purposes for particular folders
- Establish team protocols for folder usage

### Backup and Archive
Implement practices to protect important work:
- Create archive folders for historical versions before major changes
- Export critical flows as backup before significant reorganization
- Consider regular exports of production folders for disaster recovery
- Document the archive strategy for team reference

## Future Considerations
While the current folder system does not include permission-based access controls, potential future enhancements might include:
- Folder-level access permissions
- Role-based folder visibility
- Check-out/check-in functionality
- Enhanced version comparison tools
- Automated flow migration between folders

## Conclusion

The folder management capabilities in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Creator Studio provide a flexible, powerful system for organizing bot development work. By enabling developers to create custom organizational structures, maintain multiple versions of flows, and selectively publish to production, the folder system supports sophisticated development practices while maintaining clarity and control.

This organizational framework is particularly valuable as bot complexity increases, development teams expand, or multiple departments contribute to bot functionality. Through thoughtful folder structure design and consistent usage practices, organizations can maintain an efficient, manageable bot development environment that supports both rapid iteration and stable production deployments.

While the system currently lacks folder-level permission controls, its existing capabilities provide substantial benefits for version management, team organization, and deployment workflow. Organizations can maximize these benefits by establishing clear naming conventions, organizational strategies, and documentation practices for their folder structure.


