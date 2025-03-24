---
id: guest-usage
title: Guest Usage Guide
sidebar_label: Usage Guide
description: Documentation for Guest Usage Guide
status: 
whatsPending: 
---

# Guest Usage Guide

## Overview

The Guest User Bot feature in Rezolve.ai provides a streamlined way to extend virtual agent capabilities to external users without requiring them to be registered members of your tenant. This functionality is particularly valuable for organizations that need to provide support services to contractors, temporary workers, external partners, or customers who require occasional assistance but don't warrant full tenant membership.

The Guest User Bot delivers the core functionality of the Virtual Agent through a special access link, creating a balance between accessibility and security.


## Enabling Guest User Access

Administrators can easily enable and manage guest user access through a straightforward configuration process:

1. Navigate to "Virtual Agent Management" in the Rezolve.ai admin portal
2. Select "Settings" from the navigation menu
3. Locate the "Guest Access" section
4. Toggle the "Guest Enabled" switch to the ON position
5. A Guest URL will be automatically generated
6. Use the "Copy Guest URL" button to copy the access link to share with external users

This specialized URL provides a direct path to the bot interface without requiring tenant credentials, while still maintaining appropriate security boundaries.

## Guest User Experience

When external users access the Guest User Bot through the provided link, they experience a streamlined onboarding process:

1. The user clicks the Guest URL shared by the organization
2. They are presented with a simplified authentication screen
3. The user must provide basic identification information:
   - Name (for personalized interactions)
   - Email address (for communication and ticket association)
4. After submitting this information, they gain immediate access to the Virtual Agent interface

This minimal authentication process ensures that guest interactions can be properly tracked and managed while eliminating the friction of a full registration process.

## Available Functionality

The Guest User Bot provides external users with core support capabilities while maintaining appropriate access boundaries:

### Question Answering

Guests can ask questions and receive answers from knowledge sources that have been configured for guest access. This allows organizations to share appropriate information while keeping sensitive content protected.

### Ticket Creation

External users can create support tickets through the Guest User Bot, allowing them to request assistance with issues that can't be resolved through self-service. These tickets are properly associated with the guest's provided email address for communication and tracking.

### Live Chat with Agents

When self-service options are insufficient, guests can escalate to live chat with support agents. This creates a seamless transition from automated to human support while maintaining the conversation context.

## Security and Administration

The Guest User Bot includes several important security features:

- **Configurable Access**: Administrators can enable or disable guest access as needed
- **Limited Knowledge Exposure**: Organizations can control which knowledge sources are available to guest users
- **Identified Interactions**: All guest interactions are associated with the provided name and email
- **Audit Trails**: Guest user activities are logged for security and compliance purposes
- **Temporary Access**: The guest URL can be regenerated if needed to revoke previous access

## Implementation Examples

### Contractor Support

A company can provide the Guest User Bot link to temporary contractors who need to ask IT questions or request basic services without requiring full tenant membership or access to internal systems.

### Customer Service

A product team can share the Guest User Bot with beta testers or new customers, allowing them to get support during the initial adoption phase without needing to create accounts in the company's tenant.

### Partner Collaboration

Organizations can offer the Guest User Bot to external partners who occasionally need support with shared systems or processes, maintaining a clear boundary between partner and internal support channels.

## Best Practices

To maximize the value of the Guest User Bot while maintaining security:

- **Periodically Refresh Guest URLs**: Generate new guest access links periodically for improved security
- **Clear Knowledge Boundaries**: Carefully consider which knowledge content should be accessible to guests
- **Monitor Guest Usage**: Regularly review guest interactions to identify patterns and improvement opportunities
- **Set Expectations**: Clearly communicate to guests what types of questions and requests are appropriate
- **Define Escalation Paths**: Establish clear protocols for when and how guest issues should be escalated to human agents

## Conclusion

The Guest User Bot provides a flexible, secure way to extend Rezolve.ai's powerful virtual agent capabilities to users outside your organization's formal membership boundaries. By offering a streamlined access method that balances convenience with appropriate security controls, organizations can provide consistent support experiences to a wider audience without compromising their tenant security or requiring cumbersome registration processes.

This capability is particularly valuable in today's collaborative business environment, where support often needs to extend beyond traditional organizational boundaries.
