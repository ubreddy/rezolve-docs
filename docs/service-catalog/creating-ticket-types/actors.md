---
id: actors
title: Actors
sidebar_label: Actors
description: Documentation for Actors
status: 
whatsPending: 
---


Actors are individuals or groups who play specific roles in the ticket lifecycle. The system supports various actor types to track who is involved in different aspects of a ticket.

### Actor Types
- **Assigned To**: The person responsible for resolving the ticket
- **Requested For**: The person for whom the ticket is being created (the end beneficiary)
- **Watcher**: People who want to monitor the ticket but aren't directly responsible
- **Submitted By**: The person who created the ticket
- **Last Updated By**: The person who most recently modified the ticket

### Actor Integration in Layouts
Actors can be added directly to layouts using the "Add special fields" option, making it easy to include them in your ticket interfaces.

### Actor-Based Conditions
Actors can be used as the basis for conditions at both field and layout levels:
- Show or hide fields based on who is assigned to the ticket
- Make sections editable only for specific actors
- Require additional information when certain actors are involved


![Actors](/img/Service%20Catalog/Actors.png)