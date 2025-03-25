---
id: actions
title: Actions
sidebar_label: Actions
description: Documentation for Actions
status: 
whatsPending: 
---

Actions are responses to events that perform specific functions automatically. They streamline workflows and ensure consistent handling of tickets.

## Action Types

### Send Email
Creates and sends email notifications based on templates:
- Select recipients (customer, agent, manager, etc.)
- Choose the email template
- Configure dynamic content based on ticket fields

### Update Records
Modifies field values automatically:
- Select which fields to update
- Define the new values (static or dynamic)
- Set conditions for when updates should occur

### Create Issue
Generates a new ticket in response to an event:
- Select the template/offer for the new ticket
- Map fields from the triggering ticket to the new one
- Establish relationships between the tickets

### Bot Notification
Sends notifications through Teams:
- Configure the message content
- Determine recipients
- Include relevant ticket information and links

### Trigger Webhook
Sends data to external systems via API:
- Configure the endpoint URL
- Format the payload data
- Handle authentication requirements
- Useful for integration with third-party ticketing systems

### Queue Assignment
Changes the queue handling the ticket:
- Select the target queue
- Set conditions for assignment
- Include optional notifications

### Actor Assignment
Updates ticket actors automatically:
- Assign tickets to specific users
- Add or change watchers
- Update the "Requested For" actor

### Add to Knowledge
Converts ticket information to knowledge articles:
- Extract relevant content from notes or descriptions
- Format for knowledge base inclusion
- Apply appropriate categorization

### State Transition
Changes the workflow status:
- Move tickets between statuses automatically
- Bypass normal workflow restrictions when needed
- Apply status changes based on complex conditions

### Add/Remove Notes
Adds predefined notes to tickets:
- Select note type (public, private, chase, resolution)
- Configure note content (can include dynamic fields)
- Apply formatting as needed

### Add/Remove Watchers
Manages the list of users monitoring the ticket:
- Add specific users or groups as watchers
- Remove watchers based on conditions
- Include CC watchers for email notifications

### Action Configuration
Each action requires:
- **Action Type Selection**: Choose the appropriate action category
- **Target Configuration**: Specify what the action affects
- **Conditional Logic**: Define when the action should execute
- **User Permissions**: Determine who can initiate the action
