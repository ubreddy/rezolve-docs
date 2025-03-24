---
id: teams
title: Teams Setup
sidebar_label: Setup
description: Documentation for Teams Setup
status: 
whatsPending: 
---

# Teams Setup

## Overview

Rezolve.ai offers comprehensive Microsoft Teams integration options that allow organizations to seamlessly incorporate the virtual agent and additional support functionality directly into their Teams environment. This integration creates a unified experience where employees can access support services without leaving their primary collaboration platform.

The Teams integration can be configured in multiple ways to accommodate different organizational needs, security requirements, and deployment preferences.


## Integration Options

### Bot-Only Integration

The simplest integration approach involves sharing the Rezolve.ai bot application ID with employees, who can then add the bot to their Teams environment individually:

1. Rezolve.ai provides the organization with a bot application ID
2. This ID is shared with employees through internal communications
3. Employees add the bot to their Teams environment manually
4. The bot appears as a contact that users can message directly

This lightweight approach requires minimal IT involvement but puts the responsibility for installation on individual users, which may result in inconsistent adoption.

### Custom Package Deployment

For a more comprehensive and controlled integration, Rezolve.ai creates a custom Teams application package tailored to the organization's specific requirements:

Rezolve.ai develops a customized Teams application package including:
- The virtual agent bot
- Additional tabs and functionality as needed
- Organization-specific branding and naming
- Preconfigured permissions and scopes

The package includes:
- Custom thumbnail/icon
- Manifest file with JSON code
- Bot application ID and required configurations
- Tab configurations for additional functionality

The client's IT team deploys this package to their Teams app portal. Once deployed, the application becomes available for distribution within the organization.

This approach provides a consistent, branded experience with the exact functionality needed by the organization.

## Deployment Methods

### Tenant Admin Deployment

After the Teams application package is deployed to the organizational app catalog, tenant administrators gain powerful deployment options:

#### Individual User Deployment:
- Tenant admins can install the Rezolve.ai Teams app for specific employees
- This is managed through the Admin app
- Ideal for phased rollouts or role-based deployments

#### Bulk Deployment During AAD Import:
- When importing users from Azure Active Directory
- Option to automatically install the Teams app for all imported employees
- Creates immediate, organization-wide availability
- Can be configured during the initial tenant setup

### Manual User Installation

For organizations preferring user-driven installation:
- The Teams application package can be shared locally
- Users install the package manually following provided instructions
- This approach gives users control over which tools they add to their workspace

## Customization Options

The Teams application package can be extensively customized to meet specific organizational needs:

### Feature Modules
- **Notification Tab**: Dedicated area for users to view and manage notifications
- **Live Chat Tab**: Specialized interface for live chat agents to handle conversations
- **Ticket Tab**: Comprehensive ticketing interface for support agents
- **Bot Access**: Core conversational bot functionality
- **Quick Commands**: Shortcut commands for frequent actions

### Branding Elements
- **Bot Name**: Custom name to align with organizational branding or purpose
- **Thumbnail/Icon**: Custom visual identity for the application
- **Color Schemes**: Alignment with organizational brand colors
- **Welcome Messages**: Customized initial user experience



## Implementation Process

### Step 1: Requirements Gathering
- Rezolve.ai works with the client to determine required functionality
- Identify which components should be included in the Teams package
- Establish branding requirements and naming conventions
- Define deployment strategy (admin-driven vs. user choice)

### Step 2: Package Creation
- Rezolve.ai creates the customized Teams application package
- Includes all requested modules and custom branding
- Generates appropriate manifest file with required configurations
- Prepares deployment documentation

### Step 3: IT Deployment
- Client IT team receives the package from Rezolve.ai
- IT deploys the package to the organizational Teams app catalog
- Verify successful deployment and availability
- Address any integration issues with Rezolve.ai support

### Step 4: User Distribution
- Tenant administrators deploy the app to users based on strategy:
  - Individual assignments for targeted deployment
  - Bulk deployment during AAD import for wide availability
  - User self-installation for opt-in approach
- Internal communications inform users about availability and benefits

### Step 5: Adoption Monitoring
- Track installation and usage metrics
- Gather user feedback
- Make adjustments to deployment strategy as needed

## Best Practices

- **Phased Rollout**: Consider deploying to pilot groups before organization-wide rollout
- **Clear Documentation**: Provide users with guidance on how to use the Teams integration
- **Internal Champions**: Identify power users who can advocate for and support others
- **Feedback Channels**: Establish ways for users to provide input on the integration
- **Regular Updates**: Work with Rezolve.ai to keep the Teams package current with new features

## Conclusion

The Rezolve.ai Teams integration provides a flexible, powerful way to bring AI-powered support directly into the collaboration platform where employees spend much of their workday. By offering multiple deployment options and extensive customization possibilities, organizations can create an integration strategy that aligns with their IT governance approach, user preferences, and support objectives.

Whether deploying to specific support teams, rolling out across the organization, or allowing user-driven adoption, the Teams integration ensures that employees have convenient access to support services without disrupting their workflow. This seamless experience increases adoption, improves support efficiency, and enhances the overall employee experience with support services.
