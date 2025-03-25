---
id: workflow-editor
title: Workflow Editor
sidebar_label: Workflow Editor
description: Documentation for Workflow Editor
status: 
whatsPending: 
---


The Workflow Editor is a visual interface for creating and managing ticket workflows. It provides a drag-and-drop environment where you can design complex workflows without coding.

## Interface Components

The Workflow Editor interface consists of:

- **Canvas**: The main area where you design your workflow by placing and connecting states
- **Toolbox**: Contains the elements you can add to your workflow (states, transitions, etc.)
- **Properties Panel**: Displays the properties of the selected workflow element for editing
- **Validation Panel**: Shows errors or warnings in your workflow design

## Creating a New Workflow

To create a new workflow:

1. Navigate to the Service Catalog > Workflows section
2. Click "Create New Workflow"
3. Provide a name and description for the workflow
4. Use the visual editor to design your workflow:
   - Add states by dragging them from the toolbox onto the canvas
   - Connect states with transitions by drawing lines between them
   - Configure each state and transition by selecting it and editing its properties

## Workflow Validation

The editor automatically validates your workflow and displays any issues in the Validation Panel.

## Managing Workflow Versions

The Workflow Editor supports versioning to manage changes to workflows:

- **Version History**: Track changes made to the workflow over time
- **Publish**: Activate a new version of the workflow
- **Rollback**: Revert to a previous version if needed

## Template Association

Once a workflow is created, it can be associated with ticket templates:

1. Navigate to the template configuration
2. In the template settings, select the workflow from the dropdown
3. Save the template to apply the workflow

The workflow will now govern how tickets move through their lifecycle when created using that template.

The Workflow Editor provides a powerful yet user-friendly interface for designing and implementing the business processes that govern ticket handling, ensuring consistency and efficiency in service delivery.
