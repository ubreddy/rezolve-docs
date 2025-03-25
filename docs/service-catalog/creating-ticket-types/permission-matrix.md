---
id: permission-matrix
title: Permission Matrix
sidebar_label: Matrix
description: Documentation for Permission Matrix
status: 
whatsPending: 
---

The Matrix feature enables complex cross-referencing of fields to create efficient relationships between different aspects of tickets.

### Matrix Configuration
A matrix consists of:
- **Rows**: Typically represent one dimension of data (e.g., locations)
- **Columns**: Represent a second dimension (e.g., services)
- **Cells**: Intersection points that define relationships
- **Values**: Data or options available at each intersection

### Matrix Applications

### Service-Location Matrix
- Rows represent physical locations
- Columns represent available services
- Cells indicate which services are available at which locations
- Used to automatically route tickets based on service and location

### Role-Permission Matrix
- Rows represent user roles
- Columns represent ticket actions
- Cells define whether a role can perform an action
- Enforces permission structures across the ticketing system

### Product-Support Matrix
- Rows represent products
- Columns represent support levels
- Cells define SLAs or available support options
- Determines appropriate response times and agent assignments

### Matrix Benefits
- **Efficiency**: Eliminates the need for complex conditional logic
- **Visualization**: Provides a clear overview of relationships
- **Maintenance**: Simplifies updates to relationship structures
- **Consistency**: Ensures uniform application of rules across tickets
