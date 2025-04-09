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

### Bot Notification Setup (Slack & Teams)

Our product allows administrators to automate communication using Bot Notifications via Slack and Microsoft Teams, triggered by defined events in the Event and Action module.


![teams_notify](/img/administration/teams_notify.png)

#### Overview: Event and Action Mechanism

The Event and Action feature allows the admin to automate responses based on specific events. One such action is sending bot notifications via Slack or Teams.

#### How to Configure Bot Notifications

**Step 1: Navigate to Event and Action Configuration**
* Go to the Admin Panel.
* Select Event and Action settings.
* Click on "Add New Action to Perform".

**Step 2: Choose "Bot Notification"**
* From the Action Type dropdown, select Bot Notification.
* Upon selecting this option, the following new fields will appear:
  * Notify On* (dropdown)
  * Audience

#### Field Details

**Notify On***
* Select the platform for notification:
  * Slack
  * Teams

**Teams Notification*** (multi-line text box)
* This field appears when either Slack or Teams is selected in "Notify On".
* Input should be in platform-specific format:
  * For Slack, use Slack Block Kit JSON
  * For Teams, use Microsoft Teams Adaptive Card JSON
* Note: The textbox strictly accepts only valid JSON input. Any invalid format will be rejected.

#### Audience
* Use this field to define who will receive the notification.
* You can tag individuals or groups using:
  * @username to notify specific users.
  * @groupname to notify groups.


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


![actions](/img/Service%20Catalog/actions.png)

### Action Configuration
Each action requires:
- **Action Type Selection**: Choose the appropriate action category
- **Target Configuration**: Specify what the action affects
- **Conditional Logic**: Define when the action should execute
- **User Permissions**: Determine who can initiate the action


![action_config](/img/Service%20Catalog/action_config.png)