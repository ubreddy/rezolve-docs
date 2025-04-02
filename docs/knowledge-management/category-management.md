---
id: category-management
title: Category Management in Knowledge Management
sidebar_label: Category Management
description: Guide for managing knowledge articles directly in the system
status: 
whatsPending: 
---

Rezolve.ai's knowledge management system implements a sophisticated category management approach that organizes knowledge content based on organizational structure. This workspace-based categorization enables efficient content management, appropriate access controls, and targeted knowledge delivery.

## Workspace-Based Categorization

At the core of Rezolve.ai's category management is the concept of team-based workspaces:

- **Team Workspaces**: Dedicated knowledge environments for specific organizational teams
- **Isolated Content**: Each workspace contains knowledge relevant to that particular team
- **Controlled Access**: Only users with appropriate team assignments can access specific workspaces
- **Unified Platform**: All workspaces exist within a single tenant while maintaining logical separation

<img src="/img/Knowledge Management/knowledge.png" alt="Knowledge" />


## Category Setup During Tenant Registration

The foundation for knowledge categorization is established during the initial tenant registration process:

- During tenant setup, administrators identify service teams within their organization
- Common service teams include IT, HR, Operations, Finance, Facilities, Legal, etc.
- These teams are automatically created as values under the "Teams" attribute


<img src="/img/Knowledge Management/registration.png" alt="Registration" />

## Team Assignment and Workspace Access

Access to specific knowledge workspaces is controlled through team attribute assignments:

- Administrators assign users to specific teams through the Teams attribute
- Users see workspaces corresponding to their team assignments
- Users with global knowledge access can access all workspaces

## Knowledge Workspace Structure

Each team workspace provides a complete knowledge management environment with:

- Knowledge Articles
- Documents
- SharePoint Documents
- Crawled URLs

<img src="/img/Knowledge Management/team_assignment.png" alt="Team Assignment" />

## Managing Knowledge Within Workspaces

When accessing a specific team workspace:

- Administrators see only knowledge content associated with that team
- Content created or uploaded is automatically categorized
- The virtual agent uses these categories for knowledge delivery

## Cross-Team Knowledge Sharing

Rezolve.ai provides mechanisms for appropriate knowledge sharing:

- Global Knowledge
- Shared Categories
- Cross-Referenced Content
- Federated Search

## Conclusion

Rezolve.ai's workspace-based category management creates a powerful foundation for effective knowledge organization and delivery, balancing logical separation with efficient management and appropriate sharing.
