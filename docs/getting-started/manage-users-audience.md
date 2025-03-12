---
id: manage-users-audience
title: Manage Users and Audience
sidebar_label: Manage Users and Audience
description: Manage users and audience
---

# Manage Users and Audience

To start using the instance you need to setup minimum of one user. The registering user will be the super admin user.

## Users with Roles Needed

### 1. Bot For Answering from Knowledge
 
| Role                        | Responsibilities | Required |
|-----------------------------|-----------------|----------|
| **Knowledge Admin/Knowledge Analyst** | Ability to ingest knowledge into the bot. | No |
| **Bot User** | Test the bot (Minimum 1). If audience-based testing is needed, users from different audience groups are required. | No |
| **Super Admin** | In simple scenarios, the Super Admin can upload knowledge and test the bot without additional users. | - |

### 2. For Helpdesk

| Role                        | Responsibilities | Required |
|-----------------------------|-----------------|----------|
| **Ticket User** | Able to open tickets | Yes |
| **Ticket Agent** | Handle tickets. Minimum 1 per queue | Yes |
| **Ticket Agent Supervisor** | Supervise ticket agents | Yes |
| **Ticket Admin** | Manage tickets. Super admin can do this role | No |

### 3. For Live Chat

| Role                        | Responsibilities | Required |
|-----------------------------|-----------------|----------|
| **Live Chat Agent** | Ability to chat with the user. | Yes |
| **Live Chat Supervisor** | Supervise live chat agents | No |
| **Live Chat Admin** | Manage live chat configurations. Super admin can do this role | No |
| **Bot User** | Use the bot (Minimum 1). Escalate to live chat | No |

### 4. For Insights

| Role                        | Responsibilities | Required |
|-----------------------------|-----------------|----------|
| **Ticket Agent** | Use the insights (Minimum 1). | Yes |
| **Ticket Agent Supervisor** | Supervise ticket agents | No |
| **Insights Admin** | Manage insights configurations. Ticketing integration. Super admin can do this role | No |

### 5. For Knowledge and Enterprise Search

| Role                        | Responsibilities | Required |
|-----------------------------|-----------------|----------|
| **User** | Use the search (Minimum 1). | Yes |
| **Search Admin** | Manage search configurations. Super admin can do this role | No |



## Creating/Inviting Users

For creating the above users please refer  [Users management](../administration/user-management)

## Managing Audience

For creating and managing audience please refer [Audience Management](../administration/audience-management/audience-management-composition)



