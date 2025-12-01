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

### **1.** Overview

Smart Mailbox is an AI-powered email routing capability that automatically directs incoming support requests over emails to the appropriate service team queues. By intelligently analyzing email content and matching it against your configured ticket types > offer triggers, Smart Mailbox eliminates the manual triage step that traditionally delays ticket resolution in traditional ITSM setups for email tickets management.

### **2.** Configuring Email Mapping Settings

To ensure templates can be used as "Smart Templates," users must configure the Email Map settings:

#### **2.1** Offer-Level Configuration

1. Navigate to the desired Offer.
2. On the Offers tab, users can view the Smart Mailbox status for each offer.
3. The Smart Mailbox column displays whether the feature is currently Enabled or Disabled for every offer.

This provides a quick overview of which offers are configured for Smart Mailbox processing.

![Smart Mailbox Overview](/img/Release/Nov2025/mail1.png)

To enable Smart Mailbox for an offer, follow these steps:

1. Navigate to the Service Catalog → Offers section.
2. Select the desired offer and go to the Email Field Mapping tab.
3. Toggle the option "Enable This Offer for Smart MailBox" to ON.

Once enabled, the system will allow email ingestion and mapping based on the defined configurations.

![Email Ingestion Configuration](/img/Release/Nov2025/mail2.webp)

If we have more than one offer in template then user can copy the configs.

**Steps:**

1. Click on Copy From Another Offer to reuse an existing Smart Mailbox configuration.

![Copy From Another Offer](/img/Release/Nov2025/mail3.webp)

2. A dropdown list will appear showing all offers that have Smart Mailbox mapping configured.
3. Select the offer from which you want to copy the mapping.

![Select Offer](/img/Release/Nov2025/mail4.webp)

4. The system will automatically populate the email field mapping based on the selected offer's configuration.
5. Review and adjust (if needed), then click Save to apply the copied configuration.

**Purpose:** This feature ensures consistency across offers, reduces configuration time, and helps maintain uniform Smart Mailbox processing logic.

User must fill the data for Subject, Description, Priority, and Attachment and choose whether they want the response from AI (Extract from email) or same as mentioned in email (Email.subject).

Add meaningful descriptions for each mapped field to define the purpose and expected input.

### **3.** Updating Field Descriptions

For each field added in the Email Map configuration:

- Provide a clear and concise description explaining the purpose of the field.
- These descriptions help guide the Smart Mailbox in understanding the intent and context of incoming emails.

![Field Descriptions](/img/Release/Nov2025/mail5.webp)

### **4.** Bot Integration Configuration

After completing Offer and Template configurations, the next step is to configure Bot Integration Settings:

1. Navigate to Bot Integration Settings.
2. Update the following:
   - Trigger Context
   - Trigger Keywords / Phrases

![Bot Integration Settings](/img/Release/Nov2025/mail6.webp)

Additionally, ensure that each bot input field carries a precise description to enhance interpretation accuracy and improve mapping of information from email to the right fields in the ticket being created.

![Bot Input Field Description](/img/Release/Nov2025/mail7.webp)

### **5.** Creating a Smart Mailbox

Once all prerequisite configurations are complete:

