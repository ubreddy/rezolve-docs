---
id: using-default-ticket-types
title: Using Default Ticket Types
sidebar_label: Using Default Ticket Types
description: Documentation for Using Default Ticket Types
status: 
whatsPending: 
---


Default ticket types serve as fallback options within the Rezolve.ai Virtual Agent when no specific template match is found for a user's request. This ensures that user interactions always lead to productive outcomes, even when precise intent mapping isn't possible.

### Selecting a Default Ticket Type

- A template must be in the approved state and imported into Creator Studio to be eligible as a default ticket type.
- Default ticket types can only be selected from the ticket type (template) list page.
- Hover over an eligible template name to see the "Set as Default" option.

### How Default Ticket Types Work

- When a user interacts with the Virtual Agent and provides an utterance that should trigger a template, but no specific match is found, the system will automatically trigger the default template instead of returning an error.
- Most organizations typically use a Generic Request template as their default, allowing for the capture of miscellaneous requests that don't fit into more specific categories.

### Benefits of Using Default Ticket Types

- Prevents failed interactions with the Virtual Agent
- Ensures all user requests are captured, even when unclassifiable
- Provides a consistent user experience across all interactions
- Allows for manual recategorization of tickets by agents if needed
