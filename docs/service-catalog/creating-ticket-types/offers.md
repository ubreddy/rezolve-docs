---
id: offers
title: Offers
sidebar_label: Offers
description: Documentation for Offers
status: 
whatsPending: 
---


Offers are the user-facing instances of your templates that appear in the ticketing UI. They allow you to create multiple variations of a template to serve different needs or audiences.

### Offer Creation
Each template can have multiple offers, each configured for specific purposes or user groups:
- Define the basic template structure with fields and layouts
- Create different offers from the same template
- Configure each offer with specific field restrictions or configurations

### Offer Example
For an "Employee Onboarding" template, you might create different offers such as:
- HR Onboarding
- IT Employee Onboarding
- Banking Employee Onboarding

Each offer is derived from the same template but may show different fields or have different configurations across the layouts (Inbox/Create/Detail).

### Offer Benefits
- **Efficiency**: Create multiple offerings from a single template design
- **Consistency**: Maintain consistent processes across related ticket types
- **Flexibility**: Customize offers for different departments or purposes
- **Reduced Effort**: Avoid recreating similar templates from scratch

### Offer Integration with Bot
Offers can be integrated with the bot interface by:
- Defining keywords/phrases that trigger the offer
- Providing context information to help the bot understand when to suggest the offer
- Adding field descriptions to guide the bot in collecting the right information

### Audience Targeting
Offers can be assigned to specific audiences to control who can see and use them:
- Create audiences based on groups, roles, attributes, or individual users
- Assign the audience to the offer
- Only members of that audience will see the offer in the ticketing console

![Offers](/img/Service%20Catalog/Offers.png)