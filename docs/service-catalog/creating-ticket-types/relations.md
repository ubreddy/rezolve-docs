---
id: relations
title: Relations
sidebar_label: Relations
description: Documentation for Relations
status: 
whatsPending: 
---

Relations establish connections between different tickets, allowing for the creation of parent-child relationships and dependencies.

### Relation Configuration
In the Relations tab, you can configure:

### Basic Relation Properties
- **Name**: Descriptive label for the relation
- **Template Left/Right**: The templates being connected
- **Offer Left/Right**: The specific offers being connected

### Relation Types
- **Relations Left**: Text descriptions of the left-to-right relationship
- **Relations Right**: Text descriptions of the right-to-left relationship
- **Default Relations**: The standard relationship type in each direction

### Cardinality
Defines how many tickets can be related:
- **1-1**: One ticket can relate to only one other ticket
- **1-n**: One ticket can relate to many tickets
- **n-1**: Many tickets can relate to one ticket
- **M-n**: Many tickets can relate to many tickets

### Relation Applications

### Parent-Child Relations
- Establish hierarchical structures between tickets
- Track dependencies for complex requests
- Roll up status information to parent tickets

### Related Issues
- Connect similar or related problems
- Create references between different aspects of a larger issue
- Track related changes across systems

### Process Sequences
- Define ordered sequences of tickets
- Establish prerequisites before a ticket can progress
- Create automated workflows spanning multiple tickets

![relations](/img/Service%20Catalog/relations.png)

### Relation Benefits
- **Visibility**: Provides clear connections between related issues
- **Traceability**: Creates audit trails across complex processes
- **Coordination**: Facilitates management of interdependent work
- **Reporting**: Enables hierarchical reporting on related tickets


![relation_config](/img/Service%20Catalog/relation_config.png)


![relation_cardianlity](/img/Service%20Catalog/relation_cardianlity.png)