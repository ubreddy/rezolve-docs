---
id: rules
title: Rules
sidebar_label: Rules
description: Documentation for Rules
status: 
whatsPending: 
---

Rules in workflows determine the conditions under which certain actions occur or transitions are available. They provide the logic that governs ticket movement through the workflow.

![Rule Example](/img/Service%20Catalog/rule1.png)

## Condition Rules

Condition rules determine when certain actions can be taken or transitions are available:

- **Field-Based Conditions**: Rules based on the values of specific fields (e.g., Priority = High)
- **Time-Based Conditions**: Rules that trigger after specific time periods (e.g., If ticket remains in this state for > 24 hours)
- **User-Based Conditions**: Rules based on user roles or attributes (e.g., Only IT Managers can perform this transition)
- **Logical Operators**: Combining multiple conditions with AND/OR operators for complex rules

## Action Rules

Action rules specify what happens automatically at certain points in the workflow:

- **Field Updates**: Automatically update field values when entering a state or during a transition
- **Notifications**: Send emails or alerts to relevant stakeholders
- **Queue Assignments**: Move the ticket to a different queue or team
- **Actor Assignments**: Change the assigned agent or add watchers


![Rule Example](/img/Service%20Catalog/rule3.png) 

## Creating and Managing Rules

To create a rule in a workflow:

1. Select the state or transition where you want to apply the rule
2. Click "Add Rule" in the properties panel
3. Select the rule type (condition or action)
4. Configure the rule parameters and conditions
5. Specify the actions to be taken when the rule conditions are met
6. Save the rule configuration

Rules can be combined to create sophisticated automation that reduces manual work and ensures consistency in ticket handling.
