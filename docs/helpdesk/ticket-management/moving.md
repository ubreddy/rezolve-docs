---
id: moving
title: Moving Tickets
sidebar_label: Moving Tickets
description: Documentation for Moving Tickets
status: 
whatsPending: 
---

# Moving Tickets

The **Move Ticket** functionality allows users to reclassify tickets when they have been assigned an incorrect category or issue type. This ensures that the ticket follows the correct workflow, is assigned to the appropriate team, and maintains proper service-level agreements (SLAs).

## Steps to Move a Ticket

1. **Choose Issues**
   a. Select the ticket(s) that need to be moved to a different type.
2. **Choose Operation**
   a. Select the "Move Ticket" option.
3. **Operation Details**
   a. **Select Destination Type:**
      i. Choose the correct category or issue type the ticket should be moved to.
      ii. The system warns that different issue types may have different fields and workflows.
4. **Field Mapping**
   a. Some fields may not exist in the new ticket type.
   b. Users need to map fields from the current type to the new type to retain relevant information.
   c. Mandatory fields such as Description, Category, Domain, Change Type, etc., must be correctly mapped.
5. **Confirm**
   a. Review the changes and confirm the ticket move.

![Ticket Moving Interface](/img/Helpdesk/move_tickets.jpg)

## Key Considerations

- **Data Integrity**: Some fields may not be available in the new ticket type, potentially causing data loss.
- **Workflow Changes**: Different ticket types may have different workflows and assigned teams.
- **User Permissions**: Only authorized users may have the ability to move tickets.

![Bulk Ticket Moving](/img/Helpdesk/Bulk_Move.jpg)

