---
id: events
title: Events
sidebar_label: Events
description: Documentation for Events
status: 
whatsPending: 
---

Events are triggers that initiate actions based on specific occurrences in the ticket lifecycle. They can be configured at the template level to automate processes and notifications.

## Event Types

### Manual Triggers
- **Field Update**: Triggered when a specific field's value changes
- **Issue Attachment Added/Removed**: Triggered when files are attached or removed
- **Issue Transitions**: Triggered when a ticket moves from one workflow status to another
- **Queue Change**: Triggered when a ticket is reassigned to a different queue
- **Issue Note Added**: Triggered when any type of note is added to the ticket
- **Issue Linked**: Triggered when a ticket is linked to another ticket
- **Ticket Created**: Triggered when a new ticket is created
- **Ticket Pre-creation**: Triggered before a ticket is officially created

### Time Triggers
- **Relative Item**: Triggers at specified intervals (in minutes) in a recurring loop
- **Specific Hour of the Day**: Triggers at a designated hour
- **BOD (Beginning of Day)**: Triggers at the start of the business day
- **EOD (End of Day)**: Triggers at the end of the business day
- **CRON**: Triggers based on a CRON expression for complex scheduling
- **SLA**: Triggers when an SLA threshold is breached
- **SLA Relative Item**: Triggers at a specific percentage of an SLA's duration

### Event Permissions
Control who can trigger events based on:
- Organization-wide access
- Queue membership
- Group membership
- Specific users
- User roles
- User attributes
- Actor types
