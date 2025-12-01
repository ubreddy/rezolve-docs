---
slug: november-2025-release
title: November Release
date: 2025-11-29
authors: rezolve
tags: [release, features]
---

**Release Date:** November 29, 2025

## Executive Summary

This release introduces Smart Mailbox, an AI-powered email routing capability that automatically directs incoming support requests to the appropriate service team queues, eliminating manual triage and reducing time-to-resolution. Additionally, the new Notification Wall provides a centralized hub for managing and viewing all notifications in Agent UI. The release also includes a Hierarchy Label Update Enhancement that allows admins to update hierarchy node labels even when referenced in existing tickets.

**Key Highlights:**
- AI-powered email analysis and routing
- Automatic ticket creation and queue assignment
- Proactive follow-up for missing information
- Notification Wall for centralized notification management
- User-specific and tenant-level notification settings
- Standard and custom notification types
- Hierarchy node label editing for referenced values

<!-- truncate -->

## New Features

### Smart Mailbox – AI-Powered Email Routing

#### Overview

Smart Mailbox is an AI-powered email routing capability that automatically directs incoming support requests over emails to the appropriate service team queues. By intelligently analyzing email content and matching it against your configured ticket types > offer triggers, Smart Mailbox eliminates the manual triage step that traditionally delays ticket resolution.

#### The Challenge with Traditional Email Ticketing

In conventional ITSM setups, all tickets submitted via email land in a single shared service team queue. A member of the service team must then manually review each ticket, determine its category, and route it to the appropriate queue. This manual triage process introduces delays between when an issue is reported and when it becomes available for an agent to work on - time that could otherwise be spent resolving the issue.

#### How Smart Mailbox Works

When an email arrives, Smart Mailbox analyzes the email subject and body content, then compares this information against your configured ticket types and offer triggers. Using AI-powered matching, it identifies the most appropriate ticket type for the request. If the match confidence exceeds the configured threshold, Smart Mailbox automatically creates a ticket of that type and routes it directly to the corresponding queue.

This means tickets appear in the right queue from the moment they're created, ready for the appropriate agent to pick up immediately.

Additionally, Smart Mailbox checks whether the created ticket contains all the information an agent needs to work on that specific type of request. If any required details are missing, an AI-generated message is immediately sent to the user requesting that information. This proactive follow-up ensures tickets are fully actionable the moment an agent picks them up, eliminating back-and-forth delays.

![Smart Mailbox Flow](/img/Release/Nov2025/mail9.svg)

#### Benefits

Smart Mailbox significantly reduces time-to-resolution by eliminating the manual sorting and triaging step entirely. Service teams no longer need to dedicate resources to triaging incoming emails, allowing agents to focus on what matters most - resolving issues. The result is faster response times, improved SLA compliance, and a more efficient service operation overall.

---

### Notification Wall

#### Overview

We're introducing Notifications Wall, a centralized in-app notification management system that gives agents and service team members complete control over how they receive and manage alerts within Rezolve.ai.

#### Feature Details

**Centralized Notification Center**

Access all your notifications from the bell icon in the header. Notifications appear in a scrollable list, making it easy to review recent activity without leaving your current workflow.

![Notification Center](/img/Release/Nov2025/image%20(19).png)

**Read/Unread Management**

Mark notifications as read or unread to stay organized. Quickly filter to view only unread notifications so you never miss important updates.

**Personalized Notification Preferences**

Tenant admins can establish default notification preferences for their organization, ensuring consistent alert settings across the team. Individual agents can then override these defaults to customize notifications based on their preferences and priorities.

**Custom Notifications via Events and Actions**

Ticket admins can now create custom notifications using the Events and Actions framework. Set up automated alerts based on specific triggers to keep your team informed of critical updates, escalations, or workflow changes.

![Custom Notifications](/img/Release/Nov2025/image%20(20).png)

#### Who This Is For

- **Agents and Service Team Members:** Manage your notifications efficiently and customize your preferences
- **Ticket Admins:** Configure custom notifications to keep your team informed
- **Tenant Admins:** Establish organization-wide default notification settings

---

### Hierarchy Label Update Enhancement

**Release Date:** November 29, 2025

#### Executive Summary

Hierarchy Node Label Editing is now supported for referenced values. Admins can now update the label of a hierarchy node at the global level, even when that node is referenced in existing tickets. Once updated, the new label automatically reflects across all associated tickets.

**Key Highlights:**
- Edit hierarchy node labels at the global level without restriction
- Automatic label propagation to all referencing tickets
- No manual intervention required for individual ticket updates

---

#### Previous Behavior

When attempting to update the label of a hierarchy node that was referenced in existing tickets, the system displayed an error:

> "Failed to update the hierarchy data. Cannot remove/edit hierarchy value as it is being referred in X tickets"

This prevented admins from making necessary label corrections or updates without first removing references from all affected tickets.

#### New Behavior

- Admins can now edit hierarchy node labels at the global level without restriction
- Label updates propagate automatically to all tickets referencing that hierarchy node
- No manual intervention required to update individual ticket records

#### Impact

This enhancement streamlines hierarchy management by eliminating the need to manually update or unlink tickets before making label changes. It ensures data consistency across the system while giving admins greater flexibility to maintain accurate and up-to-date hierarchy labels.

---

## Support

For questions or issues related to this release, please contact our support team by emailing us at support@rezolve.ai
