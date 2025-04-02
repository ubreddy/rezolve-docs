---
id: workflows
title: Workflows
sidebar_label: Workflows
description: Documentation for Workflows
status: 
whatsPending: 
---


Workflows define the lifecycle of a ticket, from creation to resolution. They map out the different states a ticket can be in and the transitions between those states.

## Workflow Components

### Status Categories
Workflows use color-coded status categories:
- **To-Do (Black)**: Tasks that haven't been started
- **In-Progress (Blue)**: Tasks that are currently being worked on
- **Done (Green)**: Completed tasks

Additional categories can be added as needed, but the default categories cannot be deleted.

### Workflow Design
Workflows are created as flow diagrams that connect different statuses through transitions:
- Define the statuses a ticket can have (e.g., New, Assigned, In Review, Resolved)
- Create transitions between statuses (e.g., from New to Assigned)
- Name each transition to describe the action (e.g., "Assign to Agent")
- Configure any fields that need to be filled during the transition

### Workflow Integration
Workflows are created separately from templates and can be reused across multiple templates:
- Create workflows in the dedicated workflow design screen
- When configuring a template, attach the appropriate workflow to the status field
- This allows for standardized processes across different ticket types




![Workflows](/img/Service%20Catalog/workflows.png)



![Workflow Components](/img/Service%20Catalog/workflow_components.png)