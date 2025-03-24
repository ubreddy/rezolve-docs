---
id: queue-management
title: Queue Management
sidebar_label: Queue Management
description: Documentation for Queue Management
status: 
whatsPending: 
---

# Queue Management

Displays a list of queues that have been configured within the ticketing system.

The columns include:

- **Default**: Checkbox to select if this is the default queue.
- **Queue**: Name of the queue.
- **Team**: The team associated with the queue (e.g., IT, GLOBAL, etc.).
- **Description**: A short description of the queue.
- **Supervisor**: The email of the supervisor managing the queue.
- **Users**: List of assigned users.
- **Status**: Status (Published).
- **Actions**: Edit (pencil icon) and Delete (trash icon).
- **Updated By**: The email of the last user who modified the queue.

Features available:

- A dropdown to select a team to filter queues.
- A search bar to find a specific queue.
- A "Create" button for adding a new queue.

![Queue Creation](/img/Helpdesk/Queue_Creation.png)

## Create Queue - Basic Settings

This screen is for creating a new queue.

Fields available:

- **Name**: Queue name (mandatory).
- **Queue Label**: A label for easier identification (mandatory).
- **Description**: A brief explanation of the queue's purpose (mandatory).
- **Agent Type**: A dropdown to select how agents are assigned.
  - **Configured**: Manually assigned agents.
  - **Dynamic**: Agents assigned dynamically based on certain criteria.

## Create Queue - Agent Configuration

This step focuses on defining supervisors for the queue.

### Supervisors (Mandatory)

- Dropdown to select one or more supervisors.
- Supervisors are responsible for overseeing queue operations.

### Agents (Mandatory)

- Dropdown to assign agents to this queue.
- Agents are the users who will handle tickets assigned to this queue.

## Create Queue - Queue Settings

Further queue configurations, including team assignments.

Fields available:

- **Status**: Dropdown to define the queue status.
- **Team**: Dropdown to associate the queue with a team.
  - Available teams: GLOBAL, HR, IT (IT appears twice, possibly a duplicate issue).
- **Alias**: Alternative name for the queue.
- **From Email**: Email address used for outbound communication.
- **Reply Email**: Email where replies to tickets in this queue are directed.

## Overall Flow of Queue Configuration

1. View and manage queues in the Queue Management List.
2. Click Create to start a new queue.
3. Define Basic Settings (Name, Label, Description, Agent Type).
4. Assign Supervisors in the Agent Configuration section.
5. Set Queue Settings (Team, Status, Email configurations).
6. Finalize and create the queue.