1. Navigate to the Smart Mailbox tab.
2. Create a new Smart Mailbox.
3. Configuration steps are similar to the standard Mail Server setup, except for an additional third tab: **Ticket Mapping Settings**
   - Only templates that have offers with Email Mapping configurations will appear here.
   - Select the relevant templates you want the Smart Mailbox to consider (you may want to create multiple smart mailboxes for different service teams. Please note you'd need to map different email IDs for different smart mailboxes).
   - You'll be requested to select a fallback ticket type that will be used to create the ticket under, in case AI is not able to find a match with the added triggers.

![Fallback Ticket Type](/img/Release/Nov2025/mail8.webp)

### **6.** Ticket Creation Process

When an email arrives, Smart Mailbox analyzes the email subject and body content, then compares this information against your configured ticket types and offer triggers. Using AI-powered matching, it identifies the most appropriate ticket type for the request. If the match confidence exceeds the configured threshold, Smart Mailbox automatically creates a ticket of that type and routes it directly to the corresponding queue.

This means tickets appear in the right queue from the moment they're created, ready for the appropriate agent to pick up immediately.

Additionally, Smart Mailbox checks whether the created ticket contains all the information an agent needs to work on that specific type of request. If any required details are missing, an AI-generated message is immediately sent to the user requesting that information. This proactive follow-up ensures tickets are fully actionable the moment an agent picks them up, eliminating back-and-forth delays.

![Ticket Creation Process](/img/Release/Nov2025/mail9.svg)

![Ticket Creation](/img/Release/Nov2025/mail10.webp)

### **7.** Summary

In conventional ITSM setups, all tickets submitted via email land in a single shared service team queue. A member of the service team must then manually review each ticket, determine its category, and route it to the appropriate queue. This manual triage process introduces delays between when an issue is reported and when it becomes available for an agent to work on - time that could otherwise be spent resolving the issue.

Smart Mailbox significantly reduces time-to-resolution by eliminating the manual sorting and triaging step entirely. Service teams no longer need to dedicate resources to triaging incoming emails, allowing agents to focus on what matters most - resolving issues. The result is faster response times, improved SLA compliance, and a more efficient service operation overall.

---

### Notification Wall

**Release Date:** November 29, 2025

#### Executive Summary

The Notification Wall provides a centralized hub for managing and viewing all notifications in Agent UI. It enables users to stay informed about ticket updates, SLA alerts, and other important events through a unified notification experience.

**Key Highlights:**
- Centralized notification management on V3 screens
- User-specific notification preferences
- Tenant-level notification configuration
- Standard and custom notification types
- Email notification integration with in-app alerts

---

This section describes the Notification Wall functionality, including how notifications are displayed, managed, configured, and delivered in Agent UI v2/v3 and on other v3 screens.

:::note
The Notification Wall is available on V3 screens. Currently, only the Agent UI app supports the Notification Wall for both V2 and V3. For all other applications, notifications will be available only on V3 screens.
:::

:::info Special Case
For metric and SLA related notifications, you need to configure the SLA Events using the events and actions. After configuration, notifications will appear on the Notification Wall.
:::

### **1.** How Notification Settings Work

#### **1.1** User-Specific Notification Settings

Whenever a user is on the V3 screens, they can find the **Notification Settings** option at the top-right corner. Using this option, users can configure their notifications based on their preferences. Notifications can be completely turned off or selectively enabled for specific events such as ticket assignment, ticket updates, and SLA-related notifications.

#### **1.2** Tenant-Level Notification Settings (Standard Settings for All Users)

![Tenant Level Notification Settings](/img/Release/Nov2025/noti1.png)

Notifications are categorized into two types:

- **Standard Notifications** – These are predefined from the backend and cannot be modified from the UI.
- **Custom Notifications** – These can be customized and managed directly by the ticket admin user.

### **2.** Standard Notifications

Below are examples of Standard Notifications along with their respective images.

#### Ticket Created in Queue
Recipients: Queue members (agents + supervisors)

![Ticket Created in Queue](/img/Release/Nov2025/noti2.png)

#### Ticket Updated - Note Added
Recipients: Actors + Watchers (includes tagged users)

![Ticket Updated Note Added](/img/Release/Nov2025/noti3.png)

#### Ticket Updated - Field(s) Changed
Recipients: Actors + Watchers

![Ticket Updated Fields Changed](/img/Release/Nov2025/noti4.png)

#### SLA Breached
Recipients: Actors + Supervisors of the Queue

![SLA Breached](/img/Release/Nov2025/noti5.png)

#### SLA Approaching
Recipients: Actors + Supervisors of the Queue

![SLA Approaching](/img/Release/Nov2025/noti6.png)

#### Ticket Updated - Priority Changed
Recipients: Actors + Watchers

:::tip
For standard fields such as priority, status, and attachment, please map the fields to the respective meta fields to ensure the relevant notifications are displayed. Otherwise, all unmapped notifications will appear as "Other field updated".
:::

![Ticket Updated Priority Changed](/img/Release/Nov2025/noti7.png)

#### Ticket Updated - Status Changed
Recipients: Actors + Watchers

![Ticket Updated Status Changed](/img/Release/Nov2025/noti8.png)

#### Ticket Updated - Attachment Added
Recipients: Actors + Watchers

![Ticket Updated Attachment Added](/img/Release/Nov2025/noti9.png)

#### Ticket Updated - Attachment Removed
Recipients: Actors + Watchers

![Ticket Updated Attachment Removed](/img/Release/Nov2025/noti10.png)

#### Ticket Updated - Ticket(s) Linked
Recipients: Actors + Watchers

![Ticket Updated Tickets Linked](/img/Release/Nov2025/noti12.png)

#### Ticket Unassigned

![Ticket Unassigned](/img/Release/Nov2025/noti13.png)

### **3.** Email Notifications Enhancement

You can also enable selective email notifications to appear on the Notification Wall. Toggle the **Send In App Notification** option in the Actions screen.

#### Configuration on Service Catalog Side

![Email Notification Configuration](/img/Release/Nov2025/noti14.png)

#### Impact of Configuration on Notification Wall

![Email Notification Impact](/img/Release/Nov2025/noti15.png)

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
