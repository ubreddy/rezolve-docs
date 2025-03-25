---
id: common-actors
title: Common Actors   
sidebar_label: Common Actors
description: Documentation for Common Actors
status: 
whatsPending: 
---


Common Actors in the Service Catalog refers to the various participants in the ticket lifecycle, such as assignees, requestors, and watchers. These actors play different roles in ticket management and can be configured at both the template and field levels.

## Actor Types

### Primary Actors
- **Assigned To**: The individual responsible for resolving the ticket
- **Requested For**: The end-user who will benefit from the service or resolution
- **Submitted By**: The person who created the ticket
- **Watcher**: Individuals who receive notifications about ticket updates
- **Last Updated By**: The person who most recently modified the ticket

### Additional Actors
- **CC Watchers**: Individuals copied on ticket communications
- **To Watchers**: Direct recipients of ticket communications
- **Approvers**: Users responsible for approving certain ticket stages or requests

## Actor Configuration

### Adding Special Fields
Actors can be added to layouts by:
1. Accessing the layout editor for Create, Detail, or Inbox views
2. Clicking on "Add special fields"
3. Selecting the desired actor fields to add to the layout

### Actor Permissions
Actors can be used to control field-level permissions:
- Make fields visible only to specific actors
- Make fields editable only by certain actors
- Make fields required for particular actors

## Automation with Actors
Actors can be leveraged in:
- Quick Actions to automatically add or remove watchers
- Workflow transitions to assign tickets to appropriate individuals
- Notifications targeted to specific actors
- Ticket routing rules based on actor attributes

## Implementation in Workflows
Actors are particularly important in workflow design:
- Automatic assignment rules based on ticket properties
- Escalation paths when SLAs are approaching
- Approval workflows requiring input from specific actors
- Notification rules based on actor roles

## Best Practices
- Define clear responsibilities for each actor type
- Use consistent actor assignment patterns across templates
- Configure appropriate notification settings for different actors
- Leverage actor attributes for dynamic routing and assignments
- Regularly audit actor assignments to ensure proper workload distribution
- Use role-based actors rather than individual users where possible to maintain flexibility
