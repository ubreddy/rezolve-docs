---
id: approvals
title: Approvals
sidebar_label: Approvals
description: Documentation for Approvals
status: 
whatsPending: 
---


Approval configurations within workflows allow you to implement review and authorization steps for tickets, ensuring that critical changes or decisions receive proper oversight.

## Approval Types

The Service Catalog supports several types of approval configurations:

- **Single Approver**: Requires approval from one designated individual
- **Multiple Approvers (Any)**: Requires approval from any one person from a group of potential approvers
- **Multiple Approvers (All)**: Requires approval from all designated approvers
- **Hierarchical Approval**: Follows an approval chain where approvals must occur in a specific sequence

## Configuring Approvals

To configure an approval step in a workflow:

1. Create a state that represents the approval stage (e.g., "Pending Approval")
2. Configure transitions both into and out of this state
3. For the outgoing transitions, add approval conditions specifying:
   - Who can approve (roles, groups, or specific users)
   - How many approvals are required
   - Time limits for approvals
   - Fallback actions if approvals time out

## Approval Actions

When configuring approvals, you can set up various automated actions:

- **Notification Emails**: Send emails to approvers when their approval is needed
- **Reminder Notifications**: Send reminders if approval is pending for a specified time
- **Escalation**: Automatically escalate to alternate approvers if the primary approver doesn't respond
- **Approval History**: Track and display the approval history in the ticket

## Approval User Experience

Approvers can take action on pending approvals through:

- Email links that direct them to the approval page
- Notifications in the ticketing console
- A dedicated "Pending Approvals" section in their dashboard

The approval system ensures that critical changes receive proper authorization while maintaining an audit trail of the decision-making process.
