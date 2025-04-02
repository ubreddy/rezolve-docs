---
id: linking-layouts-to-views
title: Linking Layouts to Views
sidebar_label: Layouts to Views
description: Documentation for Linking Layouts to Views
status: 
whatsPending: 
---


### Primary Layouts
The system provides three primary layouts that serve different purposes in the ticket lifecycle:

### Inbox View
- Displays a summary of tickets in a list format
- Shows essential information to help users identify and prioritize tickets
- Typically includes fields like Ticket ID, Status, Priority, and Submission Date
- Allows for quick sorting and filtering of tickets

### Create View
- The interface users interact with when creating a new ticket
- Organizes fields in a logical sequence to guide users through the ticket creation process
- May have multiple sections or steps to break up complex forms
- Can implement conditional logic to show/hide fields based on previous selections

### Detail View
- Provides a comprehensive view of all ticket information
- Includes the complete ticket history and all field values
- Displays notes, attachments, and other supplemental information
- Shows the ticket's current status and available actions

### Mapping Layouts to Views
After creating layouts, you need to link them to the appropriate views in the system:
- Design each layout according to its purpose (Inbox, Create, or Detail)
- Configure field visibility and behavior for each layout
- Use the "Linked Layouts" feature to associate layouts with their corresponding views
- Test each view to ensure fields appear and behave as expected

![Layout View](/img/Service%20Catalog/layout_view.png)


![Create View](/img/Service%20Catalog/Create_View.png)


![Detail View](/img/Service%20Catalog/Detail_View.png)