---
id: states-transitions
title: States and Transitions
sidebar_label: States and Transitions
description: Documentation for States and Transitions
status: 
whatsPending: 
---

Workflows in the Service Catalog provide a structured approach to managing the lifecycle of tickets through different states and transitions. The workflow functionality allows you to define the path a ticket takes from creation to resolution, ensuring consistency in ticket processing and enabling automation at various stages.

### States
States represent the different stages a ticket can be in during its lifecycle. Each state indicates the current status of a ticket, such as "New," "In Progress," "Pending," or "Resolved."

#### State Components
- **State Name**: Each state has a unique name that describes its purpose (e.g., "New Ticket," "Under Investigation").
- **State Properties**: States can have properties such as auto-assignment rules, SLA timers, and visibility settings.
- **State Actions**: Specific actions can be configured to trigger automatically when a ticket enters a state.

### Transitions
Transitions define how tickets move from one state to another and what happens during that movement.

#### Transition Components
- **Transition Name**: Each transition has a descriptive name (e.g., "Begin Investigation," "Escalate to Tier 2").
- **Transition Direction**: Transitions connect states in a specific direction, showing the allowed paths a ticket can take.
- **Transition Conditions**: Rules that determine when a transition is available (e.g., only certain roles can perform specific transitions).
- **Transition Actions**: Actions that execute when a transition occurs, such as sending notifications or updating fields.

## Creating Transitions
To create a transition between states:
1. In the Workflow Editor, select the source state.
2. Click on the connector icon and drag it to the destination state.
3. Provide a name for the transition.
4. Configure any conditions or actions that should be associated with this transition.
5. Save the transition configuration.

Transitions control the flow of the ticket through its lifecycle and can be configured with various conditions and triggers to automate processes.
